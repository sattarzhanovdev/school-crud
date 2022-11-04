import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../Providers/useAuth'
import AccountSide from '../AccountSIde'
import cls from './Navbar.module.scss'

const NavBar = () => {
  const [ sideActive, setSideActive ] = React.useState(false)

  const navigate = useNavigate()

  const { users } = useAuth()
  
  return (
    <div className={cls.container}>
      <div className={cls.navbar}>
        <div className={cls.title}>
          <h2>
            School CRUD
          </h2>
        </div>
        <div className={cls.admin__btn}>
          <button
            onClick={() => {
              navigate('/admin')
            }}
          >
            Go to admin page
          </button>
          <img 
            src={users?.photo ? users?.photo : 'https://cdn-icons-png.flaticon.com/512/194/194936.png'} 
            alt="user" 
            onClick={() => setSideActive(!sideActive)}
          />
          {
            sideActive ? <AccountSide /> : null
          }
        </div>
      </div>
    </div>
  )
}

export default NavBar