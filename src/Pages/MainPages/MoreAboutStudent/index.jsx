import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { API } from '../../../API'
import { IoCaretBack } from 'react-icons/io5'
import cls from './More.module.scss'

const MoreAboutStudent = () => {
  const [ base, setBase ] = React.useState(null)

  const { id } = useParams()

  const uid = localStorage.getItem('uid')

  const navigate = useNavigate()

  React.useEffect(() => {
    API.getStudentsInfo(uid, id)
      .then(res => {
        setBase(res.data)
      })
  }, [id])
  return (
    <div className={cls.more}>
      <button
        onClick={() => navigate('/')}
      >
        <IoCaretBack />
      </button>
      <img 
        src={base?.image}
        alt="" 
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Age</th>
            <th>Class</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Name">{base?.lastName} {base?.firstName.length > 15 ? `${base?.firstName.slice(0, 15)}...` :  base?.firstName}</td>
            <td data-label="ID">{id}</td>
            <td data-label="Age">{base?.age}</td> 
            <td data-label="Class">{base?.grade} {base?.group}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default MoreAboutStudent