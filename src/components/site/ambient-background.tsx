/**
 * Global ambient smart-home background.
 * Fixed behind all content so it stays in place while the page scrolls.
 * Pure CSS/SVG — no canvas, no JS loop — and it collapses to a static
 * gradient on small screens and for reduced-motion users.
 */
export function AmbientBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background"
    >
      {/* base glow */}
      <div className="absolute inset-0 bg-navy-deep opacity-90" />

      {/* soft light pools */}
      <span className="absolute -top-40 -left-32 size-[38rem] rounded-full bg-primary/12 blur-[120px] motion-safe:md:animate-float" />
      <span
        className="absolute top-1/3 -right-40 size-[34rem] rounded-full bg-accent/10 blur-[130px] motion-safe:md:animate-float"
        style={{ animationDelay: "2.5s" }}
      />
      <span
        className="absolute bottom-0 left-1/3 hidden size-[30rem] rounded-full bg-primary/10 blur-[140px] md:block motion-safe:md:animate-float"
        style={{ animationDelay: "4s" }}
      />

      {/* connected-home grid */}
      <svg
        className="absolute inset-0 size-full opacity-[0.16]"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern id="lw-grid" width="64" height="64" patternUnits="userSpaceOnUse">
            <path
              d="M64 0H0V64"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-accent"
            />
          </pattern>
          <radialGradient id="lw-fade" cx="50%" cy="35%" r="75%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="lw-mask">
            <rect width="100%" height="100%" fill="url(#lw-fade)" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#lw-grid)" mask="url(#lw-mask)" />
      </svg>

      {/* signal pulses — desktop only for performance */}
      <div className="absolute inset-0 hidden lg:block">
        {[
          { top: "22%", left: "12%", delay: "0s" },
          { top: "58%", left: "28%", delay: "1.4s" },
          { top: "34%", left: "72%", delay: "2.2s" },
          { top: "76%", left: "84%", delay: "3.1s" },
        ].map((dot, i) => (
          <span
            key={i}
            className="absolute size-1.5 rounded-full bg-accent/70 motion-safe:animate-pulse-ring"
            style={{ top: dot.top, left: dot.left, animationDelay: dot.delay }}
          />
        ))}
      </div>

      {/* vignette so content always stays readable */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_0%,transparent_20%,var(--background)_100%)] opacity-80" />
    </div>
  );
}
