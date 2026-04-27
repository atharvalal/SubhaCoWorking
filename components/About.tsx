import Link from "next/link";
import { ArrowRight, Building2, MapPin, Sparkles } from "lucide-react";

const stats = [
  { icon: Building2, label: "Buildings", value: "Premium-ready" },
  { icon: MapPin, label: "Location", value: "Kathmandu" },
  { icon: Sparkles, label: "Positioning", value: "Professional" },
];

const highlights = [
  {
    title: "Front-facing credibility",
    text: "A cleaner setting for businesses that want their first impression to feel deliberate and established.",
  },
  {
    title: "Flexible service mix",
    text: "Combine address support, meeting access, and office-ready options without overcommitting to space.",
  },
  {
    title: "Guest-ready environment",
    text: "Everything is arranged to feel presentable for client visits, internal reviews, and daily operations.",
  },
];

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="section-inner hero-grid">
        <div>
          <span className="eyebrow">Premium Commercial Complex</span>
          <h1 className="hero-title">
            Built for modern brands.
            <span>Designed to feel premium.</span>
          </h1>
          <p className="hero-body">
            Shubha Shree Bhawan offers a refined, professional environment for
            offices, meeting suites, and growth-ready businesses that want a
            sharper presence from the first impression.
          </p>

          <div className="button-row">
            <Link href="/#services" className="button-primary">
              View Available Services
              <ArrowRight size={16} />
            </Link>
            <Link href="/#contact" className="button-secondary">
              Contact Us
            </Link>
          </div>

          <div className="hero-stat-grid" style={{ marginTop: "34px" }}>
            {stats.map(({ icon: Icon, label, value }) => (
              <article key={label} className="stat-card">
                <div className="icon-shell">
                  <Icon size={18} />
                </div>
                <p className="card-title" style={{ marginBottom: "4px" }}>
                  {label}
                </p>
                <p className="card-copy">{value}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="hero-panel" style={{ padding: "34px" }}>
          <span className="eyebrow" style={{ marginBottom: "18px" }}>
            Why It Feels Premium
          </span>
          <h3>
            Commercial space designed to present your business with more clarity
            and confidence.
          </h3>

          <div className="check-list" style={{ marginTop: 0 }}>
            {highlights.map((item) => (
              <div
                key={item.title}
                className="check-item"
                style={{ display: "block" }}
              >
                <p className="card-title" style={{ margin: "0 0 6px" }}>
                  {item.title}
                </p>
                <p className="card-copy">{item.text}</p>
              </div>
            ))}
          </div>

          <div
            className="hero-tag-row"
            style={{ paddingTop: "24px", paddingBottom: "10px" }}
          >
            <span className="hero-tag">Cafe-ready</span>
            <span className="hero-tag">Clinic-friendly</span>
            <span className="hero-tag">Office-ready floors</span>
          </div>

          <div className="button-row" style={{ marginTop: "8px" }}>
            <Link href="/meeting-rooms" className="button-secondary">
              Explore Meeting Rooms
            </Link>
            <Link href="/virtual-office" className="button-secondary">
              Explore Virtual Office
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
