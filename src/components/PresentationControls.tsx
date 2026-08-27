import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  HelpCircle, 
  List, 
  CheckCircle2, 
  Layers
} from 'lucide-react';
import { SLIDES } from '../data/presentationData';

interface PresentationControlsProps {
  currentIndex: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  onSelectSlide: (index: number) => void;
  onToggleOverview: () => void;
  onToggleNotes: () => void;
  showNotes: boolean;
}

export const PresentationControls: React.FC<PresentationControlsProps> = ({
  currentIndex,
  totalSlides,
  onPrev,
  onNext,
  onSelectSlide,
  onToggleOverview,
  onToggleNotes,
  showNotes,
}) => {
  const [showShortcuts, setShowShortcuts] = useState<boolean>(false);
  const [showJumpMenu, setShowJumpMenu] = useState<boolean>(false);

  return (
    <div className="no-print fixed bottom-5 left-1/2 transform -translate-x-1/2 z-30 flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#E2E8F0] shadow-sm text-[#334155] transition-all hover:shadow-md">
      {/* Previous button */}
      <button
        id="btn-prev-slide"
        onClick={onPrev}
        disabled={currentIndex === 0}
        className="p-1.5 rounded-full hover:bg-[#F8FAFC] disabled:opacity-25 disabled:hover:bg-transparent text-[#334155] transition-colors"
        title="Slide anterior (← / PageUp)"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Slide Index & Selector */}
      <div className="relative">
        <button
          id="btn-slide-selector"
          onClick={() => setShowJumpMenu(!showJumpMenu)}
          className="flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-[#F8FAFC] hover:bg-[#E2E8F0] text-[#16324F] transition-colors"
          title="Selecionar slide"
        >
          <span className="text-[#16324F] font-black">{String(currentIndex + 1).padStart(2, '0')}</span>
          <span className="text-[#94A3B8]">/</span>
          <span className="text-[#94A3B8]">{String(totalSlides).padStart(2, '0')}</span>
          <List className="w-3.5 h-3.5 text-[#94A3B8] ml-0.5" />
        </button>

        {/* Jump Menu Popover */}
        {showJumpMenu && (
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-80 max-h-80 overflow-y-auto bg-white rounded-2xl shadow-xl border border-[#E2E8F0] py-2 z-40 text-left">
            <div className="px-4 py-2 border-b border-[#E2E8F0] text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">
              Navegar pelos Slides
            </div>
            {SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => {
                  onSelectSlide(idx);
                  setShowJumpMenu(false);
                }}
                className={`w-full text-left px-4 py-2 text-xs flex items-center justify-between hover:bg-[#F8FAFC] transition-colors ${
                  idx === currentIndex ? 'bg-[#F8FAFC] text-[#16324F] font-bold' : 'text-[#334155]'
                }`}
              >
                <div className="truncate pr-2">
                  <span className="text-[#94A3B8] font-mono mr-2">{String(idx + 1).padStart(2, '0')}</span>
                  <span>{slide.title}</span>
                </div>
                {idx === currentIndex && <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Next button */}
      <button
        id="btn-next-slide"
        onClick={onNext}
        disabled={currentIndex === totalSlides - 1}
        className="p-1.5 rounded-full hover:bg-[#F8FAFC] disabled:opacity-25 disabled:hover:bg-transparent text-[#334155] transition-colors"
        title="Próximo slide (→ / Espaço / PageDown)"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <span className="h-4 w-px bg-[#E2E8F0] mx-0.5"></span>

      {/* Grid Thumbnail Modal Toggle */}
      <button
        id="btn-bottom-grid"
        onClick={onToggleOverview}
        className="p-1.5 text-[#334155] hover:text-[#16324F] hover:bg-[#F8FAFC] rounded-full transition-colors"
        title="Mural de slides (O)"
      >
        <Layers className="w-4 h-4" />
      </button>

      {/* Help & Keyboard shortcuts */}
      <div className="relative">
        <button
          id="btn-shortcuts-help"
          onClick={() => setShowShortcuts(!showShortcuts)}
          className="p-1.5 text-[#94A3B8] hover:text-[#334155] hover:bg-[#F8FAFC] rounded-full transition-colors"
          title="Atalhos do teclado"
        >
          <HelpCircle className="w-4 h-4" />
        </button>

        {showShortcuts && (
          <div className="absolute bottom-12 right-0 w-64 bg-white rounded-2xl shadow-xl border border-[#E2E8F0] p-4 z-40 text-left text-xs">
            <div className="flex items-center justify-between pb-2 border-b border-[#E2E8F0] font-bold text-[#16324F]">
              <span>Atalhos de Navegação</span>
              <button 
                onClick={() => setShowShortcuts(false)}
                className="text-[#94A3B8] hover:text-[#334155]"
              >
                ✕
              </button>
            </div>
            <div className="mt-2.5 space-y-1.5 text-[#334155]">
              <div className="flex justify-between items-center">
                <span>Próximo slide</span>
                <kbd className="px-1.5 py-0.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded font-mono text-[10px]">→ / Espaço</kbd>
              </div>
              <div className="flex justify-between items-center">
                <span>Slide anterior</span>
                <kbd className="px-1.5 py-0.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded font-mono text-[10px]">←</kbd>
              </div>
              <div className="flex justify-between items-center">
                <span>Tela cheia</span>
                <kbd className="px-1.5 py-0.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded font-mono text-[10px]">F</kbd>
              </div>
              <div className="flex justify-between items-center">
                <span>Notas do orador</span>
                <kbd className="px-1.5 py-0.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded font-mono text-[10px]">N</kbd>
              </div>
              <div className="flex justify-between items-center">
                <span>Mural geral</span>
                <kbd className="px-1.5 py-0.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded font-mono text-[10px]">O / G</kbd>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
