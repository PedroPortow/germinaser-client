"use client";

import { z } from "zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@ui/input";
import { Button } from "@ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@ui/form";
import { usePostLogin } from "@/hooks/mutations";
import { useToast } from "@/hooks/use-toast";
import { useAuthContext } from "@/hooks";
import Image from "next/image";
import logoImg from '@/../public/logonolabel.png'

const FormSchema = z.object({
  email: z.string().email({ message: "Por favor, insira um email válido." }),
  password: z
    .string()
    .min(3, { message: "A senha deve ter pelo menos 3 caracteres." }),
});

export default function Login() {
  const router = useRouter()
 
  const { postLogin } = usePostLogin({
    onSuccess,
    onError
  })

  const { JWT_LOCAL_STORAGE_KEY } = useAuthContext()

  const { toast } = useToast()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function onSuccess(data: any) {
    const { authorization } = data.headers

    console.log('chegou')

    console.log({data})
    if (authorization) {
      localStorage.setItem(JWT_LOCAL_STORAGE_KEY, authorization)
      router.push('/bookings')
    }
   
  }
  function onError() {
    toast({
      variant: "destructive",
      title: "Ops! Email ou Senha inválida",
      description: "Verifique novamente os dados inseridos.",
    })
  }


  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "pedrolportow@gmail.com",
      password: "132456",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    postLogin(data);
    
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow flex flex-col">
        <Image
          src={logoImg}
          alt="GerminaSer logo"
          width={250}
          className="self-center"
          height={250}
          priority
        />
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
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Sua senha"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {form.formState.errors.root && (
              <p className="text-red-500 text-sm">
                {form.formState.errors.root.message}
              </p>
            )}
            <Button type="submit" className="w-full">
              Entrar
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
