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
    <section className="overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32">
      <div className="mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.72fr)] lg:gap-8">
        <div className="pr-0 lg:pr-16">
          <span className="inline-flex min-h-10 items-center rounded-full border border-slate-200 bg-white/75 px-4 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-600 shadow-[0_10px_28px_rgba(17,28,57,0.06)] sm:min-h-11 sm:px-5 sm:text-[13px] sm:tracking-[0.16em]">
            Premium Commercial Complex
          </span>

          <h1 className="mt-6 max-w-[760px] text-[clamp(2.7rem,12vw,5.3rem)] font-black leading-[0.95] tracking-[-0.07em] text-slate-950 sm:mt-8">
            <span className="block">Built for modern brands.</span>
            <span className="mt-2 block text-slate-500">Designed to feel premium.</span>
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:mt-8 sm:text-lg sm:leading-9">
            Shubha Shree Bhawan offers a refined, professional environment for offices, meeting suites, and
            growth-ready businesses that want a sharper presence from the first impression.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link
              href="/#services"
              className="inline-flex min-h-[64px] w-full items-center justify-between rounded-2xl bg-slate-950 px-5 text-base font-extrabold text-white shadow-[0_20px_44px_rgba(17,28,57,0.18)] transition hover:-translate-y-0.5 hover:bg-slate-800 sm:min-h-[72px] sm:min-w-[290px] sm:px-7 sm:text-lg sm:w-auto"
            >
              <span className="text-white">View Available Services</span>
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/12 text-white sm:h-10 sm:w-10">
                <ArrowRight size={16} />
              </span>
            </Link>
            <Link
              href="/#contact"
              className="inline-flex min-h-[64px] w-full items-center justify-center rounded-2xl border border-stone-300 bg-white px-5 text-base font-extrabold text-slate-900 shadow-[0_14px_30px_rgba(17,28,57,0.08)] transition hover:-translate-y-0.5 hover:border-stone-400 hover:bg-[#f8f1e5] sm:min-h-[72px] sm:min-w-[190px] sm:px-7 sm:text-lg sm:w-auto"
            >
              <span className="text-slate-900">Contact Us</span>
            </Link>
          </div>

          <div className="mt-8 grid border-t border-slate-200 sm:mt-10 sm:grid-cols-3">
            {stats.map(({ icon: Icon, label, value }) => (
              <article
                key={label}
                className="border-b border-slate-200 py-5 pr-0 last:border-b-0 sm:border-b-0 sm:border-r sm:py-6 sm:pr-5 sm:last:border-r-0"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-stone-100 text-slate-700 sm:h-12 sm:w-12">
                  <Icon size={18} />
                </div>
                <p className="mb-1 mt-3 text-xl font-extrabold tracking-[-0.03em] text-slate-950 sm:mt-4 sm:text-2xl">{label}</p>
                <p className="text-base text-slate-600 sm:text-lg">{value}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-[26px] border border-white/10 bg-gradient-to-br from-slate-900 via-[#1b2748] to-[#2d3d66] px-5 py-6 text-white shadow-[0_24px_56px_rgba(17,28,57,0.18)] sm:rounded-[30px] sm:px-8 sm:py-8 lg:mt-3">
          <span className="inline-flex min-h-10 items-center rounded-full border border-white/20 bg-white/10 px-4 text-[11px] font-bold uppercase tracking-[0.14em] text-white/90 sm:min-h-11 sm:px-5 sm:text-[13px] sm:tracking-[0.16em]">
            Why It Feels Premium
          </span>

          <h3 className="mt-5 max-w-[500px] text-[clamp(1.45rem,7vw,2.5rem)] font-black leading-[1.16] tracking-[-0.05em] text-white sm:mt-6">
            Commercial space designed to present your business with more clarity and confidence.
          </h3>

          <div className="mt-5 grid sm:mt-6">
            {highlights.map((item, index) => (
              <div key={item.title} className="border-t border-white/15 py-4 first:border-t-0 first:pt-1 sm:py-5 sm:first:pt-2">
                <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.2em] text-stone-300/85">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mb-2 text-lg font-extrabold tracking-[-0.03em] text-white sm:text-[1.45rem]">{item.title}</p>
                <p className="max-w-[520px] text-[13px] leading-6 text-stone-100/80 sm:text-[15px] sm:leading-7">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-2.5 sm:gap-3">
            {["Cafe-ready", "Clinic-friendly", "Office-ready floors"].map((tag) => (
              <span
                key={tag}
                className="inline-flex min-h-9 items-center rounded-full border border-white/20 bg-white/10 px-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white/95 sm:min-h-10 sm:px-4 sm:text-[12px] sm:tracking-[0.14em]"
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
