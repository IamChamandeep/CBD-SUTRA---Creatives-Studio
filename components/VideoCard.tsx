import React, { useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { VideoAsset } from '../types';
import { motion, useInView } from 'framer-motion';

interface VideoCardProps {
  video: VideoAsset;
  index: number;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, index }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Only play when in view
  const isInView = useInView(containerRef, {
    margin: "0px 0px -100px 0px", // Preload slightly before, but play when mostly visible
    amount: 0.4 // 40% of item visible to play
  });

  useEffect(() => {
    if (isInView) {
      const playPromise = videoRef.current?.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(error => console.log("Autoplay prevented:", error));
      }
    } else {
      videoRef.current?.pause();
      setIsPlaying(false);
    }
  }, [isInView]);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click if we add one later
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative mb-6 break-inside-avoid group rounded-xl overflow-hidden bg-dark-card border border-white/5 hover:border-neon/50 transition-all duration-500 hover:shadow-[0_0_20px_rgba(0,255,106,0.15)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-[9/16] relative w-full bg-gray-900">
        <video
          ref={videoRef}
          src={video.src}
          poster={video.poster}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loop
          playsInline
          muted={true} // Default muted prop
        />
        
        {/* Grain overlay for UGC feel (optional, applies to all for consistent vibe) */}
        {video.type === 'ugc' && (
          <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none mix-blend-overlay" />
        )}

        {/* Shadow Overlay for text readability if needed, kept minimal */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Mute Control */}
        <button
          onClick={toggleMute}
          className={`absolute bottom-4 right-4 p-2 rounded-full backdrop-blur-md transition-all duration-300 transform ${
            isHovered || !isMuted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          } ${
            !isMuted 
              ? 'bg-neon text-black shadow-[0_0_10px_rgba(0,255,106,0.6)]' 
              : 'bg-black/50 text-white border border-white/20 hover:bg-black/70'
          }`}
        >
          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>

        {/* Status Indicator (Optional, subtle) */}
        <div className={`absolute top-4 left-4 flex items-center gap-2 transition-opacity duration-300 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}>
           <div className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
           {/* <span className="text-[10px] font-mono text-neon uppercase tracking-widest">Live</span> */}
        </div>
      </div>
    </motion.div>
  );
};

export default VideoCard;