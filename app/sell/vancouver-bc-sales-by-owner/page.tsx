import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SalesByOwnerPage() {
    return (
        <main className="min-h-screen bg-background text-white">
            <Navbar />

            <section className="pt-32 pb-20 bg-gradient-to-b from-black via-[#0d0d0d] to-background">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <span className="text-primary text-sm font-medium tracking-[0.35em] uppercase opacity-90 block">
                            Selling Options
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
                            Sales by Owner
                        </h1>
                        <p className="text-white/70 text-lg leading-relaxed font-light max-w-2xl mx-auto">
                            Considering selling your home on your own? Learn about the process, the challenges, and how professional guidance can maximize your return.
                        </p>

                        <div className="pt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                            <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
                                <h3 className="text-2xl font-serif font-bold mb-4">Pros & Cons</h3>
                                <p className="text-white/50 font-light mb-6">
                                    Explore the reality of selling without an agent in today's competitive Vancouver market.
                                </p>
                            </div>
                            <div className="p-8 rounded-3xl border border-white/10 bg-primary/5 backdrop-blur-sm">
                                <h3 className="text-2xl font-serif font-bold mb-4">The Professional Edge</h3>
                                <p className="text-white/50 font-light mb-6">
                                    How luxury marketing and expert negotiation can net you a higher final price.
                                </p>
                            </div>
                        </div>

                        <div className="pt-16 border-t border-white/10 mt-20">
                            <h2 className="text-3xl font-serif font-bold mb-8 italic">Ready to see what your home is worth?</h2>
                            <Button asChild className="bg-primary text-black hover:bg-primary/90 px-10 py-6">
                                <Link href="/sell/vancouver-home-evaluation">Get Instant Evaluation</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
