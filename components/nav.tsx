'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const Nav = () => {
  const navLinks = [
    { href: '/prompt-directory', label: 'Prompt Directory' },
    { href: '/ai-agents', label: 'AI Agents' },
    { href: '/business-automation', label: 'Business Automation' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/login', label: 'Login' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              PulsionAI
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.div
                key={link.href}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href={link.href}
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;