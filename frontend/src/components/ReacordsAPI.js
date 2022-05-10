import axios from 'axios';
const mockData = process.env.REACT_APP_RECORDS_API_URL || "http://localhost:8080/api"

// "jdbc:h2:file:/data/demo"
//  nuoroda i moki
// https://62641f9098095dcbf92bc5da.mockapi.io
// 
export const getAll = () =>
  axios.get(`${mockData}/amounts`)

export const create = (body) =>
  axios.post(`${mockData}/amounts`, body)

export const update = (id, body) =>
  axios.put(`${mockData}/amounts/${id}`, body)

export const remove = (id) =>
  axios.delete(`${mockData}/amounts/${id}`)
 