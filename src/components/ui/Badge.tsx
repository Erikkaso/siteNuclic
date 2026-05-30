import type { HTMLAttributes, ReactNode } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

export function Badge({ children, className = "", ...props }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-white/60 bg-[#67d9ef]/70 px-3 py-1.5 text-sm font-normal text-white ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
