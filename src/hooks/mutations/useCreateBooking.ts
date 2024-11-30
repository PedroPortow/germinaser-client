import { apiPostBooking } from '@/services/booking';
import { Booking, CreateBookingParams } from '@/types/booking';
import { useMutation } from '@tanstack/react-query';


export const useCreateBooking = ({ ...rest }) => {
  const query = useMutation({
    ...rest,
    mutationFn: (params: CreateBookingParams) => apiPostBooking(params),
  });

  return { ...query };
};

export default useCreateBooking
