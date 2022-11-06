import React from 'react';
import cls from './AddNewStudent.module.scss'
import { AiOutlineClose } from 'react-icons/ai'
import { useForm } from 'react-hook-form';
import { API } from '../../API';

const AddNewStudent = () => {
  const active = true
 
  const {
    register,
    reset,
    handleSubmit
  } = useForm()

  const handleAdd = (data) => {
    API.postStudents(data)
    reset()
  }
  return (
    <div className={active ? cls.add__active : cls.add__none}>
      <div className={cls.close}>
        <li>
          <AiOutlineClose />
        </li>
      </div>
      <form onSubmit={handleSubmit(data => handleAdd(data))}>
        <div>
          <p>Image</p> 
          <input 
            type="url" 
            placeholder='Image URL' 
            {...register('image')}
          />
        </div>
        <div>
          <p>First name</p> 
          <input 
            type="text" 
            placeholder='First name' 
            {...register('firstName')}
          />
        </div>
        <div>
          <p>Last name</p> 
          <input 
            type="text" 
            placeholder='Last name' 
            {...register('lastName')}
          />
        </div>
        <div>
          <p>Age</p> 
          <input 
            type="text" 
            placeholder='Age' 
            {...register('age')}
          />
        </div>
        <div>
          <p>Group</p> 
          <input 
            type="text" 
            placeholder='Group' 
            {...register('group')}
          />
        </div>
        <div>
          <p>Class</p> 
          <input 
            type="text" 
            placeholder='Class' 
            {...register('grade')}
          />
        </div>
        <div>
          <button>
            Add
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddNewStudent