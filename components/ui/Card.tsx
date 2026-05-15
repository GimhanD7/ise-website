import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
}

const Card = ({ className, children, hoverEffect = true, ...props }: CardProps) => {
  return (
    <div
      className={cn(
        "rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm",
        hoverEffect &&
          "transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-zinc-200",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export { Card };
