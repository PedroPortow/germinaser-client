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

const FormSchema = z.object({
  email: z.string().email({ message: "Por favor, insira um email válido." }),
  room_id: z
    .string()
});

export default function Page() {
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "pedrolportow@gmail.com",
      room_id: "123456",
    },
  });


  async function onSubmit(data: z.infer<typeof FormSchema>) {
  }

  return (
    <div className="h-full min-w-[75vw] flex items-center justify-center bg-gray-50  px-4">
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
                    <Input
                      type="email"
                      {...field}
                    />
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
                    value={1}
                    onValueChange={field.onChange}
                  />
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
                    value={1}
                    onValueChange={field.onChange}
                  />
                </FormItem>
              )}
              
            />
            <FormField
              control={form.control}
              name="room_id"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Data</FormLabel>
                  <DatePicker />
                </FormItem>
              )}
              
            />
          </form>
        </Form>
          <Button type="submit" className="w-full mt-16">
            Registrar
          </Button>
      </div>
    </div>
  );
}
