"use client";

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { UserModal, UsersList } from "@/components";
import { useState } from "react";
import { User } from "@/types/user";

export default function Page() {
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [isUserModalOpen, setIsUserModalOpen] = useState<boolean>(false)

  const handleSelectUser = (user: User) => {
    setSelectedUser(user)
    setIsUserModalOpen(true)
  }

  const handleCreateNewUser = () => {
    setSelectedUser(null)
    setIsUserModalOpen(true)
  }
 
  return (
    <div className="w-full max-w-[800px]">
      <UserModal
        user={selectedUser}
        open={isUserModalOpen}
        onOpenChange={setIsUserModalOpen}
      />
      <Card className=" w-full py-4 px-5 flex flex-col ">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between">
        <div className="flex flex-col">
          <h1 className="font-semibold text-lg">Usuários</h1>
          <p className="text-muted-foreground text-sm">Aqui você pode controlar as informações dos usuários</p>
        </div>
        <Button 
          className="text-sm mt-4 md:mt w-full md:w-auto flex items-center" 
          onClick={handleCreateNewUser}
        >
          <Plus />
          Cadastrar Usuário
        </Button>
      </div>
      <div className="mt-4">
        <UsersList
          handleSelectUser={handleSelectUser}
        />
      </div>
    </Card>
    </div>
  );
}
