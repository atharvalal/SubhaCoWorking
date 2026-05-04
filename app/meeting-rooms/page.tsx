import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Coffee,
  MonitorPlay,
  Users,
  Wifi,
} from "lucide-react";
import Footer from "@/components/Footer";
import InquiryEmailForm from "@/components/InquiryEmailForm";
import Navbar from "@/components/Navbar";

const featuredRoom = {
  name: "Premium Meeting Room",
  image: "/meeting-boardroom.svg",
  tag: "Client-ready setup",
  capacity: "6 to 10 guests",
  description:
    "A polished meeting environment for presentations, leadership discussions, workshops, interviews, and private client sessions.",
  perks: [
    "Professional table and seating layout",
    "Large display support for meetings and pitches",
    "Clean, refined interior for guest-facing use",
    "Flexible arrangement based on your group size",
  ],
};

const perks = [
  {
    icon: MonitorPlay,
    title: "Presentation-ready screens",
    description:
      "Display support that keeps pitches, training, and reviews running smoothly.",
  },
  {
    icon: Wifi,
    title: "Reliable high-speed internet",
    description:
      "Stable connectivity for remote guests, demos, and uninterrupted collaboration.",
  },
  {
    icon: Coffee,
    title: "Refreshments on request",
    description:
      "Tea, coffee, and light serving options when you need a more hosted experience.",
  },
  {
    icon: Users,
    title: "Layouts for different group sizes",
    description:
      "Choose a room that fits interviews, strategy sessions, or larger internal workshops.",
  },
];

const directContact = [
  { label: "Phone", value: "+977 980-8100067", href: "tel:+9779808100067" },
  {
    label: "Email",
    value: "",
    href: "mailto:buddhalifestyle.np@gmail.com",
  },
  {
    label: "Location",
    value: "Baluwatar, Kathmandu, Nepal",
    href: "https://maps.google.com/?q=Baluwatar,Kathmandu,Nepal",
  },
];

export default function MeetingRoomsPage() {
  return (
    <>
      <Navbar />

      <section className="page-hero">
        <div className="section-inner page-hero-grid">
          <div className="page-hero-copy">
            <div className="breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <span>Meeting Rooms</span>
            </div>

            <span className="eyebrow" style={{ marginTop: "24px" }}>
              Premium Meeting Spaces
            </span>
            <h1 className="page-title">
              Designed for clear
              <span>professional meetings.</span>
            </h1>
            <p>
              Use Shubha Shree Bhawan for private discussions, presentations,
              workshops, and team sessions in rooms that feel polished,
              practical, and guest-ready.
            </p>
            <div className="button-row">
              <Link href="#meeting-contact" className="button-primary">
                Contact Us
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="page-panel">
            <h3>What you get on every booking</h3>
            <div className="check-list">
              {[
                "Clean, presentable interiors",
                "Support for client-facing meetings",
                "Flexible room options by group size",
                "Fast coordination for availability",
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
            <span className="eyebrow">Meeting Rooms</span>
            <h2 className="section-title">
              Room cards with the
              <em> right mood and layout</em>
            </h2>
            <p className="lead-copy">
              Browse the available room types below. Each card focuses on the
              experience and perks rather than a a single featured room card
              focused on the experience and perks rather than public pricing.
            </p>
          </div>

          <div className="room-gallery-grid">
            <article className="gallery-card">
              <div className="room-card-image">
                <Image
                  src={featuredRoom.image}
                  alt={featuredRoom.name}
                  width={1200}
                  height={800}
                  sizes="(max-width: 720px) 100vw, 48vw"
                />
              </div>
              <div className="room-card-body">
                <div className="meta-strip">
                  <span className="room-badge">{featuredRoom.tag}</span>
                  <span className="pill">{featuredRoom.capacity}</span>
                </div>
                <h3 className="display-title">{featuredRoom.name}</h3>
                <p className="card-copy">{featuredRoom.description}</p>

                <div className="check-list">
                  {featuredRoom.perks.map((perk) => (
                    <div key={perk} className="check-item">
                      <CheckCircle2 size={18} color="var(--brand)" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="section-inner">
          <div className="section-header">
            <span className="eyebrow">Perks</span>
            <h2 className="section-title">
              Everything needed for a<em> smooth meeting day</em>
            </h2>
          </div>

          <div className="amenities-grid">
            {perks.map(({ icon: Icon, title, description }) => (
              <article key={title} className="amenity-card">
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

      <section
        id="meeting-contact"
        className="section-shell section-shell--brand section-shell--tight"
      >
        <div className="section-inner contact-split">
          <div className="contact-form-card">
            <h3>Contact us for availability</h3>
            <p style={{ marginBottom: "22px" }}>
              Tell us the room type, date, and group size. We will guide you to
              the best option.
            </p>

            <InquiryEmailForm
              idPrefix="meeting-room"
              inquiryTypeLabel="Room Type"
              inquiryTypePlaceholder="Select a room"
              inquiryTypeOptions={[
                "Boardroom Suite",
                "Focus Room",
                "Workshop Hall",
              ]}
              subjectPrefix="Meeting Room Enquiry"
              messagePlaceholder="Date, time, number of guests, and any special setup needed"
            />
          </div>

          <div className="contact-panel">
            <h3>Direct details</h3>
            <p>
              Reach out directly if you want a faster reply or need help
              choosing the right room.
            </p>

            <div className="contact-detail-list">
              {directContact.map((item) => (
                <div key={item.label} className="contact-detail">
                  <div className="icon-shell">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <strong>{item.label}</strong>
                    <a
                      href={item.href}
                      target={
                        item.href.startsWith("http") ? "_blank" : undefined
                      }
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
