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
    <section id="services" className="px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <span className="inline-flex min-h-10 items-center rounded-full border border-stone-300 bg-white/80 px-4 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-600 sm:min-h-11 sm:px-5 sm:text-[13px] sm:tracking-[0.16em]">
            Available Services
          </span>
          <h2 className="mt-4 text-[clamp(2rem,8vw,4.4rem)] font-black leading-[1.02] tracking-[-0.06em] text-slate-950 sm:mt-5">
            Flexible spaces for businesses that want a
            <em className="not-italic text-slate-500"> cleaner, stronger image</em>
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Choose the plan or room type that matches how you work, then use the building as a more polished
            front for clients, guests, and day-to-day operations.
          </p>
        </div>

        <div className="grid justify-center gap-5 md:grid-cols-2 md:gap-6">
          {spaces.map(({ href, icon: Icon, title, description }) => (
            <article
              key={title}
              className="max-w-xl rounded-[26px] border border-stone-200 bg-white/90 p-6 shadow-[0_22px_55px_rgba(17,28,57,0.08)] sm:rounded-[32px] sm:p-8"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-stone-100 text-slate-700 sm:h-14 sm:w-14">
                <Icon size={22} />
              </div>
              <h3 className="mt-5 text-3xl font-black tracking-[-0.05em] text-slate-950 sm:mt-6 sm:text-4xl">{title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600 sm:mt-4 sm:text-lg sm:leading-8">{description}</p>
              <div className="mt-5 flex flex-col gap-3 sm:mt-6 sm:flex-row sm:flex-wrap">
                <Link
                  href={href}
                  className="inline-flex min-h-11 w-full items-center justify-center rounded-2xl border border-stone-300 bg-[#fffaf2] px-5 text-sm font-extrabold uppercase tracking-[0.12em] text-slate-900 sm:min-h-12 sm:w-auto"
                >
                  View Service
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href={href === "/meeting-rooms" ? "/meeting-rooms#meeting-contact" : "/virtual-office#virtual-office-contact"}
                  className="inline-flex min-h-11 w-full items-center justify-center rounded-2xl border border-stone-300 bg-white px-5 text-sm font-extrabold uppercase tracking-[0.12em] text-slate-900 shadow-[0_10px_24px_rgba(17,28,57,0.06)] transition hover:bg-[#f8f1e5] sm:min-h-12 sm:w-auto"
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
