import * as React from "react";

import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { Button } from "./button";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

const SearchInput = () => (
  <div className="relative">
    <div className="pointer-events-none absolute inset-y-0 left-6 flex items-center">
      <Search className="h-5 w-5 text-gray-400" />
    </div>
    <Input
      type="text"
      placeholder="Search for any word, location and source..."
      className="focus:border-blue-1 focus:ring-blue-1 h-[72px] w-[690px] rounded-full border-gray-300 bg-white p-0 pl-[50px] text-sm placeholder:text-[#ACA9A9]"
    />
    <Button
      type="submit"
      className="absolute right-[14px] top-1/2 -translate-y-1/2 transform rounded-full text-xl font-normal text-white"
      size={"lg"}
    >
      Search
    </Button>
  </div>
);

export { Input, SearchInput };
