import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { Room } from '@/types/room';
import { apiGetClinicRooms } from '@/services/clinic';

type UseGetRoomsOptions = Omit<
  UseQueryOptions<Room[], Error>,
  'queryKey' | 'queryFn'
>;

export default function useGetRooms(
  clinicId?: number,
  options?: UseGetRoomsOptions
) {
  return useQuery<Room[], Error>({
    queryKey: ['rooms', clinicId],
    queryFn: () => apiGetClinicRooms(clinicId),
    enabled: Boolean(clinicId),
    ...options,
  });
}
