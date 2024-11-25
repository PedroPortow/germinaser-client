'use client'

import { useGetRooms } from "@/hooks";
import { Room } from "@/types/room";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@ui/select"

interface RoomSelectProps {
  value?: string;
  onValueChange: (value: string) => void;
  clinicId: number;
}

const RoomSelect: React.FC<RoomSelectProps> = ({ value, onValueChange, clinicId }) => {
  const { data: rooms } = useGetRooms(clinicId);

  return (
    <Select
      value={value}
      onValueChange={onValueChange}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Selecione uma sala" />
      </SelectTrigger>
      <SelectContent>
        {rooms?.map((room: Room) => (
          <SelectItem key={room.id} value={room.id}>
            {room.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default RoomSelect