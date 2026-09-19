import React from "react";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";

const SearchBox = ({ className, ...props }) => {
  return (
    <form className="w-full">
      <Input
        placeholder="Search here..."
        className={cn("h-9 rounded-full border-input text-sm px-4 bg-gray-50", className)}
        {...props}
      />
    </form>
  );
};

export default SearchBox;
