import { apiCancelBooking } from '@/services/booking';
import { useMutation } from '@tanstack/react-query';

export const useCancelBooking = ({ ...rest }) => {
  const query = useMutation({
    ...rest,
    mutationFn: (id: number) => apiCancelBooking(id),
  });

  return { ...query };
};

export default useCancelBooking
