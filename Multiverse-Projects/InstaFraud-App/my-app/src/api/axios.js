import axios from 'axios'
const base_URL = 'http://localhost:4000'
export default axios.create({
    // withCredentials: true,
    baseURL: base_URL
})

export const axiosPrivate =  axios.create({
    
    baseURL: base_URL,
    headers:{'Content-Type':'application/json'},
    withCredentials: true
})