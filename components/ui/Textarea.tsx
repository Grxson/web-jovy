import {
  forwardRef,
  type TextareaHTMLAttributes,
} from "react";
import { cn } from "@/lib/utils";

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>(function Textarea({ className, ...props }, ref) {
  return (
    <textarea
      ref={ref}
      className={cn(
        "w-full rounded-2xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm text-[var(--color-ink)] shadow-sm transition focus:border-[var(--color-primary)] focus:outline-none",
        className,
      )}
      {...props}
    />
  );
});
