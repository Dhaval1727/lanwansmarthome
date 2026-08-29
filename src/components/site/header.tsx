import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Moon, Sun, PhoneCall, ChevronRight } from "lucide-react";
import { CONTACT, NAV } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import logoImg from "@/assets/logo.png";

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
  const [scrolled, setScrolled] = useState(true);
  const [open, setOpen] = useState(false);
  const [expandedNav, setExpandedNav] = useState<string | null>(null);
  const { dark, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("home");
      if (!hero) {
        setScrolled(true);
        return;
      }
      const heroBottom = hero.getBoundingClientRect().bottom;
      // Solid header unless we are still over the dark hero near the top.
      setScrolled(!(heroBottom > 160 && window.scrollY <= 24));
    };
    onScroll();
    const raf = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("load", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("load", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-border/70 bg-background/85 backdrop-blur-xl shadow-soft"
            : "bg-linear-to-b from-navy-deep/75 via-navy-deep/35 to-transparent",
        )}
      >
        <div className="container-page flex h-18 items-center justify-between gap-6 py-3">
          <Link to="/" hash="home" className="flex items-center gap-2.5" aria-label={CONTACT.brand}>
            <img src={logoImg} alt={CONTACT.brand} className="h-10 w-auto object-contain" />
          </Link>

          <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Primary">
            {NAV.map((item) =>
              item.subItems ? (
                <div key={item.label} className="group relative">
                  <Link
                    to={item.to!}
                    className={cn(
                      "rounded-full px-3 py-2 text-sm font-medium transition-colors inline-flex items-center gap-1",
                      scrolled
                        ? "text-foreground/80 hover:bg-secondary hover:text-accent"
                        : "text-navy-foreground/80 hover:bg-navy-foreground/10 hover:text-navy-foreground",
                    )}
                  >
                    {item.label}
                  </Link>
                  {/* Invisible padding area to keep hover state active when moving mouse down */}
                  <div className="absolute left-1/2 top-full -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-[240px] z-[100]">
                    <div className="rounded-xl border border-accent/10 bg-background/95 backdrop-blur-md p-2 shadow-xl ring-1 ring-black/5 dark:bg-zinc-950/95 dark:ring-white/10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 ease-out">
                      <div className="flex flex-col gap-1">
                        {item.subItems.map((sub) => (
                          <Link
                            key={sub.label}
                            to={sub.to}
                            params={sub.params as never}
                            className="group/link flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-accent/5 dark:hover:bg-white/5"
                          >
                            <span className="text-sm font-medium text-foreground/80 transition-colors group-hover/link:text-foreground">
                              {sub.label}
                            </span>
                            <ChevronRight className="size-4 shrink-0 text-foreground/30 transition-all group-hover/link:text-accent group-hover/link:translate-x-0.5" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.to!}
                  params={item.params as never}
                  {...(item.hash ? { hash: item.hash } : {})}
                  className={cn(
                    "rounded-full px-3 py-2 text-sm font-medium transition-colors",
                    scrolled
                      ? "text-foreground/80 hover:bg-secondary hover:text-accent"
                      : "text-navy-foreground/80 hover:bg-navy-foreground/10 hover:text-navy-foreground",
                  )}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              aria-label="Toggle dark mode"
              className={cn(
                "grid size-10 place-items-center rounded-full border transition-colors",
                scrolled
                  ? "border-border text-foreground/80 hover:border-primary/40 hover:text-accent"
                  : "border-navy-foreground/25 text-navy-foreground/85 hover:border-accent/60 hover:text-accent",
              )}
            >
              {dark ? <Sun className="size-4.5" /> : <Moon className="size-4.5" />}
            </button>
            <a
              href={CONTACT.phoneHref}
              className={cn(
                "hidden size-10 place-items-center rounded-full border transition-colors sm:grid",
                scrolled
                  ? "border-border text-foreground/80 hover:border-primary/40 hover:text-accent"
                  : "border-navy-foreground/25 text-navy-foreground/85 hover:border-accent/60 hover:text-accent",
              )}
              aria-label={`Call ${CONTACT.phoneDisplay}`}
            >
              <PhoneCall className="size-4.5" />
            </a>
            <Link
              to="/"
              hash="contact"
              className="hidden rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform duration-300 hover:-translate-y-0.5 lg:inline-flex"
            >
              Get Free Consultation
            </Link>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className={cn(
                "grid size-10 place-items-center rounded-full border xl:hidden",
                scrolled
                  ? "border-border text-foreground"
                  : "border-navy-foreground/25 text-navy-foreground",
              )}
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer overlay backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-[90] bg-black/40 backdrop-blur-sm transition-opacity duration-300 xl:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile drawer panel */}
      <div
        className={cn(
          "fixed inset-x-0 top-0 z-[100] flex max-h-[100dvh] flex-col bg-navy-deep shadow-2xl transition-all duration-300 ease-out xl:hidden",
          open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-full opacity-0",
        )}
      >
        <div className="flex h-16 shrink-0 items-center justify-between px-6 py-3">
          <img src={logoImg} alt={CONTACT.brand} className="h-8 w-auto object-contain" />
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="grid size-9 place-items-center rounded-full border border-navy-foreground/20 text-navy-foreground transition-colors hover:bg-navy-foreground/10"
          >
            <X className="size-5" />
          </button>
        </div>

        <div className="overflow-y-auto overscroll-contain px-6 pb-8">
          <nav className="flex flex-col mt-2 gap-1" aria-label="Mobile">
            {NAV.map((item) =>
              item.subItems ? (
                <div key={item.label} className="mt-1 mb-1">
                  <button
                    onClick={() =>
                      setExpandedNav((prev) => (prev === item.label ? null : item.label))
                    }
                    className="flex w-full items-center justify-between border-b border-navy-foreground/10 px-2 py-3 font-display text-lg text-navy-foreground transition-colors hover:text-accent"
                  >
                    <span>{item.label}</span>
                    <span className="text-2xl font-light leading-none">
                      {expandedNav === item.label ? "−" : "+"}
                    </span>
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-300 ease-in-out",
                      expandedNav === item.label
                        ? "grid-rows-[1fr] opacity-100 mt-3"
                        : "grid-rows-[0fr] opacity-0 mt-0",
                    )}
                  >
                    <div className="overflow-hidden flex flex-col gap-2">
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.label}
                          to={sub.to}
                          params={sub.params as never}
                          onClick={() => setOpen(false)}
                          className="flex items-center justify-between rounded-lg bg-navy-foreground/5 px-4 py-3 transition-colors hover:bg-navy-foreground/10"
                        >
                          <span className="text-sm font-medium text-navy-foreground">
                            {sub.label}
                          </span>
                          <ChevronRight className="size-4 shrink-0 text-navy-foreground/40" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.to!}
                  params={item.params as never}
                  {...(item.hash ? { hash: item.hash } : {})}
                  onClick={() => setOpen(false)}
                  className="border-b border-navy-foreground/10 px-2 py-3 font-display text-lg text-navy-foreground transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              ),
            )}
            <Link
              to="/"
              hash="contact"
              onClick={() => setOpen(false)}
              className="mt-6 flex w-full items-center justify-center rounded-full bg-brand px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-glow transition-transform active:scale-95"
            >
              Get Free Consultation
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
