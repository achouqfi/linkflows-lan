'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ArrowLeft, ArrowRight, Quote, User, Users, TrendingUp, Clock, BarChart2, PieChart } from 'lucide-react';

const MotionDiv = motion.div;

// Vector Avatar Component
const VectorAvatar = ({ seed, className }) => {
  const colors = ['#FFB6C1', '#98FB98', '#87CEEB', '#DDA0DD', '#F0E68C', '#E6E6FA'];
  const randomColor = colors[seed % colors.length];
  
  return (
    <div className={`relative rounded-xl overflow-hidden ${className}`} style={{ backgroundColor: randomColor }}>
      <div className="absolute inset-0 flex items-center justify-center">
        <User className="w-1/2 h-1/2 text-white" />
      </div>
    </div>
  );
};

// Stat Icon Component
const StatIcon = ({ type }) => {
  const icons = {
    trending: TrendingUp,
    clock: Clock,
    chart: BarChart2,
    users: Users,
    pie: PieChart
  };
  
  const IconComponent = icons[type];
  return IconComponent ? <IconComponent className="w-6 h-6 text-[#696cff]" /> : null;
};

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 2,
      name: "Marcus Rodriguez",
      position: "Content Creator",
      company: "The Social Blueprint",
      rating: 5,
      text: "I manage multiple WordPress sites, and LinkFlows has made my life so much easier. The ability to schedule content across different platforms while maintaining SEO optimization is invaluable. It's like having a full-time assistant.",
      stats: {
        growth: "10 hours saved",
        metric: "Per Week",
        period: "Content Management",
        iconType: "clock"
      }
    },
    {
      id: 3,
      name: "Emma Thompson",
      position: "Social Media Strategist",
      company: "Viral Ventures",
      rating: 5,
      text: "The Facebook analytics and content discovery features are game-changing. We've been able to identify viral content trends early and adapt our strategy accordingly. Our engagement rates have doubled since using LinkFlows.",
      stats: {
        growth: "2x increase",
        metric: "Engagement Rate",
        period: "1 month",
        iconType: "chart"
      }
    },
    {
      id: 4,
      name: "Alex Rivera",
      position: "Pinterest Manager",
      company: "Style & Growth",
      rating: 5,
      text: "The AI-powered pin creation and scheduling has revolutionized our workflow. We're reaching more people with less effort, and the automatic optimization ensures our content performs consistently well.",
      stats: {
        growth: "3.5M",
        metric: "Monthly Impressions",
        period: "Current Reach",
        iconType: "users"
      }
    },
    {
      id: 5,
      name: "Jordan Lee",
      position: "Content Strategist",
      company: "Digital Pulse Media",
      rating: 5,
      text: "What sets LinkFlows apart is its ability to analyze and optimize content across multiple platforms. The insights we get help us make data-driven decisions that have significantly improved our ROI.",
      stats: {
        growth: "85% boost",
        metric: "Content ROI",
        period: "2 months",
        iconType: "pie"
      }
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, activeIndex]);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-16">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Loved by Growing Businesses
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join thousands of successful businesses already using LinkFlows
            </p>
          </MotionDiv>
        </div>

        <div className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="flex items-center justify-between absolute top-1/2 -translate-y-1/2 w-full px-4 z-10">
            <MotionDiv
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-white shadow-lg text-gray-600 hover:text-[#696cff] transition-all hover:shadow-xl"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
            </MotionDiv>
            <MotionDiv
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-white shadow-lg text-gray-600 hover:text-[#696cff] transition-all hover:shadow-xl"
              >
                <ArrowRight className="w-6 h-6" />
              </button>
            </MotionDiv>
          </div>

          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <MotionDiv
                key={activeIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="w-full"
              >
                <div className="bg-white rounded-2xl p-8 shadow-xl">
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* User Info */}
                    <div className="md:w-1/3">
                      <VectorAvatar 
                        seed={activeIndex} 
                        className="w-20 md:w-32 aspect-square mb-4"
                      />
                      <MotionDiv
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <h3 className="text-xl font-semibold text-gray-900">
                          {testimonials[activeIndex].name}
                        </h3>
                        <p className="text-[#696cff] font-medium">
                          {testimonials[activeIndex].position}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {testimonials[activeIndex].company}
                        </p>
                        <div className="flex items-center gap-1 mt-2">
                          {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                            <MotionDiv
                              key={i}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.1 * i }}
                            >
                              <Star className="w-4 h-4 fill-[#696cff] text-[#696cff]" />
                            </MotionDiv>
                          ))}
                        </div>
                      </MotionDiv>
                    </div>

                    {/* Testimonial Content */}
                    <div className="md:w-2/3">
                      <Quote className="w-10 h-10 text-[#696cff] mb-4 opacity-20" />
                      <MotionDiv
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <p className="text-gray-600 text-lg mb-6">
                          {testimonials[activeIndex].text}
                        </p>
                      </MotionDiv>
                      
                      {/* Results Stats */}
                      <MotionDiv
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-gradient-to-r from-[#696cff]/5 to-[#567bfb]/5 rounded-xl p-6"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-[#696cff]/10 rounded-lg">
                            <StatIcon type={testimonials[activeIndex].stats.iconType} />
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-[#696cff] mb-1">
                              {testimonials[activeIndex].stats.growth}
                            </div>
                            <div className="text-sm text-gray-600">
                              {testimonials[activeIndex].stats.metric} • {testimonials[activeIndex].stats.period}
                            </div>
                          </div>
                        </div>
                      </MotionDiv>
                    </div>
                  </div>
                </div>
              </MotionDiv>
            </AnimatePresence>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <MotionDiv
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              >
                <button
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? 'w-8 bg-[#696cff]'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              </MotionDiv>
            ))}
          </div>
        </div>
      </MotionDiv>
    </section>
  );
}