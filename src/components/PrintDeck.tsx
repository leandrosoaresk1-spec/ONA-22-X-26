import React from 'react';
import { SLIDES } from '../data/presentationData';
import { SlideRenderer } from './SlideRenderer';

export const PrintDeck: React.FC = () => {
  return (
    <div className="hidden print:block bg-white text-gray-900 w-full">
      {SLIDES.map((slide, index) => (
        <div 
          key={slide.id} 
          className="print-page w-screen h-screen p-8 bg-white flex flex-col justify-between border-b border-gray-100"
        >
          <SlideRenderer 
            slide={slide} 
            currentIndex={index} 
            totalSlides={SLIDES.length} 
          />
        </div>
      ))}
    </div>
  );
};
