/**
 * Global ambient smart-home background.
 * Fixed behind all content so it stays in place while the page scrolls.
 * Pure CSS/SVG — no canvas, no JS loop — deliberately low-contrast so
 * product imagery, cards and text always stay dominant. Heavier layers are
 * desktop-only and every animation is gated behind motion-safe.
 */
import bgSmartHome from "@/assets/bg-smarthome.jpg";

export function AmbientBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background"
    >
      {/* deep charcoal base */}
      <div className="absolute inset-0 bg-navy-deep" />

      {/* smart-home interior photography — fixed, cover, never repeats or shifts */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-45 md:opacity-55"
        style={{ backgroundImage: `url(${bgSmartHome})` }}
      />
      {/* readability scrim over the photo */}
      <div className="absolute inset-0 bg-background/55" />

      {/* warm overhead light pool — the "room lighting" cue */}
      <div className="absolute inset-0 bg-[radial-gradient(90%_60%_at_50%_-10%,color-mix(in_oklab,var(--accent)_16%,transparent),transparent_70%)]" />

      {/* soft bronze pools, very low opacity */}
      <span className="absolute -top-48 -left-40 size-[42rem] rounded-full bg-primary/8 blur-[150px] motion-safe:md:animate-float" />
      <span
        className="absolute top-1/2 -right-48 size-[38rem] rounded-full bg-accent/7 blur-[160px] motion-safe:md:animate-float"
        style={{ animationDelay: "3s" }}
      />
      <span
        className="absolute bottom-[-10rem] left-1/4 hidden size-[34rem] rounded-full bg-primary/7 blur-[170px] md:block motion-safe:md:animate-float"
        style={{ animationDelay: "5s" }}
      />

      {/* smart-home schematic: fine grid + connected nodes, masked to fade out */}
      <svg
        className="absolute inset-0 size-full opacity-[0.09]"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="lw-grid" width="88" height="88" patternUnits="userSpaceOnUse">
            <path
              d="M88 0H0V88"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-accent"
            />
          </pattern>
          <radialGradient id="lw-fade" cx="50%" cy="30%" r="80%">
            <stop offset="0%" stopColor="white" stopOpacity="0.9" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="lw-mask">
            <rect width="100%" height="100%" fill="url(#lw-fade)" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#lw-grid)" mask="url(#lw-mask)" />
      </svg>

      {/* connection traces — desktop only, extremely faint */}
      <svg
        className="absolute inset-0 hidden size-full opacity-[0.10] lg:block"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <g stroke="currentColor" strokeWidth="1" className="text-accent">
          <path d="M120 200H420V420H700" />
          <path d="M1320 260H1020V520H760" />
          <path d="M240 700H560V560" />
          <path d="M1180 720H900V600" />
        </g>
        <g fill="currentColor" className="text-accent">
          {[
            [120, 200],
            [420, 420],
            [700, 420],
            [1020, 260],
            [760, 520],
            [560, 560],
            [900, 600],
          ].map(([cx, cy]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3" />
          ))}
        </g>
      </svg>

      {/* signal pulses — desktop only for performance */}
      <div className="absolute inset-0 hidden lg:block">
        {[
          { top: "22%", left: "8%", delay: "0s" },
          { top: "62%", left: "39%", delay: "1.6s" },
          { top: "29%", left: "71%", delay: "2.4s" },
          { top: "67%", left: "62%", delay: "3.4s" },
        ].map((dot, i) => (
          <span
            key={i}
            className="absolute size-1 rounded-full bg-accent/50 motion-safe:animate-pulse-ring"
            style={{ top: dot.top, left: dot.left, animationDelay: dot.delay }}
          />
        ))}
      </div>

      {/* fine grain so gradients never band */}
      <div className="absolute inset-0 opacity-[0.035] mix-blend-overlay [background-image:radial-gradient(currentColor_0.5px,transparent_0.5px)] [background-size:3px_3px] text-foreground" />

      {/* vignette so content always stays readable */}
      <div className="absolute inset-0 bg-[radial-gradient(130%_100%_at_50%_0%,transparent_25%,var(--background)_100%)] opacity-85" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-linear-to-b from-transparent to-background" />
    </div>
  );
}
