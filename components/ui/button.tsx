'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
}

export const GradientButton = ({ href, children }: ButtonProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative overflow-hidden"
    >
      <Link
        href={href}
        className="inline-block px-8 py-3 text-white font-medium rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all duration-200"
      >
        {children}
        <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 animate-shine" />
      </Link>
    </motion.div>
  );
};