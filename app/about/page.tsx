import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const accolades = [
  { title: "Top 1% Realtors®", subtitle: "Greater Vancouver" },
  { title: "Medallion Club", subtitle: "7 consecutive years" },
  { title: "RE/MAX Hall of Fame", subtitle: "Achieved 2015" },
  { title: "Fortune 500 Experience", subtitle: "Accenture & Johnson & Johnson" },
  { title: "Community First", subtitle: "Top donor, Children’s Miracle Network" },
  { title: "Concierge Marketing", subtitle: "Exposure-first strategies" },
];

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-background text-white">
      <Navbar />

      <section className="pt-28 pb-16 bg-gradient-to-b from-black via-[#0d0d0d] to-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-primary text-sm font-medium tracking-[0.35em] uppercase opacity-90">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
                The Story Behind Mai Real Estate
              </h1>
              <p className="text-white/70 leading-relaxed font-light">
                Denise Mai was born and raised in Vancouver and now lives in Burnaby. With a Bachelor’s Degree
                from Simon Fraser University, Denise brings sophisticated marketing strategies to generate
                maximum exposure for every listing.
              </p>
              <p className="text-white/70 leading-relaxed font-light">
                Before real estate, Denise spent 10+ years in professional sales—first as a business analyst at
                Accenture, then as a marketing associate at Johnson & Johnson. She applies that Fortune 500
                rigor to achieve top-market results for her clients.
              </p>
              <p className="text-white/70 leading-relaxed font-light">
                Now a top 1% Medallion Club Realtor®, Denise earned the RE/MAX Hall of Fame distinction in 2015.
                She pairs data-driven valuation with cinematic marketing to help clients sell for a premium.
              </p>
              <p className="text-white/70 leading-relaxed font-light">
                Community impact is core to Denise’s work. She is a regular Canadian Blood Services donor and the
                top donor to her office’s Children’s Miracle Network. Her goal: provide friendly, knowledgeable
                advice you can trust, guiding you through every step with clarity and care.
              </p>
              <div className="flex gap-3">
                <Button asChild className="bg-primary text-black hover:bg-primary/90">
                  <Link href="/#contact">Book a Call</Link>
                </Button>
                <Button asChild variant="outline" className="border-primary/60 text-white hover:bg-primary/10">
                  <Link href="/">Back Home</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.45)] bg-white/5 backdrop-blur-md">
                <div className="relative aspect-[1/1]">
                  <Image src="https://ik.imagekit.io/mohakgupta/channels4_profile.jpg?updatedAt=1767683106077&ik-s=72c92eade0f0d6ee6f097781af2e035c96a30b10" alt="Denise Mai" fill className="object-cover" sizes="50vw" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
              </div>
              <div className="absolute -left-6 -bottom-6 w-32 h-32 rounded-2xl bg-primary/20 blur-3xl" />
              <div className="absolute -right-4 top-6 w-24 h-24 rounded-full bg-primary/10 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-12 space-y-3">
            <span className="text-primary text-sm font-medium tracking-[0.3em] uppercase opacity-90 block">
              Accolades
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold">Proven Results & Recognition</h2>
            <p className="text-white/60 max-w-3xl mx-auto font-light">
              Milestones that reflect years of discipline, client advocacy, and a commitment to elevating every listing
              with luxury-grade marketing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {accolades.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_16px_50px_rgba(0,0,0,0.35)] hover:border-primary/40 transition-all"
              >
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-white/60 text-sm mt-2">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
