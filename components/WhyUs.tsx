import { CalendarCheck, HeadphonesIcon, MapPin, ShieldCheck } from "lucide-react";

const reasons = [
  {
    icon: MapPin,
    title: "Recognizable Address",
    description: "A central location that gives your brand more credibility before the meeting even begins.",
  },
  {
    icon: ShieldCheck,
    title: "Professional Setting",
    description: "The interiors, cards, and arrival experience feel closer to a premium complex than a basic office.",
  },
  {
    icon: CalendarCheck,
    title: "Flexible Use",
    description: "Move between address services and physical meeting space without changing vendors or workflows.",
  },
  {
    icon: HeadphonesIcon,
    title: "Responsive Support",
    description: "Quick coordination for visits, room needs, guest handling, and everyday operational support.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-shubha" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex min-h-11 items-center rounded-full border border-stone-300 bg-white/80 px-5 text-[13px] font-bold uppercase tracking-[0.16em] text-slate-600">
            Why Shubha
          </span>
          <h2 className="mt-5 text-[clamp(2.3rem,4.6vw,4.4rem)] font-black leading-[1.02] tracking-[-0.06em] text-slate-950">
            Designed to look calm, clear, and
            <em className="not-italic text-slate-500"> immediately premium</em>
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            The building presentation, room quality, and support model all work together so your business feels
            better positioned in front of clients and guests.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {reasons.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="rounded-[30px] border border-stone-200 bg-white/90 p-7 shadow-[0_20px_48px_rgba(17,28,57,0.08)]"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-stone-100 text-slate-700">
                <Icon size={20} />
              </div>
              <h3 className="mt-5 text-2xl font-black tracking-[-0.04em] text-slate-950">{title}</h3>
              <p className="mt-3 text-base leading-8 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
