import { Mail, MapPin, Phone } from "lucide-react";

const details = [
  { icon: Phone, label: "Phone", value: "+977 980-8100067", href: "tel:+9779808100067" },
  {
    icon: Mail,
    label: "Email",
    value: "",
    href: "mailto:buddhalifestyle.np@gmail.com",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Baluwatar, Kathmandu, Nepal",
    href: "https://maps.google.com/?q=Baluwatar,Kathmandu,Nepal",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-slate-900 via-[#1b2748] to-[#2d3d66] px-4 py-20 text-white sm:px-6 sm:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(360px,0.8fr)] lg:items-start lg:gap-8">
        <div>
          <span className="inline-flex min-h-10 items-center rounded-full border border-white/25 bg-white/10 px-4 text-[11px] font-bold uppercase tracking-[0.14em] text-white sm:min-h-11 sm:px-5 sm:text-[13px] sm:tracking-[0.16em]">
            Contact
          </span>
          <h2 className="mt-4 text-[clamp(2rem,8vw,4.4rem)] font-black leading-[1.02] tracking-[-0.06em] text-white sm:mt-5">
            Book a viewing or ask about the
            <em className="not-italic text-stone-200"> right space for your business</em>
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-stone-100/85 sm:text-lg sm:leading-8">
            Reach out for viewing availability, meeting room scheduling, or commercial space details. We will
            point you to the most suitable option quickly.
          </p>
        </div>

        <div className="rounded-[26px] border border-white/15 bg-white/10 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.2)] backdrop-blur-md sm:rounded-[32px] sm:p-8">
          <h3 className="text-2xl font-black tracking-[-0.04em] text-white sm:text-3xl">Direct Contact</h3>
          <p className="mt-2 text-sm leading-6 text-stone-100/80 sm:text-base sm:leading-7">Sunday to Friday, 9:00 AM to 6:00 PM.</p>

          <div className="mt-5 grid gap-4 sm:mt-6 sm:gap-5">
            {details.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex gap-4">
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-stone-200 sm:h-12 sm:w-12">
                  <Icon size={18} />
                </div>
                <div>
                  <strong className="mb-1 block text-xs font-bold uppercase tracking-[0.14em] text-white/75">{label}</strong>
                  <a
                    className="text-base leading-7 text-white transition hover:text-stone-200 sm:text-lg sm:leading-8"
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                  >
                    {value}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
