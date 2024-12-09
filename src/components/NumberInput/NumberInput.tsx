"use client";

import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Minus, Plus } from "lucide-react";

interface NumberInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "value"> {
  className?: string;
  onChange: (value: number) => void;
  value: number;
}

const NumberInput = React.forwardRef<HTMLInputElement, NumberInputProps>(
  ({ className, onChange, value, ...props }, ref) => {
    const handleIncrement = () => {
      onChange(value + 1);
    };

    const handleDecrement = () => {
      onChange(value - 1);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.valueAsNumber);
    };

    return (
      <span className="flex gap-2 items-center">
        <Button onClick={handleDecrement} variant="outline" type="button">
          <Minus />
        </Button>
        <Input
          className={className}
          ref={ref}
          type="number"
          value={value}
          onChange={handleChange}
          {...props}
        />
        <Button onClick={handleIncrement} variant="outline" type="button">
          <Plus />
        </Button>
      </span>
    );
  }
);

NumberInput.displayName = "NumberInput";

export default NumberInput;
