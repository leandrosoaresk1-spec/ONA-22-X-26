import React, { useState, useEffect } from 'react';
import { 
  Maximize2, 
  Minimize2, 
  FileText, 
  Grid, 
  Database, 
  Printer, 
  Play, 
  Pause, 
  Clock, 
  ChevronRight
} from 'lucide-react';
import { SlideData } from '../types';
import { SantaCasaLogo } from './SantaCasaLogo';

interface NavbarProps {
  currentSlide: SlideData;
  currentIndex: number;
  totalSlides: number;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  showNotes: boolean;
  onToggleNotes: () => void;
  onToggleOverview: () => void;
  onToggleTechnical: () => void;
  onPrint: () => void;
  isPlaying: boolean;
  onTogglePlay: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentSlide,
  currentIndex,
  totalSlides,
  isFullscreen,
  onToggleFullscreen,
  showNotes,
  onToggleNotes,
  onToggleOverview,
  onToggleTechnical,
  onPrint,
  isPlaying,
  onTogglePlay,
}) => {
  const [seconds, setSeconds] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  const formatTimer = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <header className="no-print w-full bg-white border-b border-[#E2E8F0] px-4 py-2.5 flex items-center justify-between z-30 select-none">
      {/* Left: Brand & Current Slide Indicator */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2.5">
          <SantaCasaLogo className="h-7 sm:h-8" variant="symbol" />
          <div>
            <div className="flex items-center gap-1.5 leading-none">
              <span className="text-xs font-black tracking-tight text-[#16324F]">Santa Casa BH</span>
              <span className="text-xs text-[#94A3B8]">|</span>
              <span className="text-xs font-bold text-[#334155]">ONA 2022 × 2026</span>
            </div>
            <div className="text-[11px] text-[#334155] font-medium truncate max-w-[200px] sm:max-w-xs md:max-w-md mt-0.5">
              Slide {String(currentIndex + 1).padStart(2, '0')} • <span className="text-[#FF3200] font-bold">{currentSlide.title}</span>
            </div>
          </div>
        </div>

        <span className="hidden sm:inline-block h-4 w-px bg-[#E2E8F0] mx-1"></span>

        <button 
          id="btn-category-badge"
          onClick={onToggleOverview}
          className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F8FAFC] text-[#334155] text-xs font-semibold hover:bg-slate-100 transition-colors border border-[#E2E8F0]"
          title="Ver todos os slides"
        >
          <span>{currentSlide.themeTag}</span>
          <ChevronRight className="w-3 h-3 text-[#2563EB]" />
        </button>
      </div>

      {/* Middle: Progress Indicator */}
      <div className="hidden lg:flex items-center gap-3">
        <div className="flex items-center gap-1.5 text-xs text-[#334155] font-medium">
          <span className="text-[#16324F] font-bold text-sm">{String(currentIndex + 1).padStart(2, '0')}</span>
          <span className="text-[#94A3B8]">/</span>
          <span className="text-[#94A3B8]">{String(totalSlides).padStart(2, '0')}</span>
        </div>
        <div className="w-32 h-1.5 bg-[#F8FAFC] rounded-full overflow-hidden border border-[#E2E8F0]">
          <div 
            className="h-full bg-[#2563EB] transition-all duration-300 rounded-full"
            style={{ width: `${((currentIndex + 1) / totalSlides) * 100}%` }}
          />
        </div>
      </div>

      {/* Right: Actions & Tools */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        {/* Presentation Timer */}
        <button
          id="btn-timer"
          onClick={() => setIsTimerRunning(!isTimerRunning)}
          className="hidden sm:flex items-center gap-1 px-2.5 py-1 text-xs font-mono font-medium rounded-md text-[#334155] hover:bg-[#F8FAFC] transition-colors"
          title={isTimerRunning ? 'Pausar cronômetro' : 'Continuar cronômetro'}
        >
          <Clock className="w-3.5 h-3.5 text-[#94A3B8]" />
          <span>{formatTimer(seconds)}</span>
        </button>

        {/* Autoplay / Loop toggle */}
        <button
          id="btn-autoplay"
          onClick={onTogglePlay}
          className={`flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
            isPlaying 
              ? 'bg-[#F8FAFC] text-[#2563EB] border border-[#2563EB]/30 font-bold' 
              : 'text-[#334155] hover:bg-[#F8FAFC]'
          }`}
          title={isPlaying ? 'Pausar avanço automático' : 'Avanço automático (slides)'}
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5 text-[#2563EB]" /> : <Play className="w-3.5 h-3.5 text-[#334155]" />}
          <span className="hidden xl:inline">{isPlaying ? 'Tocando' : 'Apresentar'}</span>
        </button>

        {/* Speaker Notes */}
        <button
          id="btn-speaker-notes"
          onClick={onToggleNotes}
          className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
            showNotes 
              ? 'bg-[#16324F] text-white font-bold shadow-xs' 
              : 'text-[#334155] hover:bg-[#F8FAFC]'
          }`}
          title="Notas do Apresentador"
        >
          <FileText className="w-3.5 h-3.5" />
          <span className="hidden md:inline">Notas</span>
        </button>

        {/* Grid Overview */}
        <button
          id="btn-slide-overview"
          onClick={onToggleOverview}
          className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md text-[#334155] hover:bg-[#F8FAFC] transition-colors"
          title="Visão Geral dos Slides (Mural)"
        >
          <Grid className="w-3.5 h-3.5" />
          <span className="hidden md:inline">Mural</span>
        </button>

        {/* Technical Data Drawer */}
        <button
          id="btn-technical-data"
          onClick={onToggleTechnical}
          className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md text-[#334155] hover:bg-[#F8FAFC] transition-colors"
          title="Referência Técnica ONA"
        >
          <Database className="w-3.5 h-3.5 text-[#2563EB]" />
          <span className="hidden xl:inline">Dados Técnicos</span>
        </button>

        {/* Print / Export PDF */}
        <button
          id="btn-print-deck"
          onClick={onPrint}
          className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md text-[#334155] hover:bg-[#F8FAFC] transition-colors"
          title="Imprimir / Exportar PDF Executivo"
        >
          <Printer className="w-3.5 h-3.5" />
          <span className="hidden xl:inline">Imprimir / PDF</span>
        </button>

        {/* Fullscreen Toggle */}
        <button
          id="btn-fullscreen-toggle"
          onClick={onToggleFullscreen}
          className="p-1.5 text-[#334155] hover:text-[#16324F] hover:bg-[#F8FAFC] rounded-md transition-colors"
          title={isFullscreen ? 'Sair de tela cheia (Esc / F)' : 'Tela cheia (F)'}
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </button>
      </div>
    </header>
  );
};
