import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function TaxAssessmentPage() {
    return (
        <main className="min-h-screen bg-background text-white">
            <Navbar />

            <section className="pt-32 pb-20 bg-gradient-to-b from-black via-[#0d0d0d] to-background">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <span className="text-primary text-sm font-medium tracking-[0.35em] uppercase opacity-90 block">
                            Market Value
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
                            BC Tax Assessment
                        </h1>
                        <p className="text-white/70 text-lg leading-relaxed font-light max-w-2xl mx-auto">
                            Understand the difference between your tax assessment and market value. We help you navigate British Columbia's property tax landscape.
                        </p>

                        <div className="pt-12 text-left space-y-8">
                            <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
                                <h3 className="text-2xl font-serif font-bold mb-4">Assessment vs. Reality</h3>
                                <p className="text-white/50 font-light leading-relaxed">
                                    BC Assessment values often differ from current market conditions. Our experts can provide a real-time valuation of your property's actual worth in today's active market.
                                </p>
                            </div>

                            <div className="p-8 rounded-3xl border border-primary/20 bg-primary/5 backdrop-blur-sm text-center">
                                <h3 className="text-2xl font-serif font-bold mb-6 italic">Curious about your property's current market value?</h3>
                                <Button asChild className="bg-primary text-black hover:bg-primary/90 px-10 py-6">
                                    <Link href="/sell/vancouver-home-evaluation">Request Expert Evaluation</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
