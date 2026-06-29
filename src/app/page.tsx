import { HomeChallenges } from "@/components/sections/home-challenges";
import { HomeHero } from "@/components/sections/home-hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HomeHero />
      <HomeChallenges />
    </main>
  );
}