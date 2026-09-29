import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  FileMinus,
  CheckCircle2,
  Target,
  Users2,
  Brain,
  TrendingUp,
  GraduationCap,
  ShieldCheck,
  ArrowRight,
  ClipboardList,
  AlertTriangle,
  Award,
  X,
  MessageSquare,
  Copy,
  Check,
  ExternalLink,
  ChevronRight,
  Lightbulb
} from 'lucide-react';

interface RequisitoDetail {
  id: '1.1' | '1.2';
  numero: string;
  titulo: string;
  badge: string;
  requisitoTexto: string;
  evidenciasTexto: string;
  evidenciasBullets: string[];
}

const REQUISITOS_DETAILS: Record<'1.1' | '1.2', RequisitoDetail> = {
  '1.1': {
    id: '1.1',
    numero: '1.1',
    titulo: 'Diversidade e Vagas Afirmativas',
    badge: 'Novo Requisito • DE&I',
    requisitoTexto:
      '1.1 A instituição promove ações contínuas de diversidade, equidade e inclusão, assegurando respeito às diferenças, igualdade de oportunidades e valorização da pluralidade entre colaboradores, pacientes e comunidade.',
    evidenciasTexto:
      'Registro de treinamento e gestão de faltosos. Ações afirmativas implementadas. Infraestrutura adequada e preparada para um ambiente inclusivo. Equipe preparada. Verificação prática de conduta.',
    evidenciasBullets: [
      'Registro de treinamento e gestão de faltosos',
      'Ações afirmativas implementadas',
      'Infraestrutura adequada e preparada para um ambiente inclusivo',
      'Equipe preparada',
      'Verificação prática de conduta',
    ],
  },
  '1.2': {
    id: '1.2',
    numero: '1.2',
    titulo: 'Programa de Saúde Mental',
    badge: 'Novo Requisito • Bem-Estar',
    requisitoTexto:
      '1.2 A instituição possui ações estruturadas e contínuas voltadas à promoção da saúde mental e bemestar dos colaboradores, contemplando estratégias de prevenção, acolhimento e suporte emocional.',
    evidenciasTexto:
      'Programa institucional de saúde mental com ações regulares. Campanhas de conscientização sobre saúde emocional e autocuidado. Entrevista com o colaborador.',
    evidenciasBullets: [
      'Programa institucional de saúde mental com ações regulares',
      'Campanhas de conscientização sobre saúde emocional e autocuidado',
      'Entrevista com o colaborador (aferição na prática)',
    ],
  },
};

export const MudancasGestaoPessoasSlide: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'1.1' | '1.2' | 'both' | null>(null);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Fechar no ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveModal(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleCopy = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-between h-full py-2.5 text-left select-none relative">
      {/* Top Header & Executive Key Message */}
      <div className="border-b border-slate-200 pb-2.5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF3200]">
                03 • Atualização Normativa
              </span>
              <span className="text-[11px] font-black uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-300 flex items-center gap-1 shadow-2xs">
                <Award className="w-3.5 h-3.5 text-emerald-600" />
                Selo de Excelência Unimed
              </span>
              <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full border border-slate-200">
                Gestão de Pessoas
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-[#16324F] tracking-tight">
              SELO DE EXCELÊNCIA UNIMED — O QUE MUDOU NA GESTÃO DE PESSOAS?
            </h1>
          </div>

          {/* Destaque Visual / Mensagem-Chave do Slide */}
          <div className="bg-emerald-50 border border-emerald-200/80 rounded-xl px-3.5 py-2 flex items-center gap-2 self-start sm:self-center shrink-0">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs sm:text-sm font-black text-emerald-950">
              “Mais foco no desenvolvimento, na efetividade e na melhoria contínua.”
            </span>
          </div>
        </div>
      </div>

      {/* 3 Grandes Áreas com Centralidade na Área 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 my-auto py-2">
        {/* =======================================================
            ÁREA 1 — O QUE MUDOU? (Col 1-3)
            ======================================================= */}
        <div className="lg:col-span-3 bg-white rounded-2xl border border-slate-200 shadow-xs p-4 flex flex-col justify-between hover:border-slate-300 transition-colors">
          <div>
            {/* Header da Área 1 */}
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3 mb-3.5">
              <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
              <h2 className="text-sm font-black uppercase tracking-wider text-[#16324F]">
                O QUE MUDOU?
              </h2>
            </div>

            {/* Destaque: 2 Novos Requisitos com Botão Interativo */}
            <button
              onClick={() => setActiveModal('both')}
              className="w-full text-left bg-emerald-50/90 hover:bg-emerald-100/80 border border-emerald-300 rounded-xl p-3 mb-3.5 transition-all group cursor-pointer shadow-2xs"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm">🆕</span>
                  <span className="text-xs font-black uppercase tracking-wider text-emerald-900">
                    2 NOVOS REQUISITOS
                  </span>
                </div>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-200/60 px-1.5 py-0.5 rounded flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                  Ver foto <ChevronRight className="w-3 h-3" />
                </span>
              </div>
              <p className="text-[11px] text-emerald-800 font-medium mt-1 leading-snug">
                Clique para comparar os requisitos 1.1 e 1.2 com suas respectivas evidências esperadas.
              </p>
            </button>

            {/* Retirada do requisito 2.2 */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-5 h-5 rounded-md bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                  <FileMinus className="w-3.5 h-3.5" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider text-rose-700">
                  Requisito Descontinuado
                </span>
              </div>

              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                Retirada do <strong className="text-slate-900 font-bold">requisito 2.2</strong> da norma referente ao processo de atração, admissão, desligamento considerando as competências.
              </p>

              <div className="mt-2.5 pt-2 border-t border-slate-200/60 flex flex-wrap gap-1">
                <span className="text-[10px] px-2 py-0.5 bg-white text-slate-500 rounded border border-slate-200">
                  Atração
                </span>
                <span className="text-[10px] px-2 py-0.5 bg-white text-slate-500 rounded border border-slate-200">
                  Admissão
                </span>
                <span className="text-[10px] px-2 py-0.5 bg-white text-slate-500 rounded border border-slate-200">
                  Desligamento
                </span>
              </div>
            </div>
          </div>

          <div className="mt-3 pt-2 border-t border-slate-100 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            Revisão Estrutural da Norma
          </div>
        </div>

        {/* =======================================================
            ÁREA 2 — 5 REQUISITOS QUE ABORDAM GESTÃO DE PESSOAS (Col 4-8: ELEMENTO CENTRAL)
            ======================================================= */}
        <div className="lg:col-span-5 bg-white rounded-2xl border-2 border-blue-200/80 shadow-sm p-4 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />

          <div>
            {/* Header da Área 2 */}
            <div className="flex items-center justify-between border-b border-blue-100 pb-3 mb-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#16324F] text-white flex items-center justify-center font-bold text-xs">
                  <ClipboardList className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h2 className="text-sm font-black uppercase tracking-wider text-[#16324F]">
                    5 REQUISITOS QUE ABORDAM GESTÃO DE PESSOAS
                  </h2>
                  <span className="text-[10px] text-emerald-700 font-bold block flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping inline-block" />
                    Clique no 1.1 ou 1.2 para abrir o detalhamento do Selo
                  </span>
                </div>
              </div>
              <span className="text-[10px] font-mono font-black px-2 py-0.5 bg-blue-100 text-blue-900 rounded-md">
                5 Requisitos
              </span>
            </div>

            {/* 5 Cards Numerados em Sequência Vertical */}
            <div className="space-y-2">
              {/* Item 1: 1.1 (INTERATIVO COM CLIQUE) */}
              <button
                type="button"
                onClick={() => setActiveModal('1.1')}
                className="w-full text-left flex items-center gap-3 p-2.5 bg-emerald-50/80 hover:bg-emerald-100/90 border border-emerald-400/80 hover:border-emerald-600 rounded-xl transition-all group shadow-2xs hover:shadow-xs cursor-pointer active:scale-[0.99]"
              >
                <div className="w-12 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                  <span className="font-mono font-black text-sm text-white">
                    1.1
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <Users2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                    <span className="text-xs font-bold text-slate-900">
                      Diversidade, vagas afirmativas.
                    </span>
                  </div>
                  <span className="text-[10px] text-emerald-800 font-medium flex items-center gap-1 mt-0.5">
                    <Sparkles className="w-3 h-3 text-emerald-600" />
                    Clique para ver requisito & evidências esperadas
                  </span>
                </div>
                <span className="px-2 py-0.5 text-[10px] font-black uppercase tracking-wider bg-white text-emerald-800 rounded-md border border-emerald-300 group-hover:bg-emerald-600 group-hover:text-white transition-colors shrink-0">
                  Ver Foto →
                </span>
              </button>

              {/* Item 2: 1.2 (INTERATIVO COM CLIQUE) */}
              <button
                type="button"
                onClick={() => setActiveModal('1.2')}
                className="w-full text-left flex items-center gap-3 p-2.5 bg-emerald-50/80 hover:bg-emerald-100/90 border border-emerald-400/80 hover:border-emerald-600 rounded-xl transition-all group shadow-2xs hover:shadow-xs cursor-pointer active:scale-[0.99]"
              >
                <div className="w-12 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                  <span className="font-mono font-black text-sm text-white">
                    1.2
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <Brain className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                    <span className="text-xs font-bold text-slate-900">
                      Programa de Saúde Mental.
                    </span>
                  </div>
                  <span className="text-[10px] text-emerald-800 font-medium flex items-center gap-1 mt-0.5">
                    <Sparkles className="w-3 h-3 text-emerald-600" />
                    Clique para ver requisito & evidências esperadas
                  </span>
                </div>
                <span className="px-2 py-0.5 text-[10px] font-black uppercase tracking-wider bg-white text-emerald-800 rounded-md border border-emerald-300 group-hover:bg-emerald-600 group-hover:text-white transition-colors shrink-0">
                  Ver Foto →
                </span>
              </button>

              {/* Item 3: 2.7 */}
              <div className="flex items-center gap-3 p-2.5 bg-slate-50 hover:bg-blue-50/50 border border-slate-200 rounded-xl transition-colors group">
                <div className="w-12 h-10 rounded-lg bg-white border border-indigo-200 flex items-center justify-center shrink-0 shadow-2xs group-hover:border-indigo-400">
                  <span className="font-mono font-black text-sm text-indigo-800">
                    2.7
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                    <span className="text-xs font-bold text-slate-900">
                      Desenvolvimento do Colaborador a partir de falhas no processo.
                    </span>
                  </div>
                </div>
              </div>

              {/* Item 4: 2.8 */}
              <div className="flex items-center gap-3 p-2.5 bg-slate-50 hover:bg-blue-50/50 border border-slate-200 rounded-xl transition-colors group">
                <div className="w-12 h-10 rounded-lg bg-white border border-amber-200 flex items-center justify-center shrink-0 shadow-2xs group-hover:border-amber-400">
                  <span className="font-mono font-black text-sm text-amber-800">
                    2.8
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span className="text-xs font-bold text-slate-900">
                      Treinamentos periódicos, LNT, AVD.
                    </span>
                  </div>
                </div>
              </div>

              {/* Item 5: 2.9 */}
              <div className="flex items-center gap-3 p-2.5 bg-slate-50 hover:bg-blue-50/50 border border-slate-200 rounded-xl transition-colors group">
                <div className="w-12 h-10 rounded-lg bg-white border border-cyan-200 flex items-center justify-center shrink-0 shadow-2xs group-hover:border-cyan-400">
                  <span className="font-mono font-black text-sm text-cyan-800">
                    2.9
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                    <span className="text-xs font-bold text-slate-900">
                      Treinamento específico de higienização das mãos.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-2.5 pt-2 border-t border-blue-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
            <span>Sequência oficial de conformidade</span>
            <span className="font-bold text-[#16324F]">Níveis 1 e 2 da Norma</span>
          </div>
        </div>

        {/* =======================================================
            ÁREA 3 — O QUE FOI ENFATIZADO? (Col 9-12)
            ======================================================= */}
        <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 shadow-xs p-4 flex flex-col justify-between hover:border-slate-300 transition-colors">
          <div>
            {/* Header da Área 3 */}
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3 mb-3.5">
              <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center">
                <Target className="w-4 h-4" />
              </div>
              <h2 className="text-sm font-black uppercase tracking-wider text-[#16324F]">
                O QUE FOI ENFATIZADO?
              </h2>
            </div>

            {/* Lista dos 5 Pontos Enfatizados */}
            <div className="space-y-2.5 text-xs text-slate-700">
              {/* Ponto 1 */}
              <div className="flex items-start gap-2.5 bg-slate-50/70 p-2 rounded-lg border border-slate-100">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="font-bold text-slate-900">
                  AVD e LNT.
                </span>
              </div>

              {/* Ponto 2 */}
              <div className="flex items-start gap-2.5 bg-slate-50/70 p-2 rounded-lg border border-slate-100">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-900">Adesão e eficácia de treinamentos</strong> voltados para assistência.
                </span>
              </div>

              {/* Ponto 3 */}
              <div className="flex items-start gap-2.5 bg-amber-50/60 p-2 rounded-lg border border-amber-200/60">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-amber-950 font-bold">Gestão de faltosos</strong> para treinamentos obrigatórios <span className="text-amber-900 font-semibold block text-[11px] mt-0.5">(prioridade nos assistenciais).</span>
                </span>
              </div>

              {/* Ponto 4 */}
              <div className="flex items-start gap-2.5 bg-slate-50/70 p-2 rounded-lg border border-slate-100">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="font-bold text-slate-900">
                  Melhoria de processos.
                </span>
              </div>

              {/* Ponto 5 */}
              <div className="flex items-start gap-2.5 bg-blue-50/50 p-2 rounded-lg border border-blue-100">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-slate-800">
                  <strong className="text-[#16324F] font-bold">Abordagem do colaborador da ponta</strong> para verificação da efetividade das ações.
                </span>
              </div>
            </div>
          </div>

          <div className="mt-3 pt-2 border-t border-slate-100 text-[10px] text-slate-500 font-bold uppercase tracking-wider text-right">
            Verificação Prática & Evidência
          </div>
        </div>
      </div>

      {/* Destaque Central / Faixa Inferior de Síntese */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#16324F]"></span>
          <span className="text-xs font-black uppercase tracking-wider text-[#16324F]">
            DIRETRIZ ESTRATÉGICA
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs font-bold text-slate-700 flex-wrap justify-center">
          <span className="bg-white px-2.5 py-1 rounded-md border border-slate-200 text-slate-800 shadow-2xs">
            ENTENDEMOS O QUE MUDOU
          </span>
          <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200 text-[#16324F] shadow-2xs">
            SABEMOS ONDE ESTÁ O FOCO
          </span>
          <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 text-emerald-900 shadow-2xs">
            SABEMOS O QUE PRECISA SER FORTALECIDO
          </span>
        </div>
      </div>

      {/* =========================================================================
          MODAL INTERATIVO, LÚDICO E PRÁTICO:
          Exatamente como a foto enviada pelo usuário
          ========================================================================= */}
      {activeModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 overflow-y-auto animate-in fade-in duration-200"
          onClick={() => setActiveModal(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full max-w-5xl rounded-3xl shadow-2xl border-2 border-emerald-400/80 overflow-hidden flex flex-col max-h-[92vh]"
          >
            {/* Top Bar do Modal (Fiel à Foto) */}
            <div className="bg-[#F8FAFC] border-b border-slate-200 px-5 py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              {/* Selo & Tags Fiel à Foto */}
              <div className="flex items-center gap-3 flex-wrap">
                {/* Badge Excelência Assistencial Unimed-BH */}
                <div className="bg-[#007052] text-white px-3 py-1.5 rounded-lg flex flex-col items-center justify-center shadow-xs border border-emerald-700/80">
                  <span className="text-[10px] font-black uppercase tracking-wider leading-none">
                    EXCELÊNCIA
                  </span>
                  <span className="text-[8px] font-bold tracking-tight opacity-90">
                    ASSISTENCIAL
                  </span>
                  <span className="text-[7px] font-semibold opacity-75">
                    UNIMED-BH
                  </span>
                </div>

                {/* Título NOVOS REQUISITOS com estrela NEW */}
                <div className="flex items-center gap-2">
                  <h3 className="text-lg sm:text-xl font-black text-[#16324F] tracking-tight">
                    NOVOS REQUISITOS
                  </h3>
                  <span className="px-2 py-0.5 rounded-full bg-amber-400 text-amber-950 text-xs font-black uppercase tracking-wider flex items-center gap-1 shadow-2xs border border-amber-500/50">
                    <span>★</span> NEW
                  </span>
                </div>
              </div>

              {/* Controles de alternância e fechar */}
              <div className="flex items-center gap-2 self-end sm:self-auto">
                <div className="bg-slate-200/80 p-0.5 rounded-xl flex items-center gap-1 text-xs font-bold">
                  <button
                    onClick={() => setActiveModal('1.1')}
                    className={`px-3 py-1 rounded-lg transition-all ${
                      activeModal === '1.1'
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                    }`}
                  >
                    1.1
                  </button>
                  <button
                    onClick={() => setActiveModal('1.2')}
                    className={`px-3 py-1 rounded-lg transition-all ${
                      activeModal === '1.2'
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                    }`}
                  >
                    1.2
                  </button>
                  <button
                    onClick={() => setActiveModal('both')}
                    className={`px-3 py-1 rounded-lg transition-all ${
                      activeModal === 'both'
                        ? 'bg-[#16324F] text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                    }`}
                  >
                    Ambos (Foto Completa)
                  </button>
                </div>

                <button
                  onClick={() => setActiveModal(null)}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors"
                  title="Fechar (Esc)"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Conteúdo Dinâmico / Layout Side-by-Side Exatamente como na Foto */}
            <div className="p-5 sm:p-7 overflow-y-auto space-y-6 flex-1 bg-white">
              {/* Banner Superior da Coluna da Direita (O QUE O SELO ESPERA COMO EVIDÊNCIA ?) */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  REQUISITO DA NORMA
                </span>

                <div className="flex items-center gap-2 bg-blue-50/80 border border-blue-200 px-3.5 py-1.5 rounded-xl shadow-2xs">
                  <div className="w-6 h-6 rounded-md bg-blue-600 text-white flex items-center justify-center">
                    <Lightbulb className="w-3.5 h-3.5" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-black text-[#16324F] uppercase tracking-wide">
                    O QUE O SELO ESPERA COMO EVIDÊNCIA ?
                  </h4>
                </div>
              </div>

              {/* BLOCO 1.1: Diversidade e Vagas Afirmativas */}
              {(activeModal === '1.1' || activeModal === 'both') && (
                <div className="bg-slate-50/60 rounded-2xl border border-slate-200 p-4 sm:p-5 hover:border-emerald-300 transition-all shadow-2xs">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                    {/* LADO ESQUERDO: REQUISITO */}
                    <div className="md:col-span-5 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded-md bg-emerald-600 text-white font-mono font-black text-xs">
                          1.1
                        </span>
                        <h4 className="text-base font-black text-[#16324F]">
                          Diversidade e Vagas Afirmativas
                        </h4>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal bg-white p-3.5 rounded-xl border border-slate-200/90 shadow-2xs">
                        1.1 A instituição promove ações contínuas de diversidade, equidade e inclusão, assegurando respeito às diferenças, igualdade de oportunidades e valorização da pluralidade entre colaboradores, pacientes e comunidade.
                      </p>

                      <div className="flex items-center justify-between pt-1">
                        <span className="text-[11px] font-semibold text-emerald-800">
                          Foco: Equidade & Inclusão
                        </span>
                        <button
                          onClick={() => handleCopy('req1.1', REQUISITOS_DETAILS['1.1'].requisitoTexto)}
                          className="text-[11px] font-bold text-slate-500 hover:text-emerald-700 flex items-center gap-1"
                        >
                          {copiedKey === 'req1.1' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                          Copiar Requisito
                        </button>
                      </div>
                    </div>

                    {/* CONECTOR CENTRAL: SETA VERMELHA COMO NA FOTO */}
                    <div className="md:col-span-1 flex flex-col items-center justify-center py-1">
                      <div className="w-9 h-9 rounded-full bg-rose-50 border border-rose-200 text-rose-500 flex items-center justify-center shadow-xs">
                        <ArrowRight className="w-5 h-5 text-rose-600 animate-pulse" />
                      </div>
                    </div>

                    {/* LADO DIREITO: O QUE O SELO ESPERA COMO EVIDÊNCIA */}
                    <div className="md:col-span-6 space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black uppercase tracking-wider text-blue-900 flex items-center gap-1.5">
                          <MessageSquare className="w-3.5 h-3.5 text-blue-600" />
                          Evidências Esperadas pelo Selo
                        </span>
                        <button
                          onClick={() => handleCopy('evid1.1', REQUISITOS_DETAILS['1.1'].evidenciasTexto)}
                          className="text-[11px] font-bold text-slate-500 hover:text-blue-700 flex items-center gap-1"
                        >
                          {copiedKey === 'evid1.1' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                          Copiar Evidência
                        </button>
                      </div>

                      {/* Texto Exato da Foto */}
                      <div className="bg-white p-3.5 rounded-xl border border-blue-200 text-xs sm:text-sm text-slate-800 leading-relaxed font-medium shadow-2xs">
                        {REQUISITOS_DETAILS['1.1'].evidenciasTexto}
                      </div>

                      {/* Decomposição Visual e Prática em Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {REQUISITOS_DETAILS['1.1'].evidenciasBullets.map((item, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] font-semibold bg-emerald-50 text-emerald-900 border border-emerald-200/80 px-2 py-0.5 rounded-md flex items-center gap-1"
                          >
                            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* BLOCO 1.2: Programa de Saúde Mental */}
              {(activeModal === '1.2' || activeModal === 'both') && (
                <div className="bg-slate-50/60 rounded-2xl border border-slate-200 p-4 sm:p-5 hover:border-emerald-300 transition-all shadow-2xs">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                    {/* LADO ESQUERDO: REQUISITO */}
                    <div className="md:col-span-5 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded-md bg-emerald-600 text-white font-mono font-black text-xs">
                          1.2
                        </span>
                        <h4 className="text-base font-black text-[#16324F]">
                          Programa de Saúde Mental
                        </h4>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal bg-white p-3.5 rounded-xl border border-slate-200/90 shadow-2xs">
                        1.2 A instituição possui ações estruturadas e contínuas voltadas à promoção da saúde mental e bemestar dos colaboradores, contemplando estratégias de prevenção, acolhimento e suporte emocional.
                      </p>

                      <div className="flex items-center justify-between pt-1">
                        <span className="text-[11px] font-semibold text-emerald-800">
                          Foco: Prevenção & Bem-Estar
                        </span>
                        <button
                          onClick={() => handleCopy('req1.2', REQUISITOS_DETAILS['1.2'].requisitoTexto)}
                          className="text-[11px] font-bold text-slate-500 hover:text-emerald-700 flex items-center gap-1"
                        >
                          {copiedKey === 'req1.2' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                          Copiar Requisito
                        </button>
                      </div>
                    </div>

                    {/* CONECTOR CENTRAL: SETA VERMELHA COMO NA FOTO */}
                    <div className="md:col-span-1 flex flex-col items-center justify-center py-1">
                      <div className="w-9 h-9 rounded-full bg-rose-50 border border-rose-200 text-rose-500 flex items-center justify-center shadow-xs">
                        <ArrowRight className="w-5 h-5 text-rose-600 animate-pulse" />
                      </div>
                    </div>

                    {/* LADO DIREITO: O QUE O SELO ESPERA COMO EVIDÊNCIA */}
                    <div className="md:col-span-6 space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black uppercase tracking-wider text-blue-900 flex items-center gap-1.5">
                          <MessageSquare className="w-3.5 h-3.5 text-blue-600" />
                          Evidências Esperadas pelo Selo
                        </span>
                        <button
                          onClick={() => handleCopy('evid1.2', REQUISITOS_DETAILS['1.2'].evidenciasTexto)}
                          className="text-[11px] font-bold text-slate-500 hover:text-blue-700 flex items-center gap-1"
                        >
                          {copiedKey === 'evid1.2' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                          Copiar Evidência
                        </button>
                      </div>

                      {/* Texto Exato da Foto */}
                      <div className="bg-white p-3.5 rounded-xl border border-blue-200 text-xs sm:text-sm text-slate-800 leading-relaxed font-medium shadow-2xs">
                        {REQUISITOS_DETAILS['1.2'].evidenciasTexto}
                      </div>

                      {/* Decomposição Visual e Prática em Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {REQUISITOS_DETAILS['1.2'].evidenciasBullets.map((item, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] font-semibold bg-emerald-50 text-emerald-900 border border-emerald-200/80 px-2 py-0.5 rounded-md flex items-center gap-1"
                          >
                            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Rodapé do Modal com Dica Prática */}
            <div className="bg-[#F8FAFC] border-t border-slate-200 px-5 py-3 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-600">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <strong>Dica de Auditoria:</strong> O avaliador fará entrevista direta na ponta para checar a veracidade prática dessas ações.
              </span>
              <button
                onClick={() => setActiveModal(null)}
                className="px-4 py-1.5 rounded-lg bg-[#16324F] hover:bg-[#1f476f] text-white font-bold text-xs transition-colors self-end sm:self-auto"
              >
                Concluir Visualização
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
