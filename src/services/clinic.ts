import { Clinic } from "@/types/clinic";
import api from "./api";

export const apiGetClinics = async (): Promise<Clinic[]> => {
  const response = await api.get<Clinic[]>('/clinics');
  return response.data;
};

export const apiGetClinicRooms = (clinicId: number) => api.get(`/clinics/${clinicId}/rooms`)
