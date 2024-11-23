export interface User {
  active_bookings_count: number;
  canceled_bookings_count: number;
  credits: number;
  done_bookings_count: number;
  has_fixed_booking: boolean;
  id: number;
  name: string;
  email: string;
  role: string; // TODO: Add enum and role types
  total_bookings_count: number;
}
