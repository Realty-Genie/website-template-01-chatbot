import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function ServicesSection() {
    return (
        <section className="py-20 bg-[#1A1A1A] text-white">
            <div className="container mx-auto px-6 md:px-12">
                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <span className="text-primary text-sm font-medium tracking-[0.3em] uppercase opacity-90 block">
                        Offering The Best
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
                        DeniseMai PREC* Services
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

                    {/* Buyer Card */}
                    <div className="group relative h-[500px] rounded-2xl overflow-hidden border border-white/10">
                        <Image
                            src="/listing-5.jpeg"
                            alt="Buying a home"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black/60 transition-opacity duration-500 group-hover:bg-black/50" />

                        {/* Content */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 md:p-12 z-10 space-y-6">
                            <span className="text-white/90 text-sm tracking-widest uppercase font-light">
                                Are You Looking For A
                            </span>
                            <h3 className="text-4xl font-serif text-white">
                                New Home?
                            </h3>
                            <p className="text-white/70 max-w-sm font-light leading-relaxed">
                                Find your dream home with Denise Mai. Expert guidance, local insights, and personalized service.
                            </p>
                            <Button
                                className="hidden md:flex border border-primary/50 text-white bg-primary/10 backdrop-blur-sm hover:bg-primary hover:text-black hover:border-primary rounded-xl px-8 py-6 tracking-widest text-xs uppercase font-medium transition-all duration-300"
                            >
                                View All Listings
                            </Button>
                        </div>
                        {/* Border Frame Effect */}
                        <div className="absolute inset-4 border border-white/20 pointer-events-none rounded-xl" />
                    </div>

                    {/* Seller Card */}
                    <div className="group relative h-[500px] rounded-xl overflow-hidden border border-white/10">
                        <Image
                            src="/listing-6.jpeg"
                            alt="Selling a home"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black/60 transition-opacity duration-500 group-hover:bg-black/50" />

                        {/* Content */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 md:p-12 z-10 space-y-6">
                            <span className="text-white/90 text-sm tracking-widest uppercase font-light">
                                Want To Sell
                            </span>
                            <h3 className="text-4xl font-serif text-white">
                                Your Home?
                            </h3>
                            <p className="text-white/70 max-w-sm font-light leading-relaxed">
                                Sell your home fast with Denise Mai. Benefit from her market expertise, dedicated approach, and strategic marketing.
                            </p>
                            <Button
                                className="hidden md:flex border border-primary/50 text-white bg-primary/10 backdrop-blur-sm hover:bg-primary hover:text-black hover:border-primary rounded-xl px-8 py-6 tracking-widest text-xs uppercase font-medium transition-all duration-300"
                            >
                                Home Valuation
                            </Button>
                        </div>
                        {/* Border Frame Effect */}
                        <div className="absolute inset-4 border border-white/20 pointer-events-none rounded-xl" />
                    </div>

                </div>
            </div>
        </section>
    )
}
