import { LoginPayload, LoginResponse } from '@/types'
import axios from 'axios'

// TODO: Fix this bullshit 2
const api = axios.create({
  // baseURL: 'http://localhost:3000/',
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const apiPostLogin = ({ email, password }: LoginPayload): Promise<LoginResponse> => (
  api.post('/login', { user: { email, password }})
)