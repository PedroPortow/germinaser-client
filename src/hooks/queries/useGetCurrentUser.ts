import { apiGetCurrentUser } from '@/services/user';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { User } from '@/types/user';

type UseGetCurrentUserParams = Omit<
  UseQueryOptions<User, Error, User>,
  'queryKey' | 'queryFn'
>;

export default function useGetCurrentUser(
  token: string | null,
  params?: UseGetCurrentUserParams
) {
  const query = useQuery<User, Error>({
    queryKey: ['currentUser', token], 
    queryFn: () => apiGetCurrentUser(), 
    enabled: Boolean(token), 
    ...params,
  });

  return query;
}
