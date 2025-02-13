'use client';

import { motion } from 'framer-motion';
import { Book, Shield, AlertCircle, FileText, DollarSign, Scale, Clock, MessageCircle } from 'lucide-react';


const MotionDiv = motion.div;


export default function TermsOfService() {
  const sections = [
    {
      id: 'acceptance',
      icon: Book,
      title: 'Acceptance of Terms',
      content: [
        'By accessing or using LinkFlows ("the Service"), you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access the Service.',
        'We reserve the right to modify these terms at any time. We will notify you of any changes by posting the new Terms of Service on this page.',
        'Your continued use of the Service after changes constitutes acceptance of the modified terms.'
      ]
    },
    {
      id: 'account',
      icon: Shield,
      title: 'Account Responsibilities',
      content: [
        'You are responsible for:',
        '• Maintaining the confidentiality of your account',
        '• All activities that occur under your account',
        '• Ensuring your account information is accurate',
        '• Notifying us immediately of any unauthorized access',
        'We reserve the right to terminate accounts that violate these terms.'
      ]
    },
    {
      id: 'service-rules',
      icon: AlertCircle,
      title: 'Service Rules and Restrictions',
      content: [
        'When using our Service, you agree not to:',
        '• Violate any applicable laws or regulations',
        '• Infringe upon intellectual property rights',
        '• Upload malicious content or software',
        '• Attempt to gain unauthorized access',
        '• Use the service for spam or harassment',
        '• Interfere with the proper working of the Service'
      ]
    },
    {
      id: 'content',
      icon: FileText,
      title: 'Content and Intellectual Property',
      content: [
        'By using our Service, you acknowledge that:',
        '• We retain all rights to the Services content and functionality',
        '• You maintain ownership of your content',
        '• You grant us license to use your content for service provision',
        '• You are responsible for content you post',
        '• We may remove content that violates these terms'
      ]
    },
    {
      id: 'payment',
      icon: DollarSign,
      title: 'Payment Terms',
      content: [
        'Regarding payments and subscriptions:',
        '• Fees are charged according to your selected plan',
        '• All payments are non-refundable',
        '• Subscriptions auto-renew unless cancelled',
        '• Prices may change with 30 days notice',
        '• You are responsible for applicable taxes'
      ]
    },
    {
      id: 'liability',
      icon: Scale,
      title: 'Limitation of Liability',
      content: [
        'To the maximum extent permitted by law:',
        '• The Service is provided "as is"',
        '• We are not liable for any indirect damages',
        '• Our liability is limited to the amount paid for the Service',
        '• We do not guarantee uninterrupted service',
        '• We are not responsible for third-party content'
      ]
    },
    {
      id: 'termination',
      icon: Clock,
      title: 'Term and Termination',
      content: [
        'Regarding account termination:',
        '• You may terminate your account at any time',
        '• We may terminate accounts for violations',
        '• Termination may occur without prior notice',
        '• Some terms survive termination',
        '• Upon termination, you lose access to the Service'
      ]
    },
    {
      id: 'disputes',
      icon: MessageCircle,
      title: 'Dispute Resolution',
      content: [
        'In case of disputes:',
        '• We encourage direct resolution',
        '• Disputes will be resolved through arbitration',
        '• The governing law is California law',
        '• You waive right to class action',
        '• Small claims court is an option'
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
            Terms of Service
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
            Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the LinkFlows platform. Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms.
          </p>
        </MotionDiv>

        {/* Table of Contents */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-xl shadow-sm p-8 mb-12"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Contents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sections.map((section, index) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="flex items-center gap-2 text-gray-600 hover:text-[#696cff] transition-colors"
              >
                <span className="text-sm">{index + 1}.</span>
                {section.title}
              </a>
            ))}
          </div>
        </MotionDiv>

        {/* Main Content */}
        <div className="space-y-8">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <MotionDiv
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm overflow-hidden scroll-mt-20"
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
            If you have any questions about these Terms, please contact us at{' '}
            <a href="mailto:legal@linkflows.com" className="text-[#696cff] hover:underline">
              legal@linkflows.com
            </a>
          </p>
        </MotionDiv>
      </div>
    </div>
  );
}