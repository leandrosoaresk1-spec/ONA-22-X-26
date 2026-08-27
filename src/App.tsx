import React, { useState, useEffect, useCallback } from 'react';
import { SLIDES } from './data/presentationData';
import { Navbar } from './components/Navbar';
import { SlideRenderer } from './components/SlideRenderer';
import { PresentationControls } from './components/PresentationControls';
import { SpeakerNotesDrawer } from './components/SpeakerNotesDrawer';
import { SlideOverviewModal } from './components/SlideOverviewModal';
import { TechnicalDrawer } from './components/TechnicalDrawer';
import { PrintDeck } from './components/PrintDeck';

export default function App() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showNotes, setShowNotes] = useState<boolean>(false);
  const [showOverview, setShowOverview] = useState<boolean>(false);
  const [showTechnical, setShowTechnical] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const currentSlide = SLIDES[currentIndex];
  const totalSlides = SLIDES.length;

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
  }, [totalSlides]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  const handleSelectSlide = useCallback((index: number) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentIndex(index);
    }
  }, [totalSlides]);

  const handleToggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  }, []);

  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Avoid intercepting if user is typing in an input
      if (['input', 'textarea', 'select'].includes((e.target as HTMLElement)?.tagName?.toLowerCase())) {
        return;
      }

      switch (e.key) {
        case 'ArrowRight':
        case 'PageDown':
        case ' ': // Space bar
          e.preventDefault();
          handleNext();
          break;
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault();
          handlePrev();
          break;
        case 'Home':
          e.preventDefault();
          setCurrentIndex(0);
          break;
        case 'End':
          e.preventDefault();
          setCurrentIndex(totalSlides - 1);
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          handleToggleFullscreen();
          break;
        case 'n':
        case 'N':
          e.preventDefault();
          setShowNotes((prev) => !prev);
          break;
        case 'o':
        case 'O':
        case 'g':
        case 'G':
          e.preventDefault();
          setShowOverview((prev) => !prev);
          break;
        case 't':
        case 'T':
          e.preventDefault();
          setShowTechnical((prev) => !prev);
          break;
        case 'Escape':
          setShowOverview(false);
          setShowTechnical(false);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, handleToggleFullscreen, totalSlides]);

  // Fullscreen change listener
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Autoplay handler (e.g. 10s per slide)
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev < totalSlides - 1) {
            return prev + 1;
          } else {
            setIsPlaying(false);
            return prev;
          }
        });
      }, 10000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, totalSlides]);

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col font-sans antialiased overflow-x-hidden">
      {/* Executive Navbar */}
      <Navbar
        currentSlide={currentSlide}
        currentIndex={currentIndex}
        totalSlides={totalSlides}
        isFullscreen={isFullscreen}
        onToggleFullscreen={handleToggleFullscreen}
        showNotes={showNotes}
        onToggleNotes={() => setShowNotes(!showNotes)}
        onToggleOverview={() => setShowOverview(true)}
        onToggleTechnical={() => setShowTechnical(true)}
        onPrint={handlePrint}
        isPlaying={isPlaying}
        onTogglePlay={() => setIsPlaying(!isPlaying)}
      />

      {/* Main Slide Stage */}
      <div className="flex-1 flex flex-col items-center justify-center relative w-full h-[calc(100vh-50px)] pb-16">
        <SlideRenderer
          slide={currentSlide}
          currentIndex={currentIndex}
          totalSlides={totalSlides}
          onNext={handleNext}
          onPrev={handlePrev}
        />

        {/* Floating Slide Navigation Controller */}
        <PresentationControls
          currentIndex={currentIndex}
          totalSlides={totalSlides}
          onPrev={handlePrev}
          onNext={handleNext}
          onSelectSlide={handleSelectSlide}
          onToggleOverview={() => setShowOverview(true)}
          onToggleNotes={() => setShowNotes(!showNotes)}
          showNotes={showNotes}
        />
      </div>

      {/* Speaker Notes Drawer */}
      <SpeakerNotesDrawer
        slide={currentSlide}
        currentIndex={currentIndex}
        totalSlides={totalSlides}
        isOpen={showNotes}
        onClose={() => setShowNotes(false)}
        onPrev={handlePrev}
        onNext={handleNext}
      />

      {/* Slide Overview / Thumbnail Modal */}
      <SlideOverviewModal
        isOpen={showOverview}
        onClose={() => setShowOverview(false)}
        currentIndex={currentIndex}
        onSelectSlide={handleSelectSlide}
      />

      {/* Technical Data / Evidence Drawer */}
      <TechnicalDrawer
        isOpen={showTechnical}
        onClose={() => setShowTechnical(false)}
      />

      {/* Clean Print Deck (visible only on window.print()) */}
      <PrintDeck />
    </div>
  );
}
