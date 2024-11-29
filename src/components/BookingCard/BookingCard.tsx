"use client";

import { Booking } from "@/types/booking";
import { Card } from "../ui/card";
import { formatDate, getWeekDay } from "@/helpers/datime";

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
      <div className="w-full h-full flex items-center justify-between">
        <div className="flex">
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">{booking.name}</h3>
            <h3 className="font-medium text-start text-muted-foreground text-sm">
              {booking.clinic_name}, {booking.room_name}
            </h3>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-medium text-end text-muted-foreground text-sm">
            {getWeekDay(booking.date)}, {formatDate(booking.date)}
          </p>
          <p className="text-end text-muted-foreground text-sm">
            {booking.room_name}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default BookingCard;
