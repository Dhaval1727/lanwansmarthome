import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/header";
import { Footer, FloatingActions } from "@/components/site/sections-bottom";
import { CategoryCard, PageHeader, EnquiryStrip } from "@/components/site/product-ui";
import { CATEGORIES } from "@/lib/catalog";

const title = "Product Catalogue | Lanwan Automation";
const description =
  "Browse the Lanwan Automation catalogue — smart door locks, glass door locks, video door bells, cabinet locks, smart switches, control screens, curtains and lighting.";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProductsIndex,
});

function ProductsIndex() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHeader
          eyebrow="Product Catalogue"
          title="Every category in the Phlipton ecosystem"
          subtitle="Choose a category to see the full range, model by model, with the exact features listed in our catalogue."
          crumbs={[{ label: "Home", to: "/" }, { label: "Products" }]}
        />
        <section className="pb-20">
          <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((c, i) => (
              <CategoryCard key={c.slug} category={c} index={i} />
            ))}
          </div>
        </section>
        <EnquiryStrip />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
