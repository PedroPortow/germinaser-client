import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://0.0.0.0:3000/',
  baseURL: 'http://localhost:3000/',
  // baseURL: 'http://192.168.3.5:3000/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api
