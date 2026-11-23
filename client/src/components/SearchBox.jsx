import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { RouteSearch, RouteIndex } from "@/helpers/RouteName";

const SearchBox = ({ className, ...props }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [refreshData, setRefreshData] = useState(false);
  const [query, setQuery] = useState();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const timer = setTimeout(() => {
      const trimmed = query.trim();
      if (trimmed) {
        navigate(RouteSearch(trimmed), { replace: true });
      } else {
        navigate(RouteIndex, { replace: true });
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [query]);

  const getInput = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = query.trim();
    navigate(trimmed ? RouteSearch(trimmed) : RouteIndex);
  };
  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <Input
        name="q"
        value={query}
        onChange={getInput}
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
