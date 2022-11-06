import React from 'react';
import cls from './EditStudent.module.scss'
import { AiOutlineClose } from 'react-icons/ai'
import { useForm } from 'react-hook-form';
import { API } from '../../API';

const EditStudent = ({id, active, setActive}) => {
  const [ base, setBase ] = React.useState(null)
  const uid = localStorage.getItem('uid')

  const {
    register,
    reset,
    handleSubmit
  } = useForm()

  React.useEffect(() => {
    API.getStudentsInfo(uid, id)
      .then(res => {
        const result = Object.entries(res.data)
          .map(([id, item]) => {
            return {
              item
            } 
          })
        setBase(result[0].item)
      })
  }, [])

  console.log(base && base);

  const handleAdd = (data) => {
    API.editStudent(uid, id, data)
    reset()
  }
  return (
    <div className={active ? cls.add__active : cls.add__none}>
      <div className={cls.close}>
        <li
          onClick={() => setActive(false)}
        >
          <AiOutlineClose />
        </li>
      </div>
      <form onSubmit={handleSubmit(data => handleAdd(data))}>
        <div>
          <p>Image</p> 
          <input 
            type="url" 
            placeholder={base?.image}
            {...register('image')}
          />
        </div>
        <div>
          <p>First name</p> 
          <input 
            type="text" 
            placeholder={base?.firstName}
            {...register('firstName')}
          />
        </div>
        <div>
          <p>Last name</p> 
          <input 
            type="text" 
            placeholder={base?.lastName}
            {...register('lastName')}
          />
        </div>
        <div>
          <p>Age</p> 
          <input 
            type="text" 
            placeholder={base?.age}
            {...register('age')}
          />
        </div>
        <div>
          <p>Group</p> 
          <input 
            type="text" 
            placeholder={base?.group}
            {...register('group')}
          />
        </div>
        <div>
          <p>Class</p> 
          <input 
            type="text" 
            placeholder={base?.grade}
            {...register('grade')}
          />
        </div>
        <div>
          <button type='submit'>
            Edit
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditStudent