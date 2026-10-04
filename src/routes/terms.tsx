import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/header";
import { Footer, FloatingActions } from "@/components/site/sections-bottom";
import { PageHeader } from "@/components/site/product-ui";

export const Route = createFileRoute("/terms")({
  component: Terms,
});

function Terms() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHeader
          eyebrow="Legal"
          title="Terms of Service"
          crumbs={[{ label: "Home", to: "/" }, { label: "Terms of Service" }]}
        />
        <section className="pb-24">
          <div className="container-page">
            <div className="prose prose-sm max-w-3xl text-muted-foreground">
              <p>Last updated: {new Date().toLocaleDateString()}</p>
              <h2 className="text-foreground font-display mt-8 mb-4 text-xl">1. Acceptance of Terms</h2>
              <p>By accessing our website and using our smart home services, you agree to these terms.</p>
              <h2 className="text-foreground font-display mt-8 mb-4 text-xl">2. Service Provision</h2>
              <p>We strive to provide accurate quotes and professional installation services as described on our platform.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
