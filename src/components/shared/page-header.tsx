import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
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
        {eyebrow ? <Badge variant="accent">{eyebrow}</Badge> : null}

        <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl">
          {title}
        </h1>

        {description ? (
          <p className="mt-6 text-lg leading-8 text-muted">
            {description}
          </p>
        ) : null}
      </Container>
    </Section>
  );
}