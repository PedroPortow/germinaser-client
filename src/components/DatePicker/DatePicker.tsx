"use client";

import * as React from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale"
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DatePickerProps {
  value?: Date;
  onValueChange: (value: Date | undefined) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ value, onValueChange }) => (
  <Popover>
    <PopoverTrigger asChild>
      <Button
        variant={"outline"}
        className={cn(
          "justify-start text-left font-normal",
          !value && "text-muted-foreground"
        )}
      >
        <CalendarIcon className="mr-2 h-4 w-4" />
        {value ? format(value.toString(), "PPP", { locale: ptBR }): <span>Selecione uma data</span>}
      </Button>
    </PopoverTrigger>
    <PopoverContent className="w-auto p-0">
      <Calendar
        mode="single"
        locale={ptBR}
        selected={value}
        onSelect={onValueChange}
        initialFocus
      />
    </PopoverContent>
  </Popover>
);

export default DatePicker;
