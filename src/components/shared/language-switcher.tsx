"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { locales } from "@/constants/locales";
import {
  getLocaleFromPathname,
  localizePathname,
} from "@/lib/i18n";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = {
  className?: string;
};

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const currentLocale = getLocaleFromPathname(pathname);

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
          <Link
            key={locale.code}
            href={localizePathname(pathname, locale.code)}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "rounded px-2.5 py-1.5 text-xs font-semibold transition",
              isActive
                ? "bg-primary text-primary-foreground"
                : "text-muted hover:bg-surface-muted hover:text-primary"
            )}
          >
            {locale.shortLabel}
          </Link>
        );
      })}
    </div>
  );
}