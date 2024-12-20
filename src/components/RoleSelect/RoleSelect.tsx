'use client'

import { useGetUserRoles } from "@/hooks";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@ui/select"

interface RoleSelectProps {
  value?: string;
  onValueChange: (value: string) => void;
  queryEnabled?: boolean;
}

const RoleSelect: React.FC<RoleSelectProps> = ({ value, onValueChange, queryEnabled }) => {
  const { data: roles } = useGetUserRoles({ enabled: queryEnabled });

  return (
    <Select
      value={value}
      onValueChange={onValueChange}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Selecione um Cargo" />
      </SelectTrigger>
      <SelectContent>
        {roles?.map((role) => (
          <SelectItem key={role.value} value={role.value}>
            {role.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default RoleSelect
