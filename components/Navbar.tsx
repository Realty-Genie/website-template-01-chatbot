"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

type NavItem = {
  label: string;
  href: string;
  helper?: string;
};

const navSections: { label: string; items: NavItem[] }[] = [
  {
    label: "About",
    items: [
      { label: "About Us", href: "/about" },
      { label: "Meet Denise", href: "/about/meet-denise" },
      { label: "Testimonial", href: "/about/testimonial" },
      { label: "Privacy policy", href: "/about/privacy-policy" },
    ],
  },
  {
    label: "Listings",
    items: [
      { label: "Featured Listings", href: "/listings/featured-listings" },
      { label: "Listing videos", href: "/listings/listing-videos" },
      { label: "Past Sales", href: "/listings/past-sales" },
      { label: "Office Listings", href: "/listings/office-listings" },
    ],
  },
  {
    label: "Property search",
    items: [
      { label: "Burnaby", href: "/property-search/burnaby" },
      { label: "Vancouver", href: "/property-search/vancouver" },
      { label: "New Westminster", href: "/property-search/new-westminster" },
      { label: "Custom", href: "/property-search/custom" },
    ],
  },
  {
    label: "Buy",
    items: [
      { label: "Buyers guide", href: "/buy/buyers-guide" },
      { label: "Mortgage Calculator", href: "/buy/mortgage-calculator" },
    ],
  },
  {
    label: "Sell",
    items: [
      { label: "Vancouver Home evaluation", href: "/sell/vancouver-home-evaluation" },
      { label: "Vancouver, BC Sales by owner", href: "/sell/vancouver-bc-sales-by-owner" },
      { label: "Get started Today", href: "/sell/get-started-today" },
      { label: "how to sell a home fast", href: "/sell/how-to-sell-a-home-fast" },
      { label: "Seller's guide", href: "/sell/sellers-guide" },
      { label: "British columbia tax assesment", href: "/sell/british-columbia-tax-assesment" },
    ],
  },
  {
    label: "Blog",
    items: [{ label: "Market Update videos", href: "/blog/market-update-videos" }],
  },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black/70 via-black/30 to-transparent backdrop-blur-md">
      <div className="container mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col items-start group">
          <span className="text-3xl font-serif text-white tracking-widest font-bold group-hover:text-primary transition-colors">
            MAI
          </span>
          <span className="text-[10px] text-primary/90 tracking-[0.4em] uppercase font-light pl-0.5 text-primary">
            Real Estate
          </span>
        </Link>

        {/* Links - Desktop */}
        <div className="hidden lg:flex items-center gap-6 text-sm font-light text-white tracking-wider">
          {navSections.map((section) => (
            <div
              key={section.label}
              className="relative"
              onMouseEnter={() => setActiveDropdown(section.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-2 hover:text-primary transition-colors">
                {section.label}
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${activeDropdown === section.label ? "rotate-180 text-primary" : ""
                    }`}
                />
              </button>

              <div
                className={`absolute left-0 top-full mt-3 transition-all duration-200 ${activeDropdown === section.label ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-1 invisible"
                  }`}
              >
                <div className="min-w-[240px] rounded-2xl border border-white/10 bg-[#0f0f0f]/95 shadow-xl shadow-black/40 backdrop-blur-md overflow-hidden">
                  {section.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex flex-col px-5 py-3 hover:bg-white/5 transition-colors"
                    >
                      <span className="text-sm text-white">{item.label}</span>
                      {item.helper && <span className="text-xs text-white/50">{item.helper}</span>}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action */}
        <div className="flex items-center gap-4">
          <Button asChild className="hidden md:flex border border-primary/50 text-white bg-primary/10 backdrop-blur-sm hover:bg-primary hover:text-black hover:border-primary rounded-xl px-8 py-6 tracking-widest text-xs uppercase font-medium transition-all duration-300">
            <Link href="/#contact">Contact Us</Link>
          </Button>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white p-2 rounded-lg border border-white/10 hover:border-primary/60 transition-all"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-white/10 bg-black/90 backdrop-blur-xl">
          <div className="px-6 py-6 space-y-6">
            {navSections.map((section) => (
              <div key={section.label} className="space-y-2">
                <div className="text-xs uppercase tracking-[0.3em] text-white/50">{section.label}</div>
                <div className="grid gap-2">
                  {section.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-white/80 hover:text-primary transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
