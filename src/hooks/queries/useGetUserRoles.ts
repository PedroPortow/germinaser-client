import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { apiGetUserRoles } from '@/services/user';
import { Role } from '@/types/user';
import { USER_ROLE_TO_LABEL } from "@/constants/user";

type TransformedRole = { label: string; value: Role };

type useGetUserRolesOptions = Omit<
  UseQueryOptions<Role[], Error, TransformedRole[]>,
  'queryKey' | 'queryFn'
>;

export default function useGetUserRoles(
  options?: useGetUserRolesOptions
) {
  return useQuery<Role[], Error, TransformedRole[]>({
    queryKey: ['getUserRoles'],
    queryFn: () => apiGetUserRoles(),
    select: (data) => data.map(role => ({ label: USER_ROLE_TO_LABEL[role], value: role })),
    ...options,
  });
}