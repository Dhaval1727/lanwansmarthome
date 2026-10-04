import {
  ShieldCheck,
  Lightbulb,
  Wifi,
  Blinds,
  Camera,
  ArrowRight,
  Check,
  Award,
  Wrench,
  Headphones,
  BadgeIndianRupee,
  Zap,
  Users,
  PackageCheck,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import lightImg from "@/assets/p-light.jpg";
import curtainImg from "@/assets/SMART CURTAINS/p-curtain.jpg";
import luxuryImg from "@/assets/lanwan-smart-home-luxury-living-room.png";

import appLivingRoom from "@/assets/lanwan-smart-home-luxury-living-room.png";
import appVillaEntrance from "@/assets/LOCK/Home_Apartment.png";
import appHotelRoom from "@/assets/LOCK/SMART LOCK/Hotels_LOCK.png";
import appModernOffice from "@/assets/LOCK/Lock_Villas.png";
import { Reveal, SectionHeading } from "./primitives";
import { Link } from "@tanstack/react-router";
import { CATEGORIES, FEATURED_PRODUCTS } from "@/lib/catalog";
import { CategoryCard, ProductCard } from "./product-ui";
import { CONTACT, PROCESS, SOLUTIONS, TRUST_BADGES, WHY_US } from "@/lib/site-data";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy-deep">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Luxury villa entrance with a fingerprint smart door lock at dusk"
          width={1920}
          height={1280}
          className="size-full object-cover opacity-55"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, oklch(0.208 0.042 265.8 / 0.96) 8%, oklch(0.208 0.042 265.8 / 0.72) 45%, oklch(0.208 0.042 265.8 / 0.25) 100%)",
          }}
        />
      </div>

      {/* Floating smart-home icons */}
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
        {[
          { Icon: ShieldCheck, top: "18%", left: "58%", delay: "0s" },
          { Icon: Lightbulb, top: "62%", left: "52%", delay: "1.2s" },
          { Icon: Camera, top: "34%", left: "86%", delay: "2.1s" },
          { Icon: Blinds, top: "74%", left: "78%", delay: "0.6s" },
          { Icon: Wifi, top: "12%", left: "80%", delay: "1.8s" },
        ].map(({ Icon, top, left, delay }, i) => (
          <span
            key={i}
            className="animate-float absolute grid size-14 place-items-center rounded-2xl border border-navy-foreground/15 bg-navy-foreground/10 text-accent backdrop-blur-md"
            style={{ top, left, animationDelay: delay }}
          >
            <Icon className="size-6" strokeWidth={1.5} />
          </span>
        ))}
      </div>

      <div className="container-page relative pt-32 pb-16 sm:pt-40 lg:pt-48 lg:pb-24">
        <Reveal className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-navy-foreground/20 bg-navy-foreground/10 px-4 py-2 text-xs font-semibold tracking-[0.16em] text-accent uppercase backdrop-blur-md">
            <span className="animate-pulse-ring size-1.5 rounded-full bg-accent" />
            Bengaluru · Chennai · Hyderabad
          </span>

          <h1 className="mt-7 text-[2.75rem] leading-[1.03] text-navy-foreground sm:text-6xl lg:text-7xl">
            Luxury Security,
            <br />
            <span className="text-gradient">Effortlessly Yours.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-foreground/75 sm:text-lg">
            Bronze-finished smart door locks, face and palm recognition, video door bells and full
            home automation — engineered for premium homes and installed by certified engineers.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/"
              hash="contact"
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 text-sm font-semibold text-primary-foreground shadow-glow transition-transform duration-300 hover:-translate-y-0.5"
            >
              Get Free Consultation
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/"
              hash="products"
              className="inline-flex items-center gap-2 rounded-full border border-navy-foreground/25 bg-navy-foreground/10 px-7 py-4 text-sm font-semibold text-navy-foreground backdrop-blur-md transition-colors duration-300 hover:border-accent/60 hover:text-accent"
            >
              Explore Products
            </Link>
          </div>
        </Reveal>

        <Reveal delay={200} className="mt-14 lg:mt-20">
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {TRUST_BADGES.map((badge) => (
              <li
                key={badge}
                className="flex items-center gap-2.5 rounded-2xl border border-navy-foreground/15 bg-navy-foreground/8 px-4 py-3.5 text-sm font-medium text-navy-foreground/90 backdrop-blur-md"
              >
                <Check className="size-4 shrink-0 text-accent" strokeWidth={2.5} />
                {badge}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export function About() {
  const points = [
    "Professional installation",
    "Certified engineers",
    "100% genuine products",
    "After-sales support",
    "Extended warranty",
    "Fast service response",
  ];

  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="container-page grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-semibold tracking-[0.18em] text-accent uppercase">
            <span className="size-1.5 rounded-full bg-accent" />
            About Lanwan
          </span>
          <h2 className="mt-5 text-3xl leading-[1.12] text-foreground sm:text-4xl lg:text-[2.75rem]">
            Automation that feels invisible, engineered to be dependable.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Lanwan Automation is a leading smart home automation and IoT solutions company,
            transforming everyday spaces into intelligent environments. From homes to enterprises —
            hotels, hospitals, senior living spaces and warehouses — we design solutions that bring
            comfort, convenience and control to your fingertips.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="font-display text-base text-foreground">Our Mission</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Make premium automation accessible, reliable and effortless for every Indian home.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="font-display text-base text-foreground">Our Vision</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                A future where every building is secure, energy-aware and intuitive to live in.
              </p>
            </div>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-2.5 text-sm font-medium text-foreground">
                <span className="grid size-5 shrink-0 place-items-center rounded-full bg-primary/10 text-accent">
                  <Check className="size-3" strokeWidth={3} />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={150} className="relative mt-8 lg:mt-0">
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <div className="overflow-hidden rounded-[2rem] shadow-lift h-full relative">
              <img
                src={luxuryImg}
                alt="Luxury Smart Home Living Room"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="grid gap-4 sm:gap-6">
              <div className="overflow-hidden rounded-[2rem] shadow-lift">
                <img
                  src={lightImg}
                  alt="Penthouse Track Lighting"
                  loading="lazy"
                  className="aspect-square w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-[2rem] shadow-lift">
                <img
                  src={curtainImg}
                  alt="Bedroom Curtain Motors"
                  loading="lazy"
                  className="aspect-square w-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="glass-card absolute -bottom-8 -left-4 w-56 rounded-2xl p-5 sm:left-8">
            <p className="font-display text-3xl text-foreground">98%</p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              of our customers refer us to a friend or neighbour
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Products() {
  return (
    <section id="products" className="relative overflow-hidden bg-navy-deep py-24 lg:py-32">
      {/* Background layer */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt=""
          loading="lazy"
          className="size-full object-cover object-center opacity-[0.03]"
        />
        <div className="absolute inset-0 bg-linear-to-b from-navy-deep via-transparent to-navy-deep" />
      </div>

      <div className="container-page relative z-10">
        <SectionHeading
          eyebrow="Product Catalogue"
          title={<>Browse by category</>}
          subtitle="Smart door locks, glass door locks, video door phones, cabinet locks, switches and home automation — all from the Lanwan catalogue."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((category, i) => (
            <CategoryCard key={category.slug} category={category} index={i} />
          ))}
        </div>

        <div className="mt-20">
          <SectionHeading
            eyebrow="Featured"
            title={<>Most requested models</>}
            subtitle="A curated selection from our best-selling range."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURED_PRODUCTS.map((product, i) => (
              <ProductCard
                key={product.slug}
                product={product}
                categorySlug={product.categorySlug}
                index={i}
              />
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform duration-300 hover:-translate-y-0.5"
            >
              View full catalogue <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Solutions() {
  const majorSolutions = SOLUTIONS.slice(0, 4);
  const minorSolutions = SOLUTIONS.slice(4);

  const images = [appLivingRoom, appVillaEntrance, appHotelRoom, appModernOffice];
  const productsLists = [
    ["Smart Lighting", "Curtains", "Climate Control"],
    ["Smart Lock", "Video Doorbell", "Lighting"],
    ["RFID Locks", "DND Panels", "Energy Switches"],
    ["Access Control", "Occupancy", "Energy Dashboard"],
  ];

  return (
    <section id="solutions" className="bg-background py-24 lg:py-32">
      <div className="container-page">
        <SectionHeading eyebrow="Solutions" title="Engineered for your exact requirements." />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {majorSolutions.map((s, i) => (
            <Reveal
              key={s.title}
              delay={(i % 4) * 90}
              className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-border/50 bg-card/40 shadow-soft backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-accent/40 hover:bg-card/60 hover:shadow-[0_20px_40px_-15px_oklch(0.755_0.115_72_/_0.15)]"
            >
              <div className="relative h-48 overflow-hidden rounded-t-[2rem]">
                <img
                  src={images[i]}
                  alt={s.title}
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/20" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl text-foreground group-hover:text-accent transition-colors">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {productsLists[i]?.map((p) => (
                    <span
                      key={p}
                      className="text-[0.65rem] uppercase tracking-wider font-semibold border border-border rounded-full px-2 py-0.5 text-muted-foreground"
                    >
                      {p}
                    </span>
                  ))}
                </div>
                <div className="mt-auto pt-6 flex items-center gap-1.5 text-sm font-semibold text-accent">
                  Explore {s.title} <ArrowRight className="size-4" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {minorSolutions.map((s, i) => (
            <Reveal key={s.title} delay={i * 50}>
              <button className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-accent hover:text-accent">
                {s.title}
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const WHY_ICONS = [Award, PackageCheck, Headphones, ShieldCheck, BadgeIndianRupee, Zap, Users];

export function WhyUs() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-page">
        <SectionHeading eyebrow="Why Choose Us" title={<>Seven reasons clients stay with us</>} />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_US.map((item, i) => {
            const Icon = WHY_ICONS[i] ?? Wrench;
            return (
              <Reveal
                key={item.title}
                delay={(i % 4) * 80}
                className="group rounded-[2rem] border border-border/50 bg-card/40 p-8 shadow-soft backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-accent/40 hover:bg-card/60 hover:shadow-[0_20px_40px_-15px_oklch(0.755_0.115_72_/_0.15)]"
              >
                <span className="grid size-12 place-items-center rounded-2xl bg-accent/10 text-accent transition-colors duration-500 group-hover:bg-brand group-hover:text-primary-foreground group-hover:shadow-glow">
                  <Icon className="size-5.5" strokeWidth={1.6} />
                </span>
                <h3 className="mt-5 font-display text-lg text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.copy}</p>
              </Reveal>
            );
          })}
          <Reveal
            delay={320}
            className="flex flex-col justify-between rounded-[2rem] bg-brand p-8 shadow-glow transition-transform duration-500 hover:-translate-y-2"
          >
            <h3 className="font-display text-xl text-primary-foreground">
              Not sure where to start?
            </h3>
            <Link
              to="/"
              hash="contact"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-foreground"
            >
              Book a free consultation
              <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="bg-surface/55 py-24 backdrop-blur-sm lg:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Our Process"
          title={<>Six steps from first call to handover</>}
          subtitle="Transparent, documented and predictable — you always know what happens next."
        />

        <div className="relative mt-16">
          <span
            aria-hidden
            className="absolute top-6 left-0 hidden h-px w-full bg-linear-to-r from-transparent via-primary/30 to-transparent lg:block"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
            {PROCESS.map((p, i) => (
              <Reveal
                key={p.step}
                delay={i * 80}
                className="relative text-center lg:text-left group"
              >
                <span className="relative z-10 grid size-12 place-items-center rounded-2xl bg-card font-display text-sm text-accent shadow-soft border border-border/50 max-lg:mx-auto transition-colors duration-500 group-hover:border-accent/50 group-hover:bg-accent/10">
                  {p.step}
                </span>
                <h3 className="mt-5 font-display text-base text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
