import axios from "axios"

export const API = {
  getStudents: (uid) => axios.get(`/${uid}.json`),
  getStudentsInfo: (uid, id) => axios.get(`/${id}.json`),
  postStudents: (data) => axios.post(`${uid}.json`, data),
  deleteStudent: (id) => axios.delete(`/students/${id}.json`),
  editStudent: (id) => axios.put(`/students/${id}.json`)
}