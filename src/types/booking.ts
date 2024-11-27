import { Meta } from "./api";

export enum BOOKING_STATUS {
  SCHEDULED = 'scheduled',
  COMPLETED = 'completed',
  CANCELED = 'cancaled',
}

export interface Booking {
  clinic_id: number;
  clinic_name: string;
  date: string;
  day_of_week: number;
  id: number;
  is_fixed: boolean;
  name: string;
  room_id: number;
  room_name: string;
  start_time: string;
  status: BOOKING_STATUS;
  user_id: number;
}
export interface GetBookingsResponse {
  bookings: Booking[];
  meta: Meta;
}
