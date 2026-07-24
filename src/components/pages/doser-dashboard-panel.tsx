"use client";

import {
  Activity,
  BarChart3,
  CheckCircle2,
  Database,
  FileText,
  MapPinned,
  TrendingUp,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/shared/section-header";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { useLocale } from "@/hooks/use-locale";
import {
  getLocalizedString,
  type LocalizedString,
} from "@/lib/i18n";

type StatusItem = {
  title: LocalizedString;
  status: LocalizedString;
  description: LocalizedString;
};

type DashboardMetric = {
  label: LocalizedString;
  value: LocalizedString;
  detail: LocalizedString;
};

type DashboardRow = {
  label: LocalizedString;
  status: LocalizedString;
  detail: LocalizedString;
};

type DoserDashboardPanelProps = {
  statusContent: {
    eyebrow: LocalizedString;
    title: LocalizedString;
    description: LocalizedString;
    note: LocalizedString;
  };
  statusItems: readonly StatusItem[];
  dashboardContent: {
    eyebrow: LocalizedString;
    title: LocalizedString;
    description: LocalizedString;
    conceptLabel: LocalizedString;
    metricsTitle: LocalizedString;
    mapTitle: LocalizedString;
    tableTitle: LocalizedString;
    dataStatusTitle: LocalizedString;
  };
  metrics: readonly DashboardMetric[];
  rows: readonly DashboardRow[];
};

const statusIcons = [Database, BarChart3, MapPinned, Activity, FileText];
const metricBars = ["h-16", "h-24", "h-12", "h-20"] as const;
const metricBarColors = [
  "bg-primary/20",
  "bg-primary/40",
  "bg-primary/20",
  "bg-primary/20",
] as const;

export function DoserDashboardPanel({
  statusContent,
  statusItems,
  dashboardContent,
  metrics,
  rows,
}: DoserDashboardPanelProps) {
  const locale = useLocale();

  const t = (value: LocalizedString) => {
    return getLocalizedString(value, locale);
  };

  return (
    <Section spacing="md">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow={t(statusContent.eyebrow)}
              title={t(statusContent.title)}
              description={t(statusContent.description)}
            />

            <div className="mt-8 grid gap-4">
              {statusItems.map((item, index) => {
                const Icon = statusIcons[index] ?? CheckCircle2;

                return (
                  <div
                    key={t(item.title)}
                    className="rounded-lg border border-border bg-surface p-5 shadow-card"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="flex gap-4">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" />
                        </span>

                        <div>
                          <h3 className="text-base font-bold tracking-tight text-foreground">
                            {t(item.title)}
                          </h3>

                          <p className="mt-2 text-sm leading-7 text-muted">
                            {t(item.description)}
                          </p>
                        </div>
                      </div>

                      <Badge variant={index < 2 ? "primary" : "outline"}>
                        {t(item.status)}
                      </Badge>
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="mt-5 rounded-lg border border-accent/20 bg-accent/10 p-4 text-sm leading-7 text-muted">
              {t(statusContent.note)}
            </p>
          </div>

          <Card
            padding="lg"
            className="overflow-hidden border-primary/15 bg-[linear-gradient(135deg,#ffffff_0%,#f5fbff_52%,#e9f7ff_100%)] shadow-soft"
          >
            <div className="flex flex-col gap-6">
              <div>
                <Badge variant="primary">
                  {t(dashboardContent.conceptLabel)}
                </Badge>

                <h3 className="mt-5 text-2xl font-bold tracking-tight text-foreground">
                  {t(dashboardContent.title)}
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted">
                  {t(dashboardContent.description)}
                </p>
              </div>

              <div className="overflow-hidden rounded-xl border border-primary/10 bg-background shadow-card">
                <div className="flex items-center justify-between border-b border-border bg-primary px-5 py-4 text-primary-foreground">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/65">
                      {t(dashboardContent.eyebrow)}
                    </p>
                    <p className="mt-1 text-sm font-bold text-white">
                      {t(dashboardContent.metricsTitle)}
                    </p>
                  </div>

                  <Activity className="h-5 w-5 text-white" />
                </div>

                <div className="grid gap-px bg-border sm:grid-cols-2">
                  {metrics.map((metric) => (
                    <div
                      key={t(metric.label)}
                      className="bg-[linear-gradient(180deg,#ffffff_0%,#f8fcff_100%)] p-5"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                            {t(metric.label)}
                          </p>
                          <p className="mt-3 text-2xl font-bold text-foreground">
                            {t(metric.value)}
                          </p>
                        </div>
                        <TrendingUp className="h-5 w-5 text-accent" />
                      </div>
                      <p className="mt-2 text-xs leading-5 text-muted">
                        {t(metric.detail)}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="grid gap-px bg-border lg:grid-cols-[0.9fr_1.1fr]">
                  <div className="bg-background p-5">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm font-bold text-foreground">
                        {t(dashboardContent.mapTitle)}
                      </p>
                      <MapPinned className="h-5 w-5 text-primary" />
                    </div>

                    <div className="relative mt-5 aspect-[4/3] overflow-hidden rounded-lg border border-border bg-[linear-gradient(135deg,#eef8ff_0%,#ffffff_100%)]">
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,74,132,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,74,132,0.08)_1px,transparent_1px)] bg-[size:28px_28px]" />
                      <span className="absolute left-[18%] top-[28%] h-16 w-24 rotate-[-12deg] rounded-full bg-primary/15" />
                      <span className="absolute right-[18%] top-[22%] h-20 w-16 rotate-[18deg] rounded-full bg-accent/15" />
                      <span className="absolute bottom-[18%] left-[34%] h-24 w-28 rotate-[10deg] rounded-full bg-secondary/10" />
                      <span className="absolute left-[38%] top-[40%] h-3 w-3 rounded-full bg-primary ring-4 ring-primary/20" />
                      <span className="absolute right-[31%] top-[34%] h-3 w-3 rounded-full bg-accent ring-4 ring-accent/20" />
                      <span className="absolute bottom-[29%] left-[47%] h-3 w-3 rounded-full bg-primary ring-4 ring-primary/20" />
                      <div className="absolute inset-x-6 bottom-5 grid grid-cols-4 items-end gap-2">
                        {metricBars.map((height, index) => {
                          const color =
                            metricBarColors[index] ?? "bg-primary/20";

                          return (
                            <span
                              key={height}
                              className={`${height} ${color} rounded-t-md`}
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="bg-background p-5">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm font-bold text-foreground">
                        {t(dashboardContent.tableTitle)}
                      </p>
                      <FileText className="h-5 w-5 text-primary" />
                    </div>

                    <div className="mt-5 space-y-3">
                      {rows.map((row) => (
                        <div
                          key={t(row.label)}
                          className="rounded-lg border border-border bg-surface p-3"
                        >
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <p className="text-sm font-semibold text-foreground">
                              {t(row.label)}
                            </p>
                            <Badge variant="outline">{t(row.status)}</Badge>
                          </div>
                          <p className="mt-2 text-xs leading-5 text-muted">
                            {t(row.detail)}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="border-t border-border bg-surface-muted p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                    {t(dashboardContent.dataStatusTitle)}
                  </p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    {statusItems.slice(0, 3).map((item) => (
                      <div
                        key={t(item.status)}
                        className="rounded-lg border border-border bg-background p-3"
                      >
                        <p className="text-xs font-semibold text-foreground">
                          {t(item.status)}
                        </p>
                        <p className="mt-1 text-xs leading-5 text-muted">
                          {t(item.title)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
