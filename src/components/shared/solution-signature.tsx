import {
  BadgeCheck,
  BarChart3,
  CarFront,
  Database,
  FileCheck2,
  QrCode,
  ScanSearch,
  ShieldCheck,
} from "lucide-react";

import { cn } from "@/lib/utils";

type SolutionSignatureProps = {
  variant: "certidocs" | "verif" | "doser";
  className?: string;
};

export function SolutionSignature({
  variant,
  className,
}: SolutionSignatureProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative h-[8.5rem] overflow-hidden rounded-lg border border-primary/10 bg-[linear-gradient(135deg,#f7fbff_0%,#ffffff_52%,#eaf7ff_100%)] p-4 shadow-sm",
        className
      )}
    >
      {variant === "certidocs" ? <CertidocsSignature /> : null}
      {variant === "verif" ? <VerificationSignature /> : null}
      {variant === "doser" ? <DoserSignature /> : null}
    </div>
  );
}

function CertidocsSignature() {
  return (
    <div className="relative h-full">
      <div className="absolute left-0 top-0 h-[6.8rem] w-[7.4rem] rounded-lg border border-border bg-white p-3 shadow-card">
        <div className="flex items-center gap-2">
          <FileCheck2 className="h-5 w-5 text-primary" />
          <span className="h-2 w-16 rounded-full bg-primary/20" />
        </div>
        <div className="mt-4 space-y-2">
          <span className="block h-2 w-full rounded-full bg-slate-200" />
          <span className="block h-2 w-4/5 rounded-full bg-slate-200" />
          <span className="block h-2 w-3/5 rounded-full bg-slate-200" />
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="h-5 w-14 rounded-md bg-accent/15" />
          <ShieldCheck className="h-5 w-5 text-accent" />
        </div>
      </div>

      <div className="absolute bottom-0 right-0 flex h-[5.8rem] w-[5.8rem] items-center justify-center rounded-lg border border-primary/15 bg-white shadow-card">
        <QrCode className="h-12 w-12 text-primary" />
      </div>

      <div className="absolute right-[4.6rem] top-6 flex h-10 w-10 items-center justify-center rounded-full border border-accent/25 bg-accent/10 text-accent shadow-sm">
        <span className="h-4 w-4 rounded-full border-2 border-current" />
      </div>
    </div>
  );
}

function VerificationSignature() {
  return (
    <div className="flex h-full flex-col justify-between">
      <div className="flex items-center justify-between gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <CarFront className="h-6 w-6" />
        </div>
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-primary shadow-sm">
          <QrCode className="h-6 w-6" />
        </div>
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
          <BadgeCheck className="h-6 w-6" />
        </div>
      </div>

      <div className="rounded-lg border border-border bg-white p-3 shadow-card">
        <div className="flex items-center gap-2">
          <ScanSearch className="h-4 w-4 text-primary" />
          <span className="h-2 w-24 rounded-full bg-primary/20" />
        </div>
        <div className="mt-3 flex items-center justify-between gap-3">
          <span className="rounded-md border border-border px-3 py-1 font-mono text-[0.68rem] font-bold text-foreground">
            LT-000-CT
          </span>
          <span className="h-6 w-16 rounded-full bg-accent/15" />
        </div>
      </div>
    </div>
  );
}

function DoserSignature() {
  const bars = ["h-7", "h-12", "h-9", "h-16", "h-11"];

  return (
    <div className="grid h-full grid-cols-[0.9fr_1.1fr] gap-3">
      <div className="rounded-lg border border-border bg-white p-3 shadow-card">
        <div className="flex items-center justify-between">
          <Database className="h-4 w-4 text-primary" />
          <span className="h-2 w-12 rounded-full bg-accent/20" />
        </div>
        <div className="mt-4 flex items-end gap-2">
          {bars.map((height, index) => (
            <span
              key={`${height}-${index}`}
              className={cn(
                "w-full rounded-t-md",
                height,
                index === 1 ? "bg-primary/45" : "bg-primary/20"
              )}
            />
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden rounded-lg border border-border bg-primary/5 p-3 shadow-card">
        <BarChart3 className="absolute right-3 top-3 h-5 w-5 text-primary" />
        <span className="absolute left-[20%] top-[28%] h-10 w-14 rounded-full bg-primary/15" />
        <span className="absolute bottom-[18%] right-[18%] h-12 w-16 rounded-full bg-accent/15" />
        <span className="absolute left-[42%] top-[46%] h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-primary/15" />
        <span className="absolute bottom-[30%] right-[32%] h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-accent/15" />
      </div>
    </div>
  );
}
