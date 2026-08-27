import React, { useState } from 'react';
import { 
  X, 
  Search, 
  Layers, 
  Star, 
  Share2, 
  CheckCircle2, 
  ArrowRight, 
  FileCheck2,
  TrendingUp,
  ShieldCheck,
  Brain,
  Award
} from 'lucide-react';
import { TECHNICAL_REQUIREMENTS, COMPARATIVE_THEMES_SUMMARY } from '../data/technicalReference';
import { METRICS_DATA, LEVELS_DATA } from '../data/presentationData';

interface TechnicalDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TechnicalDrawer: React.FC<TechnicalDrawerProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'metrics' | 'requirements' | 'themes' | 'core_transversal'>('metrics');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filterLevel, setFilterLevel] = useState<string>('all');

  if (!isOpen) return null;

  const filteredRequirements = TECHNICAL_REQUIREMENTS.filter((req) => {
    const matchesSearch = 
      req.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      req.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      req.thematicGroup.toLowerCase().includes(searchQuery.toLowerCase()) ||
      req.number.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesLevel = filterLevel === 'all' || req.level.toString() === filterLevel;

    return matchesSearch && matchesLevel;
  });

  return (
    <aside 
      id="technical-reference-panel"
      className="no-print fixed inset-y-0 right-0 w-full sm:w-[500px] md:w-[580px] lg:w-[680px] bg-white border-l border-[#E2E8F0] shadow-xl z-50 flex flex-col justify-between"
    >
      {/* Header */}
      <div className="p-4 sm:p-5 border-b border-[#E2E8F0] bg-[#F8FAFC] flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-md bg-[#16324F] text-white font-bold text-xs">
              ONA 2022 × 2026
            </span>
            <h3 className="font-bold text-[#16324F] text-sm sm:text-base">
              Painel Técnico & Base de Evidências
            </h3>
          </div>
          <p className="text-xs text-[#334155] mt-1">
            Gestão de Pessoas: Dados auditáveis, redistribuição e referências
          </p>
        </div>
        <button
          onClick={onClose}
          className="p-1.5 text-[#94A3B8] hover:text-[#16324F] hover:bg-[#E2E8F0] rounded-md transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Tabs Switcher */}
      <div className="flex border-b border-[#E2E8F0] bg-white px-4 pt-2 gap-1 sm:gap-2 overflow-x-auto text-xs font-semibold">
        <button
          onClick={() => setActiveTab('metrics')}
          className={`pb-2.5 px-3 border-b-2 whitespace-nowrap transition-colors ${
            activeTab === 'metrics'
              ? 'border-[#16324F] text-[#16324F] font-bold'
              : 'border-transparent text-[#94A3B8] hover:text-[#334155]'
          }`}
        >
          Métricas Gerais
        </button>
        <button
          onClick={() => setActiveTab('themes')}
          className={`pb-2.5 px-3 border-b-2 whitespace-nowrap transition-colors ${
            activeTab === 'themes'
              ? 'border-[#16324F] text-[#16324F] font-bold'
              : 'border-transparent text-[#94A3B8] hover:text-[#334155]'
          }`}
        >
          Evolução Temática
        </button>
        <button
          onClick={() => setActiveTab('requirements')}
          className={`pb-2.5 px-3 border-b-2 whitespace-nowrap transition-colors ${
            activeTab === 'requirements'
              ? 'border-[#16324F] text-[#16324F] font-bold'
              : 'border-transparent text-[#94A3B8] hover:text-[#334155]'
          }`}
        >
          Requisitos em Destaque
        </button>
        <button
          onClick={() => setActiveTab('core_transversal')}
          className={`pb-2.5 px-3 border-b-2 whitespace-nowrap transition-colors ${
            activeTab === 'core_transversal'
              ? 'border-[#16324F] text-[#16324F] font-bold'
              : 'border-transparent text-[#94A3B8] hover:text-[#334155]'
          }`}
        >
          CORE & Transversalidade
        </button>
      </div>

      {/* Content Body */}
      <div className="p-5 overflow-y-auto flex-1 space-y-6 text-xs text-[#334155] bg-[#F8FAFC]/40">
        {/* Tab 1: General Metrics */}
        {activeTab === 'metrics' && (
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-xl border border-[#E2E8F0] shadow-xs">
              <h4 className="font-bold text-[#16324F] text-sm mb-3 flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-[#2563EB]" />
                <span>Quadro Comparativo Oficial (2022 × 2026)</span>
              </h4>
              <div className="divide-y divide-[#E2E8F0]">
                {METRICS_DATA.map((metric, i) => (
                  <div key={i} className="py-2.5 flex items-center justify-between gap-2">
                    <div>
                      <div className="font-semibold text-[#16324F]">{metric.label}</div>
                      <div className="text-[11px] text-[#94A3B8]">{metric.interpretation}</div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0 font-mono">
                      <span className="text-[#94A3B8]">{metric.val2022}</span>
                      <ArrowRight className="w-3 h-3 text-[#94A3B8]" />
                      <span className="font-bold text-[#2563EB] text-sm bg-[#F8FAFC] px-2 py-0.5 rounded border border-[#E2E8F0]">
                        {metric.val2026}
                      </span>
                      <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                        metric.highlight ? 'bg-teal-50 text-[#0F766E] border border-teal-200' : 'bg-slate-100 text-[#334155]'
                      }`}>
                        {metric.diff}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Level breakdown cards */}
            <div className="space-y-3">
              <h4 className="font-bold text-[#16324F] text-sm flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-[#16324F]" />
                <span>Distribuição por Níveis de Maturidade</span>
              </h4>
              {LEVELS_DATA.map((lvl) => (
                <div key={lvl.levelNumber} className="bg-white p-3.5 rounded-xl border border-[#E2E8F0] shadow-xs">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-bold text-[#16324F] text-xs">
                      {lvl.level} ({lvl.count2022} → {lvl.count2026})
                    </span>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      lvl.status === 'new' 
                        ? 'bg-teal-50 text-[#0F766E] border border-teal-200' 
                        : 'bg-[#F8FAFC] text-[#2563EB] border border-[#E2E8F0]'
                    }`}>
                      {lvl.diff} ({lvl.status === 'new' ? 'Novo Nível' : lvl.status === 'reduced' ? 'Consolidação' : 'Estável'})
                    </span>
                  </div>
                  <p className="text-[11px] text-[#334155] mb-2 leading-relaxed">{lvl.description}</p>
                  <div className="grid grid-cols-2 gap-2 text-[10px] bg-[#F8FAFC] p-2 rounded-lg border border-[#E2E8F0]">
                    <div>
                      <span className="text-[#94A3B8] font-medium">2022:</span>
                      <p className="text-[#334155] mt-0.5">{lvl.focus2022}</p>
                    </div>
                    <div>
                      <span className="text-[#2563EB] font-bold">2026:</span>
                      <p className="text-[#16324F] font-semibold mt-0.5">{lvl.focus2026}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Comparative Themes */}
        {activeTab === 'themes' && (
          <div className="space-y-3">
            {COMPARATIVE_THEMES_SUMMARY.map((item, i) => (
              <div key={i} className="bg-white p-4 rounded-xl border border-[#E2E8F0] shadow-xs space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-[#16324F] text-xs flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB]" />
                    <span>{item.theme}</span>
                  </h4>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#F8FAFC] text-[#16324F] border border-[#E2E8F0]">
                    Impacto: {item.impacto}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-[#F8FAFC] p-2.5 rounded-lg text-[11px] border border-[#E2E8F0]">
                  <div>
                    <span className="text-[#94A3B8] uppercase font-mono text-[9px] block">ONA 2022</span>
                    <span className="text-[#334155]">{item.ona2022}</span>
                  </div>
                  <div>
                    <span className="text-[#2563EB] uppercase font-mono text-[9px] block font-bold">ONA 2026</span>
                    <span className="text-[#16324F] font-semibold">{item.ona2026}</span>
                  </div>
                </div>
                <p className="text-[11px] text-[#334155] italic">
                  💡 {item.destaque}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Key Requirements */}
        {activeTab === 'requirements' && (
          <div className="space-y-4">
            {/* Search & Level Filter */}
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="w-3.5 h-3.5 text-[#94A3B8] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Filtrar por nome, tema ou código..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 text-xs bg-white border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] text-[#334155]"
                />
              </div>
              <select
                value={filterLevel}
                onChange={(e) => setFilterLevel(e.target.value)}
                className="px-3 py-1.5 text-xs bg-white border border-[#E2E8F0] rounded-lg text-[#334155] focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              >
                <option value="all">Todos Níveis</option>
                <option value="1">Nível 1</option>
                <option value="2">Nível 2</option>
                <option value="3">Nível 3</option>
              </select>
            </div>

            {/* List */}
            <div className="space-y-2.5">
              {filteredRequirements.map((req) => (
                <div key={req.id} className="bg-white p-3.5 rounded-xl border border-[#E2E8F0] shadow-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="px-2 py-0.5 bg-[#16324F] text-white rounded font-mono font-bold text-[10px]">
                        N{req.level} • {req.number}
                      </span>
                      <span className="font-bold text-[#16324F] text-xs truncate max-w-[240px]">
                        {req.title}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      {req.isCore && (
                        <span className="px-1.5 py-0.5 rounded bg-slate-100 text-[#16324F] text-[9px] font-bold flex items-center gap-0.5 border border-[#E2E8F0]">
                          <Star className="w-2.5 h-2.5 text-[#16324F]" />
                          CORE
                        </span>
                      )}
                      {req.isTransversal && (
                        <span className="px-1.5 py-0.5 rounded bg-teal-50 text-[#0F766E] text-[9px] font-bold flex items-center gap-0.5 border border-teal-200">
                          <Share2 className="w-2.5 h-2.5 text-[#0F766E]" />
                          Transversal
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-[11px] text-[#334155] leading-relaxed">
                    {req.description}
                  </p>
                  <div className="pt-1 flex items-center justify-between text-[10px] text-[#94A3B8]">
                    <span>Tema: {req.thematicGroup}</span>
                    <span className="capitalize font-semibold text-[#2563EB]">
                      Status: {req.evolutionType}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: CORE & Transversality */}
        {activeTab === 'core_transversal' && (
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-xl border border-[#E2E8F0] shadow-xs space-y-3">
              <h4 className="font-bold text-[#16324F] text-sm flex items-center gap-1.5">
                <Star className="w-4 h-4 text-[#16324F]" />
                <span>Requisitos CORE (Criticidade Redistribuída)</span>
              </h4>
              <p className="text-xs text-[#334155]">
                A ONA 2026 ajustou o número de requisitos CORE de 9 para 8, redistribuindo-os em todos os 3 níveis:
              </p>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-3 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
                  <span className="text-[10px] font-bold uppercase text-[#94A3B8] block">Nível 1</span>
                  <span className="text-xl font-bold text-[#16324F]">5</span>
                  <span className="text-[10px] text-[#94A3B8] block">de 22 req.</span>
                </div>
                <div className="p-3 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
                  <span className="text-[10px] font-bold uppercase text-[#94A3B8] block">Nível 2</span>
                  <span className="text-xl font-bold text-[#16324F]">2</span>
                  <span className="text-[10px] text-[#94A3B8] block">de 7 req.</span>
                </div>
                <div className="p-3 bg-[#F8FAFC] rounded-xl border border-teal-200">
                  <span className="text-[10px] font-bold uppercase text-[#0F766E] block">Nível 3 (Novo)</span>
                  <span className="text-xl font-bold text-[#0F766E]">1</span>
                  <span className="text-[10px] text-[#0F766E] block">Efetividade</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-[#E2E8F0] shadow-xs space-y-3">
              <h4 className="font-bold text-[#16324F] text-sm flex items-center gap-1.5">
                <Share2 className="w-4 h-4 text-[#0F766E]" />
                <span>Salto de Requisitos Transversais (+160%)</span>
              </h4>
              <div className="flex items-center justify-between bg-[#F8FAFC] p-3 rounded-xl border border-[#E2E8F0]">
                <div>
                  <span className="text-xs text-[#16324F] font-bold block">Evolução Transversal</span>
                  <span className="text-xs text-[#334155]">Presença de GP em outras seções</span>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black text-[#0F766E] font-mono">5 → 13</span>
                  <span className="text-xs font-bold text-[#0F766E] ml-2">+160%</span>
                </div>
              </div>
              <p className="text-xs text-[#334155] leading-relaxed">
                Gestão de Pessoas passa a ter conexão direta e formal com 8 áreas estruturais do hospital:
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs font-medium text-[#334155]">
                <div className="p-2 bg-[#F8FAFC] rounded-lg flex items-center gap-2 border border-[#E2E8F0]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>Segurança do Paciente</span>
                </div>
                <div className="p-2 bg-[#F8FAFC] rounded-lg flex items-center gap-2 border border-[#E2E8F0]">
                  <Award className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>Qualidade & Auditoria</span>
                </div>
                <div className="p-2 bg-[#F8FAFC] rounded-lg flex items-center gap-2 border border-[#E2E8F0]">
                  <Brain className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>Saúde Psicossocial</span>
                </div>
                <div className="p-2 bg-[#F8FAFC] rounded-lg flex items-center gap-2 border border-[#E2E8F0]">
                  <FileCheck2 className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>Processos Assistenciais</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="p-4 bg-[#F8FAFC] border-t border-[#E2E8F0] flex items-center justify-between text-xs text-[#334155]">
        <span>Fonte: ONA 2022 vs 2026 • Gestão de Pessoas</span>
        <button
          onClick={onClose}
          className="px-4 py-1.5 bg-[#16324F] text-white font-semibold rounded-lg hover:bg-[#16324F]/90 transition-colors shadow-xs"
        >
          Concluir Consulta
        </button>
      </div>
    </aside>
  );
};
