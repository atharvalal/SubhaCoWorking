import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Globe,
  Mail,
  Phone,
  Shield,
  Users,
} from "lucide-react";
import Footer from "@/components/Footer";
import InquiryEmailForm from "@/components/InquiryEmailForm";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Virtual Office | Shubha Shree Bhawan",
  description:
    "Use a premium Kathmandu business address with mail handling, call support, and flexible virtual office plans.",
};

const benefits = [
  {
    icon: Building2,
    title: "Premium business address",
    description: "Use a central address on registrations, business cards, invoices, and day-to-day communication.",
  },
  {
    icon: Mail,
    title: "Mail and courier handling",
    description: "Important deliveries are received, organized, and communicated clearly.",
  },
  {
    icon: Phone,
    title: "Call support options",
    description: "Add a more professional phone presence when your business needs it.",
  },
  {
    icon: Shield,
    title: "Registration-ready setup",
    description: "Suitable for businesses that need a more credible operating address from the beginning.",
  },
  {
    icon: Globe,
    title: "Operate from anywhere",
    description: "Maintain a Kathmandu presence even if the day-to-day team works remotely.",
  },
  {
    icon: Users,
    title: "Access to meeting rooms",
    description: "Bring clients in for in-person meetings without switching locations or providers.",
  },
];

export default function VirtualOfficePage() {
  return (
    <>
      <Navbar />

      <section className="page-hero">
        <div className="section-inner page-hero-grid">
          <div className="page-hero-copy">
            <div className="breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <span>Virtual Office</span>
            </div>

            <span className="eyebrow" style={{ marginTop: "24px" }}>
              Virtual Office Solutions
            </span>
            <h1 className="page-title">
              A stronger address for
              <span>modern businesses.</span>
            </h1>
            <p>
              Build a more credible presence in Kathmandu without the cost of a permanent physical office. Use
              Shubha Shree Bhawan for address services, coordination, and client-ready support.
            </p>
            <div className="button-row">
              <Link href="#virtual-office-contact" className="button-primary">
                Ask About Plans
                <ArrowRight size={16} />
              </Link>
              <Link href="/meeting-rooms" className="button-secondary">
                View Meeting Rooms
              </Link>
            </div>
          </div>

          <div className="page-panel">
            <span className="eyebrow" style={{ marginBottom: "18px" }}>
              Virtual Office Support
            </span>
            <h3>A practical setup for businesses that need presence without full office overhead.</h3>
            <p style={{ marginBottom: "22px" }}>
              Use one location for address services, mail coordination, and client-facing support while keeping
              your operations flexible.
            </p>
            <div className="check-list" style={{ marginTop: 0 }}>
              {[
                "Premium address for registrations and branding",
                "Mail and courier handling from one location",
                "Support options that grow with your business",
                "Easy link to in-person meetings when required",
              ].map((item) => (
                <div key={item} className="check-item">
                  <CheckCircle2 size={18} color="var(--brand)" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell section-shell--soft">
        <div className="section-inner">
          <div className="section-header">
            <span className="eyebrow">Included Services</span>
            <h2 className="section-title">
              Practical support for brands that need a
              <em> more professional front</em>
            </h2>
            <p className="lead-copy">
              The service is structured to make your business look anchored, reachable, and ready without the
              complexity of maintaining a dedicated office full time.
            </p>
          </div>

          <div className="features-grid">
            {benefits.map(({ icon: Icon, title, description }) => (
              <article key={title} className="feature-card">
                <div className="icon-shell">
                  <Icon size={20} />
                </div>
                <h3 className="feature-title">{title}</h3>
                <p className="card-copy">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="virtual-office-contact" className="section-shell section-shell--brand section-shell--tight">
        <div className="section-inner contact-split">
          <div className="contact-form-card">
            <h3>Contact us for availability</h3>
            <p style={{ marginBottom: "22px" }}>
              Tell us what kind of virtual office setup you need and we will suggest the right option.
            </p>

            <InquiryEmailForm
              idPrefix="virtual-office"
              inquiryTypeLabel="Service Type"
              inquiryTypePlaceholder="Select a plan type"
              inquiryTypeOptions={["Starter", "Professional", "Enterprise"]}
              subjectPrefix="Virtual Office Booking"
              messagePlaceholder="Tell us about your business and what kind of address or support you need"
            />
          </div>

          <div className="contact-panel">
            <h3>Direct details</h3>
            <p>Reach out directly if you want quick plan guidance or need help choosing the right service level.</p>

            <div className="contact-detail-list">
              {[
                { label: "Phone", value: "+977 980-8100067", href: "tel:+9779808100067" },
                { label: "Email", value: "", href: "mailto:buddhalifestyle.np@gmail.com" },
                {
                  label: "Location",
                  value: "Baluwatar, Kathmandu, Nepal",
                  href: "https://maps.google.com/?q=Baluwatar,Kathmandu,Nepal",
                },
              ].map((item) => (
                <div key={item.label} className="contact-detail">
                  <div className="icon-shell">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <strong>{item.label}</strong>
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
