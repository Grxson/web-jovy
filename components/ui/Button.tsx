import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export function Button({
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-60",
        variant === "primary" &&
          "bg-[var(--color-primary)] text-white shadow-lg shadow-orange-200 hover:-translate-y-0.5 hover:bg-[var(--color-primary-dark)]",
        variant === "secondary" &&
          "bg-white text-[var(--color-ink)] ring-1 ring-[var(--color-border)] hover:bg-[var(--color-soft)]",
        className,
      )}
      {...props}
    />
  );
}
