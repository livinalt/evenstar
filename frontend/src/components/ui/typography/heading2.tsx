import React from "react";
import { cn } from "@/lib/utils";

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

const Heading2 = ({ children, className, ...props }: Props) => {
  return (
    <h2
      className={cn(
        "text-[32px] font-semibold leading-[44px] tracking-tight text-white",
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  );
};

export default Heading2;
