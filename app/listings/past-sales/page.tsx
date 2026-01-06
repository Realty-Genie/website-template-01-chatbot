import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PastSalesPage() {
    return (
        <main className="min-h-screen bg-background text-white">
            <Navbar />

            <section className="pt-32 pb-20 bg-gradient-to-b from-black via-[#0d0d0d] to-background">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="max-w-4xl mx-auto text-center space-y-8 mb-16">
                        <span className="text-primary text-sm font-medium tracking-[0.35em] uppercase opacity-90 block">
                            Success Stories
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
                            Past Sales
                        </h1>
                        <p className="text-white/70 text-lg leading-relaxed font-light max-w-2xl mx-auto">
                            A track record of excellence. View the properties we've successfully sold and the results we've achieved for our clients across Greater Vancouver.
                        </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-3xl p-20 text-center backdrop-blur-sm">
                        <h3 className="text-2xl font-serif font-bold mb-4">Portfolio Coming Soon</h3>
                        <p className="text-white/50 mb-8">We are currently curating our gallery of recently sold properties.</p>
                        <Button asChild className="bg-primary text-black hover:bg-primary/90">
                            <Link href="/sell/vancouver-home-evaluation">Get Your Home Evaluated</Link>
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
