import { VideoAsset, ImageAsset } from './types';

// ==================================================================================
// 🎥 VIDEO CONFIGURATION
// ==================================================================================
// EASY WAY TO ADD VIDEOS:
// 1. Apne videos 'public/videos/content' folder mein daalein.
// 2. Niche list mein bas filename change karein (e.g., '/videos/content/mera-video.mp4').
// 3. Aap Google Drive / Cloudinary direct links bhi use kar sakte hain.
// ==================================================================================

export const CREATIVE_VIDEOS: VideoAsset[] = [
  {
    id: 'creative-1',
    type: 'creative',
    src: '/videos/content/1.mp4', // <--- Yahan apni video file ka naam likhein
  },
  {
    id: 'creative-2',
    type: 'creative',
    src: '/videos/content/2.mp4', 
  },
  {
    id: 'creative-3',
    type: 'creative',
    src: '/videos/content/3.mp4',
  },
  // Aur videos add karne ke liye upar wala block copy-paste karein
];

export const UGC_VIDEOS: VideoAsset[] = [
  {
    id: 'ugc-1',
    type: 'ugc',
    src: '/videos/ugc/1.mp4',
  },
  {
    id: 'ugc-2',
    type: 'ugc',
    src: '/videos/ugc/2.mp4',
  },
  // Add more as needed
];

// ==========================================
// 🖼️ IMAGE CONFIGURATION
// ==========================================

export const STATIC_IMAGES: ImageAsset[] = [
  { id: 'static-1', src: '/videos/static/1.jpg' },
  { id: 'static-2', src: '/videos/static/2.jpg' },
  { id: 'static-3', src: '/videos/static/3.jpg' },
  { id: 'static-4', src: '/videos/static/4.jpg' },
];

export const SITE_META = {
  title: "CBD SUTRA",
  tagline: "PERFORMANCE CREATIVES",
  contactUrl: "#book-call"
};