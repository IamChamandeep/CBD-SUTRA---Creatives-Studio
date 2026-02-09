import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-dim blur-[100px] rounded-full mix-blend-screen animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-dim blur-[120px] rounded-full mix-blend-screen animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-neon tracking-[0.2em] text-sm md:text-base font-mono mb-4">
            PERFORMANCE MARKETING STUDIO
          </h2>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "circOut" }}
          className="font-display text-6xl md:text-8xl lg:text-9xl font-bold uppercase leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-6"
        >
          CBD <span className="text-neon inline-block hover:animate-glitch">SUTRA</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed"
        >
          We build high-converting video creatives for wellness brands.
          <span className="block mt-2 text-white font-medium">Visuals that stop the scroll.</span>
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 flex flex-col items-center gap-2 text-gray-500"
      >
        <span className="text-xs uppercase tracking-widest">Scroll for Work</span>
        <ArrowDown className="animate-bounce text-neon" size={20} />
      </motion.div>

      {/* Decorative Grid Line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-dim to-transparent opacity-50" />
    </section>
  );
};

export default Hero;