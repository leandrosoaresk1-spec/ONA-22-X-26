import React, { useState } from 'react';
import {
  Sparkles,
  ShieldCheck,
  Users2,
  Brain,
  Smile,
  Award,
  Compass,
  CheckCircle2,
  Heart,
  ArrowRight,
  Workflow,
  Stethoscope,
  Info,
} from 'lucide-react';

export const GpExpectationsSlide: React.FC = () => {
  const [selectedCycleStep, setSelectedCycleStep] = useState<number | null>(null);

  const cycleSteps = [
    {
      num: 1,
      title: 'Planejamento & Dimensionamento',
      icon: Users2,
      tag: 'Equipe Certa',
      simpleExpl: 'Dimensionar a quantidade e o perfil de profissionais conforme a gravidade e o volume de pacientes, evitando sobrecarga e riscos assistenciais.',
      officialFocus: 'Definição de perfis, competências e quantitativo alinhado a parâmetros técnicos oficiais e perfil epidemiológico.',
      laymanQuote: '"Ter a quantidade exata de pessoas certas e qualificadas para o perfil de pacientes do hospital."',
      evidenceExample: 'Cálculo de dimensionamento de pessoal atualizado e aprovado pela diretoria.',
    },
    {
      num: 2,
      title: 'Recrutamento & Seleção Inclusiva',
      icon: Compass,
      tag: 'Atração Justa',
      simpleExpl: 'Contratar pessoas alinhadas à missão e aos valores do hospital, com processos seletivos transparentes, sem discriminação e focados em competências.',
      officialFocus: 'Processos justos, inclusivos e aderentes à cultura organizacional, com foco em competências técnicas e comportamentais.',
      laymanQuote: '"Contratar com respeito e transparência, valorizando ética e habilidade técnica."',
      evidenceExample: 'Critérios objetivos de seleção documentados e política de diversidade & inclusão.',
    },
    {
      num: 3,
      title: 'Integração & Acolhimento',
      icon: Smile,
      tag: 'Chegada Segura',
      simpleExpl: 'Acolher e preparar o recém-contratado antes de iniciar no setor, ensinando os protocolos de segurança e a cultura da instituição.',
      officialFocus: 'Ambientação com alinhamento cultural, acolhimento e preparo inicial seguro para o desempenho da função.',
      laymanQuote: '"Ninguém começa sem preparo: o colaborador é orientado e acolhido desde o 1º dia."',
      evidenceExample: 'Programa de integração com lista de presença e avaliação de eficácia da ambientação.',
    },
    {
      num: 4,
      title: 'Capacitação Contínua & Segurança',
      icon: ShieldCheck,
      tag: 'Cuidado Seguro',
      simpleExpl: 'Treinamento contínuo em Metas de Segurança do Paciente para todos os colaboradores (incluindo terceiros e equipes de apoio).',
      officialFocus: 'Educação permanente com foco em competências técnicas, comportamentais e prevenção de incidentes assistenciais.',
      laymanQuote: '"Aprender constantemente para cuidar do paciente com segurança máxima e sem falhas evitáveis."',
      evidenceExample: 'Matriz anual de treinamentos com verificação prática da eficácia das capacitações.',
    },
    {
      num: 5,
      title: 'Avaliação de Desempenho & Feedback',
      icon: Brain,
      tag: 'Escuta Ativa',
      simpleExpl: 'Conversas regulares de feedback com escuta ativa, identificando pontos fortes e criando Planos de Desenvolvimento Individual (PDI).',
      officialFocus: 'Avaliação sistemática com feedback estruturado, escuta ativa e construção de planos de desenvolvimento.',
      laymanQuote: '"Saber com clareza como está seu trabalho e receber apoio direto para crescer na carreira."',
      evidenceExample: 'Formulários de avaliação de competências e atas de reuniões formais de feedback.',
    },
    {
      num: 6,
      title: 'Saúde Integral & Apoio Emocional',
      icon: Heart,
      tag: 'Cuidar de Quem Cuida',
      simpleExpl: 'Prevenção ao burnout, ergonomia, combate ao assédio e suporte emocional imediato aos profissionais envolvidos em incidentes (segundas vítimas).',
      officialFocus: 'Cuidado com a saúde física e mental, segurança ocupacional, suporte emocional e acolhimento em incidentes.',
      laymanQuote: '"Trabalhar em um ambiente psicologicamente seguro, com apoio à saúde física e mental."',
      evidenceExample: 'Fluxo estruturado de suporte a segundas vítimas e ações de saúde mental documentadas.',
    },
    {
      num: 7,
      title: 'Reconhecimento, Retenção & Liderança',
      icon: Award,
      tag: 'Valorização Real',
      simpleExpl: 'Valorizar os talentos com base em mérito e formar lideranças conscientes e humanas, garantindo a sustentabilidade da força de trabalho.',
      officialFocus: 'Diretrizes justas de valorização, retenção de talentos e desenvolvimento contínuo das lideranças institucionais.',
      laymanQuote: '"Ser valorizado pelo esforço diário e ter líderes preparados que inspiram a equipe."',
      evidenceExample: 'Programa de desenvolvimento de líderes e indicadores de turnover/retenção analisados.',
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col h-full py-1 text-left select-text">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-2.5">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-black uppercase tracking-wider text-[#FF3200] bg-orange-50 px-2.5 py-0.5 rounded-full border border-orange-200 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              Slide 09 • Subseção 1.4 da ONA 2026
            </span>
            <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full border border-slate-200">
              Ciclo Contínuo & Integrado
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-[#16324F] mt-1 tracking-tight flex items-center gap-2">
            O Ciclo da Gestão de Pessoas em 7 Passos
          </h2>
        </div>

        <div className="hidden sm:flex items-center gap-2 bg-blue-50/80 px-3 py-1.5 rounded-xl border border-blue-100 text-blue-900 text-xs font-semibold">
          <Workflow className="w-4 h-4 text-[#FF3200] shrink-0" />
          <span>7 Etapas que conectam o cuidado interno à segurança do paciente</span>
        </div>
      </div>

      {/* Hero Central Mantra Banner */}
      <div className="mt-2.5 bg-gradient-to-r from-[#16324F] via-[#1A3E63] to-[#16324F] text-white p-3 sm:p-3.5 rounded-2xl shadow-sm border border-slate-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#FF3200] flex items-center justify-center shrink-0 shadow-md">
            <Stethoscope className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="text-[9.5px] font-black uppercase tracking-widest text-orange-200">
              Princípio Fundamental ONA 2026
            </span>
            <h3 className="text-xs sm:text-sm font-black tracking-tight leading-snug">
              "Cuidar de pessoas é a essência da saúde — e isso começa dentro da própria organização."
            </h3>
            <p className="text-[11px] text-slate-200 mt-0.5">
              A forma como o hospital planeja, contrata, acolhe, treina, escuta e cuida dos profissionais reflete diretamente na qualidade da assistência.
            </p>
          </div>
        </div>

        <div className="hidden lg:flex flex-col items-end shrink-0 bg-white/10 px-3 py-1.5 rounded-xl border border-white/15">
          <span className="text-[10px] text-slate-300 font-bold uppercase tracking-wider">Visão Sistêmica</span>
          <span className="text-xs font-black text-orange-300">Sem Ações Isoladas</span>
        </div>
      </div>

      {/* Grid of 7 Steps */}
      <div className="flex-1 mt-2.5 overflow-y-auto pr-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5">
          {cycleSteps.map((step) => {
            const IconComponent = step.icon;
            const isSelected = selectedCycleStep === step.num;

            return (
              <div
                key={step.num}
                onClick={() => setSelectedCycleStep(isSelected ? null : step.num)}
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-[#FF3200] shadow-md ring-2 ring-[#FF3200]/25 -translate-y-0.5'
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-2xs'
                }`}
              >
                <div>
                  {/* Top Step Header */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-6 h-6 rounded-full bg-[#16324F] text-white flex items-center justify-center text-xs font-black">
                        {step.num}
                      </span>
                      <span className="text-[10px] font-bold text-slate-400">Passo {step.num}/7</span>
                    </div>
                    <span className="text-[9.5px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full border border-slate-200">
                      {step.tag}
                    </span>
                  </div>

                  {/* Step Title */}
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <IconComponent className="w-4 h-4 text-[#FF3200] shrink-0" />
                    <h4 className="text-xs sm:text-[13px] font-black text-[#16324F] leading-snug">
                      {step.title}
                    </h4>
                  </div>

                  {/* Simple Explanation (Layman format) */}
                  <p className="text-[11.5px] text-slate-600 leading-relaxed mb-2.5">
                    {step.simpleExpl}
                  </p>

                  {/* Layman quote */}
                  <div className="bg-slate-50 p-2 rounded-xl border border-slate-150 text-[10.5px] text-slate-700 font-serif italic mb-2">
                    {step.laymanQuote}
                  </div>
                </div>

                {/* Card Footer: Evidência Sugerida */}
                <div className="mt-2 pt-2 border-t border-slate-100 text-[10px] text-slate-500 flex items-start gap-1">
                  <span className="font-bold text-[#16324F] shrink-0">📋 Evidência:</span>
                  <span className="line-clamp-1">{step.evidenceExample}</span>
                </div>
              </div>
            );
          })}

          {/* Integration Summary Card (8th card to complete the visual balance) */}
          <div className="p-3.5 rounded-2xl border-2 border-dashed border-[#FF3200]/40 bg-gradient-to-br from-orange-50/60 via-amber-50/40 to-white flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#FF3200] flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  Conexão Total
                </span>
                <span className="text-[9.5px] font-bold text-orange-800 bg-orange-100 px-2 py-0.5 rounded-full border border-orange-200">
                  Sem Interrupções
                </span>
              </div>

              <h4 className="text-xs sm:text-[13px] font-black text-[#16324F] leading-snug">
                Nenhum passo funciona isolado
              </h4>

              <p className="text-[11.5px] text-slate-600 mt-1.5 leading-relaxed">
                Se o <strong>dimensionamento (1)</strong> falha, a equipe sobrecarrega e a <strong>capacitação (4)</strong> perde efeito; se não houver <strong>apoio emocional (6)</strong>, a <strong>retenção (7)</strong> despenca.
              </p>

              <div className="mt-2.5 space-y-1 bg-white/80 p-2 rounded-xl border border-orange-200 text-[10.5px] text-[#16324F] font-semibold">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                  <span>Ciclo contínuo do início ao fim</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                  <span>Foco inegociável na segurança do paciente</span>
                </div>
              </div>
            </div>

            <div className="mt-2 pt-2 border-t border-orange-200 text-[10.5px] text-[#FF3200] font-bold text-center">
              Gestão de Pessoas Estratégica & Acolhedora
            </div>
          </div>
        </div>

        {/* Selected Step Expanded Details (Modal / Drawer view on click) */}
        {selectedCycleStep && (
          <div className="mt-3 p-4 bg-white rounded-2xl border-2 border-[#16324F] shadow-sm animate-scale-in">
            {(() => {
              const step = cycleSteps.find((s) => s.num === selectedCycleStep)!;
              const IconComp = step.icon;
              return (
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-[#16324F] text-white flex items-center justify-center font-black text-sm">
                        {step.num}
                      </div>
                      <div>
                        <h4 className="text-sm font-black text-[#16324F] flex items-center gap-2">
                          Passo {step.num}: {step.title}
                          <span className="text-xs font-normal text-slate-400">({step.tag})</span>
                        </h4>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedCycleStep(null)}
                      className="text-xs font-bold text-slate-500 hover:text-slate-800 px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 transition"
                    >
                      Fechar Detalhe
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                      <span className="text-[10px] font-black uppercase text-slate-500 block mb-1">
                        1. Em Linguagem Simples
                      </span>
                      <p className="text-xs font-semibold text-[#16324F]">
                        {step.simpleExpl}
                      </p>
                      <p className="text-xs text-slate-600 mt-1.5 italic font-serif">
                        {step.laymanQuote}
                      </p>
                    </div>

                    <div className="bg-blue-50/50 p-3 rounded-xl border border-blue-100">
                      <span className="text-[10px] font-black uppercase text-blue-900 block mb-1">
                        2. Exigência Oficial ONA 2026
                      </span>
                      <p className="text-xs text-blue-950 leading-relaxed font-medium">
                        {step.officialFocus}
                      </p>
                    </div>

                    <div className="bg-emerald-50/50 p-3 rounded-xl border border-emerald-100">
                      <span className="text-[10px] font-black uppercase text-emerald-900 block mb-1">
                        3. Evidência para Auditoria
                      </span>
                      <p className="text-xs text-emerald-950 leading-relaxed font-medium">
                        {step.evidenceExample}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}
      </div>

      {/* Slide Bottom Bar */}
      <div className="mt-2 pt-2 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-1.5">
        <span className="text-slate-600 font-semibold flex items-center gap-1">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
          O Ciclo Integrado substitui o antigo RH burocrático por uma gestão contínua, humana e segura.
        </span>
        <span className="text-[11px] text-slate-400">
          Fonte Oficial: Manual Brasileiro de Acreditação ONA 2026 — Subseção 1.4
        </span>
      </div>
    </div>
  );
};
