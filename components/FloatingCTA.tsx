import React from 'react';
import { MessageSquarePlus } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingCTA: React.FC = () => {
  return (
    <motion.a
      href="https://calendly.com/cbdsutra/dicovery-call"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="absolute inset-0 bg-neon blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300 rounded-full" />
      <button className="relative bg-black border border-neon text-neon px-6 py-3 rounded-full flex items-center gap-3 shadow-[0_0_10px_rgba(0,255,106,0.1)] hover:shadow-[0_0_20px_rgba(0,255,106,0.3)] transition-all duration-300 transform hover:scale-105">
        <span className="font-display uppercase tracking-wider font-bold text-sm">Book a Call</span>
        <MessageSquarePlus size={20} />
      </button>
    </motion.a>
  );
};

export default FloatingCTA;