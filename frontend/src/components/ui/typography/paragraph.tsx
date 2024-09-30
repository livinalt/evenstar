<p>Hello world</p>;
import React from "react";
import { cn } from "@/lib/utils";

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

const Paragraph = ({ children, className, ...props }: Props) => {
  return (
    <p className={cn("text-xl text-white", className)} {...props}>
      {children}
    </p>
  );
};

export default Paragraph;
