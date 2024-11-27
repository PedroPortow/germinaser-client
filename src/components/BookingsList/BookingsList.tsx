"use client";

import React, { useState } from "react";
import { useGetBookings } from "@/hooks";
import { Booking, BOOKING_STATUS } from "@/types/booking";
import BookingCard from "../BookingCard";
import { Button } from "../ui/button";
import { MoveLeft, MoveRight } from "lucide-react";

// interface BookingsListProps {}

// const BookingsList: React.FC<BookingsListProps> = () => {
const BookingsList: React.FC<> = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 6;

  const { data } = useGetBookings({
    params: {
      page: currentPage,
      per_page: perPage,
      status: BOOKING_STATUS.SCHEDULED,
    },
  });

  const { bookings = [], totalPages = 1 } = data || {};

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      {bookings.map((booking): Booking => (
        <BookingCard key={booking.id} booking={booking} />
      ))}
      <div className="flex gap-2 self-center">
        <Button
          variant="outline"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          <MoveLeft />
        </Button>
        <Button
          variant="outline"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          <MoveRight />
        </Button>
      </div>
    </div>
  );
};

export default BookingsList;
