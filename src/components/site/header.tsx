import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun, PhoneCall } from "lucide-react";
import { CONTACT, NAV } from "@/lib/site-data";
import { cn } from "@/lib/utils";

function useTheme() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("nexhome-theme");
    const isDark = stored === "dark";
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggle = () => {
    setDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      window.localStorage.setItem("nexhome-theme", next ? "dark" : "light");
      return next;
    });
  };

  return { dark, toggle };
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { dark, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/70 bg-background/85 backdrop-blur-xl shadow-soft"
          : "bg-transparent",
      )}
    >
      <div className="container-page flex h-18 items-center justify-between gap-6 py-3">
        <a href="#home" className="flex items-center gap-2.5" aria-label={CONTACT.brand}>
          <span className="relative grid size-9 place-items-center rounded-xl bg-brand shadow-glow">
            <span className="size-3.5 rounded-[5px] border-2 border-primary-foreground" />
          </span>
          <span className="font-display text-lg leading-none tracking-tight text-navy">
            Nex<span className="text-gradient">Home</span>
            <span className="mt-1 block text-[0.6rem] font-medium tracking-[0.28em] text-muted-foreground uppercase">
              Automation
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle dark mode"
            className="grid size-10 place-items-center rounded-full border border-border text-foreground/80 transition-colors hover:border-primary/40 hover:text-primary"
          >
            {dark ? <Sun className="size-4.5" /> : <Moon className="size-4.5" />}
          </button>
          <a
            href={CONTACT.phoneHref}
            className="hidden size-10 place-items-center rounded-full border border-border text-foreground/80 transition-colors hover:border-primary/40 hover:text-primary sm:grid"
            aria-label={`Call ${CONTACT.phoneDisplay}`}
          >
            <PhoneCall className="size-4.5" />
          </a>
          <a
            href="#contact"
            className="hidden rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform duration-300 hover:-translate-y-0.5 lg:inline-flex"
          >
            Get Free Consultation
          </a>
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="grid size-10 place-items-center rounded-full border border-border text-foreground xl:hidden"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-navy-deep transition-opacity duration-300 xl:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="container-page flex h-18 items-center justify-between py-3">
          <span className="font-display text-lg text-navy-foreground">NexHome</span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="grid size-10 place-items-center rounded-full border border-navy-foreground/20 text-navy-foreground"
          >
            <X className="size-5" />
          </button>
        </div>
        <nav className="container-page mt-6 grid gap-1" aria-label="Mobile">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-navy-foreground/10 py-3.5 font-display text-xl text-navy-foreground transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-6 rounded-full bg-brand px-6 py-3.5 text-center text-sm font-semibold text-primary-foreground"
          >
            Get Free Consultation
          </a>
        </nav>
      </div>
    </header>
  );
}
