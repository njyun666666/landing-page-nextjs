import dynamic from 'next/dynamic';

export * from './Ratings';
export * from './SectionHeader';
export * from './Particle';
export const Slider = dynamic(() => import('./Slider'), { ssr: false });
export const LightBox = dynamic(() => import('lightgallery/react'), { ssr: false });
export const Counter = dynamic(() => import('./Counter'), { ssr: false });
