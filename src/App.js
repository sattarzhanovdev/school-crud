import React from 'react'
import * as firebase from 'firebase/app'
import { firebaseConfig } from './Firebase'
import { getAuth } from 'firebase/auth'
import axios from 'axios'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { AuthPages } from './Pages/AuthPages'
import './App.scss'
import { useAuth } from './Providers/useAuth'
import { MainPages } from './Pages/MainPages'
import MoreAboutStudent from './Pages/MainPages/MoreAboutStudent'

export const app = firebase.initializeApp(firebaseConfig)
export const auth = getAuth(app)
axios.defaults.baseURL = 'https://school-crud-4b96d-default-rtdb.asia-southeast1.firebasedatabase.app'

const App = () => {
  const { users } = useAuth()

  const navigate = useNavigate()

  React.useEffect(() => {
    localStorage.clear()
    // API.postStudents({
    //   image: 'https://d2jyir0m79gs60.cloudfront.net/news/images/successful-college-student-lg.png',
    //   firstname: 'Erlan',
    //   lastname: 'Kambarov',
    //   age: 19,
    //   group: 'A',
    //   grade: '11'
    // })
    if(users){
      navigate('/')
      localStorage.setItem('uid', users.id)
    }else{
      navigate('/auth/login')
    }
  }, [users])
  

  return (
    <div>
      <Routes>
        <Route 
          path='*'
          element={<MainPages.Pages.Home />}
        /> 
        <Route 
          path='/'
          element={<MainPages.Pages.Home />}
        /> 
        <Route 
          path='/admin'
          element={<MainPages.Pages.Admin />}
        /> 
        <Route 
          path='/auth/login'
          element={<AuthPages.Pages.Login />}
        /> 
        <Route 
          path='/auth/register'
          element={<AuthPages.Pages.Register />}
        /> 
        <Route 
          path='/more/:id'
          element={<MoreAboutStudent />}
        /> 
      </Routes>
    </div>
  )
}

export default App