import React from "react";
import { cn } from "@/lib/utils";

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

const Heading2 = ({ children, className, ...props }: Props) => {
  return (
    <h2
      className={cn(
        "text-2xl font-semibold tracking-tight text-white",
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  );
};

export default Heading2;
