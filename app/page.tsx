import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SplitRealtorStory } from "@/components/ui/split-realtor-story";
import Achievement from "@/components/ui/achievement";
import FeaturedListings from "@/components/FeaturedListings";
import FeaturedAreas from "@/components/FeaturedAreas";
import ServicesSection from "@/components/ServicesSection";
import VideoTestimonials from "@/components/VideoTestimonials";
import Testimonials from "@/components/testimonials";
import MeetTeam from "@/components/MeetTeam";
import Link from "next/link";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <SplitRealtorStory />
      <ServicesSection />
      <MeetTeam />
      <Achievement />
      <div className="mb-2 text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
          Featured Listings
        </h2>
        <div className="w-full h-[1px] bg-white/10 mt-2" />
      </div>
      <FeaturedListings />
      <FeaturedAreas />
      <VideoTestimonials />
      <FAQ />
      <Testimonials />
      <ContactSection />
      <Footer />
    </main>
  );
}
