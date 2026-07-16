import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex max-w-full items-center rounded-full border px-3 py-1 text-left text-xs font-semibold uppercase leading-5 tracking-[0.12em] whitespace-normal",
  {
    variants: {
      variant: {
        default: "border-border bg-surface text-muted",
        primary: "border-primary/20 bg-primary/10 text-primary",
        accent: "border-accent/20 bg-accent/10 text-accent",
        outline: "border-border bg-transparent text-foreground",
      },
    },
    defaultVariants: {
      variant: "accent",
    },
  }
);

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof badgeVariants>;

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}
