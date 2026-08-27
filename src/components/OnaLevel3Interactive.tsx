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
  Sparkles,
  GraduationCap,
  Users2,
  BrainCircuit,
  HeartHandshake,
  TrendingUp,
  Award,
  Layers,
  CheckCircle
} from 'lucide-react';

export interface OnaLevel3RequirementItem {
  id: number;
  nivelOna: number;
  numRequisito: number;
  tituloCurto: string;
  pilar: string;
  tag: string;
  status: 'MIGROU_N2' | 'NOVO';
  requisito: string;
  orientacaoOna: string;
  sugestaoEvidenciaOna: string;
  requisitoCore: 'SIM' | 'NÃO';
  origem: string;
}

export const ONA_LEVEL_3_DATA: OnaLevel3RequirementItem[] = [
  {
    id: 301,
    nivelOna: 3,
    numRequisito: 1,
    tituloCurto: 'Eficácia da Capacitação e Treinamento',
    pilar: 'Pilar 1 • Capacitação',
    tag: 'Avaliação de Aprendizagem & Mudança Comportamental',
    status: 'MIGROU_N2',
    origem: 'Migrado do Nível 2 (antigo Req. 6)',
    requisito:
      'Avaliar a eficácia da capacitação e treinamento dos profissionais.',
    orientacaoOna:
      'A organização deve planejar, implementar, acompanhar e avaliar as ações de capacitação e treinamentos oferecidos aos profissionais. A capacitação e os treinamentos visam ao aprimoramento das habilidades e conhecimentos necessários ao exercício das funções, contribuindo para a melhoria contínua da organização e para o atendimento às necessidades dos pacientes. Ao se definir os objetivos do treinamento, deve-se também definir quais métricas e indicadores serão capazes de avaliar sua eficácia. Existem alguns níveis para avaliação da aprendizagem sendo: Reação e satisfação dos profissionais treinados. Aprendizado ou assimilação do conteúdo. Comportamento e aplicação no trabalho. Resultado/impacto no negócio.',
    sugestaoEvidenciaOna:
      'Diretrizes e instrumentos definidos para avaliação da eficácia dos treinamentos realizados pela instituição; pesquisas de reação aplicadas aos profissionais capacitados; auditorias internas e observações diretas; entrevistas com os profissionais; análise da tendência dos indicadores pertinentes antes e após as capacitações e treinamentos; resultados das avaliações de desempenho nos itens relacionados ao conteúdo dos treinamentos, como qualidade das entregas e outros aspectos técnicos e comportamentais.',
    requisitoCore: 'NÃO',
  },
  {
    id: 302,
    nivelOna: 3,
    numRequisito: 2,
    tituloCurto: 'Efetividade de Desenvolvimento de Lideranças',
    pilar: 'Pilar 2 • Liderança',
    tag: 'Sucessão, Impacto nos Negócios & Governança',
    status: 'MIGROU_N2',
    origem: 'Migrado do Nível 2 (antigo Req. 7)',
    requisito:
      'Avaliar a efetividade do programa institucional de desenvolvimento de lideranças e definir ações e ciclos de melhoria.',
    orientacaoOna:
      'A organização deve estruturar, implementar, acompanhar e avaliar o programa institucional de desenvolvimento de lideranças. A obtenção de resultados está diretamente relacionada às diretrizes e às práticas de desenvolvimento e valorização humana. Deve-se avaliar se o que foi planejado no programa institucional de desenvolvimento de lideranças está sendo cumprido, qual o impacto no negócio e, quando necessário, quais ações de melhoria devem ser implementadas.',
    sugestaoEvidenciaOna:
      'Entrevistas estruturadas para observar a maturidade das lideranças frente às suas responsabilidades e missão; pesquisas de clima organizacional com indicadores positivos atribuídos às lideranças; avaliações de desempenho específicas para líderes; análise da tendência dos indicadores pertinentes antes e após capacitações e treinamentos; banco estruturado de potenciais sucessores preparados para assumir posições de liderança nos diversos níveis da organização.',
    requisitoCore: 'SIM',
  },
  {
    id: 303,
    nivelOna: 3,
    numRequisito: 3,
    tituloCurto: 'Retenção e Compartilhamento de Conhecimento',
    pilar: 'Pilar 3 • Gestão do Conhecimento',
    tag: 'Capital Intelectual, Lições Aprendidas & Sustentabilidade',
    status: 'MIGROU_N2',
    origem: 'Migrado do Nível 2 (antigo Req. 8)',
    requisito:
      'Avaliar a efetividade das ações para a retenção e compartilhamento dos conhecimentos obtidos pela organização.',
    orientacaoOna:
      'A organização deve estabelecer, estruturar, implementar, monitorar e avaliar ações que promovam a transformação do conhecimento em valor organizacional. São etapas da gestão do conhecimento a serem consideradas: Aquisição do conhecimento: processos para facilitar a criação/incorporação do conhecimento na organização. Retenção: organização, estruturação e armazenamento do conhecimento para utilização das partes interessadas. Distribuição: compartilhamento de lições aprendidas, documentos, diretrizes e procedimentos. Utilização pelos profissionais e equipes.',
    sugestaoEvidenciaOna:
      'Atividades de aquisição como produção científica, participação em eventos externos e acesso dos profissionais às melhores práticas por meio de fontes reconhecidas. Método definido formalizado para organização, armazenamento e distribuição do conhecimento. Registro sistematizado de lições aprendidas. Controle de acesso aos documentos, diretrizes e procedimentos.',
    requisitoCore: 'NÃO',
  },
  {
    id: 304,
    nivelOna: 3,
    numRequisito: 4,
    tituloCurto: 'Satisfação, Manifestação, Experiência & DE&I',
    pilar: 'Pilar 4 • Experiência & Clima',
    tag: 'Ambiente Inclusivo, Equidade, Ouvidoria & Engajamento',
    status: 'NOVO',
    origem: 'Requisito Inédito ONA 2026',
    requisito:
      'Avaliar a efetividade das ações frente aos resultados da satisfação, manifestação e experiência dos profissionais com a organização.',
    orientacaoOna:
      'A organização deve estruturar, aplicar, monitorar e avaliar ações voltadas à gestão do clima organizacional, visando um ambiente de trabalho positivo. A gestão do clima constitui-se em um processo de diagnóstico dos aspectos que possam impactar a satisfação dos profissionais quanto ao ambiente interno da organização, seguido do planejamento e da implementação de iniciativas de melhoria. As dimensões de pesquisa e análise incluem: liderança, relacionamento interpessoal, trabalho em equipe, comunicação, gestão organizacional, práticas de gestão de pessoas, práticas de diversidade e inclusão, qualidade de vida, segurança, dentre outras. Gerenciar, revisar e promover práticas de igualdade, diversidade, inclusão e equidade em todas as etapas da gestão de pessoas, incluindo recrutamento, alocação de trabalho, programação, desenvolvimento e promoções. Essa abordagem deve assegurar que todos os profissionais tenham as mesmas oportunidades, independentemente de idade, gênero, etnia/raça, religião, orientação sexual, deficiência ou qualquer outra característica pessoal. A organização deve adotar políticas de igualdade de oportunidades, oferecer treinamentos periódicos, e monitorar indicadores e resultados para identificar possíveis desequilíbrios e implementar ações corretivas e educativas. Também é recomendável analisar dados de recrutamento, progressão e representatividade, promovendo um ambiente de respeito, pertencimento e valorização da diversidade. Essa prática fortalece a cultura organizacional ética e inclusiva, contribuindo para o bem-estar, engajamento e desempenho sustentável da força de trabalho.',
    sugestaoEvidenciaOna:
      'Ferramentas aplicadas de pesquisa de clima organizacional e/ou engajamento; processo estruturado para evolução dos aspectos críticos identificados; planos de ação voltados às iniciativas de melhoria implementadas; fóruns de discussão sobre ações de intervenção; campanhas de comunicação interna para estimular a participação dos profissionais e apresentar os resultados obtidos; acompanhamento das manifestações e denúncias realizadas, com direcionamento e monitoramento dos respectivos planos de ação.',
    requisitoCore: 'NÃO',
  },
];

export const OnaLevel3Interactive: React.FC = () => {
  const [selectedReq, setSelectedReq] = useState<OnaLevel3RequirementItem | null>(null);
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const handleCopyReq = (item: OnaLevel3RequirementItem) => {
    const text = `NÍVEL ONA: ${item.nivelOna} | REQUISITO Nº ${item.numRequisito} (${item.requisitoCore === 'SIM' ? 'CORE' : 'NÃO CORE'})\n\nREQUISITO:\n${item.requisito}\n\nORIENTAÇÃO DA ONA:\n${item.orientacaoOna}\n\nSUGESTÃO DE EVIDÊNCIA DA ONA:\n${item.sugestaoEvidenciaOna}`;
    navigator.clipboard.writeText(text);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleNextReq = () => {
    if (!selectedReq) return;
    const currentIndex = ONA_LEVEL_3_DATA.findIndex((r) => r.id === selectedReq.id);
    if (currentIndex < ONA_LEVEL_3_DATA.length - 1) {
      setSelectedReq(ONA_LEVEL_3_DATA[currentIndex + 1]);
    } else {
      setSelectedReq(ONA_LEVEL_3_DATA[0]);
    }
  };

  const handlePrevReq = () => {
    if (!selectedReq) return;
    const currentIndex = ONA_LEVEL_3_DATA.findIndex((r) => r.id === selectedReq.id);
    if (currentIndex > 0) {
      setSelectedReq(ONA_LEVEL_3_DATA[currentIndex - 1]);
    } else {
      setSelectedReq(ONA_LEVEL_3_DATA[ONA_LEVEL_3_DATA.length - 1]);
    }
  };

  const openReqByNum = (num: number) => {
    const target = ONA_LEVEL_3_DATA.find((r) => r.numRequisito === num);
    if (target) setSelectedReq(target);
  };

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col justify-between h-full py-2 sm:py-3 text-left">
      {/* Top Header & Evolution Metric */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E2E8F0] pb-2.5">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#0F766E]">
            06 • Excelência & Desfechos
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0F766E] mt-0.5 tracking-tight">
            Requisitos ONA — Nível 3
          </h2>
          <p className="text-xs sm:text-sm text-[#334155]">
            O Nascimento do Nível 3 em GP: <strong>0 → 4 requisitos de efetividade</strong> <span className="text-slate-400 font-normal">(3 migrados do N2 + 1 requisito inédito)</span>
          </p>
        </div>

        {/* Indicador Numérico de Destaque no Topo */}
        <div className="flex items-center gap-2.5 bg-[#F8FAFC] px-3.5 py-1.5 rounded-xl border border-[#E2E8F0] self-start sm:self-auto shadow-2xs">
          <div className="flex items-center gap-1.5">
            <span className="font-mono text-base font-bold text-[#94A3B8]">0</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#0F766E]" />
            <span className="font-mono text-base font-black text-[#0F766E]">4</span>
            <span className="text-xs font-bold text-[#16324F]">requisitos</span>
          </div>
          <div className="h-4 w-px bg-[#CBD5E1]" />
          <span className="text-[11px] font-bold text-teal-900 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
            Nova Camada de Efetividade
          </span>
        </div>
      </div>

      {/* Grid Principal: 4 Pilares Interativos do Nível 3 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-2 items-stretch">
        {/* Pilar 1: Req 1 - Eficácia da Capacitação (MIGROU N2) */}
        <div
          onClick={() => openReqByNum(1)}
          className="bg-indigo-50/60 rounded-2xl p-3.5 border border-indigo-200 hover:border-indigo-400 hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer flex flex-col justify-between group shadow-2xs relative"
          title="Clique para ver detalhes do Requisito 1"
        >
          <div>
            <div className="flex items-center justify-between gap-1 pb-1.5 border-b border-indigo-200/70">
              <span className="text-[10.5px] font-black uppercase tracking-wider text-indigo-950 flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-indigo-600" />
                Pilar 1 • Capacitação
              </span>
              <span className="text-[9px] font-bold text-indigo-900 bg-white px-2 py-0.5 rounded-full border border-indigo-200 shadow-2xs">
                Req. 1 • Migrado do N2
              </span>
            </div>

            <div className="mt-2 space-y-1.5">
              <div className="flex items-center justify-between">
                <h4 className="text-xs sm:text-sm font-black text-[#16324F] leading-tight group-hover:text-indigo-900 transition">
                  Eficácia da Capacitação e Treinamento
                </h4>
                <span className="text-[8.5px] font-bold text-slate-500 bg-white px-1.5 py-0.2 rounded border border-slate-200 shrink-0">
                  NÃO CORE
                </span>
              </div>
              <p className="text-[11px] text-[#334155] leading-snug">
                Avaliação de aprendizagem nos 4 níveis: Reação, Assimilação, Comportamento no posto e Impacto assistencial/negócio.
              </p>
            </div>
          </div>

          <div className="pt-2 mt-2 border-t border-indigo-200/70 flex items-center justify-between text-[10px] font-bold text-indigo-800">
            <span>Origem: Antigo Req. 6 (N2)</span>
            <span className="inline-flex items-center gap-0.5 text-indigo-950 group-hover:text-[#FF3200] group-hover:translate-x-0.5 transition">
              Abrir detalhes <ChevronRight className="w-3 h-3" />
            </span>
          </div>
        </div>

        {/* Pilar 2: Req 2 - Desenvolvimento de Lideranças (MIGROU N2 / CORE) */}
        <div
          onClick={() => openReqByNum(2)}
          className="bg-indigo-50/60 rounded-2xl p-3.5 border border-indigo-200 hover:border-indigo-400 hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer flex flex-col justify-between group shadow-2xs relative"
          title="Clique para ver detalhes do Requisito 2 (CORE)"
        >
          <div>
            <div className="flex items-center justify-between gap-1 pb-1.5 border-b border-indigo-200/70">
              <span className="text-[10.5px] font-black uppercase tracking-wider text-indigo-950 flex items-center gap-1.5">
                <Users2 className="w-3.5 h-3.5 text-indigo-600" />
                Pilar 2 • Liderança
              </span>
              <span className="text-[9px] font-bold text-indigo-900 bg-white px-2 py-0.5 rounded-full border border-indigo-200 shadow-2xs">
                Req. 2 • Migrado do N2
              </span>
            </div>

            <div className="mt-2 space-y-1.5">
              <div className="flex items-center justify-between">
                <h4 className="text-xs sm:text-sm font-black text-[#16324F] leading-tight group-hover:text-indigo-900 transition">
                  Desenvolvimento de Lideranças
                </h4>
                <span className="text-[8.5px] font-black uppercase tracking-wider bg-amber-100 text-amber-900 px-2 py-0.5 rounded border border-amber-300 flex items-center gap-0.5 shrink-0 shadow-2xs">
                  <Shield className="w-2.5 h-2.5 text-amber-600" /> CORE
                </span>
              </div>
              <p className="text-[11px] text-[#334155] leading-snug">
                Avaliação da maturidade das lideranças, repercussão no clima, governança e estruturação de banco de sucessores.
              </p>
            </div>
          </div>

          <div className="pt-2 mt-2 border-t border-indigo-200/70 flex items-center justify-between text-[10px] font-bold text-indigo-800">
            <span>Origem: Antigo Req. 7 (N2)</span>
            <span className="inline-flex items-center gap-0.5 text-indigo-950 group-hover:text-[#FF3200] group-hover:translate-x-0.5 transition font-black">
              Abrir detalhes (CORE) <ChevronRight className="w-3 h-3" />
            </span>
          </div>
        </div>

        {/* Pilar 3: Req 3 - Retenção & Compartilhamento do Conhecimento (MIGROU N2) */}
        <div
          onClick={() => openReqByNum(3)}
          className="bg-indigo-50/60 rounded-2xl p-3.5 border border-indigo-200 hover:border-indigo-400 hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer flex flex-col justify-between group shadow-2xs relative"
          title="Clique para ver detalhes do Requisito 3"
        >
          <div>
            <div className="flex items-center justify-between gap-1 pb-1.5 border-b border-indigo-200/70">
              <span className="text-[10.5px] font-black uppercase tracking-wider text-indigo-950 flex items-center gap-1.5">
                <BrainCircuit className="w-3.5 h-3.5 text-indigo-600" />
                Pilar 3 • Conhecimento
              </span>
              <span className="text-[9px] font-bold text-indigo-900 bg-white px-2 py-0.5 rounded-full border border-indigo-200 shadow-2xs">
                Req. 3 • Migrado do N2
              </span>
            </div>

            <div className="mt-2 space-y-1.5">
              <div className="flex items-center justify-between">
                <h4 className="text-xs sm:text-sm font-black text-[#16324F] leading-tight group-hover:text-indigo-900 transition">
                  Retenção e Gestão do Conhecimento
                </h4>
                <span className="text-[8.5px] font-bold text-slate-500 bg-white px-1.5 py-0.2 rounded border border-slate-200 shrink-0">
                  NÃO CORE
                </span>
              </div>
              <p className="text-[11px] text-[#334155] leading-snug">
                Transformação do conhecimento em valor: Aquisição, retenção do know-how crítico, distribuição e lições aprendidas.
              </p>
            </div>
          </div>

          <div className="pt-2 mt-2 border-t border-indigo-200/70 flex items-center justify-between text-[10px] font-bold text-indigo-800">
            <span>Origem: Antigo Req. 8 (N2)</span>
            <span className="inline-flex items-center gap-0.5 text-indigo-950 group-hover:text-[#FF3200] group-hover:translate-x-0.5 transition">
              Abrir detalhes <ChevronRight className="w-3 h-3" />
            </span>
          </div>
        </div>

        {/* Pilar 4: Req 4 - Satisfação, Experiência, Manifestação & Diversidade (NOVO REQUISITO NÍVEL 3) */}
        <div
          onClick={() => openReqByNum(4)}
          className="bg-emerald-50/80 rounded-2xl p-3.5 border-2 border-emerald-300 hover:border-emerald-500 hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer flex flex-col justify-between group shadow-2xs relative"
          title="Clique para ver detalhes do Requisito 4 (Inédito)"
        >
          <div>
            <div className="flex items-center justify-between gap-1 pb-1.5 border-b border-emerald-200">
              <span className="text-[10.5px] font-black uppercase tracking-wider text-emerald-950 flex items-center gap-1.5">
                <HeartHandshake className="w-3.5 h-3.5 text-emerald-600" />
                Pilar 4 • Experiência & DE&I
              </span>
              <span className="text-[9px] font-black text-emerald-950 bg-emerald-100/90 px-2 py-0.5 rounded-full border border-emerald-300 shadow-2xs flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5 text-emerald-600" />
                Req. 4 • Inédito ONA 2026
              </span>
            </div>

            <div className="mt-2 space-y-1.5">
              <div className="flex items-center justify-between">
                <h4 className="text-xs sm:text-sm font-black text-[#16324F] leading-tight group-hover:text-emerald-950 transition">
                  Experiência, Clima & Diversidade (DE&I)
                </h4>
                <span className="text-[8.5px] font-bold text-slate-500 bg-white px-1.5 py-0.2 rounded border border-slate-200 shrink-0">
                  NÃO CORE
                </span>
              </div>
              <p className="text-[11px] text-[#334155] leading-snug">
                Efetividade das tratativas de clima, acolhimento de manifestações e práticas estruturadas de Diversidade, Equidade e Inclusão.
              </p>
            </div>
          </div>

          <div className="pt-2 mt-2 border-t border-emerald-200 flex items-center justify-between text-[10px] font-bold text-emerald-800">
            <span>Inovação estrutural ONA 2026</span>
            <span className="inline-flex items-center gap-0.5 text-emerald-950 group-hover:text-[#FF3200] group-hover:translate-x-0.5 transition font-black">
              Abrir detalhes completos <ChevronRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      </div>

      {/* Barra de Síntese Executiva */}
      <div className="bg-[#F8FAFC] p-2.5 sm:p-3 rounded-2xl border border-[#E2E8F0] text-xs text-[#334155] flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-2xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#0F766E]" />
          <span>
            <strong>Diretriz Central do Nível 3:</strong> Não basta comprovar a realização de atividades; a ONA exige a <strong>demonstração de valor gerado, desfechos e impacto real</strong> no negócio e na assistência.
          </span>
        </div>
        <span className="text-[#0F766E] font-bold shrink-0 bg-teal-50 px-2.5 py-0.5 rounded border border-teal-200">
          4 Pilares de Efetividade
        </span>
      </div>

      {/* Modal Interativo com Requisito, Orientação ONA e Sugestão de Evidência */}
      {selectedReq && (
        <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 z-50 animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-[#E2E8F0] flex items-center justify-between bg-[#F8FAFC]">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-1 rounded-md bg-teal-800 text-white font-mono font-black text-xs">
                  NÍVEL {selectedReq.nivelOna} ONA
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-800 text-white font-mono font-bold text-xs">
                  REQUISITO Nº {selectedReq.numRequisito}
                </span>
                {selectedReq.status === 'NOVO' ? (
                  <span className="px-2.5 py-1 rounded-md bg-emerald-500 text-white font-mono font-black text-xs flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> NOVO NA ONA 2026
                  </span>
                ) : (
                  <span className="px-2.5 py-1 rounded-md bg-teal-100 text-teal-900 font-mono font-bold text-xs">
                    MIGRADO DO N2
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
                  <FileText className="w-4 h-4 text-[#0F766E]" />
                  REQUISITO COMPLETO ({selectedReq.pilar})
                </div>
                <p className="text-sm sm:text-base font-bold text-[#16324F] leading-relaxed">
                  {selectedReq.requisito}
                </p>
                <div className="text-[11px] text-teal-800 font-semibold mt-1">
                  Origem do Requisito: {selectedReq.origem}
                </div>
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
