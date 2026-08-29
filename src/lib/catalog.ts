// Product catalogue — sourced from the Lanwan Automation catalogue.
// Images are cropped directly from the catalogue pages.

import s1Pro from "@/assets/catalog/s1-pro.png";
import s1ProG from "@/assets/catalog/s1-pro-g.png";
import series2 from "@/assets/catalog/series-2.png";
import series2Pro from "@/assets/catalog/series-2-pro.png";
import series3 from "@/assets/catalog/series-3.png";
import series3Pro from "@/assets/catalog/series-3-pro.png";
import series3ProAi from "@/assets/catalog/series-3-pro-ai.png";
import series3ProSlim from "@/assets/catalog/series-3-pro-slim.png";
import series4 from "@/assets/catalog/series-4.png";
import series4ProAi from "@/assets/catalog/series-4-pro-ai.png";
import series6 from "@/assets/catalog/series-6.png";
import seriesV1 from "@/assets/catalog/series-v1.png";
import seriesAl1 from "@/assets/catalog/series-al-1.png";
import seriesB1 from "@/assets/catalog/series-b1.png";
import seriesR1 from "@/assets/catalog/series-r1.png";
import seriesH1 from "@/assets/catalog/series-h1.png";
import seriesG0 from "@/assets/catalog/series-g0.png";
import seriesG1 from "@/assets/catalog/series-g1.png";
import cabinetWd1 from "@/assets/catalog/cabinet-wd1.png";
import cabinetWd2 from "@/assets/catalog/cabinet-wd2.png";
import doorbellWifi from "@/assets/catalog/wifi-video-doorbell.png";
import vdp7 from "@/assets/catalog/vdp-7-touch.png";
import vdp4Wire from "@/assets/catalog/vdp-4-wire.png";
import titanSwitch from "@/assets/catalog/titan-switch.jpg";
import luxeraySwitch from "@/assets/catalog/luxeray-switch.jpg";
import smartKnob from "@/assets/catalog/smart-knob.jpg";
import smartCurtains from "@/assets/catalog/smart-curtains.jpg";
import smartLights from "@/assets/catalog/smart-lights.jpg";
import smartDoorLockSecurer from "@/assets/images/smart-door-lock-securer.jpg";
import videoDoorbellCamera from "@/assets/images/video-doorbell-camera.jpg";
import glassDoorLockClamp from "@/assets/images/glass-door-lock-clamp.jpg";
import videoDoorbellFeatures from "@/assets/images/video-doorbell-features.jpg";
import smartDoorLockFaceRecognition from "@/assets/images/smart-door-lock-face-recognition.jpg";
import capacitiveGlassSwitch from "@/assets/images/capacitive-glass-switch.jpg";
import smartCurtainsMotor from "@/assets/images/smart-curtains-motor.jpg";

import screen10 from "@/assets/MUTIFUCATION SCREEN/10 INCH SCREEN.png";
import screen8 from "@/assets/MUTIFUCATION SCREEN/8 inch ..png";
import screen4 from "@/assets/MUTIFUCATION SCREEN/4 INCH - 1.png";

import lockImg1 from "@/assets/LOCK/B1 LOCK - 2.png";
import lockImg2 from "@/assets/LOCK/B2 WITH BRAND - PRICELSIT.png";
import lockImg3 from "@/assets/LOCK/B2 WITH BRAND.png";
import lockImg4 from "@/assets/LOCK/DOOR BELL N.png";
import lockImg5 from "@/assets/LOCK/FINGERPRINT LOCK.png";
import lockImg6 from "@/assets/LOCK/GLASS DOOR LOCK.png";
import lockImg7 from "@/assets/LOCK/NEW S1 PRO.png";
import lockImg8 from "@/assets/LOCK/NFC CABINETS LOCK.png";
import lockImg9 from "@/assets/LOCK/S - VL.jpg";
import lockImg10 from "@/assets/LOCK/SERIES - 3 PRO - WIFI - BRAND.png";
import lockImg11 from "@/assets/LOCK/SERIES - 4.png";
import lockImg12 from "@/assets/LOCK/SERIES - 6.png";

export type Product = {
  slug: string;
  name: string;
  image: string;
  alt: string;
  connectivity: string[];
  description: string;
  features: string[];
  subCategory?: string;
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
    slug: "smart-locks",
    name: "Smart Locks",
    short: "Smart Locks",
    tagline: "Unlock the future — where your door knows you before you reach for the handle.",
    image: lockImg11,
    alt: "Smart Locks Collection",
    products: [
      {
        slug: "series-g0",
        name: "Series G0",
        image: glassDoorLockClamp,
        alt: "Series G0 glass door lock with display, keypad and fingerprint ring",
        connectivity: ["Bluetooth"],
        subCategory: "Door Locks",
        description:
          "A clamp-on smart glass door lock with keyless entry. Secure frameless doors easily and enjoy remote access control without drilling.",
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
        subCategory: "Door Locks",
        description:
          "Wi-Fi connected smart glass door lock. Manage access remotely, monitor entry, and enjoy keyless convenience through an intuitive app.",
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
        slug: "b1-lock-2",
        name: "B1 Lock 2",
        image: seriesB1,
        alt: "B1 Lock 2",
        connectivity: ["Wi-Fi Active"],
        subCategory: "Smart Door Locks",
        description:
          "Advanced keyless smart lock with seamless Wi-Fi connectivity. Offers secure entry via fingerprint and app, integrating effortlessly into your smart home.",
        features: [...lockMethods.base],
      },
      {
        slug: "b2-with-brand-pricelsit",
        name: "B2 With Brand Pricelist",
        image: lockImg2,
        alt: "B2 With Brand Pricelist",
        connectivity: ["Wi-Fi Active"],
        subCategory: "Smart Door Locks",
        description:
          "Premium smart door lock featuring robust security. Enables keyless entry and remote access control for maximum convenience and peace of mind.",
        features: [...lockMethods.base],
      },
      {
        slug: "b2-with-brand",
        name: "B2 With Brand",
        image: series2,
        alt: "B2 With Brand",
        connectivity: ["Wi-Fi Active"],
        subCategory: "Smart Door Locks",
        description:
          "Sleek and secure smart lock designed for modern homes. Enjoy keyless access and seamless remote management through your smart home app.",
        features: [...lockMethods.base],
      },
      {
        slug: "door-bell-n",
        name: "Door Bell N",
        image: lockImg4,
        alt: "Door Bell N",
        connectivity: ["Wi-Fi Active"],
        subCategory: "Smart Door Locks",
        description:
          "Integrated smart lock with doorbell functionality. Provides secure keyless entry, visitor notifications, and convenient access control in one device.",
        features: [...lockMethods.base],
      },
      {
        slug: "fingerprint-lock",
        name: "Fingerprint Lock",
        image: lockImg5,
        alt: "Fingerprint Lock",
        connectivity: ["Wi-Fi Active"],
        subCategory: "Smart Door Locks",
        description:
          "Biometric smart door lock for quick, keyless entry. Enhances home security with advanced fingerprint recognition and smart home integration.",
        features: [...lockMethods.base],
      },
      {
        slug: "glass-door-lock",
        name: "Glass Door Lock",
        image: lockImg6,
        alt: "Glass Door Lock",
        connectivity: ["Wi-Fi Active"],
        subCategory: "Smart Door Locks",
        description:
          "Specialized smart lock for glass doors. Delivers secure, keyless access and remote control capabilities without compromising aesthetics.",
        features: [...lockMethods.base],
      },
      {
        slug: "new-s1-pro",
        name: "New S1 Pro",
        image: s1Pro,
        alt: "New S1 Pro",
        connectivity: ["Wi-Fi Active"],
        subCategory: "Smart Door Locks",
        description:
          "Next-generation smart door lock with enhanced security features. Enjoy reliable keyless entry, remote monitoring, and seamless smart home connectivity.",
        features: [...lockMethods.base],
      },
      {
        slug: "nfc-cabinets-lock",
        name: "NFC Cabinets Lock",
        image: lockImg8,
        alt: "NFC Cabinets Lock",
        connectivity: ["Wi-Fi Active"],
        subCategory: "Smart Door Locks",
        description:
          "Smart lock designed for cabinets and drawers. Secure your valuables with convenient NFC access and intelligent monitoring.",
        features: [...lockMethods.base],
      },
      {
        slug: "s-vl",
        name: "S VL",
        image: lockImg9,
        alt: "S VL",
        connectivity: ["Wi-Fi Active"],
        subCategory: "Smart Door Locks",
        description:
          "Versatile smart door lock offering multiple access methods. Upgrade your home security with keyless entry and intuitive remote management.",
        features: [...lockMethods.base],
      },
      {
        slug: "series-3-pro-wifi-brand",
        name: "Series 3 Pro Wifi Brand",
        image: series3Pro,
        alt: "Series 3 Pro Wifi Brand",
        connectivity: ["Wi-Fi Active"],
        subCategory: "Smart Door Locks",
        description:
          "Wi-Fi enabled smart lock for ultimate convenience. Control and monitor your door from anywhere with advanced keyless security.",
        features: [...lockMethods.base],
      },
      {
        slug: "series-4",
        name: "Series 4",
        image: series4,
        alt: "Series 4",
        connectivity: ["Wi-Fi Active"],
        subCategory: "Smart Door Locks",
        description:
          "Premium smart door lock with a built-in camera display panel. Offers secure keyless access, visual monitoring, and seamless smart home integration.",
        features: [...lockMethods.base],
      },
      {
        slug: "series-6",
        name: "Series 6",
        image: series6,
        alt: "Series 6",
        connectivity: ["Wi-Fi Active"],
        subCategory: "Smart Door Locks",
        description:
          "High-end smart door lock with advanced access features. Provides secure, keyless entry and intelligent remote control for modern smart homes.",
        features: [...lockMethods.base],
      },
      {
        slug: "wifi-video-doorbell",
        name: "WiFi Video Doorbell",
        image: videoDoorbellCamera,
        alt: "Wi-Fi video doorbell with indoor chime unit",
        connectivity: ["Wi-Fi"],
        subCategory: "Door Bells",
        description:
          "Smart video doorbell with two-way audio. Monitor visitors, receive instant smartphone notifications, and enhance home security remotely.",
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
        subCategory: "Door Bells",
        description:
          "Smart video door phone with a 7-inch touch display. See and speak to visitors, unlock doors remotely, and secure your home with ease.",
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
        subCategory: "Door Bells",
        description:
          "Reliable wired video intercom system for secure visitor monitoring. Enables clear two-way communication and convenient remote unlocking.",
        features: [
          '2-Way Video Intercom with 7" Display',
          "4-Wire System (No Internet Required)",
          "Night Vision + Weatherproof Outdoor Unit",
          "One-Touch Unlock (12V) + 100m Range",
          "Multi-Monitor Support + Easy Install",
        ],
      },
      {
        slug: "wd1",
        name: "WD1 Cabinet Lock",
        image: cabinetWd1,
        alt: "WD1 fingerprint cabinet lock body and fingerprint module",
        connectivity: ["Fingerprint"],
        subCategory: "Cabinet Locks",
        description:
          "Concealed smart fingerprint lock for cabinets. Secure valuables seamlessly with quick biometric access and battery-powered convenience.",
        features: ["Fingerprint", "Battery"],
      },
      {
        slug: "wd2",
        name: "WD2 Cabinet Lock",
        image: cabinetWd2,
        alt: "WD2 RFID and NFC card cabinet lock components",
        connectivity: ["RFID", "NFC"],
        subCategory: "Cabinet Locks",
        description:
          "Smart cabinet lock with NFC and RFID support. Effortlessly secure lockers and storage spaces with convenient keyless smart access.",
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
        subCategory: "Titan Switch",
        description:
          "Modular smart switch panels. Automate lighting and appliances with remote app control, custom scenes, and energy-saving convenience.",
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
        subCategory: "Luxury Glass Panel Switch",
        description:
          "Elegant curved glass smart switches. Enjoy seamless app control, automated lighting scenes, and stylish convenience for your smart home.",
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
        alt: "Lanwan smart rotary knobs in black, gold and rose gold finishes",
        connectivity: ["Zigbee"],
        subCategory: "Smart Knob",
        description:
          "Smart rotary knob for intuitive lighting and fan control. Adjust brightness and ambiance effortlessly within your smart home ecosystem.",
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
        image: smartCurtainsMotor,
        alt: "Motorised curtain track in a bright luxury interior",
        connectivity: ["Zigbee", "Wi-Fi"],
        description:
          "Motorized smart curtain system. Automate natural light and privacy with remote app control, schedules, and seamless smart home integration.",
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
    slug: "smart-light",
    name: "Smart Light",
    short: "Smart Light",
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
          "Intelligent lighting solutions for your smart home. Control brightness and ambiance via remote app access, schedules, and custom automated scenes.",
        features: [
          "Spotlights, downlights and concealed profiles",
          "Magnetic track lights, surface & concealed",
          "LED strips, drivers and controllers",
          "Tunable brightness and colour temperature",
        ],
      },
    ],
  },
  {
    slug: "control-screen",
    name: "Control Screen",
    short: "Control Screen",
    tagline: "One central screen for every scene, device and room.",
    image: screen10,
    alt: "10-inch multifunctional smart control screen",
    products: [
      {
        slug: "10-inch-multifunctional-screen",
        name: '10" Multifunctional Screen',
        image: screen10,
        alt: "10 inch multifunctional smart home control screen",
        connectivity: ["Zigbee", "Wi-Fi"],
        description:
          "Flagship 10-inch smart home control panel. Centralize control of all connected devices, lighting, and security from one intuitive touch screen.",
        features: [
          "Large 10-inch HD touch display",
          "Inbuilt Alexa support for voice control",
          "Two-way communication with door bells",
          "Central control for all Lanwan smart devices",
          "Supports up to 100 ZigBee devices",
        ],
      },
      {
        slug: "8-inch-multifunctional-screen",
        name: '8" Multifunctional Screen',
        image: screen8,
        alt: "8 inch multifunctional smart home control screen",
        connectivity: ["Zigbee", "Wi-Fi"],
        description:
          "Balanced 8-inch smart home control panel. Effortlessly manage your automated devices, scenes, and security from a single central hub.",
        features: [
          "8-inch high-resolution touch display",
          "Inbuilt Alexa support for voice control",
          "Two-way communication with door bells",
          "Central control for all Lanwan smart devices",
          "Supports up to 100 ZigBee devices",
        ],
      },
      {
        slug: "4-inch-multifunctional-screen",
        name: '4" Multifunctional Screen',
        image: screen4,
        alt: "4 inch multifunctional smart home control screen",
        connectivity: ["Zigbee", "Wi-Fi"],
        description:
          "Compact 4-inch smart wall control screen. Conveniently manage your entire smart home ecosystem from a standard wall switch location.",
        features: [
          "4-inch touch display with auto brightness",
          "Two-way communication with door bells",
          "Central control for all Lanwan smart devices",
          "Supports up to 100 ZigBee devices",
          "Fits standard modular gang boxes",
        ],
      },
    ],
  },
];

export const FEATURED_PRODUCT_SLUGS = [
  ["smart-locks", "series-4"],
  ["smart-locks", "series-6"],
  ["smart-locks", "series-g1"],
  ["smart-locks", "wifi-video-doorbell"],
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
