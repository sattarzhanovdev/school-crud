import axios from "axios"

export const API = {
  getStudents: () => {
    return axios.get('/students.json')
  },
  getStudentsInfo: (id) => {
    return axios.get(`/students/${id}.json`)
  },
  postStudents: (data) => {
    return axios.post('/students.json', data)
  },
  deleteStudent: (id) => {
    return axios.delete(`/students/${id}.json`)
  },
  editStudent: (id) => {
    return axios.put(`/students/${id}.json`)
  }
}