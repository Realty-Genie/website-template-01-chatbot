import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const sections = [
  {
    title: "Get Your Finances In Order",
    body: [
      "Choosing to buy a home is one of the biggest decisions you’ll make in your life. It’s a complex process that deserves planning and expert guidance.",
      "The first step is your down payment: at minimum, you’ll need 5% of the purchase price of the home you’re planning to buy. From there, meeting with a mortgage broker will help you understand exactly what you can afford and which lending options best fit your goals.",
      "Treat your financing like any major investment—shop around for the best rate and structure. A small difference in your rate can have a big impact on your long‑term costs.",
    ],
  },
  {
    title: "Visualize Your Dream Home",
    body: [
      "Once you’ve established a price range, it’s time to get clear on the lifestyle you’re buying into—not just the property itself.",
      "Think about access to schools, transit, recreational facilities, neighbourhood feel, commute times, and the kind of community you want around you. Why you’re choosing to buy should guide these decisions, so take time to reflect.",
      "Many buyers find it helpful to create a written list of needs versus wants. Non‑negotiables (like number of bedrooms or parking) belong in the needs column, while items such as finishes or bonus amenities often sit in the wants column.",
    ],
  },
  {
    title: "Meet With a REALTOR®",
    body: [
      "Partnering with the right REALTOR® is one of the most important decisions you’ll make on your buying journey.",
      "An experienced agent can help you uncover properties that truly fit, protect you during negotiations, and bring clarity to each step of the process—from first viewing to final signatures.",
      "You’ll want to choose someone you feel completely comfortable with: a professional who is knowledgeable, responsive, and focused on representing your best interests, not simply making a sale.",
    ],
  },
  {
    title: "The Search",
    body: [
      "With your criteria defined and your REALTOR® by your side, the search becomes focused and efficient.",
      "Using property search tools and curated alerts, you’ll be able to track homes in your desired areas the moment they hit the market. Your agent will update you frequently on new opportunities and arrange viewings that work with your schedule.",
      "Each viewing is a chance to refine your priorities. Over time, you’ll gain a clear sense of what feels like “home” and what doesn’t—allowing you to move decisively when the right property appears.",
    ],
  },
  {
    title: "Closing",
    body: [
      "When you’ve found the home you want, your REALTOR® will help you structure an offer that reflects both market realities and your comfort level.",
      "The seller may accept, counter, or reject your offer. Once you’ve reached an agreement, you’ll move through subjects—such as home inspection, financing approval, and any repairs or credits negotiated with the seller.",
      "From there, you’ll finalize your mortgage with your lender, and your lawyer or notary will prepare the closing documentation. Completion and possession typically take place at the lawyer’s office, where ownership is officially transferred.",
    ],
  },
  {
    title: "Welcome Home",
    body: [
      "At this point, congratulations are in order—becoming a homeowner is one of the most liberating milestones you’ll experience.",
      "Beyond pride of ownership, homeownership offers the ability to customize your space, build equity over time, and benefit from potential appreciation in your market.",
      "With the right guidance, buying a home becomes less overwhelming and more empowering. The goal is not just to purchase a property, but to secure a home that supports your life, your goals, and your future.",
    ],
  },
];

export default function BuyersGuidePage() {
  return (
    <main className="min-h-screen bg-background text-white">
      <Navbar />

      <section className="pt-28 pb-16 bg-gradient-to-b from-black via-[#0d0d0d] to-background">
        <div className="container mx-auto px-6 md:px-12 space-y-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-primary text-sm font-medium tracking-[0.35em] uppercase opacity-90">
              Buy
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold">Buyer&apos;s Guide</h1>
            <p className="text-white/70 leading-relaxed font-light">
              Choosing to buy a home is a major life decision. This guide is designed to walk you through each
              stage—from your first savings plan to the moment you receive the keys—so you can move forward with
              clarity and confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[2fr,1.1fr] gap-10 lg:gap-14 items-start">
            <div className="space-y-8">
              {sections.map((section) => (
                <article
                  key={section.title}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
                >
                  <h2 className="text-2xl font-serif font-semibold mb-3">{section.title}</h2>
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="text-white/75 leading-relaxed font-light mb-3 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </article>
              ))}
            </div>

            <aside className="space-y-6">
              <div className="bg-white/5 border border-primary/30 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
                <h3 className="text-xl font-serif font-semibold mb-3">Ready to Start?</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-5">
                  Whether you&apos;re a first-time buyer or seasoned investor, having a clear roadmap and the right
                  representation makes all the difference.
                </p>
                <div className="flex flex-col gap-3">
                  <Button asChild className="bg-primary text-black hover:bg-primary/90">
                    <Link href="/#contact">Schedule a Buyer Consultation</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-primary/60 text-white hover:bg-primary/10 text-xs tracking-[0.25em] uppercase"
                  >
                    <Link href="/property-search/custom">Start a Custom Search</Link>
                  </Button>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-7 text-sm text-white/65 space-y-3">
                <h4 className="text-xs uppercase tracking-[0.3em] text-white/50">Quick Reminders</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Keep your pre‑approval up to date while you search.</li>
                  <li>Avoid major purchases or new credit until after completion.</li>
                  <li>Ask every question—no detail is too small when it comes to your home.</li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

