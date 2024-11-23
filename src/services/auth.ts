import { LoginPayload, LoginResponse } from '@types/auth.ts'
import api from './api'

export const apiPostLogin = ({ email, password }: LoginPayload): Promise<LoginResponse> => (
  api.post('/login', { user: { email, password }})
)