import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-background text-white">
            <Navbar />

            <section className="pt-32 pb-20 bg-gradient-to-b from-black via-[#0d0d0d] to-background">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="max-w-4xl mx-auto space-y-8">
                        <span className="text-primary text-sm font-medium tracking-[0.35em] uppercase opacity-90 block text-center">
                            Legal
                        </span>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-center">
                            Privacy Policy
                        </h1>

                        <div className="prose prose-invert max-w-none space-y-6 text-white/60 font-light">
                            <p>
                                Your privacy is important to us. It is Mai Real Estate's policy to respect your privacy regarding any information we may collect from you across our website.
                            </p>
                            <h2 className="text-2xl font-serif font-bold text-white mt-8">1. Information We Collect</h2>
                            <p>
                                We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent.
                            </p>
                            <h2 className="text-2xl font-serif font-bold text-white mt-8">2. Use of Information</h2>
                            <p>
                                We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.
                            </p>
                            <h2 className="text-2xl font-serif font-bold text-white mt-8">3. Cookies</h2>
                            <p>
                                We use cookies to help improve your experience of our website. This page is currently a placeholder and will be updated with more detailed legal information soon.
                            </p>
                        </div>

                        <div className="pt-12 text-center text-sm text-white/40">
                            Last updated: January 2026
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
