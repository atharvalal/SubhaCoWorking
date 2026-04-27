import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const socials = [Facebook, Instagram, Linkedin, Twitter];

export default function Footer() {
  return (
    <footer className="bg-slate-950 px-4 py-18 text-white sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex flex-col no-underline">
              <span className="text-[1.15rem] font-extrabold tracking-[-0.03em] text-white">
                Shubha Shree Bhawan
              </span>
              <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.28em] text-stone-300">
                Premium Commercial Spaces
              </span>
            </Link>
            <p className="mt-5 max-w-[340px] text-base leading-8 text-slate-300">
              Premium offices, meeting rooms, and business-ready support for brands that want a more refined
              presence in Kathmandu.
            </p>

            <div className="mt-6 flex gap-3">
              {socials.map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/8 text-stone-200 transition hover:bg-white/14 hover:text-white"
                  aria-label="Social media link"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-stone-200">Navigate</p>
            <div className="grid gap-3">
              <Link className="text-slate-300 transition hover:text-white" href="/">Home</Link>
              <Link className="text-slate-300 transition hover:text-white" href="/#services">Available Services</Link>
              <Link className="text-slate-300 transition hover:text-white" href="/#why-shubha">Why Shubha</Link>
              <Link className="text-slate-300 transition hover:text-white" href="/#contact">Contact</Link>
            </div>
          </div>

          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-stone-200">Reach Out</p>
            <div className="grid gap-3">
              <a className="text-slate-300 transition hover:text-white" href="tel:+9779808100067">+977 980-8100067</a>
              <a className="text-slate-300 transition hover:text-white" href="mailto:buddhalifestyle.np@gmail.com">buddhalifestyle.np@gmail.com</a>
              <a
                className="text-slate-300 transition hover:text-white"
                href="https://maps.google.com/?q=Baluwatar,Kathmandu,Nepal"
                target="_blank"
                rel="noreferrer"
              >
                Baluwatar, Kathmandu
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-between gap-3 border-t border-white/10 pt-6 text-sm text-slate-400">
          <span>&copy; {new Date().getFullYear()} Shubha Shree Bhawan. All rights reserved.</span>
          <span>Kathmandu, Nepal</span>
        </div>
      </div>
    </footer>
  );
}
