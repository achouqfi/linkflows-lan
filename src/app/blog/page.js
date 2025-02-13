'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Clock, Tag, ChevronRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "How to Optimize Your Pinterest Strategy for Maximum Engagement",
    excerpt: "Learn the best practices for creating engaging Pinterest content and growing your audience organically.",
    category: "Pinterest",
    readTime: "8 min read",
    date: "Feb 10, 2024",
    image: "/blog/pinterest-strategy.jpg",
    tags: ["Pinterest", "Social Media", "Growth"]
  },
  {
    id: 2,
    title: "Facebook Analytics: A Complete Guide to Understanding Your Metrics",
    excerpt: "Dive deep into Facebook analytics and learn how to interpret your data for better marketing decisions.",
    category: "Facebook",
    readTime: "12 min read",
    date: "Feb 8, 2024",
    image: "/blog/facebook-analytics.jpg",
    tags: ["Facebook", "Analytics", "Marketing"]
  },
  {
    id: 3,
    title: "10 SEO Tips for WordPress Content That Ranks",
    excerpt: "Master these essential SEO techniques to improve your WordPress content's search engine rankings.",
    category: "WordPress",
    readTime: "10 min read",
    date: "Feb 5, 2024",
    image: "/blog/wordpress-seo.jpg",
    tags: ["WordPress", "SEO", "Content"]
  },
  {
    id: 4,
    title: "Automating Your Social Media: A Guide to Efficient Management",
    excerpt: "Discover how automation can help you manage your social media presence more effectively.",
    category: "Automation",
    readTime: "6 min read",
    date: "Feb 3, 2024",
    image: "/blog/social-automation.jpg",
    tags: ["Automation", "Social Media", "Productivity"]
  },
  {
    id: 5,
    title: "Creating Viral Content: Understanding What Makes Content Share-Worthy",
    excerpt: "Learn the psychology behind viral content and how to create posts that people want to share.",
    category: "Content Strategy",
    readTime: "15 min read",
    date: "Feb 1, 2024",
    image: "/blog/viral-content.jpg",
    tags: ["Content", "Viral", "Strategy"]
  }
];

const categories = [
  "All",
  "Pinterest",
  "Facebook",
  "WordPress",
  "Automation",
  "Content Strategy"
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Blog
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay up to date with the latest social media strategies, tips, and insights
            </p>
          </motion.div>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#696cff] focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-[#696cff] to-[#567bfb] text-white'
                      : 'bg-white text-gray-600 hover:text-[#696cff]'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post) => (
              <motion.article
                key={post.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                {/* Image */}
                <div className="aspect-video relative bg-gray-100">
                  {/* Add your Image component here */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <span className="px-3 py-1 rounded-full bg-[#696cff]/10 text-[#696cff]">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex items-center gap-2 mb-6">
                    <Tag className="w-4 h-4 text-gray-400" />
                    <div className="flex gap-2">
                      {post.tags.map((tag) => (
                        <span key={tag} className="text-sm text-gray-500">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Read More Button */}
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-[#696cff] font-medium"
                  >
                    Read More
                    <ChevronRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}