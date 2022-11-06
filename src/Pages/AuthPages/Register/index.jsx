import React from 'react'
import cls from './Register.module.scss'
import { AiFillEye, AiFillEyeInvisible, AiOutlineGoogle } from 'react-icons/ai'
import { handleLoginWithGoogle, handleRegistWithEmail } from '../../../Firebase'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const Register = () => {
  const [ inputType, setInputType ] = React.useState('password')

  const error = localStorage.getItem('error')

  const {
    reset,
    register,
    handleSubmit,
  } = useForm()

  const handleRegister = (data) => {
    handleRegistWithEmail(data.email, data.password, data.name)
    console.log(data);
    reset()
  }

  return (
    <div className={cls.login}>
      <div className={cls.banner}>
        
      </div>
      <div className={cls.login__block}>
        <h3>Register</h3>
        <div className={cls.login__email}>
          <form onSubmit={handleSubmit(data => handleRegister(data))}>
            <div>
              <input 
                type="name" 
                placeholder='Enter your name' 
                {...register('name')}
                
              />
            </div>
            <div>
              <input 
                type="email" 
                placeholder='Enter your email' 
                {...register('email')}
              />
            </div>
            <div>
              <input 
                type={inputType}
                placeholder="Enter your password" 
                {...register('password')}
              />
              <span
                onClick={() => setInputType(inputType === 'password' ? 'text' : 'password')}
              > 
                {
                  inputType === 'password' 
                  ? <AiFillEyeInvisible /> 
                  : <AiFillEye />
                }
              </span>
            </div>
            <div>
              <button type='submit'>
                Register
              </button>
            </div>
            <p>{error && error}</p>
          </form>
        </div>
        <span className={cls.line}></span>
        <div className={cls.login__google}>
          <button
            onClick={() => {
              handleLoginWithGoogle()
            }}
          >
            <span><AiOutlineGoogle /></span> Sing up with Google
          </button>
        </div>
        <div className={cls.have__account}>
          <p>Have you an account? <Link to={'/auth/login'}>Login</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Register