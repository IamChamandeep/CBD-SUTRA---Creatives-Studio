import React from 'react';
import { ImageAsset } from '../types';
import { motion } from 'framer-motion';

interface StaticGridProps {
  images: ImageAsset[];
}

const StaticGrid: React.FC<StaticGridProps> = ({ images }) => {
  return (
    <div className="px-4 max-w-7xl mx-auto pb-32">
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-lg aspect-[9/16] bg-gray-900"
            >
              <div className="absolute inset-0 bg-neon/0 group-hover:bg-neon/10 transition-colors duration-300 z-10 pointer-events-none" />
              <img 
                src={img.src} 
                alt="Brand Moodboard" 
                className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 w-full p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <p className="text-neon font-mono text-xs tracking-widest uppercase">Visual ID 0{index + 1}</p>
              </div>
            </motion.div>
          ))}
       </div>
    </div>
  );
};

export default StaticGrid;