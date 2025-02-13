'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Facebook, 
  Image as ImageIcon, 
  Globe, 
  Book, 
  Settings, 
  CreditCard, 
  Users,
  ChevronRight,
  MessageCircle 
} from 'lucide-react';

const MotionDiv = motion.div;

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    {
      id: 'getting-started',
      icon: Book,
      title: 'Getting Started',
      description: 'New to LinkFlows? Start here',
      articles: [
        { id: 'gs1', title: 'Creating your account', views: '2.5K' },
        { id: 'gs2', title: 'Platform overview', views: '1.8K' },
        { id: 'gs3', title: 'Basic navigation guide', views: '3.2K' },
        { id: 'gs4', title: 'Setting up your first automation', views: '4.1K' }
      ]
    },
    {
      id: 'facebook',
      icon: Facebook,
      title: 'Facebook Features',
      description: 'Learn about Facebook automation',
      articles: [
        { id: 'fb1', title: 'Facebook analytics overview', views: '1.9K' },
        { id: 'fb2', title: 'Content discovery setup', views: '2.3K' },
        { id: 'fb3', title: 'Automated posting guide', views: '3.7K' },
        { id: 'fb4', title: 'Engagement tracking', views: '1.5K' }
      ]
    },
    {
      id: 'pinterest',
      icon: ImageIcon,
      title: 'Pinterest Tools',
      description: 'Master Pinterest automation',
      articles: [
        { id: 'pin1', title: 'Pin automation basics', views: '2.8K' },
        { id: 'pin2', title: 'Board management', views: '1.6K' },
        { id: 'pin3', title: 'Analytics interpretation', views: '2.1K' },
        { id: 'pin4', title: 'Scheduling strategies', views: '3.4K' }
      ]
    },
    {
      id: 'wordpress',
      icon: Globe,
      title: 'WordPress Integration',
      description: 'WordPress content management',
      articles: [
        { id: 'wp1', title: 'Connecting WordPress sites', views: '2.2K' },
        { id: 'wp2', title: 'Content synchronization', views: '1.7K' },
        { id: 'wp3', title: 'SEO optimization tools', views: '3.9K' },
        { id: 'wp4', title: 'Multi-site management', views: '2.6K' }
      ]
    },
    {
      id: 'account',
      icon: Settings,
      title: 'Account Settings',
      description: 'Manage your account',
      articles: [
        { id: 'acc1', title: 'Profile settings', views: '1.4K' },
        { id: 'acc2', title: 'Security options', views: '2.0K' },
        { id: 'acc3', title: 'Team permissions', views: '1.8K' },
        { id: 'acc4', title: 'Notification preferences', views: '1.3K' }
      ]
    },
    {
      id: 'billing',
      icon: CreditCard,
      title: 'Billing & Plans',
      description: 'Subscription and payment info',
      articles: [
        { id: 'bill1', title: 'Understanding our plans', views: '3.1K' },
        { id: 'bill2', title: 'Payment methods', views: '1.9K' },
        { id: 'bill3', title: 'Billing cycles', views: '1.5K' },
        { id: 'bill4', title: 'Upgrading your plan', views: '2.7K' }
      ]
    }
  ];

  const popularArticles = [
    {
      id: 'pop1',
      title: 'Getting started with automation',
      category: 'Getting Started',
      views: '5.2K'
    },
    {
      id: 'pop2',
      title: 'Facebook content discovery guide',
      category: 'Facebook Features',
      views: '4.8K'
    },
    {
      id: 'pop3',
      title: 'Pinterest analytics explained',
      category: 'Pinterest Tools',
      views: '4.3K'
    }
  ];

  const filteredCategories = categories.filter(category =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.articles.some(article => 
      article.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              How can we help you?
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Search our knowledge base or browse categories below
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#696cff] focus:border-transparent shadow-sm"
              />
            </div>
          </MotionDiv>
        </div>

        {/* Popular Articles */}
        {!selectedCategory && (
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Popular Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {popularArticles.map((article) => (
                <motion.a
                  key={article.id}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="font-medium text-gray-900 mb-2">
                    {article.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#696cff]">{article.category}</span>
                    <span className="text-gray-500">{article.views} views</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </MotionDiv>
        )}

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <MotionDiv
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <motion.div
                    whileHover={{ y: -5 }}
                    className={`bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer ${
                      selectedCategory === category.id ? 'ring-2 ring-[#696cff]' : ''
                    }`}
                    onClick={() => setSelectedCategory(
                      selectedCategory === category.id ? null : category.id
                    )}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-[#696cff]/10 rounded-lg">
                        <Icon className="w-6 h-6 text-[#696cff]" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {category.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                          {category.description}
                        </p>
                        
                        {/* Articles List */}
                        <AnimatePresence>
                          {selectedCategory === category.id && (
                            <MotionDiv
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="space-y-3"
                            >
                              {category.articles.map((article) => (
                                <motion.a
                                  key={article.id}
                                  whileHover={{ x: 5 }}
                                  className="flex items-center justify-between text-sm hover:text-[#696cff] transition-colors"
                                >
                                  <span>{article.title}</span>
                                  <div className="flex items-center gap-2 text-gray-500">
                                    <span>{article.views} views</span>
                                    <ChevronRight className="w-4 h-4" />
                                  </div>
                                </motion.a>
                              ))}
                            </MotionDiv>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                </MotionDiv>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Contact Support */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-xl p-8 shadow-sm inline-block">
            <MessageCircle className="w-8 h-8 text-[#696cff] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Still need help?
            </h3>
            <p className="text-gray-600 mb-4">
              Can't find what you're looking for? Contact our support team.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-[#696cff] to-[#567bfb] text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all"
            >
              Contact Support
            </motion.button>
          </div>
        </MotionDiv>
      </div>
    </div>
  );
}