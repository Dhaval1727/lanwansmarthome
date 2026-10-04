import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Check, ArrowRight, Phone } from "lucide-react";
import { Header } from "@/components/site/header";
import { Footer, FloatingActions } from "@/components/site/sections-bottom";
import { ProductCard, PageHeader } from "@/components/site/product-ui";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { Reveal } from "@/components/site/primitives";
import { getProduct, type Product } from "@/lib/catalog";
import { CONTACT } from "@/lib/site-data";

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

  const imagesToDisplay = (product as any).gallery || [product.image];

  const whatsappText = `Hi Lanwan, I am interested in the ${product.name} (${category.name}).`;
  const whatsappNumber = CONTACT.phoneDisplay.replace(/\D/g, "");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`;

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
            <div className="flex flex-col gap-6">
              {imagesToDisplay.map((img: string, idx: number) => (
                <Reveal key={idx} className="product-stage overflow-hidden rounded-[2rem] border border-border shadow-lift bg-white">
                  <img
                    src={img}
                    alt={product.alt}
                    width={1000}
                    height={1000}
                    className="aspect-square w-full object-contain p-8"
                  />
                </Reveal>
              ))}
            </div>

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

              <h2 className="mt-9 font-display text-lg text-foreground">Specifications & Features</h2>
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
              
              <div className="mt-6 grid gap-4 sm:grid-cols-2 border-t border-border/50 pt-6">
                <div>
                  <h3 className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">Connectivity</h3>
                  <p className="mt-1 text-sm font-medium text-foreground">{product.connectivity.join(", ")}</p>
                </div>
                <div>
                  <h3 className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">Installation</h3>
                  <p className="mt-1 text-sm font-medium text-foreground">By Certified Engineers</p>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <WhatsAppIcon className="size-4" /> Enquire on WhatsApp
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
