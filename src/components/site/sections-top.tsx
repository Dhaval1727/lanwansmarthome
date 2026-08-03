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
import { Reveal, SectionHeading } from "./primitives";
import {
  BRANDS,
  PRODUCTS,
  PROCESS,
  SOLUTIONS,
  TRUST_BADGES,
  WHY_US,
} from "@/lib/site-data";

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
            Control Everything
            <br />
            <span className="text-gradient">Effortlessly.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-foreground/75 sm:text-lg">
            Makes value smarter, comfort enhanced. Ultra-fast IoT response,
            smart app control and seamless Zigbee 3.0 automation — designed,
            installed and supported by certified engineers.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 text-sm font-semibold text-primary-foreground shadow-glow transition-transform duration-300 hover:-translate-y-0.5"
            >
              Get Free Consultation
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-full border border-navy-foreground/25 bg-navy-foreground/10 px-7 py-4 text-sm font-semibold text-navy-foreground backdrop-blur-md transition-colors duration-300 hover:border-accent/60 hover:text-accent"
            >
              Explore Products
            </a>
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
            Lanwan Automation is a leading smart home automation and IoT solutions
            company, transforming everyday spaces into intelligent environments.
            From homes to enterprises — hotels, hospitals, senior living spaces
            and warehouses — we design solutions that bring comfort, convenience
            and control to your fingertips.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="font-display text-base text-foreground">Our Mission</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Make premium automation accessible, reliable and effortless for
                every Indian home.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="font-display text-base text-foreground">Our Vision</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                A future where every building is secure, energy-aware and
                intuitive to live in.
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

        <Reveal delay={150} className="relative">
          <div className="relative overflow-hidden rounded-[2rem] shadow-lift">
            <img
              src={heroImg}
              alt="Certified engineer installing a smart lock in a luxury home"
              loading="lazy"
              width={1920}
              height={1280}
              className="aspect-4/5 w-full object-cover"
            />
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
    <section id="products" className="bg-surface py-24 lg:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Our Products"
          title={<>Premium hardware, curated and tested</>}
          subtitle="The complete Phlipton catalogue — switches, knobs, screens, locks, curtains and lighting — installed by our own engineers."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((product, i) => (
            <Reveal
              as="article"
              key={product.name}
              delay={(i % 4) * 90}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lift"
            >
              <div className="relative overflow-hidden bg-secondary">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  width={900}
                  height={900}
                  className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-card to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg text-foreground">{product.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {product.features.map((f) => (
                    <li
                      key={f}
                      className="rounded-full bg-secondary px-2.5 py-1 text-[0.7rem] font-medium text-secondary-foreground"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  aria-label={`Learn more about ${product.name}`}
                  className="mt-6 inline-flex w-fit items-center gap-1.5 rounded-full border border-primary/25 bg-primary/5 px-4 py-2 text-sm font-semibold text-accent transition-colors duration-300 hover:border-primary hover:bg-brand hover:text-primary-foreground"
                >
                  Learn More
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Solutions() {
  return (
    <section id="solutions" className="bg-navy-deep py-24 lg:py-32">
      <div className="container-page">
        <SectionHeading
          tone="dark"
          eyebrow="Smart Home Solutions"
          title={<>Built for the space you are designing</>}
          subtitle="From a single apartment retrofit to hotels, hospitals and warehouses, one ecosystem scales with you."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((s, i) => (
            <Reveal
              key={s.title}
              delay={(i % 3) * 90}
              className="group relative overflow-hidden rounded-3xl border border-navy-foreground/12 bg-navy-foreground/6 p-7 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-accent/40"
            >
              <span className="font-display text-xs tracking-[0.2em] text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-xl text-navy-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-foreground/65">{s.copy}</p>
              <span className="absolute -right-10 -bottom-10 size-28 rounded-full bg-accent/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100 lg:opacity-0" />
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
        <SectionHeading
          eyebrow="Why Choose Us"
          title={<>Seven reasons clients stay with us</>}
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_US.map((item, i) => {
            const Icon = WHY_ICONS[i] ?? Wrench;
            return (
              <Reveal
                key={item.title}
                delay={(i % 4) * 80}
                className="group rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lift"
              >
                <span className="grid size-12 place-items-center rounded-2xl bg-primary/8 text-accent transition-colors duration-500 group-hover:bg-brand group-hover:text-primary-foreground">
                  <Icon className="size-5.5" strokeWidth={1.6} />
                </span>
                <h3 className="mt-5 font-display text-lg text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.copy}</p>
              </Reveal>
            );
          })}
          <Reveal
            delay={320}
            className="flex flex-col justify-between rounded-3xl bg-brand p-7 shadow-glow"
          >
            <h3 className="font-display text-lg text-primary-foreground">
              Not sure where to start?
            </h3>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-foreground"
            >
              Book a free consultation
              <ArrowRight className="size-4" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="bg-surface py-24 lg:py-32">
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
              <Reveal key={p.step} delay={i * 80} className="relative text-center lg:text-left">
                <span className="relative z-10 grid size-12 place-items-center rounded-2xl bg-card font-display text-sm text-accent shadow-soft ring-1 ring-primary/15 max-lg:mx-auto">
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

export function Brands() {
  return (
    <section className="border-y border-border py-14">
      <div className="container-page">
        <p className="text-center text-xs font-semibold tracking-[0.24em] text-muted-foreground uppercase">
          Featured brands we install
        </p>
        <div className="group relative mt-8 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
          <div className="animate-marquee flex w-max gap-4 group-hover:[animation-play-state:paused]">
            {[...BRANDS, ...BRANDS].map((brand, i) => (
              <span
                key={`${brand}-${i}`}
                className="grid h-16 w-44 place-items-center rounded-2xl border border-border bg-card font-display text-lg tracking-tight text-foreground/70 transition-colors duration-300 hover:border-primary/30 hover:text-accent"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          Brand names shown as text placeholders pending official logo permissions.
        </p>
      </div>
    </section>
  );
}
