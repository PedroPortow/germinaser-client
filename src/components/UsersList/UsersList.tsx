/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState } from "react";
import List from "../List";
import { User } from "@/types/user";
import { UserCard } from "./components";
import { useGetAllUsers } from "@/hooks";
import { GetAllUsersResponse } from "@/hooks/queries/useGetAllUsers";

const UsersList = () => { 
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [currentPage, setCurrentPage] = useState(1);
 
  const { data = {} as GetAllUsersResponse, isLoading } = useGetAllUsers({
    params: {
      page: currentPage,
      per_page: 6
    }
  })
  
  const handleItemClick = (user: User) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  return (
    <div>
      <List 
        cardComponent={UserCard}
        isLoading={isLoading}
        meta={data.meta}
        getKey={user => user.id}
        perPage={10}
        data={data.users}
        onCardClick={(item) => handleItemClick(item)}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default UsersList;
