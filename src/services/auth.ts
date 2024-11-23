import { LoginPayload } from '@types'
import api from './api'

export const apiPostLogin = ({ email: string }: LoginPayload) => (
  api.post('/login', {user: { email, password },
  })
)