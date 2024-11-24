import { User } from '@/types/user'
import api from './api'

export const apiGetCurrentUser = (): Promise<User> => (
  api.get('/current_user')
)