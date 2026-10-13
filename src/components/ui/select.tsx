"use client";

import * as React from "react";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type SelectOption = {
  value: string;
  label: string;
};

type SelectMenuProps = {
  id?: string;
  options: readonly SelectOption[];
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  invalid?: boolean;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
  "aria-describedby"?: string;
};

export function SelectMenu({
  id,
  options,
  value,
  onChange,
  onBlur,
  invalid,
  disabled,
  placeholder = "Select an option",
  className,
  "aria-describedby": ariaDescribedBy,
}: SelectMenuProps) {
  const listboxId = React.useId();
  const rootRef = React.useRef<HTMLDivElement>(null);
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const optionRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  const typeahead = React.useRef("");
  const typeaheadTimer = React.useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );

  const [open, setOpen] = React.useState(false);
  const selectedIndex = options.findIndex((o) => o.value === value);
  const [activeIndex, setActiveIndex] = React.useState(
    selectedIndex >= 0 ? selectedIndex : 0,
  );

  const selected = selectedIndex >= 0 ? options[selectedIndex] : undefined;

  const openMenu = React.useCallback(
    (startAt?: number) => {
      if (disabled) return;
      setOpen(true);
      const fallback = selectedIndex >= 0 ? selectedIndex : 0;
      setActiveIndex(startAt ?? fallback);
    },
    [disabled, selectedIndex],
  );

  const closeMenu = React.useCallback(() => {
    setOpen(false);
    typeahead.current = "";
  }, []);

  const commit = React.useCallback(
    (index: number) => {
      const option = options[index];
      if (option) onChange(option.value);
      closeMenu();
      buttonRef.current?.focus();
    },
    [options, onChange, closeMenu],
  );

  React.useEffect(() => {
    if (!open) return;
    function onPointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) closeMenu();
    }
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open, closeMenu]);

  React.useEffect(() => {
    if (!open) return;
    optionRefs.current[activeIndex]?.scrollIntoView({ block: "nearest" });
  }, [open, activeIndex]);

  function moveActive(delta: number) {
    setActiveIndex((prev) => {
      const next = prev + delta;
      if (next < 0) return options.length - 1;
      if (next >= options.length) return 0;
      return next;
    });
  }

  function handleTypeahead(char: string) {
    typeahead.current += char.toLowerCase();
    if (typeaheadTimer.current) clearTimeout(typeaheadTimer.current);
    typeaheadTimer.current = setTimeout(() => {
      typeahead.current = "";
    }, 500);

    const query = typeahead.current;
    const start = open ? activeIndex + 1 : 0;
    for (let i = 0; i < options.length; i += 1) {
      const index = (start + i) % options.length;
      if (options[index].label.toLowerCase().startsWith(query)) {
        if (!open) openMenu(index);
        else setActiveIndex(index);
        return;
      }
    }
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLButtonElement>) {
    if (disabled) return;

    if (!open) {
      if (
        event.key === "ArrowDown" ||
        event.key === "ArrowUp" ||
        event.key === "Enter" ||
        event.key === " "
      ) {
        event.preventDefault();
        openMenu(event.key === "ArrowUp" ? options.length - 1 : undefined);
        return;
      }
    } else {
      switch (event.key) {
        case "ArrowDown":
          event.preventDefault();
          moveActive(1);
          return;
        case "ArrowUp":
          event.preventDefault();
          moveActive(-1);
          return;
        case "Home":
          event.preventDefault();
          setActiveIndex(0);
          return;
        case "End":
          event.preventDefault();
          setActiveIndex(options.length - 1);
          return;
        case "Enter":
        case " ":
          event.preventDefault();
          commit(activeIndex);
          return;
        case "Escape":
          event.preventDefault();
          closeMenu();
          return;
        case "Tab":
          closeMenu();
          return;
      }
    }

    if (
      event.key.length === 1 &&
      !event.altKey &&
      !event.ctrlKey &&
      !event.metaKey &&
      event.key !== " "
    ) {
      handleTypeahead(event.key);
    }
  }

  function handleBlur(event: React.FocusEvent<HTMLDivElement>) {
    if (rootRef.current?.contains(event.relatedTarget as Node)) return;
    closeMenu();
    onBlur?.();
  }

  return (
    <div ref={rootRef} className="relative" onBlur={handleBlur}>
      <button
        ref={buttonRef}
        id={id}
        type="button"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listboxId}
        aria-activedescendant={
          open ? `${listboxId}-option-${activeIndex}` : undefined
        }
        aria-invalid={invalid ? true : undefined}
        aria-describedby={ariaDescribedBy}
        disabled={disabled}
        onClick={() => (open ? closeMenu() : openMenu())}
        onKeyDown={handleKeyDown}
        className={cn(
          "flex w-full items-center justify-between gap-3 rounded-none border-0 border-b border-border bg-transparent px-0 py-3 text-left font-sans text-[1rem] text-foreground transition-colors duration-300 focus-visible:outline-none aria-[invalid=true]:border-terracotta",
          open && "border-forest",
          !open && "focus:border-forest",
          disabled && "cursor-not-allowed opacity-50",
          !selected && "text-stone-soft",
          className,
        )}
      >
        <span className="truncate">{selected ? selected.label : placeholder}</span>
        <ChevronDown
          aria-hidden="true"
          className={cn(
            "h-4 w-4 shrink-0 text-forest transition-transform duration-300",
            open && "rotate-180",
          )}
        />
      </button>

      {open ? (
        <div
          id={listboxId}
          role="listbox"
          aria-label="Options"
          onMouseDown={(event) => event.preventDefault()}
          className="select-panel absolute inset-x-0 top-full z-50 mt-1 max-h-72 overflow-auto border border-border bg-surface shadow-[0_26px_60px_-24px_rgba(27,59,43,0.5)]"
        >
          {options.map((option, index) => {
            const isSelected = index === selectedIndex;
            const isActive = index === activeIndex;
            return (
              <div
                key={option.value}
                ref={(node) => {
                  optionRefs.current[index] = node;
                }}
                id={`${listboxId}-option-${index}`}
                role="option"
                aria-selected={isSelected}
                onClick={() => commit(index)}
                onMouseEnter={() => setActiveIndex(index)}
                className={cn(
                  "flex cursor-pointer items-center justify-between gap-3 border-t border-border/60 px-4 py-3 font-sans text-[0.95rem] transition-colors duration-150 first:border-t-0",
                  isActive && "bg-forest/5",
                  isSelected ? "font-medium text-forest" : "text-foreground/85",
                )}
              >
                <span className="truncate">{option.label}</span>
                {isSelected ? (
                  <Check
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 text-terracotta"
                  />
                ) : null}
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
