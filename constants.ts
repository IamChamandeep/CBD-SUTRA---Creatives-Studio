import { AssetConfig, VideoAsset, ImageAsset } from './types';

// ==========================================
// 🔧 CONFIGURATION: UPDATE COUNTS HERE
// ==========================================
// This is your "CMS". When you add videos to the folders, 
// just update these numbers to match the total file count.
export const CONFIG: AssetConfig = {
  creativeCount: 6, // Total files in /public/videos/content/
  ugcCount: 5,      // Total files in /public/videos/ugc/
  staticCount: 4    // Total files in /public/videos/static/
};

// ==========================================
// 📁 PATH GENERATORS
// ==========================================

const generateVideoList = (type: 'creative' | 'ugc', count: number): VideoAsset[] => {
  return Array.from({ length: count }, (_, i) => {
    const num = i + 1;
    
    // UPDATED: Using 'content' folder for creatives as per your setup
    const folder = type === 'creative' ? 'content' : 'ugc';
    
    // Path to your local video file
    // Example: /videos/content/1.mp4
    const src = `/videos/${folder}/${num}.mp4`;

    return {
      id: `${type}-${num}`,
      src: src,
      type: type,
      poster: undefined 
    };
  });
};

const generateImageList = (count: number): ImageAsset[] => {
  return Array.from({ length: count }, (_, i) => {
    const num = i + 1;
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