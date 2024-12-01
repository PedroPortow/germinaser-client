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