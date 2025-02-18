'use client'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiChevronDown, FiUser, FiLock } from 'react-icons/fi';
import Image from "next/image";
import Link from "next/link";

export default function EnhancedNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services'},
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
    { name: 'FAQ', href: '#faq' }
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const SignUpModal = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={() => setShowSignUpModal(false)}
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.95 }}
        className="bg-white rounded-xl p-6 max-w-md w-full shadow-xl"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Get Started</h2>
          <button
            onClick={() => setShowSignUpModal(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <FiX size={24} />
          </button>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <div className="relative">
              <FiUser className="absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#696cff] focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <FiLock className="absolute left-3 top-3 text-gray-400" />
              <input
                type="password"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#696cff] focus:border-transparent"
                placeholder="Create a password"
              />
            </div>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 bg-gradient-to-r from-[#696cff] to-[#567bfb] text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all"
          >
            Create Account
          </motion.button>
          
          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{' '}
            <button className="text-[#696cff] hover:underline font-medium">
              Log in
            </button>
          </p>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 cursor-pointer"
          >
          <Link href="/" className="flex items-center transition-transform duration-300 hover:scale-105">
              <span className="flex items-center space-x-2 text-2xl font-semibold text-[#567bfb]">
                <Image
                  src="/logo.svg"
                  alt="linkFlows"
                  width={50}
                  height={50}
                  className="w-[50px] h-[50px]"
                  priority
                />
                <span className=" font-sans tracking-tight">
                  LinkFlows
                </span>
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.name} className="relative dropdown-container">
                <a
                  href={item.href}
                  onMouseEnter={() => {
                    setActiveTab(item.name);
                    if (item.children) setIsDropdownOpen(true);
                  }}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1 ${
                    activeTab === item.name
                      ? 'text-[#696cff]'
                      : 'text-gray-600 hover:text-[#696cff]'
                  }`}
                >
                  {item.name}
                  {item.children && <FiChevronDown className={`transform transition-transform ${isDropdownOpen && activeTab === item.name ? 'rotate-180' : ''}`} />}
                </a>
                
                {/* Dropdown Menu */}
                {item.children && isDropdownOpen && activeTab === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 w-48 py-2 mt-1 bg-white rounded-lg shadow-lg border border-gray-100"
                  >
                    {item.children.map((child) => (
                      <a
                        key={child.name}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#696cff] transition-colors"
                      >
                        {child.name}
                      </a>
                    ))}
                  </motion.div>
                )}
                
                {activeTab === item.name && !item.children && (
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-[#696cff]"
                    layoutId="underline"
                  />
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a href='https://app.linkflows.com/' className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-[#696cff] transition-colors">
              Log in
            </a>
            <a
              href='https://app.linkflows.com/auth/register-basic'
              className="px-6 py-2 bg-gradient-to-r from-[#696cff] to-[#567bfb] text-white rounded-lg text-sm font-medium shadow-md hover:shadow-lg transition-all"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-2 space-y-1">
                {navItems.map((item) => (
                  <div key={item.name}>
                    <a
                      href={item.href}
                      className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                      onClick={() => {
                        if (!item.children) setIsOpen(false);
                      }}
                    >
                      <div className="flex justify-between items-center">
                        {item.name}
                        {item.children && <FiChevronDown />}
                      </div>
                    </a>
                    {item.children && (
                      <div className="pl-4 space-y-1">
                        {item.children.map((child) => (
                          <a
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {child.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="border-t mt-2 pt-4 space-y-3 px-4">
                <a href='https://app.linkflows.com/' className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-[#696cff] transition-colors">
                    Log in
                  </a>
                  <a
                    href='https://app.linkflows.com/auth/register-basic'
                    className="px-6 py-2 bg-gradient-to-r from-[#696cff] to-[#567bfb] text-white rounded-lg text-sm font-medium shadow-md hover:shadow-lg transition-all"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Sign Up Modal */}
        <AnimatePresence>
          {showSignUpModal && <SignUpModal />}
        </AnimatePresence>
      </div>
    </nav>
  );
}