"use client";

import { BookingsList, Header, IconCard } from "@/components";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@ui/card";
import { useGetBookings } from "@/hooks";
import { BOOKING_STATUS } from "@/types/booking";
import { Plus, PlusCircleIcon, User } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ui/tabs"

import { Button } from "@/components/ui/button";

export default function Page() {


  return (
    <div className="h-full p-2 md:p-4 flex flex flex-col">
      <div className="flex items-center justify-between">
        <div className="flex flex-col  gap-2 mt-8">
          <h1 className="font-semibold text-lg">Suas Reservas</h1>
          <h1 className="font-semibold text-lg">Suas Reservas</h1>
        </div>
        <Button
          className="text-sm"
        >
          <Plus size={60}/>
          Fazer Reserva
        </Button>
      </div>
      <div className="mt-8">
        <BookingsList />
      </div>
    </div>
  );
}


// return (
//   <div className="h-full p-4 flex items-center justify-center ">
//     <BookingsList />
//   </div>
// );