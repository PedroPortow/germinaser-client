"use client";

import React from "react";
import { Badge } from "../ui/badge";
import { Booking } from "@/types/booking";
import { BOOKING_STATUS_LABEL, BOOKING_STATUS_VARIANT } from "@/constants/booking";

interface BookingStatusBadgeProps {
  booking: Booking
}


const BookingStatusBadge: React.FC<BookingStatusBadgeProps> = ({ booking }) => (
  <Badge variant={BOOKING_STATUS_VARIANT[booking.status]} className="w-fit">
    {BOOKING_STATUS_LABEL[booking.status]}
  </Badge>
);

export default BookingStatusBadge;
