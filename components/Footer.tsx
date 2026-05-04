import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const socials = [Facebook, Instagram, Linkedin, Twitter];

export default function Footer() {
  return (
    <footer className="bg-slate-950 px-4 py-14 text-white sm:px-6 sm:py-18">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_1fr] md:gap-10">
          <div>
            <Link href="/" className="flex flex-col no-underline">
              <span className="text-[1.05rem] font-extrabold tracking-[-0.03em] text-white sm:text-[1.15rem]">
                Shubha Shree Bhawan
              </span>
              <span className="mt-1 text-[9px] font-bold uppercase tracking-[0.22em] text-stone-300 sm:text-[10px] sm:tracking-[0.28em]">
                Premium Commercial Spaces
              </span>
            </Link>
            <p className="mt-4 max-w-[340px] text-sm leading-7 text-slate-300 sm:mt-5 sm:text-base sm:leading-8">
              Premium offices, meeting rooms, and business-ready support for brands that want a more refined
              presence in Kathmandu.
            </p>

            <div className="mt-5 flex gap-3 sm:mt-6">
              {socials.map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/8 text-stone-200 transition hover:bg-white/14 hover:text-white sm:h-11 sm:w-11"
                  aria-label="Social media link"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-stone-200 sm:mb-4 sm:text-sm sm:tracking-[0.16em]">Navigate</p>
            <div className="grid gap-3">
              <Link className="text-sm text-slate-300 transition hover:text-white sm:text-base" href="/">Home</Link>
              <Link className="text-sm text-slate-300 transition hover:text-white sm:text-base" href="/#services">Available Services</Link>
              <Link className="text-sm text-slate-300 transition hover:text-white sm:text-base" href="/#why-shubha">Why Shubha</Link>
              <Link className="text-sm text-slate-300 transition hover:text-white sm:text-base" href="/#contact">Contact</Link>
            </div>
          </div>

          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-stone-200 sm:mb-4 sm:text-sm sm:tracking-[0.16em]">Reach Out</p>
            <div className="grid gap-3">
              <a className="text-sm text-slate-300 transition hover:text-white sm:text-base" href="tel:+9779808100067">+977 980-8100067</a>
              <a className="text-sm text-slate-300 transition hover:text-white sm:text-base" href="mailto:buddhalifestyle.np@gmail.com"></a>
              <a
                className="text-sm text-slate-300 transition hover:text-white sm:text-base"
                href="https://maps.google.com/?q=Baluwatar,Kathmandu,Nepal"
                target="_blank"
                rel="noreferrer"
              >
                Baluwatar, Kathmandu
              </a>
            </div>
          </div>
        </div>

        <div className="mt-7 flex flex-wrap justify-between gap-3 border-t border-white/10 pt-5 text-xs text-slate-400 sm:mt-8 sm:pt-6 sm:text-sm">
          <span>&copy; {new Date().getFullYear()} Shubha Shree Bhawan. All rights reserved.</span>
          <span>Kathmandu, Nepal</span>
        </div>
      </div>
    </footer>
  );
}
