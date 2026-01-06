import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

export default function GetStartedTodayPage() {
    return (
        <main className="min-h-screen bg-background text-white">
            <Navbar />

            <section className="pt-32 pb-20 bg-background">
                <div className="container mx-auto px-6 md:px-12 text-center">
                    <span className="text-primary text-sm font-medium tracking-[0.35em] uppercase opacity-90 block mb-8">
                        Take Action
                    </span>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-8">
                        Get Started Today
                    </h1>
                    <p className="text-white/70 text-lg leading-relaxed font-light max-w-2xl mx-auto mb-16">
                        Your real estate journey begins with a single step. Whether you're buying, selling, or just exploring, let's start the conversation.
                    </p>

                    <div className="max-w-5xl mx-auto">
                        <ContactSection />
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
