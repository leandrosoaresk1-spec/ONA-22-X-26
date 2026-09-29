import React, { useState } from 'react';
import { 
  FileCheck2, 
  AlertTriangle, 
  Award, 
  Users, 
  Target, 
  ShieldCheck, 
  TrendingUp, 
  CheckCircle2, 
  Clock, 
  FileText, 
  BarChart3, 
  Building2, 
  GraduationCap, 
  HelpCircle, 
  Send,
  Sparkles,
  ArrowRight,
  AlertCircle
} from 'lucide-react';
import { SantaCasaLogo } from './SantaCasaLogo';

// =========================================================================
// SLIDE 02: AUDITORIA EXTERNA ISO 9001:2015 — HOSPITAL SÃO LUCAS
// Contexto institucional, escopo de Gestão de Pessoas e Excelência Assistencial
// =========================================================================
export const IsoAuditIntroSlide: React.FC<{ totalSlides?: number }> = ({ totalSlides = 11 }) => {
  const [activeScope, setActiveScope] = useState<'geral' | 'competencia' | 'excelencia'>('geral');

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col justify-between h-full py-3 text-left select-none">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#E2E8F0] pb-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF3200]">
              02 • Auditoria Externa ISO 9001:2015
            </span>
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
              Relatório nº 10774
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#FF3200] mt-0.5 tracking-tight">
            Auditoria Externa ISO 9001:2015 — Hospital São Lucas
          </h2>
          <p className="text-xs sm:text-sm text-[#334155] mt-0.5">
            Diagnóstico Institucional, Escopo de Gestão de Pessoas e Compromisso com a Excelência Assistencial
          </p>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center gap-1 bg-[#F1F5F9] p-1 rounded-xl border border-[#E2E8F0] shrink-0 self-start sm:self-auto">
          <button
            onClick={() => setActiveScope('geral')}
            className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
              activeScope === 'geral'
                ? 'bg-[#16324F] text-white shadow-xs'
                : 'text-[#334155] hover:text-[#16324F] hover:bg-white/60'
            }`}
          >
            Visão Geral
          </button>
          <button
            onClick={() => setActiveScope('competencia')}
            className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
              activeScope === 'competencia'
                ? 'bg-[#16324F] text-white shadow-xs'
                : 'text-[#334155] hover:text-[#16324F] hover:bg-white/60'
            }`}
          >
            Cláusula 7 (Pessoas)
          </button>
          <button
            onClick={() => setActiveScope('excelencia')}
            className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
              activeScope === 'excelencia'
                ? 'bg-[#0F766E] text-white shadow-xs'
                : 'text-[#334155] hover:text-[#0F766E] hover:bg-white/60'
            }`}
          >
            Excelência Assistencial
          </button>
        </div>
      </div>

      {/* Meta Bar: Instituição & Auditoria */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 my-2">
        <div className="bg-[#F8FAFC] p-2.5 rounded-xl border border-[#E2E8F0] flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-[#16324F] text-white shrink-0">
            <Building2 className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-slate-500 uppercase block">Unidade Auditada</span>
            <span className="text-xs font-bold text-[#16324F]">Hospital São Lucas</span>
          </div>
        </div>

        <div className="bg-[#F8FAFC] p-2.5 rounded-xl border border-[#E2E8F0] flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-[#FF3200] text-white shrink-0">
            <FileCheck2 className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-slate-500 uppercase block">Norma de Referência</span>
            <span className="text-xs font-bold text-[#FF3200]">ABNT NBR ISO 9001:2015</span>
          </div>
        </div>

        <div className="bg-[#F8FAFC] p-2.5 rounded-xl border border-[#E2E8F0] flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-[#0F766E] text-white shrink-0">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-slate-500 uppercase block">Tipo de Ciclo</span>
            <span className="text-xs font-bold text-[#0F766E]">Auditoria Externa</span>
          </div>
        </div>

        <div className="bg-[#F8FAFC] p-2.5 rounded-xl border border-[#E2E8F0] flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-amber-500 text-white shrink-0">
            <Users className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-slate-500 uppercase block">Processo Central</span>
            <span className="text-xs font-bold text-amber-700">Gestão de Pessoas / RH</span>
          </div>
        </div>
      </div>

      {/* Main 3 Columns / Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 my-auto">
        {/* Card 1: Excelência Assistencial & Prêmios */}
        <div className={`p-4 rounded-2xl border transition-all ${
          activeScope === 'excelencia' || activeScope === 'geral'
            ? 'bg-emerald-50/40 border-emerald-200 shadow-xs'
            : 'bg-[#F8FAFC] border-[#E2E8F0] opacity-50'
        }`}>
          <div className="flex items-center justify-between mb-2">
            <div className="p-2 bg-emerald-600 text-white rounded-lg">
              <Award className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
              Pilar Assistencial
            </span>
          </div>
          <h3 className="text-sm font-black text-[#16324F] uppercase tracking-wide">
            Excelência Assistencial
          </h3>
          <p className="text-xs text-[#334155] mt-1 leading-relaxed">
            Reconhecimento formal da qualidade do atendimento e das conquistas assistenciais do Hospital São Lucas.
          </p>
          <ul className="mt-3 space-y-1.5 text-[11.5px] text-[#334155]">
            <li className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span>Premiações e certificações que atestam a segurança do paciente e cuidado humanizado.</span>
            </li>
            <li className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span>Alta satisfação dos usuários e governança clínica integrada às equipes multiprofissionais.</span>
            </li>
            <li className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span>A Gestão de Pessoas como viabilizadora direta dos padrões assistenciais de ponta.</span>
            </li>
          </ul>
        </div>

        {/* Card 2: Escopo ISO 9001 - Cláusula 7 (Apoio) */}
        <div className={`p-4 rounded-2xl border transition-all ${
          activeScope === 'competencia' || activeScope === 'geral'
            ? 'bg-blue-50/50 border-blue-200 shadow-xs'
            : 'bg-[#F8FAFC] border-[#E2E8F0] opacity-50'
        }`}>
          <div className="flex items-center justify-between mb-2">
            <div className="p-2 bg-[#16324F] text-white rounded-lg">
              <GraduationCap className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-100 text-[#16324F]">
              Cláusula 7 • Apoio
            </span>
          </div>
          <h3 className="text-sm font-black text-[#16324F] uppercase tracking-wide">
            Requisitos ISO em Pessoas
          </h3>
          <p className="text-xs text-[#334155] mt-1 leading-relaxed">
            Mapeamento dos 4 requisitos normativos auditados na Gestão de Recursos Humanos:
          </p>
          <div className="mt-3 space-y-1.5 text-[11px] text-[#334155]">
            <div className="p-1.5 rounded-lg bg-white border border-blue-100">
              <strong className="text-[#16324F]">Item 7.1.2:</strong> Recursos humanos adequados para a operação assistencial.
            </div>
            <div className="p-1.5 rounded-lg bg-white border border-blue-100">
              <strong className="text-[#16324F]">Item 7.2 (Competência):</strong> Qualificação, treinamento e comprovação de eficácia.
            </div>
            <div className="p-1.5 rounded-lg bg-white border border-blue-100">
              <strong className="text-[#16324F]">Item 7.3:</strong> Conscientização sobre a Política da Qualidade e riscos.
            </div>
            <div className="p-1.5 rounded-lg bg-white border border-blue-100">
              <strong className="text-[#16324F]">Item 7.1.6:</strong> Gestão e retenção do conhecimento organizacional.
            </div>
          </div>
        </div>

        {/* Card 3: Sinergia Estratégica: ISO 9001 × ONA 2026 */}
        <div className={`p-4 rounded-2xl border transition-all ${
          activeScope === 'geral' || activeScope === 'competencia'
            ? 'bg-amber-50/50 border-amber-200 shadow-xs'
            : 'bg-[#F8FAFC] border-[#E2E8F0] opacity-50'
        }`}>
          <div className="flex items-center justify-between mb-2">
            <div className="p-2 bg-amber-600 text-white rounded-lg">
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-100 text-amber-800">
              Convergência ONA
            </span>
          </div>
          <h3 className="text-sm font-black text-[#16324F] uppercase tracking-wide">
            Ponte com a ONA 2026
          </h3>
          <p className="text-xs text-[#334155] mt-1 leading-relaxed">
            Como os achados da ISO 9001 preparam e impulsionam a jornada para o Manual ONA 2026:
          </p>
          <ul className="mt-3 space-y-2 text-[11.5px] text-[#334155]">
            <li className="flex items-start gap-1.5">
              <Target className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
              <span><strong>Da Conformidade ao Desfecho:</strong> A ISO 9001 garante o processo; a ONA 2026 cobra o resultado clínico e a segurança assistencial.</span>
            </li>
            <li className="flex items-start gap-1.5">
              <Target className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
              <span><strong>Maturidade Nível 3:</strong> Ambas as normas convergem na exigência de mensurar impacto real e retenção de competências críticas.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Strategic Callout */}
      <div className="p-3 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] text-xs text-[#334155] flex flex-col sm:flex-row sm:items-center justify-between gap-2 mt-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#FF3200]"></span>
          <span>
            <strong>Conclusão do Diagnóstico:</strong> A Gestão de Pessoas do Hospital São Lucas sustenta a excelência assistencial e necessita consolidar a sistemática formal de evidências para responder à auditoria externa e preparar a ONA 2026.
          </span>
        </div>
        <span className="text-xs font-bold text-[#FF3200] shrink-0">
          Doc nº 10774 • Auditoria
        </span>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between text-xs text-[#334155] border-t border-[#E2E8F0] pt-2 mt-2">
        <div className="flex items-center gap-2 font-medium">
          <span className="text-[#16324F] font-bold">Hospital São Lucas</span>
          <span className="text-[#94A3B8]">•</span>
          <span className="text-slate-500">Auditoria Externa ISO 9001:2015</span>
        </div>
        <span className="font-mono text-[#94A3B8]">
          Slide 02 de {totalSlides}
        </span>
      </div>
    </div>
  );
};


// =========================================================================
// SLIDE 03: AUDITORIA EXTERNA ISO 9001:2015 — CONSTATAÇÕES & PLANO DE AÇÃO
// Apontamentos Críticos: Eficácia de Treinamentos e Avanço dos PDIs (14%)
// =========================================================================
export const IsoAuditFindingsSlide: React.FC<{ totalSlides?: number }> = ({ totalSlides = 11 }) => {
  const [selectedFinding, setSelectedFinding] = useState<'both' | 'f1' | 'f2'>('both');

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col justify-between h-full py-3 text-left select-none">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#E2E8F0] pb-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF3200]">
              03 • Constatações & Plano de Remediação
            </span>
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-red-100 text-red-700 border border-red-200">
              Resposta Prioritária • RM
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#FF3200] mt-0.5 tracking-tight">
            Constatações da Auditoria Externa & Plano de Ação
          </h2>
          <p className="text-xs sm:text-sm text-[#334155] mt-0.5">
            Apontamentos Críticos em Gestão de Pessoas: Avaliação de Eficácia de Treinamentos e Evolução dos PDIs
          </p>
        </div>

        {/* Finding Selector */}
        <div className="flex items-center gap-1 bg-[#F1F5F9] p-1 rounded-xl border border-[#E2E8F0] shrink-0 self-start sm:self-auto">
          <button
            onClick={() => setSelectedFinding('both')}
            className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
              selectedFinding === 'both'
                ? 'bg-[#16324F] text-white shadow-xs'
                : 'text-[#334155] hover:text-[#16324F] hover:bg-white/60'
            }`}
          >
            Ambas
          </button>
          <button
            onClick={() => setSelectedFinding('f1')}
            className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
              selectedFinding === 'f1'
                ? 'bg-[#FF3200] text-white shadow-xs'
                : 'text-[#334155] hover:text-[#FF3200] hover:bg-white/60'
            }`}
          >
            1. Eficácia Treinamentos
          </button>
          <button
            onClick={() => setSelectedFinding('f2')}
            className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
              selectedFinding === 'f2'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'text-[#334155] hover:text-amber-600 hover:bg-white/60'
            }`}
          >
            2. PDIs (14%)
          </button>
        </div>
      </div>

      {/* Central Grid: As 2 Constatações Críticas da Auditoria */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-auto">
        {/* CONSTATAÇÃO 1: Eficácia de Treinamento */}
        <div className={`p-4 rounded-2xl border transition-all ${
          selectedFinding === 'f1' || selectedFinding === 'both'
            ? 'bg-rose-50/50 border-rose-300 shadow-sm'
            : 'bg-[#F8FAFC] border-[#E2E8F0] opacity-40'
        }`}>
          {/* Badge & Title */}
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-rose-200 text-rose-900 uppercase">
              Constatação 01 • Item 7.2 ISO 9001
            </span>
            <span className="text-[10px] font-bold text-rose-700 uppercase flex items-center gap-1">
              <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
              Oportunidade Crítica
            </span>
          </div>

          <h3 className="text-base font-black text-[#16324F] tracking-tight">
            Avaliação de Eficácia de Treinamento
          </h3>
          <p className="text-xs text-rose-900/80 font-medium mt-0.5">
            Ausência de metodologia formal documentada e padronizada para mensurar a eficácia prática das capacitações.
          </p>

          {/* Finding Details */}
          <div className="mt-3 space-y-2 text-xs">
            <div className="p-2.5 rounded-xl bg-white border border-rose-200">
              <span className="text-[10px] font-bold text-rose-700 uppercase block mb-0.5">
                O que a auditoria apontou:
              </span>
              <p className="text-slate-700 leading-snug">
                Foram evidenciados registros de frequência e carga horária, porém <strong>não há evidência formal de acompanhamento pós-treinamento</strong> para avaliar se o conteúdo foi assimilado e se gerou mudança de comportamento no posto de trabalho.
              </p>
            </div>

            <div className="p-2.5 rounded-xl bg-white border border-rose-200">
              <span className="text-[10px] font-bold text-slate-700 uppercase block mb-0.5">
                Convergência com ONA 2026:
              </span>
              <p className="text-slate-700 leading-snug">
                Coincide diretamente com o <strong>Requisito 1 de Nível 3 da ONA 2026</strong>: avaliação da eficácia em 4 níveis (Reação, Assimilação, Comportamento e Impacto).
              </p>
            </div>

            <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200">
              <span className="text-[10px] font-bold text-emerald-800 uppercase block mb-0.5">
                Plano de Remediação Imediato (RM):
              </span>
              <p className="text-emerald-950 font-medium leading-snug">
                Padronizar sistemática de avaliação de eficácia com líderes setoriais em 30 e 60 dias pós-treinamento e integrar ao painel de indicadores de GP.
              </p>
            </div>
          </div>
        </div>

        {/* CONSTATAÇÃO 2: Planos de Desenvolvimento Individual (PDIs) */}
        <div className={`p-4 rounded-2xl border transition-all ${
          selectedFinding === 'f2' || selectedFinding === 'both'
            ? 'bg-amber-50/50 border-amber-300 shadow-sm'
            : 'bg-[#F8FAFC] border-[#E2E8F0] opacity-40'
        }`}>
          {/* Badge & Title */}
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-200 text-amber-900 uppercase">
              Constatação 02 • PDIs Ativos
            </span>
            <span className="text-[10px] font-bold text-amber-800 uppercase flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
              Apenas 14% de Avanço
            </span>
          </div>

          <h3 className="text-base font-black text-[#16324F] tracking-tight">
            Evolução dos Planos de Desenvolvimento (PDI)
          </h3>
          <p className="text-xs text-amber-900/80 font-medium mt-0.5">
            Baixo índice de avanço nos 225 PDIs ativos mapeados no Hospital São Lucas.
          </p>

          {/* Visual Progress Indicator */}
          <div className="mt-3 p-3 rounded-xl bg-white border border-amber-200">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-bold text-[#16324F]">Status dos 225 PDIs Auditados:</span>
              <span className="text-xs font-black text-[#FF3200]">14% Avanço (31 PDIs)</span>
            </div>
            {/* Progress bar */}
            <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden flex">
              <div className="h-full bg-emerald-500 rounded-l-full" style={{ width: '14%' }} title="14% Concluídos/Avançados"></div>
              <div className="h-full bg-rose-400 rounded-r-full" style={{ width: '86%' }} title="86% Pendentes de Evolução"></div>
            </div>
            <div className="flex items-center justify-between mt-1.5 text-[10.5px]">
              <span className="text-emerald-700 font-bold">✓ 31 PDIs com evolução documentada (14%)</span>
              <span className="text-rose-700 font-bold">⚠ 194 PDIs sem registro de avanço (86%)</span>
            </div>
          </div>

          {/* Finding Details */}
          <div className="mt-2.5 space-y-2 text-xs">
            <div className="p-2.5 rounded-xl bg-white border border-amber-200">
              <span className="text-[10px] font-bold text-amber-800 uppercase block mb-0.5">
                Impacto para a Qualidade e Auditoria:
              </span>
              <p className="text-slate-700 leading-snug">
                Risco de descontinuidade no desenvolvimento de competências assistenciais e apontamento na avaliação de desempenho do Nível 2 da ONA.
              </p>
            </div>

            <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200">
              <span className="text-[10px] font-bold text-emerald-800 uppercase block mb-0.5">
                Plano de Remediação Imediato (RM):
              </span>
              <p className="text-emerald-950 font-medium leading-snug">
                Força-tarefa com os gestores para acompanhamento e atualização dos 194 PDIs e implantação de monitoramento quinzenal via People Analytics.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Plan / RM Resubmission Bar */}
      <div className="p-3 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-2">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-[#FF3200] text-white shrink-0">
            <Send className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-[#16324F]">
              Plano de Ação Corretiva & Resposta à Auditoria (RM - Relatório de Melhoria)
            </h4>
            <p className="text-[11px] text-[#334155]">
              Prazo prioritário para reenvio das evidências à auditoria externa com governança integrada GP + Qualidade.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0 self-start sm:self-auto">
          <span className="text-[11px] font-bold px-3 py-1 rounded-lg bg-emerald-100 text-emerald-800 border border-emerald-200">
            Tratamento em Andamento
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between text-xs text-[#334155] border-t border-[#E2E8F0] pt-2 mt-2">
        <div className="flex items-center gap-2 font-medium">
          <span className="text-[#16324F] font-bold">Hospital São Lucas</span>
          <span className="text-[#94A3B8]">•</span>
          <span className="text-slate-500">Auditoria Externa ISO 9001:2015</span>
        </div>
        <span className="font-mono text-[#94A3B8]">
          Slide 03 de {totalSlides}
        </span>
      </div>
    </div>
  );
};
