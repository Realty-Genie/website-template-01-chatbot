import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";

export default function SellersGuidePage() {
    return (
        <main className="min-h-screen bg-background text-white">
            <Navbar />

            <section className="pt-32 pb-20 bg-background">
                <div className="container mx-auto px-6 md:px-12 text-center">
                    <span className="text-primary text-sm font-medium tracking-[0.35em] uppercase opacity-90 block mb-8">
                        Resources
                    </span>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-8">
                        Seller's Guide
                    </h1>
                    <p className="text-white/70 text-lg leading-relaxed font-light max-w-2xl mx-auto mb-16">
                        Your comprehensive resource for selling real estate in Greater Vancouver. From preparation to closing, we've got you covered.
                    </p>

                    <div className="max-w-4xl mx-auto space-y-12 text-left">
                        <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-sm italic">
                            <p className="text-white/40 text-center">Interactive Seller's Guide content is being curated. Check back soon for downloadable checklists and expert tips.</p>
                        </div>

                        <FAQ />
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
