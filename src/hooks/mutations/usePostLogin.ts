import { apiPostLogin } from '@/services/auth';
import { LoginPayload } from '@/types';
import { useMutation } from '@tanstack/react-query';


export const usePostLogin = ({ ...rest }) => {
  const { mutate: postLogin, ...query } = useMutation({
    ...rest,
    mutationFn: (params: LoginPayload) => apiPostLogin(params),
  });

  return { postLogin, ...query };
};

export default usePostLogin
