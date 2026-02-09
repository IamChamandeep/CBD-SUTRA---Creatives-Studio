import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Asterisk } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-4 overflow-hidden pt-20">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-neon-dim/20 blur-[120px] rounded-full mix-blend-screen" />
         <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-neon-dim/10 blur-[100px] rounded-full mix-blend-screen" />
      </div>

      <div className="z-10 text-center max-w-6xl mx-auto flex flex-col items-center relative">
        
        {/* Decorative Rotating Star (Left) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1, rotate: 360 }}
          transition={{ 
            opacity: { duration: 1 }, 
            scale: { duration: 0.5 },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" } 
          }}
          className="absolute -left-4 md:-left-24 top-0 md:top-10 text-neon hidden md:block"
        >
          <Asterisk size={80} strokeWidth={2.5} />
        </motion.div>

        {/* Top Pill / Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm shadow-lg shadow-black/20"
        >
          <span className="w-2 h-2 rounded-full bg-neon animate-pulse shadow-[0_0_10px_#00FF6A]" />
          <span className="text-xs md:text-sm font-mono tracking-wider uppercase text-gray-300">
            $175M SPENT ON OUR ADS
          </span>
        </motion.div>

        {/* Main Headline */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight text-white mb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Scaling CBD Brands with
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-2"
          >
            <span>Diverse, Data-Driven</span>
            <span className="relative inline-block px-2">
               <span className="relative z-10">Ad Creative</span>
               {/* Hand-drawn Circle SVG */}
               <svg 
                 className="absolute left-[-10%] top-[-20%] w-[120%] h-[150%] -z-10 text-neon pointer-events-none" 
                 viewBox="0 0 300 100" 
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg"
               >
                 <motion.path
                   d="M15.5 56.5C15.5 56.5 40.5 13.5 153.5 13.5C266.5 13.5 288.5 46.5 277.5 69.5C266.5 92.5 158.5 91.5 83.5 83.5C40.6625 78.9312 8.5 61 24.5 39.5"
                   stroke="currentColor"
                   strokeWidth="5"
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   initial={{ pathLength: 0, opacity: 0 }}
                   animate={{ pathLength: 1, opacity: 1 }}
                   transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }}
                 />
               </svg>
            </span>
          </motion.div>
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto font-light leading-relaxed mb-10"
        >
          One winning ad can change everything. <br className="hidden md:block"/>
          We help you find it faster with performance-first creatives.
        </motion.p>

        {/* CTA Button */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a
            href="https://calendly.com/cbdsutra/dicovery-call"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-black transition-all duration-300 bg-neon font-display uppercase tracking-wider rounded-xl hover:bg-white hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,106,0.4)]"
          >
             <span className="relative">BOOK A CALL</span>
          </a>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown className="animate-bounce text-gray-600" size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;