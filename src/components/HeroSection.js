'use client';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import Image from 'next/image';


const trustedCompanies = [
  {
    name: "OpenAI",
    logo: "/api/placeholder/120/40",
    alt: "OpenAI logo - AI technology partner"
  },
  {
    name: "Facebook",
    logo: "/api/placeholder/120/40",
    alt: "Facebook logo - Social media integration partner"
  },
  {
    name: "DeepSeek",
    logo: "/api/placeholder/120/40",
    alt: "DeepSeek logo - AI research partner"
  },
  {
    name: "Pinterest",
    logo: "/api/placeholder/120/40",
    alt: "Pinterest logo - Visual discovery partner"
  },
  {
    name: "WordPress",
    logo: "/api/placeholder/120/40",
    alt: "WordPress logo - CMS integration partner"
  },
];


const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden pt-28">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute top-0 left-1/3 w-[40rem] h-[40rem] bg-[#696cff11] rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 right-0 w-[30rem] h-[30rem] bg-[#696cff11] rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute bottom-0 left-0 w-[25rem] h-[25rem] bg-[#696cff11] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md rounded-full shadow-lg mb-8 hover:shadow-md transition-shadow"
              whileHover={{ scale: 1.05 }}
            >
              <LucideIcons.Sparkles className="w-5 h-5 text-[#696cff]" />
              <span className="text-sm font-medium text-[#696cff]">
                AI-Powerful All-In-One Platform
              </span>
            </motion.div>
            
            {/* Main Heading */}
            <motion.div className="space-y-6 mb-8">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900">
                Create <span className="text-[#696cff]">Viral Content </span>
                Like Never Before
              </h1>
              
              <p className="text-xl text-gray-600 max-w-xl">
                Transform your content creation with AI. Create engaging blog posts, automate Pinterest growth, and analyze viral trends - all in one platform.
              </p>
            </motion.div>

            {/* Stats Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
            >
              <motion.div 
                className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-gray-100/50 hover:shadow-lg transition-all"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-1 rounded-lg bg-blue-50 text-blue-600">
                    <LucideIcons.Infinity className="w-7 h-7" />
                  </div>
                  <div className="text-3xl font-bold text-[#696cff]"></div>
                </div>
                <div className="text-sm text-gray-600 text-start">Unlimited AI Articles</div>
              </motion.div>

              <motion.div 
                className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-gray-100/50 hover:shadow-lg transition-all "
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-purple-50 text-purple-600">
                    <LucideIcons.Zap className="w-5 h-5" />
                  </div>
                  <div className="text-3xl font-bold text-[#696cff]">10x</div>
                </div>
                <div className="text-sm text-gray-600 text-start">Faster Productivity</div>
              </motion.div>

              <motion.div 
                className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-gray-100/50 hover:shadow-lg transition-all"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-orange-50 text-orange-600">
                    <LucideIcons.Clock className="w-5 h-5" />
                  </div>
                  <div className="text-3xl font-bold text-[#696cff]">80%</div>
                </div>
                <div className="text-sm text-gray-600 text-start">Time Saved Daily</div>
              </motion.div>
            </motion.div>

            {/* CTA Section */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px -12px rgba(105,108,255,0.25)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-[#696cff] to-[#567bfb] text-white rounded-xl font-medium shadow-xl hover:shadow-2xl transition-all group"
              >
                <span className="flex items-center justify-center gap-2">
                  Start Now
                  <LucideIcons.ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="flex-1 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Preview Container */}
            <div className="relative w-full max-w-2xl mx-auto">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#696cff]/10 to-transparent blur-3xl" />
              
              {/* Preview Window */}
              <div className="relative rounded-2xl bg-white/80 shadow-2xl  backdrop-blur-md border border-gray-100/50">
                {/* Window Header */}
                <div className="flex items-center gap-2 mb-4 p-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                </div>

              <div className="relative rounded-xl bg-gray-50/50 p-4 min-h-[400px]">
                {/* Main Dashboard Content */}
                <div className="relative rounded-2xl bg-white/80 backdrop-blur-md">
                  <div className="space-y-6">
                    {/* Main Service Overview */}
                    <div className="rounded-xl bg-gradient-to-br from-[#567bfb]/5 via-purple-50/10 to-pink-50/5 p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">All-in-One Content Suite 🚀</h3>
                          <p className="text-sm text-gray-500 mt-1">Automate your content workflow</p>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-[#567bfb]/10 rounded-full">
                          <div className="w-2 h-2 rounded-full bg-[#567bfb] animate-pulse" />
                          <span className="text-sm font-medium text-[#567bfb]">Live Services</span>
                        </div>
                      </div>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      {/* Pinterest Analytics */}
                      <motion.div 
                        className="rounded-xl bg-gradient-to-br from-red-50 to-white p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex flex-col h-full">
                          <div className="flex items-start justify-between">
                            <div>
                              <div className="flex items-center gap-2 mb-3">
                                <div className="p-2 bg-red-100 rounded-lg group-hover:scale-110 transition-transform">
                                  <LucideIcons.BarChart2 className="w-5 h-5 text-red-500" />
                                </div>
                                <p className="font-medium text-red-600/80">Pinterest Analytics</p>
                              </div>
                              <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                  <span className="text-sm text-gray-600">Track Performance</span>
                                  <span className="px-2 py-0.5 bg-red-100 text-red-600 text-xs rounded-full">Real-time</span>
                                </div>
                                <div className="text-xs text-gray-500">Analyze pins engagement & reach</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Auto Pins */}
                      <motion.div 
                        className="rounded-xl bg-gradient-to-br from-pink-50 to-white p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex flex-col h-full">
                          <div className="flex items-start justify-between">
                            <div>
                              <div className="flex items-center gap-2 mb-3">
                                <div className="p-2 bg-pink-100 rounded-lg group-hover:scale-110 transition-transform">
                                  <LucideIcons.Clock className="w-5 h-5 text-pink-500" />
                                </div>
                                <p className="font-medium text-pink-600/80">Auto Pins</p>
                              </div>
                              <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                  <span className="text-sm text-gray-600">Schedule & Post</span>
                                  <span className="px-2 py-0.5 bg-pink-100 text-pink-600 text-xs rounded-full">24/7</span>
                                </div>
                                <div className="text-xs text-gray-500">Automated pin publishing</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* WordPress Integration */}
                      <motion.div 
                        className="rounded-xl bg-gradient-to-br from-blue-50 to-white p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex flex-col h-full">
                          <div className="flex items-start justify-between">
                            <div>
                              <div className="flex items-center gap-2 mb-3">
                                <div className="p-2 bg-blue-100 rounded-lg group-hover:scale-110 transition-transform">
                                  <LucideIcons.Globe className="w-5 h-5 text-blue-500" />
                                </div>
                                <p className="font-medium text-blue-600/80">WordPress Post</p>
                              </div>
                              <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                  <span className="text-sm text-gray-600">One-Click Publish</span>
                                  <span className="px-2 py-0.5 bg-blue-100 text-blue-600 text-xs rounded-full">Auto</span>
                                </div>
                                <div className="text-xs text-gray-500">SEO-optimized articles</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Facebook CTA */}
                      <motion.div 
                        className="rounded-xl bg-gradient-to-br from-indigo-50 to-white p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex flex-col h-full">
                          <div className="flex items-start justify-between">
                            <div>
                              <div className="flex items-center gap-2 mb-3">
                                <div className="p-2 bg-indigo-100 rounded-lg group-hover:scale-110 transition-transform">
                                  <LucideIcons.Share2 className="w-5 h-5 text-indigo-500" />
                                </div>
                                <p className="font-medium text-indigo-600/80">Facebook CTA</p>
                              </div>
                              <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                  <span className="text-sm text-gray-600">Engagement Tools</span>
                                  <span className="px-2 py-0.5 bg-indigo-100 text-indigo-600 text-xs rounded-full">AI</span>
                                </div>
                                <div className="text-xs text-gray-500">Generate viral CTAs</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Spy Feature Highlight */}
                    <motion.div 
                      className="rounded-xl bg-gradient-to-r from-purple-50 via-pink-50 to-orange-50 p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                      whileHover={{ scale: 1.01 }}
                    >
                      <div className="flex items-start gap-6">
                        <div className="p-3 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl">
                          <LucideIcons.Eye className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800 mb-1">Spy & Analytics Tools</h4>
                          <p className="text-sm text-gray-600 mb-3">Track competitors and viral content</p>
                          <div className="flex gap-4">
                            <div className="flex items-center gap-2">
                              <div className="p-1.5 bg-purple-100/50 rounded-lg">
                                <LucideIcons.Zap className="w-4 h-4 text-purple-500" />
                              </div>
                              <span className="text-sm">Viral Detection</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="p-1.5 bg-pink-100/50 rounded-lg">
                                <LucideIcons.TrendingUp className="w-4 h-4 text-pink-500" />
                              </div>
                              <span className="text-sm">Trend Analysis</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
              </div>
              </div>

                  {/* Floating Stats Cards */}
                  <motion.div
                    className="absolute -top-10 -right-10 bg-white rounded-2xl shadow-xl p-4"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-green-50 rounded-xl">
                        <LucideIcons.TrendingUp className="w-5 h-5 text-green-500" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-600">Growth</p>
                        <p className="text-xl font-bold text-green-500">+147%</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-8 -left-10 bg-white rounded-2xl shadow-xl p-4"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.5
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-50 rounded-xl">
                        <LucideIcons.Users className="w-5 h-5 text-blue-500" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-600">Active Users</p>
                        <p className="text-xl font-bold text-blue-500">1.5k</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Additional Floating Card */}
                  <motion.div
                    className="absolute top-1/2 -right-12 transform -translate-y-1/2 bg-white rounded-2xl shadow-xl p-4"
                    animate={{ x: [0, 10, 0] }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-purple-50 rounded-xl">
                        <LucideIcons.Zap className="w-5 h-5 text-purple-500" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-600">Time Saved</p>
                        <p className="text-xl font-bold text-purple-500">80%</p>
                      </div>
                    </div>
                  </motion.div>
            </motion.div>
        </div>
      </div>

  
      {/* Trusted By Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div 
          className="rounded-2xl bg-white/80 backdrop-blur-lg  p-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#696cff]/10 rounded-full mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <LucideIcons.Shield className="w-4 h-4 text-[#696cff]" />
              <span className="text-sm font-medium text-[#696cff]">Trusted Worldwide</span>
            </motion.div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trusted by Leading Tech Companies
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join thousands of companies using LinkFlows to automate their content creation and growth
            </p>
          </div>

          {/* Company Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {[
              {
                name: "OpenAI",
                icon: <LucideIcons.Bot className="w-8 h-8" />,
                color: "text-green-600"
              },
              {
                name: "Facebook",
                icon: <LucideIcons.Facebook className="w-8 h-8" />,
                color: "text-blue-600"
              },
              {
                name: "Pinterest",
                icon: <LucideIcons.Image className="w-8 h-8" />,
                color: "text-red-600"
              },
              {
                name: "WordPress",
                icon: <LucideIcons.Globe className="w-8 h-8" />,
                color: "text-blue-500"
              },
              {
                name: "DeepSeek",
                icon: <LucideIcons.Brain className="w-8 h-8" />,
                color: "text-purple-600"
              },
              {
                name: "AWS",
                icon: <LucideIcons.Cloud className="w-8 h-8" />,
                color: "text-orange-500"
              }
            ].map((company, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`p-4 rounded-xl bg-gray-50 ${company.color} hover:bg-gray-100 transition-colors`}>
                  {company.icon}
                </div>
                <span className="text-sm font-medium text-gray-600">{company.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;