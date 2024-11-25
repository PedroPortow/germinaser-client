import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { Clinic } from '@/types/clinic';
import { apiGetClinics } from '@/services/clinic';

type UseGetClinicsParams = Omit<
  UseQueryOptions<Clinic[], Error>,
  'queryKey' | 'queryFn'
>;

export default function useGetClinics(params?: UseGetClinicsParams) {
  return useQuery<Clinic[], Error>({
    queryKey: ['clinics'],
    queryFn: apiGetClinics,
    ...params,
  });
}
