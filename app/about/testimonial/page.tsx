import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Minerva Mercado",
    body: `Denise is Professional, Ethical, Elegant, Committed, Honest, Respectful and an Understanding business woman. Such a personality is very hard to find in a business environment regardless of the industry or the country you are trading in.
Along all my years as an international business person I only came across with few people having so many business skills and the strength to get things done on time, under any circumstances.
Denise sold 2 of my condos during the worst Real Estate market in 2018. As a business person I’m extremely hard to please, before hiring Denise I interviewed 7 realtors and I’m very happy to see that she “worked with me and for me” to complete the sales of my two properties on timely manner.
My suggestion is that you hire her and follow her business advices with trust and confidence.`,
    title: "International seller",
  },
  {
    name: "Johanna B.",
    title: "Buyer & seller",
    body: `Denise is beyond amazing. She helped us find our first condo 5 years ago, and just recently worked with us again to sell it and purchase our new bigger home. The most incredible thing is our condo sold for way over asking and with 22 offers! Denise works magic!
She’s brilliant, thoughtful, and truly cares – plus she’s real sweet and enjoyable to be around which is a total bonus. We always recommend her a million times over.`,
  },
  {
    name: "Paul D.",
    title: "Seller",
    body: `I’ve worked with many realtors over the years buying/selling real estate in 3 provinces… but have NEVER had such a great experience as I have with Denise! Her approach resonated with me on so many levels, from our initial interview to the eventual sale of my condo—which btw only took a week! Multiple offers by the very first wknd open house and I got my price!
Was completely satisfied with Denise and her team and would highly recommend her to anyone looking for a one-stop, successful buying/selling experience! Before you hire anyone else, give her a call, she’ll knock your socks off, and you’ll be glad she did!`,
  },
];

export default function TestimonialPage() {
  return (
    <main className="min-h-screen bg-background text-white">
      <Navbar />

      <section className="pt-28 pb-16 bg-gradient-to-b from-black via-[#0d0d0d] to-background">
        <div className="container mx-auto px-6 md:px-12 space-y-10">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-primary text-sm font-medium tracking-[0.35em] uppercase opacity-90">
              Testimonials
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold">Real Stories, Real Results</h1>
            <p className="text-white/70 leading-relaxed font-light">
              Curated client experiences shared directly—no scraped feeds, just the words of buyers and sellers who trusted
              Denise and her team to deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {testimonials.map((review) => (
              <article
                key={review.name}
                className="relative h-full bg-white/5 border border-white/10 rounded-2xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)] hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-white">{review.name}</h3>
                    {review.title && <p className="text-xs uppercase tracking-[0.25em] text-white/50 mt-2">{review.title}</p>}
                  </div>
                  <div className="flex gap-1 text-[#C5A059]">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="w-4 h-4" />
                    ))}
                  </div>
                </div>

                <p className="text-white/75 leading-relaxed whitespace-pre-line">{review.body}</p>
              </article>
            ))}
          </div>

          <div className="text-center">
            <Button asChild className="bg-primary text-black hover:bg-primary/90">
              <a href="/#contact">Start Your Story</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
