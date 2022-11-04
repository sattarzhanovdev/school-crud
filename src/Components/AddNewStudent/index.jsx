import React from 'react'
import { useForm } from 'react-hook-form'
import { API } from '../../API'
import cls from './AddNewStudent.module.scss'

const AddNewStudent = () => {
  const {
    register, 
    handleSubmit, 
    reset,
  } = useForm()

  const addStudent = (data) => {
    API.postStudents(data)
  }

  return (
    <div className={cls.addNewStudent}>
      <h3>
        Add new student
      </h3>
      <form onSubmit={handleSubmit((data) => {
        addStudent(data)
        reset()
      })}>
        <div>
          <input 
            type="url" 
            placeholder='Image' 
            {...register('image')} 
          />
        </div>
        <div>
          <input 
            type="text" 
            placeholder='Firstname' 
            {...register('firstName')} 
          />
        </div>
        <div>
          <input 
            type="text" 
            placeholder='Lastname' 
            {...register('lastName')} 
          />
        </div>
        <div>
          <input 
            type="text" 
            placeholder='Age' 
            {...register('age')} 
          />
        </div>
        <div>
          <input 
            type="text" 
            placeholder='Group' 
            {...register('group')} 
          />
        </div>
        <div>
          <input 
            type="text" 
            placeholder='Class' 
            {...register('grade')} 
          />
        </div>
        <div>
          <button type='submit'>
            Add
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddNewStudent