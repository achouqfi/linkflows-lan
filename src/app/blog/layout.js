import { Metadata } from 'next';

export const metadata = {
  title: 'Blog - LinkFlows',
  description: 'Stay up to date with the latest social media strategies, tips, and insights',
  openGraph: {
    title: 'Blog - LinkFlows',
    description: 'Stay up to date with the latest social media strategies, tips, and insights',
    url: 'https://linkflows.com/blog',
    siteName: 'LinkFlows',
    locale: 'en_US',
    type: 'website',
  },
};

export default function BlogLayout({ children }) {
  return children;
}