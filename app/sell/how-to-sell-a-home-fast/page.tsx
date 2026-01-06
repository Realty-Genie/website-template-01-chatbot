import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";

export default function SellFastPage() {
    return (
        <main className="min-h-screen bg-background text-white">
            <Navbar />

            <section className="pt-32 pb-20 bg-[#1A1A1A]">
                <div className="container mx-auto px-6 md:px-12 text-center">
                    <span className="text-primary text-sm font-medium tracking-[0.35em] uppercase opacity-90 block mb-8">
                        Expert Advice
                    </span>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-8">
                        How to Sell Fast
                    </h1>
                    <p className="text-white/70 text-lg leading-relaxed font-light max-w-2xl mx-auto mb-16">
                        Unlock the secrets to a quick and profitable sale. Our proven techniques ensure your home stands out and attracts serious buyers immediately.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 text-left">
                        {[
                            { title: "Strategic Pricing", desc: "Setting the right price from day one to create urgency." },
                            { title: "Elite Staging", desc: "Transforming your space to appeal to the highest number of buyers." },
                            { title: "Aggressive Marketing", desc: "Digital and traditional strategies that create maximum exposure." }
                        ].map(item => (
                            <div key={item.title} className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
                                <h3 className="text-xl font-serif font-bold text-primary mb-3">{item.title}</h3>
                                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <h2 className="text-3xl font-serif font-bold mb-12 italic text-center">Our Premium Services</h2>
                    <ServicesSection />
                </div>
            </section>

            <Footer />
        </main>
    );
}
