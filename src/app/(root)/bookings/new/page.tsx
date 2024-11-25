"use client";

import { useRouter } from "next/navigation";
import { Input } from "@ui/input";
import { Button } from "@ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ClinicSelect, DatePicker, RoomSelect } from "@/components";
import { Separator } from "@/components/ui/separator";

const FormSchema = z.object({
  email: z.string().email({ message: "Por favor, insira um email válido." }),
  clinic_id: z.string().min(1, { message: "Por favor, selecione uma clínica." }),
  room_id: z.string().min(1, { message: "Por favor, selecione uma sala." }),
  date: z.date({
    required_error: "Por favor, selecione uma data.",
  }),
  timeslot: z.string().min(1, { message: "Por favor, selecione um horário." }),
});

export default function Page() {
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "pedrolportow@gmail.com",
      clinic_id: "",
      room_id: "",
      date: null,
      timeslot: "",
    },
  });

  const { watch } = form

  const availableTimeSlots = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
  ];

  
  const selectedClinicId = form.watch("clinic_id");

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    // Handle form submission
    console.log("Form data:", data);
    // You can add your submission logic here
  }

  return (
    <div className="h-full min-w-[75vw] flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-card p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Nova Reserva</h2>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4"
            noValidate
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome da Reserva</FormLabel>
                  <FormControl>
                    <Input type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                  <FormDescription>Exemplo: Paciente João</FormDescription>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="clinic_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Clínica</FormLabel>
                  <ClinicSelect value={field.value} onValueChange={field.onChange} />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="room_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sala</FormLabel>
                  <RoomSelect
                    value={field.value}
                    clinicId={Number(selectedClinicId)}
                    onValueChange={field.onChange}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Data</FormLabel>
                  <DatePicker selected={field.value} onChange={field.onChange} />
                  <FormMessage />
                </FormItem>
              )}
            />
            <Separator className="mb-2" />
            <FormField
              control={form.control}
              name="timeslot"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Horários Disponíveis</FormLabel>
                  <div className="flex flex-wrap gap-2">
                    {availableTimeSlots.map((time) => (
                      <Button
                        key={time}
                        className="w-[31.9%]"
                        variant={field.value === time ? "default" : "outline"}
                        onClick={() => field.onChange(time)}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full mt-4">
              Reservar
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}