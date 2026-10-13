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
