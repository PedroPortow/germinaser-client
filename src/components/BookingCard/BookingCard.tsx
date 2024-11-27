"use client";

import { Booking, BOOKING_STATUS } from "@/types/booking";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import { formatDate, getWeekDay } from "@/helpers/date";
import { Button } from "../ui/button";

interface BookingCardProps {
  booking: Booking;
}

const BookingCard: React.FC<BookingCardProps> = ({ booking }) => {

  console.log(booking)

  return (
    <Card className=" w-full px-4 py-2">
      <div className="w-full h-full flex items-center justify-between">
        <div className="flex">
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">{booking.name}</h3>
            <h3 className="font-medium text-start text-muted-foreground text-sm">{booking.clinic_name}, {booking.room_name}</h3>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-medium text-end text-muted-foreground text-sm">{getWeekDay(booking.day_of_week)},  {formatDate(booking.date)}</p>
          <p className="text-end text-muted-foreground text-sm">{booking.room_name}</p>
        </div>
      </div>
    </Card>
  );
}


export default BookingCard;
