import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoTestimonials from "@/components/VideoTestimonials";

export default function ListingVideosPage() {
    return (
        <main className="min-h-screen bg-background text-white">
            <Navbar />

            <section className="pt-32 pb-20 bg-[#1A1A1A]">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="max-w-4xl mx-auto text-center space-y-8 mb-16">
                        <span className="text-primary text-sm font-medium tracking-[0.35em] uppercase opacity-90 block">
                            Media
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
                            Listing Videos
                        </h1>
                        <p className="text-white/70 text-lg leading-relaxed font-light max-w-2xl mx-auto">
                            Experience our properties through cinematic video tours. We bring luxury real estate to life with high-definition visual storytelling.
                        </p>
                    </div>

                    <div className="space-y-12">
                        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center backdrop-blur-sm">
                            <p className="text-white/60">Our latest listing videos will be featured here shortly.</p>
                        </div>

                        <div className="pt-20">
                            <h2 className="text-3xl font-serif font-bold text-center mb-12">Client Testimonial Videos</h2>
                            <VideoTestimonials />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
