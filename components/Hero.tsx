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
    <section className="overflow-hidden px-4 pb-20 pt-32 sm:px-6">
      <div className="mx-auto grid max-w-7xl items-stretch gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(420px,0.8fr)] lg:gap-0">
        <div className="pr-0 lg:pr-16">
          <span className="inline-flex min-h-11 items-center rounded-full border border-slate-200 bg-white/75 px-5 text-[13px] font-bold uppercase tracking-[0.16em] text-slate-600 shadow-[0_10px_28px_rgba(17,28,57,0.06)]">
            Premium Commercial Complex
          </span>

          <h1 className="mt-8 max-w-[760px] text-[clamp(3.2rem,6vw,5.3rem)] font-black leading-[0.95] tracking-[-0.07em] text-slate-950">
            <span className="block">Built for modern brands.</span>
            <span className="mt-2 block text-slate-500">Designed to feel premium.</span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-9 text-slate-600">
            Shubha Shree Bhawan offers a refined, professional environment for offices, meeting suites, and
            growth-ready businesses that want a sharper presence from the first impression.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/#services"
              className="inline-flex min-h-[72px] min-w-[290px] items-center justify-between rounded-2xl bg-slate-950 px-7 text-lg font-extrabold text-white shadow-[0_20px_44px_rgba(17,28,57,0.18)] transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              <span className="text-white">View Available Services</span>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/12 text-white">
                <ArrowRight size={16} />
              </span>
            </Link>
            <Link
              href="/#contact"
              className="inline-flex min-h-[72px] min-w-[190px] items-center justify-center rounded-2xl border border-stone-300 bg-white px-7 text-lg font-extrabold text-slate-900 shadow-[0_14px_30px_rgba(17,28,57,0.08)] transition hover:-translate-y-0.5 hover:border-stone-400 hover:bg-[#f8f1e5]"
            >
              <span className="text-slate-900">Contact Us</span>
            </Link>
          </div>

          <div className="mt-10 grid border-t border-slate-200 sm:grid-cols-3">
            {stats.map(({ icon: Icon, label, value }) => (
              <article
                key={label}
                className="border-b border-slate-200 py-6 pr-0 last:border-b-0 sm:border-b-0 sm:border-r sm:pr-6 sm:last:border-r-0"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-stone-100 text-slate-700">
                  <Icon size={18} />
                </div>
                <p className="mb-1 mt-4 text-2xl font-extrabold tracking-[-0.03em] text-slate-950">{label}</p>
                <p className="text-lg text-slate-600">{value}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-[34px] border border-white/10 bg-gradient-to-br from-slate-900 via-[#1b2748] to-[#2d3d66] px-8 py-8 text-white shadow-[0_28px_70px_rgba(17,28,57,0.22)] sm:px-10 sm:py-10">
          <span className="inline-flex min-h-11 items-center rounded-full border border-white/20 bg-white/10 px-5 text-[13px] font-bold uppercase tracking-[0.16em] text-white/90">
            Why It Feels Premium
          </span>

          <h3 className="mt-8 max-w-[540px] text-[clamp(1.9rem,3vw,3rem)] font-black leading-[1.14] tracking-[-0.05em] text-white">
            Commercial space designed to present your business with more clarity and confidence.
          </h3>

          <div className="mt-8 grid">
            {highlights.map((item, index) => (
              <div key={item.title} className="border-t border-white/15 py-6 first:border-t-0 first:pt-2">
                <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.2em] text-stone-300/85">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mb-2 text-2xl font-extrabold tracking-[-0.03em] text-white">{item.title}</p>
                <p className="max-w-[560px] text-base leading-8 text-stone-100/80">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {["Cafe-ready", "Clinic-friendly", "Office-ready floors"].map((tag) => (
              <span
                key={tag}
                className="inline-flex min-h-11 items-center rounded-full border border-white/20 bg-white/10 px-5 text-sm font-bold uppercase tracking-[0.14em] text-white/95"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
