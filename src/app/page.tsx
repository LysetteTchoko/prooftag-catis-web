import { HomeChallenges } from "@/components/sections/home-challenges";
import { HomeHero } from "@/components/sections/home-hero";
import { HomeSolutions } from "@/components/sections/home-solutions";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HomeHero />
      <HomeChallenges />
      <HomeSolutions />
    </main>
  );
}