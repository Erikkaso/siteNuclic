import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border-transparent bg-[#006b83] text-white shadow-glow hover:bg-[#00566a]",
  secondary:
    "border-white/70 bg-[#67d9ef]/55 text-white hover:bg-[#67d9ef]/80",
  ghost:
    "border-transparent bg-transparent text-[#006b83] hover:bg-white/20 hover:text-[#004f63]",
};

const baseClasses =
  "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border px-5 py-3 text-base font-normal transition duration-200 hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-60";

interface SharedButtonProps {
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
  variant?: ButtonVariant;
}

type NativeButtonProps = SharedButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonLinkProps = SharedButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    to?: string;
  };

export function Button({
  children,
  className = "",
  icon,
  variant = "primary",
  type = "button",
  ...props
}: NativeButtonProps) {
  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
}

export function ButtonLink({
  children,
  className = "",
  icon,
  to,
  href,
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {icon}
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classes} {...props}>
      {icon}
      {children}
    </a>
  );
}
