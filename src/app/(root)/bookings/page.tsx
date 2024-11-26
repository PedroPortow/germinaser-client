"use client";

import { Header, IconCard } from "@/components";
import {   
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle 
} from "@ui/card";
import { useGetBookings } from "@/hooks";
import { BookingStatus } from "@/types/booking";
import { User } from "lucide-react";




export default function Page() {
  const { data } = useGetBookings({
    params: {
      page: 1,
      per_page: 200,
      status: BookingStatus.SCHEDULED
    },
  })

  console.log({data})

  return (
    <div className="h-full ">
      <Header
        title={'Minhas Reservas'}
      >

      </Header>
      <div className="min-w-[75vw] h-full p-4 flex justify-center bg-gray-50 px-4">
        <div className="flex gap-2">
          {/* <IconCard 
            icon={<User size={24} color="#ffffff" />}
            title='Reservas Agendadas'
            value={2}
          />
          <IconCard 
            icon={<User size={24} color="#ffffff" />}
            title='Reservas Agendadas'
            value={2}
          /> */}
        </div>
      {/* <Card
        className="w-full max-w-md"
      >
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
          </CardFooter> 
      </Card> */}
      </div>
    </div>
  );
}
