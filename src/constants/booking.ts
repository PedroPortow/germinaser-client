import { BOOKING_STATUS } from "@/types/booking";

export const BOOKING_STATUS_LABEL: Record<BOOKING_STATUS, string> = {
  [BOOKING_STATUS.SCHEDULED]: 'Agendado',
  [BOOKING_STATUS.CANCELED]: 'Cancelado',
  [BOOKING_STATUS.COMPLETED]: 'Concluído'
};

type BadgeVariant = "default" | "outline" | "destructive" | "secondary";

export const BOOKING_STATUS_VARIANT: Record<BOOKING_STATUS, BadgeVariant> = {
  [BOOKING_STATUS.SCHEDULED]: 'default',
  [BOOKING_STATUS.CANCELED]: 'destructive',
  [BOOKING_STATUS.COMPLETED]: 'outline',
};

