import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CustomSearchPage() {
    return (
        <main className="min-h-screen bg-background text-white">
            <Navbar />

            <section className="pt-32 pb-20 bg-background">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="max-w-4xl mx-auto text-center space-y-8 mb-16">
                        <span className="text-primary text-sm font-medium tracking-[0.35em] uppercase opacity-90 block">
                            Personalized
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
                            Custom Search
                        </h1>
                        <p className="text-white/70 text-lg leading-relaxed font-light max-w-2xl mx-auto">
                            Can't find exactly what you're looking for? Tell us your specific requirements and we'll find the perfect property that matches your unique vision.
                        </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-3xl p-12 md:p-20 text-center backdrop-blur-sm max-w-3xl mx-auto">
                        <h3 className="text-2xl font-serif font-bold mb-4">Start Your Custom Search</h3>
                        <p className="text-white/50 mb-8">Our advanced search tool is being integrated. In the meantime, contact us directly for a personalized property list.</p>
                        <Button asChild className="bg-primary text-black hover:bg-primary/90 px-10 py-6">
                            <Link href="/#contact">Request Custom Search</Link>
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
