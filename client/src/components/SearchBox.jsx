import React, { useState } from "react";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { RouteSearch } from "@/helpers/RouteName";
import { useNavigate } from "react-router-dom";

const SearchBox = ({ className, ...props }) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState();

  const getInput = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(RouteSearch(query));
  };
  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <Input
        name="q"
        onInput={getInput}
        placeholder="Search here..."
        className={cn(
          "h-9 rounded-full border-input text-sm px-4 bg-gray-50",
          className,
        )}
        {...props}
      />
    </form>
  );
};

export default SearchBox;
