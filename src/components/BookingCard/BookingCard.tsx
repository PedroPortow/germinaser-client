"use client";

import { Booking } from "@/types/booking";
import { Card } from "../ui/card";
import { formatDate, getBookingEndTime, getWeekDay } from "@/helpers/datime";
import BookingStatusBadge from "../BookingStatusBadge";
import { AlarmClock, CalendarFold, MapPinHouse } from "lucide-react";

interface BookingCardProps {
  booking: Booking;
  onClick: (booking: Booking) => void;
}

const BookingCard: React.FC<BookingCardProps> = ({ booking, onClick }) => {
  const handleClick = () => {
    onClick(booking);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick(booking);
    }
  };

  return (
    <Card
      className="w-full px-4 py-2 cursor-pointer hover:bg-gray-50 hover:shadow-md transition duration-200"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div className="w-full h-full flex flex-col">
        <div className="flex w-full justify-between">
          <h3 className="font-semibold">{booking.name}</h3>
          <BookingStatusBadge booking={booking} />
        </div>
        <div className="flex gap-1 items-center">
          <MapPinHouse size={14} className="text-muted-foreground bold" />
          <h3 className="font-medium text-start text-muted-foreground text-sm">
            {booking.clinic_name}, {booking.room_name}
          </h3>
        </div>
        <div className="flex gap-1 items-center">
          <CalendarFold size={14} className="text-muted-foreground bold"/>
          <h3 className="font-medium text-start text-muted-foreground text-sm">
            {getWeekDay(booking.date)}, {formatDate(booking.date)}
          </h3>
        </div>
        <div className="flex gap-1 items-center">
          {/* <CalendarFold /> */}
          <AlarmClock size={14} className="text-muted-foreground bold" />
          <h3 className="font-medium text-start text-muted-foreground text-sm">
            {booking.start_time} - {getBookingEndTime(booking)}
          </h3>
        </div>
        

      </div>
    </Card>
  );
};

export default BookingCard;
