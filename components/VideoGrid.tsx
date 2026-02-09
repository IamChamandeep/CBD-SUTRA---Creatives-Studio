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
        Masonry Layout using CSS Columns.
        This allows true masonry (elements stack vertically first) which handles varying aspect ratios better than CSS Grid for this purpose,
        though here we are forcing 9:16 so heights are consistent.
      */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
        {videos.map((video, index) => (
          <VideoCard key={video.id} video={video} index={index} />
        ))}
      </div>
    </div>
  );
};

export default VideoGrid;