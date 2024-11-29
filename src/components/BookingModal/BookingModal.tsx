"use client";

import { Booking, BOOKING_STATUS } from "@/types/booking";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { formatDate, getBookingEndTime, getWeekDay } from "@/helpers/datime";
import { Calendar, Clock, House } from "lucide-react";
import BookingStatusBadge from "../BookingStatusBadge";
import { Button } from "../ui/button";

interface BookingModalProps {
  booking: Booking | null;
  open: boolean;
}

const BookingModal: React.FC<BookingModalProps> = ({ booking, open }) => {

  if (!booking) return null 

  const showCancelButton = booking.status === BOOKING_STATUS.SCHEDULED

  return (
    <Dialog open={open}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-1 justify-between flex items-center text-start">
            {booking?.name} 
          </DialogTitle>
          <BookingStatusBadge booking={booking} />
        </DialogHeader>
        <div className="bg-red-30 flex mt-2 flex-col gap-5">
            <div className="flex gap-3 items-center">
              <House />
              <div className="flex flex-col">
                <p className="text-muted-foreground text-sm font-semibold text-start">Local</p>
                <p className="font-medium text-md">
                  {booking.clinic_name}, {booking.room_name}
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <Calendar/>
              <div className="flex flex-col ">
                <p className="text-muted-foreground text-sm font-semibold text-start">Data</p>
                <p className="font-medium text-md">
                  {getWeekDay(booking.date)}, {formatDate(booking.date)}
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <Clock />
              <div className="flex flex-col ">
                <p className="text-muted-foreground text-sm font-semibold text-start">Horário</p>
                <p className="font-medium text-md">
                  {booking.start_time}, {getBookingEndTime(booking)}
                </p>
              </div>
            </div>
          </div>
          {showCancelButton && (
            <Button
              variant='destructive'
              className="mt-2"
            >
              Cancelar Reserva
            </Button>
          )}
      </DialogContent>
    </Dialog>
  );
}

export default BookingModal;
