"use client";

import React, { useState } from "react";
import List from "../List";
import { User } from "@/types/user";
import { UserCard } from "./components";
import { useGetAllUsers } from "@/hooks";
import { GetAllUsersResponse } from "@/hooks/queries/useGetAllUsers";
import SearchInput from "../SearchInput";

interface UsersListProps {
  handleSelectUser: (user: User) => void
}

const UsersList = ({ handleSelectUser }: UsersListProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filterByName, setFilterByName] = useState<string>('')

  const { data = {} as GetAllUsersResponse, isLoading } = useGetAllUsers({
    params: {
      page: currentPage,
      per_page: 6,
      by_name: filterByName
    }
  })

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPage(1);
    setFilterByName(e.target.value);
  };
  return (
    <div>
      <SearchInput
        className="mb-4"
        placeholder="Pesquisar por nome"
        onChange={handleSearchChange}
      />
      <List
        cardComponent={UserCard}
        isLoading={isLoading}
        meta={data.meta}
        getKey={user => user.id}
        perPage={10}
        data={data.users}
        onCardClick={(user) => handleSelectUser(user)}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default UsersList;
