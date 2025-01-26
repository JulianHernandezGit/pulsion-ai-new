'use client';

import { motion } from 'framer-motion';
import { RocketLaunchIcon, ChartBarIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const cards = [
    {
      title: "Advanced Prompt Engineering",
      description: "Our hundreds of prompts were written and refined by a team of machine learning and AI engineers, based on over 280 ARXIV papers and tested with industry professionals.",
      icon: RocketLaunchIcon,
      benefits: [
        "Research-backed prompt library",
        "40% faster execution times",
        "Industry-validated templates"
      ]
    },
    {
      title: "AI Agents Integration",
      description: "Leverage our suite of specialized AI agents that autonomously handle complex tasks while seamlessly integrating with your existing workflows.",
      icon: ChartBarIcon,
      benefits: [
        "Autonomous task execution",
        "Multi-agent collaboration",
        "Custom agent development"
      ]
    },
    {
      title: "Intelligent Automation",
      description: "Transform your operations with our enterprise-grade automation platform, powered by state-of-the-art machine learning models.",
      icon: ShieldCheckIcon,
      benefits: [
        "End-to-end process automation",
        "Smart workflow optimization",
        "Real-time adaptation"
      ]
    }
  ];
  
  export const FeaturesSection = () => {
    return (
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 py-24 overflow-hidden">
        {/* ... (keep existing SEO heading and background decoration) */}
  
        <div className="container mx-auto px-4 relative">
          {/* ... (keep existing motion.div for title) */}
  
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={{
                  initial: { opacity: 0, y: 50 },
                  animate: { opacity: 1, y: 0, transition: { delay: index * 0.2 } }
                }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 
                  hover:bg-white/10 transition-all duration-300 
                  border border-white/10 shadow-xl 
                  hover:shadow-2xl hover:shadow-purple-500/20
                  relative z-10"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-white/20 to-white/5 
                  rounded-lg flex items-center justify-center mb-6
                  shadow-lg"
                >
                  <card.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-4">{card.title}</h4>
                <p className="text-white/80 mb-6">{card.description}</p>
                <ul className="space-y-3">
                  {card.benefits.map((benefit) => (
                    <li key={benefit} className="text-white/80 flex items-center">
                      <span className="w-1.5 h-1.5 bg-white/60 rounded-full mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <div className="flex flex-col items-center">
            <button className="px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
              Free Trial
            </button>
          </div>
          <button className="px-8 py-4 bg-indigo-500/30 text-white rounded-lg font-semibold border border-white/20 hover:bg-indigo-500/40 transition-all">
            Book a Meeting
          </button>
        </motion.div>
      </div>
      <span className="text-sm text-white/80 mt-2 block text-center">No Credit Card Required</span>
    </section>
  );
};