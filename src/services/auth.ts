import { LoginPayload, LoginResponse } from '@/types'
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const apiPostLogin = ({ email, password }: LoginPayload): Promise<LoginResponse> => (
  api.post('/login', { user: { email, password }})
)