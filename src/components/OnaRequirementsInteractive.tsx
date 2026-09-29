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
  MinusCircle,
  MessageSquareQuote,
  HeartHandshake
} from 'lucide-react';

export interface OnaRequirementItem {
  id: number;
  nivelOna: number;
  numRequisito: number;
  tituloCurto: string;
  tag: string;
  requisito: string;
  orientacaoOna: string;
  sugestaoEvidenciaOna: string;
  requisitoCore: 'SIM' | 'NÃO';
}

export const ONA_REQUIREMENTS_DATA: OnaRequirementItem[] = [
  {
    id: 1,
    nivelOna: 1,
    numRequisito: 2,
    tituloCurto: 'Treinamento em Segurança do Paciente',
    tag: 'Cultura Assistencial & Fornecedores/Terceiros',
    requisito:
      'Oferecer sistematicamente treinamento e educação sobre segurança do paciente à força de trabalho e, quando aplicável, à força de trabalho dos fornecedores/terceiros que atuam diretamente nos processos da organização.',
    orientacaoOna:
      'Disseminar as práticas de segurança bem como as metas de segurança do paciente, a fim de garantir processos seguros em todas as etapas do atendimento ao cliente/paciente. No que tange ao escopo, inclui treinamentos nos protocolos de segurança do paciente estabelecidos e implementados pela organização, destinados aos públicos pertinentes, mas sem se restringir a eles. É importante considerar profissionais terceirizados que realizam assistência/procedimentos aos pacientes tais como instrumentadores cirúrgicos dos médicos (não contratadas pela instituição), doulas (conforme perfil), dentre outros.',
    sugestaoEvidenciaOna:
      'Documento comprobatório da capacitação; plano de treinamento, abrangendo temas, objetivos, públicos aos quais se destina e frequência.',
    requisitoCore: 'NÃO',
  },
  {
    id: 2,
    nivelOna: 1,
    numRequisito: 8,
    tituloCurto: 'Saúde, Segurança Ocupacional e Riscos Psicossociais',
    tag: 'Saúde Integral, PGR, PCMSO & Ergonomia',
    requisito:
      'Estabelecer, implementar e manter um programa de saúde e segurança ocupacional, incluindo o mapeamento dos riscos psicossociais.',
    orientacaoOna:
      'A organização deve possuir um programa que vise à identificação, eliminação ou mitigação dos riscos relacionados à saúde ocupacional dos profissionais, bem como os riscos psicossociais. Devem ser realizados diagnóstico, análise técnica e plano de ação de prevenção ou mitigação dos riscos psicossociais conforme legislação pertinente. Para tal, deve demonstrar como promove e executa de forma integrada e complementar, as diversas iniciativas de saúde e segurança ocupacional previstas em regulamentos e legislações, bem como as iniciativas próprias. A saúde ocupacional deve abranger aspectos relativos à ergonomia, à saúde mental e à saúde emocional dos profissionais. Assegurar condições de trabalho seguras e práticas de proteção adequadas aos profissionais, considerando os diferentes contextos de atuação. Na assistência social, isso inclui medidas como procedimentos de segurança para trabalhadores solitários, garantia de confidencialidade dos dados de contato pessoal dos funcionários e manutenção de limites profissionais éticos e seguros. Nos serviços de saúde, por exemplo, abrange a vacinação obrigatória para funcionários, o fornecimento e uso adequado de equipamentos de proteção individual (EPI), além da prevenção de lesões por movimentação manual e acidentes com materiais perfurocortantes, como agulhas. Já nos serviços laboratoriais, por exemplo, compreende a proteção contra patógenos e produtos químicos perigosos, bem como o fornecimento de equipamentos de segurança específicos, incluindo EPI apropriado. Essas medidas refletem o compromisso institucional com a segurança, a saúde ocupacional e a integridade física e psicológica das equipes, elementos essenciais para a qualidade e a continuidade do cuidado. Promover ativamente o bem-estar e a segurança psicológica da força de trabalho, criando um ambiente em que os profissionais se sintam fisicamente seguros, emocionalmente respeitados e apoiados em seu desenvolvimento pessoal e profissional. O bem-estar no trabalho envolve o equilíbrio entre saúde física, mental e emocional, abrangendo fatores como satisfação profissional, qualidade de vida, gestão do estresse e harmonia entre vida pessoal e laboral. Já a segurança psicológica refere-se à existência de uma cultura organizacional em que as pessoas se sintam à vontade para se expressar, fazer perguntas, propor ideias, reconhecer erros e levantar preocupações sem medo de julgamento ou retaliação. Para sustentar esse ambiente saudável, a organização pode adotar ações como oferta de serviços de saúde ocupacional, ambientes promotores da saúde (com alimentação equilibrada e condições ergonômicas adequadas), opções de trabalho flexível, apoio ao gerenciamento do estresse, programas de engajamento e escuta ativa, além de oportunidades de aprendizado e crescimento contínuo. Essas medidas reforçam uma cultura de cuidado, confiança e pertencimento, fundamentais para o desempenho sustentável e a qualidade da assistência prestada.',
    sugestaoEvidenciaOna:
      'Descrição das iniciativas que compõem o Programa de Saúde e Segurança Ocupacional. Execução das ações previstas em: PGR (Programa de Gerenciamento de Riscos), PCMSO (Programa de Controle Médico e Saúde Ocupacional), ASO (Atestado de Saúde Ocupacional/Perfil Epidemiológico), AEP (Análise Ergonômica Preliminar), AET (Análise Ergonômica do Trabalho), e demais programas legais obrigatórios. Programa de Qualidade de Vida. CIPA (Comissão Interna de Prevenção de Acidentes e Assédio), atas de reunião, manifestações dos profissionais, ações implantadas. LTCAT (Laudo Técnico das Condições do Ambiente de Trabalho). Registros de campanhas de saúde ocupacional, ações de promoção da saúde mental e ergonomia. Planos de ação derivados de análises de acidentes',
    requisitoCore: 'SIM',
  },
  {
    id: 3,
    nivelOna: 1,
    numRequisito: 17,
    tituloCurto: 'Plano de Prevenção de Riscos Ocupacionais e Psicossociais',
    tag: 'Prevenção, EPIs, CAs & Saúde Integral',
    requisito:
      'Estabelecer e implementar um plano de prevenção de riscos ocupacionais, psicossociais, considerando a saúde integral dos profissionais.',
    orientacaoOna:
      'A organização deve possuir estratégias para a redução dos riscos ocupacionais (químicos, biológicos, físicos, ergonômicos e psicossociais), com ações de prevenção, mitigação, promoção da saúde integral e acompanhamento da saúde física e mental, articuladas aos Programas de Prevenção e demais instrumentos legais aplicáveis.',
    sugestaoEvidenciaOna:
      'Registros de fornecimento, uso e controle de EPIs (Equipamentos de Proteção Individual), com verificação da validade dos CAs (Certificados de Aprovação); relatórios e checklists de visitas técnicas realizadas pela equipe de Segurança do Trabalho; análises preliminares de risco documentadas para atividades críticas; programas que abordem temas relacionados à saúde física e mental dos profissionais, e aos serviços de apoio operacional que facilitam o seu dia a dia. Por exemplo: programas de bons hábitos alimentares, promoção da saúde integral, segurança doméstica, condução segura e outros.',
    requisitoCore: 'SIM',
  },
  {
    id: 4,
    nivelOna: 1,
    numRequisito: 20,
    tituloCurto: 'Canal de Comunicação e Manifestação dos Profissionais',
    tag: 'Escuta Formal, Confidencialidade & Sem Retaliação',
    requisito:
      'Estabelecer e manter ativo um canal de comunicação/manifestação dos profissionais.',
    orientacaoOna:
      'A organização deve assegurar um processo de coleta e tratativa das manifestações dos profissionais que inclua um canal de comunicação, bem como um ambiente no qual eles se sintam seguros para expressar sem medo de retaliação ou punição.',
    sugestaoEvidenciaOna:
      'Canal de comunicação instituído e divulgado, que garanta a confidencialidade (alinhado ao Plano de Comunicação Institucional). Registros de denúncias, sugestões e reclamações dos profissionais e planos de ação desenvolvidos.',
    requisitoCore: 'NÃO',
  },
  {
    id: 5,
    nivelOna: 1,
    numRequisito: 21,
    tituloCurto: 'Acompanhamento de Segundas Vítimas (Eventos Adversos)',
    tag: 'Cultura Justa, Suporte Psicológico & Debriefing',
    requisito:
      'Estabelecer e implementar processos de acompanhamento para profissionais de saúde considerados segundas vítimas decorrentes de eventos adversos.',
    orientacaoOna:
      'Devem reconhecer, acolher e oferecer apoio estruturado e contínuo às equipes envolvidas em incidentes de segurança do paciente e/ou do usuário do serviço que se tornam segunda vítima em decorrência de eventos adversos, reconhecendo o impacto emocional, ético, técnico, institucional e psicológico desses eventos e promovendo um ambiente de aprendizado e não de culpa. A instituição deve abordar e compreender a importância de uma cultura justa e de aprendizado organizacional, que reconhece que a maioria dos incidentes decorre de falhas sistêmicas, e não de negligência individual. O objetivo é proteger o bem-estar emocional dos profissionais, fortalecer a confiança na cultura de segurança e garantir que os aprendizados resultem em melhorias nos processos de cuidado centrado no paciente. O conceito de “segunda vítima” é central neste contexto: refere-se ao sofrimento psicológico, moral e profissional vivenciado pelos trabalhadores de saúde envolvidos em um incidente que causou danos a um paciente. Esse sofrimento pode incluir culpa, ansiedade, medo, perda de confiança profissional e isolamento. O termo “segunda vítima” é utilizado para descrever o impacto dos eventos adversos em todos os profissionais de saúde, independentemente de serem assistencial ou não, terceirizado ou contratado. O dano emocional (vergonha, raiva, depressão) ou sofrimento (remorso, ansiedade, sensação de fracasso, perda de confiança) podem ter um impacto na qualidade e segurança do atendimento ao paciente, se as organizações de saúde não reconhecerem e fornecerem suporte para o profissional. Por isso, convém que a estratégia de apoio considere, por exemplo, educação, avaliação, aconselhamento e acompanhamento para o profissional que é a segunda vítima de eventos adversos. Em geral, o apoio emocional e o apoio dos pares estão entre as estratégias mais solicitadas e úteis. Adicionalmente, pode ser necessário tanto a ajuda psicológica quanto a assistência jurídica. A organização também pode adotar diretrizes para apoio imediato e pós-incidente, com análise pós-evento (debriefings) estruturados e acompanhamento emocional; garantir uma abordagem justa (just culture) que favoreça o relato aberto e a ausência de punição indevida, permitindo que os profissionais se manifestem sem medo de retaliação; disponibilizar apoio psicológico e institucional às equipes envolvidas, reconhecendo que cuidar de quem cuida é parte essencial da segurança do paciente; promover reflexão coletiva e aprendizado organizacional, envolvendo a equipe na análise das causas e na construção de medidas preventivas; integrar esse apoio aos programas de segurança do paciente, qualidade de vida no trabalho e educação permanente.',
    sugestaoEvidenciaOna:
      'Fluxo de atendimento às segundas vítimas. Registros de atendimento e acompanhamento aos profissionais de saúde considerados segundas vítimas. Diretriz de apoio às equipes envolvidas em incidentes (conceito de segunda vítima); registros de análise pós-evento (debriefings) e acompanhamento pós-incidente; relatórios ou atas de reuniões que evidenciem abordagem justa e aprendizado sistêmico; Programas ou ações de apoio psicológico, escuta ativa e reabilitação emocional dos profissionais; evidências de capacitação sobre cultura justa e segurança psicológica nas equipes assistenciais e de gestão.',
    requisitoCore: 'NÃO',
  },
  {
    id: 6,
    nivelOna: 1,
    numRequisito: 22,
    tituloCurto: 'Fluxos de Suporte e Apoio Emocional aos Profissionais',
    tag: 'Apoio Emocional, Mitigação de Violência, CNV & Canais',
    requisito:
      'Estabelecer fluxos de suporte e apoio emocional para os profissionais de saúde.',
    orientacaoOna:
      'A organização deve identificar e definir fluxo de atendimentos que ofereçam apoio emocional aos profissionais de saúde conforme a necessidade. Deve também promover ações de Identificação e mitigação de riscos relacionados à violência e agressão (física, verbal, moral ou psicológica) contra os profissionais.',
    sugestaoEvidenciaOna:
      'Fluxo de suporte e apoio emocional para profissionais de saúde. Treinamentos de comunicação não violenta e gestão de conflitos. Canais de denúncia de agressões garantindo a confidencialidade.',
    requisitoCore: 'NÃO',
  },
];

export const OnaRequirementsInteractive: React.FC = () => {
  const [selectedReq, setSelectedReq] = useState<OnaRequirementItem | null>(null);
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const handleCopyReq = (item: OnaRequirementItem) => {
    const text = `NÍVEL ONA: ${item.nivelOna} | REQUISITO Nº ${item.numRequisito} (${item.requisitoCore === 'SIM' ? 'CORE' : 'NÃO CORE'})\n\nREQUISITO:\n${item.requisito}\n\nORIENTAÇÃO DA ONA:\n${item.orientacaoOna}\n\nSUGESTÃO DE EVIDÊNCIA DA ONA:\n${item.sugestaoEvidenciaOna}`;
    navigator.clipboard.writeText(text);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleNextReq = () => {
    if (!selectedReq) return;
    const currentIndex = ONA_REQUIREMENTS_DATA.findIndex((r) => r.id === selectedReq.id);
    if (currentIndex < ONA_REQUIREMENTS_DATA.length - 1) {
      setSelectedReq(ONA_REQUIREMENTS_DATA[currentIndex + 1]);
    } else {
      setSelectedReq(ONA_REQUIREMENTS_DATA[0]);
    }
  };

  const handlePrevReq = () => {
    if (!selectedReq) return;
    const currentIndex = ONA_REQUIREMENTS_DATA.findIndex((r) => r.id === selectedReq.id);
    if (currentIndex > 0) {
      setSelectedReq(ONA_REQUIREMENTS_DATA[currentIndex - 1]);
    } else {
      setSelectedReq(ONA_REQUIREMENTS_DATA[ONA_REQUIREMENTS_DATA.length - 1]);
    }
  };

  const openReqByNum = (num: number) => {
    const target = ONA_REQUIREMENTS_DATA.find((r) => r.numRequisito === num);
    if (target) setSelectedReq(target);
  };

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col justify-between h-full py-2 sm:py-3 text-left">
      {/* Top Header & Indicator */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E2E8F0] pb-2.5">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#FF3200]">
            06 • Base Operacional
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#FF3200] mt-0.5 tracking-tight">
            Requisitos ONA — Nível 1
          </h2>
          <p className="text-xs sm:text-sm text-[#334155]">
            Comparativo 2022 → 2026: o que mudou na base operacional <span className="text-slate-400 font-normal">(clique nos cards interativos para ver o requisito completo e evidências)</span>
          </p>
        </div>

        {/* Indicador Numérico de Destaque no Topo */}
        <div className="flex items-center gap-2.5 bg-[#F8FAFC] px-3.5 py-1.5 rounded-xl border border-[#E2E8F0] self-start sm:self-auto shadow-2xs">
          <div className="flex items-center gap-1.5">
            <span className="font-mono text-base font-black text-[#16324F]">22</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#FF3200]" />
            <span className="font-mono text-base font-black text-[#16324F]">22</span>
            <span className="text-xs font-bold text-[#16324F]">requisitos</span>
          </div>
          <div className="h-4 w-px bg-[#CBD5E1]" />
          <span className="text-[11px] font-semibold text-[#0F766E] bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
            mesmo total, nova composição
          </span>
        </div>
      </div>

      {/* 4 Main Categories (Completamente interativos ao clique) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 my-2">
        {/* Bloco 1: O que entrou (Verde / Novidade / Clicável -> Req 2) */}
        <div
          onClick={() => openReqByNum(2)}
          className="bg-emerald-50/80 rounded-2xl p-3.5 border border-emerald-200 flex flex-col justify-between space-y-2.5 shadow-2xs cursor-pointer hover:border-emerald-500 hover:shadow-md hover:-translate-y-0.5 transition-all group"
          title="Clique para abrir todos os detalhes oficiais do Requisito Nº 2"
        >
          <div>
            <div className="flex items-center justify-between gap-1 pb-1.5 border-b border-emerald-200/90">
              <span className="text-[10px] font-black uppercase tracking-wider text-emerald-900 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                O que entrou
              </span>
              <span className="text-[9px] font-bold text-emerald-800 bg-white px-2 py-0.5 rounded-full border border-emerald-200 shadow-2xs">
                Novo • Req. 2
              </span>
            </div>

            <div className="mt-2.5 bg-white p-3 rounded-xl border border-emerald-100 space-y-1.5 group-hover:border-emerald-300 transition">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <h4 className="text-xs font-black text-emerald-950">
                    Segurança do Paciente
                  </h4>
                </div>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Novo requisito inserido diretamente na estrutura de Gestão de Pessoas (treinamento e integração de equipes e terceiros).
              </p>
            </div>
          </div>

          <div className="pt-2 border-t border-emerald-200/80 flex items-center justify-between text-[10px] font-bold text-emerald-700">
            <span>Cultura assistencial segura</span>
            <span className="inline-flex items-center gap-0.5 text-emerald-900 group-hover:text-[#FF3200] group-hover:translate-x-0.5 transition">
              Abrir detalhes <ChevronRight className="w-3 h-3" />
            </span>
          </div>
        </div>

        {/* Bloco 2: O que foi ampliado/atualizado (Laranja/Amarelo -> Req 8 & Req 17 CORE + Req 20 Canal de Comunicação) */}
        <div className="bg-amber-50/80 rounded-2xl p-3.5 border border-amber-200 flex flex-col justify-between space-y-2.5 shadow-2xs">
          <div>
            <div className="flex items-center justify-between gap-1 pb-1.5 border-b border-amber-200/90">
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-950 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                O que foi ampliado
              </span>
              <span className="text-[9px] font-bold text-amber-900 bg-white px-2 py-0.5 rounded-full border border-amber-200 shadow-2xs">
                3 Requisitos
              </span>
            </div>

            <div className="mt-1.5 space-y-1.5">
              {/* Req 8 CORE (Clicável) */}
              <div
                onClick={() => openReqByNum(8)}
                className="bg-white px-2.5 py-1.5 rounded-xl border border-amber-200 hover:border-amber-500 hover:shadow-xs cursor-pointer transition group"
                title="Clique para abrir detalhes do Requisito 8 (CORE: SIM)"
              >
                <div className="flex items-center justify-between">
                  <div className="text-[10.5px] font-bold text-[#16324F]">PCMSO / PGR (Saúde)</div>
                  <span className="text-[8.5px] font-black uppercase tracking-wider bg-amber-100 text-amber-900 px-1.5 py-0.2 rounded border border-amber-300 flex items-center gap-0.5">
                    <Shield className="w-2.5 h-2.5 text-amber-600" /> Req. 8 CORE
                  </span>
                </div>
                <p className="text-[9.5px] text-slate-600 leading-tight mt-0.5">
                  Inclui <strong>Riscos Psicossociais</strong> e saúde integral.
                </p>
              </div>

              {/* Req 17 CORE (Clicável) */}
              <div
                onClick={() => openReqByNum(17)}
                className="bg-white px-2.5 py-1.5 rounded-xl border border-amber-200 hover:border-amber-500 hover:shadow-xs cursor-pointer transition group"
                title="Clique para abrir detalhes do Requisito 17 (CORE: SIM)"
              >
                <div className="flex items-center justify-between">
                  <div className="text-[10.5px] font-bold text-[#16324F]">Prevenção de Risco</div>
                  <span className="text-[8.5px] font-black uppercase tracking-wider bg-amber-100 text-amber-900 px-1.5 py-0.2 rounded border border-amber-300 flex items-center gap-0.5">
                    <Shield className="w-2.5 h-2.5 text-amber-600" /> Req. 17 CORE
                  </span>
                </div>
                <p className="text-[9.5px] text-slate-600 leading-tight mt-0.5">
                  Plano com EPIs, CAs e <strong>Riscos Psicossociais</strong>.
                </p>
              </div>

              {/* Req 20 - Canal de Comunicação (Clicável) */}
              <div
                onClick={() => openReqByNum(20)}
                className="bg-white px-2.5 py-1.5 rounded-xl border border-amber-200 hover:border-amber-500 hover:shadow-xs cursor-pointer transition group"
                title="Clique para abrir detalhes do Requisito 20 (Canal de Comunicação/Manifestação)"
              >
                <div className="flex items-center justify-between">
                  <div className="text-[10.5px] font-bold text-[#16324F]">Canal de Comunicação</div>
                  <span className="text-[8.5px] font-mono font-bold bg-amber-100 text-amber-900 px-1.5 py-0.2 rounded border border-amber-300">
                    Req. 20
                  </span>
                </div>
                <p className="text-[9.5px] text-slate-600 leading-tight mt-0.5">
                  Canal ativo, confidencial e seguro contra retaliação.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-amber-200/80 flex items-center justify-between text-[10px] font-bold text-amber-800">
            <span>Saúde integral & escuta formal</span>
            <span className="text-amber-900 underline text-[9px]">Clique p/ abrir Req. 8 / 17 / 20</span>
          </div>
        </div>

        {/* Bloco 3: O que retirou (Vermelho / Rose) */}
        <div className="bg-rose-50/80 rounded-2xl p-3.5 border border-rose-200 flex flex-col justify-between space-y-2.5 shadow-2xs">
          <div>
            <div className="flex items-center justify-between gap-1 pb-1.5 border-b border-rose-200/90">
              <span className="text-[10px] font-black uppercase tracking-wider text-rose-950 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                O que retirou
              </span>
              <span className="text-[9px] font-bold text-rose-900 bg-white px-2 py-0.5 rounded-full border border-rose-200 shadow-2xs">
                Retirado
              </span>
            </div>

            <div className="mt-2.5 bg-white p-3 rounded-xl border border-rose-100 space-y-1.5">
              <div className="flex items-center gap-1.5">
                <MinusCircle className="w-4 h-4 text-rose-600 shrink-0" />
                <h4 className="text-xs font-black text-rose-950">
                  Vítimas de Violência
                </h4>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Retirado o <strong>requisito exclusivo</strong> de acompanhamento psicológico de vítimas de violência (deixou de existir como item isolado, integrado à abordagem ampla de clima).
              </p>
            </div>
          </div>

          <div className="pt-2 border-t border-rose-200/80 text-[10px] font-semibold text-rose-800">
            Fim do requisito isolado
          </div>
        </div>

        {/* Bloco 4: Acompanhamento Psicológico (Azul -> Clicável Req 21 & Req 22) */}
        <div className="bg-blue-50/80 rounded-2xl p-3.5 border border-blue-200 flex flex-col justify-between space-y-2.5 shadow-2xs">
          <div>
            <div className="flex items-center justify-between gap-1 pb-1.5 border-b border-blue-200/90">
              <span className="text-[10px] font-black uppercase tracking-wider text-blue-950 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                Acomp. Psicológico
              </span>
              <span className="text-[9px] font-bold text-blue-900 bg-white px-2 py-0.5 rounded-full border border-blue-200 shadow-2xs">
                2 Requisitos
              </span>
            </div>

            <div className="mt-1.5 space-y-1.5">
              {/* Req 21 - Segundas Vítimas (Clicável) */}
              <div
                onClick={() => openReqByNum(21)}
                className="bg-white px-2.5 py-2 rounded-xl border border-blue-200 hover:border-blue-500 hover:shadow-xs cursor-pointer transition group"
                title="Clique para abrir detalhes do Requisito 21 (Segundas Vítimas)"
              >
                <div className="flex items-center justify-between">
                  <div className="text-[10.5px] font-bold text-[#16324F]">Segundas Vítimas</div>
                  <span className="text-[8.5px] font-mono font-bold bg-blue-100 text-blue-900 px-1.5 py-0.2 rounded border border-blue-300">
                    Req. 21
                  </span>
                </div>
                <p className="text-[9.5px] text-slate-600 leading-tight mt-0.5">
                  Acolhimento pós-evento adverso, cultura justa e debriefings.
                </p>
              </div>

              {/* Req 22 - Apoio Emocional & Mitigação de Agressões (Clicável) */}
              <div
                onClick={() => openReqByNum(22)}
                className="bg-white px-2.5 py-2 rounded-xl border border-blue-200 hover:border-blue-500 hover:shadow-xs cursor-pointer transition group"
                title="Clique para abrir detalhes do Requisito 22 (Apoio Emocional & Mitigação de Agressões)"
              >
                <div className="flex items-center justify-between">
                  <div className="text-[10.5px] font-bold text-[#16324F]">Suporte e Apoio Emocional</div>
                  <span className="text-[8.5px] font-mono font-bold bg-blue-100 text-blue-900 px-1.5 py-0.2 rounded border border-blue-300">
                    Req. 22
                  </span>
                </div>
                <p className="text-[9.5px] text-slate-600 leading-tight mt-0.5">
                  Fluxos de apoio, CNV, mitigação de agressões e canais de denúncia.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-blue-200/80 flex items-center justify-between text-[10px] font-bold text-blue-800">
            <span>Estrutura em 2 frentes</span>
            <span className="text-blue-950 underline text-[9px]">Clique p/ abrir Req. 21 / 22 →</span>
          </div>
        </div>
      </div>

      {/* Requisitos Estáveis (Neutro / Lista visual preservada da base) */}
      <div className="bg-[#F8FAFC] p-3 rounded-2xl border border-[#E2E8F0] shadow-2xs">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-black uppercase tracking-wider text-[#334155] flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-slate-400" />
            Requisitos Estáveis
          </span>
          <span className="text-[10px] font-bold text-[#64748B] bg-white px-2 py-0.5 rounded-full border border-[#CBD5E1]">
            Base Operacional Preservada (16 requisitos)
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {[
            'Dimensionamento',
            'Competências',
            'Recrutamento e Seleção',
            'Registro Profissional',
            'Padronização de Arquivos',
            'Programa de Integração',
            'LNTD',
            'Regimento Interno',
            'Educação Continuada',
            'Programa de Liderança',
            'Competência Liderança',
            'Gestão da Cultura',
            'Inovação ORIX',
            'Perfil Epidemiológico',
            'Situação de Catástrofe',
            'Programa de Reconhecimento',
          ].map((item) => (
            <span
              key={item}
              className="text-[10px] font-medium bg-white text-[#334155] px-2 py-0.5 rounded-md border border-[#E2E8F0]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Expanded Modal/Slide-over com Requisito, Orientação ONA e Sugestão de Evidência */}
      {selectedReq && (
        <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 z-50 animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-[#E2E8F0] flex items-center justify-between bg-[#F8FAFC]">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-1 rounded-md bg-blue-100 text-blue-900 font-mono font-black text-xs border border-blue-200">
                  NÍVEL {selectedReq.nivelOna} ONA
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-800 text-white font-mono font-bold text-xs">
                  REQUISITO Nº {selectedReq.numRequisito}
                </span>
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
