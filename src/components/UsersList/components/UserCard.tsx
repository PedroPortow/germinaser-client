"use client";

import { Card } from "@ui/card";
import { User } from "@/types/user";
import { CardComponentProps } from "@/components/List/List";
import { SquarePen } from "lucide-react";

const UserCard: React.FC<CardComponentProps<User>> = ({ item: user, onClick }) => {

  return (
    <Card
      className="w-full px-4 py-2 cursor-pointer hover:bg-gray-50 hover:shadow-md transition duration-200"
      role="button"
      onClick={() => onClick(user)}
    >
      <div className="w-full h-full flex flex-row justify-between items-center">
        <div className="flex w-full">
          <h3 className="font-medium">{user.name}</h3>
        </div>
        <div className="flex row gap-2">
          <SquarePen 
            size={16}
          />
        </div>
      </div>
    </Card>
  );
};

export default UserCard;
