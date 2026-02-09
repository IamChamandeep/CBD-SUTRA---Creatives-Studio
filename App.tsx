import React from 'react';
import Hero from './components/Hero';
import SectionHeader from './components/SectionHeader';
import VideoGrid from './components/VideoGrid';
import StaticGrid from './components/StaticGrid';
import FloatingCTA from './components/FloatingCTA';
import { CREATIVE_VIDEOS, UGC_VIDEOS, STATIC_IMAGES } from './constants';

const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-dark-bg text-white selection:bg-neon selection:text-black">
      {/* Navbar - Simplified: Transparent, no background, just fixed text */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 transition-all duration-300">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="font-display font-bold text-2xl tracking-tighter uppercase text-white hover:text-gray-200 transition-colors cursor-pointer">
            CBD SUTRA
          </div>
          {/* <div className="hidden md:block font-mono text-xs text-neon tracking-widest">
            EST. 2024
          </div> */}
        </div>
      </nav>

      {/* Hero Section */}
      <Hero />

      {/* Creative Section */}
      <section id="creatives">
        <SectionHeader 
          title="Studio Creatives" 
          subtitle="High-Fidelity • 3D • Motion" 
        />
        <VideoGrid videos={CREATIVE_VIDEOS} />
      </section>

      {/* UGC Section */}
      <section id="ugc">
        <SectionHeader 
          title="UGC & Raw" 
          subtitle="Authentic • Viral • Organic" 
        />
        <div className="relative">
           {/* Subtle background separation for UGC */}
           <div className="absolute inset-0 bg-neon-dim/5 skew-y-1 -z-10 transform origin-left" />
           <VideoGrid videos={UGC_VIDEOS} />
        </div>
      </section>

      {/* Static / Moodboard Section */}
      <section id="static">
        <SectionHeader 
          title="Visual Identity" 
          subtitle="Brand • Mood • Static" 
        />
        <StaticGrid images={STATIC_IMAGES} />
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-6xl uppercase font-bold text-white mb-8">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-emerald-600">Scale?</span>
          </h2>
          <p className="text-gray-500 font-light mb-12 max-w-xl mx-auto">
            We specialize in performance creative that navigates the complexities of CBD & Wellness marketing.
          </p>
          <a 
            href="https://calendly.com/cbdsutra/dicovery-call"
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block border border-white/20 hover:border-neon text-white hover:text-neon px-8 py-4 rounded-full transition-all duration-300 font-mono tracking-widest text-sm uppercase"
          >
            Book a Call
          </a>
          <div className="mt-20 text-xs text-gray-700 font-mono">
            © {new Date().getFullYear()} CBD SUTRA. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>

      <FloatingCTA />
    </main>
  );
};

export default App;