// All site copy below is taken word-for-word from https://aspireitpro.com/
// (Home, About Us, Contact). Edit here to change text across the whole site.
const U = "https://aspireitpro.com/wp-content/uploads/";

// ---- YOUR DETAILS ----
export const PHONE = "9988776655";
export const EMAIL = "aspireit@gmail.com";

export const HERO_CARDS = [
  { n: "Lydia Lucero", t: "Cordially convinced did incommode existence.", img: U + "2024/06/testimonial-1.jpg" },
  { n: "Anthony Taylor", t: "Cordially convinced did incommode existence.", img: U + "2024/06/testimonial-3.jpg" },
];

export const SERVICES_INTRO = {
  eyebrow: "What We Offer",
  title: "Transforming Ideas into Reality",
  text: "We deliver tailored IT solutions to drive innovation and growth. From custom software to cybersecurity, our services empower businesses to thrive in the digital era. Let’s build your future together.",
};
export const SERVICES = [
  { id: "software", name: "Software Development", icon: U + "2025/11/SoftwareDevelopment-icon.webp", text: "Transform your vision into reality with our custom software development services. We create scalable, secure, and user-friendly applications that drive efficiency and innovation for your business." },
  { id: "enterprise", name: "Enterprise Solutions", icon: U + "2025/11/Enterprise-solutions-icon.webp", text: "Streamline your operations with our enterprise-grade solutions. We design and implement systems that enhance productivity, reduce costs, and ensure seamless integration across your organization." },
  { id: "design", name: "UI/UX Design", icon: U + "2025/11/UI-UX-Design-icon.webp", text: "Deliver exceptional user experiences with our intuitive UI/UX designs. We focus on creating visually appealing and functional interfaces that engage users and boost satisfaction." },
  { id: "qa", name: "Assurance and Testing", icon: U + "2025/11/AssuranceTesting-icon.webp", text: "Ensure flawless performance with our comprehensive QA and testing services. We identify and resolve issues early, delivering reliable and bug-free software solutions." },
  { id: "support", name: "Maintenance and Support", icon: U + "2025/11/MaintenanceSupport-icon.webp", text: "Keep your systems running smoothly with our 24/7 maintenance and support services. We provide timely updates, troubleshooting, and optimization to ensure uninterrupted operations." },
  { id: "devops", name: "DevOps Services", icon: U + "2025/11/Devops-Services-icon.webp", text: "Accelerate your development lifecycle with our DevOps expertise. We implement automation, continuous integration, and deployment to enhance collaboration and efficiency." },
  { id: "security", name: "Security Solutions", icon: U + "2025/11/Securitysolutions-icon.webp", text: "Protect your business from cyber threats with our advanced security solutions. We offer end-to-end protection, from vulnerability assessments to real-time monitoring." },
  { id: "data", name: "Big Data Analytics", icon: U + "2025/11/Big-DataAnalysis-icon.webp", text: "Unlock the power of data with our big data analytics services. We help you make data-driven decisions by analyzing trends, patterns, and insights to drive growth." },
];

export const PROCESS = {
  title: "How We Deliver Results",
  button: "See How it Works",
  items: [
    ["Cutting-Edge Tools & Technologies", "We use the latest tools and technologies to deliver solutions that are efficient, scalable, and future-ready. From AI to cloud platforms, we stay ahead of the curve to serve you better.", "M13 2L4 14h7l-1 8 9-12h-7l1-8z"],
    ["Tailored Software Solutions", "Every business is unique, and so are our solutions. We work closely with you to understand your needs and deliver software that fits your goals perfectly.", "M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5"],
    ["Scalable Web Applications", "Build dynamic, responsive, and scalable web applications with our expert team. We ensure your digital presence is robust, secure, and ready to grow with your business.", "M3 5h18v12H3zM8 21h8M12 17v4"],
    ["AI & Machine Learning Innovations", "Leverage the power of AI and machine learning to automate processes, predict trends, and gain a competitive edge. Our solutions are designed to transform your business operations.", "M12 8a4 4 0 100 8 4 4 0 000-8zM12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"],
  ],
};

const LOREM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.";
export const PORTFOLIO = {
  eyebrow: "Portfolio",
  title: "Our Latest Projects",
  text: ["At distant inhabit amongst by. Appetite welcomed interest not. Estimable education for disposing pronounce her.", "John size good plan sent old roof own. Inquietude saw understood his friendship frequently yet."],
  filters: ["Cloud Services", "Enterprise Solutions"],
  button: "View All Projects",
  items: [
    ["Application Development", "Enterprise Solutions", 1, "grid", ["#1f5ca6", "#3b5fad"]],
    ["Cloud Migration", "Cloud Services", 2, "orbs", ["#3b5fad", "#ee3159"]],
    ["Management and Support", "Enterprise Solutions", 3, "bars", ["#0b1a3a", "#1f5ca6"]],
    ["Serverless Computing", "Cloud Services", 4, "nodes", ["#ee3159", "#3b5fad"]],
    ["ERP Systems", "Enterprise Solutions", 5, "bars", ["#1f5ca6", "#0b1a3a"]],
    ["CRM Solutions", "Enterprise Solutions", 6, "orbs", ["#ee3159", "#ff7d98"]],
    ["Business Intelligence", "Cloud Services", 7, "grid", ["#3b5fad", "#1f5ca6"]],
    ["DevOps Services", "Cloud Services", 8, "nodes", ["#0b1a3a", "#ee3159"]],
  ].map(([t, c, n, k, a]) => ({ t, c, d: LOREM, k, a, img: `${U}2024/06/Portfolio-${n}.jpg` })),
};

const TL = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet cursus volutpat. Aliquam sit amet ligula et justo tincidunt laoreet non vitae lorem. Aliquam porttitor tellus enim, eget commodo augue porta ut. Maecenas lobortis ligula vel tellus sagittis ullamcorperv vestibulum pellentesque cursutu.";
export const TESTIMONIALS = {
  eyebrow: "Testimonials",
  title: "Hear from Our Clients",
  items: [
    { n: "Lydia Lucero", r: "Sony CEO", q: TL, img: U + "2024/06/testimonial-1.jpg" },
    { n: "Tom Jones", r: "Tesla CMO", q: TL, img: U + "2024/06/testimonial-4.jpg" },
    { n: "Mark Wilson", r: "Apple Manager", q: TL, img: U + "2024/06/testimonial-2.jpg" },
    { n: "Bob Smith", r: "Doctor", q: TL, img: U + "2024/06/testimonial-3.jpg" },
  ],
  logos: [5, 4, 6, 3, 2, 1].map((n) => U + `2024/06/Logos-${n}.png`),
};

export const HOME_CONTACT = {
  eyebrow: "Contact Us",
  title: "Don't Hesitate to Contact Us",
  text: "Unpacked now declared put you confined daughter improved. Celebrated imprudence few interested especially reasonable off one. Wonder bed elinor family secure met. It want gave west into high no in. Depend repair met before man admire see and. An he observe be it covered delight hastily message. Margaret no ladyship.",
};

export const BLOG = {
  eyebrow: "Insights & Updates",
  title: "Stay Ahead with Our Insights",
  text: "Discover the latest trends, tips, and innovations in the tech world. Our blog is your go-to resource for staying informed and inspired in the ever-evolving digital landscape.",
  tabs: ["All Posts", "Case Studies", "Cybersecurity", "DevOps", "Software Development"],
  // First 3 posts are from your live site. The other 6 are PLACEHOLDERS so every tab has cards:
  // replace their titles/excerpts with your real posts (or delete them).
  posts: [
    { t: "How to Manage Software Projects Successfully", c: "Software Development", img: null, a: ["#1f5ca6", "#3b5fad"] },
    { t: "Essential Skills for Aspiring Software Developers", c: "Software Development", img: null, a: ["#ee3159", "#3b5fad"] },
    { t: "Why Open Source Software is Gaining Popularity", c: "Software Development", img: U + "elementor/thumbs/Blog-2-r10mk2ywv2bfggoxf3l9thctwlqv2v7rhp8dmqgxx4.jpg", a: ["#0b1a3a", "#1f5ca6"] },
    { t: "How a Retail Chain Cut Reporting Time with Custom Software", c: "Case Studies", img: null, a: ["#3b5fad", "#ee3159"], k: "bars" },
    { t: "Moving Legacy Systems to the Cloud: A Success Story", c: "Case Studies", img: null, a: ["#1f5ca6", "#0b1a3a"], k: "orbs" },
    { t: "Five Cybersecurity Practices Every Business Needs", c: "Cybersecurity", img: null, a: ["#ee3159", "#0b1a3a"], k: "nodes" },
    { t: "Why Regular Vulnerability Assessments Matter", c: "Cybersecurity", img: null, a: ["#0b1a3a", "#3b5fad"], k: "grid" },
    { t: "Getting Started with CI/CD for Faster Releases", c: "DevOps", img: null, a: ["#3b5fad", "#0b1a3a"], k: "nodes" },
    { t: "How Automation Reduces Deployment Errors", c: "DevOps", img: null, a: ["#ee3159", "#3b5fad"], k: "bars" },
  ].map((p) => ({ ...p, date: "June 19, 2024", x: "Him rendered may attended concerns jennings reserved now. Sympathize did now preference..." })),
};

export const CTA = {
  title: "Let’s Build the Future Together",
  text: "Partner with Aspire IT Pro and take the first step toward a smarter, more efficient future. Whether you need custom software, AI solutions, or cybersecurity, we’re here to help you succeed. Let’s collaborate and create something extraordinary.",
  button: "Get Free Proposal",
};

export const FOOTER = {
  headline: "Empowering Your Business with Cutting-Edge Software Solutions for a Digital Future",
  button: "Get Started",
  about: "We are your trusted partner in digital transformation. Specializing in cutting-edge software, AI, and cybersecurity solutions, we help businesses innovate, grow, and thrive in a competitive world.",
  community: "Join Our Community",
  note: "We will only send relevant news and no spam",
  ok: "You have been successfully Subscribed!",
  fail: "Ops! Something went wrong, please try again.",
  credit: "Discovered by: pulsedigimedia.com",
  creditUrl: "https://pulsedigimedia.com",
  copy: "© 2026 All Rights Reserved to ASPIRE IT PRO",
};

export const ABOUT = {
  eyebrow: "About Us",
  title: "Your Trusted Technology Partner",
  sub: "Why You Should Choose Aspire IT Pro",
  text: "We are more than just an IT company—we are your partners in innovation and growth. With a passion for technology and a commitment to excellence, we deliver cutting-edge solutions that empower businesses to thrive in the digital age. From custom software development to AI-driven insights, we help you stay ahead of the curve and achieve your goals.",
  // TODO: the live site animates these counters, so the final numbers weren't readable. Put your real figures here.
  stats: [{ l: "Project Done", to: 150, s: "+" }, { l: "Happy Clients", to: 98, s: "%" }, { l: "Year in Business", to: 8, s: "+" }],
  button: "What we do",
  img: U + "2025/11/Technologypartner.webp",
  journey: {
    eyebrow: "Milestones That Define Us",
    title: "Our Journey",
    text: "Our journey at Aspire IT Pro is a testament to our commitment to innovation and excellence. Here’s a look at the key milestones that have shaped our growth and success",
    items: [
      ["01", "Reality", "Vision to Reality", "It all started with a vision to bridge the gap between technology and business needs. We laid the foundation for Aspire IT Pro by identifying the challenges faced by modern enterprises and crafting solutions to address them.", U + "2025/11/Roadmaps-4.webp"],
      ["02", "Expertise", "Building Expertise", "We invested in building a team of skilled professionals and honing our expertise in software development, AI, and cloud solutions. This phase marked the beginning of our journey toward becoming industry leaders.", U + "2025/11/Roadmaps-2.webp"],
      ["03", "Impact", "Delivering Impact", "With a focus on quality and precision, we began delivering solutions that made a real difference. Our projects helped businesses streamline operations, enhance efficiency, and achieve their goals.", U + "2025/11/Roadmaps-3.webp"],
      ["04", "Innovation", "Continuous Innovation", "Innovation is at the heart of everything we do. We continuously evaluate and improve our solutions to ensure they remain relevant, effective, and aligned with the evolving needs of our clients.", U + "2025/11/Roadmap-1.webp"],
    ],
  },
  team: {
    eyebrow: "Team",
    title: "Our Professional Team",
    text: PORTFOLIO.text,
    members: [["Cynthia Duncan", 4], ["Ahmad Murray", 2], ["Emmie Schaefer", 5], ["Nicolas Doherty", 3], ["Belle Fletcher", 1], ["Magnus Gilmore", 7]].map(([n, i]) => ({ n, r: "Sony CEO", d: "Curabitur laoreet cursus volutpat. Aliquam sit amet ligula.", img: `${U}2024/06/Teams-${i}.jpg` })),
  },
  mission: {
    eyebrow: "What Guides Us",
    title: "Our Mission and Values",
    text: "At Aspire IT Pro, our mission is to empower businesses with technology that drives growth, innovation, and success. We are guided by a set of core values that define who we are and how we work:",
    points: [
      "Your success is our priority. We listen, understand, and deliver solutions that meet your unique needs.",
      "We embrace new ideas and technologies to stay ahead of the curve and deliver cutting-edge solutions.",
      "We believe in transparency, honesty, and ethical practices in everything we do.",
      "We work closely with our clients and partners to achieve shared goals and drive success.",
      "We are committed to delivering high-quality solutions that exceed expectations.",
    ],
    button: "See more",
    img: U + "2025/11/OurMission.webp",
  },
  customers: {
    title: "What Our Lovely Customers Say",
    items: [["Maggie Smith", "Sony CEO", 1], ["Tommy Bradshaw", "Tesla CMO", 4], ["Lucille Mccarty", "Apple Manager", 2], ["Austin Burgess", "Doctor", 3]].map(([n, r, i]) => ({
      n, r, img: `${U}2024/06/testimonial-${i}.jpg`,
      q: "Oh acceptance apartments up sympathize astonished delightful. Waiting him new lasting towards. Continuing melancholy especially so to. Me unpleasing impossible in attachment announcing so astonished. What ask leaf may nor upon door. Tended remain my do stairs. Oh smiling amiable am so visited cordial in offices hearted.",
    })),
  },
};

export const CONTACT = {
  eyebrow: "Contact",
  title: "Do You Need Help?",
  text: ["Good draw knew bred ham busy his hour.", "Ask agreed answer rather joy nature admire wisdom."],
  send: "Send",
  address: "507 S 1st Ave Morton, Illinois(IL), 61550",
  features: [["No Time Lost", "M12 6v6l4 2M12 3a9 9 0 100 18 9 9 0 000-18z"], ["Stay Online", "M5 12a10 10 0 0114 0M8.500 15.500a5 5 0 017 0M12 19h.01"], ["Daily Backup", "M4 7c0-1.700 3.600-3 8-3s8 1.300 8 3-3.600 3-8 3-8-1.300-8-3zM4 7v10c0 1.700 3.600 3 8 3s8-1.300 8-3V7"]].map(([t, p]) => ({ t, p, d: "Moonlight age depending bed led therefore sometimes preserved exquisite she. An fail up so shot leaf wise in." })),
  info: {
    title: "Communication Information",
    text: "Connect with us effortlessly! Whether you need support, have questions, or seek collaboration, we’re here to help. Your success drives our passion and commitment.",
    lines: ["Aspiresol Computer Systems Consultancies Co. LLC.,", "9-30, Misa Business Center, Wavez Residence,", "Wadi Al Safa 5, Liwan, Dubai Silicon Oasis, Dubai"],
  },
  guarantee: { a: "Stop worries, you're covered with", b: "30 Days Money Back Guarantee", btn: "Get Started", note: "*cancelation must be within a maximum of 30 days" },
};
