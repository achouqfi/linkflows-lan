'use client';

import { motion } from 'framer-motion';
import { Shield, User, Database, Bell, Lock, Eye, Mail, Globe } from 'lucide-react';

const MotionDiv = motion.div;

export default function PrivacyPolicy() {
  const sections = [
    {
      id: 'information-collection',
      icon: User,
      title: 'Information Collection',
      content: [
        'We collect information that you provide directly to us, including:',
        '• Name and contact information when you create an account',
        '• Payment information when you subscribe to our services',
        '• Profile information and preferences',
        '• Content and data you upload to our platform',
        '• Communications you send to us'
      ]
    },
    {
      id: 'data-usage',
      icon: Database,
      title: 'How We Use Your Data',
      content: [
        'We use the collected information for various purposes:',
        '• Providing and maintaining our services',
        '• Processing your transactions',
        '• Sending you service updates and marketing communications',
        '• Analyzing usage patterns to improve our platform',
        '• Detecting and preventing fraud'
      ]
    },
    {
      id: 'data-sharing',
      icon: Globe,
      title: 'Information Sharing',
      content: [
        'We may share your information with:',
        '• Service providers who assist in our operations',
        '• Partners for marketing purposes (with your consent)',
        '• Law enforcement when required by law',
        '• Other parties in connection with a merger or acquisition'
      ]
    },
    {
      id: 'data-security',
      icon: Lock,
      title: 'Data Security',
      content: [
        'We implement various security measures including:',
        '• Encryption of sensitive data',
        '• Regular security assessments',
        '• Access controls and authentication',
        '• Secure data storage and transmission',
        '• Regular backup procedures'
      ]
    },
    {
      id: 'cookies',
      icon: Eye,
      title: 'Cookies and Tracking',
      content: [
        'We use cookies and similar technologies to:',
        '• Remember your preferences',
        '• Analyze usage patterns',
        '• Customize your experience',
        '• Provide targeted advertising',
        'You can control cookie settings through your browser'
      ]
    },
    {
      id: 'your-rights',
      icon: Shield,
      title: 'Your Rights',
      content: [
        'You have the right to:',
        '• Access your personal data',
        '• Correct inaccurate data',
        '• Request deletion of your data',
        '• Object to data processing',
        '• Withdraw consent at any time'
      ]
    },
    {
      id: 'notifications',
      icon: Bell,
      title: 'Updates to This Policy',
      content: [
        'We may update this privacy policy from time to time. We will notify you of any changes by:',
        '• Posting the new policy on our website',
        '• Sending you an email notification',
        '• Displaying a notice in your account',
        'Your continued use of our services after changes indicates acceptance'
      ]
    },
    {
      id: 'contact',
      icon: Mail,
      title: 'Contact Us',
      content: [
        'If you have any questions about this privacy policy, please contact us:',
        '• Email: privacy@linkflows.com',
        '• Address: 123 Privacy Street, San Francisco, CA 94105',
        '• Phone: +1 (555) 123-4567',
        'We aim to respond to all inquiries within 48 hours'
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
            Privacy Policy
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
          <p className="text-gray-600 leading-relaxed">
            At LinkFlows, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the platform.
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

        {/* Footer Note */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-center text-gray-500 text-sm"
        >
          <p>
            This privacy policy was last modified on February 13, 2024. 
            By using our service, you consent to this privacy policy.
          </p>
        </MotionDiv>
      </div>
    </div>
  );
}