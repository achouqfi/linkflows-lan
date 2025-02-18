import BlogPageClient from './BlogPageClient';
import Script from 'next/script';

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

export default function BlogPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'LinkFlows Blog',
    description: 'Stay up to date with the latest social media strategies, tips, and insights',
    url: 'https://linkflows.com/blog',
    publisher: {
      '@type': 'Organization',
      name: 'LinkFlows',
      logo: {
        '@type': 'ImageObject',
        url: 'https://linkflows.com/logo.png'
      }
    }
  };

  return (
    <>
      <Script
        id="blog-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPageClient />
    </>
  );
}