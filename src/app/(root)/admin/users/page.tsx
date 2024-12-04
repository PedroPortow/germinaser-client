"use client";

import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import UsersList from "@/components/List";

export default function Page() {
  const router = useRouter()

  return (
    <div className="w-full max-w-[800px]">
      <Card className=" w-full py-4 px-5 flex flex-col ">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between">
        <div className="flex flex-col">
          <h1 className="font-semibold text-lg">Usuários</h1>
          <p className="text-muted-foreground text-sm">Aqui você pode controlar as informações dos usuários</p>
        </div>
        <Button 
          className="text-sm mt-4 md:mt w-full md:w-auto flex items-center" 
          onClick={() => router.push('/bookings/new')}
        >
          <Plus />
          Cadastrar Usuário
        </Button>
      </div>
      <div className="mt-4">
        <UsersList />
      </div>
    </Card>
    </div>
  );
}
