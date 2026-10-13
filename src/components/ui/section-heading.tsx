import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
  titleClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "light",
  className,
  titleClassName,
}: Props) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? (
        <span className={cn("eyebrow", tone === "dark" && "text-terracotta-soft")}>
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cn(
          "max-w-3xl text-[length:var(--step-4)] md:text-[length:var(--step-5)]",
          tone === "dark" && "text-cream",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={cn(
            "measure max-w-xl text-[length:var(--step-1)] leading-relaxed",
            tone === "dark" ? "text-cream/70" : "text-muted",
            align === "center" && "mx-auto",
          )}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
