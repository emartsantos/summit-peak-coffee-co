import { cn } from "@/lib/utils";

export function LogoMark({
  id = "sp-logo",
  className,
}: {
  id?: string;
  className?: string;
}) {
  const maskId = `${id}-bean`;
  return (
    <svg
      viewBox="0 0 40 40"
      role="img"
      aria-label="Summit Peak Coffee Co. mark"
      className={cn("h-8 w-8", className)}
    >
      <defs>
        <mask id={maskId}>
          <rect width="40" height="40" fill="#fff" />
          <path
            d="M20 5.5c-4 6.5 4 10 0 15.5s4 8.5 0 13"
            fill="none"
            stroke="#000"
            strokeWidth="2.1"
            strokeLinecap="round"
          />
        </mask>
      </defs>
      <path
        d="M20 3.6c1.2 0 2.3.64 2.9 1.7l12.4 21.5c1.35 2.33-.33 5.2-3.02 5.2H7.72c-2.69 0-4.37-2.87-3.02-5.2L17.1 5.3A3.37 3.37 0 0 1 20 3.6Z"
        fill="currentColor"
        mask={`url(#${maskId})`}
      />
    </svg>
  );
}

export function Wordmark({
  className,
  markClassName,
  id,
}: {
  className?: string;
  markClassName?: string;
  id?: string;
}) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <LogoMark id={id} className={cn("h-7 w-7 shrink-0", markClassName)} />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.15rem] font-medium tracking-[-0.01em]">
          Summit Peak
        </span>
        <span className="font-sans text-[0.6rem] font-medium uppercase tracking-[0.34em] opacity-70">
          Coffee Co.
        </span>
      </span>
    </span>
  );
}
