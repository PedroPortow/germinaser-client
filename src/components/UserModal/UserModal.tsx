"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { AlarmClock, CalendarFold, MapPinHouse } from "lucide-react";
import { Button } from "../ui/button";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import { useState } from "react";
import { User } from "@/types/user";
import { z } from "zod";
import { Form, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";

const FormSchema = z.object({
  email: z.string().email({ message: "Por favor, insira um email válido." }),
  name: z.string().min(1, { message: "Por favor, insira um nome válido." }),
  role: z.string(),
  credits: z.number()
});

interface UserModalProps {
  user: User | null;
  open: boolean;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserModal: React.FC<UserModalProps> = ({ user, open, onOpenChange }) => {
  const [isCancelModalOpen, setIsCancelModalOpen] = useState<boolean>(false)


  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      name: "",
      role: "",
      credits: ''
    },
  });

  // const { mutate: cancelBooking } = useCancelBooking({
  //   onSuccess: onCancelBookingSuccess
  // })

  // const { toast } = useToast()

  // function onCancelBookingSuccess() {
  //   toast({
  //     variant: "default",
  //     title: "Reservada cancelada com sucesso",
  //   })

  //   onOpenChange(prevState => !prevState)
  // }

  const toggleConfirmationModal = () => {
    setIsCancelModalOpen(prevState => !prevState)
  }

  const handleRemoveUser = () => {
    // if (booking) cancelBooking(booking.id)
  }

  // const showCancelButton = booking?.status === BOOKING_STATUS.SCHEDULED

  // if (!booking) return null

  function onSubmit(data: z.infer<typeof FormSchema>) {
    // postLogin(data);
    
  }

  if (!user) return null

  return (
    <>
      <ConfirmationModal
        open={isCancelModalOpen}
        onOpenChange={setIsCancelModalOpen}
        onCancel={toggleConfirmationModal}
        title="Tem certeza?"
        description="Esta ação não pode ser desfeita. Reservas canceladas até o dia anterior tem seu crédito ressarcido automaticamente."
        onConfirm={handleRemoveUser}
     />
      <Dialog
        onOpenChange={onOpenChange}
        open={open}
      >
        <DialogContent
          aria-describedby={undefined}
        >
          <DialogHeader>
            <DialogTitle className="mb-1 justify-between flex items-center text-start">
              Editar Usuário
            </DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="usuario@gmail.com"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>

  );
}

export default UserModal;
