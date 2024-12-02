import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { apiGetBookings } from "@/services/booking";
import { Timeslot } from "@/types/timeslot";
import { BOOKING_STATUS, GetBookingsResponse } from "@/types/booking";

type UseGetBookings = Omit<
UseQueryOptions<Timeslot[], Error>,
"queryKey" | "queryFn"
>;

export type Params = {
  page: number;
  per_page: number;
  status?: BOOKING_STATUS;
};

interface useGetBookingsProps {
  params: Params;
  options?: UseGetBookings;
}

export default function useGetBookings({
  params,
  ...options
}: useGetBookingsProps) {
  return useQuery<GetBookingsResponse, Error>({
    queryKey: ["getBookings", params],
    queryFn: () => apiGetBookings(params),
    ...options,
  });
}
