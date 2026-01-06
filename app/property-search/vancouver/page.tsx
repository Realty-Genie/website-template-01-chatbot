import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeaturedListings from "@/components/FeaturedListings";

export default function VancouverSearchPage() {
    return (
        <main className="min-h-screen bg-background text-white">
            <Navbar />

            <section className="pt-32 pb-20 bg-background">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="max-w-4xl mx-auto text-center space-y-8 mb-16">
                        <span className="text-primary text-sm font-medium tracking-[0.35em] uppercase opacity-90 block">
                            Neighborhoods
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
                            Vancouver Real Estate
                        </h1>
                        <p className="text-white/70 text-lg leading-relaxed font-light max-w-2xl mx-auto">
                            Explore luxury living in Vancouver. Discover the most exclusive addresses and breathtaking properties in the heart of British Columbia.
                        </p>
                    </div>

                    <FeaturedListings />
                </div>
            </section>

            <Footer />
        </main>
    );
}
