import React, { useState } from 'react';
import {
  Shield,
  ShieldCheck,
  FileText,
  CheckCircle2,
  X,
  Copy,
  Check,
  ChevronRight,
  ChevronLeft,
  BookOpen,
  ArrowRight,
  ArrowUpRight,
  Scale,
  BarChart2,
  TrendingUp,
  HeartPulse,
  Award,
  UserCheck,
  MessageSquare,
  Layers,
  Sparkles
} from 'lucide-react';

export interface OnaLevel2RequirementItem {
  id: number;
  nivelOna: number;
  numRequisito: number;
  tituloCurto: string;
  tag: string;
  status: 'NOVO' | 'MANTIDO' | 'MIGROU_N3';
  requisito: string;
  orientacaoOna: string;
  sugestaoEvidenciaOna: string;
  requisitoCore: 'SIM' | 'NÃO';
  destaque?: string;
}

export const ONA_LEVEL_2_DATA: OnaLevel2RequirementItem[] = [
  {
    id: 101,
    nivelOna: 2,
    numRequisito: 1,
    tituloCurto: 'Indicador Gestão de Pessoas',
    tag: 'Gestão de Indicadores & Processos',
    status: 'MANTIDO',
    requisito:
      'Definir, monitorar e analisar sistematicamente indicadores de desempenho dos processos de Gestão de Pessoas.',
    orientacaoOna:
      'Acompanhar a evolução dos indicadores chave de GP (turnover, absenteísmo, retenção, horas de treinamento, perfil epidemiológico), implementando planos de ação para os desvios identificados.',
    sugestaoEvidenciaOna:
      'Painel de indicadores de GP com metas, série histórica, análises críticas periódicas e planos de ação (PDCA/5W2H) para metas não atingidas.',
    requisitoCore: 'NÃO',
  },
  {
    id: 102,
    nivelOna: 2,
    numRequisito: 2,
    tituloCurto: 'AVD — Avaliação de Desempenho',
    tag: 'Desempenho, Competências & Feedback',
    status: 'MANTIDO',
    requisito:
      'Realizar periodicamente a avaliação de desempenho dos colaboradores com base em competências e metas pactuadas.',
    orientacaoOna:
      'Garantir processo estruturado de feedback, autoavaliação e avaliação pelo gestor, subsidiando planos de desenvolvimento individual (PDI) e movimentações de carreira.',
    sugestaoEvidenciaOna:
      'Cronograma e registros de aplicação da AVD, relatórios de consolidação por setor, planos de desenvolvimento decorrentes da avaliação e evidências de feedback formal.',
    requisitoCore: 'SIM',
  },
  {
    id: 103,
    nivelOna: 2,
    numRequisito: 3,
    tituloCurto: 'PQV — Programa de Qualidade de Vida',
    tag: 'Bem-Estar, Saúde Integral & Acompanhamento',
    status: 'MANTIDO',
    requisito:
      'Monitorar e avaliar os resultados das iniciativas do Programa de Qualidade de Vida e saúde integral dos profissionais.',
    orientacaoOna:
      'Acompanhar a adesão e a repercussão das ações de bem-estar, suporte biopsicossocial, ergonomia e saúde preventiva na força de trabalho.',
    sugestaoEvidenciaOna:
      'Relatórios periódicos de adesão e satisfação com os programas de qualidade de vida, análise do impacto no clima e saúde física/mental dos colaboradores.',
    requisitoCore: 'SIM',
  },
  {
    id: 104,
    nivelOna: 2,
    numRequisito: 4,
    tituloCurto: 'Monitora PGR / PCMSO',
    tag: 'Saúde Ocupacional, Conformidade & Segurança',
    status: 'MANTIDO',
    requisito:
      'Monitorar a execução e o cumprimento dos planos decorrentes do PGR, PCMSO e programas de segurança ocupacional.',
    orientacaoOna:
      'Acompanhar a realização dos exames periódicos, cumprimento de prazos do cronograma anual do PCMSO/PGR e mitigação contínua dos riscos mapeados (inclusive psicossociais).',
    sugestaoEvidenciaOna:
      'Relatórios gerenciais do PCMSO e PGR com taxa de realização de exames periódicos, monitoramento de acidentes de trabalho com e sem afastamento (CAT) e atas da CIPA.',
    requisitoCore: 'NÃO',
  },
  {
    id: 105,
    nivelOna: 2,
    numRequisito: 5,
    tituloCurto: 'Avalia Integração',
    tag: 'Eficácia de Onboarding & Adaptação',
    status: 'MANTIDO',
    requisito:
      'Avaliar a eficácia do programa de integração institucional e funcional de novos colaboradores e terceiros.',
    orientacaoOna:
      'Mensurar o entendimento da cultura, normas de segurança do paciente e rotinas operacionais pelos novos integrantes durante o período de adaptação/experiência.',
    sugestaoEvidenciaOna:
      'Avaliações de reação e eficácia da integração, entrevistas de acompanhamento do período de experiência e análises de correlação com turnover precoce.',
    requisitoCore: 'NÃO',
  },
  {
    id: 106,
    nivelOna: 2,
    numRequisito: 6,
    tituloCurto: 'Investigação e Resolução de Problemas no Trabalho',
    tag: 'Cultura Justa, Canal Seguro & Sem Retaliação',
    status: 'NOVO',
    requisito:
      'Gerenciar processos formais, seguros e confidenciais para a investigação e resolução de problemas no local de trabalho levantados pelos profissionais.',
    orientacaoOna:
      'Esses processos devem assegurar que todas as manifestações, queixas ou denúncias sejam tratadas de forma imparcial, tempestiva e protegida de retaliação, promovendo um ambiente de confiança, transparência e respeito mútuo. Os problemas no local de trabalho podem abranger uma ampla variedade de situações, como práticas de gestão inadequadas, percepções de injustiça na aplicação de diretrizes internas, falhas de comunicação, preocupações com segurança, confidencialidade, assédio, discriminação ou corrupção organizacional. É essencial que a organização disponha de mecanismos claros de escuta, registro e encaminhamento dessas ocorrências, garantindo o anonimato e a proteção contrarretaliações aos profissionais que as reportam, conhecidos como denunciantes. Os processos devem ser conduzidos de maneira justa, ética e alinhada à legislação nacional ou regional vigente sobre proteção a denunciantes. Alinhar esta demanda com o canal institucional de denúncias e procedimentos documentados para análise, deliberação e retorno aos envolvidos, assegurando que as situações identificadas resultem em ações corretivas, de aprendizagem e de melhoria organizacional. A adoção de uma cultura justa fortalece a confiança entre gestores e equipes, incentiva o relato precoce de problemas e contribui para a prevenção de riscos ocupacionais, éticos e de segurança do paciente.',
    sugestaoEvidenciaOna:
      'Procedimento formal de gestão de denúncias e queixas internas. Registros de recebimento, análise e resolução de manifestações. Evidências de proteção contrarretaliação aos denunciantes. Relatórios periódicos sobre queixas e medidas corretivas adotadas. Registros de treinamentos sobre ética, integridade e cultura justa. Comunicação institucional sobre os canais disponíveis e orientações de uso.',
    requisitoCore: 'NÃO',
    destaque: 'Novo Requisito ONA 2026 inserido no Nível 2',
  },
  {
    id: 107,
    nivelOna: 2,
    numRequisito: 7,
    tituloCurto: 'Pesquisa de Clima Organizacional',
    tag: 'Clima, Engajamento & Planos de Melhoria',
    status: 'MANTIDO',
    requisito:
      'Realizar periodicamente a pesquisa de clima organizacional, analisando os resultados e implementando planos de ação.',
    orientacaoOna:
      'Aferir a satisfação, engajamento e percepção das equipes sobre liderança, condições de trabalho e cultura institucional, desdobrando ações de melhoria contínua.',
    sugestaoEvidenciaOna:
      'Relatório de resultados da pesquisa de clima, taxa de participação, planos de ação setoriais e institucionais elaborados e acompanhamento da sua eficácia.',
    requisitoCore: 'NÃO',
  },
];

export const ONA_MIGRATED_TO_N3 = [
  {
    idReqAntigo: 6,
    titulo: 'Avaliação de Eficácia de Treinamento',
    tema: 'Capacitação & Aprendizado',
    destino: 'Nível 3 • Pilar 1 (Efetividade da Capacitação)',
    motivo: 'Exige comprovar impacto real nos postos de trabalho e desfechos assistenciais.',
  },
  {
    idReqAntigo: 7,
    titulo: 'Monitora Programa de Liderança',
    tema: 'Liderança Estratégica',
    destino: 'Nível 3 • Pilar 2 (Efetividade de Lideranças)',
    motivo: 'Mede a repercussão direta da liderança no clima, segurança e metas do setor.',
  },
  {
    idReqAntigo: 8,
    titulo: 'Compartilhamento de Conhecimento',
    tema: 'Gestão do Conhecimento',
    destino: 'Nível 3 • Pilar 3 (Retenção do Know-how Crítico)',
    motivo: 'Garante a continuidade dos saberes estratégicos e sustentabilidade organizacional.',
  },
];

export const OnaLevel2Interactive: React.FC = () => {
  const [selectedReq, setSelectedReq] = useState<OnaLevel2RequirementItem | null>(null);
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const handleCopyReq = (item: OnaLevel2RequirementItem) => {
    const text = `NÍVEL ONA: ${item.nivelOna} | REQUISITO Nº ${item.numRequisito} (${item.requisitoCore === 'SIM' ? 'CORE' : 'NÃO CORE'})\n\nREQUISITO:\n${item.requisito}\n\nORIENTAÇÃO DA ONA:\n${item.orientacaoOna}\n\nSUGESTÃO DE EVIDÊNCIA DA ONA:\n${item.sugestaoEvidenciaOna}`;
    navigator.clipboard.writeText(text);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleNextReq = () => {
    if (!selectedReq) return;
    const currentIndex = ONA_LEVEL_2_DATA.findIndex((r) => r.id === selectedReq.id);
    if (currentIndex < ONA_LEVEL_2_DATA.length - 1) {
      setSelectedReq(ONA_LEVEL_2_DATA[currentIndex + 1]);
    } else {
      setSelectedReq(ONA_LEVEL_2_DATA[0]);
    }
  };

  const handlePrevReq = () => {
    if (!selectedReq) return;
    const currentIndex = ONA_LEVEL_2_DATA.findIndex((r) => r.id === selectedReq.id);
    if (currentIndex > 0) {
      setSelectedReq(ONA_LEVEL_2_DATA[currentIndex - 1]);
    } else {
      setSelectedReq(ONA_LEVEL_2_DATA[ONA_LEVEL_2_DATA.length - 1]);
    }
  };

  const openReqByNum = (num: number) => {
    const target = ONA_LEVEL_2_DATA.find((r) => r.numRequisito === num);
    if (target) setSelectedReq(target);
  };

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col justify-between h-full py-2 sm:py-3 text-left">
      {/* Top Header & Indicator */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E2E8F0] pb-2.5">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#FF3200]">
            05 • Gestão Integrada & Processos
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#FF3200] mt-0.5 tracking-tight">
            Requisitos ONA — Nível 2
          </h2>
          <p className="text-xs sm:text-sm text-[#334155]">
            Comparativo 2022 → 2026: <strong>9 → 7 requisitos</strong> <span className="text-slate-400 font-normal">(6 mantidos + 1 novo requisito + 3 promovidos ao Nível 3)</span>
          </p>
        </div>

        {/* Indicador Numérico de Destaque no Topo */}
        <div className="flex items-center gap-2.5 bg-[#F8FAFC] px-3.5 py-1.5 rounded-xl border border-[#E2E8F0] self-start sm:self-auto shadow-2xs">
          <div className="flex items-center gap-1.5">
            <span className="font-mono text-base font-bold text-[#94A3B8]">9</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#FF3200]" />
            <span className="font-mono text-base font-black text-[#FF3200]">7</span>
            <span className="text-xs font-bold text-[#16324F]">requisitos</span>
          </div>
          <div className="h-4 w-px bg-[#CBD5E1]" />
          <span className="text-[11px] font-bold text-amber-900 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
            -2 requisitos consolidados
          </span>
        </div>
      </div>

      {/* Grid Principal: Novo Requisito (Esquerda) e Requisitos Promovidos ao N3 (Direita) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 my-2 items-stretch">
        {/* Bloco 1: O QUE ENTROU / NOVO REQUISITO 6 (6 Colunas) */}
        <div
          onClick={() => openReqByNum(6)}
          className="lg:col-span-6 bg-emerald-50/80 rounded-2xl p-4 border border-emerald-200 flex flex-col justify-between space-y-3 shadow-2xs cursor-pointer hover:border-emerald-500 hover:shadow-md hover:-translate-y-0.5 transition-all group"
          title="Clique para abrir todos os detalhes oficiais do Requisito Nº 6"
        >
          <div>
            <div className="flex items-center justify-between gap-1 pb-1.5 border-b border-emerald-200/90">
              <span className="text-[10px] font-black uppercase tracking-wider text-emerald-950 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                O que entrou no Nível 2
              </span>
              <span className="text-[9px] font-bold text-emerald-800 bg-white px-2 py-0.5 rounded-full border border-emerald-200 shadow-2xs">
                Novo • Req. 6
              </span>
            </div>

            <div className="mt-2.5 bg-white p-3 rounded-xl border border-emerald-100 space-y-2 group-hover:border-emerald-300 transition">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <Scale className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-black text-[#16324F] leading-tight">
                    Investigação e Resolução de Problemas no Trabalho
                  </h4>
                  <span className="text-[9.5px] font-bold text-emerald-700">Cultura Justa & Sem Retaliação</span>
                </div>
              </div>

              <p className="text-[11px] text-[#334155] leading-relaxed">
                Processos formais, seguros e confidenciais para acolher, apurar e resolver queixas, assédio, desvios e conflitos com total proteção aos denunciantes.
              </p>

              <div className="bg-emerald-50/70 px-2.5 py-1.5 rounded-lg border border-emerald-200 text-[10px] text-emerald-900 font-medium flex items-center justify-between">
                <span>• Anonimato e proteção contrarretaliação</span>
                <span>• Prazos e deliberação imparcial</span>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-emerald-200/80 flex items-center justify-between text-[10px] font-bold text-emerald-700">
            <span>Cultura Justa & Compliance</span>
            <span className="inline-flex items-center gap-0.5 text-emerald-900 group-hover:text-[#FF3200] group-hover:translate-x-0.5 transition">
              Abrir detalhes completos <ChevronRight className="w-3 h-3" />
            </span>
          </div>
        </div>

        {/* Bloco 2: REQUISITOS MIGRADOS PARA O NÍVEL 3 (6 Colunas) */}
        <div className="lg:col-span-6 bg-indigo-50/75 rounded-2xl p-4 border border-indigo-200 flex flex-col justify-between space-y-2.5 shadow-2xs">
          <div>
            <div className="flex items-center justify-between gap-1 pb-1.5 border-b border-indigo-200/90">
              <span className="text-[10px] font-black uppercase tracking-wider text-indigo-950 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-indigo-600" />
                Migraram para o Nível 3 (Excelência)
              </span>
              <span className="text-[9px] font-bold text-indigo-900 bg-white px-2 py-0.5 rounded-full border border-indigo-200 shadow-2xs">
                3 Requisitos Promovidos
              </span>
            </div>

            <div className="mt-2 space-y-1.5">
              {ONA_MIGRATED_TO_N3.map((item) => (
                <div
                  key={item.idReqAntigo}
                  className="bg-white px-2.5 py-1.5 rounded-xl border border-indigo-100 flex items-center justify-between gap-2 shadow-2xs"
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[11px] font-bold text-[#16324F] truncate">{item.titulo}</span>
                      <span className="text-[9px] font-mono text-slate-400 shrink-0">(antigo Req. {item.idReqAntigo})</span>
                    </div>
                    <div className="text-[9.5px] text-indigo-800 font-semibold leading-tight">
                      → {item.destino}
                    </div>
                  </div>
                  <div className="p-1 rounded-md bg-indigo-50 text-indigo-700 shrink-0">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-indigo-200/80 flex items-center justify-between text-[10px] font-bold text-indigo-800">
            <span>Reposicionados em maior maturidade (N3)</span>
            <span className="text-[9px] text-indigo-950 font-medium">Foco em desfecho & impacto</span>
          </div>
        </div>
      </div>

      {/* Bloco 3: REQUISITOS ESTÁVEIS / MANTIDOS NO NÍVEL 2 (Estilo Discreto idêntico ao Slide 4) */}
      <div className="bg-[#F8FAFC] p-3 rounded-2xl border border-[#E2E8F0] shadow-2xs">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-black uppercase tracking-wider text-[#334155] flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-slate-400" />
            Requisitos Estáveis
          </span>
          <span className="text-[10px] font-bold text-[#64748B] bg-white px-2 py-0.5 rounded-full border border-[#CBD5E1]">
            Base de Gestão Preservada (6 requisitos mantidos)
          </span>
        </div>

        {/* Tags / Pills interativas discretas */}
        <div className="flex flex-wrap gap-1.5">
          {/* Req 1 */}
          <button
            onClick={() => openReqByNum(1)}
            className="text-[10px] font-medium bg-white text-[#334155] px-2.5 py-1 rounded-md border border-[#E2E8F0] hover:border-blue-400 hover:bg-blue-50/50 hover:shadow-2xs transition flex items-center gap-1 cursor-pointer"
            title="Clique para ver detalhes do Requisito 1 (Indicadores GP)"
          >
            <span>1 • Indicador Gestão de Pessoas</span>
          </button>

          {/* Req 2 - CORE */}
          <button
            onClick={() => openReqByNum(2)}
            className="text-[10px] font-semibold bg-white text-[#16324F] px-2.5 py-1 rounded-md border border-[#E2E8F0] hover:border-amber-400 hover:bg-amber-50/50 hover:shadow-2xs transition flex items-center gap-1.5 cursor-pointer group"
            title="Clique para ver detalhes do Requisito 2 (AVD — CORE)"
          >
            <span>2 • AVD (Avaliação de Desempenho)</span>
            <span className="text-[8px] font-black uppercase bg-amber-100 text-amber-900 px-1 py-0.2 rounded border border-amber-300">
              CORE
            </span>
          </button>

          {/* Req 3 - CORE */}
          <button
            onClick={() => openReqByNum(3)}
            className="text-[10px] font-semibold bg-white text-[#16324F] px-2.5 py-1 rounded-md border border-[#E2E8F0] hover:border-amber-400 hover:bg-amber-50/50 hover:shadow-2xs transition flex items-center gap-1.5 cursor-pointer group"
            title="Clique para ver detalhes do Requisito 3 (PQV — CORE)"
          >
            <span>3 • PQV (Qualidade de Vida)</span>
            <span className="text-[8px] font-black uppercase bg-amber-100 text-amber-900 px-1 py-0.2 rounded border border-amber-300">
              CORE
            </span>
          </button>

          {/* Req 4 */}
          <button
            onClick={() => openReqByNum(4)}
            className="text-[10px] font-medium bg-white text-[#334155] px-2.5 py-1 rounded-md border border-[#E2E8F0] hover:border-blue-400 hover:bg-blue-50/50 hover:shadow-2xs transition flex items-center gap-1 cursor-pointer"
            title="Clique para ver detalhes do Requisito 4 (Monitora PGR/PCMSO)"
          >
            <span>4 • Monitora PGR / PCMSO</span>
          </button>

          {/* Req 5 */}
          <button
            onClick={() => openReqByNum(5)}
            className="text-[10px] font-medium bg-white text-[#334155] px-2.5 py-1 rounded-md border border-[#E2E8F0] hover:border-blue-400 hover:bg-blue-50/50 hover:shadow-2xs transition flex items-center gap-1 cursor-pointer"
            title="Clique para ver detalhes do Requisito 5 (Avalia Integração)"
          >
            <span>5 • Avalia Integração</span>
          </button>

          {/* Req 7 */}
          <button
            onClick={() => openReqByNum(7)}
            className="text-[10px] font-medium bg-white text-[#334155] px-2.5 py-1 rounded-md border border-[#E2E8F0] hover:border-blue-400 hover:bg-blue-50/50 hover:shadow-2xs transition flex items-center gap-1 cursor-pointer"
            title="Clique para ver detalhes do Requisito 7 (Pesquisa de Clima)"
          >
            <span>7 • Pesquisa de Clima Organizacional</span>
          </button>
        </div>
      </div>

      {/* Modal Interativo com Requisito, Orientação ONA e Sugestão de Evidência */}
      {selectedReq && (
        <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 z-50 animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-[#E2E8F0] flex items-center justify-between bg-[#F8FAFC]">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-1 rounded-md bg-purple-100 text-purple-900 font-mono font-black text-xs border border-purple-200">
                  NÍVEL {selectedReq.nivelOna} ONA
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-800 text-white font-mono font-bold text-xs">
                  REQUISITO Nº {selectedReq.numRequisito}
                </span>
                {selectedReq.status === 'NOVO' && (
                  <span className="px-2.5 py-1 rounded-md bg-emerald-500 text-white font-mono font-black text-xs">
                    NOVO NA ONA 2026
                  </span>
                )}
                <span
                  className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider flex items-center gap-1.5 ${
                    selectedReq.requisitoCore === 'SIM'
                      ? 'bg-amber-100 text-amber-900 border border-amber-300'
                      : 'bg-slate-100 text-slate-700 border border-slate-300'
                  }`}
                >
                  <Shield className="w-3.5 h-3.5 text-amber-600" />
                  REQUISITO CORE: {selectedReq.requisitoCore}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleCopyReq(selectedReq)}
                  className="p-1.5 rounded-lg border border-[#CBD5E1] text-[#475569] hover:bg-slate-100 transition cursor-pointer"
                  title="Copiar texto do requisito e evidências"
                >
                  {copiedId === selectedReq.id ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
                <button
                  onClick={() => setSelectedReq(null)}
                  className="p-1.5 rounded-lg bg-slate-200 text-slate-700 hover:bg-slate-300 transition cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Scrollable Content */}
            <div className="p-5 overflow-y-auto space-y-4 text-left">
              {/* 1. REQUISITO */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5">
                <div className="text-[11px] font-black uppercase tracking-wider text-[#16324F] flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-[#FF3200]" />
                  REQUISITO COMPLETO
                </div>
                <p className="text-sm sm:text-base font-bold text-[#16324F] leading-relaxed">
                  {selectedReq.requisito}
                </p>
              </div>

              {/* 2. ORIENTAÇÃO DA ONA */}
              <div className="bg-white p-4 rounded-xl border border-teal-200 shadow-2xs space-y-1.5">
                <div className="text-[11px] font-black uppercase tracking-wider text-teal-800 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-teal-600" />
                  ORIENTAÇÃO DA ONA
                </div>
                <p className="text-xs sm:text-sm text-[#334155] leading-relaxed whitespace-pre-line">
                  {selectedReq.orientacaoOna}
                </p>
              </div>

              {/* 3. SUGESTÃO DE EVIDÊNCIA DA ONA */}
              <div className="bg-amber-50/70 p-4 rounded-xl border border-amber-200 shadow-2xs space-y-1.5">
                <div className="text-[11px] font-black uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-600" />
                  SUGESTÃO DE EVIDÊNCIA DA ONA
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {selectedReq.sugestaoEvidenciaOna}
                </p>
              </div>
            </div>

            {/* Modal Footer with Carousel Navigation */}
            <div className="p-4 border-t border-[#E2E8F0] bg-[#F8FAFC] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrevReq}
                  className="px-3 py-1.5 rounded-lg border border-[#CBD5E1] text-xs font-semibold text-[#334155] hover:bg-white transition flex items-center gap-1 cursor-pointer"
                >
                  <ChevronLeft className="w-3.5 h-3.5" /> Anterior
                </button>
                <button
                  onClick={handleNextReq}
                  className="px-3 py-1.5 rounded-lg border border-[#CBD5E1] text-xs font-semibold text-[#334155] hover:bg-white transition flex items-center gap-1 cursor-pointer"
                >
                  Próximo <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <button
                onClick={() => setSelectedReq(null)}
                className="px-5 py-2 bg-[#16324F] hover:bg-[#0f2338] text-white text-xs font-bold rounded-xl transition cursor-pointer"
              >
                Fechar Painel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
