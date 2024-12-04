import { Booking } from "@/types/booking";
import { parse, format } from 'date-fns';
import { formatInTimeZone, toZonedTime } from 'date-fns-tz';

export function getWeekDay(dateString: string): string {
  const date = new Date(dateString);

  const weekDays: string[] = [
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
    'Domingo',
  ];

  return weekDays[date.getDay()]
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const day = date.getUTCDate().toString().padStart(2, '0');
  const month = (date.getUTCMonth() + 1).toString().padStart(2, '0'); 
  const year = date.getUTCFullYear().toString().substring(2); 

  return `${day}/${month}/${year}`;
}

export const getBookingEndTime = (booking: Booking): string => {
  const [hourStr, minuteStr] = booking.start_time.split(":");
  const hour = parseInt(hourStr, 10);
  const minute = parseInt(minuteStr, 10);

  const endHour = (hour + 1) % 24;
  const formattedHour = endHour.toString().padStart(2, "0");
  const formattedMinute = minute.toString().padStart(2, "0");

  return `${formattedHour}:${formattedMinute}`;
};

// TODO: Fix this bullshit
export function formatSubmitStartTime(startDate: Date, timeSlot: string) {
  const timeZone = 'America/Sao_Paulo';
  const dateStr = format(startDate, 'yyyy-MM-dd');
  const dateTimeStr = `${dateStr} ${timeSlot}`;
  const parsedDate = parse(dateTimeStr, 'yyyy-MM-dd HH:mm', new Date());
  const zonedDate = toZonedTime(parsedDate, timeZone);
  const formattedDateTime = formatInTimeZone(zonedDate, timeZone, "yyyy-MM-dd'T'HH:mm:ssXXX");
  return formattedDateTime;
}