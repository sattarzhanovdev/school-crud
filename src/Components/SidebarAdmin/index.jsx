import React from 'react'
import cls from './Sidebar.module.scss'
import { useNavigate } from 'react-router-dom'
import { BiLogOut } from 'react-icons/bi'
import { handleSignOut } from '../../Firebase'
import { useAuth } from '../../Providers/useAuth'

const SidebarAdmin = ({active, setActive}) => {
  const navigate = useNavigate()
  const { users } = useAuth()
  const [ accActive, setAccActive ] = React.useState(false)

  const flipImage = () => {
    setAccActive(true)

    setTimeout(() => {
      setAccActive(false)
    }, 2000)
  }

  return (
    <div className={active ? cls.sidebar : cls.sidebar__none}>
      <div className={cls.admin__btn}>
        <button
          onClick={() => {
            navigate('/')
          }}
        >
          Back to home page
        </button>
        
        {
          accActive ?
          <button 
            className={cls.leave}
            onClick={() => handleSignOut()}
          >
            <BiLogOut />
          </button> :
          <img 
            src={users ? users?.photo : 'https://cdn-icons-png.flaticon.com/512/194/194936.png'} 
            alt="user"
            onClick={() => flipImage()}
          />
        }
      </div>
    </div>
  )
}

export default SidebarAdmin