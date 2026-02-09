import React, { useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX, AlertTriangle, Play, Pause } from 'lucide-react';
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
  const [hasError, setHasError] = useState(false);
  
  // Only play when in view
  const isInView = useInView(containerRef, {
    margin: "0px 0px -100px 0px", 
    amount: 0.4 
  });

  // Handle Autoplay based on scroll position
  useEffect(() => {
    if (isInView && !hasError && videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => {
            // Autoplay blocked or failed, waiting for user interaction
            setIsPlaying(false);
          });
      }
    } else if (!isInView && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [isInView, hasError]);

  // Toggle Mute (Independent of Play/Pause)
  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering the card click
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  // Manual Play/Pause Toggle on Card Click
  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group rounded-xl overflow-hidden bg-dark-card border border-white/5 hover:border-neon/50 transition-all duration-500 hover:shadow-[0_0_20px_rgba(0,255,106,0.15)] w-full sm:w-[calc(50%-1.5rem)] md:w-[calc(33.33%-1.5rem)] lg:w-[calc(25%-1.5rem)] max-w-sm cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={togglePlay}
    >
      <div className="aspect-[9/16] relative w-full bg-gray-900 flex items-center justify-center">
        {!hasError ? (
          <video
            ref={videoRef}
            src={video.src}
            poster={video.poster}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loop
            playsInline
            muted={true} // Default muted for autoplay policy
            onError={() => {
              console.warn(`Video failed to load: ${video.src}`);
              setHasError(true);
            }}
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-gray-500 p-4 text-center h-full w-full bg-gray-900/50">
            <AlertTriangle className="mb-2 text-neon" />
            <span className="text-xs font-mono uppercase">Video Not Found</span>
            <span className="text-[10px] mt-1 opacity-50 break-all px-4">{video.src}</span>
          </div>
        )}
        
        {video.type === 'ugc' && !hasError && (
          <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none mix-blend-overlay" />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {!hasError && (
          <>
            {/* Play/Pause Status Indicator (Center) - Only shows briefly on toggle or hover if paused */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[1px]">
                 <div className="p-4 rounded-full bg-black/50 text-white backdrop-blur-md border border-white/10">
                    <Play size={24} fill="currentColor" />
                 </div>
              </div>
            )}

            {/* Mute Button (Bottom Right) */}
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

            {/* Live Indicator (Top Left) */}
            <div className={`absolute top-4 left-4 flex items-center gap-2 transition-opacity duration-300 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}>
               <div className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default VideoCard;