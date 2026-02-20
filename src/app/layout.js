import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

// Ee Metadata Google ki chala mukhyam
export const metadata = {
  metadataBase: new URL('https://snaponwheels.in'),
  title: {
    default: "SnapOnWheels | #1 AI Photo Booth in Hyderabad",
    template: "%s | SnapOnWheels"
  },
  description: "Elevate your events with SnapOnWheels AI-driven photo booths. Perfect for Weddings, Corporate Events, and College Fests. Book Selfie, Magic, & Vibe modes today!",
  keywords: ["Photo booth Hyderabad", "Wedding Photo Booth", "AI Photo Booth", "Event Photography", "SnapOnWheels", "Magic Mirror Photo Booth", "Selfie Booth", "instasnap", "fotozine", "photobooth", "photo studio", "photo booth rental", "photo booth for rent"],
  icons: {
    icon: [
      { url: '/images/camera-icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/camera-icon.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/images/camera-icon.png',
  },
  openGraph: {
    title: "SnapOnWheels - The Ultimate Photo Booth Experience",
    description: "Make your event unforgettable with our AI Photo Booths.",
    url: 'https://snaponwheels.in',
    siteName: 'SnapOnWheels',
    images: [{ url: '/images/camera-icon.png', width: 512, height: 512 }],
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

// "Sitelinks" (Udemy laaga links ravalante) Structured Data kavali
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  'name': 'SnapOnWheels',
  'image': 'https://snaponwheels.in/images/SnaponWheelsLogo.png',
  'description': 'Premium AI-driven photo booth services for weddings and events.',
  'url': 'https://snaponwheels.in',
  'address': {
    '@type': 'PostalAddress',
    'addressLocality': 'Hyderabad',
    'addressRegion': 'Telangana',
    'addressCountry': 'IN'
  },
  'priceRange': '$$'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Ee script valla Google ki nee business clear ga artham avuthundi */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main style={{ minHeight: '100vh', paddingTop: '80px' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
