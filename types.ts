export interface VideoAsset {
  id: string;
  src: string;
  type: 'creative' | 'ugc';
  poster?: string;
}

export interface ImageAsset {
  id: string;
  src: string;
}

export interface AssetConfig {
  creativeCount: number;
  ugcCount: number;
  staticCount: number;
}