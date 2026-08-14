import { useEffect, useState } from "react";
import {
  Star,
  Plus,
  Minus,
  ArrowRight,
  ArrowUp,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  X,
  Send,
} from "lucide-react";
import { Reveal, SectionHeading, Counter } from "./primitives";
import { BLOG, CONTACT, FAQS, GALLERY, STATS, TESTIMONIALS } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export function Stats() {
  return (
    <section className="bg-navy/45 py-20 backdrop-blur-sm">
      <div className="container-page grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 90} className="text-center">
            <p className="font-display text-4xl text-navy-foreground sm:text-5xl">
              <span className="text-gradient">
                <Counter value={s.value} suffix={s.suffix} />
              </span>
            </p>
            <p className="mt-3 text-sm tracking-wide text-navy-foreground/65">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const item = active === null ? null : GALLERY[active];

  return (
    <section id="projects" className="py-24 lg:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Projects & Gallery"
          title={<>Recent installations across homes and businesses</>}
          subtitle="Luxury residences, villa security grids, office access control and apartment retrofits."
        />

        <div id="gallery" className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY.map((g, i) => (
            <Reveal key={g.title} delay={(i % 3) * 90}>
              <button
                onClick={() => setActive(i)}
                className="group relative block w-full overflow-hidden rounded-3xl text-left shadow-soft"
              >
                <img
                  src={g.image}
                  alt={g.title}
                  loading="lazy"
                  width={900}
                  height={900}
                  className="aspect-4/3 w-full object-cover transition-transform duration-700 group-hover:scale-107"
                />
                <span className="absolute inset-0 bg-linear-to-t from-navy/85 via-navy/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
                <span className="absolute inset-x-0 bottom-0 p-6">
                  <span className="block text-[0.7rem] font-semibold tracking-[0.18em] text-accent uppercase">
                    {g.tag}
                  </span>
                  <span className="mt-1.5 block font-display text-lg text-navy-foreground">
                    {g.title}
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {item && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={item.title}
          onClick={() => setActive(null)}
          className="fixed inset-0 z-60 grid place-items-center bg-navy/90 p-4 backdrop-blur-sm"
        >
          <button
            onClick={() => setActive(null)}
            aria-label="Close gallery"
            className="absolute top-6 right-6 grid size-11 place-items-center rounded-full border border-navy-foreground/20 text-navy-foreground"
          >
            <X className="size-5" />
          </button>
          <figure onClick={(e) => e.stopPropagation()} className="max-w-3xl">
            <img
              src={item.image}
              alt={item.title}
              className="max-h-[75vh] w-full rounded-3xl object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-navy-foreground/80">
              {item.title} · {item.tag}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-surface/55 py-24 backdrop-blur-sm lg:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Testimonials"
          title={<>Rated 4.9 by 380+ verified customers</>}
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((t, i) => (
            <Reveal
              as="article"
              key={t.name}
              delay={(i % 4) * 90}
              className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift"
            >
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-full bg-brand font-display text-sm text-primary-foreground">
                  {t.initials}
                </span>
                <div>
                  <p className="font-display text-sm text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </div>
              </div>
              <div className="mt-4 flex gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} className="size-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                “{t.review}”
              </p>
              <p className="mt-5 text-[0.7rem] font-medium tracking-wide text-muted-foreground/80">
                Posted on Google Reviews
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Faqs() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faqs" className="py-24 lg:py-32">
      <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <SectionHeading
          align="left"
          eyebrow="FAQs"
          title={<>Answers before you commit</>}
          subtitle="Still unsure about something? Message us on WhatsApp and an engineer will reply."
        />

        <Reveal delay={120} className="divide-y divide-border rounded-3xl border border-border bg-card px-6 shadow-soft sm:px-8">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="py-5">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-6 text-left"
                >
                  <span className="font-display text-base text-foreground">{f.q}</span>
                  <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-primary/8 text-accent">
                    {isOpen ? <Minus className="size-3.5" /> : <Plus className="size-3.5" />}
                  </span>
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-400 ease-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <p className="overflow-hidden text-sm leading-relaxed text-muted-foreground">
                    <span className="block pt-3 pr-10">{f.a}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}

export function Blog() {
  const [featured, ...rest] = BLOG;

  return (
    <section id="blog" className="bg-surface/55 py-24 backdrop-blur-sm lg:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Blog"
          title={<>Latest from the automation journal</>}
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {featured && (
            <Reveal as="article" className="flex flex-col justify-between rounded-3xl bg-navy-deep p-8 shadow-lift sm:p-10">
              <div>
                <span className="rounded-full bg-navy-foreground/10 px-3 py-1 text-[0.7rem] font-semibold tracking-[0.16em] text-accent uppercase">
                  {featured.tag}
                </span>
                <h3 className="mt-6 font-display text-2xl leading-snug text-navy-foreground sm:text-3xl">
                  {featured.title}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-navy-foreground/70">
                  {featured.excerpt}
                </p>
              </div>
              <div className="mt-10 flex items-center justify-between text-xs text-navy-foreground/60">
                <span>
                  {featured.date} · {featured.read}
                </span>
                <span className="inline-flex items-center gap-1.5 font-semibold text-accent">
                  Read article <ArrowRight className="size-4" />
                </span>
              </div>
            </Reveal>
          )}

          <div className="grid gap-4 sm:grid-cols-2">
            {rest.map((post, i) => (
              <Reveal
                as="article"
                key={post.title}
                delay={i * 80}
                className="group flex h-full flex-col justify-between rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lift"
              >
                <div>
                  <span className="text-[0.7rem] font-semibold tracking-[0.16em] text-accent uppercase">
                    {post.tag}
                  </span>
                  <h3 className="mt-3 font-display text-base leading-snug text-foreground">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                </div>
                <p className="mt-6 text-xs text-muted-foreground">
                  {post.date} · {post.read}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    window.setTimeout(() => {
      setSending(false);
      form.reset();
      toast.success("Request received", {
        description: "Our consultant will call you within 30 minutes.",
      });
    }, 700);
  };

  const details = [
    { Icon: Phone, label: "Phone", value: CONTACT.phoneDisplay, href: CONTACT.phoneHref },
    { Icon: MessageCircle, label: "WhatsApp", value: "Chat with an engineer", href: CONTACT.whatsappHref },
    { Icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { Icon: MapPin, label: "Experience Centre", value: CONTACT.address },
    { Icon: Clock, label: "Working Hours", value: CONTACT.hours },
  ];

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Contact"
          title={<>Book a free site visit</>}
          subtitle="Share your requirement and we will call you back with an indicative quote the same day."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.05fr]">
          <Reveal className="flex flex-col gap-6">
            <ul className="grid gap-3 rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
              {details.map(({ Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4 border-b border-border/70 py-3 last:border-0">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/8 text-accent">
                    <Icon className="size-4.5" strokeWidth={1.6} />
                  </span>
                  <div>
                    <p className="text-[0.7rem] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm font-medium text-foreground transition-colors hover:text-accent"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-foreground">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
              <iframe
                title="Lanwan Automation experience centre location"
                src="https://www.google.com/maps?q=Whitefield%20Bengaluru&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-72 w-full border-0 grayscale-[0.25]"
              />
            </div>
          </Reveal>

          <Reveal delay={140}>
            <form
              onSubmit={onSubmit}
              className="rounded-3xl border border-border bg-card p-7 shadow-lift sm:p-9"
            >
              <h3 className="font-display text-xl text-foreground">Request a free consultation</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                No obligation. No pushy sales calls.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <Field label="Full name" name="name" placeholder="Arjun Mehta" required />
                <Field label="Phone number" name="phone" type="tel" placeholder="+91 98765 43210" required />
                <Field label="Email" name="email" type="email" placeholder="you@email.com" className="sm:col-span-2" />
                <div className="sm:col-span-2">
                  <label htmlFor="property" className="text-xs font-semibold tracking-[0.12em] text-muted-foreground uppercase">
                    Property type
                  </label>
                  <select
                    id="property"
                    name="property"
                    className="mt-2 h-12 w-full rounded-xl border border-input bg-background px-4 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/25"
                  >
                    {["Apartment", "Independent Home", "Villa", "Office", "Hotel", "Retail Shop", "Other"].map(
                      (o) => (
                        <option key={o}>{o}</option>
                      ),
                    )}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="text-xs font-semibold tracking-[0.12em] text-muted-foreground uppercase">
                    What do you need?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="e.g. Smart lock, 12 switch points and 4 cameras for a 3BHK"
                    className="mt-2 w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-ring/25"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={sending}
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-7 py-4 text-sm font-semibold text-primary-foreground shadow-glow transition-transform duration-300 hover:-translate-y-0.5 disabled:opacity-70"
              >
                {sending ? "Sending…" : "Book Free Site Visit"}
                <Send className="size-4" />
              </button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Or call us directly at{" "}
                <a href={CONTACT.phoneHref} className="font-semibold text-accent">
                  {CONTACT.phoneDisplay}
                </a>
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  className,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={name} className="text-xs font-semibold tracking-[0.12em] text-muted-foreground uppercase">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 h-12 w-full rounded-xl border border-input bg-background px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-ring/25"
      />
    </div>
  );
}

export function Footer() {
  const cols = [
    {
      title: "Quick Links",
      links: ["Home", "About", "Products", "Solutions", "Projects", "Contact"],
    },
    {
      title: "Products",
      links: ["Smart Locks", "Smart Switches", "Video Door Phones", "Smart Cameras", "Smart Curtains"],
    },
    {
      title: "Services",
      links: ["Consultation", "Site Survey", "Installation", "AMC & Support", "Corporate Projects"],
    },
  ];

  return (
    <footer className="bg-navy/70 pt-20 pb-28 backdrop-blur-md lg:pb-10">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,0.7fr)_1.1fr]">
          <div>
            <span className="font-display text-xl text-navy-foreground">
              LAN<span className="text-gradient">WAN</span>
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-navy-foreground/60">
              Makes value smarter, comfort enhanced — design, supply,
              installation and lifelong support for homes and enterprises.
            </p>
            <p className="mt-5 text-sm text-navy-foreground/70">{CONTACT.address}</p>
            <div className="mt-5 flex gap-2">
              {["IG", "FB", "IN", "YT"].map((s) => (
                <a
                  key={s}
                  href="#contact"
                  aria-label={s}
                  className="grid size-9 place-items-center rounded-full border border-navy-foreground/20 text-xs font-semibold text-navy-foreground/70 transition-colors hover:border-accent hover:text-accent"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h3 className="font-display text-sm tracking-wide text-navy-foreground">{col.title}</h3>
              <ul className="mt-4 grid gap-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#contact"
                      className="text-sm text-navy-foreground/60 transition-colors hover:text-accent"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-display text-sm tracking-wide text-navy-foreground">Newsletter</h3>
            <p className="mt-4 text-sm text-navy-foreground/60">
              Automation tips and offers, once a month.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                e.currentTarget.reset();
                toast.success("Subscribed", { description: "Welcome to the Lanwan journal." });
              }}
              className="mt-4 flex gap-2"
            >
              <input
                type="email"
                required
                aria-label="Email address"
                placeholder="you@email.com"
                className="h-11 w-full rounded-full border border-navy-foreground/20 bg-navy-foreground/8 px-4 text-sm text-navy-foreground outline-none placeholder:text-navy-foreground/40 focus:border-accent"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="grid size-11 shrink-0 place-items-center rounded-full bg-brand text-primary-foreground"
              >
                <ArrowRight className="size-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-navy-foreground/10 pt-6 text-xs text-navy-foreground/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Lanwan Automation. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#contact" className="transition-colors hover:text-accent">Privacy Policy</a>
            <a href="#contact" className="transition-colors hover:text-accent">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function FloatingActions() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed right-4 bottom-24 z-40 flex flex-col gap-3 lg:bottom-6">
        <a
          href={CONTACT.whatsappHref}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="animate-pulse-ring grid size-13 place-items-center rounded-full bg-whatsapp text-primary-foreground shadow-lift transition-transform duration-300 hover:scale-105"
        >
          <MessageCircle className="size-6" />
        </a>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className={cn(
            "grid size-13 place-items-center rounded-full border border-border bg-card text-foreground shadow-soft transition-all duration-300 hover:text-accent",
            show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0",
          )}
        >
          <ArrowUp className="size-5" />
        </button>
      </div>

      {/* Sticky mobile CTA bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-border bg-background/95 p-3 backdrop-blur-xl lg:hidden">
        <a
          href={CONTACT.phoneHref}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-border py-3 text-sm font-semibold text-foreground"
        >
          <Phone className="size-4" /> Call Now
        </a>
        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-brand py-3 text-sm font-semibold text-primary-foreground"
        >
          Free Consultation
        </a>
      </div>
    </>
  );
}
