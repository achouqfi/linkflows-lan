'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Facebook, Globe, Image as ImageIcon } from 'lucide-react';

const MotionDiv = motion.div;

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openQuestions, setOpenQuestions] = useState([]);

  const toggleQuestion = (id) => {
    setOpenQuestions(prev => 
      prev.includes(id) 
        ? prev.filter(q => q !== id)
        : [...prev, id]
    );
  };

  const categories = [
    { id: 'general', name: 'General', icon: Globe },
    { id: 'facebook', name: 'Facebook', icon: Facebook },
    { id: 'pinterest', name: 'Pinterest', icon: ImageIcon },
    { id: 'wordpress', name: 'WordPress', icon: Globe },
  ];


  const faqs = {
    general: [
      {
        id: 'g1',
        question: 'What is LinkFlows and how can it help my business?',
        answer: 'LinkFlows is an all-in-one social media automation platform that helps businesses manage their presence across Facebook, Pinterest, and WordPress. It provides analytics, content scheduling, and optimization tools to grow your online presence efficiently.'
      },
      {
        id: 'g2',
        question: 'How much time can I save using LinkFlows?',
        answer: 'Most users report saving 10-15 hours per week on social media management tasks. Our automation tools handle routine tasks like content scheduling, analytics tracking, and cross-platform posting.'
      },
      {
        id: 'g3',
        question: 'Do you offer a free trial?',
        answer: 'Yes, we offer a 14-day free trial with full access to all features. No credit card required to start.'
      },
      {
        id: 'g4',
        question: 'Can I manage multiple social media accounts?',
        answer: 'Yes, LinkFlows supports multiple accounts across Facebook, Pinterest, and WordPress. You can manage all your social media presence from a single dashboard.'
      },
      {
        id: 'g5',
        question: 'What kind of support do you offer?',
        answer: 'We provide 24/7 customer support through live chat, email, and comprehensive documentation. Our team of experts is always ready to help you optimize your social media strategy.'
      },
      {
        id: 'g6',
        question: 'Is there a limit to the number of posts I can schedule?',
        answer: 'No, all our plans include unlimited post scheduling. You can schedule as many posts as you need across all your social media accounts.'
      },
      {
        id: 'g7',
        question: 'Can I cancel my subscription at any time?',
        answer: 'Yes, you can cancel your subscription at any time with no questions asked. Well continue to provide service until the end of your billing period.'
      }
    ],
    facebook: [
      {
        id: 'f1',
        question: 'How does the Facebook content discovery feature work?',
        answer: 'Our content discovery tool analyzes trending content across Facebook pages in your niche. You can search for pages by name/URL, monitor multiple pages, and get insights into what content performs best.'
      },
      {
        id: 'f2',
        question: 'What metrics does the Facebook Analytics Hub track?',
        answer: 'The Analytics Hub tracks engagement rates, reach, audience demographics, post performance, optimal posting times, and provides custom date range reporting.'
      },
      {
        id: 'f3',
        question: 'Can I export Facebook analytics reports?',
        answer: 'Yes, you can export detailed reports in multiple formats (PDF, CSV, Excel) with custom date ranges and metrics selection.'
      },
      {
        id: 'f4',
        question: 'How does the viral content detection work?',
        answer: 'Our AI algorithms analyze engagement patterns, sharing velocity, and audience response to identify potentially viral content early. This helps you capitalize on trending topics in your niche.'
      },
      {
        id: 'f5',
        question: 'Can I monitor competitor Facebook pages?',
        answer: 'Yes, you can track and analyze competitor pages to understand their content strategy, posting frequency, and engagement metrics. This helps you benchmark your performance and identify opportunities.'
      },
      {
        id: 'f6',
        question: 'Does the platform support Facebook Reels and Stories?',
        answer: 'Yes, LinkFlows supports all Facebook content types including posts, Reels, Stories, and live videos. You can track performance metrics for each content type separately.'
      },
      {
        id: 'f7',
        question: 'Can I automate responses to Facebook comments?',
        answer: 'Yes, you can set up automated responses for common questions and engage with your audience more efficiently using our AI-powered comment management system.'
      }
    ],
    pinterest: [
      {
        id: 'p1',
        question: 'How does the auto-pin creation feature work?',
        answer: 'The auto-pin feature automatically creates Pinterest pins from your blog content, optimizes them for maximum engagement, and schedules them at optimal times.'
      },
      {
        id: 'p2',
        question: 'Can I manage multiple Pinterest boards from one dashboard?',
        answer: 'Yes, you can manage multiple boards, track their performance, and schedule pins across all boards from a single dashboard.'
      },
      {
        id: 'p3',
        question: 'How does the Pinterest analytics tracking work?',
        answer: 'Our system provides real-time analytics including monthly views, engagement rates, pin performance, and audience insights for all your boards.'
      },
      {
        id: 'p4',
        question: 'Does LinkFlows help with Pinterest SEO?',
        answer: 'Yes, we provide keyword suggestions, optimize pin descriptions, and help you structure your boards for maximum searchability and engagement.'
      },
      {
        id: 'p5',
        question: 'Can I bulk upload pins to multiple boards?',
        answer: 'Yes, our bulk upload feature allows you to create and schedule multiple pins across different boards simultaneously, saving you significant time.'
      },
      {
        id: 'p6',
        question: 'How does the pin performance prediction work?',
        answer: 'Our AI analyzes historical pin performance, trends, and audience behavior to predict which pins are likely to perform well, helping you optimize your content strategy.'
      },
      {
        id: 'p7',
        question: 'Can I automate pin scheduling based on performance?',
        answer: 'Yes, our smart scheduling system automatically determines the best times to post based on your audience engagement patterns and optimizes your posting schedule accordingly.'
      }
    ],
    wordpress: [
      {
        id: 'w1',
        question: 'How does the multi-site WordPress management work?',
        answer: 'You can manage multiple WordPress sites from a single dashboard, including content creation, scheduling, and SEO optimization across all sites.'
      },
      {
        id: 'w2',
        question: 'What SEO features are included?',
        answer: 'Our platform includes AI-powered keyword suggestions, content optimization, custom image placement, meta tag management, and performance tracking.'
      },
      {
        id: 'w3',
        question: 'Can I customize the content scheduling?',
        answer: 'Yes, you can set custom scheduling rules, create posting calendars, and automate content distribution across your sites.'
      },
      {
        id: 'w4',
        question: 'How does the content optimization system work?',
        answer: 'Our AI analyzes your content for readability, SEO optimization, keyword density, and provides suggestions for improvements to maximize engagement and search rankings.'
      },
      {
        id: 'w5',
        question: 'Can I manage media libraries across multiple sites?',
        answer: 'Yes, LinkFlows provides a centralized media management system where you can organize, optimize, and use media assets across all your WordPress sites.'
      },
      {
        id: 'w6',
        question: 'Does the platform support custom post types?',
        answer: 'Yes, we support all WordPress post types including custom ones. You can manage and schedule any type of content across your sites.'
      },
      {
        id: 'w7',
        question: 'How does the cross-site content syncing work?',
        answer: 'You can easily sync content, media, and settings across multiple WordPress sites while maintaining unique SEO strategies for each site. This includes templates, categories, and tags.'
      }
    ]
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our services and features
            </p>
          </MotionDiv>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <MotionDiv
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-all ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-[#696cff] to-[#567bfb] text-white shadow-md'
                      : 'bg-white text-gray-600 hover:text-[#696cff]'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {category.name}
                </button>
              </MotionDiv>
            );
          })}
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <MotionDiv
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {faqs[activeCategory].map((faq) => (
                <MotionDiv
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => toggleQuestion(faq.id)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left"
                  >
                    <span className="font-medium text-gray-900">{faq.question}</span>
                    <MotionDiv
                      animate={{ rotate: openQuestions.includes(faq.id) ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    </MotionDiv>
                  </button>
                  
                  <AnimatePresence>
                    {openQuestions.includes(faq.id) && (
                      <MotionDiv
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4 text-gray-600">
                          {faq.answer}
                        </div>
                      </MotionDiv>
                    )}
                  </AnimatePresence>
                </MotionDiv>
              ))}
            </MotionDiv>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}