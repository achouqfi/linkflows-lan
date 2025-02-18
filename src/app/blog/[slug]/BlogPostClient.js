'use client';

import { useState, useEffect } from 'react';
import { Clock, ArrowLeft, Tag } from 'lucide-react';
import axios from 'axios';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function BlogPostClient({ initialPost = null }) {
  const [post, setPost] = useState(initialPost);
  const [loading, setLoading] = useState(!initialPost);
  const params = useParams();

  useEffect(() => {
    if (!initialPost) {
      const fetchPost = async () => {
        try {
          setLoading(true);
          const response = await axios.get(`https://app.linkflows.com/api/blogs/${params.slug}`);
          setPost(response.data.data);
        } catch (error) {
          console.error('Error fetching post:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchPost();
    }
  }, [params.slug, initialPost]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#696cff]"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-bold text-gray-900">Post not found</h2>
        <Link href="/blog" className="text-[#696cff] hover:underline">
          Return to blog
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <article 
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        itemScope 
        itemType="https://schema.org/BlogPosting"
      >
        <meta itemProp="datePublished" content={post.published_at} />
        <meta itemProp="dateModified" content={post.updated_at} />
        <meta itemProp="author" content={post.author || 'LinkFlows'} />
        <meta itemProp="publisher" content="LinkFlows" />

        <Link href="/blog" className="inline-block mb-8">
          <motion.div
            whileHover={{ x: -5 }}
            className="flex items-center gap-2 text-[#696cff] font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </motion.div>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
              <span className="px-3 py-1 rounded-full bg-[#696cff]/10 text-[#696cff]">
                {post.category}
              </span>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.read_time} min read
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4" itemProp="headline">
              {post.title}
            </h1>
            <p className="text-lg text-gray-600" itemProp="description">
              {post.description}
            </p>
          </div>
        </motion.div>

        {post.featured_image && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={`/storage/${post.featured_image}`}
              alt={post.title}
              className="w-full h-auto"
              itemProp="image"
            />
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="prose prose-lg max-w-none mb-8 prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-[#696cff]"
          itemProp="articleBody"
        >
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </motion.div>

        {post.tags && post.tags.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-2 mt-8 pt-8 border-t"
          >
            <Tag className="w-4 h-4 text-gray-400" />
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-600 hover:bg-gray-200 transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </article>
    </div>
  );
}