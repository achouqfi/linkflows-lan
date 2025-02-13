'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Bot, Image as ImageIcon, LineChart, Globe, Facebook, Instagram } from 'lucide-react';

const MotionDiv = motion.div;

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
        id: 4,
        title: "Facebook Content Discovery",
        subtitle: "Spy & Scale Viral Content",
        icon: Facebook,
        image: "/791_1x_shots_so.png",
        description: "Centralize your WordPress content management across multiple sites. Create SEO-optimized articles with AI-assisted keyword research, custom image placement, and intelligent content scheduling. Our platform helps you manage everything from a single dashboard while maintaining unique SEO strategies for each site.",
        features: [
          "Page search by name/URL",
          "Bulk page monitoring",
          "Viral content detection",
          "Engagement rate analysis",
          "Content performance benchmarking",
          "Similar page suggestions",
        ]
      },
      {
        id: 2,
        title: "WordPress Content Hub",
        subtitle: "Advanced Content & SEO Management",
        icon: Globe,
        image: "/530_1x_shots_so.png",
        description: "Seamlessly integrate your WordPress site with our automation tools. Bulk upload content, schedule posts, and manage your blog with ease.",
        features: [
            "Multi-site WordPress management",
            "AI-powered SEO keyword suggestions",
            "Custom image placement system",
            "Intelligent content scheduling",
            "Custom prompt templates",
            "Cross-site content syncing",
          ],
        
      },
      {
        id: 1,
        title: "Pinterest Analytics & Automation",
        subtitle: "Scale Your Pinterest Success",
        icon: ImageIcon,
        image: "/266_1x_shots_so.png",
        description: "Transform your Pinterest presence with our comprehensive automation suite. Monitor real-time analytics, schedule pins automatically, and track board performance all in one place. Our AI-powered system helps you identify optimal posting times, analyze engagement patterns, and maintain consistent growth.",
        features: [
          "Real-time board analytics and performance tracking",
          "Auto-pin creation from blog articles",
          "Customizable posting schedule optimization",
          "Multi-board management and tracking",
          "Monthly views and performance reporting",
          "Visual performance metrics dashboard",
          "Bulk pin creation and management"
        ],
      },

      {
        id: 3,
        title: "Facebook Analytics Hub",
        subtitle: "Track & Optimize Performance",
        icon: Facebook,
        image: "/415_1x_shots_so.png",
        description: "Comprehensive analytics dashboard for your Facebook pages. Monitor engagement metrics, analyze audience behavior, and identify top-performing content to optimize your social media strategy.",
        features: [
          "Real-time page performance metrics",
          "Top posts analysis with engagement breakdown",
          "Audience demographics and behavior insights",
          "Interactive engagement graphs and trends",
          "Post timing optimization data",
          "Custom date range analytics",
          "Exportable performance reports"
        ]
      },

  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#696cff] to-[#567bfb] bg-clip-text text-transparent mb-6">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how our automation tools can transform your social media presence
          </p>
        </div>

        <div className="space-y-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <MotionDiv
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image Section */}
                <div className="w-full h-full lg:w-1/2">
                  <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src={service.image}
                      alt={service.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 hover:scale-105 "
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="inline-flex items-center gap-2 bg-[#696cff] bg-opacity-10 px-4 py-2 rounded-full">
                    <Icon className="w-5 h-5 text-[#696cff]" />
                    <span className="text-sm font-medium text-[#696cff]">
                      {service.subtitle}
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900">
                    {service.title}
                  </h3>

                  <p className="text-lg text-gray-600">
                    {service.description}
                  </p>

                  <div className="space-y-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#696cff] bg-opacity-10 flex items-center justify-center">
                          <svg
                            className="w-3 h-3 text-[#696cff]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <MotionDiv 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <button className="mt-6 px-6 py-3 bg-gradient-to-r from-[#696cff] to-[#567bfb] text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all">
                      Learn More
                    </button>
                  </MotionDiv>
                </div>
              </MotionDiv>
            );
          })}
        </div>
      </div>
    </section>
  );
}