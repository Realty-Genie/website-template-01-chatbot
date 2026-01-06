import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const faqs = [
  {
    q: "What’s the difference between assessed value and market value?",
    a: "Assessed value is used for property taxes; market value is what qualified buyers in today’s market would pay. They are often different because assessments lag the market.",
  },
  {
    q: "Can online estimates replace an agent-led evaluation?",
    a: "Tools like BC assessments, Trulia, or Zillow are helpful starting points but rarely account for condition, upgrades, staging, or micro-market dynamics. A tailored evaluation is more accurate.",
  },
  {
    q: "What improves (or hurts) value?",
    a: "Updates, maintenance, and presentation help; deferred repairs, poor staging, or mispricing hurt. We’ll flag the fastest ROI actions for your home and buyer profile.",
  },
];

export default function VancouverHomeEvaluationPage() {
  return (
    <main className="min-h-screen bg-background text-white">
      <Navbar />

      <section className="pt-28 pb-16 bg-gradient-to-b from-black via-[#0d0d0d] to-background">
        <div className="container mx-auto px-6 md:px-12 space-y-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-primary text-sm font-medium tracking-[0.35em] uppercase opacity-90">
              Sell
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold">Vancouver Home Evaluation</h1>
            <p className="text-white/70 leading-relaxed font-light">
              Click here to get started on a free Vancouver home evaluation! If you’re looking for the most up-to-date,
              context-rich view of your property’s value, Denise Mai and her team deliver a precise, market-ready
              appraisal—not just an automated estimate.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.6fr,1fr] gap-10 lg:gap-14 items-start">
            <div className="space-y-8">
              <article className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)] space-y-4">
                <p className="text-white/75 leading-relaxed font-light">
                  Are you trying to find the assessed value of your property in the Province of British Columbia? A BC
                  tax assessment is a starting point, but it often lags the market and rarely reflects today’s fair
                  market value.
                </p>
                <p className="text-white/75 leading-relaxed font-light">
                  Online estimates (Trulia, Zillow, or similar) can be helpful, but nothing replaces a Vancouver-based
                  REALTOR® who accounts for condition, upgrades, staging, and micro-neighbourhood trends. Denise and her
                  team layer market data with on-the-ground insight to give you a clearer picture.
                </p>
                <p className="text-white/75 leading-relaxed font-light">
                  If you’re interested in a property appraisal or home evaluation, share as much detail as possible. The
                  more we know, the more accurate your evaluation will be. We’ll provide the latest intel and context so
                  you can make confident decisions.
                </p>
                <p className="text-white/75 leading-relaxed font-light">
                  We can also help you understand common questions, like the difference between assessed value and market
                  value: assessed value is used for property taxes; market value is what qualified buyers would pay today.
                  We’ll advise on what drags value down and what boosts it up—so you can plan the smartest path forward.
                </p>
                <p className="text-white/75 leading-relaxed font-light">
                  Call us today and we’ll get to work on your Vancouver home evaluation or real estate appraisal. A
                  properly prepared evaluation is the foundation of every successful sale.
                </p>
              </article>

              <div className="bg-white/5 border border-primary/30 rounded-2xl p-6 md:p-8 backdrop-blur-sm space-y-4">
                <h2 className="text-2xl font-serif font-semibold">Start Your Evaluation</h2>
                <p className="text-white/70 text-sm leading-relaxed">
                  Share your property details and timing, and we’ll deliver a tailored, up-to-date valuation with clear
                  next steps.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button asChild className="bg-primary text-black hover:bg-primary/90">
                    <Link href="/#contact">Submit Your Property</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-primary/60 text-white hover:bg-primary/10 text-xs tracking-[0.25em] uppercase"
                  >
                    <Link href="tel:778-858-0996">Call Denise</Link>
                  </Button>
                </div>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-7">
                <h3 className="text-xs uppercase tracking-[0.3em] text-white/50">What We Deliver</h3>
                <ul className="mt-4 space-y-3 text-white/75 text-sm leading-relaxed">
                  <li>Micro-market comparables tailored to your property type and pocket.</li>
                  <li>Condition, upgrades, and staging review to surface value-add opportunities.</li>
                  <li>Pricing strategy aligned with your timing, goals, and current demand.</li>
                  <li>Clear guidance on repairs or tweaks that protect (or lift) your sale price.</li>
                </ul>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-7 space-y-4">
                <h3 className="text-lg font-serif font-semibold">Frequently Asked</h3>
                <div className="space-y-4">
                  {faqs.map((item) => (
                    <div key={item.q} className="space-y-2">
                      <p className="text-sm font-semibold text-white">{item.q}</p>
                      <p className="text-white/70 text-sm leading-relaxed">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
