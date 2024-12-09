/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import BookingsList from "@/components/BookingsList";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus } from "lucide-react";

import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter()


  return (
    <div className="w-full max-w-[800px]">
      <Card className=" w-full py-4 px-5 flex flex-col ">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between">
        <div className="flex flex-col">
          <h1 className="font-semibold text-lg">Reservas</h1>
          <p className="text-muted-foreground text-sm">Aqui você pode visualizar todas suas reservas</p>
        </div>
        <Button 
          className="text-sm mt-4 md:mt w-full md:w-auto flex items-center" 
          onClick={() => router.push('/bookings/new')}
        >
          <Plus />
          Nova Reserva
        </Button>
      </div>
      <div className="mt-4">
        <BookingsList />
      </div>
    </Card>
    </div>
  );
}
