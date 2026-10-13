import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "group/btn relative inline-flex items-center justify-center gap-2.5 whitespace-nowrap font-sans font-medium tracking-[0.02em] transition-[transform,background-color,border-color,color] duration-300 ease-[var(--ease-out)] focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-55 active:translate-y-px",
  {
    variants: {
      variant: {
        primary:
          "bg-accent text-on-accent hover:bg-accent-strong focus-visible:outline-accent-strong shadow-[0_1px_0_rgba(0,0,0,0.04)] hover:shadow-[0_10px_30px_-12px_rgba(169,78,52,0.65)]",
        secondary:
          "border border-forest/30 bg-transparent text-forest hover:border-forest hover:bg-forest hover:text-cream focus-visible:outline-forest",
        light:
          "border border-cream/35 bg-transparent text-cream hover:bg-cream hover:text-forest focus-visible:outline-cream",
        solidLight:
          "bg-cream text-forest hover:bg-white focus-visible:outline-cream",
        ghost:
          "px-0 text-foreground hover:text-accent focus-visible:outline-forest",
      },
      size: {
        sm: "h-9 px-4 text-[0.8rem]",
        md: "h-12 px-6 text-[0.9rem]",
        lg: "h-14 px-8 text-[0.95rem]",
        none: "h-auto p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export function Button({
  className,
  variant,
  size,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

type ButtonLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof buttonVariants>;

export function ButtonLink({
  className,
  variant,
  size,
  ...props
}: ButtonLinkProps) {
  return (
    <a className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}
