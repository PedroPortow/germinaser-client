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

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@ui/alert-dialog";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ClinicSelect, DatePicker, RoomSelect } from "@/components";
import { Separator } from "@/components/ui/separator";
import { useGetDayAvailableTimeslots } from "@/hooks";
import { Skeleton } from "@/components/ui/skeleton";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"; 

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

  const selectedClinicId = form.watch("clinic_id");
  const selectedRoomId = form.watch("room_id");
  const selectedDate = form.watch("date");

  const { data: availableTimeSlots = [], isLoading: isLoadingAvailableTimeslots } = useGetDayAvailableTimeslots({
    params: {
      room_id: selectedRoomId,
      date: selectedDate,
    },
    options: {
      enabled: Boolean(selectedRoomId && selectedDate),
    },
  });

  console.log({ availableTimeSlots });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("Form data:", data);
  }

  const skeletonCount = 6;
  const prefersReducedMotion = useReducedMotion(); 

  return (
    <div className="h-full min-w-[75vw] p-4 flex items-center justify-center bg-gray-50 px-4">
      <motion.div
        className="w-full max-w-md  bg-card p-8 rounded-lg shadow-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          ...(prefersReducedMotion && { duration: 0 }),
        }}
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Nova Reserva</h2>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
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
                          ? Array.from({ length: skeletonCount }).map(
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

            <AlertDialog>
              <AlertDialogTrigger className="w-full">
                <Button type="button" className="w-full mt-4">
                  Reservar
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Confirme as informações
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    Esta ação vai consumir um crédito, em caso de cancelamento
                    você tem até o dia anterior para ter seu crédito
                    retornado
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancelar</AlertDialogCancel>
                  <AlertDialogAction type="submit">
                    Confirmar Reserva
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </form>
        </Form>
      </motion.div>
    </div>
  );
}
