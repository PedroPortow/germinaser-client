"use client";

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
import { useGetDayAvailableTimeslots } from "@/hooks";
import { Skeleton } from "@/components/ui/skeleton";
import { AnimatePresence } from "framer-motion"; 
import ConfirmationModal from "@/components/ConfirmationModal/ConfirmationModal";
import { useState } from "react";
import { Card } from "@/components/ui/card";

const FormSchema = z.object({
  name: z.string().min(1, { message: "Por favor, insira um name válido." }),
  clinic_id: z.string().min(1, { message: "Por favor, selecione uma clínica." }),
  room_id: z.string().min(1, { message: "Por favor, selecione uma sala." }),
  date: z.date({
    required_error: "Por favor, selecione uma data.",
  }),
  timeslot: z.string().min(1, { message: "Por favor, selecione um horário." }),
});

export default function Page() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      clinic_id: "",
      room_id: "",
      date: new Date(),
      timeslot: "",
    },
  });

  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState<boolean>(false)

  const selectedClinicId = form.watch("clinic_id");
  const selectedRoomId = form.watch("room_id");
  const selectedDate = form.watch("date");

  const { data: availableTimeSlots = [], isLoading: isLoadingAvailableTimeslots } = useGetDayAvailableTimeslots({
    params: {
      room_id: selectedRoomId,
      date: selectedDate,
    },
    enabled: Boolean(selectedRoomId && selectedDate),
  });

  async function handleSubmitConfirm() {
  }


  return (
    <Card className="w-full max-w-[500px] py-4 px-5">
      <h2 className="text-2xl font-semibold mb-6 text-center">Nova Reserva</h2>
      <Form {...form}>
        <form
          // onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4"
          noValidate
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome da Reserva</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
                <FormDescription>
                  Exemplo: Paciente João
                </FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="clinic_id"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Clínica</FormLabel>
                <ClinicSelect
                  value={field.value}
                  onValueChange={field.onChange}
                />
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
                  clinicId={selectedClinicId}
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
                <DatePicker
                  value={field.value}
                  onValueChange={field.onChange}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <AnimatePresence>
            {Boolean(selectedClinicId && selectedRoomId) && (
              <FormField
                control={form.control}
                name="timeslot"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Horários Disponíveis</FormLabel>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {isLoadingAvailableTimeslots
                        ? Array.from({ length: 6 }).map(
                            (_, index) => (
                              <Skeleton
                                key={index}
                                className="h-10 w-full rounded-md"
                              />
                            )
                          )
                        : availableTimeSlots.map((time) => (
                            <Button
                              key={time}
                              className="w-full"
                              variant={
                                field.value === time ? "default" : "outline"
                              }
                              type="button"
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
            )}
          </AnimatePresence>
          <Button 
            type="button" 
            className="w-full mt-4" 
            onClick={() => setIsConfirmationModalOpen(true)}
          >
            Reservar
          </Button>
          <ConfirmationModal 
            open={isConfirmationModalOpen}
            onOpenChange={setIsConfirmationModalOpen}
            onCancel={() => setIsConfirmationModalOpen(false)}
            onConfirm={handleSubmitConfirm}
            title="Confirme as Informações"
            description="Esta ação vai consumir um crédito"
            actionButtonText="Confirmar Reserva"
          />
        </form>
      </Form>
    </Card>
  );
}
