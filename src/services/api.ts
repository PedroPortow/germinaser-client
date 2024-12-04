import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/',
  // baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('userToken')

  if (token) {
    config.headers.Authorization = token
  }

  return config
})

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && (error.response.status === 401 || error.response.status === 403)) {
      localStorage.removeItem('userToken');

      window.location.href = '/login';
    }

    return Promise.reject(error);
  }
)


export default api
