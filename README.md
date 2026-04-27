# Shubha Coworking — Premium Website

A fully responsive, production-ready Next.js website for **Shubha Coworking** — a premium virtual office and meeting room business in Kathmandu.

---

## ✨ Features

- **Next.js 16 App Router** — modern file-based routing
- **Tailwind CSS v4** — utility-first styling
- **Framer Motion** — smooth animations (installed, ready to extend)
- **Lucide React** — crisp, elegant icons
- **Google Fonts** — Cormorant Garamond (display) + DM Sans (body)
- **SEO-optimised** — metadata on every page
- **Fully responsive** — mobile hamburger menu, stacked layouts
- **Sticky transparent navbar** — glass morphism on scroll
- **Golden luxury theme** — premium amber/gold palette with dark accents

---

## 📁 Project Structure

```
shubha-coworking/
├── app/
│   ├── globals.css              # Global styles, CSS variables, fonts
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Home page
│   ├── virtual-office/
│   │   └── page.tsx             # Virtual Office service page
│   └── meeting-rooms/
│       └── page.tsx             # Meeting Rooms service page
├── components/
│   ├── Navbar.tsx               # Sticky transparent navbar + mobile menu
│   ├── Hero.tsx                 # Full-screen hero section
│   ├── About.tsx                # About Us with stats
│   ├── Services.tsx             # Two main service cards
│   ├── WhyUs.tsx                # Why Choose Us grid
│   ├── Contact.tsx              # Contact form + details
│   └── Footer.tsx               # Footer with links + social icons
├── public/                      # Static assets
├── package.json
├── tsconfig.json
└── next.config.ts
```

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production
```bash
npm run build
npm run start
```

---

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--gold-400` | `#e9a825` | Primary gold accent |
| `--gold-500` | `#d4870c` | Darker gold, hover states |
| `--cream` | `#faf8f4` | Light background |
| `--charcoal` | `#1a1814` | Dark sections, text |
| `--warm-gray` | `#6b6460` | Muted body text |

**Fonts:**
- **Cormorant Garamond** — Display headings (`.font-display`)
- **DM Sans** — Body text, UI elements

---

## 📄 Pages

| Route | Description |
|-------|-------------|
| `/` | Home — Hero, About, Services, Why Us, Contact |
| `/virtual-office` | Full virtual office service page with pricing |
| `/meeting-rooms` | Meeting rooms listing with amenities + booking |

---

## 📞 Customization

1. **Contact info** — Update `components/Contact.tsx` and `components/Footer.tsx`
2. **Pricing** — Edit the `plans` array in `app/virtual-office/page.tsx`
3. **Room details** — Edit the `rooms` array in `app/meeting-rooms/page.tsx`
4. **Brand colors** — Update CSS variables in `app/globals.css`
5. **Social links** — Update hrefs in `components/Footer.tsx`

---

Built with ❤️ for **Shubha Coworking**, Kathmandu.
