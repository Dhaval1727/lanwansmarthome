// Product catalogue — sourced from the Lanwan Automation (Phlipton) catalogue.
// Images are cropped directly from the catalogue pages.

import s1Pro from "@/assets/catalog/s1-pro.jpg";
import s1ProG from "@/assets/catalog/s1-pro-g.jpg";
import series2 from "@/assets/catalog/series-2.jpg";
import series2Pro from "@/assets/catalog/series-2-pro.jpg";
import series3 from "@/assets/catalog/series-3.jpg";
import series3Pro from "@/assets/catalog/series-3-pro.jpg";
import series3ProAi from "@/assets/catalog/series-3-pro-ai.jpg";
import series3ProSlim from "@/assets/catalog/series-3-pro-slim.jpg";
import series4 from "@/assets/catalog/series-4.jpg";
import series4ProAi from "@/assets/catalog/series-4-pro-ai.jpg";
import series6 from "@/assets/catalog/series-6.jpg";
import seriesV1 from "@/assets/catalog/series-v1.jpg";
import seriesAl1 from "@/assets/catalog/series-al-1.jpg";
import seriesB1 from "@/assets/catalog/series-b1.jpg";
import seriesR1 from "@/assets/catalog/series-r1.jpg";
import seriesH1 from "@/assets/catalog/series-h1.jpg";
import seriesG0 from "@/assets/catalog/series-g0.jpg";
import seriesG1 from "@/assets/catalog/series-g1.jpg";
import cabinetWd1 from "@/assets/catalog/cabinet-wd1.jpg";
import cabinetWd2 from "@/assets/catalog/cabinet-wd2.jpg";
import doorbellWifi from "@/assets/catalog/wifi-video-doorbell.jpg";
import vdp7 from "@/assets/catalog/vdp-7-touch.jpg";
import vdp4Wire from "@/assets/catalog/vdp-4-wire.jpg";
import titanSwitch from "@/assets/catalog/titan-switch.jpg";
import luxeraySwitch from "@/assets/catalog/luxeray-switch.jpg";
import smartKnob from "@/assets/catalog/smart-knob.jpg";
import controlScreen from "@/assets/catalog/multifunctional-screen.jpg";
import smartCurtains from "@/assets/catalog/smart-curtains.jpg";
import smartLights from "@/assets/catalog/smart-lights.jpg";

export type Product = {
  slug: string;
  name: string;
  image: string;
  alt: string;
  connectivity: string[];
  description: string;
  features: string[];
};

export type Category = {
  slug: string;
  name: string;
  short: string;
  tagline: string;
  image: string;
  alt: string;
  products: Product[];
};

const lockMethods = {
  base: ["Fingerprint", "Password", "Card", "Key", "Battery"],
};

export const CATEGORIES: Category[] = [
  {
    slug: "smart-door-locks",
    name: "Smart Door Locks",
    short: "Smart Locks",
    tagline:
      "Unlock the future — where your door knows you before you reach for the handle.",
    image: series4,
    alt: "Phlipton Series 4 smart door lock with camera display panel",
    products: [
      {
        slug: "series-1-pro",
        name: "Series 1 Pro",
        image: s1Pro,
        alt: "Series 1 Pro smart door lock with lever handle and touch keypad",
        connectivity: ["Zigbee", "Wi-Fi"],
        description:
          "A slim lever-handle smart lock with a hidden touch keypad — the everyday entry lock of the Phlipton range, direct-controlled over Zigbee.",
        features: [...lockMethods.base, "Application", "Lock Bind", "RX-TX Remote"],
      },
      {
        slug: "series-1-pro-g",
        name: "Series 1 Pro-G",
        image: s1ProG,
        alt: "Series 1 Pro-G smart door lock in bronze gold finish with lever handle",
        connectivity: ["Zigbee", "Wi-Fi"],
        description:
          "The Series 1 Pro in a warm bronze-gold finish, for doors where the hardware is part of the interior design.",
        features: [...lockMethods.base, "Application", "Lock Bind", "RX-TX Remote"],
      },
      {
        slug: "series-2",
        name: "Series 2",
        image: series2,
        alt: "Series 2 push-pull smart door lock, front and side view",
        connectivity: ["Zigbee", "Wi-Fi"],
        description:
          "A full-length push-pull escutcheon lock with a concealed keypad and mechanical key override for main doors.",
        features: lockMethods.base,
      },
      {
        slug: "series-2-pro",
        name: "Series 2 Pro",
        image: series2Pro,
        alt: "Series 2 Pro smart door lock with built-in video display panel",
        connectivity: ["Wi-Fi Active"],
        description:
          "Series 2 with a built-in display and camera — see the visitor at your door before you open it.",
        features: [
          ...lockMethods.base,
          "Application",
          "Palm",
          "Face",
          "Lock Bind",
          "RX-TX Remote",
        ],
      },
      {
        slug: "series-3",
        name: "Series 3",
        image: series3,
        alt: "Series 3 smart door lock, front and rear escutcheon",
        connectivity: ["Zigbee", "Wi-Fi"],
        description:
          "A robust push-pull lock with an automatic mortise and a clean, iconless front panel that wakes on touch.",
        features: [...lockMethods.base, "Application", "Lock Bind", "RX-TX Remote"],
      },
      {
        slug: "series-3-pro",
        name: "Series 3 Pro",
        image: series3Pro,
        alt: "Series 3 Pro smart door lock with visitor video screen and keypad",
        connectivity: ["Zigbee", "Wi-Fi"],
        description:
          "Face and palm recognition with an integrated visitor screen, peephole camera and full app control.",
        features: [
          ...lockMethods.base,
          "Face",
          "Palm",
          "Application",
          "Lock Bind",
          "RX-TX Remote",
        ],
      },
      {
        slug: "series-3-pro-ai",
        name: "Series 3 Pro AI",
        image: series3ProAi,
        alt: "Series 3 Pro AI smart door lock with AI voice and camera display",
        connectivity: ["Wi-Fi"],
        description:
          "The Series 3 Pro with on-device AI voice — announcements, visitor messages and hands-free interaction at the door.",
        features: [
          ...lockMethods.base,
          "Face",
          "Palm",
          "AI Voice",
          "Application",
          "Lock Bind",
          "RX-TX Remote",
        ],
      },
      {
        slug: "series-3-pro-slim",
        name: "Series 3 Pro Slim",
        image: series3ProSlim,
        alt: "Series 3 Pro Slim smart door lock with narrow body and video screen",
        connectivity: ["Wi-Fi Active"],
        description:
          "A narrow-body version of the Series 3 Pro engineered for slim profile and glass-inset doors.",
        features: [
          ...lockMethods.base,
          "Face",
          "Palm",
          "Application",
          "Lock Bind",
          "RX-TX Remote",
        ],
      },
      {
        slug: "series-4",
        name: "Series 4",
        image: series4,
        alt: "Series 4 smart door lock with wide colour display and sculpted handle",
        connectivity: ["Wi-Fi Active"],
        description:
          "A statement lock with a wide colour display, sculpted push-pull body and the complete unlock method set.",
        features: [
          ...lockMethods.base,
          "Face",
          "Palm",
          "Application",
          "Lock Bind",
          "RX-TX Remote",
        ],
      },
      {
        slug: "series-4-pro-ai",
        name: "Series 4 Pro AI",
        image: series4ProAi,
        alt: "Series 4 Pro AI smart door lock with visitor screen and gesture panel",
        connectivity: ["Wi-Fi Active"],
        description:
          "Flagship AI lock — face recognition, palm unlock and an always-ready visitor screen on both sides of the door.",
        features: [
          ...lockMethods.base,
          "Face",
          "Palm",
          "Application",
          "Lock Bind",
        ],
      },
      {
        slug: "series-6",
        name: "Series 6",
        image: series6,
        alt: "Series 6 luxury smart door lock with chrome sculpted body and video screen",
        connectivity: ["Wi-Fi Active"],
        description:
          "A luxury sculpted escutcheon in polished metal with a visitor screen — built for signature main doors.",
        features: [
          ...lockMethods.base,
          "Face",
          "Palm",
          "Application",
          "Lock Bind",
          "RX-TX Remote",
        ],
      },
      {
        slug: "series-v1",
        name: "Series V1",
        image: seriesV1,
        alt: "Series V1 vertical bar smart door lock with slim visitor screen",
        connectivity: ["Wi-Fi Active"],
        description:
          "A vertical full-height handle lock that reads as architectural hardware, with the intelligence hidden inside.",
        features: [
          ...lockMethods.base,
          "Face",
          "Palm",
          "Application",
          "Lock Bind",
          "RX-TX Remote",
        ],
      },
      {
        slug: "series-al-1",
        name: "Series AL 1",
        image: seriesAl1,
        alt: "Series AL 1 slim aluminium smart lock with lever handles",
        connectivity: ["Bluetooth"],
        description:
          "A slim aluminium narrow-stile lock for aluminium and sliding doors, paired over Bluetooth from the app.",
        features: ["Fingerprint", "Password", "Card", "Application", "Key", "Battery"],
      },
      {
        slug: "series-b1",
        name: "Series B1",
        image: seriesB1,
        alt: "Series B1 cylinder smart lock with fingerprint and keypad head",
        connectivity: ["Bluetooth"],
        description:
          "A smart cylinder that replaces the existing lock barrel — upgrade a door to fingerprint access without changing the door.",
        features: ["Fingerprint", "Password", "Card", "Application", "Key", "Battery"],
      },
      {
        slug: "series-r1",
        name: "Series R1 / R1D",
        image: seriesR1,
        alt: "Series R1 and R1D rim locks with keypad and fingerprint reader",
        connectivity: ["Wi-Fi Active"],
        description:
          "Rim-mounted smart locks for wooden and metal doors, with a matching deadbolt variant for secondary entrances.",
        features: [
          "Fingerprint",
          "Password",
          "Card",
          "Key",
          "Application",
          "RX-TX Remote",
          "Battery",
        ],
      },
      {
        slug: "series-h1",
        name: "Series H1",
        image: seriesH1,
        alt: "Series H1 smart lever handle with illuminated fingerprint ring",
        connectivity: ["Bluetooth"],
        description:
          "A smart lever handle with an illuminated fingerprint ring and inline keypad — ideal for internal and room doors.",
        features: ["Fingerprint", "Password", "Card", "Application", "Key", "Battery"],
      },
    ],
  },
  {
    slug: "glass-door-locks",
    name: "Glass Door Locks",
    short: "Glass Door Locks",
    tagline: "Frameless access control for glass office, balcony and shopfront doors.",
    image: seriesG1,
    alt: "Series G1 glass door smart lock with RGB fingerprint ring",
    products: [
      {
        slug: "series-g0",
        name: "Series G0",
        image: seriesG0,
        alt: "Series G0 glass door lock with display, keypad and fingerprint ring",
        connectivity: ["Bluetooth"],
        description:
          "A clamp-on glass door lock with a status display and fingerprint ring — no drilling into the glass.",
        features: [
          "Fingerprint",
          "Password",
          "Card",
          "Key",
          "Application",
          "RX-TX Remote",
          "Battery",
        ],
      },
      {
        slug: "series-g1",
        name: "Series G1",
        image: seriesG1,
        alt: "Series G1 Wi-Fi glass door lock with touch keypad and RGB ring",
        connectivity: ["Wi-Fi"],
        description:
          "Wi-Fi glass door lock with a full touch keypad and RGB fingerprint ring, managed remotely from the app.",
        features: [
          "Fingerprint",
          "Password",
          "Card",
          "Key",
          "Application",
          "RX-TX Remote",
          "Battery",
        ],
      },
    ],
  },
  {
    slug: "video-door-bells",
    name: "Video Door Bells & VDP",
    short: "Doorbells",
    tagline:
      "Stay connected to your door, wherever you are — crystal-clear video, real-time talk and instant alerts.",
    image: doorbellWifi,
    alt: "Wi-Fi video doorbell with camera and illuminated call ring",
    products: [
      {
        slug: "wifi-video-doorbell",
        name: "WiFi Video Doorbell",
        image: doorbellWifi,
        alt: "Wi-Fi video doorbell with indoor chime unit",
        connectivity: ["Wi-Fi"],
        description:
          "Hybrid-powered 1080P doorbell with AI human detection, two-way audio and a plug-in indoor chime.",
        features: [
          "Hybrid Power (Wired + Battery) with 1080P Camera",
          "App Control + 2-Way Audio & Remote Unlock",
          "PIR + AI Human Detection Alerts",
          "Night Vision with Cloud & SD Storage (128GB)",
          "Indoor Chime + Type-C Charging + IP65 Design",
        ],
      },
      {
        slug: "7-inch-touch-wifi-vdp",
        name: '7" Touch WiFi VDP',
        image: vdp7,
        alt: "7 inch touch Wi-Fi video door phone indoor monitor with outdoor station",
        connectivity: ["Wi-Fi"],
        description:
          "A 7-inch touch indoor monitor paired with an IP65 outdoor station for intercom, recording and remote unlock.",
        features: [
          '7" Touch Display + 2MP Wide-Angle Camera',
          "App Control with Two-Way Intercom",
          "Remote Unlock + Motion Alerts & Recording",
          "Night Vision + IP65 Outdoor Unit",
          "Multi-Device Support",
        ],
      },
      {
        slug: "basic-4-wire-analog-vdp",
        name: "Basic 4 Wire Analog VDP",
        image: vdp4Wire,
        alt: "Basic 4-wire analog video door phone with 7 inch monitor",
        connectivity: ["4-Wire"],
        description:
          "A dependable wired video intercom that works entirely offline — ideal where internet access is not available.",
        features: [
          '2-Way Video Intercom with 7" Display',
          "4-Wire System (No Internet Required)",
          "Night Vision + Weatherproof Outdoor Unit",
          "One-Touch Unlock (12V) + 100m Range",
          "Multi-Monitor Support + Easy Install",
        ],
      },
    ],
  },
  {
    slug: "cabinet-locks",
    name: "Cabinet Locks",
    short: "Cabinet Locks",
    tagline: "Concealed fingerprint and RFID locks for drawers, wardrobes and lockers.",
    image: cabinetWd1,
    alt: "WD1 cabinet lock with fingerprint module",
    products: [
      {
        slug: "wd1",
        name: "WD1 Cabinet Lock",
        image: cabinetWd1,
        alt: "WD1 fingerprint cabinet lock body and fingerprint module",
        connectivity: ["Fingerprint"],
        description:
          "A hidden fingerprint cabinet lock that mounts inside the door — nothing visible from the outside.",
        features: ["Fingerprint", "Battery"],
      },
      {
        slug: "wd2",
        name: "WD2 Cabinet Lock",
        image: cabinetWd2,
        alt: "WD2 RFID and NFC card cabinet lock components",
        connectivity: ["RFID", "NFC"],
        description:
          "Card and NFC operated cabinet lock for lockers, storage units and shared office furniture.",
        features: ["RFID Card", "NFC Card", "Battery"],
      },
    ],
  },
  {
    slug: "smart-switches",
    name: "Smart Switches",
    short: "Smart Switches",
    tagline: "Faster. Smarter. Seamless — modular aluminium and curved glass panels.",
    image: titanSwitch,
    alt: "Titan modular smart switch panels in aluminium, gold and black finishes",
    products: [
      {
        slug: "titan-switch",
        name: "Titan Switch",
        image: titanSwitch,
        alt: "Titan smart switch modules in brushed grey, royal gold and jett black",
        connectivity: ["Zigbee"],
        description:
          "Modular 2 | 4 | 6 | 8 module panels in premium aluminium or PC finish, combining switch, dimmer, fan and socket in one plate.",
        features: [
          "100+ modular panel combinations",
          "All-in-one: switch, dimmer, fan & socket",
          "Up to 10 relays & 18 programmable keys",
          "10A heavy load support",
          "Zigbee direct control for lighting",
          "Fits standard Indian gang boxes",
          "Built-in USB-A + USB-C fast charging",
        ],
      },
      {
        slug: "luxeray-glass-switch",
        name: "LuxeRay Glass Panel Switches",
        image: luxeraySwitch,
        alt: "LuxeRay curved glass panel switch with backlit touch buttons and screen",
        connectivity: ["Zigbee", "Wi-Fi"],
        description:
          "2 | 4 | 6 | 8 | 12 module curved glass panels with CNC machined metal bezels in gold, silver and black.",
        features: [
          "2.5D curved toughened glass panel",
          "CNC machined curved metal bezel",
          "Zigbee mesh — offline scene operation",
          "16A heavy load per switch",
          "ALS sensor auto-brightness backlight",
          "50+ variants with touch screen & USB socket",
          "Child lock + overload protection up to 2.5KV",
        ],
      },
      {
        slug: "smart-knob",
        name: "Smart Knob",
        image: smartKnob,
        alt: "Phlipton smart rotary knobs in black, gold and rose gold finishes",
        connectivity: ["Zigbee"],
        description:
          "A modern rotary knob for dimming lights and controlling fan speed, pairing with any Titan panel.",
        features: [
          "Knob to control Zigbee lights (dimming & tuning)",
          "AC fan with 4 push buttons",
          "Combines with 4, 6 and 8 switch modules",
          "Available in black, gold and rose gold",
        ],
      },
    ],
  },
  {
    slug: "control-screens",
    name: "Control Screens",
    short: "Control Screens",
    tagline: "One central screen for every scene, device and room.",
    image: controlScreen,
    alt: "Multifunctional smart control screens mounted on a wall",
    products: [
      {
        slug: "multifunctional-screen",
        name: "Multifunctional Screen",
        image: controlScreen,
        alt: "3.5 inch and 4 inch multifunctional smart home control screens",
        connectivity: ["Zigbee", "Wi-Fi"],
        description:
          '3.5" | 4" | 8" | 10" wall control panels on the latest Tuya operating system, doubling as an in-wall gateway.',
        features: [
          "Inbuilt Alexa support for voice control",
          "Two-way communication with door bells",
          "Central control for all Phlipton smart devices",
          "Inbuilt IR blaster & Sigmesh gateway (3.5\")",
          "Supports up to 100 ZigBee devices",
          "Auto brightness + fits two modular gang boxes",
        ],
      },
    ],
  },
  {
    slug: "smart-curtains",
    name: "Smart Curtains",
    short: "Smart Curtains",
    tagline: "Curtains that adapt to you — light, privacy and mood with a tap.",
    image: smartCurtains,
    alt: "Motorised smart curtains in a luxury living room",
    products: [
      {
        slug: "smart-curtain-motor",
        name: "Smart Curtain Motor & Track",
        image: smartCurtains,
        alt: "Motorised curtain track in a bright luxury interior",
        connectivity: ["Zigbee", "Wi-Fi"],
        description:
          "Control light, privacy and mood with a tap or automation — effortless, elegant and designed for smarter living.",
        features: [
          "App, scene and schedule control",
          "Silent motor with soft start and stop",
          "Heavy-duty tracks, custom widths",
          "Works with voice assistants",
        ],
      },
    ],
  },
  {
    slug: "smart-lighting",
    name: "Smart Lighting",
    short: "Smart Lighting",
    tagline: "Smart lights, smarter living — brightness, mood and ambience on demand.",
    image: smartLights,
    alt: "Premium recessed smart downlight with warm beam",
    products: [
      {
        slug: "smart-lights",
        name: "Smart Lights",
        image: smartLights,
        alt: "Recessed architectural smart downlight",
        connectivity: ["Zigbee"],
        description:
          "Effortlessly control brightness, mood and ambience with intelligent lighting designed to adapt to your lifestyle — sleek, efficient and beautifully modern.",
        features: [
          "Spotlights, downlights and concealed profiles",
          "Magnetic track lights, surface & concealed",
          "LED strips, drivers and controllers",
          "Tunable brightness and colour temperature",
        ],
      },
    ],
  },
];

export const FEATURED_PRODUCT_SLUGS = [
  ["smart-door-locks", "series-4-pro-ai"],
  ["smart-door-locks", "series-3-pro"],
  ["glass-door-locks", "series-g1"],
  ["video-door-bells", "wifi-video-doorbell"],
  ["smart-switches", "luxeray-glass-switch"],
  ["smart-switches", "smart-knob"],
] as const;

export function getCategory(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function getProduct(categorySlug: string, productSlug: string) {
  const category = getCategory(categorySlug);
  const product = category?.products.find((p) => p.slug === productSlug);
  return product ? { category: category!, product } : undefined;
}

export const FEATURED_PRODUCTS = FEATURED_PRODUCT_SLUGS.map(([c, p]) => {
  const hit = getProduct(c, p)!;
  return { ...hit.product, categorySlug: hit.category.slug, categoryName: hit.category.name };
});
