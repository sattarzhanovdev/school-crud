import React from 'react'
import cls from './Students.module.scss'
import { TiArrowSortedDown } from 'react-icons/ti'
import { drop_list } from '../Utils'
import { FaPlus, FaSearch } from 'react-icons/fa'
import { GetStudents } from '../../Helpers'
import AddNewStudent from '../AddNewStudent'
import ModalWindow from '../ModalWindow'
import { MdOutlineArrowLeft, MdOutlineArrowRight } from 'react-icons/md'

const StudentsAdmin = () => {
  const [ search, setSearch ] = React.useState('')
  const [ val, setVal ] = React.useState('All')
  const [ active, setActive ] = React.useState(false)
  const [ activeModal, setActiveModal ] = React.useState(false)
  const [ activeAdd, setActiveAdd ] = React.useState(false)

  const { students, PAGE_SIZE, TOTAL_PAGE, page, setPage } = GetStudents()


  const filtered = students?.filter(item => {
    return item.firstName.toLowerCase().includes(search.toLowerCase()) || item.lastName.toLowerCase().includes(search.toLowerCase())
  })
  
  function sorting(value){
    if (value === 'name'){
      students?.sort((a, b) => {
        if(a.firstName < b.firstName){
          return 1
        }else{
          return -1
        }
      })
    } 

    if (value === 'age'){
      students?.sort((a, b) => {
        if(a.age < b.age) {
          return 1
        }else{
          return -1
        }
      })
    }  

    if(value === 'group'){
      students?.sort((a, b) => {
        if(a.group > b.group){
          return 1
        }else{
          return -1
        }
      })
    }

    if(value === 'class'){
      students?.sort((a, b) => {
        if(a.grade < b.grade){
          return 1
        }else{
          return -1
        }
      })
    }
  }

  const nextPage = () => setPage(prev => prev + 1)
  const prevPage = () => setPage(prev => prev - 1)
  
  return (
    <div className={cls.container}>
      <div className={cls.students}>
        <div className={cls.up}>
          <div className={cls.left}>
            <h1>
              Students
            </h1>
            <div>
              <input 
                type="text" 
                placeholder='Search here...'
                onChange={e => setSearch(e.target.value)}
              />
              <span><FaSearch /></span>
            </div>
          </div>
          <div className={cls.right}>
            <div className={cls.dropdown}>
              <p>
                Sort by 
                <span 
                  className={cls.value}
                  onClick={() => setActive(!active)}
                >
                  {val}
                </span>
                <span><TiArrowSortedDown /></span>
              </p>
              <div className={active ? cls.options : cls.options__none}>
                {
                  drop_list.map(({id, title, value}) => (
                    <li
                      key={id}
                      onClick={() =>{
                        sorting(value)
                        setVal(value)
                        setActive(!active)
                      }}
                    >
                      {title}
                    </li>
                  ))
                }
              </div>
            </div>
            <button 
              onClick={() => setActiveAdd(!activeAdd)}
            >
              <span><FaPlus /></span> Add new student
            </button>
          </div>
        </div>
        <div className={cls.down}>
          {
            students ? 
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>ID</th>
                  <th>Age</th>
                  <th>Class</th>
                </tr>
              </thead>
              <tbody>
                {
                  filtered ? filtered.map(({id, img, firstName, lastName, age, group, grade}, i) => (
                    <tr 
                      key={i}
                      onClick={() => {
                        setActiveModal(!activeModal)
                        localStorage.setItem('id', id)
                      }}
                    >
                      <td data-label="Name">{lastName} {firstName}</td>
                      <td data-label="ID">{id}</td>
                      <td data-label="Age">{age}</td>
                      <td data-label="Class">{grade} {group}</td>
                    </tr>
                  )) : 
                  students.map(({id, firstName, lastName, age, group, grade}, i) => (
                    <tr 
                      key={i}
                      onClick={() => {
                        setActiveModal(!activeModal)
                        localStorage.setItem('id', id)
                      }}
                    >
                      <td data-label="Name">{lastName} {firstName}</td>
                      <td data-label="ID">{id}</td>
                      <td data-label="Age">{age}</td>
                      <td data-label="Class">{grade} {group}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
            :
            <div className={cls.none}>
              <img 
                src="/img/Saly-17.png" 
                alt="none" 
              />
              <h1>
                Class is empty!
              </h1>
            </div>
          }
        </div>
        {
          students ?
          <div className={cls.pagination}>
            <li>
              <button 
                onClick={prevPage}
                disabled={page === 1}
              >
                <MdOutlineArrowLeft />
              </button>
            </li>
            {
              Array.from({length: TOTAL_PAGE}).map((item, i) => (
                <li
                  key={i}
                >
                  <button
                    className={page == i + 1 ? cls.active : ''}
                    onClick={() => setPage(i + 1)}
                  >
                    {i+1}
                  </button>
                </li>
              ))
            }
            <li>
              <button 
                onClick={nextPage}
                disabled={page === TOTAL_PAGE}
              >
                <MdOutlineArrowRight />
              </button>
            </li>
          </div>
          :
          null
        }
        <ModalWindow active={activeModal} setActive={setActiveModal}/>
        {
          activeAdd ?
          <AddNewStudent />
          :
          null
        }
      </div>
    </div>
  )
}

export default StudentsAdmin