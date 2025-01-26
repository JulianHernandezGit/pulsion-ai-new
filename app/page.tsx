'use client';

import { motion } from 'framer-motion';
import { GradientButton } from '@/components/ui/button';
import { FeaturesSection } from '@/components/features-section';

export default function Home() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
              Transform Your Business with Advanced AI Solutions
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to streamline operations, enhance customer experiences, and drive innovation across your organization.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <GradientButton href="/prompt-directory">
                Prompt Directory
              </GradientButton>
              <GradientButton href="/ai-agents">
                AI Agents
              </GradientButton>
              <GradientButton href="/automations">
                Automations
              </GradientButton>
            </div>
          </motion.div>
        </div>
      </div>
      <FeaturesSection />
    </>
  );
}