import Image from "next/image"

const areas = [
    { name: "Burnaby", image: "https://upload.wikimedia.org/wikipedia/commons/0/00/Burnaby_Metrotown_skyline.jpg" },
    { name: "Vancouver", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Concord_Pacific_Master_Plan_Area.jpg/2560px-Concord_Pacific_Master_Plan_Area.jpg" },
    { name: "Coquitlam", image: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Coquitlam_Town_Centre_2025.png" },
    { name: "Port Coquitlam", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Canadian_Pacific_Railway_yard%2C_Port_Coquitlam_BC_%285945915219%29.jpg/2560px-Canadian_Pacific_Railway_yard%2C_Port_Coquitlam_BC_%285945915219%29.jpg" },
    { name: "West Vancouver", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/North_Vancouver_from_the_Lions_Gate_Bridge.jpg/2560px-North_Vancouver_from_the_Lions_Gate_Bridge.jpg" },
    { name: "North Vancouver", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/North_Vancouver_201807.jpg/330px-North_Vancouver_201807.jpg" },
]

export default function FeaturedAreas() {
    return (
        <section className="py-20 bg-[#1A1A1A] text-white">
            <div className="container mx-auto px-6 md:px-12">
                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <span className="text-primary text-sm font-medium tracking-[0.3em] uppercase opacity-90 block">
                        Neighbourhoods
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
                        Featured Areas
                    </h2>
                    <div className="w-20 h-[1px] bg-primary mx-auto mt-6 opacity-60" />
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {areas.map((area, idx) => (
                        <div
                            key={idx}
                            className="group relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden cursor-pointer"
                        >
                            {/* Background Image */}
                            <Image
                                src={area.image}
                                alt={area.name}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

                            {/* Label */}
                            <div className="absolute inset-0 flex items-center justify-center p-6">
                                <div className="relative px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg transform transition-all duration-500 group-hover:bg-white/20 group-hover:scale-105 group-hover:border-primary/50">
                                    <span className="text-2xl md:text-3xl font-serif text-white tracking-wide">
                                        {area.name}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
