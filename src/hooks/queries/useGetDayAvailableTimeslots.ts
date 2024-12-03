// useGetDayAvailableTimeslots.ts

import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { apiGetDayAvailableTimeslots } from "@/services/booking";
import { Timeslot } from "@/types/timeslot";

type UseGetDayAvailableTimeslotsOptions = Omit<
  UseQueryOptions<Timeslot[], Error>,
  "queryKey" | "queryFn"
>;

export type Params = {
  room_id: string; 
  date?: Date;
};

interface UseGetDayAvailableTimeslotsProps extends UseGetDayAvailableTimeslotsOptions {
  params: Params;
}

export default function useGetDayAvailableTimeslots({
  params,
  ...options
}: UseGetDayAvailableTimeslotsProps) {
  return useQuery<Timeslot[], Error>({
    queryKey: ["timeslots", params],
    queryFn: () => apiGetDayAvailableTimeslots(params),
    ...options,
  });
}