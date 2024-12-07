"use client";

import React from "react";
import InputIcon from "../InputIcon";
import { Search } from "lucide-react";

interface SearchInputProps {
  className?: string;
}

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ className, ...props }, ref) => {
    return (
      <InputIcon
        icon={<Search size={18} color="hsl(var(--muted-foreground))" />}
        className={className} 
        ref={ref} 
        {...props} 
      />
    );
  },
);

SearchInput.displayName = "SearchInput";

export default SearchInput;