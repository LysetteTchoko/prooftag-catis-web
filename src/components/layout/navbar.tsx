"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { mainNavigation } from "@/constants/navigation";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/90 backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/brand/prooftag-catis-logo.png"
              alt="PROOFTAG CATIS"
              width={170}
              height={48}
              priority
              className="h-auto w-[150px] md:w-[170px]"
            />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {mainNavigation.map((item) => {
              const isActive = isActivePath(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "text-sm font-medium transition",
                    isActive
                      ? "text-primary"
                      : "text-muted hover:text-primary"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <button
              type="button"
              aria-label="Changer la langue"
              className="text-sm font-semibold text-muted transition hover:text-primary"
            >
              FR / EN
            </button>

            <Button asChild size="md">
              <Link href="/contact">Nous contacter</Link>
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground lg:hidden"
            onClick={() => setIsOpen((value) => !value)}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
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
            <nav className="flex flex-col gap-2 border-t border-border pt-4">
              {mainNavigation.map((item) => {
                const isActive = isActivePath(pathname, item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "rounded-md px-3 py-3 text-sm font-medium transition",
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-muted hover:bg-surface-muted hover:text-primary"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <div className="mt-3 flex items-center justify-between px-3">
                <button
                  type="button"
                  aria-label="Changer la langue"
                  className="text-sm font-semibold text-muted"
                >
                  FR / EN
                </button>

                <Button asChild size="sm">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Contact
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