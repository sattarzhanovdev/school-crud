import React from 'react'
import cls from './Register.module.scss'
import { AiFillEye, AiFillEyeInvisible, AiOutlineGoogle } from 'react-icons/ai'
import { handleLoginWithEmail, handleLoginWithGoogle, handleRegistWithEmail } from '../../../Firebase'
import { Link } from 'react-router-dom'

const Register = () => {
  const [ inputType, setInputType ] = React.useState('password')
  const [ name, setName ] = React.useState('')
  const [ email, setEmail ] = React.useState('')
  const [ password, setPassword ] = React.useState('')

  const error = localStorage.getItem('error')

  return (
    <div className={cls.login}>
      <div className={cls.banner}>
        
      </div>
      <div className={cls.login__block}>
        <h3>Register</h3>
        <div className={cls.login__email}>
          <form>
            <div>
              <input 
                type="email" 
                placeholder='Enter your name' 
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div>
              <input 
                type="email" 
                placeholder='Enter your email' 
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input 
                type={inputType}
                placeholder="Enter your password" 
                value={password}
                onChange={e => setPassword(e.target.value)}
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
                  handleRegistWithEmail(email, password, name)
                  setEmail('')
                  setPassword('')
                }}
              >
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