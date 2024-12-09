"use client";

import React, { useState } from "react";
import InputIcon from "../InputIcon";
import { Eye, EyeOff } from "lucide-react";

interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, ...props }, ref) => {
    const [isHidden, setIsHidden] = useState(true);

    const toggleVisibility = () => {
      setIsHidden((prev) => !prev);
    };

    return (
      <InputIcon
        icon={
          <button
            type="button"
            onClick={toggleVisibility}
            className="flex items-center justify-center focus:outline-none"
            aria-label={isHidden ? "Mostrar senha" : "Esconder senha"}
          >
            {isHidden ? <Eye size={18} color="hsl(var(--muted-foreground))" /> : <EyeOff size={18} color="hsl(var(--muted-foreground))" />}
          </button>
        }
        type={isHidden ? "password" : "text"}
        className={className}
        ref={ref}
        {...props}
      />
    );
  }
);

PasswordInput.displayName = "PasswordInput";

export default PasswordInput;
