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
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import { useState } from "react";

interface BookingModalProps {
  booking: Booking | null;
  open: boolean;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
}

const BookingModal: React.FC<BookingModalProps> = ({ booking, open, onOpenChange }) => {
  const [isCancelModalOpen, setIsCancelModalOpen] = useState<boolean>(false)

  const toggleConfirmationModal = () => {
    setIsCancelModalOpen(prevState => !prevState)
  }

  const handleCancelBooking = () => {
    // TODO: Cancel post
    toggleConfirmationModal()
  }
  

  if (!booking) return null 

  const showCancelButton = booking.status === BOOKING_STATUS.SCHEDULED

  return (
    <>
      <ConfirmationModal
        open={isCancelModalOpen}
        onOpenChange={setIsCancelModalOpen}
        booking={booking}
        onCancel={toggleConfirmationModal} 
        title="Tem certeza?"
        description="Esta ação não pode ser desfeita. Reservas canceladas até o dia anterior tem seu crédito ressarcido automaticamente."
        onConfirm={handleCancelBooking}
      />
      <Dialog 
        onOpenChange={onOpenChange}
        open={open}
      >
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
                    {booking.start_time} - {getBookingEndTime(booking)}
                  </p>
                </div>
              </div>
            </div>
            {showCancelButton && (
              <Button
                className="mt-2 bg-transparent border border-red-500 text-red-500 hover:bg-red-50 focus:ring-2 focus:ring-red-500"
                onClick={toggleConfirmationModal}
              >
                Cancelar Reserva
              </Button>
            )}
        </DialogContent>
      </Dialog>
    </>

  );
}

export default BookingModal;
