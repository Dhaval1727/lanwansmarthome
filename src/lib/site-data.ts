import lock from "@/assets/p-lock.jpg";
import switchImg from "@/assets/p-switch.jpg";
import vdp from "@/assets/p-vdp.jpg";
import camera from "@/assets/p-camera.jpg";
import bell from "@/assets/p-bell.jpg";
import light from "@/assets/p-light.jpg";
import curtain from "@/assets/p-curtain.jpg";

export const CONTACT = {
  brand: "NexHome Automation",
  phoneDisplay: "+91 98765 43210",
  phoneHref: "tel:+919876543210",
  whatsappHref:
    "https://wa.me/919876543210?text=Hi%20NexHome%2C%20I%27d%20like%20a%20free%20smart%20home%20consultation.",
  email: "hello@nexhomeautomation.in",
  address: "No. 42, Prestige Tech Park Road, Whitefield, Bengaluru 560066",
  hours: "Mon – Sat · 9:30 AM to 7:30 PM",
};

export const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Solutions", href: "#solutions" },
  { label: "Projects", href: "#projects" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Blog", href: "#blog" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

export const TRUST_BADGES = [
  "5+ Years Experience",
  "500+ Installations",
  "24×7 Support",
  "Certified Experts",
  "Warranty Included",
];

export const PRODUCTS = [
  {
    name: "Smart Door Locks",
    image: lock,
    description:
      "Fingerprint, PIN, RFID and app access with anti-theft alarms for main doors.",
    features: ["5-way unlock", "Auto-lock", "Tamper alert"],
  },
  {
    name: "Smart Switches",
    image: switchImg,
    description:
      "Retrofit touch panels that control lights, fans and appliances from anywhere.",
    features: ["No rewiring", "Fan regulator", "Scene control"],
  },
  {
    name: "Video Door Phones",
    image: vdp,
    description:
      "See, speak and unlock for visitors from a 7-inch indoor monitor or your phone.",
    features: ["HD video", "Cloud recording", "Multi-unit"],
  },
  {
    name: "Smart Cameras",
    image: camera,
    description:
      "Indoor and outdoor cameras with AI person detection and instant alerts.",
    features: ["2K clarity", "Night vision", "Two-way talk"],
  },
  {
    name: "Smart Door Bells",
    image: bell,
    description:
      "Battery or wired video doorbells that record every visit, even when you're away.",
    features: ["Motion alerts", "Chime kit", "Wide angle"],
  },
  {
    name: "Smart Lighting",
    image: light,
    description:
      "Tunable, dimmable and RGB profile lighting choreographed to your daily routine.",
    features: ["16M colours", "Circadian modes", "Voice ready"],
  },
  {
    name: "Smart Curtains",
    image: curtain,
    description:
      "Whisper-quiet motorised tracks and blinds that wake up with the sunrise.",
    features: ["Silent motor", "Sun schedule", "Manual pull"],
  },
  {
    name: "Automation Controllers",
    image: switchImg,
    description:
      "Zigbee, Matter and Wi-Fi hubs that unify every device under one dependable brain.",
    features: ["Matter ready", "Offline scenes", "Alexa & Google"],
  },
];

export const SOLUTIONS = [
  { title: "Homes", copy: "Lighting, security and climate for independent houses." },
  { title: "Apartments", copy: "Retrofit automation with zero civil work or damage." },
  { title: "Villas", copy: "Multi-floor scenes, gate control and perimeter security." },
  { title: "Offices", copy: "Access control, occupancy sensing and energy dashboards." },
  { title: "Hotels", copy: "Guest room controls, RFID locks and housekeeping logic." },
  { title: "Retail Shops", copy: "Shutter alerts, camera analytics and display lighting." },
  { title: "Builders", copy: "Standardised automation packages across every unit." },
  { title: "Architects", copy: "Early-stage load planning and conduit drawings." },
  { title: "Interior Designers", copy: "Concealed hardware that respects your design language." },
];

export const WHY_US = [
  { title: "Certified Installation", copy: "In-house engineers, not subcontracted labour." },
  { title: "Premium Brands", copy: "Only genuine, warranty-backed global hardware." },
  { title: "Expert Support", copy: "Dedicated account engineer for every project." },
  { title: "Warranty", copy: "Up to 3 years on product plus 1 year on workmanship." },
  { title: "Affordable Pricing", copy: "Transparent quotes with phased upgrade paths." },
  { title: "Quick Installation", copy: "Most homes commissioned within 48 hours." },
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
  "Yale",
  "Godrej",
  "Qubo",
  "Aqara",
  "Philips",
  "Samsung",
  "Hikvision",
  "CP Plus",
];

export const STATS = [
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 1000, suffix: "+", label: "Happy Customers" },
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 24, suffix: "×7", label: "Support" },
];

export const TESTIMONIALS = [
  {
    name: "Arjun Mehta",
    location: "Prestige Lakeside, Bengaluru",
    rating: 5,
    review:
      "They automated our 3BHK in two days without breaking a single wall. The lighting scenes alone changed how the house feels in the evening.",
    initials: "AM",
  },
  {
    name: "Sneha Raghavan",
    location: "Villa Owner, Sarjapur",
    rating: 5,
    review:
      "From the site visit to the handover session, everything was documented. The smart lock and cameras give my parents real peace of mind.",
    initials: "SR",
  },
  {
    name: "Karthik Iyer",
    location: "Interior Designer, Chennai",
    rating: 5,
    review:
      "I now specify NexHome on every premium project. Their hardware is concealed beautifully and the team respects site timelines.",
    initials: "KI",
  },
  {
    name: "Priya Nair",
    location: "Boutique Hotel, Kochi",
    rating: 5,
    review:
      "42 rooms with RFID locks and occupancy-linked AC. Our energy bill dropped by nearly a fifth in the first quarter.",
    initials: "PN",
  },
];

export const GALLERY = [
  { title: "Penthouse Lighting", tag: "Luxury Home", image: light },
  { title: "Villa Entrance Security", tag: "Villa Project", image: lock },
  { title: "Bedroom Curtain Automation", tag: "Apartment", image: curtain },
  { title: "Boardroom Access Control", tag: "Office", image: vdp },
  { title: "Perimeter Camera Grid", tag: "Villa Project", image: camera },
  { title: "Entrance Doorbell Retrofit", tag: "Before / After", image: bell },
];

export const FAQS = [
  {
    q: "What warranty do I get on products and installation?",
    a: "Every device carries the manufacturer warranty of 1 to 3 years, and we add a 1-year workmanship warranty on all wiring and fitment done by our engineers.",
  },
  {
    q: "How long does a full home installation take?",
    a: "A typical 2–3 BHK apartment is completed in 1 to 2 days. Villas and commercial sites usually take 3 to 5 days depending on the number of points.",
  },
  {
    q: "Do I need to break walls or redo my wiring?",
    a: "No. Our smart switches and locks are retrofit devices that sit inside your existing boxes and doors. New construction projects can opt for full concealed wiring.",
  },
  {
    q: "Is there a single mobile app for everything?",
    a: "Yes. We commission all devices into one app with room-wise grouping, scenes, schedules and family sharing, plus Alexa and Google Assistant voice control.",
  },
  {
    q: "What happens if my internet goes down?",
    a: "Local scenes, switches and locks keep working offline through the hub. Only remote access and notifications pause until connectivity returns.",
  },
  {
    q: "Do you support products bought elsewhere?",
    a: "We support most Matter, Zigbee and Wi-Fi devices. Share the model numbers and we will confirm compatibility during the consultation.",
  },
];

export const BLOG = [
  {
    title: "7 Reasons Smart Locks Beat Traditional Locks",
    excerpt: "Keys get copied and lost. Here is how digital access changes home security.",
    date: "12 Jul 2026",
    read: "6 min read",
    tag: "Security",
  },
  {
    title: "How Smart Homes Cut Energy Bills by 22%",
    excerpt: "Occupancy sensing, scheduling and load monitoring add up faster than you think.",
    date: "28 Jun 2026",
    read: "5 min read",
    tag: "Efficiency",
  },
  {
    title: "Choosing the Best Smart Switches for Indian Homes",
    excerpt: "Neutral wire, fan regulation and retrofit depth — what actually matters.",
    date: "09 Jun 2026",
    read: "8 min read",
    tag: "Buying Guide",
  },
  {
    title: "Home Security Tips Before You Travel",
    excerpt: "A five-minute checklist that makes an empty house look permanently occupied.",
    date: "21 May 2026",
    read: "4 min read",
    tag: "Tips",
  },
  {
    title: "The Future of Home Automation: Matter & Beyond",
    excerpt: "Why one open standard finally ends the brand lock-in problem.",
    date: "02 May 2026",
    read: "7 min read",
    tag: "Insights",
  },
];
