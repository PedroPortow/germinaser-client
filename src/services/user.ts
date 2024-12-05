/* eslint-disable @typescript-eslint/no-explicit-any */
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