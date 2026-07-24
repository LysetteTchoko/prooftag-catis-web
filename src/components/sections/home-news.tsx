"use client";

import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/shared/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  homeNewsContent,
  homeNewsItems,
} from "@/data/home-news";
import { useLocale } from "@/hooks/use-locale";
import {
  getLocalizedString,
  localizePathname,
  type LocalizedString,
} from "@/lib/i18n";

export function HomeNews() {
  const locale = useLocale();

  const t = (value: LocalizedString) => {
    return getLocalizedString(value, locale);
  };

  return (
    <Section spacing="md">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow={t(homeNewsContent.eyebrow)}
            title={t(homeNewsContent.title)}
            description={t(homeNewsContent.description)}
          />

          <Button asChild variant="outline">
            <Link href={localizePathname("/actualites", locale)}>
              {t(homeNewsContent.allNews)}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {homeNewsItems.map((news) => (
            <Card key={news.href} className="flex h-full flex-col">
              <CardHeader>
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">{t(news.category)}</Badge>
                    <Badge variant="accent">{t(news.type)}</Badge>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <BookOpen className="h-5 w-5" />
                  </div>
                </div>

                <CardTitle className="text-xl">
                  {t(news.title)}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex-1">
                <p className="text-sm leading-7 text-muted">
                  {t(news.description)}
                </p>
              </CardContent>

              <CardFooter>
                <Link
                  href={localizePathname(news.href, locale)}
                  className="inline-flex items-center text-sm font-semibold text-primary transition hover:text-primary-hover"
                >
                  {t(homeNewsContent.readMore)}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
