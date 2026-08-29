import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Check, ArrowRight, MessageCircle, Phone } from "lucide-react";
import { Header } from "@/components/site/header";
import { Footer, FloatingActions } from "@/components/site/sections-bottom";
import { ProductCard, PageHeader } from "@/components/site/product-ui";
import { Reveal } from "@/components/site/primitives";
import { getProduct, type Product } from "@/lib/catalog";
import { CONTACT } from "@/lib/site-data";

import install10 from "@/assets/MUTIFUCATION SCREEN/10 Smart Home Control Panel.png";
import install8 from "@/assets/MUTIFUCATION SCREEN/8 Smart Room Control Panel.png";
import install4 from "@/assets/MUTIFUCATION SCREEN/4 Smart Scene Control Panel.png";

import homeB1Lock2 from "@/assets/LOCK/Home B1 LOCK -2.png";
import homeB2Pricelist from "@/assets/LOCK/Home B2 WITH BRAND-PRICELSIT.png";
import homeB2Brand from "@/assets/LOCK/Home B2 WITH BRAND.png";
import homeDoorBell from "@/assets/LOCK/Home DOOR BELL.png";
import homeFingerprint from "@/assets/LOCK/HOME FINGERPRINT LOCK.png";
import homeGlassDoor from "@/assets/LOCK/HOME GLASS DOOR LOCK.png";
import homeNewS1Pro from "@/assets/LOCK/Home NEW S1 PRO.png";
import homeNfcCabinets from "@/assets/LOCK/Home NFC CABINETS LOCK.png";
import homeSVL from "@/assets/LOCK/Home S - VL.png";
import homeSeries3Pro from "@/assets/LOCK/Home SERIES - 3 PRO - WIFI - BRAND.png";
import homeSeries4 from "@/assets/LOCK/Home SERIES - 4.png";
import homeSeries6 from "@/assets/LOCK/Home SERIES - 6.png";

export const Route = createFileRoute("/products/$category/$product")({
  loader: ({ params }) => {
    const hit = getProduct(params.category, params.product);
    if (!hit) throw notFound();
    return hit;
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Product not found | Lanwan Automation" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const title = `${loaderData.product.name} — ${loaderData.category.name} | Lanwan Automation`;
    const description = loaderData.product.description;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "product" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProductDetail,
  notFoundComponent: ProductNotFound,
});

function ProductDetail() {
  const { category, product } = Route.useLoaderData();
  const related: Product[] = category.products
    .filter((p: Product) => p.slug !== product.slug)
    .slice(0, 4);

  let displayImage = product.image;
  if (category.slug === "control-screen") {
    if (product.slug.includes("10-inch")) displayImage = install10;
    else if (product.slug.includes("8-inch")) displayImage = install8;
    else if (product.slug.includes("4-inch")) displayImage = install4;
  } else if (category.slug === "smart-locks") {
    if (product.slug === "b1-lock-2") displayImage = homeB1Lock2;
    else if (product.slug === "b2-with-brand-pricelsit") displayImage = homeB2Pricelist;
    else if (product.slug === "b2-with-brand") displayImage = homeB2Brand;
    else if (product.slug === "door-bell-n") displayImage = homeDoorBell;
    else if (product.slug === "fingerprint-lock") displayImage = homeFingerprint;
    else if (product.slug === "glass-door-lock") displayImage = homeGlassDoor;
    else if (product.slug === "new-s1-pro") displayImage = homeNewS1Pro;
    else if (product.slug === "nfc-cabinets-lock") displayImage = homeNfcCabinets;
    else if (product.slug === "s-vl") displayImage = homeSVL;
    else if (product.slug === "series-3-pro-wifi-brand") displayImage = homeSeries3Pro;
    else if (product.slug === "series-4") displayImage = homeSeries4;
    else if (product.slug === "series-6") displayImage = homeSeries6;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHeader
          eyebrow={category.name}
          title={product.name}
          crumbs={[
            { label: "Home", to: "/" },
            { label: "Products", to: "/products" },
            {
              label: category.short,
              to: "/products/$category",
              params: { category: category.slug },
            },
            { label: product.name },
          ]}
        />

        <section className="pb-20">
          <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal className="product-stage overflow-hidden rounded-[2rem] border border-border shadow-lift bg-white">
              <img
                src={displayImage}
                alt={product.alt}
                width={1000}
                height={1000}
                className="aspect-square w-full object-contain p-8"
              />
            </Reveal>

            <Reveal delay={120}>
              <div className="flex flex-wrap gap-2">
                {product.connectivity.map((c: string) => (
                  <span
                    key={c}
                    className="rounded-full border border-accent/25 bg-accent/8 px-3 py-1 text-xs font-semibold tracking-wide text-accent uppercase"
                  >
                    {c}
                  </span>
                ))}
              </div>

              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                {product.description}
              </p>

              <h2 className="mt-9 font-display text-lg text-foreground">Key features</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {product.features.map((f: string) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-foreground">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary/12 text-accent">
                      <Check className="size-3" strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={CONTACT.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <MessageCircle className="size-4" /> Enquire on WhatsApp
                </a>
                <a
                  href={CONTACT.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-accent/50 hover:text-accent"
                >
                  <Phone className="size-4" /> {CONTACT.phoneDisplay}
                </a>
                <Link
                  to="/"
                  hash="contact"
                  className="inline-flex items-center gap-2 rounded-full px-4 py-3.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-accent"
                >
                  Enquiry form <ArrowRight className="size-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {related.length > 0 && (
          <section className="pb-24 lg:pb-32">
            <div className="container-page">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <h2 className="font-display text-2xl text-foreground sm:text-3xl">
                  More from {category.name}
                </h2>
                <Link
                  to="/products/$category"
                  params={{ category: category.slug }}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent"
                >
                  View all <ArrowRight className="size-4" />
                </Link>
              </div>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {related.map((p: Product, i: number) => (
                  <ProductCard key={p.slug} product={p} categorySlug={category.slug} index={i} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

function ProductNotFound() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container-page grid min-h-[60vh] place-items-center pt-32 text-center">
        <div>
          <h1 className="font-display text-3xl text-foreground">Product not found</h1>
          <p className="mt-3 text-sm text-muted-foreground">This model isn’t in our catalogue.</p>
          <Link
            to="/products"
            className="mt-6 inline-flex rounded-full bg-brand px-6 py-3 text-sm font-semibold text-primary-foreground"
          >
            Browse all products
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
