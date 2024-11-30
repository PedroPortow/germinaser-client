/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "./api";
import { Params } from "@/hooks/queries/useGetDayAvailableTimeslots";
import { Booking, CreateBookingParams, GetBookingsResponse } from "@/types/booking";
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

export const apiGetBookings = async (params: any): Promise<GetBookingsResponse> => {
  try {
    const response = await api.get<GetBookingsResponse>('/bookings', { params });

    return response.data;
  } catch (error) {
    console.error( error);
    throw error;
  }
};

export const apiPostBooking = async (params: CreateBookingParams): Promise<Booking[]> => {
  try {
    const response = await api.post('/bookings', { booking: params });

    return response.data;
  } catch (error) {
    console.error( error);
    throw error;
  }
};