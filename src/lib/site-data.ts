import lock from "@/assets/p-lock.jpg";
import switchImg from "@/assets/p-switch.jpg";
import vdp from "@/assets/p-vdp.jpg";
import camera from "@/assets/p-camera.jpg";
import bell from "@/assets/p-bell.jpg";
import light from "@/assets/p-light.jpg";
import curtain from "@/assets/p-curtain.jpg";
import lockSal from "@/assets/lock-sal.jpg";
import lockS1 from "@/assets/lock-s1.jpg";
import lockS1Pro from "@/assets/lock-s1pro.jpg";
import lockSeries6 from "@/assets/lock-series6.jpg";
import lockGlass from "@/assets/lock-glass.jpg";
import lockDoorbell from "@/assets/lock-doorbell.jpg";
import lockAccessories from "@/assets/lock-accessories.jpg";

export const CONTACT = {
  brand: "Lanwan Automation",
  tagline: "Makes Value Smarter, Comfort Enhanced",
  phoneDisplay: "+91 98765 43210",
  phoneHref: "tel:+919876543210",
  whatsappHref:
    "https://wa.me/919876543210?text=Hi%20Lanwan%2C%20I%27d%20like%20a%20free%20smart%20home%20consultation.",
  email: "hello@lanwanautomation.in",
  address: "No. 42, Prestige Tech Park Road, Whitefield, Bengaluru 560066",
  hours: "Mon – Sat · 9:30 AM to 7:30 PM",
};

export const NAV: { label: string; to: string; hash?: string; params?: Record<string, string> }[] = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "Smart Locks", to: "/products/$category", params: { category: "smart-door-locks" } },
  { label: "Doorbells", to: "/products/$category", params: { category: "video-door-bells" } },
  { label: "Glass Door Locks", to: "/products/$category", params: { category: "glass-door-locks" } },
  { label: "About", to: "/", hash: "about" },
  { label: "Contact", to: "/", hash: "contact" },
];

export const TRUST_BADGES = [
  "Zigbee 3.0 & Matter",
  "Make in India",
  "100+ Panel Combinations",
  "Certified Engineers",
  "24×7 Support",
];


export const PRODUCTS = [
  {
    name: "S-AL Series",
    category: "Smart Locks",
    image: lockSal,
    alt: "S-AL Series aluminium alloy smart door lock with fingerprint reader in bronze finish",
    description:
      "Aircraft-grade aluminium alloy body with a hairline bronze finish — the entry point into the premium lock line-up.",
    features: ["Fingerprint + PIN", "Anti-peep password", "IP54 weather sealed"],
  },
  {
    name: "S1 Series",
    category: "Smart Locks",
    image: lockS1,
    alt: "S1 Series slim smart door lock with touch keypad and lever handle on a dark door",
    description:
      "A slim lever-handle lock with a hidden capacitive keypad that disappears into the door when idle.",
    features: ["5-way unlock", "Auto-lock timer", "6-month battery"],
  },
  {
    name: "S1 Pro",
    category: "Smart Locks",
    image: lockS1Pro,
    alt: "S1 Pro smart door lock with 3D face recognition panel and bronze trim",
    description:
      "Flagship 3D face recognition lock that reads and opens in under half a second, day or night.",
    features: ["3D face unlock", "Live app video", "Tamper alarm"],
  },
  {
    name: "Series 6",
    category: "Smart Locks",
    image: lockSeries6,
    alt: "Series 6 luxury smart door lock with palm vein scanner and antique bronze handle",
    description:
      "Full-length luxury escutcheon with palm-vein recognition and a reinforced mortise for main doors.",
    features: ["Palm vein scan", "C-grade cylinder", "Push-pull handle"],
  },
  {
    name: "Glass Door Lock",
    category: "Smart Locks",
    image: lockGlass,
    alt: "Frameless glass door smart lock with black glass panel and bronze edging",
    description:
      "Frameless fitment for glass office and balcony doors — no drilling, no visible cabling.",
    features: ["Frameless fit", "Fingerprint + card", "Fail-safe release"],
  },
  {
    name: "Video Door Bell",
    category: "Door Entry",
    image: lockDoorbell,
    alt: "Smart video doorbell with camera and illuminated bronze ring beside a luxury door",
    description:
      "2K wide-angle doorbell with human detection, indoor chime and instant two-way conversation.",
    features: ["2K HD video", "Two-way talk", "Cloud + SD storage"],
  },
  {
    name: "Smart Door Lock Accessories",
    category: "Accessories",
    image: lockAccessories,
    alt: "Smart lock accessories including RFID cards, mechanical keys, Wi-Fi gateway and battery pack",
    description:
      "RFID cards, emergency keys, Wi-Fi gateways and rechargeable battery packs to complete every install.",
    features: ["Wi-Fi gateway", "RFID key cards", "Rechargeable pack"],
  },
  {
    name: "Video Door Phone (VDP)",
    category: "Door Entry",
    image: bell,
    alt: "IP video door phone indoor monitor mounted on a dark wall",
    description:
      "IP villa intercom with indoor monitors, multi-monitor calling and gate release from any screen.",
    features: ["Multi-monitor", "Gate release", "Night vision"],
  },
  {
    name: "Titan Switch",
    category: "Automation",
    image: switchImg,
    alt: "Titan modular smart switch panel in aluminium finish",
    description:
      "Modular 2/4/6/8 module panels in premium aluminium with up to 10 relays and 18 programmable keys.",
    features: ["100+ combinations", "10A heavy load", "USB-A + USB-C"],
  },
  {
    name: "LuxeRay Glass Switches",
    category: "Automation",
    image: switchImg,
    alt: "LuxeRay curved glass smart switch panel with backlit icons",
    description:
      "2.5D curved toughened glass panels with CNC machined bronze, gold or black bezels and backlit icons.",
    features: ["50+ variants", "16A per switch", "ALS auto-brightness"],
  },
  {
    name: "Multifunctional Screen",
    category: "Automation",
    image: vdp,
    alt: "Wall mounted smart home control screen showing room scenes",
    description:
      '3.5", 4", 8" and 10" central control panels on the latest Tuya OS, doubling as an in-wall Zigbee gateway.',
    features: ["Alexa support", "Built-in gateway", "Fits 86 box"],
  },
  {
    name: "Smart Curtains",
    category: "Automation",
    image: curtain,
    alt: "Motorised smart curtains opening in a luxury bedroom",
    description:
      "1.2Nm and 2Nm curtain motors up to 90kg with heavy-duty tracks — silent, smooth and app controlled.",
    features: ["Up to 90kg", "Silent motor", "Sun schedule"],
  },
  {
    name: "Smart Lights & Track",
    category: "Automation",
    image: light,
    alt: "Magnetic track lighting and concealed downlights in a dark luxury interior",
    description:
      "Concealed downlights, magnetic track lights, strips and controllers with flicker-free 0.1–100% dimming.",
    features: ["Flicker-free", "CCT 2700–6500K", "Surface / concealed"],
  },
  {
    name: "Security Cameras",
    category: "Door Entry",
    image: camera,
    alt: "Outdoor smart security camera mounted on a villa wall at night",
    description:
      "Indoor and outdoor Wi-Fi cameras with motion tracking, sirens and encrypted cloud recording.",
    features: ["Motion tracking", "Colour night vision", "Encrypted cloud"],
  },
];


export const SOLUTIONS = [
  { title: "Homes", copy: "Lighting, security and climate for independent houses." },
  { title: "Apartments", copy: "Retrofit Zigbee panels with zero civil work or damage." },
  { title: "Villas", copy: "IP villa intercom, gate control and perimeter security." },
  { title: "Hotels", copy: "Series H0/H1 RFID locks, DND panels and energy-saving switches." },
  { title: "Hospitals", copy: "Nurse-friendly controls, access logs and reliable offline scenes." },
  { title: "Senior Living", copy: "Human presence sensors, one-touch scenes and voice control." },
  { title: "Warehouses", copy: "Gateway-managed lighting zones and load monitoring at scale." },
  { title: "Offices", copy: "Access control, occupancy sensing and energy dashboards." },
  { title: "Architects & Designers", copy: "Concealed hardware, load planning and conduit drawings." },
];

export const WHY_US = [
  { title: "Zigbee 3.0 Mesh", copy: "Unmatched stability with offline scene operation." },
  { title: "Matter Ready", copy: "Pro Max gateway future-proofs every installation." },
  { title: "Expert Support", copy: "Dedicated account engineer for every project." },
  { title: "5-Year Warranty", copy: "Up to 5 years on switches plus workmanship cover." },
  { title: "Make in India", copy: "Locally engineered panels built for Indian gang boxes." },
  { title: "Quick Installation", copy: "Retrofit fitment — most homes live within 48 hours." },
  { title: "Professional Team", copy: "Uniformed, background-verified technicians." },
];

export const PROCESS = [
  { step: "01", title: "Consultation", copy: "Free call to understand rooms, routines and budget." },
  { step: "02", title: "Site Visit", copy: "Wiring survey, network check and load mapping." },
  { step: "03", title: "Product Selection", copy: "A curated BOM with live demos of each device." },
  { step: "04", title: "Installation", copy: "Clean, concealed fitment by certified engineers." },
  { step: "05", title: "Training", copy: "Hands-on handover for every member of the family." },
  { step: "06", title: "After Sales Support", copy: "24×7 helpline and annual health checks." },
];

export const BRANDS = [
  "Phlipton",
  "Titan Switch",
  "LuxeRay",
  "Tuya",
  "Zigbee 3.0",
  "Matter",
  "Alexa",
  "Google Home",
];

export const STATS = [
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 1000, suffix: "+", label: "Happy Customers" },
  { value: 200, suffix: "", label: "Devices per Gateway" },
  { value: 24, suffix: "×7", label: "Support" },
];

export const TESTIMONIALS = [
  {
    name: "Arjun Mehta",
    location: "Prestige Lakeside, Bengaluru",
    rating: 5,
    review:
      "The Titan panels replaced every switchboard in our 3BHK without breaking a wall. The knob dimming alone changed how the house feels in the evening.",
    initials: "AM",
  },
  {
    name: "Sneha Raghavan",
    location: "Villa Owner, Sarjapur",
    rating: 5,
    review:
      "From the site visit to handover, everything was documented. The Series 3 lock and villa intercom give my parents real peace of mind.",
    initials: "SR",
  },
  {
    name: "Karthik Iyer",
    location: "Interior Designer, Chennai",
    rating: 5,
    review:
      "I now specify LuxeRay glass panels on every premium project. The bezels match our hardware finishes and the team respects site timelines.",
    initials: "KI",
  },
  {
    name: "Priya Nair",
    location: "Boutique Hotel, Kochi",
    rating: 5,
    review:
      "42 rooms with Series H1 RFID locks, DND panels and energy-saving switches. Our power bill dropped by nearly a fifth in the first quarter.",
    initials: "PN",
  },
];

export const GALLERY = [
  { title: "Penthouse Track Lighting", tag: "Luxury Home", image: light },
  { title: "Villa Entrance Smart Lock", tag: "Villa Project", image: lock },
  { title: "Bedroom Curtain Motors", tag: "Apartment", image: curtain },
  { title: "8\" Control Panel Boardroom", tag: "Office", image: vdp },
  { title: "Perimeter Camera Grid", tag: "Villa Project", image: camera },
  { title: "Video Doorbell Retrofit", tag: "Before / After", image: bell },
];

export const FAQS = [
  {
    q: "What warranty do I get on products and installation?",
    a: "Titan and LuxeRay switch panels carry up to a 5-year warranty, other devices 1 to 3 years, and we add a 1-year workmanship warranty on all wiring and fitment done by our engineers.",
  },
  {
    q: "How long does a full home installation take?",
    a: "A typical 2–3 BHK apartment is completed in 1 to 2 days. Villas, hotels and commercial sites usually take 3 to 5 days depending on the number of points.",
  },
  {
    q: "Do I need to break walls or redo my wiring?",
    a: "No. Our panels fit standard Indian gang boxes and the locks are retrofit devices. New construction projects can opt for full concealed wiring and magnetic track lighting.",
  },
  {
    q: "Is there a single mobile app for everything?",
    a: "Yes. Everything is commissioned into one Tuya-based app with room grouping, scenes, schedules and family sharing, plus Alexa, Google and Siri shortcuts.",
  },
  {
    q: "What happens if my internet goes down?",
    a: "The Zigbee 3.0 mesh keeps local scenes, switches, knobs and locks working offline through the gateway. Only remote access and notifications pause until connectivity returns.",
  },
  {
    q: "How many devices can one gateway handle?",
    a: "The Wired Pro Gateway supports 200 Zigbee devices simultaneously, with up to 200 m outdoor and 20 m indoor range. Larger sites use multiple gateways or the Pro Max Matter gateway.",
  },
];

export const BLOG = [
  {
    title: "Titan vs LuxeRay: Choosing Your Switch Panel",
    excerpt: "Aluminium modularity or curved glass elegance — how to pick per room.",
    date: "12 Jul 2026",
    read: "6 min read",
    tag: "Buying Guide",
  },
  {
    title: "Why Zigbee 3.0 Mesh Beats Wi-Fi-Only Homes",
    excerpt: "Offline scenes, lower standby draw and rock-solid range across floors.",
    date: "28 Jun 2026",
    read: "5 min read",
    tag: "Technology",
  },
  {
    title: "Smart Door Locks: Series 1 to Series 4 Explained",
    excerpt: "Fingerprint, card, palm and app access — which series suits your door.",
    date: "09 Jun 2026",
    read: "8 min read",
    tag: "Security",
  },
  {
    title: "Designing with Magnetic Track Lighting",
    excerpt: "Surface or concealed, grill or flood — building layered light that moves.",
    date: "21 May 2026",
    read: "4 min read",
    tag: "Lighting",
  },
  {
    title: "Matter & the End of Brand Lock-In",
    excerpt: "How the Pro Max gateway future-proofs everything you install today.",
    date: "02 May 2026",
    read: "7 min read",
    tag: "Insights",
  },
];
