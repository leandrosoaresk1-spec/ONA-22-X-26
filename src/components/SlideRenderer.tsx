import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Layers, 
  ShieldCheck, 
  Brain, 
  Activity, 
  MessageSquare, 
  Share2, 
  Star, 
  Lightbulb, 
  Target, 
  Award, 
  Sparkles,
  Users,
  GraduationCap,
  HeartPulse,
  Briefcase,
  ChevronRight,
  BarChart3,
  Repeat,
  FileCheck2,
  ArrowDown,
  Clock,
  Compass,
  AlertCircle,
  GitMerge,
  MinusCircle
} from 'lucide-react';
import { SlideData } from '../types';
import { METRICS_DATA, LEVELS_DATA } from '../data/presentationData';
import { SantaCasaLogo } from './SantaCasaLogo';
import { OnaRequirementsInteractive } from './OnaRequirementsInteractive';
import { OnaLevel2Interactive } from './OnaLevel2Interactive';
import { OnaLevel3Interactive } from './OnaLevel3Interactive';
import { OnaSpreadsheetSlide } from './OnaSpreadsheetSlide';
import { GpExpectationsSlide } from './GpExpectationsSlide';
import { ThankYouSlide } from './ThankYouSlide';
import { AuditoriaHslSlide } from './AuditoriaHslSlide';
import { MudancasGestaoPessoasSlide } from './MudancasGestaoPessoasSlide';

// ----------------------------------------------------
// DYNAMIC COMPONENT: SLIDE 05 - REESTRUTURAÇÃO CONCEITUAL
// ----------------------------------------------------
const LevelDistributionTimelineInteractive: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<'all' | 'n1' | 'n2' | 'n3'>('all');

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col justify-between h-full py-2.5 text-left select-none">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#E2E8F0] pb-3">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#FF3200]">
            05 • Arquitetura & Evolução Normativa
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#FF3200] mt-0.5 tracking-tight">
            Reestruturação Conceitual
          </h2>
          <p className="text-xs sm:text-sm text-[#334155] mt-0.5">
            Redistribuição dos níveis e a nova jornada de maturidade da ONA 2026
          </p>
        </div>

        {/* Conceptual View Switcher */}
        <div className="flex items-center gap-1 bg-[#F1F5F9] p-1 rounded-xl border border-[#E2E8F0] shrink-0 self-start sm:self-auto">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
              activeTab === 'all'
                ? 'bg-[#16324F] text-white shadow-sm'
                : 'text-[#334155] hover:text-[#16324F] hover:bg-white/60'
            }`}
          >
            Visão Geral
          </button>
          <button
            onClick={() => setActiveTab('n1')}
            className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
              activeTab === 'n1'
                ? 'bg-[#16324F] text-white shadow-sm'
                : 'text-[#334155] hover:text-[#16324F] hover:bg-white/60'
            }`}
          >
            Nível 1
          </button>
          <button
            onClick={() => setActiveTab('n2')}
            className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
              activeTab === 'n2'
                ? 'bg-[#16324F] text-white shadow-sm'
                : 'text-[#334155] hover:text-[#16324F] hover:bg-white/60'
            }`}
          >
            Nível 2
          </button>
          <button
            onClick={() => setActiveTab('n3')}
            className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
              activeTab === 'n3'
                ? 'bg-[#0F766E] text-white shadow-sm'
                : 'text-[#334155] hover:text-[#0F766E] hover:bg-white/60'
            }`}
          >
            Nível 3 (Inédito)
          </button>
        </div>
      </div>

      {/* SEÇÃO 1: Espinha Dorsal de Maturidade (4 Fases em Cards Horizontais) */}
      <div className="my-1.5 space-y-1.5">
        <div className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8] flex items-center justify-between">
          <span>Seção 1 • Espinha Dorsal de Maturidade</span>
          <span className="text-[#0F766E] font-medium text-[10.5px]">Evolução contínua da jornada</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          {/* Fase 1: Estrutura */}
          <div
            onClick={() => setActiveTab(activeTab === 'n1' ? 'all' : 'n1')}
            className={`p-3 rounded-xl border transition-all cursor-pointer ${
              activeTab === 'n1' || activeTab === 'all'
                ? 'bg-slate-50/90 border-slate-300 shadow-sm'
                : 'bg-[#F8FAFC] border-[#E2E8F0] opacity-50'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                Fase 1
              </span>
              <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-slate-200 text-slate-700">
                Base
              </span>
            </div>
            <h4 className="text-xs font-black text-[#16324F] uppercase tracking-wide">
              Estrutura
            </h4>
            <p className="text-[11.5px] text-[#334155] leading-snug mt-1">
              Políticas, dimensionamento e regras documentadas.
            </p>
          </div>

          {/* Fase 2: Execução */}
          <div
            onClick={() => setActiveTab(activeTab === 'n1' ? 'all' : 'n1')}
            className={`p-3 rounded-xl border transition-all cursor-pointer ${
              activeTab === 'n1' || activeTab === 'all'
                ? 'bg-slate-50/90 border-slate-300 shadow-sm'
                : 'bg-[#F8FAFC] border-[#E2E8F0] opacity-50'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                Fase 2
              </span>
              <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-slate-200 text-slate-700">
                Operação
              </span>
            </div>
            <h4 className="text-xs font-black text-[#16324F] uppercase tracking-wide">
              Execução
            </h4>
            <p className="text-[11.5px] text-[#334155] leading-snug mt-1">
              Rotinas ativas e treinamento em segurança do paciente.
            </p>
          </div>

          {/* Fase 3: Resultado / Gestão */}
          <div
            onClick={() => setActiveTab(activeTab === 'n2' ? 'all' : 'n2')}
            className={`p-3 rounded-xl border transition-all cursor-pointer ${
              activeTab === 'n2' || activeTab === 'all'
                ? 'bg-slate-50/90 border-slate-300 shadow-sm'
                : 'bg-[#F8FAFC] border-[#E2E8F0] opacity-50'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                Fase 3
              </span>
              <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-slate-200 text-slate-700">
                Gestão
              </span>
            </div>
            <h4 className="text-xs font-black text-[#16324F] uppercase tracking-wide">
              Resultado / Gestão
            </h4>
            <p className="text-[11.5px] text-[#334155] leading-snug mt-1">
              Métricas de rotina, acompanhamento e metas setoriais.
            </p>
          </div>

          {/* Fase 4 (2026): Efetividade — NOVIDADE */}
          <div
            onClick={() => setActiveTab(activeTab === 'n3' ? 'all' : 'n3')}
            className={`p-3 rounded-xl border-2 transition-all cursor-pointer ${
              activeTab === 'n3' || activeTab === 'all'
                ? 'bg-teal-50/90 border-[#0F766E] shadow-sm'
                : 'bg-teal-50/40 border-teal-200 opacity-60'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-mono font-black text-[#0F766E] uppercase tracking-wider">
                Fase 4 (2026)
              </span>
              <span className="text-[9px] font-black px-2 py-0.5 rounded-full bg-[#0F766E] text-white tracking-wide shadow-xs">
                ★ NOVO
              </span>
            </div>
            <h4 className="text-xs font-black text-[#0F766E] uppercase tracking-wide flex items-center gap-1.5">
              Efetividade
            </h4>
            <p className="text-[11.5px] text-teal-950 font-medium leading-snug mt-1">
              Impacto no cuidado, desfecho e sustentabilidade.
            </p>
          </div>
        </div>
      </div>

      {/* SEÇÃO 2: Níveis de Maturidade (3 Cards) */}
      <div className="my-1.5 space-y-1.5">
        <div className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8] flex items-center justify-between">
          <span>Seção 2 • Níveis de Maturidade</span>
          <span className="text-[#16324F] font-mono text-[10.5px]">Estrutura Organizacional ONA 2026</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Nível 1 Card */}
          <div
            onClick={() => setActiveTab(activeTab === 'n1' ? 'all' : 'n1')}
            className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
              activeTab === 'n1'
                ? 'bg-slate-50 border-[#16324F] ring-2 ring-[#16324F]/15 shadow-md'
                : activeTab === 'all'
                ? 'bg-[#F8FAFC] border-[#E2E8F0] hover:border-slate-400'
                : 'bg-[#F8FAFC] border-[#E2E8F0] opacity-40'
            }`}
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-md bg-[#16324F] text-white text-xs font-bold uppercase tracking-wide">
                  Nível 1
                </span>
                <span className="text-[10.5px] text-slate-500 font-semibold uppercase tracking-wider">
                  Fases 1 & 2
                </span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#16324F]">
                  Segurança & Base Operacional
                </h4>
                <p className="text-xs text-[#334155] leading-relaxed mt-1.5">
                  Estabilidade e reordenação interna. Foco na consolidação dos requisitos estruturais e de execução diária.
                </p>
              </div>
            </div>
            <div className="pt-2.5 mt-3 border-t border-[#E2E8F0] text-[11px] text-slate-600 font-medium">
              Garantia de segurança assistencial e conformidade básica.
            </div>
          </div>

          {/* Nível 2 Card */}
          <div
            onClick={() => setActiveTab(activeTab === 'n2' ? 'all' : 'n2')}
            className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
              activeTab === 'n2'
                ? 'bg-slate-50 border-[#16324F] ring-2 ring-[#16324F]/15 shadow-md'
                : activeTab === 'all'
                ? 'bg-[#F8FAFC] border-[#E2E8F0] hover:border-slate-400'
                : 'bg-[#F8FAFC] border-[#E2E8F0] opacity-40'
            }`}
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-md bg-[#16324F] text-white text-xs font-bold uppercase tracking-wide">
                  Nível 2
                </span>
                <span className="text-[10.5px] text-slate-500 font-semibold uppercase tracking-wider">
                  Fase 3
                </span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#16324F]">
                  Gestão Integrada de Processos
                </h4>
                <p className="text-xs text-[#334155] leading-relaxed mt-1.5">
                  Enxugamento de redundâncias operacionais com padronização e monitoramento contínuo de resultados setoriais.
                </p>
              </div>
            </div>
            <div className="pt-2.5 mt-3 border-t border-[#E2E8F0] text-[11px] text-slate-600 font-medium">
              Integração entre setores e consistência no acompanhamento.
            </div>
          </div>

          {/* Nível 3 Card — INÉDITO & DESTAQUE */}
          <div
            onClick={() => setActiveTab(activeTab === 'n3' ? 'all' : 'n3')}
            className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
              activeTab === 'n3'
                ? 'bg-teal-50 border-[#0F766E] ring-2 ring-[#0F766E]/20 shadow-md'
                : activeTab === 'all'
                ? 'bg-teal-50/70 border-teal-300 hover:border-[#0F766E]'
                : 'bg-[#F8FAFC] border-[#E2E8F0] opacity-40'
            }`}
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-md bg-[#0F766E] text-white text-xs font-bold uppercase tracking-wide">
                  Nível 3 (Inédito)
                </span>
                <span className="text-[9px] font-black px-2 py-0.5 rounded-full bg-teal-100 text-[#0F766E] border border-teal-300 uppercase">
                  Destaque 2026
                </span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#0F766E]">
                  Efetividade & Excelência
                </h4>
                <p className="text-xs text-teal-950 font-medium leading-relaxed mt-1.5">
                  Criação da camada de efetividade, com comprovação de impacto em capacitação, liderança, retenção e clima.
                </p>
              </div>
            </div>
            <div className="pt-2.5 mt-3 border-t border-teal-200 text-[11px] text-[#0F766E] font-bold flex items-center justify-between">
              <span>Principal novidade estrutural da norma</span>
              <span>Fase 4</span>
            </div>
          </div>
        </div>
      </div>

      {/* Strategic Takeaway Bottom Bar */}
      <div className="p-2.5 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] text-xs text-[#334155] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <span>
          <strong className="text-[#16324F]">Lógica de Transformação:</strong>{' '}
          A ONA 2026 evolui de processos estritamente estruturados e acompanhados para a exigência de{' '}
          <strong className="text-[#0F766E]">comprovação de impacto e efetividade</strong> no cuidado ao paciente e no clima institucional.
        </span>
        <span className="text-[#0F766E] font-bold shrink-0 self-end sm:self-auto">
          Maturidade 2026
        </span>
      </div>
    </div>
  );
};

interface SlideRendererProps {
  slide: SlideData;
  currentIndex: number;
  totalSlides: number;
  onNext?: () => void;
  onPrev?: () => void;
}

export const SlideRenderer: React.FC<SlideRendererProps> = ({
  slide,
  currentIndex,
  totalSlides,
  onNext,
  onPrev,
}) => {
  // Common slide container wrapper with 100% white background and mathematical padding
  const renderSlideContent = () => {
    switch (slide.renderType) {
      // ----------------------------------------------------
      // SLIDE 01: CAPA EXECUTIVA
      // ----------------------------------------------------
      case 'cover':
        return (
          <div className="w-full max-w-5xl mx-auto flex flex-col justify-between h-full py-4 text-left">
            {/* Top Institutional Header */}
            <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-4">
              <SantaCasaLogo className="h-10 sm:h-12" variant="full" />
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-semibold tracking-wider uppercase text-[#334155] bg-[#F8FAFC] px-3 py-1 rounded-md border border-[#E2E8F0]">
                  Apresentação Estratégica
                </span>
              </div>
            </div>

            {/* Main Title Section */}
            <div className="my-auto space-y-6 max-w-4xl">
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#FF3200] tracking-tight leading-[1.1]">
                  EVOLUÇÃO DOS REQUISITOS ONA
                </h1>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#FF3200] tracking-tight">
                  GESTÃO DE PESSOAS | <span className="text-[#16324F]">2022 × 2026</span>
                </h2>
              </div>

              <p className="text-base sm:text-lg text-[#334155] max-w-2xl leading-relaxed font-normal">
                Uma análise comparativa, conceitual e estrutural da evolução dos requisitos e da jornada de maturidade da ONA.
              </p>

              {/* Graphic Element: 2022 -> 2026 */}
              <div className="pt-4">
                <div className="inline-flex items-center gap-4 bg-[#F8FAFC] px-5 py-3 rounded-xl border border-[#E2E8F0]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#94A3B8]"></span>
                    <span className="font-mono text-sm font-bold text-[#94A3B8]">2022</span>
                    <span className="text-xs text-[#94A3B8] font-medium">(Conformidade de Processos)</span>
                  </div>
                  <div className="w-16 sm:w-24 h-0.5 bg-[#E2E8F0] relative">
                    <div className="absolute inset-0 bg-[#FF3200] w-full rounded-full"></div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF3200]"></span>
                    <span className="font-mono text-sm font-bold text-[#FF3200]">2026</span>
                    <span className="text-xs text-[#FF3200] font-bold">(Efetividade & Impacto)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Footer Metadata */}
            <div className="flex items-center justify-between text-xs text-[#334155] border-t border-[#E2E8F0] pt-3">
              <div className="flex items-center gap-2 font-medium">
                <span className="text-[#16324F] font-bold">People Analytics</span>
              </div>
              <span className="font-mono text-[#94A3B8]">
                Slide 01 de {totalSlides}
              </span>
            </div>
          </div>
        );

      // ----------------------------------------------------
      // SLIDE 02: AUDITORIAS EXTERNAS HSL 2025 (ISO 9001 & SELO UNIMED)
      // ----------------------------------------------------
      case 'auditoria_hsl_2025':
        return <AuditoriaHslSlide />;

      // ----------------------------------------------------
      // SLIDE 03: O QUE MUDOU NA GESTÃO DE PESSOAS?
      // ----------------------------------------------------
      case 'mudancas_gestao_pessoas':
        return <MudancasGestaoPessoasSlide />;

      // ----------------------------------------------------
      // SLIDE 04: REFORMULAÇÃO ESTRUTURAL
      // ----------------------------------------------------
      case 'reformulacao_estrutural':
        return (
          <div className="w-full max-w-5xl mx-auto flex flex-col justify-between h-full py-4 text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF3200]">
                04 • Reformulação Estrutural
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#FF3200] mt-1 tracking-tight">
                Reformulação Estrutural
              </h2>
              <p className="text-sm sm:text-base text-[#334155] mt-1">
                Comparativo de indicadores, requisitos por nível de maturidade e critérios CORE (2022 × 2026).
              </p>
            </div>

            {/* Central Matrix Table */}
            <div className="my-auto space-y-4">
              <div className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-xs">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#F8FAFC] border-b border-[#E2E8F0] text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-[#16324F]">
                      <th className="py-3.5 px-4 sm:px-6">Indicador</th>
                      <th className="py-3.5 px-4 text-center">2022</th>
                      <th className="py-3.5 px-4 text-center">2026</th>
                      <th className="py-3.5 px-4 text-center">Mudança</th>
                      <th className="py-3.5 px-4 sm:px-6 hidden md:table-cell">Impacto Conceitual</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E2E8F0] text-xs sm:text-sm">
                    {/* Row 1: Total de Requisitos */}
                    <tr className="hover:bg-[#F8FAFC]/60 transition-colors">
                      <td className="py-3 px-4 sm:px-6 font-bold text-[#16324F] flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#16324F]"></span>
                        Total de requisitos
                      </td>
                      <td className="py-3 px-4 text-center font-mono font-bold text-[#94A3B8]">31</td>
                      <td className="py-3 px-4 text-center font-mono font-black text-[#FF3200]">33</td>
                      <td className="py-3 px-4 text-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#FF3200]/10 text-[#FF3200]">
                          +2
                        </span>
                      </td>
                      <td className="py-3 px-4 sm:px-6 text-xs text-[#334155] hidden md:table-cell">
                        Crescimento líquido sutil (+6,5%) com profunda reorganização interna.
                      </td>
                    </tr>

                    {/* Row 2: Nível 1 */}
                    <tr className="hover:bg-[#F8FAFC]/60 transition-colors">
                      <td className="py-3 px-4 sm:px-6 font-semibold text-[#334155] flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#94A3B8]"></span>
                        Nível 1
                      </td>
                      <td className="py-3 px-4 text-center font-mono font-semibold text-[#94A3B8]">22</td>
                      <td className="py-3 px-4 text-center font-mono font-bold text-[#16324F]">22</td>
                      <td className="py-3 px-4 text-center">
                        <div className="inline-flex flex-col items-center">
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-gray-100 text-[#334155]">
                            0
                          </span>
                          <span className="text-[9px] text-[#64748B] font-semibold mt-0.5 whitespace-nowrap">
                            +1 req. / -1 req.
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-4 sm:px-6 text-xs text-[#334155] hidden md:table-cell">
                        Estabilidade quantitativa (+1 requisito, -1 requisito) com reordenação de prioridades (Segurança do Paciente).
                      </td>
                    </tr>

                    {/* Row 3: Nível 2 */}
                    <tr className="hover:bg-[#F8FAFC]/60 transition-colors">
                      <td className="py-3 px-4 sm:px-6 font-semibold text-[#334155] flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#FF3200]"></span>
                        Nível 2
                      </td>
                      <td className="py-3 px-4 text-center font-mono font-semibold text-[#94A3B8]">9</td>
                      <td className="py-3 px-4 text-center font-mono font-bold text-[#FF3200]">7</td>
                      <td className="py-3 px-4 text-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800">
                          -2
                        </span>
                      </td>
                      <td className="py-3 px-4 sm:px-6 text-xs text-[#334155] hidden md:table-cell">
                        Enxugamento de processos: itens de alta maturidade migraram para o Nível 3.
                      </td>
                    </tr>

                    {/* Row 4: Nível 3 */}
                    <tr className="bg-teal-50/30 hover:bg-teal-50/60 transition-colors">
                      <td className="py-3 px-4 sm:px-6 font-bold text-[#0F766E] flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#0F766E]"></span>
                        Nível 3
                      </td>
                      <td className="py-3 px-4 text-center font-mono font-semibold text-[#94A3B8]">0</td>
                      <td className="py-3 px-4 text-center font-mono font-black text-[#0F766E]">4</td>
                      <td className="py-3 px-4 text-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-teal-100 text-[#0F766E]">
                          +4
                        </span>
                      </td>
                      <td className="py-3 px-4 sm:px-6 text-xs font-medium text-[#0F766E] hidden md:table-cell">
                        Criação inédita da camada de excelência e comprovação de resultados.
                      </td>
                    </tr>

                    {/* Row 5: CORE */}
                    <tr className="hover:bg-[#F8FAFC]/60 transition-colors">
                      <td className="py-3 px-4 sm:px-6 font-bold text-[#16324F] flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#16324F]"></span>
                        CORE
                      </td>
                      <td className="py-3 px-4 text-center font-mono font-semibold text-[#94A3B8]">9</td>
                      <td className="py-3 px-4 text-center font-mono font-bold text-[#16324F]">8</td>
                      <td className="py-3 px-4 text-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 text-[#16324F]">
                          -1
                        </span>
                      </td>
                      <td className="py-3 px-4 sm:px-6 text-xs text-[#334155] hidden md:table-cell">
                        Recalibragem da criticidade: distribuição estratégica abrangendo N1 (5), N2 (2) e N3 (1).
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* 5 Compact Metric Cards Below Table */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-1">
                <div className="bg-[#F8FAFC] p-3 rounded-xl border border-[#E2E8F0] text-center">
                  <span className="text-[10px] uppercase font-bold text-[#94A3B8] block">Total</span>
                  <div className="font-mono text-base font-black text-[#FF3200] mt-0.5">31 → 33</div>
                  <span className="text-[10px] text-[#FF3200] font-bold">(+2)</span>
                </div>
                <div className="bg-[#F8FAFC] p-3 rounded-xl border border-[#E2E8F0] text-center">
                  <span className="text-[10px] uppercase font-bold text-[#94A3B8] block">Nível 1</span>
                  <div className="font-mono text-base font-bold text-[#16324F] mt-0.5">22 → 22</div>
                  <span className="text-[9.5px] text-[#334155] font-bold block mt-0.5">+1 requisito , -1 requisito</span>
                </div>
                <div className="bg-[#F8FAFC] p-3 rounded-xl border border-[#E2E8F0] text-center">
                  <span className="text-[10px] uppercase font-bold text-[#94A3B8] block">Nível 2</span>
                  <div className="font-mono text-base font-bold text-[#FF3200] mt-0.5">9 → 7</div>
                  <span className="text-[10px] text-amber-700 font-bold">(-2)</span>
                </div>
                <div className="bg-teal-50/50 p-3 rounded-xl border border-teal-200 text-center">
                  <span className="text-[10px] uppercase font-bold text-[#0F766E] block">Nível 3</span>
                  <div className="font-mono text-base font-black text-[#0F766E] mt-0.5">0 → 4</div>
                  <span className="text-[10px] text-[#0F766E] font-black">(+4 Inédito)</span>
                </div>
                <div className="bg-[#F8FAFC] p-3 rounded-xl border border-[#E2E8F0] text-center col-span-2 sm:col-span-1">
                  <span className="text-[10px] uppercase font-bold text-[#94A3B8] block">CORE</span>
                  <div className="font-mono text-base font-bold text-[#16324F] mt-0.5">9 → 8</div>
                  <span className="text-[10px] text-[#16324F] font-bold">(-1)</span>
                </div>
              </div>
            </div>

            {/* Bottom Strategic Summary */}
            <div className="p-3 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] text-xs text-[#334155] flex items-center justify-between">
              <span>
                <strong className="text-[#16324F]">Destaque Estrutural:</strong> A ONA 2026 redistribui a complexidade de Gestão de Pessoas até o Nível 3 e estende os critérios CORE.
              </span>
              <span className="text-[#FF3200] font-bold font-mono text-xs">Slide 04 de {totalSlides}</span>
            </div>
          </div>
        );

      // ----------------------------------------------------
      // SLIDE 05: REDISTRIBUIÇÃO DOS NÍVEIS & LINHA DO TEMPO
      // ----------------------------------------------------
      case 'level_distribution_timeline':
      case 'level_distribution':
      case 'timeline':
        return <LevelDistributionTimelineInteractive />;

      // ----------------------------------------------------
      // ----------------------------------------------------
      // SLIDE 04: REQUISITOS ONA — NÍVEL 1 (PAINEL INTERATIVO)
      // ----------------------------------------------------
      case 'level_1_reorg':
        return <OnaRequirementsInteractive />;

      // ----------------------------------------------------
      // SLIDE 05: A REORGANIZAÇÃO DO NÍVEL 2 (PAINEL INTERATIVO)
      // ----------------------------------------------------
      case 'level_2_reorg':
        return <OnaLevel2Interactive />;

      // ----------------------------------------------------
      // SLIDE 06: O NASCIMENTO DO NÍVEL 3 (PAINEL INTERATIVO)
      // ----------------------------------------------------
      case 'level_3_birth':
        return <OnaLevel3Interactive />;

      // ----------------------------------------------------
      // SLIDE 07: PLANILHA OFICIAL DOS REQUISITOS ONA 2026 (TABELA INTERATIVA)
      // ----------------------------------------------------
      case 'ona_spreadsheet':
        return <OnaSpreadsheetSlide />;

      // ----------------------------------------------------
      // SLIDE 08: O QUE SE ESPERA DA GESTÃO DE PESSOAS NA ONA 2026
      // ----------------------------------------------------
      case 'gp_expectations_2026':
        return <GpExpectationsSlide />;

      // ----------------------------------------------------
      // SLIDE 09: ENCERRAMENTO (OBRIGADO + FRASE DE EFEITO)
      // ----------------------------------------------------
      case 'thank_you':
        return <ThankYouSlide />;

      // ----------------------------------------------------
      // SLIDE 07: NOVO FOCO EXPLÍCITO: SEGURANÇA DO PACIENTE
      // ----------------------------------------------------
      case 'seguranca_paciente':
        return (
          <div className="w-full max-w-5xl mx-auto flex flex-col justify-between h-full py-4 text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF3200]">
                07 • Segurança Assistencial
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#FF3200] mt-1 tracking-tight">
                Segurança do Paciente na Gestão de Pessoas
              </h2>
              <p className="text-sm sm:text-base text-[#334155] mt-1">
                A conexão direta e mandatória: Gestão de Pessoas ↕ Educação ↕ Segurança do Paciente.
              </p>
            </div>

            <div className="my-auto grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-[#E2E8F0] space-y-2">
                <span className="text-xs font-bold uppercase text-[#16324F] block">Capacitação Obrigatória</span>
                <p className="text-xs text-[#334155] leading-relaxed">
                  Treinamento formal em segurança do paciente para 100% dos colaboradores próprios e terceiros atuantes no hospital.
                </p>
              </div>

              <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-[#E2E8F0] space-y-2">
                <span className="text-xs font-bold uppercase text-[#16324F] block">Gestão da Fadiga</span>
                <p className="text-xs text-[#334155] leading-relaxed">
                  Monitoramento de sobrecarga e horas extras contínuas para prevenir falhas de atenção em momentos assistenciais críticos.
                </p>
              </div>

              <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-[#E2E8F0] space-y-2">
                <span className="text-xs font-bold uppercase text-[#16324F] block">Cultura Justa</span>
                <p className="text-xs text-[#334155] leading-relaxed">
                  Ambiente de segurança psicológica onde os profissionais relatam incidentes e quase-erros (near misses) sem medo de retaliação.
                </p>
              </div>
            </div>

            <div className="p-3 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] text-xs text-[#334155] flex items-center justify-between">
              <span><strong>Mantra ONA:</strong> A Segurança do Paciente agora é compromisso explícito e auditável dentro do escopo de Gestão de Pessoas.</span>
              <span className="text-[#16324F] font-bold">Segurança Assistencial</span>
            </div>
          </div>
        );

      // ----------------------------------------------------
      // SLIDE 08: RISCOS PSICOSSOCIAIS & SAÚDE INTEGRAL
      // ----------------------------------------------------
      case 'riscos_psicossociais':
        return (
          <div className="w-full max-w-5xl mx-auto flex flex-col justify-between h-full py-4 text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF3200]">
                08 • Inovação Conceitual
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#FF3200] mt-1 tracking-tight">
                Riscos Psicossociais e Saúde Integral
              </h2>
              <p className="text-sm sm:text-base text-[#334155] mt-1">
                O risco psicossocial passa a aparecer de forma explícita na estrutura do requisito da ONA 2026.
              </p>
            </div>

            <div className="my-auto grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-[#E2E8F0] space-y-2">
                <span className="text-xs font-bold uppercase text-[#16324F] block">Mapeamento de Riscos</span>
                <p className="text-xs text-[#334155] leading-relaxed">
                  Inclusão formal dos fatores psicossociais no PGR (Programa de Gerenciamento de Riscos) e no PCMSO.
                </p>
              </div>

              <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-[#E2E8F0] space-y-2">
                <span className="text-xs font-bold uppercase text-[#16324F] block">Prevenção e Apoio</span>
                <p className="text-xs text-[#334155] leading-relaxed">
                  Canais de acolhimento psicológico, suporte em episódios de sobrecarga emocional e prevenção de Burnout.
                </p>
              </div>

              <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-[#E2E8F0] space-y-2">
                <span className="text-xs font-bold uppercase text-[#0F766E] block">Efetividade e Absenteísmo</span>
                <p className="text-xs text-[#334155] leading-relaxed">
                  Avaliação sistemática dos indicadores de afastamentos e eficácia dos programas preventivos de saúde mental.
                </p>
              </div>
            </div>

            <div className="p-3 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] text-xs text-[#334155] flex items-center justify-between">
              <span><strong>Conformidade 2026:</strong> A saúde mental e a segurança psicológica agora são requisitos auditáveis.</span>
              <span className="text-[#FF3200] font-bold">Saúde do Colaborador</span>
            </div>
          </div>
        );

      // ----------------------------------------------------
      // SLIDE 09: PERFIL EPIDEMIOLÓGICO: DA IDENTIFICAÇÃO À AÇÃO
      // ----------------------------------------------------
      case 'perfil_epidemiologico':
        return (
          <div className="w-full max-w-5xl mx-auto flex flex-col justify-between h-full py-4 text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF3200]">
                09 • Gestão por Resultados
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#FF3200] mt-1 tracking-tight">
                Da Identificação à Ação: Perfil Epidemiológico
              </h2>
              <p className="text-sm sm:text-base text-[#334155] mt-1">
                2022: Identificar → 2026: Identificar e traçar estratégias ativas a partir dos resultados.
              </p>
            </div>

            <div className="my-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 2022 */}
              <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-[#E2E8F0] space-y-3">
                <span className="text-xs font-bold uppercase text-[#94A3B8]">ONA 2022 • Diagnóstico</span>
                <h4 className="text-sm font-bold text-[#16324F]">Identificação Passiva</h4>
                <p className="text-xs text-[#334155] leading-relaxed">
                  O cumprimento normativo era atendido com o levantamento dos dados do PCMSO e do perfil de saúde dos colaboradores.
                </p>
                <div className="p-3 bg-white rounded-lg border border-[#E2E8F0] text-xs text-[#94A3B8]">
                  "Sabemos quem são e quais as principais queixas."
                </div>
              </div>

              {/* 2026 */}
              <div className="bg-teal-50/50 p-6 rounded-2xl border border-teal-200 space-y-3">
                <span className="text-xs font-bold uppercase text-[#0F766E]">ONA 2026 • Ação Estratégica</span>
                <h4 className="text-sm font-bold text-[#0F766E]">Intervenção & Planos Preventivos</h4>
                <p className="text-xs text-[#334155] leading-relaxed">
                  Obrigatório traçar estratégias preventivas a partir dos achados epidemiológicos e mensurar a redução de afastamentos e acidentes.
                </p>
                <div className="p-3 bg-white rounded-lg border border-teal-200 text-xs text-[#0F766E] font-semibold">
                  "Agimos sobre os dados para melhorar a saúde real da equipe."
                </div>
              </div>
            </div>

            <div className="p-3 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] text-xs text-[#334155] flex items-center justify-between">
              <span><strong>Virada de Chave:</strong> Do cumprimento burocrático de diagnóstico para a gestão proativa de saúde populacional.</span>
              <span className="text-[#0F766E] font-bold">Ação Baseada em Dados</span>
            </div>
          </div>
        );

      // ----------------------------------------------------
      // SLIDE 10: DA ESCUTA À EXPERIÊNCIA DO COLABORADOR
      // ----------------------------------------------------
      case 'comunicacao_experiencia':
        return (
          <div className="w-full max-w-5xl mx-auto flex flex-col justify-between h-full py-4 text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0F766E]">
                10 • Experiência do Colaborador
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#FF3200] mt-1 tracking-tight">
                Da Escuta à Gestão da Experiência
              </h2>
              <p className="text-sm sm:text-base text-[#334155] mt-1">
                A esteira de relacionamento com os profissionais como jornada completa de Employee Experience.
              </p>
            </div>

            <div className="my-auto grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-[#E2E8F0] space-y-2">
                <span className="text-xs font-bold uppercase text-[#16324F] block">Nível 1 • Canal de Escuta</span>
                <p className="text-xs text-[#334155] leading-relaxed">
                  Disponibilizar canais formais e acessíveis para manifestações, dúvidas, sugestões e denúncias.
                </p>
              </div>

              <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-[#E2E8F0] space-y-2">
                <span className="text-xs font-bold uppercase text-[#FF3200] block">Nível 2 • Tratativas & Retorno</span>
                <p className="text-xs text-[#334155] leading-relaxed">
                  Gestão sistemática dos prazos de resposta, planos de ação e devolutivas transparentes para os colaboradores.
                </p>
              </div>

              <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-teal-200 bg-teal-50/50 space-y-2">
                <span className="text-xs font-bold uppercase text-[#0F766E] block">Nível 3 • Efetividade de Clima</span>
                <p className="text-xs text-[#334155] leading-relaxed">
                  Comprovação de melhoria na experiência do colaborador e impacto na redução de turnover e aumento de engajamento.
                </p>
              </div>
            </div>

            <div className="p-3 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] text-xs text-[#334155] flex items-center justify-between">
              <span><strong>Jornada Estruturada:</strong> A escuta deixa de ser uma caixa de sugestões e passa a ser um ciclo de governança de clima.</span>
              <span className="text-[#0F766E] font-bold">Employee Experience</span>
            </div>
          </div>
        );

      // ----------------------------------------------------
      // SLIDE 11: CRITICIDADE E TRANSVERSALIDADE (+160%)
      // ----------------------------------------------------
      case 'core_transversalidade':
        return (
          <div className="w-full max-w-5xl mx-auto flex flex-col justify-between h-full py-4 text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0F766E]">
                11 • Transversalidade (+160%)
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#FF3200] mt-1 tracking-tight">
                Criticidade e Transversalidade Institucional
              </h2>
              <p className="text-sm sm:text-base text-[#334155] mt-1">
                De 5 para 13 requisitos transversais e a nova redistribuição dos 8 requisitos CORE.
              </p>
            </div>

            <div className="my-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Box CORE */}
              <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-[#E2E8F0] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase text-[#16324F]">8 Requisitos CORE</span>
                  <span className="font-mono text-sm font-bold text-[#16324F]">9 → 8</span>
                </div>
                <p className="text-xs text-[#334155] leading-relaxed">
                  Redistribuição estratégica da criticidade máxima: 5 requisitos no Nível 1, 2 no Nível 2 e 1 requisito no Nível 3 (Efetividade).
                </p>
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="p-2 bg-white rounded border border-[#E2E8F0]">N1: 5 CORE</div>
                  <div className="p-2 bg-white rounded border border-[#E2E8F0]">N2: 2 CORE</div>
                  <div className="p-2 bg-teal-50 rounded border border-teal-200 text-[#0F766E] font-bold">N3: 1 CORE</div>
                </div>
              </div>

              {/* Box Transversals */}
              <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-[#E2E8F0] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase text-[#0F766E]">Transversalidade Hospitalar</span>
                  <span className="font-mono text-base font-black text-[#0F766E]">5 → 13 (+160%)</span>
                </div>
                <p className="text-xs text-[#334155] leading-relaxed">
                  Gestão de Pessoas agora é auditada em todas as seções assistenciais: UTI, Farmácia, Bloco Cirúrgico, CCIH e Liderança.
                </p>
                <div className="p-2.5 bg-white rounded-lg border border-[#E2E8F0] text-xs text-[#334155]">
                  <strong className="text-[#0F766E]">Impacto:</strong> O auditor avaliará as evidências de pessoas diretamente nos setores.
                </div>
              </div>
            </div>

            <div className="p-3 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] text-xs text-[#334155] flex items-center justify-between">
              <span><strong>Conclusão:</strong> A área de Pessoas deixa de ser um departamento isolado para se tornar a malha conectiva do hospital.</span>
              <span className="text-[#0F766E] font-bold">+160% Presença</span>
            </div>
          </div>
        );

      // ----------------------------------------------------
      // SLIDE 12: A GRANDE SÍNTESE (2022 × 2026)
      // ----------------------------------------------------
      case 'grande_sintese':
        return (
          <div className="w-full max-w-5xl mx-auto flex flex-col justify-between h-full py-4 text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF3200]">
                12 • Síntese Estratégica
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#FF3200] mt-1 tracking-tight">
                A Grande Síntese: 2022 × 2026
              </h2>
              <p className="text-sm sm:text-base text-[#334155] mt-1">
                A transformação profunda da lógica e do propósito da norma ONA.
              </p>
            </div>

            <div className="my-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* ONA 2022 */}
              <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-[#E2E8F0] space-y-3">
                <span className="text-xs font-mono font-bold uppercase text-[#94A3B8]">ONA 2022 • O Processo Existe</span>
                <h4 className="text-base font-bold text-[#16324F]">Foco na Conformidade de Processos</h4>
                <ul className="space-y-2 text-xs text-[#334155]">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#94A3B8]"></span>
                    <span>Estrutura → Execução → Acompanhamento</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#94A3B8]"></span>
                    <span>Gestão de Pessoas limitada ao Nível 2</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#94A3B8]"></span>
                    <span>5 requisitos transversais isolados</span>
                  </li>
                </ul>
              </div>

              {/* ONA 2026 */}
              <div className="bg-teal-50/50 p-6 rounded-2xl border border-teal-200 space-y-3">
                <span className="text-xs font-mono font-bold uppercase text-[#0F766E]">ONA 2026 • O Processo Funciona</span>
                <h4 className="text-base font-bold text-[#0F766E]">Foco no Resultado e na Efetividade</h4>
                <ul className="space-y-2 text-xs text-[#334155]">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E]"></span>
                    <span>Estrutura → Execução → Resultado → <strong>EFETIVIDADE</strong></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E]"></span>
                    <span>Nascimento do Nível 3 (4 requisitos de impacto)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E]"></span>
                    <span>13 requisitos transversais (+160%)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-3 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] text-xs text-[#334155] flex items-center justify-between">
              <span><strong>Síntese:</strong> O desafio não é apenas demonstrar que o processo existe, mas comprovar que ele produz resultados e gera valor.</span>
              <span className="text-[#0F766E] font-bold">Nova Fronteira</span>
            </div>
          </div>
        );

      // ----------------------------------------------------
      // SLIDE 13: O QUE ISSO MUDA PARA NÓS? (IMPACTO ORGANIZAÇÃO)
      // ----------------------------------------------------
      case 'impacto_organizacao':
        return (
          <div className="w-full max-w-5xl mx-auto flex flex-col justify-between h-full py-4 text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF3200]">
                13 • Impacto Prático
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#FF3200] mt-1 tracking-tight">
                O que isso muda para nós?
              </h2>
              <p className="text-sm sm:text-base text-[#334155] mt-1">
                4 Dimensões práticas para avaliação e tomada de decisão da liderança.
              </p>
            </div>

            <div className="my-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-[#E2E8F0] space-y-1.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#16324F]">1. PROCESSOS</span>
                <p className="text-xs text-[#334155] leading-relaxed">
                  Nossos fluxos cobrem explicitamente segurança do paciente, mapeamento psicossocial e canais estruturados de manifestação?
                </p>
              </div>

              <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-[#E2E8F0] space-y-1.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF3200]">2. INDICADORES</span>
                <p className="text-xs text-[#334155] leading-relaxed">
                  Medimos apenas horas de treinamento e turnover ou já mensuramos a efetividade e o impacto no desfecho assistencial?
                </p>
              </div>

              <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-[#E2E8F0] space-y-1.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#0F766E]">3. EVIDÊNCIAS</span>
                <p className="text-xs text-[#334155] leading-relaxed">
                  Nosso acervo de evidências comprova que as ações geraram mudanças de comportamento e resultados sustentados?
                </p>
              </div>

              <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-[#E2E8F0] space-y-1.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#16324F]">4. INTEGRAÇÃO</span>
                <p className="text-xs text-[#334155] leading-relaxed">
                  A Gestão de Pessoas atua em conjunto com as lideranças médicas, multiprofissionais e de qualidade em todas as áreas?
                </p>
              </div>
            </div>

            <div className="p-3 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] text-xs text-[#334155] flex items-center justify-between">
              <span><strong>Prioridade:</strong> A preparação exige alinhar políticas, indicadores e a atuação dos líderes na ponta.</span>
              <span className="text-[#FF3200] font-bold">4 Dimensões</span>
            </div>
          </div>
        );

      // ----------------------------------------------------
      // SLIDE 14: CAMINHO DE PREPARAÇÃO (ROADMAP)
      // ----------------------------------------------------
      case 'caminho_preparacao':
        return (
          <div className="w-full max-w-5xl mx-auto flex flex-col justify-between h-full py-4 text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF3200]">
                14 • Roadmap de Implementação
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#FF3200] mt-1 tracking-tight">
                Caminho de Preparação (6 Passos)
              </h2>
              <p className="text-sm sm:text-base text-[#334155] mt-1">
                Roadmap executivo de adequação para o ciclo oficial ONA 2026.
              </p>
            </div>

            <div className="my-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              <div className="bg-[#F8FAFC] p-3.5 rounded-xl border border-[#E2E8F0] text-center space-y-1.5">
                <span className="w-5 h-5 rounded-full bg-[#16324F] text-white font-bold text-[10px] flex items-center justify-center mx-auto">1</span>
                <h4 className="text-[11px] font-bold text-[#16324F] uppercase">MAPEAR</h4>
                <p className="text-[10px] text-[#334155]">Compreender os 33 requisitos e orientações.</p>
              </div>

              <div className="bg-[#F8FAFC] p-3.5 rounded-xl border border-[#E2E8F0] text-center space-y-1.5">
                <span className="w-5 h-5 rounded-full bg-[#16324F] text-white font-bold text-[10px] flex items-center justify-center mx-auto">2</span>
                <h4 className="text-[11px] font-bold text-[#16324F] uppercase">COMPARAR</h4>
                <p className="text-[10px] text-[#334155]">Identificar as alterações conceituais específicas.</p>
              </div>

              <div className="bg-[#F8FAFC] p-3.5 rounded-xl border border-[#E2E8F0] text-center space-y-1.5">
                <span className="w-5 h-5 rounded-full bg-[#FF3200] text-white font-bold text-[10px] flex items-center justify-center mx-auto">3</span>
                <h4 className="text-[11px] font-bold text-[#FF3200] uppercase">GAPS</h4>
                <p className="text-[10px] text-[#334155]">Diagnosticar lacunas entre a prática e a norma.</p>
              </div>

              <div className="bg-[#F8FAFC] p-3.5 rounded-xl border border-[#E2E8F0] text-center space-y-1.5">
                <span className="w-5 h-5 rounded-full bg-[#FF3200] text-white font-bold text-[10px] flex items-center justify-center mx-auto">4</span>
                <h4 className="text-[11px] font-bold text-[#FF3200] uppercase">ADEQUAR</h4>
                <p className="text-[10px] text-[#334155]">Revisar programas, políticas e evidências.</p>
              </div>

              <div className="bg-[#F8FAFC] p-3.5 rounded-xl border border-[#E2E8F0] text-center space-y-1.5">
                <span className="w-5 h-5 rounded-full bg-[#0F766E] text-white font-bold text-[10px] flex items-center justify-center mx-auto">5</span>
                <h4 className="text-[11px] font-bold text-[#0F766E] uppercase">MONITORAR</h4>
                <p className="text-[10px] text-[#334155]">Acompanhar indicadores de efetividade.</p>
              </div>

              <div className="bg-teal-50/50 p-3.5 rounded-xl border border-teal-200 text-center space-y-1.5">
                <span className="w-5 h-5 rounded-full bg-[#0F766E] text-white font-bold text-[10px] flex items-center justify-center mx-auto">6</span>
                <h4 className="text-[11px] font-bold text-[#0F766E] uppercase">DEMONSTRAR</h4>
                <p className="text-[10px] text-[#334155]">Consolidar histórico de impacto na auditoria.</p>
              </div>
            </div>

            <div className="p-3 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] text-xs text-[#334155] flex items-center justify-between">
              <span><strong>Meta:</strong> Antecipar as exigências da ONA 2026 e consolidar a excelência antes do ciclo oficial.</span>
              <span className="text-[#0F766E] font-bold">Roadmap Estruturado</span>
            </div>
          </div>
        );

      // ----------------------------------------------------
      // SLIDE 15: CONCLUSÃO & FECHAMENTO
      // ----------------------------------------------------
      case 'conclusao':
        return (
          <div className="w-full max-w-5xl mx-auto flex flex-col justify-between h-full py-4 text-left">
            {/* Top Institutional Header */}
            <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-4">
              <SantaCasaLogo className="h-9 sm:h-10" variant="full" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#334155] bg-[#F8FAFC] px-3 py-1 rounded-md border border-[#E2E8F0]">
                15 • Conclusão Estratégica
              </span>
            </div>

            {/* Main Content */}
            <div className="my-auto space-y-6 max-w-3xl">
              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#FF3200] tracking-tight leading-tight">
                  2022 → 2026
                </h2>
                <h3 className="text-lg sm:text-xl font-bold text-[#FF3200]">
                  De processos estruturados para a demonstração contínua de resultados e efetividade.
                </h3>
              </div>

              <div className="p-5 bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#FF3200] text-white">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#16324F]">A Nova Fronteira da Gestão de Pessoas</h4>
                    <p className="text-xs text-[#334155]">
                      Em 2022: <em>"O processo existe."</em> • Em 2026: <strong>"O processo funciona, protege o paciente e gera valor real."</strong>
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-teal-50/50 rounded-2xl border border-teal-200 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-[#16324F] block">Compromisso Santa Casa BH</span>
                  <span className="text-xs text-[#334155]">Gente, Qualidade e Assistência rumo à excelência Nível 3.</span>
                </div>
                <span className="text-xs font-bold text-[#0F766E] uppercase tracking-wider bg-white px-3 py-1 rounded-lg border border-teal-200">
                  ONA 2026
                </span>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between text-xs text-[#334155] border-t border-[#E2E8F0] pt-3">
              <div className="flex items-center gap-2 font-medium">
                <span className="text-[#16324F] font-bold">Santa Casa BH</span>
                <span className="text-[#94A3B8]">•</span>
                <span>Saúde de Ponta para Todos</span>
              </div>
              <span className="font-mono text-[#94A3B8]">
                Deck Completo • 15 Slides
              </span>
            </div>
          </div>
        );

      default:
        return (
          <div className="p-8 text-center text-[#16324F]">
            <h3 className="text-lg font-bold text-[#FF3200]">{slide.title}</h3>
            <p className="text-xs text-[#334155] mt-1">{slide.subtitle}</p>
          </div>
        );
    }
  };

  return (
    <motion.div
      key={slide.id}
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      className="w-full h-full bg-white flex flex-col justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-6 select-none overflow-hidden"
    >
      {renderSlideContent()}
    </motion.div>
  );
};
