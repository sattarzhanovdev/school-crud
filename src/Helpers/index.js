import React from "react"
import { API } from "../API"

export const GetStudents = () => {
  const [ students, setStudents ] = React.useState(null)
  const [ page, setPage ] = React.useState(1)

  const PAGE_SIZE = 10
  const ALL_PAGE = students?.length / PAGE_SIZE 

  const TOTAL_PAGE = Math.ceil(ALL_PAGE)

  React.useEffect(() => {
    API.getStudents()
      .then(res => {
        const result = Object.entries(res.data)
          .map(([id, item]) => {
            return {
              id, 
              ...item
            }
          })

        setStudents(result)
      })
  }, [])

  return {
    students,
    PAGE_SIZE,
    TOTAL_PAGE,
    page,
    setPage,
  }
}