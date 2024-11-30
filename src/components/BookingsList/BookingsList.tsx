/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState } from "react";
import { useGetBookings } from "@/hooks";
import { Booking, BOOKING_STATUS, GetBookingsResponse } from "@/types/booking";
import BookingCard from "../BookingCard";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight, MoveLeft, MoveRight } from "lucide-react";
import { Skeleton } from "../ui/skeleton";
import BookingModal from "../BookingModal";

// const BookingsList: React.FC<BookingsListProps> = () => {
const BookingsList: React.FC = () => {
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null)
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false)
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 6;

  const { data = {} as GetBookingsResponse, isLoading, isError } = useGetBookings({
    params: {
      page: currentPage,
      per_page: perPage,
      status: BOOKING_STATUS.SCHEDULED,
    },
  });

  const { bookings = [], meta } = data

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, meta?.total_pages));
  };

  const handleOpenBookingModal = (booking: Booking) => {
    setIsBookingModalOpen(true)
    setSelectedBooking(booking)
  }
  console.log({data})

  return (
    <>
      <BookingModal 
        open={isBookingModalOpen}
        onOpenChange={setIsBookingModalOpen}
        booking={selectedBooking}
      />
      <div className="w-full">
        <div className="flex flex-col gap-3 h-[490px]">
          {isLoading
            ? <ListLoader rows={perPage} />
            : bookings.map((booking) => (
              <BookingCard key={booking.id} booking={booking} onClick={handleOpenBookingModal} />
            ))
        }
        </div>
        <div className="flex w-full justify-center gap-2 mt-4 self-center items-center">
          <Button
            variant="outline"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            <ChevronLeft />
          </Button>
          <p>{meta?.current_page} de {meta?.total_pages}</p>
          <Button
            variant="outline"
            onClick={handleNextPage}
            disabled={meta?.current_page === meta?.total_pages}
          >
            <ChevronRight />
          </Button>
        </div>
      </div>
    </>
  );
};

interface ListLoaderProps {
  rows: number;
}

const ListLoader: React.FC<ListLoaderProps> = ({ rows }) => {
  return (
    <div className="flex flex-col gap-3">
      {Array.from({ length: rows }, (_, index) => (
        <Skeleton key={index} className="w-full h-[70px]" />
      ))}
    </div>
  );
};

export default BookingsList;
