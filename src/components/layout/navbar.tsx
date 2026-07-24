"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

import { Container } from "@/components/layout/container";
import { LanguageSwitcher } from "@/components/shared/language-switcher";
import { Button } from "@/components/ui/button";
import { mainNavigation } from "@/constants/navigation";
import {
  getLocaleFromPathname,
  getLocalizedString,
  localizePathname,
  removeLocaleFromPathname,
} from "@/lib/i18n";
import { cn } from "@/lib/utils";

const navbarLabels = {
  contact: {
    fr: "Nous contacter",
    en: "Contact us",
  },
  closeMenu: {
    fr: "Fermer le menu",
    en: "Close menu",
  },
  openMenu: {
    fr: "Ouvrir le menu",
    en: "Open menu",
  },
  primaryNavigation: {
    fr: "Navigation principale",
    en: "Primary navigation",
  },
  mobileNavigation: {
    fr: "Navigation mobile",
    en: "Mobile navigation",
  },
} as const;

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname();
  const currentLocale = getLocaleFromPathname(pathname);
  const pathnameWithoutLocale = removeLocaleFromPathname(pathname);
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileSections, setOpenMobileSections] = useState<string[]>([]);

  const toggleMobileSection = (href: string) => {
    setOpenMobileSections((sections) =>
      sections.includes(href)
        ? sections.filter((section) => section !== href)
        : [...sections, href]
    );
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/90 backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link
            href={localizePathname("/", currentLocale)}
            className="flex items-center gap-3"
          >
            <Image
              src="/images/brand/prooftag-catis-logo.png"
              alt="PROOFTAG CATIS"
              width={320}
              height={188}
              preload
              className="h-auto w-[105px] md:w-[120px] xl:w-[130px]"
            />
          </Link>

          <nav
            aria-label={getLocalizedString(
              navbarLabels.primaryNavigation,
              currentLocale
            )}
            className="hidden items-center gap-5 xl:gap-8 lg:flex"
          >
            {mainNavigation.map((item) => {
              const isActive = isActivePath(
                pathnameWithoutLocale,
                item.href
              );
              const children = "children" in item ? item.children : [];
              const hasChildren = children.length > 0;
              const isDropdownOpen = openDropdown === item.href;

              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => {
                    if (hasChildren) {
                      setOpenDropdown(item.href);
                    }
                  }}
                  onMouseLeave={() => {
                    if (hasChildren) {
                      setOpenDropdown(null);
                    }
                  }}
                  onFocus={() => {
                    if (hasChildren) {
                      setOpenDropdown(item.href);
                    }
                  }}
                  onBlur={(event) => {
                    if (
                      hasChildren &&
                      !event.currentTarget.contains(event.relatedTarget)
                    ) {
                      setOpenDropdown(null);
                    }
                  }}
                  onKeyDown={(event) => {
                    if (event.key === "Escape") {
                      setOpenDropdown(null);
                    }
                  }}
                >
                  <Link
                    href={localizePathname(item.href, currentLocale)}
                    aria-current={isActive ? "page" : undefined}
                    aria-haspopup={hasChildren ? "true" : undefined}
                    aria-expanded={hasChildren ? isDropdownOpen : undefined}
                    className={cn(
                      "inline-flex items-center gap-1.5 py-7 text-sm font-medium transition",
                      isActive
                        ? "text-primary"
                        : "text-muted hover:text-primary"
                    )}
                    onClick={() => setOpenDropdown(null)}
                  >
                    {getLocalizedString(item.label, currentLocale)}

                    {hasChildren ? (
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          isDropdownOpen && "rotate-180"
                        )}
                        aria-hidden="true"
                      />
                    ) : null}
                  </Link>

                  {hasChildren ? (
                    <div
                      className={cn(
                        "absolute left-1/2 top-full z-50 w-80 -translate-x-1/2 pt-2 transition duration-200",
                        isDropdownOpen
                          ? "pointer-events-auto translate-y-0 opacity-100"
                          : "pointer-events-none translate-y-1 opacity-0"
                      )}
                    >
                      <div className="overflow-hidden rounded-xl border border-border bg-background shadow-xl">
                        <div className="grid gap-1 p-2">
                          {children.map((child) => {
                            const isChildActive = isActivePath(
                              pathnameWithoutLocale,
                              child.href
                            );

                            return (
                              <Link
                                key={child.href}
                                href={localizePathname(
                                  child.href,
                                  currentLocale
                                )}
                                aria-current={
                                  isChildActive ? "page" : undefined
                                }
                                className={cn(
                                  "rounded-lg px-4 py-3 text-sm font-medium leading-5 transition",
                                  isChildActive
                                    ? "bg-primary/10 text-primary"
                                    : "text-muted hover:bg-surface-muted hover:text-primary"
                                )}
                                onClick={() => setOpenDropdown(null)}
                              >
                                {getLocalizedString(
                                  child.label,
                                  currentLocale
                                )}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 xl:gap-4 lg:flex">
            <LanguageSwitcher />

            <Button asChild size="md">
              <Link href={localizePathname("/contact", currentLocale)}>
                {getLocalizedString(navbarLabels.contact, currentLocale)}
              </Link>
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground lg:hidden"
            onClick={() => setIsOpen((value) => !value)}
            aria-label={
              getLocalizedString(
                isOpen ? navbarLabels.closeMenu : navbarLabels.openMenu,
                currentLocale
              )
            }
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <div
          id="mobile-navigation"
          className={cn(
            "grid overflow-hidden transition-all duration-300 lg:hidden",
            isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
          )}
        >
          <div className="min-h-0">
            <nav
              aria-label={getLocalizedString(
                navbarLabels.mobileNavigation,
                currentLocale
              )}
              className="flex flex-col gap-2 border-t border-border pt-4"
            >
              {mainNavigation.map((item) => {
                const isActive = isActivePath(
                  pathnameWithoutLocale,
                  item.href
                );
                const children = "children" in item ? item.children : [];
                const hasChildren = children.length > 0;
                const mobileSectionId = `mobile-section-${item.href.replaceAll("/", "-")}`;
                const isMobileSectionOpen =
                  openMobileSections.includes(item.href) ||
                  (isActive && hasChildren);

                return (
                  <div key={item.href}>
                    <div
                      className={cn(
                        "flex items-center rounded-md transition",
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-muted hover:bg-surface-muted hover:text-primary"
                      )}
                    >
                      <Link
                        href={localizePathname(item.href, currentLocale)}
                        aria-current={isActive ? "page" : undefined}
                        className="min-w-0 flex-1 px-3 py-3 text-sm font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        {getLocalizedString(item.label, currentLocale)}
                      </Link>

                      {hasChildren ? (
                        <button
                          type="button"
                          className="mr-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md transition hover:bg-background"
                          aria-expanded={isMobileSectionOpen}
                          aria-controls={mobileSectionId}
                          onClick={() => toggleMobileSection(item.href)}
                        >
                          <ChevronDown
                            className={cn(
                              "h-4 w-4 transition-transform",
                              isMobileSectionOpen && "rotate-180"
                            )}
                            aria-hidden="true"
                          />
                          <span className="sr-only">
                            {getLocalizedString(item.label, currentLocale)}
                          </span>
                        </button>
                      ) : null}
                    </div>

                    {hasChildren ? (
                      <div
                        id={mobileSectionId}
                        className={cn(
                          "grid overflow-hidden transition-all duration-200",
                          isMobileSectionOpen
                            ? "grid-rows-[1fr]"
                            : "grid-rows-[0fr]"
                        )}
                      >
                        <div className="ml-3 mt-1 grid min-h-0 gap-1 border-l border-border pl-3">
                        {children.map((child) => {
                          const isChildActive = isActivePath(
                            pathnameWithoutLocale,
                            child.href
                          );

                          return (
                            <Link
                              key={child.href}
                              href={localizePathname(
                                child.href,
                                currentLocale
                              )}
                              aria-current={
                                isChildActive ? "page" : undefined
                              }
                              className={cn(
                                "rounded-md px-3 py-2 text-sm font-medium transition",
                                isChildActive
                                  ? "bg-primary/10 text-primary"
                                  : "text-muted hover:bg-surface-muted hover:text-primary"
                              )}
                              onClick={() => setIsOpen(false)}
                            >
                              {getLocalizedString(
                                child.label,
                                currentLocale
                              )}
                            </Link>
                          );
                        })}
                        </div>
                      </div>
                    ) : null}
                  </div>
                );
              })}

              <div className="mt-3 flex flex-wrap items-center justify-between gap-3 px-3">
                <LanguageSwitcher />

                <Button asChild size="sm">
                  <Link
                    href={localizePathname("/contact", currentLocale)}
                    onClick={() => setIsOpen(false)}
                  >
                    {getLocalizedString(navbarLabels.contact, currentLocale)}
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </Container>
    </header>
  );
}
