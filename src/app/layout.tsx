import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#913428",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Plumber in Everett, WA | Danika Plumbing & Electric | 24/7 Service",
  description:
    "Plumber in Everett, WA for 24/7 emergency plumbing, drain cleaning, sewer repair, water heaters, and residential electrical. Licensed WA contractor DANIKPL839PF. Call (425) 374-1557.",
  keywords: [
    "Plumber in Everett WA",
    "Emergency plumber Everett",
    "Drain cleaning Everett",
    "Water heater repair Everett",
    "Sewer repair Everett",
    "Electrician Everett WA",
    "Plumbing services Snohomish County",
    "Danika Plumbing & Electric",
  ],
  authors: [{ name: "Danika Plumbing & Electric" }],
  creator: "Danika Plumbing & Electric",
  publisher: "Danika Plumbing & Electric",
  metadataBase: new URL("https://danikaplumbing.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Plumber in Everett, WA | Danika Plumbing & Electric | Available 24/7",
    description:
      "Licensed Everett plumbers since 2009. 24/7 emergency plumbing, water heaters, drain cleaning, repiping and electrical panel upgrades. Upfront written pricing and 1-year warranty.",
    url: "https://danikaplumbing.com/",
    siteName: "Danika Plumbing & Electric",
    images: [
      {
        url: "/images/danika-seattle.jpg",
        width: 1200,
        height: 630,
        alt: "Danika Plumbing & Electric Service Van and Professional Crew in Everett WA",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Plumber in Everett, WA | Danika Plumbing & Electric",
    description:
      "24/7 Emergency Plumbing & Electrical in Everett & Snohomish County. Written price before work starts, 1-year warranty. Call (425) 374-1557.",
    images: ["/images/danika-seattle.jpg"],
    creator: "@DanikaCo",
  },
  icons: {
    icon: "/images/danika-original-logo.png",
    apple: "/images/danika-original-logo.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Plumber", "Electrician", "HomeAndConstructionBusiness"],
        "@id": "https://danikaplumbing.com/#business",
        "name": "Danika Plumbing & Electric",
        "legalName": "Danika Plumbing, LLC",
        "url": "https://danikaplumbing.com/",
        "logo": "https://danikaplumbing.com/images/danika-original-logo.png",
        "image": "https://danikaplumbing.com/images/danika-seattle.jpg",
        "telephone": "+14253741557",
        "email": "office@danikaplumbing.com",
        "priceRange": "$$",
        "slogan": "Quick Service. Quality Materials. Realistic Prices.",
        "foundingDate": "2009",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "11015 Airport Rd",
          "addressLocality": "Everett",
          "addressRegion": "WA",
          "postalCode": "98204",
          "addressCountry": "US",
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 47.8978948,
          "longitude": -122.2639772,
        },
        "hasCredential": {
          "@type": "EducationalOccupationalCredential",
          "name": "Washington State Contractor License",
          "identifier": "DANIKPL839PF",
          "url": "https://secure.lni.wa.gov/verify/Detail.aspx?UBI=&LIC=DANIKPL839PF",
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          "opens": "00:00",
          "closes": "23:59",
        },
        "areaServed": [
          { "@type": "City", "name": "Everett" },
          { "@type": "City", "name": "Mukilteo" },
          { "@type": "City", "name": "Mill Creek" },
          { "@type": "City", "name": "Lynnwood" },
          { "@type": "City", "name": "Edmonds" },
          { "@type": "City", "name": "Marysville" },
          { "@type": "City", "name": "Lake Stevens" },
          { "@type": "City", "name": "Snohomish" },
          { "@type": "City", "name": "Seattle" },
          { "@type": "AdministrativeArea", "name": "Snohomish County" },
          { "@type": "AdministrativeArea", "name": "King County" },
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.7",
          "reviewCount": "699",
          "bestRating": "5",
          "worstRating": "1",
        },
      },
    ],
  };

  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white text-danika-charcoal antialiased flex flex-col">
        {children}
      </body>
    </html>
  );
}


