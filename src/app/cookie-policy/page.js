'use client';

import { motion } from 'framer-motion';
import { Cookie, Shield, Settings, Bell, Clock, Eye, Database, Info } from 'lucide-react';

const MotionDiv = motion.div;

export default function CookiePolicy() {
  const sections = [
    {
      id: 'what-are-cookies',
      icon: Cookie,
      title: 'What Are Cookies',
      content: [
        'Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by:',
        '• Remembering your preferences and settings',
        '• Understanding how you use our platform',
        '• Improving site performance and functionality',
        '• Providing personalized content and features'
      ]
    },
    {
      id: 'types-of-cookies',
      icon: Database,
      title: 'Types of Cookies We Use',
      content: [
        'We use different types of cookies on our platform:',
        '• Essential Cookies: Required for basic site functionality',
        '• Preference Cookies: Remember your settings and preferences',
        '• Analytics Cookies: Help us understand site usage',
        '• Marketing Cookies: Used for targeted advertising',
        '• Social Media Cookies: Enable social sharing features'
      ]
    },
    {
      id: 'cookie-duration',
      icon: Clock,
      title: 'Cookie Duration',
      content: [
        'Cookies can last for different periods:',
        '• Session Cookies: Temporary and deleted when you close your browser',
        '• Persistent Cookies: Remain on your device for a set period',
        '• Third-party Cookies: Set by external services we use',
        'You can check and delete cookies through your browser settings'
      ]
    },
    {
      id: 'cookie-usage',
      icon: Settings,
      title: 'How We Use Cookies',
      content: [
        'We use cookies to:',
        '• Keep you signed in to your account',
        '• Remember your language and region preferences',
        '• Analyze site traffic and performance',
        '• Improve our services based on usage data',
        '• Provide relevant content and advertisements'
      ]
    },
    {
      id: 'cookie-control',
      icon: Shield,
      title: 'Your Cookie Choices',
      content: [
        'You have control over cookies:',
        '• Manage preferences through our cookie settings',
        '• Control cookies via browser settings',
        '• Opt out of non-essential cookies',
        '• Delete existing cookies',
        'Note: Blocking some cookies may affect site functionality'
      ]
    },
    {
      id: 'third-party',
      icon: Eye,
      title: 'Third-Party Cookies',
      content: [
        'Some features use third-party cookies:',
        '• Analytics tools (e.g., Google Analytics)',
        '• Social media plugins',
        '• Advertising networks',
        '• Payment processors',
        'These parties may collect data according to their own policies'
      ]
    },
    {
      id: 'updates',
      icon: Bell,
      title: 'Policy Updates',
      content: [
        'We may update this cookie policy to reflect:',
        '• Changes in how we use cookies',
        '• New features or services',
        '• Legal or regulatory requirements',
        'Check back periodically for updates'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cookie Policy
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: February 13, 2024
          </p>
        </MotionDiv>

        {/* Introduction */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-xl shadow-sm p-8 mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-[#696cff]/10 rounded-lg">
              <Info className="w-6 h-6 text-[#696cff]" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900">
              About This Policy
            </h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            This Cookie Policy explains how LinkFlows ("we", "us", and "our") uses cookies and similar technologies to recognize, monitor and track your use of our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
          </p>
        </MotionDiv>

        {/* Main Content */}
        <div className="space-y-8">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <MotionDiv
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-[#696cff]/10 rounded-lg">
                      <Icon className="w-6 h-6 text-[#696cff]" />
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-900">
                      {section.title}
                    </h2>
                  </div>
                  <div className="space-y-4">
                    {section.content.map((paragraph, idx) => (
                      <p key={idx} className="text-gray-600 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </MotionDiv>
            );
          })}
        </div>

        {/* Contact Section */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 bg-white rounded-xl shadow-sm p-8 text-center"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Questions About Cookies?
          </h2>
          <p className="text-gray-600 mb-6">
            If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
          </p>
          <a 
            href="mailto:privacy@linkflows.com"
            className="text-[#696cff] hover:underline font-medium"
          >
            privacy@linkflows.com
          </a>
        </MotionDiv>

        {/* Footer Note */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-8 text-center text-gray-500 text-sm"
        >
          <p>
            This cookie policy was last modified on February 13, 2024.
          </p>
        </MotionDiv>
      </div>
    </div>
  );
}