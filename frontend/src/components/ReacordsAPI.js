import axios from 'axios';
const mockData = process.env.REACT_APP_RECORDS_API_URL || "https://62641f9098095dcbf92bc5da.mockapi.io"
export const getAll = () =>
  axios.get(`${mockData}/islaidos`)

export const create = (body) =>
  axios.post(`${mockData}/islaidos`, body)

export const update = (id, body) =>
  axios.put(`${mockData}/islaidos/${id}`, body)

export const remove = (id) =>
  axios.delete(`${mockData}/islaidos/${id}`)
 