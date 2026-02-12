import { LandingCta } from "@/components/landing/cta";
import { LandingFeatures } from "@/components/landing/features";
import { LandingFooter } from "@/components/landing/footer";
import { LandingHero } from "@/components/landing/hero";
import { LandingNavbar } from "@/components/landing/navbar";
import { LandingPricing } from "@/components/landing/pricing";

export default function Page() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_10%_-10%,#6366f144,transparent_35%),radial-gradient(circle_at_90%_0%,#0ea5e944,transparent_35%)] bg-slate-950 text-slate-100">
      <a
        href="#main-content"
        className="sr-only z-[100] rounded-md bg-indigo-500 px-4 py-2 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <LandingNavbar />
      <main id="main-content" className="mx-auto w-[92%] max-w-6xl">
        <LandingHero />
        <LandingFeatures />
        <LandingPricing />
        <LandingCta />
      </main>
      <LandingFooter />
    </div>
  );
}
