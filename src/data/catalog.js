// A tiny neutral placeholder — used only if the live site-images system
// (src/data/siteImages.js) hasn't loaded yet. In practice this is rarely
// seen since that system always resolves to a spinner, the real photo, or
// its own "No Preview" placeholder.
const PLACEHOLDER =
  'data:image/svg+xml,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="900" height="700" viewBox="0 0 900 700"><rect width="900" height="700" fill="#E4E8EE"/></svg>'
  )

export const PRODUCTS = [
  {
    id: 'webdev',
    name: 'Website Development',
    spec: 'Starting from ₹6,999',
    image: PLACEHOLDER,
    points: [
      'Responsive design for mobile, tablet and desktop',
      'Fast-loading, SEO-friendly pages',
      'Business, portfolio, or e-commerce websites',
      'Post-launch support and easy content updates',
    ],
  },
  {
    id: 'appdev',
    name: 'App Development',
    spec: 'Starting from ₹19,999',
    image: PLACEHOLDER,
    points: [
      'Android and iOS apps from a single codebase',
      'Clean, intuitive UI/UX design',
      'Backend, database and API integration included',
      'Play Store / App Store publishing support',
    ],
  },
  {
    id: 'resume',
    name: 'Resume Building',
    spec: 'Starting from ₹499',
    image: PLACEHOLDER,
    points: [
      'ATS-friendly, recruiter-ready formatting',
      'Tailored to your target role and industry',
      'LinkedIn profile optimization available',
      'Unlimited revisions until you are satisfied',
    ],
  },
]

export const WHY_CHOOSE_US = [
  { title: 'Modern Technology', desc: 'We build using the latest, most reliable frameworks and tools in the industry.' },
  { title: 'On-Time Delivery', desc: 'Projects delivered within committed timelines, without compromising quality.' },
  { title: 'Affordable Pricing', desc: 'Transparent, budget-friendly packages tailored for startups and individuals.' },
  { title: 'Dedicated Support', desc: 'Ongoing support and maintenance even after your project goes live.' },
  { title: 'Client-Centric Approach', desc: 'Every project is built around your specific goals and target audience.' },
  { title: 'Quality Assurance', desc: 'Rigorous testing at every stage to ensure a bug-free, polished final product.' },
]

// Each service has its own detail page at /services/<id>.
// Prices are placeholders — edit them here anytime.
export const SERVICES = [
  {
    id: 'website-design',
    icon: 'Globe',
    title: 'Website Design & Development',
    desc: 'Custom business, portfolio and e-commerce websites built to look great and load fast.',
    headline: 'Websites that represent your business and bring in customers.',
    overview:
      'We design and develop custom websites for businesses, professionals and startups. Every site is built from scratch around your brand, works smoothly on mobile, tablet and desktop, and is structured so search engines and visitors can find what they need quickly.',
    startingPrice: 'Starting from ₹6,999',
    idealFor: 'Businesses, freelancers, coaches, clinics, shops and startups',
    features: [
      'Custom design — no copy-paste templates',
      'Fully responsive on every screen size',
      'Fast loading and SEO-friendly structure',
      'Contact form, WhatsApp and Google Maps integration',
      'Easy content updates after launch',
      'Hosting and domain setup guidance',
    ],
  },
  {
    id: 'app-development',
    icon: 'Smartphone',
    title: 'Mobile App Development',
    desc: 'Android and iOS apps designed around a smooth, intuitive user experience.',
    headline: 'Mobile apps that people actually enjoy using.',
    overview:
      'We build Android and iOS apps from a single codebase, so you launch on both platforms faster and at a lower cost. From planning the screens to connecting the backend, we take care of the complete journey up to publishing on the Play Store and App Store.',
    startingPrice: 'Starting from ₹19,999',
    idealFor: 'Startups, service businesses, delivery and booking ideas, internal tools',
    features: [
      'Android and iOS from one codebase',
      'Clean, intuitive screen design',
      'Login, profiles and notifications',
      'Backend, database and API integration',
      'Testing on real devices before release',
      'Play Store and App Store publishing support',
    ],
  },
  {
    id: 'ecommerce',
    icon: 'ShoppingCart',
    title: 'E-commerce Solutions',
    desc: 'Online stores with secure payments, product catalogs and order management.',
    headline: 'An online store that is ready to take orders.',
    overview:
      'We set up complete online stores with product catalogs, carts, secure checkout and an admin area to manage orders. The store is designed to make buying simple for your customers and managing the business simple for you.',
    startingPrice: 'Starting from ₹14,999',
    idealFor: 'Retail brands, home businesses, boutiques and local sellers going online',
    features: [
      'Product catalog with categories and search',
      'Cart and secure online payments',
      'Order management dashboard',
      'Mobile-first shopping experience',
      'Inventory and discount handling',
      'Training so you can manage the store yourself',
    ],
  },
  {
    id: 'ui-ux',
    icon: 'PenTool',
    title: 'UI/UX Design',
    desc: 'Clean, user-first interface design that keeps visitors engaged and converting.',
    headline: 'Interfaces that are clear, modern and easy to use.',
    overview:
      'Good design makes a product feel trustworthy and simple. We design screens for websites and apps, starting with user flows and wireframes, then moving to polished visual designs that your developers or our team can build directly.',
    startingPrice: 'Starting from ₹3,999',
    idealFor: 'Founders with an idea, businesses redesigning an old site or app',
    features: [
      'User flow and wireframe planning',
      'Modern, brand-matched visual design',
      'Mobile and desktop layouts',
      'Clickable prototype for feedback',
      'Consistent colors, fonts and components',
      'Design files ready for development',
    ],
  },
  {
    id: 'resume-linkedin',
    icon: 'FileText',
    title: 'Resume & LinkedIn Building',
    desc: 'Professional, ATS-friendly resumes and LinkedIn profiles that get noticed.',
    headline: 'A resume and profile that get you shortlisted.',
    overview:
      'Recruiters spend seconds on a resume and most companies use software to filter them first. We write and format resumes that pass those filters and read well to a human, and we can optimize your LinkedIn profile so the right opportunities find you.',
    startingPrice: 'Starting from ₹499',
    idealFor: 'Freshers, job switchers, career changers and working professionals',
    features: [
      'ATS-friendly, recruiter-ready formatting',
      'Content tailored to your target role',
      'Fresher and experienced formats',
      'LinkedIn headline and summary optimization',
      'Cover letter on request',
      'Unlimited revisions until you are satisfied',
    ],
  },
  {
    id: 'support',
    icon: 'LifeBuoy',
    title: 'Maintenance & Support',
    desc: 'Ongoing updates, bug fixes and support after your project is live.',
    headline: 'We keep your website or app running smoothly.',
    overview:
      'Launching is only the start. We provide ongoing maintenance so your website or app stays updated, secure and working properly, and we are available whenever you need a change, a fix or a new feature.',
    startingPrice: 'Starting from ₹999 / month',
    idealFor: 'Anyone with a live website or app who wants it looked after',
    features: [
      'Bug fixes and quick issue resolution',
      'Content and design updates',
      'Security and performance checks',
      'Backups and uptime monitoring',
      'Small feature additions',
      'Priority support over WhatsApp and email',
    ],
  },
]

export const PROCESS_STEPS = [
  { step: 1, title: 'Requirement Discussion', desc: 'We understand your goals, target audience and project requirements.' },
  { step: 2, title: 'Design & Planning', desc: 'Wireframes and a clear project roadmap are prepared before development starts.' },
  { step: 3, title: 'Development & Testing', desc: 'Your website, app or resume is built and thoroughly tested for quality.' },
  { step: 4, title: 'Delivery & Support', desc: 'Final delivery with ongoing support and updates as your needs grow.' },
]
