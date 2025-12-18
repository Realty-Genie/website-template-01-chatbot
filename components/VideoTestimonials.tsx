export default function VideoTestimonials() {
    const videos = [
        {
            id: "video-1",
            title: "Behind the Scenes of our 3 bedroom condo video shoot",
            embedUrl: "https://www.youtube.com/embed/6_y-zZ8WsEk",
            type: "behind-the-scenes"
        },
        {
            id: "video-2",
            title: "Denise Mai's Happy Seller Testimonial!!!",
            embedUrl: "https://www.youtube.com/embed/FQvTBrBKrvc",
            type: "seller-testimonial"
        },
        {
            id: "video-3",
            title: "Testimonial Denise Mai's Sellers",
            embedUrl: "https://www.youtube.com/embed/XbDcwnt5h8Y",
            type: "seller-testimonial"
        },
        {
            id: "video-4",
            title: "Testimonial Denise Mai's Happy Sellers & Buyers",
            embedUrl: "https://www.youtube.com/embed/yFO35ndMGio",
            type: "seller-buyer-testimonial"
        },
        {
            id: "video-5",
            title: "Testimonial Denise Mai's Happy Sellers & Buyers",
            embedUrl: "https://www.youtube.com/embed/k6spfp3xaSM",
            type: "seller-buyer-testimonial"
        },
    ]

    return (
        <section className="py-20 bg-[#1A1A1A] text-white">
            <div className="container mx-auto px-6 md:px-12">
                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <span className="text-primary text-sm font-medium tracking-[0.3em] uppercase opacity-90 block">
                        Watch Our Videos
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
                        What Other Sellers Are Saying?
                    </h2>
                    <div className="w-20 h-[1px] bg-primary mx-auto mt-6 opacity-60" />
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
                    {videos.map((video, idx) => {
                        // Logic for 6-column grid:
                        // Row 1: Items 0, 1, 2 take 2 cols each (Full width: 2+2+2=6)
                        // Row 2: Items 3, 4 need to be centered under the gaps of Row 1.
                        // Item 3 starts at col 2 (offset by 1) -> spans 2 (ends at 3). Centers between Item 0 & 1.
                        // Item 4 starts at col 4 (offset by 1 from center) -> spans 2. Centers between Item 1 & 2.

                        let lgClass = "lg:col-span-2"; // Default for first row
                        if (idx === 3) lgClass = "lg:col-start-2 lg:col-span-2";
                        if (idx === 4) lgClass = "lg:col-start-4 lg:col-span-2";

                        return (
                            <div
                                key={video.id}
                                className={`group flex flex-col gap-4 ${lgClass}`}
                            >
                                {/* Video Container - Aspect Ratio 16/9 */}
                                <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10 shadow-lg group-hover:border-primary/30 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(197,160,89,0.1)] bg-black">
                                    <iframe
                                        src={video.embedUrl}
                                        title={video.title}
                                        className="absolute inset-0 w-full h-full"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-serif text-white/90 group-hover:text-primary transition-colors duration-300 leading-snug text-center">
                                    {video.title}
                                </h3>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
