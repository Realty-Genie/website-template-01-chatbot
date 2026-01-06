import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";

export default function MortgageCalculatorPage() {
    return (
        <main className="min-h-screen bg-background text-white">
            <Navbar />

            <section className="pt-32 pb-20 bg-gradient-to-b from-black via-[#0d0d0d] to-background">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="max-w-4xl mx-auto text-center space-y-8 mb-16">
                        <span className="text-primary text-sm font-medium tracking-[0.35em] uppercase opacity-90 block">
                            Financial Tools
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
                            Mortgage Calculator
                        </h1>
                        <p className="text-white/70 text-lg leading-relaxed font-light max-w-2xl mx-auto">
                            Plan your investment with precision. Our mortgage calculator helps you estimate monthly payments and understand your buying power.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                            <h3 className="text-2xl font-serif font-bold mb-6">Calculator Tool</h3>
                            <div className="h-64 flex items-center justify-center border border-white/5 rounded-2xl bg-black/20">
                                <p className="text-white/40 italic">Interactive calculator component coming soon</p>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-2xl font-serif font-bold">Understand Your Mortgage</h3>
                            <p className="text-white/60 font-light leading-relaxed">
                                Buying a home is one of the most significant financial decisions you'll make. Understanding the factors that influence your mortgage payments—like interest rates, down payments, and amortization periods—is crucial.
                            </p>
                            <ul className="space-y-4 text-white/70">
                                <li className="flex items-start gap-3 italic">
                                    <span className="text-primary font-bold">·</span>
                                    Current Interest Rates in BC
                                </li>
                                <li className="flex items-start gap-3 italic">
                                    <span className="text-primary font-bold">·</span>
                                    Down Payment Requirements
                                </li>
                                <li className="flex items-start gap-3 italic">
                                    <span className="text-primary font-bold">·</span>
                                    Closing Costs Overview
                                </li>
                            </ul>
                        </div>
                    </div>

                    <FAQ />
                </div>
            </section>

            <Footer />
        </main>
    );
}
