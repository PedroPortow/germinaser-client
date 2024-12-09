import { apiDeleteUser } from '@/services/user';
import { useMutation } from '@tanstack/react-query';

export const useDeleteUser = ({ ...rest }) => {
  const { mutate, ...query } = useMutation({
    ...rest,
    mutationFn: (id: number) => apiDeleteUser(id),
  });

  return { mutate, ...query };
};

export default useDeleteUser
