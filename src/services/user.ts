/* eslint-disable @typescript-eslint/no-explicit-any */
import { User } from '@/types/user';
import api from './api'

export const apiGetCurrentUser = async () => {
  try {
    const response = await api.get('/current_user')

    return response.data;
  } catch (error) {
    console.error( error);
    throw error;
  }
};

export const apiGetAllUsers = async (params: any) => {
  try {
    const response = await api.get('/users', { params })

    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const apiGetUserRoles = async () => {
  try {
    const response = await api.get('/users/roles')
    
    return response?.data?.roles
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const apiCreateUser = async (params: User) => {
  try {
    const response = await api.post('/users', { user: params })
    
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

// TODO: fix this
export const apiUpdateUser = async (userId: number, params: Record<string, any>) => {
  try {
    const response = await api.put(`/users/${userId}`, { user: params })
    
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

