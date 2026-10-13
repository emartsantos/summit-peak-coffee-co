import * as React from "react";
import { cn } from "@/lib/utils";

const controlBase =
  "w-full rounded-none border-0 border-b bg-transparent px-0 py-3 font-sans text-[1rem] text-foreground placeholder:text-stone-soft/70 transition-colors duration-300 focus-visible:outline-none disabled:opacity-50";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(function Input({ className, ...props }, ref) {
  return (
    <input
      ref={ref}
      className={cn(
        controlBase,
        "border-border focus:border-forest aria-[invalid=true]:border-terracotta",
        className,
      )}
      {...props}
    />
  );
});

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(function Textarea({ className, ...props }, ref) {
  return (
    <textarea
      ref={ref}
      className={cn(
        controlBase,
        "min-h-32 resize-y border-border focus:border-forest aria-[invalid=true]:border-terracotta",
        className,
      )}
      {...props}
    />
  );
});

export const Select = React.forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement>
>(function Select({ className, children, ...props }, ref) {
  return (
    <select
      ref={ref}
      className={cn(
        controlBase,
        "cursor-pointer border-border bg-transparent pr-8 focus:border-forest aria-[invalid=true]:border-terracotta",
        "appearance-none bg-[length:14px] bg-[right_0.25rem_center] bg-no-repeat",
        className,
      )}
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%231b3b2b' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
      }}
      {...props}
    >
      {children}
    </select>
  );
});
