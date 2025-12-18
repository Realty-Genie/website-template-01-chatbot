import { FaTrophy, FaStar, FaCrown, FaMedal, FaAward, FaUserTie } from "react-icons/fa"

const achievements = [
    {
        icon: <FaCrown className="w-8 h-8 text-primary" />,
        title: "Top 1% President's Club",
        subtitle: "Since 2015"
    },
    {
        icon: <FaMedal className="w-8 h-8 text-primary" />,
        title: "Top 10% Medallion Club",
        subtitle: "Since 2010"
    },
    {
        icon: <FaTrophy className="w-8 h-8 text-primary" />,
        title: "Top 1% of All Vancouver",
        subtitle: "REALTORS®"
    },
    {
        icon: <FaStar className="w-8 h-8 text-primary" />,
        title: "RE/MAX Hall of Fame",
        subtitle: "2015"
    },
    {
        icon: <FaAward className="w-8 h-8 text-primary" />,
        title: "RE/MAX Chairman's Award",
        subtitle: "2015"
    },
    {
        icon: <FaUserTie className="w-8 h-8 text-primary" />,
        title: "ICON Agent",
        subtitle: "Since 2020"
    }
]

export default function Achievement() {
    return (
        <section className="py-20 bg-background text-foreground">
            <div className="container mx-auto px-6 md:px-12 text-center">

                {/* Header */}
                <div className="mb-16 space-y-4">
                    <span className="inline-block text-primary text-sm font-medium tracking-[0.3em] uppercase opacity-90">
                        Born To Win
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
                        Accolades
                    </h2>
                    <div className="w-20 h-[1px] bg-primary mx-auto mt-6 opacity-60" />
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {achievements.map((item, idx) => (
                        <div
                            key={idx}
                            className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] flex flex-col items-center gap-4 hover:-translate-y-1"
                        >
                            {/* Icon Container */}
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-500">
                                {item.icon}
                            </div>

                            <h3 className="text-xl font-medium text-white group-hover:text-primary transition-colors duration-300">
                                {item.title}
                            </h3>

                            <p className="text-sm text-muted-foreground font-light tracking-wide uppercase">
                                {item.subtitle}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
