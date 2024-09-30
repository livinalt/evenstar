import React from "react";
import { cn } from "@/lib/utils";

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

const Heading3 = ({ children, className, ...props }: Props) => {
  return (
    <h3
      className={cn(
        "text-[32px] font-medium leading-[44px] tracking-tight text-white",
        className,
      )}
      {...props}
    >
      {children}
    </h3>
  );
};

export default Heading3;
