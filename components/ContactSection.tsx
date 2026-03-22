"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CRM_TRACKER_API_KEY = "4d759969-79a9-4c34-8362-a72df3540bbc";
const CRM_BACKEND_BASE_URL = "https://realty-crm-130961755900.northamerica-northeast2.run.app";
const CRM_IDENTIFY_URL = `${CRM_BACKEND_BASE_URL}/api/v1/trackers/identify`;

function getVisitorId() {
    if (typeof window === "undefined") return "";

    let visitorId = window.localStorage.getItem("visitorId");
    if (!visitorId) {
        visitorId = window.crypto.randomUUID();
        window.localStorage.setItem("visitorId", visitorId);
    }

    return visitorId;
}

export default function ContactSection() {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const phone = formData.get("phone") as string;
        const city = formData.get("city") as string;
        const message = formData.get("message") as string;

        if (email) {
            try {
                await fetch(CRM_IDENTIFY_URL, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        apiKey: CRM_TRACKER_API_KEY,
                        visitorId: getVisitorId(),
                        email,
                        name,
                        phone,
                        city,
                    }),
                });
            } catch (error) {
                console.error("[CRM Tracker] Direct identify failed:", error);
            }
        }

        if (typeof window !== "undefined" && window.crmTracker) {
            window.crmTracker.track("form_submit", {
                form_name: "Contact Section Form",
                name,
                email,
                phone,
                city,
                message_length: message?.length || 0
            });
        }
    };

    return (
        <section className="relative bg-background py-20 pb-40" id="contact">
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="bg-card border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row min-h-[600px]">
                    {/* Left Column: Form */}
                    <div className="w-full lg:w-1/2 p-10 md:p-14 flex flex-col justify-center space-y-8 bg-zinc-900/50">
                        <div className="space-y-2">
                            <span className="text-primary text-sm font-medium tracking-[0.3em] uppercase opacity-90 block">
                                Get In Touch
                            </span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">
                                Let&apos;s Connect
                            </h2>
                            <p className="text-white/60 font-light">
                                Have a question or looking to buy/sell? Send us a message.
                            </p>
                        </div>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-xs uppercase tracking-widest text-white/50">
                                        Full Name
                                    </label>
                                    <Input
                                        id="name"
                                        name="name"
                                        placeholder="John Doe"
                                        className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-primary/50"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-xs uppercase tracking-widest text-white/50">
                                        Email Address
                                    </label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="john@example.com"
                                        className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-primary/50"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-xs uppercase tracking-widest text-white/50">
                                        Phone Number
                                    </label>
                                    <Input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        placeholder="(555) 123-4567"
                                        className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-primary/50"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="city" className="text-xs uppercase tracking-widest text-white/50">
                                        City
                                    </label>
                                    <Input
                                        id="city"
                                        name="city"
                                        placeholder="Vancouver"
                                        className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-primary/50"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-xs uppercase tracking-widest text-white/50">
                                    Subject
                                </label>
                                <Input
                                    id="subject"
                                    name="subject"
                                    placeholder="Buying a Home"
                                    className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-primary/50"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-xs uppercase tracking-widest text-white/50">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    placeholder="Tell us a little about your real estate goals..."
                                    className="flex w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 disabled:cursor-not-allowed disabled:opacity-50"
                                ></textarea>
                            </div>

                            <Button type="submit" className="w-full bg-primary text-black hover:bg-primary/90 font-medium tracking-wide uppercase py-6 text-xs">
                                Send Message
                            </Button>
                        </form>
                    </div>

                    {/* Right Column: Map */}
                    <div className="w-full lg:w-1/2 min-h-[400px] lg:min-h-full relative">
                        <iframe
                            src="https://www.google.com/maps?q=Vancouver+Burnaby+Coquitlam+BC&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: "grayscale(100%) invert(90%) contrast(85%)" }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0"
                        ></iframe>
                        {/* Overlay to darken map slightly if needed for aesthetic match, but CSS filter handles most */}
                    </div>
                </div>
            </div>
        </section>
    );
}
