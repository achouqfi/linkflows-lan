import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ModernNavbar from '@/components/ModernNavbar';
import Footer from '@/components/Footer';

export const metadata = {
  metadataBase: new URL('https://linkflows.com'), 
  title: {
    default: "LinkFlows | AI-Powered Content Creation & Social Growth",
    template: '%s | LinkFlows'
  },
  description: "Transform your content strategy with AI-powered blog posts, automated Pinterest growth, and viral trend analysis. All-in-one platform for modern content creators.",
  keywords: [
    'content creation',
    'AI writing',
    'Pinterest automation',
    'social media growth',
    'blog optimization',
    'content analytics',
    'SEO tools',
    'viral content',
    'automated posting',
    'social media management'
  ],
  authors: [
    {
      name: 'LinkFlows',
      url: 'https://linkflows.com',
    },
  ],
  creator: 'LinkFlows',
  publisher: 'LinkFlows',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://linkflows.com',
    title: 'LinkFlows | AI-Powered Content Creation & Social Growth',
    description: 'Transform your content strategy with AI-powered blog posts, automated Pinterest growth, and viral trend analysis.',
    siteName: 'LinkFlows',
    images: [
      {
        url: '/preview.png',
        width: 1200,
        height: 630,
        alt: 'LinkFlows Platform Preview',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' }
    ]
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ModernNavbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}