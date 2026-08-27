import React from 'react';
import { 
  X, 
  Clock, 
  Target, 
  MessageSquare, 
  Lightbulb, 
  Sparkles, 
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import { SlideData } from '../types';

interface SpeakerNotesDrawerProps {
  slide: SlideData;
  currentIndex: number;
  totalSlides: number;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const SpeakerNotesDrawer: React.FC<SpeakerNotesDrawerProps> = ({
  slide,
  currentIndex,
  totalSlides,
  isOpen,
  onClose,
  onPrev,
  onNext,
}) => {
  if (!isOpen) return null;

  return (
    <aside 
      id="speaker-notes-panel"
      className="no-print fixed inset-y-0 right-0 w-full sm:w-96 md:w-[420px] bg-white border-l border-[#E2E8F0] shadow-xl z-40 flex flex-col justify-between"
    >
      {/* Header */}
      <div className="p-4 border-b border-[#E2E8F0] bg-[#F8FAFC] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-[#16324F] text-white rounded-md">
            <MessageSquare className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#16324F]">Notas do Apresentador</h3>
            <p className="text-[11px] text-[#334155] font-medium">Roteiro executivo para reunião estratégica</p>
          </div>
        </div>
        <button
          id="btn-close-notes"
          onClick={onClose}
          className="p-1 text-[#94A3B8] hover:text-[#16324F] hover:bg-[#E2E8F0] rounded-md transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Body Content */}
      <div className="p-5 overflow-y-auto flex-1 space-y-5 text-sm">
        {/* Slide Context */}
        <div className="bg-[#F8FAFC] p-4 rounded-xl border border-[#E2E8F0]">
          <div className="flex items-center justify-between text-xs text-[#16324F] font-bold mb-1">
            <span>Slide {String(currentIndex + 1).padStart(2, '0')} / {totalSlides}</span>
            <div className="flex items-center gap-1 text-[#334155]">
              <Clock className="w-3 h-3 text-[#94A3B8]" />
              <span>{slide.speakerNote.recommendedTime}</span>
            </div>
          </div>
          <h4 className="font-bold text-[#16324F] text-sm leading-snug">{slide.title}</h4>
          <p className="text-xs text-[#334155] mt-0.5">{slide.subtitle}</p>
        </div>

        {/* Objective */}
        <div>
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#16324F] mb-2">
            <Target className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>Objetivo Estratégico</span>
          </div>
          <p className="text-[#334155] text-xs leading-relaxed bg-[#F8FAFC] p-3 rounded-lg border border-[#E2E8F0]">
            {slide.speakerNote.objective}
          </p>
        </div>

        {/* Key Talking Points */}
        <div>
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#16324F] mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>Pontos de Fala (Roteiro Verbal)</span>
          </div>
          <ul className="space-y-2">
            {slide.speakerNote.talkingPoints.map((point, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs text-[#334155] bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <span className="h-4 w-4 rounded-full bg-[#16324F] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Executive Takeaway */}
        <div className="bg-[#F8FAFC] p-4 rounded-xl border border-[#E2E8F0]">
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0F766E] mb-1.5">
            <Lightbulb className="w-3.5 h-3.5 text-[#0F766E]" />
            <span>Síntese / Frase de Fechamento</span>
          </div>
          <p className="text-xs text-[#334155] font-medium leading-relaxed italic">
            "{slide.speakerNote.executiveTakeaway}"
          </p>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="p-3 border-t border-[#E2E8F0] bg-[#F8FAFC] flex items-center justify-between">
        <button
          onClick={onPrev}
          disabled={currentIndex === 0}
          className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-[#334155] hover:bg-[#E2E8F0] rounded-lg disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Anterior</span>
        </button>
        <span className="text-xs font-semibold text-[#94A3B8]">
          {currentIndex + 1} de {totalSlides}
        </span>
        <button
          onClick={onNext}
          disabled={currentIndex === totalSlides - 1}
          className="flex items-center gap-1 px-3 py-1.5 text-xs font-bold text-white bg-[#16324F] hover:bg-[#16324F]/90 rounded-lg disabled:opacity-30 disabled:hover:bg-transparent transition-colors shadow-xs"
        >
          <span>Próximo</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
};
