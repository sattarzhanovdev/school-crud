import React from 'react'
import cls from './Login.module.scss'
import { AiFillEye, AiFillEyeInvisible, AiOutlineGoogle } from 'react-icons/ai'
import { handleLoginWithEmail, handleLoginWithGoogle, handleRegistWithEmail } from '../../../Firebase'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const Login = () => {
  const [ inputType, setInputType ] = React.useState('password')

  const {
    reset, 
    register,
    handleSubmit
  } = useForm()

  const handleLogin = (data) => {
    handleLoginWithEmail(data.email, data.password)

    reset()
  }

  return (
    <div className={cls.login}>
      <div className={cls.banner}>
        
      </div>
      <div className={cls.login__block}>
        <h3>Login</h3>
        <div className={cls.login__email}>
          <form  onSubmit={handleSubmit((data) => {
            handleLogin(data)
            reset()
          })}>
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
              <button
                onClick={e => {
                  e.preventDefault()
                  handleLogin()
                }}
              >
                Login
              </button>
            </div>
            <p></p>
          </form>
        </div>
        <span className={cls.line}></span>
        <div className={cls.login__google}>
          <button
            onClick={() => {
              handleLoginWithGoogle()
            }}
          >
            <span><AiOutlineGoogle /></span> Sign in with Google
          </button>
        </div>
        <div className={cls.have__account}>
          <p>Haven't you an account? <Link to={'/auth/register'}>Register</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Login