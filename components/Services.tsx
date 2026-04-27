import Link from "next/link";
import { ArrowRight, Building2, MonitorPlay } from "lucide-react";

const spaces = [
  {
    href: "/virtual-office",
    icon: Building2,
    title: "Virtual Office",
    description:
      "A strong Kathmandu business address with reception support, mail handling, and a more established brand front.",
  },
  {
    href: "/meeting-rooms",
    icon: MonitorPlay,
    title: "Meeting Rooms",
    description:
      "Private rooms for presentations, interviews, workshops, and client meetings with a polished hospitality feel.",
  },
];

export default function Services() {
  return (
    <section id="services" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex min-h-11 items-center rounded-full border border-stone-300 bg-white/80 px-5 text-[13px] font-bold uppercase tracking-[0.16em] text-slate-600">
            Available Services
          </span>
          <h2 className="mt-5 text-[clamp(2.3rem,4.6vw,4.4rem)] font-black leading-[1.02] tracking-[-0.06em] text-slate-950">
            Flexible spaces for businesses that want a
            <em className="not-italic text-slate-500"> cleaner, stronger image</em>
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Choose the plan or room type that matches how you work, then use the building as a more polished
            front for clients, guests, and day-to-day operations.
          </p>
        </div>

        <div className="grid justify-center gap-6 md:grid-cols-2">
          {spaces.map(({ href, icon: Icon, title, description }) => (
            <article
              key={title}
              className="max-w-xl rounded-[32px] border border-stone-200 bg-white/90 p-8 shadow-[0_22px_55px_rgba(17,28,57,0.08)]"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-stone-100 text-slate-700">
                <Icon size={22} />
              </div>
              <h3 className="mt-6 text-4xl font-black tracking-[-0.05em] text-slate-950">{title}</h3>
              <p className="mt-4 text-lg leading-8 text-slate-600">{description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={href}
                  className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-stone-300 bg-[#fffaf2] px-5 text-sm font-extrabold uppercase tracking-[0.12em] text-slate-900"
                >
                  View Service
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href={href === "/meeting-rooms" ? "/meeting-rooms#meeting-contact" : "/virtual-office#virtual-office-contact"}
                  className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-slate-900 px-5 text-sm font-extrabold uppercase tracking-[0.12em] text-white"
                >
                  Contact Us
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
