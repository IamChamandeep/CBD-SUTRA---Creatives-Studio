import { VideoAsset, ImageAsset } from './types';

// ==================================================================================
// 🎥 VIDEO CONFIGURATION (ONLINE / VIRTUAL WAY)
// ==================================================================================
// AB FOLDER MEIN VIDEO DALNE KI ZAROORAT NAHI HAI.
// Niche maine kuch ONLINE sample links daale hain taaki aap check kar sakein.
// 
// APNI VIDEOS KAISE LAGAYEIN:
// 1. Apni video Discord, Cloudinary, ya kisi bhi hosting par upload karein.
// 2. Wahan se "Direct Link" copy karein (jo .mp4 pe khatam ho).
// 3. Niche 'src' mein wo link paste kar dein.
// ==================================================================================

export const CREATIVE_VIDEOS: VideoAsset[] = [
  {
    id: 'creative-1',
    type: 'creative',
    src: 'https://res.cloudinary.com/dzmif3cud/video/upload/v1770673655/Space_Gummies_Ad_final_z4pmna.mp4', 
  },
  {
    id: 'creative-2',
    type: 'creative',
    src: 'https://res.cloudinary.com/dzmif3cud/video/upload/v1770674081/Brelixi_motion_egloeo.mp4', 
  },
  {
    id: 'creative-3',
    type: 'creative',
    src: 'https://res.cloudinary.com/dzmif3cud/video/upload/v1770674094/Calm_sllvlq.mp4',
  },
  {
    id: 'creative-4',
    type: 'creative',
    src: 'https://res.cloudinary.com/dzmif3cud/video/upload/v1770674170/Mush_mouth_hpp5mq.mp4',
  },
  {
    id: 'creative-5',
    type: 'creative',
    src: 'https://res.cloudinary.com/dzmif3cud/video/upload/v1770674203/Sunmed_jnukbz.mp4',
  },
  {
    id: 'creative-6',
    type: 'creative',
    src: 'https://res.cloudinary.com/dzmif3cud/video/upload/v1770674133/EVN_motion_02_kqnsrc.mp4',
  },
  {
    id: 'creative-7',
    type: 'creative',
    src: 'https://res.cloudinary.com/dzmif3cud/video/upload/v1770674150/Lauricidin_au8ykn.mp4',
  },
  {
    id: 'creative-8',
    type: 'creative',
    src: 'https://res.cloudinary.com/dzmif3cud/video/upload/v1770674120/ADHD_gyyspb.mp4',
  },
];

export const UGC_VIDEOS: VideoAsset[] = [
  {
    id: 'ugc-1',
    type: 'ugc',
    src: 'https://res.cloudinary.com/dzmif3cud/video/upload/v1770677021/Untitled-2026-02-06_17_46_53_copy_-highlight_kqzvne.mp4',
  },
  {
    id: 'ugc-2',
    type: 'ugc',
    src: 'https://res.cloudinary.com/dzmif3cud/video/upload/v1770676440/body_butter_copy_F0C60928-CCC0-4376-9A61-7FCA91EC2989_y1rvmu.mov',
  },
  {
    id: 'ugc-3',
    type: 'ugc',
    src: 'https://res.cloudinary.com/dzmif3cud/video/upload/v1770676891/3_f6tzhx.mp4',
  },
  {
    id: 'ugc-4',
    type: 'ugc',
    src: 'https://res.cloudinary.com/dzmif3cud/video/upload/v1770676436/C_C_UGC_Video_-_Does_A_Bear_Shit_In_The_Woods_Legends_Gummies_Legal_1_gniio6.mp4',
  },
  {
    id: 'ugc-5',
    type: 'ugc',
    src: 'https://res.cloudinary.com/dzmif3cud/video/upload/v1770676890/2_jdvmr7.mp4',
  },
  {
    id: 'ugc-6',
    type: 'ugc',
    src: 'https://res.cloudinary.com/dzmif3cud/video/upload/v1770676443/Unboxing_UGC_b5e5xn.mp4',
  },
  {
    id: 'ugc-7',
    type: 'ugc',
    src: 'https://res.cloudinary.com/dzmif3cud/video/upload/v1770676439/Olivia_Anderson_Draft_1_n4iwte.mp4',
  },
  {
    id: 'ugc-8',
    type: 'ugc',
    src: 'https://res.cloudinary.com/dzmif3cud/video/upload/v1770678832/body_oil_mushrooms_copy_4FD126AF-80F3-4B71-83FB-2A3581AC63E8_jvygom.mov',
  },
];

// ==========================================
// 🖼️ IMAGE CONFIGURATION (Direct Links)
// ==========================================

export const STATIC_IMAGES: ImageAsset[] = [
  { id: 'static-1', src: 'https://res.cloudinary.com/dzmif3cud/image/upload/v1770674201/Sunmed_01_ddmnfv.jpg' },
  { id: 'static-2', src: 'https://res.cloudinary.com/dzmif3cud/image/upload/v1770674180/Purity_products_y3usxw.jpg' },
  { id: 'static-3', src: 'https://res.cloudinary.com/dzmif3cud/image/upload/v1770674166/Mush_mouth_02_nm1b2q.jpg' },
  { id: 'static-4', src: 'https://res.cloudinary.com/dzmif3cud/image/upload/v1770673645/C_C_01_nfg8vd.jpg' },
  { id: 'static-5', src: 'https://res.cloudinary.com/dzmif3cud/image/upload/v1770675242/everwell_03_szdatp.png' },
  { id: 'static-6', src: 'https://res.cloudinary.com/dzmif3cud/image/upload/v1770675260/Lauricidin_mmhong.jpg' },
  { id: 'static-7', src: 'https://res.cloudinary.com/dzmif3cud/image/upload/v1770674201/Sunmed_02_qvnrsy.jpg' },
  { id: 'static-8', src: 'https://res.cloudinary.com/dzmif3cud/image/upload/v1770675908/Task_02_Story_siagl3.jpg' },
];

export const SITE_META = {
  title: "CBD SUTRA",
  tagline: "PERFORMANCE CREATIVES",
  contactUrl: "https://calendly.com/cbdsutra/dicovery-call"
};