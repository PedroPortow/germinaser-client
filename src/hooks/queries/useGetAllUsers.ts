import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { apiGetAllUsers } from '@/services/user';
import { User } from '@/types/user';
import { Meta } from '@/types/api';

type UseGetAllUsersOptions = Omit<UseQueryOptions<User[], Error>, 'queryKey' | 'queryFn'>;

export type Params = {
  page: number;
  per_page: number;
  by_name: string;
};

interface UseGetAllUsersProps {
  params: Params;
  options?: UseGetAllUsersOptions;
}

export interface GetAllUsersResponse {
  users: User[];
  meta: Meta;
}

export default function useGetRooms({ params, ...options }: UseGetAllUsersProps) {
  return useQuery<GetAllUsersResponse, Error>({
    queryKey: ['getAllUsers', params],
    queryFn: () => apiGetAllUsers(params),
    ...options,
  });
}
