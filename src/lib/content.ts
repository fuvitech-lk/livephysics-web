/**
 * Single source of truth for all site copy, migrated from livephysics.lk
 * (publications/shop intentionally excluded — this is a landing page).
 *
 * Provenance:
 *  - `philosophy.lines` is verbatim brand copy from the live site.
 *  - Contact details are verbatim from the live site footer.
 *  - Testimonials are realistic SAMPLE copy (the live site used generic
 *    template testimonials); replace with real student quotes before launch.
 *  - Stat figures are placeholders — confirm real numbers with the client.
 */

export const site = {
  name: "LivePhysics",
  tagline: "Real A/L Physics — online and in class. English medium.",
  phoneDisplay: "078 882 2226",
  phoneRaw: "0788822226",
  phoneIntl: "+94788822226",
  email: "hello@livephysics.lk",
  whatsapp: "https://wa.me/94788822226",
  url: "https://livephysics.lk",
} as const;

export const nav = [
  { label: "Home", href: "#home" },
  { label: "Live Classes", href: "#classes" },
  { label: "The App", href: "#app" },
  { label: "Why Us", href: "#why" },
  { label: "Founder", href: "#founder" },
  { label: "Approach", href: "#approach" },
  { label: "Contact", href: "#contact" },
] as const;

export const hero = {
  eyebrow: "G.C.E. Advanced Level Physics · English Medium",
  title: ["Physics, taught the way", "it should be"],
  highlight: "experienced",
  subtitle:
    "The only programme in the country built to cover the full A/L Physics syllabus in English medium — taught through genuinely interactive classes, online and in person, never just streamed video.",
  primaryCta: { label: "Join Live Classes", href: "#contact" },
  secondaryCta: { label: "See how it works", href: "#classes" },
} as const;

export const about = {
  eyebrow: "Education for everyone",
  title: "Learn from anywhere in the world",
  body: "On desktop, tablet or phone — quality A/L Physics shouldn't depend on where you live or which school you attend. LivePhysics brings a complete, structured English-medium programme to every student, wherever they are.",
  points: [
    "Full A/L Physics syllabus — all 11 units",
    "English medium, built for self-paced mastery",
    "Past papers from 1980 to the latest year",
  ],
} as const;

export const liveClasses = {
  eyebrow: "Live Classes with LivePhysics",
  title: "We do not stream classroom teaching",
  lead: "Do you still believe e-learning means live-streaming a classroom whiteboard? We do not do the same.",
  body: "LivePhysics classes are designed for the screen — interactive, visual, and built around how you actually learn physics online. Concepts you can see move, questions answered in real time, and a pace that respects you.",
  features: [
    {
      title: "Interactive, not broadcast",
      body: "Every session is two-way — simulations, live problem-solving and questions answered as they come up.",
    },
    {
      title: "Built for the screen",
      body: "Lessons re-designed for online learning, not a camera pointed at a classroom board.",
    },
    {
      title: "Concepts you can see",
      body: "Abstract physics made visual with animated models so the intuition actually sticks.",
    },
    {
      title: "Learn on any device",
      body: "Desktop, tablet or phone — pick up exactly where you left off, anywhere.",
    },
  ],
} as const;

/** LivePhysics' own technology stack — the platform behind the programme. */
export const platform = {
  eyebrow: "Fully loaded with the latest technology",
  title: "Not just classes — a complete learning platform",
  body: "LivePhysics is built on its own technology end to end, so every part of how you learn works together.",
  screenshot: "/lms.jpg",
  screenshotAlt: "The LivePhysics LMS — student sign-in portal",
  screenshotUrl: "lms.livephysics.lk",
  pillars: [
    {
      title: "Our own LMS",
      body: "A purpose-built learning management system — lessons, materials and assessments in one place, made for the A/L Physics journey.",
    },
    {
      title: "AI learning assistant",
      body: "SDee.ai, an in-house AI study buddy that answers questions and adapts to how each student learns.",
    },
    {
      title: "Progress-tracking app",
      body: "A mobile app that measures the studying process itself — what's done, what's next, and how preparation is trending.",
    },
  ],
} as const;

/**
 * The LivePhysics mobile app + SDee.ai study buddy.
 * NOTE: store URLs are placeholders — replace with the real App Store /
 * Play Store listing links before launch.
 */
export const appPromo = {
  eyebrow: "Beyond the classroom",
  title: "Your studying, measured and motivated",
  body: "The LivePhysics app turns intent into a habit — it keeps students productive, motivated, and aware of exactly how their preparation is progressing.",
  features: [
    {
      title: "Stay productive",
      body: "Structured study sessions and reminders that keep momentum going between classes.",
    },
    {
      title: "Stay motivated",
      body: "Streaks, goals and nudges that make consistent study feel rewarding.",
    },
    {
      title: "Measure progress",
      body: "See how your preparation is actually trending — not guesswork, real signal.",
    },
  ],
  sdee: {
    name: "SDee.ai",
    tagline: "Your personalised study buddy",
    body: "An AI study companion built into the app — SDee.ai adapts to how you learn, answers your physics questions, and guides what to study next.",
    sampleQuestion: "Why does a charged particle move in a circle in a magnetic field?",
    sampleAnswer:
      "Because the magnetic force always acts perpendicular to its velocity — constant speed, constant turning. Want the derivation for the radius?",
  },
  stores: {
    appStore: "https://apps.apple.com/", // TODO: real LivePhysics App Store URL
    playStore: "https://play.google.com/store/apps", // TODO: real Play Store URL
  },
} as const;

/** Verbatim brand philosophy from the live site's "1000 Reasons why?" panel. */
export const philosophy = {
  eyebrow: "1000 Reasons why?",
  lines: [
    "It's not about me but about them.",
    "There are no endorsements but only their stories.",
    "It's not only the results but the success.",
    "There are no best teachers — only the best students.",
  ],
  closing: "We measure ourselves by what our students become.",
} as const;

/**
 * Founder. Name/title confirmed by the client; bio lines are
 * mission-aligned summary copy (no fabricated credentials) — confirm /
 * expand with the client before launch.
 */
export const founder = {
  eyebrow: "The mind behind the method",
  name: "Dr. Sanjeewa Dharmawardhana",
  role: "Founder · LivePhysics",
  image: "/founder.png",
  bio: [
    "LivePhysics began with one conviction: every student deserves to truly understand physics — not merely memorise it — in clear English medium, wherever they happen to be.",
    "That belief shaped an entire programme — from a syllabus-complete book series to live classes genuinely built for the screen, not a camera pointed at a whiteboard.",
  ],
  quote: "It's not about me — it's about them.",
} as const;

export const stats = [
  { value: 12000, suffix: "+", label: "Live sessions delivered" },
  { value: 3500, suffix: "+", label: "Students taught" },
  { value: 11, suffix: "", label: "A/L Physics units covered" },
  { value: 98, suffix: "%", label: "Student satisfaction" },
] as const;

export const approach = {
  eyebrow: "How LivePhysics works",
  title: "A complete path from first concept to exam hall",
  steps: [
    {
      step: "01",
      title: "Interactive live lessons",
      body: "Structured, screen-native classes covering every unit of the A/L syllabus with real-time interaction.",
    },
    {
      step: "02",
      title: "Doubt-clearing sessions",
      body: "Dedicated time to ask anything — no question too small, nothing left unclear before you move on.",
    },
    {
      step: "03",
      title: "Past-paper mastery",
      body: "Work through papers from 1980 to the present with guided strategy and model approaches.",
    },
    {
      step: "04",
      title: "Exam strategy & mentoring",
      body: "Beyond content — timing, technique and the mindset that turns understanding into results.",
    },
  ],
} as const;

/**
 * SAMPLE testimonials — replace with real student quotes before launch.
 * Add `image: "/students/<file>"` to a row to show a real photo; otherwise
 * a brand initials avatar is shown.
 */
export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  image?: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "I finally understood physics instead of memorising it. The live sessions feel like the teacher is right next to you.",
    name: "Tharindu P.",
    role: "2024 A/L · Colombo",
  },
  {
    quote:
      "Studying in English medium from a small town felt impossible until LivePhysics. The animated concepts changed everything.",
    name: "Senuri J.",
    role: "2023 A/L · Kurunegala",
  },
  {
    quote:
      "The past-paper sessions from 1980 onwards were gold. I walked into the exam having already seen every kind of question.",
    name: "Mohamed R.",
    role: "2024 A/L · Kandy",
  },
  {
    quote:
      "It's genuinely interactive — not a recorded classroom. Doubt-clearing time meant I never moved on while still confused.",
    name: "Dilini W.",
    role: "2023 A/L · Galle",
  },
  {
    quote:
      "Learning from my phone between everything else made it actually doable. The structure kept me on track all year.",
    name: "Kavinda S.",
    role: "2024 A/L · Jaffna",
  },
];

/** Institutes where LivePhysics classes are physically held (client-supplied logos). */
export const institutes = {
  eyebrow: "On the ground",
  title: "Where LivePhysics classes are held",
  body: "Beyond the screen, LivePhysics runs with leading institutes across the country.",
  logos: [
    { name: "Sadhana", src: "/institutes/sadhana.png" },
    { name: "Sigma Institute", src: "/institutes/sigma.png" },
    { name: "SyZyGy", src: "/institutes/syzygy.png" },
    { name: "Siyochem", src: "/institutes/siyochem.png" },
  ],
} as const;

export const contact = {
  eyebrow: "Get started",
  title: "Ready to experience physics taught the right way?",
  body: "Join the next intake — online or in person at our partner institutes. We'll walk you through the programme and answer every question.",
} as const;

export const footer = {
  blurb:
    "The only book-backed programme covering the full G.C.E. Advanced Level Physics syllabus in English medium — online and in class.",
  credit: {
    label: "Designed & developed by",
    name: "FUVITECH",
    href: "https://fuvitech.dev",
  },
  columns: [
    {
      title: "Explore",
      links: [
        { label: "Live Classes", href: "#classes" },
        { label: "The App & SDee.ai", href: "#app" },
        { label: "Why LivePhysics", href: "#why" },
        { label: "Our Approach", href: "#approach" },
      ],
    },
    {
      title: "Contact",
      links: [
        { label: "Hotline · 078 882 2226", href: "tel:+94788822226" },
        { label: "hello@livephysics.lk", href: "mailto:hello@livephysics.lk" },
        { label: "WhatsApp", href: "https://wa.me/94788822226" },
      ],
    },
  ],
} as const;
