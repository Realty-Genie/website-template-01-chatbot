import Image from "next/image";

const teamMembers = [
  {
    name: "Evelyn Parker",
    role: "Operations Director",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Lucas Bennett",
    role: "Lead Buyer Specialist",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Sofia Martinez",
    role: "Listing Strategist",
    image:
      "https://images.unsplash.com/photo-1627161683077-e34782c24d81?q=80&w=703&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Marcus Lee",
    role: "Luxury Marketing",
    image:
      "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Isabella Nguyen",
    role: "Client Experience",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Daniel Fraser",
    role: "Investment Advisor",
    image:
      "https://images.unsplash.com/photo-1627161684458-a62da52b51c3?q=80&w=849&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function MeetTeam() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0b0b0b] via-[#0f0f0f] to-background text-white" id="team">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-14 space-y-4">
          <span className="text-primary text-sm font-medium tracking-[0.3em] uppercase opacity-90 block">
            Denise Mai PREC*
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold">Meet My Team</h2>
          <p className="text-white/70 max-w-2xl mx-auto font-light leading-relaxed">
            A boutique group of specialists supporting every step of your journey—from pricing strategy to white-glove closing care—curated by Denise to match the pace and polish of Mai Real Estate.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_20px_60px_rgba(0,0,0,0.35)] group"
            >
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-primary text-sm tracking-[0.2em] uppercase">{member.role}</p>
                <p className="text-white/70 text-sm font-light">
                  Precision service, clear communication, and concierge-level care for every client file.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
