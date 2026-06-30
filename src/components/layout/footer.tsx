import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { company } from "@/constants/company";
import { footerNavigation } from "@/constants/navigation";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container>
        <div className="grid gap-10 py-14 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Link href="/" className="inline-flex">
              <Image
                src="/images/brand/prooftag-catis-logo.png"
                alt={company.name}
                width={180}
                height={52}
                className="h-auto w-[170px]"
              />
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-muted">
              {company.description}
            </p>

            <div className="mt-6 space-y-2 text-sm text-muted">
              <p>{company.address}</p>
              <p>{company.email}</p>
              <p>{company.phone}</p>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            <FooterColumn
              title="Entreprise"
              links={footerNavigation.company}
            />

            <FooterColumn
              title="Expertises"
              links={footerNavigation.expertise}
            />

            <FooterColumn
              title="Solutions"
              links={footerNavigation.solutions}
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-border py-6 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {company.name}. Tous droits réservés.
          </p>

          <div className="flex gap-5">
            <Link href="/mentions-legales" className="transition hover:text-primary">
              Mentions légales
            </Link>

            <Link href="/confidentialite" className="transition hover:text-primary">
              Confidentialité
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

type FooterColumnProps = {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
};

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground">
        {title}
      </h3>

      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-muted transition hover:text-primary"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}