import { createFileRoute, notFound } from "@tanstack/react-router";

import { Header } from "@/components/site/header";
import { Footer, FloatingActions } from "@/components/site/sections-bottom";
import { ProductCard, PageHeader, EnquiryStrip } from "@/components/site/product-ui";
import { CATEGORIES, getCategory, type Product } from "@/lib/catalog";
import { Link } from "@tanstack/react-router";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import appLivingRoom from "@/assets/lifestyle/app_living_room.jpg";
import appVillaEntrance from "@/assets/lifestyle/app_villa_entrance.jpg";
import appHotelRoom from "@/assets/lifestyle/app_hotel_room.jpg";
import appModernOffice from "@/assets/lifestyle/app_modern_office.jpg";

// New product-in-space images
import appSmartLockVilla from "@/assets/lifestyle/app_smart_lock_villa.jpg";
import appSmartSwitchLiving from "@/assets/lifestyle/app_smart_switch_living_room.jpg";
import appVideoDoorbell from "@/assets/lifestyle/app_video_doorbell_entrance.jpg";
import appGlassLockOffice from "@/assets/lifestyle/app_glass_lock_office.jpg";

function ApplicationShowcase({ categorySlug }: { categorySlug: string }) {
  let image, title;
  switch (categorySlug) {
    case "smart-door-locks":
      image = appSmartLockVilla;
      title = "Security that belongs to the architecture.";
      break;
    case "smart-switches":
      image = appSmartSwitchLiving;
      title = "Lighting control for premium spaces.";
      break;
    case "video-door-bells":
      image = appVideoDoorbell;
      title = "See who's at the door, beautifully.";
      break;
    case "glass-door-locks":
      image = appGlassLockOffice;
      title = "Secure your modern workspace.";
      break;
    case "smart-curtains":
      image = appHotelRoom;
      title = "Natural light, automated.";
      break;
    case "smart-lighting":
      image = appLivingRoom;
      title = "Cinematic lighting for every mood.";
      break;
    default:
      return null;
  }

  return (
    <section className="pb-12">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[2rem] border border-border/50 bg-card shadow-soft h-[300px] sm:h-[400px]">
          <img src={image} alt={title} className="absolute inset-0 size-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-3.5 py-1.5 text-xs font-semibold tracking-[0.18em] text-white uppercase backdrop-blur-md self-start">
              <span className="size-1.5 rounded-full bg-accent" />
              Application Showcase
            </span>
            <h2 className="mt-4 font-display text-2xl sm:text-4xl text-white max-w-2xl">{title}</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export const Route = createFileRoute("/products/$category/")({
  loader: ({ params }) => {
    const category = getCategory(params.category);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Category not found | Lanwan Automation" },
          { name: "robots", content: "noindex" },
        ],
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
  const displayedProducts = category.products;

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHeader
          eyebrow={`${displayedProducts.length} models`}
          title={category.name}
          subtitle={category.tagline}
          crumbs={[
            { label: "Home", to: "/" },
            { label: "Products", to: "/products" },
            { label: category.name },
          ]}
        />

        <ApplicationShowcase categorySlug={category.slug} />

        <section className="pb-20">
          {(() => {
            const subCategories = Array.from(
              new Set(displayedProducts.map((p: Product) => p.subCategory).filter(Boolean)),
            ) as string[];

            if (subCategories.length > 0) {
              return (
                <Tabs defaultValue={subCategories[0] || ""} className="w-full">
                  <div className="container-page mb-8">
                    <TabsList className="w-full justify-start overflow-x-auto">
                      {subCategories.map((sub) => (
                        <TabsTrigger key={sub} value={sub}>
                          {sub}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </div>
                  {subCategories.map((sub) => (
                    <TabsContent key={sub} value={sub} className="mt-0">
                      <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {displayedProducts
                          .filter((p: Product) => p.subCategory === sub)
                          .map((p: Product, i: number) => (
                            <ProductCard
                              key={p.slug}
                              product={p}
                              categorySlug={category.slug}
                              index={i}
                            />
                          ))}
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              );
            }

            return (
              <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {displayedProducts.map((p: Product, i: number) => (
                  <ProductCard key={p.slug} product={p} categorySlug={category.slug} index={i} />
                ))}
              </div>
            );
          })()}
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
