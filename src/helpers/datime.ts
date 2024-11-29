import { Booking } from "@/types/booking";

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

  // Correct the index to match JavaScript's `getDay()` method
  // JavaScript uses 0 for Sunday, 1 for Monday, ..., 6 for Saturday
  const adjustedIndex = (date.getDay() + 6) % 7;

  return weekDays[adjustedIndex];
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const day = date.getUTCDate().toString().padStart(2, '0');
  const month = (date.getUTCMonth() + 1).toString().padStart(2, '0'); // getUTCMonth() returns a zero-based index
  const year = date.getUTCFullYear().toString().substring(2); // Get the last two digits of the year

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

