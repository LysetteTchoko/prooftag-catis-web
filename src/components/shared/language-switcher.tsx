"use client";

import { locales } from "@/constants/locales";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = {
  className?: string;
};

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const currentLocale = "fr";

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-md border border-border bg-surface p-1",
        className
      )}
      aria-label="Sélecteur de langue"
    >
      {locales.map((locale) => {
        const isActive = locale.code === currentLocale;

        return (
          <button
            key={locale.code}
            type="button"
            aria-pressed={isActive}
            className={cn(
              "rounded px-2.5 py-1.5 text-xs font-semibold transition",
              isActive
                ? "bg-primary text-primary-foreground"
                : "text-muted hover:bg-surface-muted hover:text-primary"
            )}
          >
            {locale.shortLabel}
          </button>
        );
      })}
    </div>
  );
}