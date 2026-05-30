import { forwardRef, type HTMLAttributes, type ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  glow?: "cyan" | "purple" | "none";
}

const glowClasses: Record<NonNullable<CardProps["glow"]>, string> = {
  cyan: "hover:border-accent-cyan/50 hover:shadow-glow",
  purple: "hover:border-accent-purple/50 hover:shadow-glow-purple",
  none: "",
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className = "", glow = "cyan", ...props }, ref) => (
    <div
      ref={ref}
      className={`rounded-md border border-border bg-bg-card p-5 shadow-glow backdrop-blur transition duration-200 ${glowClasses[glow]} ${className}`}
      {...props}
    >
      {children}
    </div>
  ),
);

Card.displayName = "Card";
