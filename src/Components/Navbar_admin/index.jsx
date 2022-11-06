import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../Providers/useAuth'
import AccountSide from '../AccountSIde'
import SidebarAdmin from '../SidebarAdmin'
import cls from './Navbar.module.scss'

const NavBarAdmin = () => {
  const [ sideActive, setSideActive ] = React.useState(false)
  const [ active, setActive ] = React.useState(false)

  const navigate = useNavigate()
  const { users } = useAuth()
  
  return (
    <div className={cls.container}>
      <div className={cls.navbar}>
        <div className={cls.logo}>
          <Link to={'/'}>
            <img 
              src="/img/logo.png" 
              alt="logo"
            />
          </Link>
        </div>
        <div className={cls.admin__btn}>
          <button
            onClick={() => {
              navigate('/')
            }}
          >
            Back to home page
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
        <div className={cls.bars}>
          <li
            onClick={() => {
              setActive(!active)
            }}
          >
            <FaBars />
          </li>
        </div>
      </div>
      <SidebarAdmin active={active} setActive={setActive} />
    </div>
  )
}

export default NavBarAdmin