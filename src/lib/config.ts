/**
 * CENTRAL CONTENT CONFIGURATION
 * -----------------------------------------------------------------------------
 * Every editable piece of business content lives here so the client can update
 * copy, contact details and CTA labels without touching component code.
 *
 * Values marked `TODO` are placeholders and MUST be replaced before launch.
 */

export type NavItem = {
  label: string;
  href: string;
};

export type Offering = {
  id: string;
  index: string;
  name: string;
  category: string;
  description: string;
  notes: string[];
  image: string;
  imageAlt: string;
};

export type Principle = {
  title: string;
  body: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
  span: "tall" | "wide" | "square";
};

export type InquiryTopic = {
  value: string;
  label: string;
};

export const config = {
  brand: {
    name: "Summit Peak Coffee Co.",
    shortName: "Summit Peak",
    initials: "SP",
    tagline: "Roasted at altitude. Brewed with intention.",
    // TODO: confirm the real founding year.
    established: "Est. 2019",
  },

  seo: {
    title: "Summit Peak Coffee Co. — Specialty Coffee Roaster & Café",
    description:
      "A specialty coffee roaster and café devoted to origin transparency, small-batch roasting and the daily ritual of coffee done properly.",
    keywords: [
      "specialty coffee",
      "coffee roaster",
      "single origin coffee",
      "coffee café",
      "small batch roasting",
      "whole bean coffee",
    ],
    // TODO: replace with the production domain before launch.
    url: "https://www.summitpeakcoffee.com",
    ogImage: "/images/hero-roastery.jpg",
  },

  contact: {
    // TODO: replace every field below with real business details.
    email: "hello@summitpeakcoffee.com",
    phoneDisplay: "+65 6123 4567",
    phoneHref: "+6561234567",
    whatsapp: "6561234567", // digits only, incl. country code
    whatsappMessage:
      "Hello Summit Peak — I'd like to ask about your coffee.",
    address: {
      line1: "18 Alpine Lane, #01-04",
      line2: "Peak District, 018956",
      country: "Singapore",
      mapsHref: "https://maps.google.com/?q=Summit+Peak+Coffee",
    },
    hours: [
      { day: "Monday – Friday", time: "07:30 – 17:30" },
      { day: "Saturday", time: "08:00 – 18:00" },
      { day: "Sunday", time: "08:00 – 15:00" },
    ],
    responseNote: "We reply to enquiries within one business day.",
  },

  social: {
    instagram: {
      handle: "@summitpeakcoffee", // TODO
      href: "https://instagram.com/", // TODO
    },
  },

  nav: [
    { label: "Story", href: "#story" },
    { label: "Coffee", href: "#offerings" },
    { label: "Craft", href: "#process" },
    { label: "Visit", href: "#visit" },
  ] satisfies NavItem[],

  hero: {
    eyebrow: "Specialty coffee roaster & café",
    headlineLines: ["A better cup,", "by design."],
    subhead:
      "Summit Peak is a small-batch roastery and café built around origin transparency, patient craft, and coffee treated as a daily ritual rather than a commodity.",
    primaryCta: { label: "Start an enquiry", href: "#visit" },
    secondaryCta: { label: "Explore the coffee", href: "#offerings" },
    image: "/images/hero-roastery.jpg",
    imageAlt:
      "Warm interior of the Summit Peak coffee bar with a barista at work",
    marquee: [
      "Origin transparency",
      "Small-batch roasting",
      "Brewed to order",
      "Whole-bean retail",
    ],
  },

  intro: {
    eyebrow: "Our approach",
    heading: "Coffee treated like a craft, not a commodity.",
    paragraphs: [
      "We work with a short, considered list of farms and importers, and we tell you exactly what is in the cup — the region, the elevation, and how the beans were processed. Nothing is hidden behind a house blend.",
      "Every lot is roasted in small batches on-site, tasted before it is sold, and brewed to order in the café. If a coffee does not meet the standard, it does not make it to the shelf.",
    ],
    pullQuote:
      "Good coffee is not complicated. It is just made honestly, and made slowly.",
    image: "/images/intro-barista.jpg",
    imageAlt: "Barista preparing a pour-over at the Summit Peak brew bar",
    signature: "— The Summit Peak team",
  },

  offerings: {
    eyebrow: "The coffee",
    heading: "A short list, chosen carefully.",
    intro:
      "We would rather do a few things properly than everything at once. This is what you will find in the café and on the shelf.",
    items: [
      {
        id: "single-origin",
        index: "01",
        name: "Single-Origin Beans",
        category: "Whole bean & ground",
        description:
          "Rotating microlots from a handful of trusted farms, roasted to highlight clarity and sweetness. Tasting notes and origin details are printed on every bag.",
        notes: ["Filter", "Espresso", "Rotating lots"],
        image: "/images/offering-beans.jpg",
        imageAlt: "Freshly roasted whole coffee beans",
      },
      {
        id: "cafe-bar",
        index: "02",
        name: "The Café Bar",
        category: "Brewed to order",
        description:
          "Espresso, batch brew and pour-over, made to order by the cup. Ask the barista what is tasting good today — they will know the lot behind every drink.",
        notes: ["Espresso", "Pour-over", "Batch brew"],
        image: "/images/offering-espresso.jpg",
        imageAlt: "Espresso being prepared at the café bar",
      },
      {
        id: "retail",
        index: "03",
        name: "Retail & Subscriptions",
        category: "Take home",
        description:
          "Bags of beans, brewing tools and a simple subscription that keeps your kitchen stocked with whatever is roasting best that month.",
        notes: ["Retail bags", "Brew gear", "Subscription"],
        image: "/images/offering-retail.jpg",
        imageAlt: "Bag of Summit Peak coffee and brewing equipment",
      },
    ] satisfies Offering[],
  },

  principles: {
    eyebrow: "Why Summit Peak",
    heading: "The way we work is the difference.",
    intro:
      "No gimmicks and no shortcuts — just a set of standards we refuse to lower.",
    items: [
      {
        title: "Origin transparency",
        body: "Every bag lists the farm, region, elevation and process. If we cannot verify where it came from, we will not sell it.",
      },
      {
        title: "Small-batch roasting",
        body: "We roast frequently in small batches and rest each lot before it reaches the bar, so what you drink is fresh and consistent.",
      },
      {
        title: "Tasted, then sold",
        body: "Nothing goes on the shelf until it has been cupped and approved. Roast profiles are adjusted lot by lot, not guessed.",
      },
      {
        title: "Brewed with intention",
        body: "Recipes are dialled in daily against the coffee on the bar, so the cup you are served reflects the work behind the beans.",
      },
    ] satisfies Principle[],
  },

  showcase: {
    eyebrow: "Inside the roastery",
    heading: "Roast days, brew bars and the people behind the counter.",
    images: [
      {
        src: "/images/showcase-roasting.jpg",
        alt: "Coffee roasting in progress at the Summit Peak roastery",
        span: "wide",
      },
      {
        src: "/images/showcase-latte.jpg",
        alt: "Latte art poured in the café",
        span: "tall",
      },
      {
        src: "/images/showcase-beans.jpg",
        alt: "Roasted coffee beans cooling in the tray",
        span: "square",
      },
      {
        src: "/images/showcase-cafe.jpg",
        alt: "Tables inside the Summit Peak café",
        span: "wide",
      },
      {
        src: "/images/showcase-cup.jpg",
        alt: "A freshly brewed cup of coffee on the bar",
        span: "square",
      },
    ] satisfies GalleryImage[],
  },

  process: {
    eyebrow: "From farm to cup",
    heading: "A short chain, kept simple on purpose.",
    intro:
      "The closer we stay to the coffee, the better it tastes in your cup. Here is the whole journey.",
    steps: [
      {
        step: "01",
        title: "Sourcing",
        body: "We buy from farms and importers we know, favouring lots with clear traceability. Samples are cupped before any commitment is made.",
        image: "/images/process-sourcing.jpg",
        imageAlt: "Green coffee beans ready for roasting",
      },
      {
        step: "02",
        title: "Roasting",
        body: "Beans are roasted on-site in small batches, then rested and tasted again. We adjust each profile to the lot, never to a single fixed recipe.",
        image: "/images/process-roasting.jpg",
        imageAlt: "Coffee beans during the roasting process",
      },
      {
        step: "03",
        title: "Brewing",
        body: "On the bar, every coffee is dialled in daily and made to order — espresso, filter or pour-over — so the cup does the beans justice.",
        image: "/images/process-brewing.jpg",
        imageAlt: "Pour-over coffee being brewed at the bar",
      },
    ] satisfies ProcessStep[],
  },

  trust: {
    eyebrow: "Standards & transparency",
    heading: "What we will and will not do.",
    intro:
      "We would rather show our working than make promises we cannot keep. These are the commitments behind every bag and every cup.",
    commitments: [
      "Traceable, listed origins on all retail coffee",
      "Roast dates, not vague 'best before' windows",
      "Coffees tasted and approved before sale",
      "Honest guidance on brewing at home",
    ],
    // TODO: when verified reviews, press features or certifications exist,
    // add them here. Do not publish unverified testimonials.
    proofNote:
      "Looking for reviews or press? We are gathering verified testimonials and will publish them here — only real ones.",
    instagram: {
      title: "Follow the roast",
      body: "Roast days, new lots and café happenings are posted as they happen.",
    },
  },

  inquiry: {
    eyebrow: "Start a conversation",
    heading: "Tell us what you are after.",
    intro:
      "Whether it is wholesale, a subscription, an event or simply a question about a coffee, send a note and we will get back to you.",
    topics: [
      { value: "wholesale", label: "Wholesale & cafés" },
      { value: "subscription", label: "Coffee subscription" },
      { value: "events", label: "Events & catering" },
      { value: "general", label: "General enquiry" },
    ] satisfies InquiryTopic[],
    submitLabel: "Send enquiry",
    successTitle: "Thank you — your enquiry is on its way.",
    successBody:
      "This opens in your email or messaging app so you have a record of what you sent. We will reply within one business day.",
    whatsappLabel: "Or message us on WhatsApp",
  },

  footer: {
    blurb:
      "A specialty coffee roastery and café. Origin transparency, small-batch roasting, brewed with intention.",
    copyrightName: "Summit Peak Coffee Co.",
    // Update this value each year (kept static so the page stays prerenderable).
    copyrightYear: 2026,
  },
} as const;

export type Config = typeof config;
