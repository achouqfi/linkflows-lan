'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Mail, ArrowRight } from 'lucide-react';
import Link from 'next/link';


const MotionDiv = motion.div;

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setIsSubscribed(true);
    setTimeout(() => {
      setIsSubscribed(false);
      setEmail('');
    }, 3000);
  };

  const footerLinks = {
        product: [
          { name: 'Home', href: '/' },
          { name: 'About', href: '/about' },
          { name: 'Services', href: '/services' },
          { name: 'Contact', href: '/contact' }
        ],
        company: [
          { name: 'About Us', href: '/about' },
          { name: 'Blog', href: '/blog' },
          { name: 'Help Center', href: '/help-center' }
        ],
        resources: [
          { name: 'Privacy Policy', href: '/privacy-policy' },
          { name: 'Terms of Service', href: '/terms-of-service' },
          { name: 'Cookie Policy', href: '/cookie-policy' },
          { name: 'Help Center', href: '/help-center' }
        ]
  };

  const socialLinks = [

  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-6">
                <span className="text-2xl font-bold bg-gradient-to-r from-[#696cff] to-[#567bfb] bg-clip-text text-transparent">
                  LinkFlows
                </span>
              </div>
              <p className="text-gray-400 mb-8 max-w-md">
                Automate your social media presence and grow your audience with our AI-powered platform. 
                Schedule content, analyze performance, and engage with your community.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <MotionDiv
                      key={social.name}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <a
                        href={social.href}
                        className="p-2 rounded-full bg-gray-800 hover:bg-[#696cff] transition-colors"
                        aria-label={`Visit our ${social.name} page`}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    </MotionDiv>
                  );
                })}
              </div>
            </MotionDiv>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <div key={category}>
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-white font-semibold uppercase tracking-wider mb-4">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-[#696cff] transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </MotionDiv>
            </div>
          ))}
        </div>


        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} LinkFlows. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link 
                href="/privacy-policy" 
                className="text-gray-400 hover:text-[#696cff] text-sm transition-colors"
            >
                Privacy Policy
            </Link>
            <Link 
                href="/terms-of-service" 
                className="text-gray-400 hover:text-[#696cff] text-sm transition-colors"
            >
                Terms of Service
            </Link>
            <Link 
                href="/cookie-policy" 
                className="text-gray-400 hover:text-[#696cff] text-sm transition-colors"
            >
                Cookie Policy
            </Link>
            </div>
        </div>
      </div>
    </footer>
  );
}