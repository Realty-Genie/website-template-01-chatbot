import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function MeetDenisePage() {
    return (
        <main className="min-h-screen bg-background text-white">
            <Navbar />

            <section className="pt-32 pb-20 bg-gradient-to-b from-black via-[#0d0d0d] to-background">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <span className="text-primary text-sm font-medium tracking-[0.35em] uppercase opacity-90 block">
                                About
                            </span>
                            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
                                Meet Denise Mai
                            </h1>
                            <p className="text-white/70 text-lg leading-relaxed font-light">
                                Learn more about Denise Mai
                            </p>

                        </div>
                        <div className="space-y-6 text-left mt-16">
                            <Image
                                src="https://ik.imagekit.io/mohakgupta/channels4_profile.jpg?updatedAt=1767683106077&ik-s=72c92eade0f0d6ee6f097781af2e035c96a30b10"
                                alt="Denise Mai"
                                width={500}
                                height={500}
                                className="object-cover"
                            />
                            <h2 className="text-3xl font-serif font-bold">A Legacy of Excellence</h2>
                            <p className="text-white/60 leading-relaxed">
                                This page is currently under development. Soon you will find more details about Denise's background, her approach to real estate, and her commitment to the community.
                            </p>
                            <div className="flex gap-4 pt-4">
                                <Button asChild className="bg-primary text-black hover:bg-primary/90">
                                    <Link href="/#contact">Contact Denise</Link>
                                </Button>
                                <Button asChild variant="outline" className="border-white/10 text-white hover:bg-white/5">
                                    <Link href="/about-us">Learn About the Team</Link>
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
