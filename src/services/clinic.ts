import { Clinic } from "@/types/clinic";
import api from "./api";
import { Room } from "@/types/room";

export const apiGetClinics = async (): Promise<Clinic[]> => {
  try {
    const response = await api.get<Clinic[]>('/clinics');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const apiGetClinicRooms = async (clinicId: string | undefined): Promise<Room[]> => {
  try {
    const response = await api.get<Room[]>(`/clinics/${clinicId}/rooms`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
