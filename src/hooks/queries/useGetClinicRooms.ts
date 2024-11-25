import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { Room } from '@/types/room';
import { apiGetRooms } from '@/services/rooms';

type UseGetRoomsOptions = Omit<
  UseQueryOptions<Room[], Error>,
  'queryKey' | 'queryFn'
>;

export default function useGetRooms(
  clinicId?: string,
  options?: UseGetRoomsOptions
) {
  return useQuery<Room[], Error>({
    queryKey: ['rooms', clinicId],
    queryFn: () => apiGetRooms(clinicId),
    enabled: !!clinicId, // Only fetch if clinicId is provided
    ...options,
  });
}
