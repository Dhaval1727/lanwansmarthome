import { createFileRoute, notFound } from "@tanstack/react-router";
import { Header } from "@/components/site/header";
import { Footer, FloatingActions } from "@/components/site/sections-bottom";
import { ProductCard, PageHeader, EnquiryStrip } from "@/components/site/product-ui";
import { CATEGORIES, getCategory, type Product } from "@/lib/catalog";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/products/$category/")({
  loader: ({ params }) => {
    const category = getCategory(params.category);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Category not found | Lanwan Automation" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.category.name} | Lanwan Automation`;
    const description = loaderData.category.tagline;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: CategoryPage,
  notFoundComponent: CategoryNotFound,
});

function CategoryPage() {
  const { category } = Route.useLoaderData();

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHeader
          eyebrow={`${category.products.length} models`}
          title={category.name}
          subtitle={category.tagline}
          crumbs={[
            { label: "Home", to: "/" },
            { label: "Products", to: "/products" },
            { label: category.name },
          ]}
        />

        <section className="pb-8">
          <div className="container-page flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <Link
                key={c.slug}
                to="/products/$category"
                params={{ category: c.slug }}
                className="rounded-full border border-border bg-card/70 px-4 py-2 text-sm font-semibold text-muted-foreground backdrop-blur-md transition-all duration-300 hover:border-accent/40 hover:text-accent data-[status=active]:border-transparent data-[status=active]:bg-brand data-[status=active]:text-primary-foreground"
              >
                {c.short}
              </Link>
            ))}
          </div>
        </section>

        <section className="pb-20">
          <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {category.products.map((p: Product, i: number) => (
              <ProductCard key={p.slug} product={p} categorySlug={category.slug} index={i} />
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

function CategoryNotFound() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container-page grid min-h-[60vh] place-items-center pt-32 text-center">
        <div>
          <h1 className="font-display text-3xl text-foreground">Category not found</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            That category isn’t part of our catalogue.
          </p>
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
