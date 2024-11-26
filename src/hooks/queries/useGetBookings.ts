import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { apiGetBookings } from "@/services/booking";
import { Timeslot } from "@/types/timeslot";
import { Booking, BookingStatus } from "@/types/booking";

type UseGetBookings = Omit<
UseQueryOptions<Timeslot[], Error>,
"queryKey" | "queryFn"
>;

export type Params = {
  page: number;
  per_page: number; 
  status: BookingStatus;
};

interface useGetBookingsProps {
  params: Params;
  options?: UseGetBookings;
}

export default function useGetBookings({
  params,
  ...options
}: useGetBookingsProps) {
  return useQuery<Booking[], Error>({
    queryKey: ["getBookings", params],
    queryFn: () => apiGetBookings(params),
    ...options,
  });
}
