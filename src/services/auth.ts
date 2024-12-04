import api from './api'
import { LoginPayload, LoginResponse } from '@/types'

export const apiPostLogin = ({ email, password }: LoginPayload): Promise<LoginResponse> => (
  api.post('/login', { user: { email, password }})
)