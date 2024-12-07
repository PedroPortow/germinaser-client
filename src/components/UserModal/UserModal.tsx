"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import { Button } from "../ui/button";
import { useState } from "react";
import { User } from "@/types/user";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import RoleSelect from "../RoleSelect";
import PasswordInput from "../PasswordInput";

const FormSchema = z.object({
  email: z.string().email({ message: "Por favor, insira um email válido." }),
  name: z.string().min(1, { message: "Por favor, insira um nome válido." }),
  role: z.string().min(1, { message: "Por favor, insira um cargo válido." }),
  credits: z.number().min(0, { message: "Créditos devem ser um número não negativo." })
});

interface UserModalProps {
  user: User | null;
  open: boolean;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserModal: React.FC<UserModalProps> = ({ user, open, onOpenChange }) => {
  const [isCancelModalOpen, setIsCancelModalOpen] = useState<boolean>(false)

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: user?.email || "",
      name: user?.name || "",
      role: user?.role || "",
      credits: user?.credits ?? 0
    },
  });

  const toggleConfirmationModal = () => {
    setIsCancelModalOpen(prevState => !prevState)
  }

  const handleRemoveUser = () => {
    // Handle removing the user here
  }

  function onSubmit(data: z.infer<typeof FormSchema>) {
  }

  if (!user) return null

  return (
    <>
      <ConfirmationModal
        open={isCancelModalOpen}
        onOpenChange={setIsCancelModalOpen}
        onCancel={toggleConfirmationModal}
        title="Tem certeza?"
        description="Esta ação não pode ser desfeita. Reservas canceladas até o dia anterior têm seu crédito ressarcido automaticamente."
        onConfirm={handleRemoveUser}
      />
      <Dialog onOpenChange={onOpenChange} open={open}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="mb-1 justify-between flex items-center text-start">
              Editar Usuário
            </DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Nome do usuário"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                      <PasswordInput
                        placeholder="usuario@gmail.com"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cargo</FormLabel>
                    <FormControl>
                      {/* <Input
                        placeholder="Cargo do usuário"
                        {...field}
                      /> */}
                      <RoleSelect 
                        value={field.value}
                        onValueChange={field.onChange}
                        queryEnabled={open}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="credits"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Créditos</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="0"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit">Salvar</Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default UserModal;