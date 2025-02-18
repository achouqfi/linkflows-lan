import BlogPostClient from './BlogPostClient';
import Script from 'next/script';
import axios from 'axios';

export async function generateMetadata({ params }) {
  try {
    const response = await axios.get(`https://app.linkflows.com/api/blogs/${params.slug}`);
    const post = response.data.data;

    return {
      title: `${post.title} - LinkFlows Blog`,
      description: post.description,
      openGraph: {
        title: post.title,
        description: post.description,
        url: `https://linkflows.com/blog/${post.slug}`,
        siteName: 'LinkFlows',
        locale: 'en_US',
        type: 'article',
        publishedTime: post.published_at,
        modifiedTime: post.updated_at,
        authors: [post.author || 'LinkFlows'],
        tags: post.tags,
      },
    };
  } catch (error) {
    return {
      title: 'Blog Post - LinkFlows',
      description: 'Read our latest blog post about social media strategies and insights.',
    };
  }
}

export default async function BlogPost({ params }) {
  try {
    const response = await axios.get(`https://app.linkflows.com/api/blogs/${params.slug}`);
    const post = response.data.data;

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      image: post.featured_image ? `https://app.linkflows.com/storage/${post.featured_image}` : null,
      author: {
        '@type': 'Organization',
        name: post.author || 'LinkFlows',
      },
      publisher: {
        '@type': 'Organization',
        name: 'LinkFlows',
        logo: {
          '@type': 'ImageObject',
          url: 'https://linkflows.com/logo.png'
        }
      },
      datePublished: post.published_at,
      dateModified: post.updated_at,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://linkflows.com/blog/${post.slug}`
      },
      keywords: post.tags.join(', '),
      articleSection: post.category,
      wordCount: post.content.split(' ').length,
      timeRequired: `PT${post.read_time}M`
    };

    return (
      <>
        <Script
          id="blogpost-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <BlogPostClient initialPost={post} />
      </>
    );
  } catch (error) {
    return <BlogPostClient />;
  }
}