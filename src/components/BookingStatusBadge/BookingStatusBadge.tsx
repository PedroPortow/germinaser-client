"use client";

import React from "react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

interface BookingStatusBadgeProps {
  title?: string;
  value?: string;
  icon?: React.ReactNode;
}

const BookingStatusBadge: React.FC<BookingStatusBadgeProps> = ({ booking }) => (
  <Badge />
);

export default BookingStatusBadge;
