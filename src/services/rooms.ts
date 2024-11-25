import api from './api'

export const apiGetClinicRooms = (clinicId: number) => api.get(`/clinics/${clinicId}/rooms`)

/*
export const apiCreateRoom = async (roomData) =>
  api.post(`/rooms`, {
    room: roomData,
  })

export const apiPostLogin = ({ email, password }: LoginPayload): Promise<LoginResponse> => (
  api.post('/login', { user: { email, password }})
)

export const apiUpdateRoom = async (roomId, roomData) =>
  api.put(`/rooms/${roomId}`, {
    room: roomData,
  })
  */
