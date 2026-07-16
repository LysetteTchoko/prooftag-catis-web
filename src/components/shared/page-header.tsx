import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export function PageHeader({
  eyebrow,
  title,
  description,
  className,
}: PageHeaderProps) {
  return (
    <Section
      spacing="md"
      className={cn("border-b border-border bg-surface", className)}
    >
      <Container size="md">
        <Breadcrumbs />
        {eyebrow ? <Badge variant="accent">{eyebrow}</Badge> : null}

        <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-6xl">
          {title}
        </h1>

        {description ? (
          <p className="mt-6 text-base leading-8 text-muted md:text-lg">
            {description}
          </p>
        ) : null}
      </Container>
    </Section>
  );
}
