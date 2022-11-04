import React from 'react'
import cls from './ModalWindow.module.scss'
import { useForm } from 'react-hook-form'
import { API } from '../../API'
import { GetStudents } from '../../Helpers'

const ModalWindow = ({active, setActive}) => {
  const id = localStorage.getItem('id')
  const [ func, setFunc ] = React.useState('')
  const [ data, setData ] = React.useState(null)
  const [ student, setStudent ] = React.useState(null)
  const [ activeEdit, setActiveEdit ] = React.useState(false)

  console.log(student && student);

  const {
    register,
    reset,
    handleSubmit
  } = useForm()

  React.useEffect(() => {
    API.getStudentsInfo(id !== null ? '' : id)
      .then(res => {
        const result = Object.entries(res.data)
          .map(([id, item]) => {
            return {
              item
            }
          })

        setStudent(result[0])
      })

    if (func === 'delete') {
      API.deleteStudent(id)
    }else if (func === 'edit'){
      API.editStudent(id, {})
    }else{
      return undefined
    }
  }, [func, id])

  return (
    <div className={cls.center}>
      <div className={active ? cls.modal__window : cls.modal__window__none}>
        {
          activeEdit ? 
          <form className={cls.edit}>
            <div>
              <h3>FirstName</h3>
              <input 
                type="text"
                placeholder='Firstname'
                value={student?.item.firstName}
                {...register('firstName')} 
              />
            </div>
          </form>
          :
          <div className={cls.delete}>
            <h3>
              Choose variant  
            </h3>       
            <div className={cls.variants}>
              <button 
                onClick={() => {
                  setFunc('delete')
                }}
              >
                Delete
              </button>  
              <button
                onClick={() => {
                  setActiveEdit(!activeEdit)
                }}
              >
                Edit
              </button>  
            </div> 
          </div>
        }
      </div>
    </div>
  )
}

export default ModalWindow