/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "./api";
import { Params } from "@/hooks/queries/useGetDayAvailableTimeslots";
import { Booking, CreateBookingParams, GetBookingsResponse } from "@/types/booking";
import { Timeslot } from "@/types/timeslot";
import * as Sentry from "@sentry/nextjs"; 

interface AvailableSlotsResponse {
  available_slots: Timeslot[];
}

export const apiGetDayAvailableTimeslots = async (params: Params | undefined): Promise<Timeslot[]> => {
  try {
    const response = await api.get<AvailableSlotsResponse>('/bookings/day_available_slots', { params });

    return response.data.available_slots;
  } catch (error) {
    console.error( error);
    Sentry.captureException(error); 
    throw error;
  }
};

export const apiGetBookings = async (params: any): Promise<GetBookingsResponse> => {
  try {
    const response = await api.get<GetBookingsResponse>('/bookings/dadas', { params });

    return response.data;
  } catch (error) {
    console.error( error);
    Sentry.captureException(error); 
    throw error;
  }
};

export const apiPostBooking = async (params: CreateBookingParams): Promise<Booking[]> => {
  try {
    const response = await api.post('/bookings', { booking: params });

    return response.data;
  } catch (error) {
    console.error( error);
    Sentry.captureException(error); 
    throw error;
  }
};

// TODO: Fix this bullshit 4
export const apiCancelBooking = async (id: number): Promise<Booking[]> => {
  try {
    const response = await api.post(`/bookings/${id}/cancel`);

    return response.data;
  } catch (error) {
    console.error( error);
    Sentry.captureException(error); 
    throw error;
  }
};