import dynamic from 'next/dynamic';

export * from './Ratings';
export * from './SectionHeader';
export * from './Particle';
export const Slider = dynamic(() => import('./Slider'), { ssr: false });
