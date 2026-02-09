import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-end gap-4 border-b border-white/10 pb-4 mb-8"
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase tracking-tight">
          {title}
        </h2>
        <div className="h-10 w-1 bg-neon transform -skew-x-12 mb-1" />
        {subtitle && (
          <span className="hidden md:block font-mono text-neon-dim text-sm uppercase tracking-widest mb-2 pb-1">
            {subtitle}
          </span>
        )}
      </motion.div>
    </div>
  );
};

export default SectionHeader;