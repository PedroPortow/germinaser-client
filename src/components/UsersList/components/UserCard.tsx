"use client";

import { Card } from "@ui/card";
import { User } from "@/types/user";
import { CardComponentProps } from "@/components/List/List";

const UserCard: React.FC<CardComponentProps<User>> = ({ item: user, onClick }) => {

  return (
    <Card
      className="w-full px-4 py-2 cursor-pointer hover:bg-gray-50 hover:shadow-md transition duration-200"
      role="button"
      onClick={() => onClick(user)}
    >
      <div className="w-full h-full flex flex-col">
        <div className="flex w-full justify-between">
          <h3 className="font-semibold">{user.name}</h3>
        </div>
      </div>
    </Card>
  );
};

export default UserCard;
