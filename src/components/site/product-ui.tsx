import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { Reveal } from "./primitives";
import { CONTACT } from "@/lib/site-data";
import type { Category, Product } from "@/lib/catalog";

export function CategoryCard({ category, index = 0 }: { category: Category; index?: number }) {
  return (
    <Reveal
      as="article"
      delay={(index % 3) * 90}
      className="group relative overflow-hidden rounded-[1.5rem] border border-border/40 bg-surface/30 transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 hover:bg-surface/60"
    >
      <Link
        to="/products/$category"
        params={{ category: category.slug }}
        className="block"
        aria-label={`View ${category.name}`}
      >
        <div className="relative overflow-hidden border-b border-border/20 bg-gradient-to-b from-transparent to-muted/10">
          <img
            src={category.image}
            alt={category.alt}
            loading="lazy"
            decoding="async"
            width={900}
            height={700}
            className="aspect-4/3 w-full object-contain p-8 sm:p-10 transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="p-7">
          <h3 className="font-display text-xl text-foreground group-hover:text-accent transition-colors">
            {category.name}
          </h3>
          <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{category.tagline}</p>
          <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
            {category.products.length} product{category.products.length > 1 ? "s" : ""}
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

export function ProductCard({
  product,
  categorySlug,
  categoryName,
  index = 0,
}: {
  product: Product;
  categorySlug: string;
  categoryName?: string;
  index?: number;
}) {
  return (
    <Reveal
      as="article"
      delay={(index % 4) * 80}
      className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-border/40 bg-surface/30 transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 hover:bg-surface/60"
    >
      <Link
        to="/products/$category/$product"
        params={{ category: categorySlug, product: product.slug }}
        className="relative block overflow-hidden border-b border-border/20 bg-gradient-to-b from-transparent to-muted/10"
        tabIndex={-1}
        aria-hidden
      >
        <img
          src={product.image}
          alt={product.alt}
          loading="lazy"
          decoding="async"
          width={800}
          height={800}
          className="aspect-square w-full object-contain p-8 sm:p-12 transition-transform duration-700 group-hover:scale-105"
        />
        {categoryName && (
          <span className="absolute top-5 left-5 rounded-full bg-navy/80 px-3.5 py-1.5 text-[0.65rem] font-semibold tracking-[0.14em] text-accent uppercase backdrop-blur-md border border-accent/20 shadow-soft">
            {categoryName}
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-7">
        <div className="flex flex-wrap items-center gap-1.5">
          {product.connectivity.map((c) => (
            <span
              key={c}
              className="rounded-full border border-accent/30 bg-accent/5 px-2.5 py-0.5 text-[0.65rem] font-semibold tracking-wide text-accent uppercase"
            >
              {c}
            </span>
          ))}
        </div>
        <h3 className="mt-4 font-display text-xl text-foreground">
          <Link
            to="/products/$category/$product"
            params={{ category: categorySlug, product: product.slug }}
            className="transition-colors hover:text-accent"
          >
            {product.name}
          </Link>
        </h3>
        <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
          {product.description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {product.features.slice(0, 4).map((f) => (
            <li
              key={f}
              className="rounded-full bg-surface px-3 py-1 text-[0.7rem] font-medium text-muted-foreground border border-border/50"
            >
              {f}
            </li>
          ))}
        </ul>
        <div className="mt-7 flex flex-wrap items-center gap-3 pt-2">
          <Link
            to="/products/$category/$product"
            params={{ category: categorySlug, product: product.slug }}
            className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-transparent px-5 py-2 text-sm font-medium text-accent transition-all duration-300 hover:border-accent hover:bg-accent/10 active:scale-95"
          >
            View Details
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <a
            href={`https://wa.me/${CONTACT.phoneDisplay.replace(/\D/g, "")}?text=${encodeURIComponent(`Hi Lanwan, I am interested in the ${product.name}.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Enquire about ${product.name}`}
            className="inline-flex items-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-semibold text-muted-foreground transition-colors duration-300 hover:text-foreground hover:bg-surface"
          >
            <WhatsAppIcon className="size-4" />
            Enquire
          </a>
        </div>
      </div>
    </Reveal>
  );
}

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  crumbs,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  crumbs: { label: string; to?: string; params?: Record<string, string> }[];
}) {
  return (
    <section className="pt-32 pb-10 sm:pt-40">
      <div className="container-page">
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground"
        >
          {crumbs.map((c, i) => (
            <span key={c.label} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden>/</span>}
              {c.to ? (
                <Link
                  to={c.to}
                  params={c.params as never}
                  className="transition-colors hover:text-accent"
                >
                  {c.label}
                </Link>
              ) : (
                <span className="text-foreground">{c.label}</span>
              )}
            </span>
          ))}
        </nav>

        <Reveal className="mt-6 max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/8 px-3.5 py-1.5 text-xs font-semibold tracking-[0.18em] text-accent uppercase">
            <span className="size-1.5 rounded-full bg-accent" />
            {eyebrow}
          </span>
          <h1 className="mt-5 text-3xl leading-[1.1] text-foreground sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{subtitle}</p>
          )}
        </Reveal>
      </div>
    </section>
  );
}

export function EnquiryStrip() {
  return (
    <section className="pb-24 lg:pb-32">
      <div className="container-page">
        <Reveal className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-brand p-8 shadow-glow sm:p-10 lg:flex-row lg:items-center">
          <div>
            <h2 className="font-display text-2xl text-primary-foreground sm:text-3xl">
              Not sure which model fits your door?
            </h2>
            <p className="mt-2 max-w-xl text-sm text-primary-foreground/85">
              Send us a photo of your door and our engineers will recommend the right series, finish
              and fitment — free of charge.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-background/95 px-6 py-3.5 text-sm font-semibold text-foreground transition-transform duration-300 hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="size-4" /> WhatsApp Us
            </a>
            <Link
              to="/"
              hash="contact"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Enquiry Form <ArrowRight className="size-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
