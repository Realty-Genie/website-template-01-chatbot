import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageCopy = {
  title: string;
  tagline: string;
  blurb: string;
  bullets?: string[];
};

const pageContent: Record<string, PageCopy> = {
  "about/meet-denise": {
    title: "Meet Denise",
    tagline: "About",
    blurb:
      "Get to know the vision, values, and relentless drive behind the Mai Real Estate Group—crafted by Denise for clients who expect white-glove service.",
  },
  "about/testimonial": {
    title: "Testimonial",
    tagline: "About",
    blurb: "Stories from clients who moved with confidence. A demo space for showcasing proof, impact, and the calm that comes from expert guidance.",
  },
  "about/privacy-policy": {
    title: "Privacy policy",
    tagline: "About",
    blurb: "Your data deserves the same care as your home. This demo page will house transparent terms that reflect our concierge approach to trust.",
  },
  "listings/featured-listings": {
    title: "Featured Listings",
    tagline: "Listings",
    blurb: "Signature properties with cinematic marketing and meticulous presentation—curated to mirror the caliber of your next move.",
  },
  "listings/listing-videos": {
    title: "Listing videos",
    tagline: "Listings",
    blurb: "Visual storytelling for modern buyers. Use this route to highlight film-quality tours and livestream launch strategies.",
  },
  "listings/past-sales": {
    title: "Past Sales",
    tagline: "Listings",
    blurb: "Proof of performance and negotiation excellence. Placeholder content for showcasing results with polish.",
  },
  "listings/office-listings": {
    title: "Office Listings",
    tagline: "Listings",
    blurb: "Team-wide inventory and collaborative opportunities. A hub to align buyers with exclusive office offerings.",
  },
  "property-search/burnaby": {
    title: "Burnaby",
    tagline: "Property search",
    blurb: "Neighborhood insights, transit-friendly pockets, and lifestyle matches across Burnaby—crafted as a search landing experience.",
  },
  "property-search/vancouver": {
    title: "Vancouver",
    tagline: "Property search",
    blurb: "Curated Vancouver opportunities with a luxury-first lens. Set the tone for custom alerts and private previews.",
  },
  "property-search/new-westminster": {
    title: "New Westminster",
    tagline: "Property search",
    blurb: "Historic charm meets waterfront living. Use this demo space for showcasing tailored searches across New Westminster.",
  },
  "property-search/custom": {
    title: "Custom",
    tagline: "Property search",
    blurb: "Bespoke criteria, concierge research, and on-demand reports. Placeholder copy for fully tailored property searches.",
  },
  "buy/buyers-guide": {
    title: "Buyers guide",
    tagline: "Buy",
    blurb: "Step-by-step clarity for confident purchases. A guided hub for timelines, financing prep, and offer strategy.",
  },
  "buy/mortgage-calculator": {
    title: "Mortgage Calculator",
    tagline: "Buy",
    blurb: "Plan with precision. This demo space will house tools and guidance to model payments against your goals.",
  },
  "sell/vancouver-home-evaluation": {
    title: "Vancouver Home evaluation",
    tagline: "Sell",
    blurb: "Data-forward valuations with luxury presentation in mind. Placeholder content for inviting owners into the process.",
  },
  "sell/vancouver-bc-sales-by-owner": {
    title: "Vancouver, BC Sales by owner",
    tagline: "Sell",
    blurb: "Resources for owners considering FSBO. Show how partnering with Mai Real Estate elevates exposure and safeguards value.",
  },
  "sell/get-started-today": {
    title: "Get started Today",
    tagline: "Sell",
    blurb: "A frictionless on-ramp to your sale: discovery call, staging roadmap, and launch dates—all outlined here.",
  },
  "sell/how-to-sell-a-home-fast": {
    title: "how to sell a home fast",
    tagline: "Sell",
    blurb: "Speed without sacrificing price. Use this page to outline rapid-list strategies, concierge prep, and VIP showing blocks.",
  },
  "sell/sellers-guide": {
    title: "Seller's guide",
    tagline: "Sell",
    blurb: "A calm, complete guide to selling with confidence. Demo content lives here until the full experience ships.",
  },
  "sell/british-columbia-tax-assesment": {
    title: "British columbia tax assesment",
    tagline: "Sell",
    blurb: "Clarity on tax timelines and obligations. Placeholder copy to keep clients informed while final content is authored.",
  },
  "blog/market-update-videos": {
    title: "Market Update videos",
    tagline: "Blog",
    blurb: "Timely commentary delivered in cinematic form. A demo route for embedding the latest Vancouver market insights.",
  },
};

const defaultBullets = [
  "Concierge communication with rapid follow-up.",
  "Data-led strategy paired with cinematic marketing.",
  "Trusted partners for financing, staging, and legal.",
];

export default function RoutePage({
  params,
}: {
  params: { category: string; slug: string };
}) {
  const key = `${params.category}/${params.slug}`;
  const copy = pageContent[key];

  if (!copy) {
    return notFound();
  }

  const bullets = copy.bullets ?? defaultBullets;

  return (
    <main className="min-h-screen bg-background text-white">
      <Navbar />

      <section className="pt-32 pb-20 bg-gradient-to-b from-black via-[#0d0d0d] to-background">
        <div className="container mx-auto px-6 md:px-12 space-y-8">
          <div className="text-xs uppercase tracking-[0.35em] text-primary/80">{copy.tagline}</div>
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold">{copy.title}</h1>
            <p className="text-white/70 leading-relaxed font-light">{copy.blurb}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bullets.map((item) => (
              <div
                key={item}
                className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
              >
                <p className="text-sm text-white/80">{item}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10 p-6 rounded-2xl border border-primary/20 bg-primary/5">
            <div className="space-y-2">
              <div className="text-xs uppercase tracking-[0.3em] text-primary/90">Demo route</div>
              <p className="text-white font-medium">
                This page is staged for navigation and layout—swap in final copy, media, or lead capture when ready.
              </p>
            </div>
            <div className="flex gap-3">
              <Button asChild variant="default" className="bg-primary text-black hover:bg-primary/90">
                <Link href="/">Return Home</Link>
              </Button>
              <Button asChild variant="outline" className="border-primary/60 text-white hover:bg-primary/10">
                <Link href="/#contact">Book a Call</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
