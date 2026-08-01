import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/header";
import {
  Hero,
  About,
  Products,
  Solutions,
  WhyUs,
  Process,
  Brands,
} from "@/components/site/sections-top";
import {
  Stats,
  Gallery,
  Testimonials,
  Faqs,
  Blog,
  Contact,
  Footer,
  FloatingActions,
} from "@/components/site/sections-bottom";
import { CONTACT, FAQS } from "@/lib/site-data";

const title = "NexHome Automation | Premium Smart Home Solutions & Installation";
const description =
  "Smart locks, switches, cameras, video door phones, lighting and curtains — designed and installed by certified engineers. Book a free consultation today.";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      name: CONTACT.brand,
      description,
      telephone: CONTACT.phoneDisplay,
      email: CONTACT.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: "No. 42, Prestige Tech Park Road, Whitefield",
        addressLocality: "Bengaluru",
        postalCode: "560066",
        addressCountry: "IN",
      },
      openingHours: "Mo-Sa 09:30-19:30",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "380",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Solutions />
        <WhyUs />
        <Process />
        <Brands />
        <Stats />
        <Gallery />
        <Testimonials />
        <Faqs />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
