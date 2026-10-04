import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/header";
import { Footer, FloatingActions } from "@/components/site/sections-bottom";
import { PageHeader } from "@/components/site/product-ui";

export const Route = createFileRoute("/privacy")({
  component: Privacy,
});

function Privacy() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHeader
          eyebrow="Legal"
          title="Privacy Policy"
          crumbs={[{ label: "Home", to: "/" }, { label: "Privacy Policy" }]}
        />
        <section className="pb-24">
          <div className="container-page">
            <div className="prose prose-sm max-w-3xl text-muted-foreground">
              <p>Last updated: {new Date().toLocaleDateString()}</p>
              <h2 className="text-foreground font-display mt-8 mb-4 text-xl">1. Information Collection</h2>
              <p>We only collect information necessary to provide our smart home automation services and fulfill your requests.</p>
              <h2 className="text-foreground font-display mt-8 mb-4 text-xl">2. Use of Information</h2>
              <p>Your information is used to schedule site visits, provide quotes, and deliver our services safely and effectively.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
