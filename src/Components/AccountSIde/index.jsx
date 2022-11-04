import React from 'react'
import { handleSignOut } from '../../Firebase'
import { useAuth } from '../../Providers/useAuth'
import cls from './AccountSide.module.scss'

const AccountSide = () => {
  const { users } = useAuth()

  return (
    <div className={cls.accountSide}>
      <div className={cls.name}>
        <img 
          src={users?.photo ? users?.photo : 'https://cdn-icons-png.flaticon.com/512/194/194936.png'} 
          alt="user" 
        />
        <h3>{users?.name}</h3>
      </div>
      <span></span>
      <button
        onClick={() => {
          handleSignOut()
          window.location.reload()
        }}
      >
        Leave from account
      </button>
    </div>
  )
}

export default AccountSide