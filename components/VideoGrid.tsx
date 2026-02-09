import React from 'react';
import VideoCard from './VideoCard';
import { VideoAsset } from '../types';

interface VideoGridProps {
  videos: VideoAsset[];
}

const VideoGrid: React.FC<VideoGridProps> = ({ videos }) => {
  return (
    <div className="px-4 max-w-7xl mx-auto pb-20">
      {/* 
        Switched to Flexbox with justify-center.
        This ensures that if you only have 1 or 2 videos, they stay in the middle 
        instead of sticking to the left.
      */}
      <div className="flex flex-wrap justify-center gap-6">
        {videos.map((video, index) => (
          <VideoCard key={video.id} video={video} index={index} />
        ))}
      </div>
    </div>
  );
};

export default VideoGrid;