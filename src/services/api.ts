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

api.interceptors.request.use(async (config) => {
  const token = await localStorage.getItem('userToken')

  if (token) {
    config.headers.Authorization = token
  }

  return config
})

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && (error.response.status === 401 || error.response.status === 403)) {
      return Promise.reject(error)
    }
  }
)


export default api
