"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import { Button } from "../ui/button";
import { useCallback, useEffect, useState } from "react";
import { User } from "@/types/user";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import RoleSelect from "../RoleSelect";
import PasswordInput from "../PasswordInput";
import useCreateUser from "@/hooks/mutations/useCreateUser";
import useUpdateUser from "@/hooks/mutations/useUpdateUser";
import NumberInput from "../NumberInput";
import { Trash2 } from "lucide-react";
import useDeleteUser from "@/hooks/mutations/useDeleteUser";
import { useToast } from "@/hooks/use-toast";

const FormSchema = z.object({
  email: z.string().email({ message: "Por favor, insira um email válido." }),
  name: z.string().min(1, { message: "Por favor, insira um nome válido." }),
  role: z.string().min(1, { message: "Por favor, insira um cargo válido." }),
  credits: z.number().min(0, { message: "Créditos devem ser um número não negativo." }),
});

interface UserModalProps {
  user: User | null;
  open: boolean;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserModal: React.FC<UserModalProps> = ({ user, open, onOpenChange }) => {
  const [isCancelModalOpen, setIsCancelModalOpen] = useState<boolean>(false);

  const { mutate: createUser } = useCreateUser({
    onSuccess: onCreateUser 
  })
  const { mutate: updateUser } = useUpdateUser({
    onSuccess: onUpdateUser
  })
  const { mutate: deleteUser } = useDeleteUser({
    onSuccess: onDeleteUser 
  })

  const { toast } = useToast()

  function onCreateUser() {
    toast({
      title: "Usuário cadastrado com sucesso"
    })
  }
  function onUpdateUser() {
    toast({
      title: "Usuário cadastrado com sucesso",
    })
  }
  function onDeleteUser() {
    toast({
      title: 'Usuário removido com sucesso',
    })
  }

  const buildFormValues = useCallback(() => ({
    email: user?.email || "",
    name: user?.name || "",
    role: user?.role || "",
    credits: user?.credits ?? 0,
  }), [user]);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: buildFormValues(),
  });

  useEffect(() => {
    form.reset(buildFormValues());
  }, [form, buildFormValues]);

  const toggleConfirmationModal = () => {
    setIsCancelModalOpen((prevState) => !prevState);
  };

  const handleRemoveUser = () => {
    if (user) deleteUser(user.id)
  };

  function onSubmit(data: z.infer<typeof FormSchema>) {
    if (user) {
      updateUser({ id: user.id, params: data })
    } else {
      createUser(data)
    }
  }

  return (
    <>
      <ConfirmationModal
        open={isCancelModalOpen}
        actionButtonVariant={'destructive'}
        onOpenChange={setIsCancelModalOpen}
        onCancel={toggleConfirmationModal}
        title="Tem certeza?"
        description="Esta ação não pode ser desfeita. As informações do usuário vão ser perdidas, todas suas reservas agendadas também serão canceladas"
        onConfirm={handleRemoveUser}
      />
      <Dialog onOpenChange={onOpenChange} open={open}>
        <DialogContent
          aria-describedby={undefined}
        >
          <DialogHeader>
            <DialogTitle className="mb-1 justify-between flex items-center text-start">
              {Boolean(user) ? "Editar Usuário" : "Criar Usuário"}
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
                      <Input placeholder="Nome do usuário" {...field} />
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
                      <Input placeholder="usuario@gmail.com" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {!user && (
                <div>
                  <FormItem>
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                      <PasswordInput name="password" placeholder="Senha" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </div>
              )}
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cargo</FormLabel>
                    <FormControl>
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
              <div className="flex items-end justify-between">
              <FormField
                control={form.control}
                name="credits"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Créditos</FormLabel>
                    <FormControl>
                      <NumberInput 
                        value={field.value} 
                        onChange={field.onChange}
                        className="text-center"
                        type="number" 
                        placeholder="0" 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                variant='destructive'
                onClick={event => {
                  event.preventDefault()
                  toggleConfirmationModal()
                }}
              >
                <Trash2 /> Remover 
              </Button>
              </div>
              <div className="flex justify-end gap-2">
                <Button 
                  type="button" 
                  variant='outline' 
                  onClick={event => {
                    event.preventDefault()
                    onOpenChange(false)
                  }}
                >
                  Cancelar
                </Button>
                <Button type="submit">
                  {Boolean(user) ? "Salvar alterações" : "Cadastrar usuário"}
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UserModal;
