# Danika Plumbing & Electric — Homepage Redesign

Developer assignment submission for **Ethixweb**: A modernized homepage implementation for **Danika Plumbing & Electric**, based on the live website ([https://danikaplumbing.com/](https://danikaplumbing.com/)).

This project rebuilds the homepage as a responsive, component-driven Next.js application. It maintains the recognizable brand identity, service hierarchy, and business details of Danika Plumbing & Electric while improving UI structure, typography hierarchy, responsive layouts, and scroll-triggered animations.

---

## Technology Stack

Verified directly against `package.json`:

- **Next.js 15.1.0** (App Router): React framework providing server/client component separation, static prerendering, optimized image handling (`next/image`), and font optimization (`next/font/google`).
- **React 19.0.0 & React DOM 19.0.0**: Core frontend UI library.
- **TypeScript 5**: Static typing across all components, interfaces, and data schemas.
- **Tailwind CSS 3.4.1**: Utility-first CSS framework configured with Danika brand colors (`#913428`, `#73271D`, `#DF493A`, `#252525`, `#F8F6F2`).
- **Framer Motion 12.0.0**: Declarative animations for page load, viewport-triggered scroll reveals (`whileInView`), and customer testimonial transitions (`AnimatePresence`).
- **Lucide React 0.468.0**: Clean SVG icon set for navigation, service indicators, and action triggers.
- **clsx 2.1.1 & tailwind-merge 2.6.0**: Utility helpers for conditional class name composition.
- **Autoprefixer 10.6.2 & PostCSS 8**: CSS vendor prefixing and build processing.
- **ESLint 9 & eslint-config-next 15.1.0**: Code quality and Next.js linting rules.

---

## Design Approach: The 75/25 Principle

The project follows a balanced redesign strategy:

### 75% Preservation of Original Identity
- **Branding & Assets**: Retained the original Danika logo, color scheme (maroon, coral red, charcoal, off-white), and typography tone.
- **Business Information**: Preserved the contractor license number (`WA Lic. #DANIKPL839PF`), Everett address (`11015 Airport Road, Everett, WA 98204`), phone number (`(425) 374-1557`), and email (`office@danikaplumbing.com`).
- **Content & Service Hierarchy**: Retained all original plumbing and electrical service categories, Snohomish and King County service area listings, customer reviews featured on the website, and the 5-step customer workflow (*The Danika Way*).
- **Core Section Layouts**: Preserved the excavation hero image with dark overlay, emergency plumber shield banner, two-column contact section, full-width satellite map, and 3 overlapping contact cards.

### 25% UI & Experience Enhancements
- **Layout Consistency**: Refined vertical spacing, card heights, and horizontal alignment across service grids, contact cards, and section transitions.
- **Navigation Usability**: Rebuilt desktop navigation into structured multi-column dropdowns (15 plumbing services, 8 electrical services, and 6 company pages) with a scroll-fixed navbar and a slide-out mobile drawer.
- **Interactive Review Carousel**: Replaced static testimonial lists with a touch-swipe carousel supporting autoplay, manual pagination, and pause-on-hover.
- **Redesigned 4-Column Footer**: Intentionally redesigned the footer from the original centered maroon block into a structured 4-column dark charcoal layout with clear service categories and safe clearance for floating widgets, while preserving the overall brand identity and homepage structure.
- **Motion Design**: Introduced hardware-accelerated Framer Motion scroll reveals and hover elevations without altering underlying layouts.

---

## Changes Compared to the Original Website

This section details the specific differences between the original Danika Plumbing & Electric live website and this modernized Next.js implementation, categorized under the 75% identity preservation and 25% UI/UX improvement approach.

### 1. Modern Frontend Architecture
- **Original Website**: Delivered via standard server-rendered HTML templates.
- **Redesigned Homepage**: Built from the ground up using **Next.js 15 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**.
- **Why It Improves UX**: Enables modular component architecture, static pre-rendering, type safety, and optimized image delivery through `next/image`.

### 2. Spacing, Typography & Visual Consistency
- **Original Website**: Contained variable container widths, differing font sizing scales, and uneven section margins.
- **Redesigned Homepage**: Standardized max-width containers (`max-w-7xl`), a unified typography scale with crisp Inter font rendering, balanced margins, and standardized card padding while keeping Danika's authentic maroon, coral red, and warm off-white color palette.
- **Why It Improves UX**: Establishes consistent visual hierarchy, making extensive service offerings easier to read and scan.

### 3. Page-Load & Scroll-Triggered Animations
- **Original Website**: Primarily static layout with minimal interactive feedback.
- **Redesigned Homepage**: Integrated **Framer Motion** with viewport-triggered reveals (`whileInView`), subtle staggered fade-ins on load, and interactive micro-interactions (card lifts and button elevation) that respect system reduced-motion preferences.
- **Why It Improves UX**: Guides visitor attention down the page and provides tactile visual feedback without hindering accessibility.

### 4. Navigation Dropdowns & Mobile Navigation
- **Original Website**: Standard top navigation bar and basic mobile menu.
- **Redesigned Homepage**: Features multi-column categorized dropdowns with clear chevrons and hover indicators, paired with a scroll-triggered fixed navbar and a full-height touch-friendly slide-out mobile drawer with expandable accordion sub-menus.
- **Why It Improves UX**: Allows homeowners and commercial clients to access any of the 15 plumbing services or 8 electrical specialties quickly across screen sizes.

### 5. Interactive Service Tabs & Customer Testimonials Carousel
- **Original Website**: Displayed service categories in static content lists and presented customer reviews in multi-row static blocks.
- **Redesigned Homepage**: Added interactive category tabs for **"The Big Five: Plumbing & Water Systems"** to browse major categories in place, alongside a touch-swipeable **Customer Testimonials Carousel** with autoplay, pause-on-hover, and manual pagination dots.
- **Why It Improves UX**: Condenses extensive technical service descriptions into intuitive tabs and allows prospective customers to browse customer feedback interactively.

### 6. Refined Project Gallery & Embedded YouTube Video Playback
- **Original Website**: Contained static project images or external links that navigated away from the website to YouTube.
- **Redesigned Homepage**: Enhanced the **Recent Plumbing Projects Around Snohomish County** grid with side-by-side Before/After photo comparisons and integrated Danika's authentic plumbing video (*Watch Our Everett Plumbers Clear a Drain Line*, ID: `f85r98M9BW0`) directly as the third card with an in-place responsive iframe player.
- **Why It Improves UX**: Visitors can watch real Everett technicians clearing a drain line right inside the project card without losing their place on the page or navigating off-site.

### 7. Responsive Layouts Across Mobile, Tablet, and Desktop
- **Original Website**: Featured standard responsive breakpoints with occasional awkward column wrapping on mid-sized screens.
- **Redesigned Homepage**: Uses tailored responsive grids across mobile (`< 640px`), tablet (`640px – 1024px`), and desktop (`1024px+`) viewports, complemented by a persistent mobile-only bottom call bar (`StickyCallCTA`).
- **Why It Improves UX**: Delivers a seamless experience on smartphones and tablets, allowing homeowners facing plumbing emergencies to call Danika in one tap.

### 8. Structured Four-Column Footer
- **Original Website**: Centered maroon footer block with limited link categorization.
- **Redesigned Homepage**: Reorganized into a structured **4-column dark charcoal layout (`#252525`)** separating Company Information, Plumbing Services, Electrical Services, and Contact/Dispatch details, with dedicated offset clearance for floating widgets.
- **Why It Improves UX**: Provides clear site architecture at the base of the page, makes secondary navigation effortless, and prevents bottom-page widget overlap.

### 9. Persistent Floating Chatbot & Contact Drawer
- **Original Website**: Relied on in-page contact forms and standard header contact links.
- **Redesigned Homepage**: Added a collapsible bottom-right **Floating Chatbot** with one-tap action triggers (*Start Quote Online*, *Schedule Service*, *Request a Call*, *Call Contractor*, *Message Us*) and a slide-out modal **Contact Drawer** accessible from any point on the page via the fixed right-edge *"Get Help NOW"* tab.
- **Why It Improves UX**: Keeps inquiry and booking options readily available across long pages without interrupting the user's reading flow.

---

## Responsive Design

The layout adapts across standard responsive breakpoints:

| Breakpoint | Width Range | Layout Behaviour |
| :--- | :--- | :--- |
| **Mobile** | `< 640px` | Single-column cards; vertical hero stacking; full-screen slide-out mobile navigation drawer; sticky bottom call bar (`sm:hidden`). |
| **Tablet** | `640px – 1024px` | 2-column problem and service grids; 2-column footer layout; touch-enabled review carousel with visible chevron buttons. |
| **Desktop** | `1024px+` | Multi-level hover navigation dropdowns; side-by-side hero layout with left-aligned form; 3 overlapping contact cards; 4-column footer with chatbot clearance. |

*Note: Verified via desktop browser responsive emulation tools across mobile (375px / 414px), tablet (768px / 820px), and desktop (1024px / 1440px) viewport widths.*

---

## SEO and Target Keywords

### Metadata & Structured Data (`src/app/layout.tsx`)
- **Title**: `Plumber in Everett, WA | Danika Plumbing & Electric | 24/7 Service`
- **Description**: Detailed local business description highlighting emergency plumbing, sewer, water heaters, and license number.
- **Canonical URL**: `https://danikaplumbing.com/`
- **OpenGraph & Twitter Cards**: Configured with local service tags and brand preview images (`danika-seattle.jpg`).
- **Structured Data (JSON-LD)**: Schema.org graph for `Plumber`, `Electrician`, and `HomeAndConstructionBusiness` detailing address, geo-coordinates, telephone, hours, and service catalog.

### Targeted Local Keywords
- `Plumber in Everett WA` (Primary H1 and metadata focus)
- `Emergency plumber Everett`
- `Drain cleaning Everett`
- `Water heater repair Everett`
- `Sewer repair Everett`
- `Electrician Everett WA`
- `Plumbing services Snohomish County`

---

## Performance

The application is built with static page generation (`next build`) and Next.js Image component optimization to minimize render-blocking resources and layout shift.

### Google PageSpeed Insights Scores

Scores were measured using Google PageSpeed Insights on the deployed Vercel production URL ([https://danika-plumbing-homepage.vercel.app/](https://danika-plumbing-homepage.vercel.app/)) on 2 November 2026. Note that scores may vary between test runs based on network conditions and server response times.

#### Lighthouse Category Scores

| Environment | Performance | Accessibility | Best Practices | SEO |
| :--- | :---: | :---: | :---: | :---: |
| **Desktop** | 99 | 95 | 100 | 100 |
| **Mobile** | 93 | 95 | 100 | 100 |

#### Measured Performance Metrics

| Environment | First Contentful Paint (FCP) | Largest Contentful Paint (LCP) | Total Blocking Time (TBT) | Cumulative Layout Shift (CLS) |
| :--- | :---: | :---: | :---: | :---: |
| **Desktop** | 0.3 s | 0.8 s | 0 ms | 0 |
| **Mobile** | 1.2 s | 2.9 s | 0 ms | 0 |

---

## Project Structure

```text
├── public/
│   └── images/                       # Photographs, van graphics, and Danika logos
├── src/
│   ├── app/
│   │   ├── globals.css               # Tailwind directives and custom animation styles
│   │   ├── layout.tsx                # Root layout, Google Fonts, and Schema.org metadata
│   │   └── page.tsx                  # Master homepage assembling all sections
│   ├── components/
│   │   ├── Header.tsx                # Top contact bar, scroll-fixed navbar, dropdowns, and mobile menu
│   │   ├── Hero.tsx                  # Hero banner with integrated Get Help NOW form
│   │   ├── EmergencyAndBenefits.tsx  # Emergency banner with shield graphic & 4 guarantees
│   │   ├── ProblemCards.tsx          # 8 diagnostic service cards & commercial split
│   │   ├── WhyAndTestimonials.tsx    # Why Danika & touch-enabled review carousel
│   │   ├── BigFiveServices.tsx       # Tabbed core service domain explorer
│   │   ├── EveryPlumbingService.tsx  # 16-service navigation grid ("Every plumbing service, one call")
│   │   ├── DanikaWayAndProjects.tsx  # 5-step customer process, before/after case studies & YouTube card
│   │   ├── EducationalAndCosts.tsx   # Older Everett homes, water quality & electrical
│   │   ├── AreasFaqFooter.tsx        # Service areas, FAQ, Get Help 2-col, Map & 4-Column Footer
│   │   ├── FloatingChatbot.tsx       # Collapsible customer assistance widget
│   │   ├── GetHelpTab.tsx            # Fixed vertical edge tab opening drawer
│   │   ├── ContactDrawer.tsx         # Slide-out modal drawer with contact form
│   │   └── StickyCallCTA.tsx         # Persistent mobile call action bar
│   ├── context/
│   │   └── DrawerContext.tsx         # React Context managing drawer state
│   ├── data/
│   │   └── siteData.ts               # Business information, services, reviews, and FAQs
│   └── lib/
│       └── animations.tsx            # Reusable Framer Motion variants and easing curves
├── package.json                      # Dependencies and npm scripts
├── package-lock.json                 # Dependency lockfile
├── postcss.config.js                 # PostCSS configuration
├── tailwind.config.js                # Tailwind theme tokens and colors
├── tsconfig.json                     # TypeScript compiler options
└── README.md                         # Project documentation
```

---

## Installation & Setup

### Prerequisites
- **Node.js**: Version 18.18.0 or later (tested on Node.js v20+)
- **npm**: Version 9+ (bundled with Node.js)

### 1. Clone & Install
```bash
# Clone the repository
git clone <repository-url>
cd <project-folder>

# Install project dependencies
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build & Run for Production
```bash
# Generate the optimized production build
npm run build

# Start the production server locally (matches "start": "next start" in package.json)
npm start
```

---

## Implementation Notes & Disclosures

1. **Frontend-Only Form Submissions**: The contact forms in the Hero section, Two-Column section, and Slide-Out Drawer perform client-side validation and trigger simulated success states with loading delays. They do not transmit data to an external email service, backend endpoint, or CRM.
2. **Visual reCAPTCHA**: The Google reCAPTCHA element in the contact form is a frontend UI component designed to match the original Danika website layout. It does not communicate with Google's reCAPTCHA verification API.
3. **Floating Chatbot**: The floating widget provides quick access links (`tel:` links, smooth-scroll anchors, and drawer triggers). It does not connect to an automated live-chat backend or third-party messaging service.
4. **Single-Page Scope**: All navigation links and footer service items link to corresponding section anchors or external reference resources (such as the Washington Department of Labor & Industries verification portal).
