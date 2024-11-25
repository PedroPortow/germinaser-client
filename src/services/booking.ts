import api from "./api";
import { Params } from "@/hooks/queries/useGetDayAvailableTimeslots";
import { Timeslot } from "@/types/timeslot";

interface AvailableSlotsResponse {
  available_slots: Timeslot[];
}

export const apiGetDayAvailableTimeslots = async (params: Params | undefined): Promise<Timeslot[]> => {
  try {
    const response = await api.get<AvailableSlotsResponse>('/bookings/day_available_slots', { params });
    
    return response.data.available_slots;
  } catch (error) {
    console.error( error);
    throw error;
  }
};