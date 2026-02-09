import { AssetConfig, VideoAsset, ImageAsset } from './types';

// ==========================================
// 🔧 CONFIGURATION: UPDATE COUNTS HERE
// ==========================================
// This is your "CMS". When you add videos to the folders, 
// just update these numbers to match the total file count.
export const CONFIG: AssetConfig = {
  creativeCount: 6, // Total files in /public/videos/creatives/
  ugcCount: 5,      // Total files in /public/videos/ugc/
  staticCount: 4    // Total files in /public/videos/static/
};

// ==========================================
// 📁 PATH GENERATORS
// ==========================================

const generateVideoList = (type: 'creative' | 'ugc', count: number): VideoAsset[] => {
  return Array.from({ length: count }, (_, i) => {
    const num = i + 1;
    // The folder name logic
    const folder = type === 'creative' ? 'creatives' : 'ugc';
    
    // Path to your local video file
    // Example: /videos/creatives/1.mp4
    const src = `/videos/${folder}/${num}.mp4`;

    return {
      id: `${type}-${num}`,
      src: src,
      type: type,
      // We assume you might have a poster.jpg, otherwise the video first frame is used.
      // If you don't have posters, you can remove the poster line or leave it null.
      poster: undefined 
    };
  });
};

const generateImageList = (count: number): ImageAsset[] => {
  return Array.from({ length: count }, (_, i) => {
    const num = i + 1;
    // Path to your local image file
    // Example: /videos/static/1.jpg
    return {
      id: `static-${num}`,
      src: `/videos/static/${num}.jpg` 
    };
  });
};

export const CREATIVE_VIDEOS = generateVideoList('creative', CONFIG.creativeCount);
export const UGC_VIDEOS = generateVideoList('ugc', CONFIG.ugcCount);
export const STATIC_IMAGES = generateImageList(CONFIG.staticCount);

export const SITE_META = {
  title: "CBD SUTRA",
  tagline: "PERFORMANCE CREATIVES",
  contactUrl: "#book-call"
};