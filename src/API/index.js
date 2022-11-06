import axios from "axios"

export const API = {
  getStudents: (uid) => axios.get(`/${uid}.json`),
  getStudentsInfo: (uid, id) => axios.get(`/${uid}/${id}.json`),
  postStudents: (uid, data) => axios.post(`/${uid}.json`, data),
  deleteStudent: (uid, id) => axios.delete(`/${uid}/${id}.json`),
  editStudent: (uid, id, data) => axios.put(`/${uid}/${id}.json`, data)
}