// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  nitro: {
    // The Netlify site's configured publish directory is "dist/client", but Nitro's
    // built-in "netlify" preset (auto-detected from the Netlify build environment)
    // defaults publicDir to "dist" — so client assets landed one level up from where
    // Netlify's deploy step looks for them, and the deploy failed with
    // "The deploy directory dist/client has not been found."
    output: { publicDir: "dist/client" },
  },
});
