import React, { useState } from 'react';
import { X, Search, CheckCircle, Filter } from 'lucide-react';
import { SLIDES } from '../data/presentationData';

interface SlideOverviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentIndex: number;
  onSelectSlide: (index: number) => void;
}

export const SlideOverviewModal: React.FC<SlideOverviewModalProps> = ({
  isOpen,
  onClose,
  currentIndex,
  onSelectSlide,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  if (!isOpen) return null;

  const categories: { label: string; value: string }[] = [
    { label: `Todos os Slides (${SLIDES.length})`, value: 'all' },
    { label: 'Visão Geral & Provocação', value: 'overview' },
    { label: 'Estrutura & Níveis', value: 'structure' },
    { label: 'Aprofundamento & Efetividade', value: 'deep-dive' },
    { label: 'Temas & Segurança', value: 'thematic' },
    { label: 'Síntese & Ação', value: 'action' },
  ];

  const filteredSlides = SLIDES.filter((slide) => {
    const matchesSearch = 
      slide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      slide.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      slide.oneIdeaSummary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      slide.themeTag.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = 
      selectedCategory === 'all' || 
      slide.category === selectedCategory ||
      (selectedCategory === 'action' && (slide.category === 'action' || slide.category === 'synthesis'));

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="no-print fixed inset-0 z-50 bg-black/30 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="bg-white w-full max-w-6xl max-h-[90vh] rounded-2xl shadow-xl border border-[#E2E8F0] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-[#E2E8F0] flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#F8FAFC]">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-md bg-[#16324F] text-white font-bold text-xs">
                Mural Completo
              </span>
              <h2 className="text-base sm:text-lg font-bold text-[#16324F]">
                Evolução ONA Gestão de Pessoas (2022 × 2026)
              </h2>
            </div>
            <p className="text-xs text-[#334155] mt-1">
              {SLIDES.length} slides estruturados em narrativa executiva e storytelling progressivo.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-[#94A3B8] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar por tema, nível..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 pr-3 py-1.5 text-xs bg-white border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] w-48 sm:w-60 text-[#334155]"
              />
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-[#94A3B8] hover:text-[#16324F] hover:bg-[#E2E8F0] rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Category Pill Filters */}
        <div className="px-4 sm:px-6 py-2.5 border-b border-[#E2E8F0] flex items-center gap-2 overflow-x-auto bg-white">
          <Filter className="w-3.5 h-3.5 text-[#94A3B8] shrink-0" />
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedCategory === cat.value
                  ? 'bg-[#16324F] text-white shadow-xs'
                  : 'bg-[#F8FAFC] text-[#334155] hover:bg-[#E2E8F0]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Slides Grid */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 bg-[#F8FAFC]/50">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredSlides.map((slide) => {
              const originalIndex = SLIDES.findIndex((s) => s.id === slide.id);
              const isActive = originalIndex === currentIndex;

              return (
                <div
                  key={slide.id}
                  onClick={() => {
                    onSelectSlide(originalIndex);
                    onClose();
                  }}
                  className={`group relative bg-white rounded-xl border p-4 cursor-pointer transition-all duration-150 hover:border-[#FF3200] flex flex-col justify-between min-h-[150px] ${
                    isActive
                      ? 'ring-2 ring-[#FF3200] border-transparent shadow-xs bg-[#F8FAFC]'
                      : 'border-[#E2E8F0] shadow-xs'
                  }`}
                >
                  <div>
                    {/* Top Bar of Card */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-xs font-bold text-[#16324F] bg-[#F8FAFC] px-2 py-0.5 rounded border border-[#E2E8F0]">
                        #{String(slide.id).padStart(2, '0')}
                      </span>
                      <span className="text-[10px] font-medium uppercase tracking-wider text-[#94A3B8]">
                        {slide.themeTag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-[#16324F] text-xs sm:text-sm group-hover:text-[#FF3200] transition-colors line-clamp-2 leading-tight">
                      {slide.title}
                    </h3>
                    <p className="text-[11px] text-[#334155] line-clamp-1 mt-0.5">
                      {slide.subtitle}
                    </p>
                  </div>

                  {/* Summary / Idea */}
                  <div className="mt-3 pt-2 border-t border-[#E2E8F0] flex items-center justify-between text-[11px]">
                    <span className="text-[#94A3B8] line-clamp-1 text-[10px]">
                      {slide.oneIdeaSummary}
                    </span>
                    {isActive && (
                      <CheckCircle className="w-4 h-4 text-[#2563EB] shrink-0 ml-1" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 sm:p-4 bg-white border-t border-[#E2E8F0] flex items-center justify-between text-xs text-[#334155]">
          <span>Mostrando {filteredSlides.length} de {SLIDES.length} slides</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#F8FAFC] hover:bg-[#E2E8F0] text-[#16324F] font-semibold rounded-lg transition-colors border border-[#E2E8F0]"
          >
            Fechar Mural
          </button>
        </div>
      </div>
    </div>
  );
};
