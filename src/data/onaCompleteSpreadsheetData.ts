export interface OnaRequirementSpreadsheetRow {
  id: number;
  nivelOna: 1 | 2 | 3;
  numRequisito: number;
  requisito: string;
  orientacaoOna: string;
  sugestaoEvidenciaOna: string;
  requisitoCore: 'SIM' | 'NÃO';
  transversal: 'SIM' | 'NÃO';
  referenciaNorma: string;
}

export const ONA_ALL_33_REQUIREMENTS: OnaRequirementSpreadsheetRow[] = [
  // ==========================================
  // NÍVEL 1 (22 REQUISITOS)
  // ==========================================
  {
    id: 1,
    nivelOna: 1,
    numRequisito: 1,
    requisito:
      'Estabelecer, implementar e manter um método para dimensionamento dos profissionais, gerindo o processo de modo a atender o perfil epidemiológico e as necessidades dos pacientes/clientes.',
    orientacaoOna:
      'O dimensionamento do quantitativo dos profissionais clínicos e não-clínicos deve estar alinhado a parâmetros técnicos oficiais aplicáveis, a fim de oferecer um serviço com qualidade e segurança, além de propiciar um ambiente de trabalho mais seguro. O dimensionamento dos profissionais clínicos deve levar em consideração o nível de cuidado e a criticidade da assistência prestada, já para os não clínicos, deve considerar o volume de atendimento, a produtividade, entre outros fatores. Além dos critérios técnicos e fórmulas de dimensionamento de pessoal, é fundamental realizar uma análise crítica dos macroprocessos de cada área, especialmente porque as interações de processos (exemplos: enfermagem x farmácia; faturamento x enfermagem, entre outros) interferem direta ou indiretamente nas atividades operacionais de cada setor e, consequentemente, na sua produtividade, podendo gerar uma necessidade maior ou menor de quadro de pessoal.',
    sugestaoEvidenciaOna:
      'Critérios utilizados para dimensionamento dos profissionais. Relação de profissionais atuantes na organização com descrição da jornada de trabalho. Escalas de trabalho. Monitoramento do dimensionamento. Ferramentas de avaliação de gravidade, dependência e complexidade do paciente. Fluxogramas de processos interdependentes.',
    requisitoCore: 'SIM',
    transversal: 'SIM',
    referenciaNorma: '01/01/2026',
  },
  {
    id: 2,
    nivelOna: 1,
    numRequisito: 2,
    requisito:
      'Oferecer sistematicamente treinamento e educação sobre segurança do paciente à força de trabalho e, quando aplicável, à força de trabalho dos fornecedores/terceiros que atuam diretamente nos processos da organização.',
    orientacaoOna:
      'Disseminar as práticas de segurança bem como as metas de segurança do paciente, a fim de garantir processos seguros em todas as etapas do atendimento ao cliente/paciente. No que tange ao escopo, inclui treinamentos nos protocolos de segurança do paciente estabelecidos e implementados pela organização, destinados aos públicos pertinentes, mas sem se restringir a eles. É importante considerar profissionais terceirizados que realizam assistência/procedimentos aos pacientes tais como instrumentadores cirúrgicos dos médicos (não contratadas pela instituição), doulas (conforme perfil), dentre outros.',
    sugestaoEvidenciaOna:
      'Documento comprobatório da capacitação; plano de treinamento, abrangendo temas, objetivos, públicos aos quais se destina e frequência.',
    requisitoCore: 'NÃO',
    transversal: 'SIM',
    referenciaNorma: '01/01/2026',
  },
  {
    id: 3,
    nivelOna: 1,
    numRequisito: 3,
    requisito:
      'Definir, atualizar e disseminar as competências conforme as responsabilidades e atribuições descritas para os cargos.',
    orientacaoOna:
      'Definir, atualizar e disseminar as competências conforme as responsabilidades e atribuições descritas para os cargos clínicos e não clínicos. Considerar as responsabilidades dos profissionais que fazem parte dos conselhos de classe alinhada às diretrizes desses conselhos e demais regulações. Garantir que todos os profissionais nomeados tenham as qualificações, licenças ou escopo profissional de prática, treinamento e competência necessários para as funções que desempenham e não atuem fora de seu escopo.',
    sugestaoEvidenciaOna:
      'Descrição das funções de todos os profissionais atuantes na instituição, considerando a equipe multidisciplinar, incluindo corpo clínico. Mapas de competências essenciais (da organização) e individuais ou de equipes de acordo com o tipo de trabalho. Canais de disseminação das descrições de cargos por competências para a totalidade dos profissionais envolvidos. Entrevistas com profissionais (com comprovação de ciência acerca das competências esperadas para o exercício da função). Evidência da capacitação de novos colaboradores com registro da ciência sobre sua função e descrição de cargo.',
    requisitoCore: 'SIM',
    transversal: 'SIM',
    referenciaNorma: '01/01/2026',
  },
  {
    id: 4,
    nivelOna: 1,
    numRequisito: 4,
    requisito:
      'Estabelecer e implementar um processo de recrutamento, seleção e desligamento dos profissionais alinhado às estratégias, à cultura e às competências essenciais e individuais.',
    orientacaoOna:
      'Consiste em estabelecer as etapas e os critérios para os processos de recrutamento, seleção e desligamento dos profissionais. O processo de recrutamento e seleção deve assegurar competências alinhadas às necessidades da organização e às especificidades dos cargos e definir os requisitos qualitativos/pessoais para o exercício da função. Devem ser adotadas e mantidas práticas de integração da diversidade e inclusão no processo de recrutamento e seleção.',
    sugestaoEvidenciaOna:
      'Procedimento descrito de recrutamento, seleção e desligamento. Perfil da função/descrição de cargo: documento com requisitos técnicos e comportamentais da vaga a ser preenchida. Registros das etapas realizadas: entrevistas de seleção, questionários, provas, análise de currículos e entrevista de desligamento. Análise dos resultados obtidos a partir das entrevistas de desligamento, indicadores do processo de recrutamento e seleção (tempo de fechamento de vaga, índice de sucesso no período de experiência), avaliação de desempenho, dentre outros.',
    requisitoCore: 'NÃO',
    transversal: 'SIM',
    referenciaNorma: '01/01/2026',
  },
  {
    id: 5,
    nivelOna: 1,
    numRequisito: 5,
    requisito:
      'Estabelecer e implementar um processo de cadastro, admissão e atualização periódica das qualificações dos profissionais.',
    orientacaoOna:
      'A organização deve estabelecer e implementar um processo de cadastro, admissão e atualização periódica das qualificações dos profissionais. Esse processo deve abranger os profissionais clínicos e não clínicos.',
    sugestaoEvidenciaOna:
      'Procedimento descrito sobre o cadastro e admissão de novos profissionais atuantes na instituição, considerando a equipe multidisciplinar, incluindo o corpo clínico. Relação atualizada de profissionais contratados por categoria/especialidade. Calendário para as revisões documentais de acordo com a periodicidade estabelecida pelos conselhos de classe, quando aplicável. Arquivo das qualificações dos profissionais.',
    requisitoCore: 'NÃO',
    transversal: 'NÃO',
    referenciaNorma: '01/01/2026',
  },
  {
    id: 6,
    nivelOna: 1,
    numRequisito: 6,
    requisito:
      'Padronizar e manter arquivos pessoais dos profissionais atualizados garantindo a segurança e confidencialidade das informações.',
    orientacaoOna:
      'Os arquivos pessoais dos profissionais têm o intuito de ser um banco de dados seguro e confidencial, organizado como um sistema de armazenamento e acumulação de dados devidamente codificados e disponíveis para o processamento e obtenção de informações, que englobam desde os dados e informações pessoais, os registros de admissão e o progresso dos profissionais dentro da instituição de saúde. Se for um processo informatizado, realizado por meio de um software, pode integrar um conjunto de vários arquivos interativos, relacionados logicamente e organizados de forma a facilitar o acesso aos dados e eliminar a redundância. É importante considerar a segurança do acesso, armazenamento e disponibilização dos dados considerados sensíveis. Também deve ser considerado o controle das atualizações abrangendo capacitações, certificações, treinamentos obrigatórios e registros nos conselhos de classe, quando aplicável.',
    sugestaoEvidenciaOna:
      'Processo descrito e evidenciado para coleta e guarda segura dos documentos e dados dos profissionais atuantes na instituição, considerando a equipe multidisciplinar, incluindo o corpo clínico. Arquivo eletrônico ou físico com os dados e documentos pessoais dos profissionais. Prontuário individual do profissional devidamente atualizado e com a garantia da segurança dos dados. Descrição do método de atualização dos dados de forma periódica.',
    requisitoCore: 'NÃO',
    transversal: 'NÃO',
    referenciaNorma: '01/01/2026',
  },
  {
    id: 7,
    nivelOna: 1,
    numRequisito: 7,
    requisito:
      'Estabelecer e implementar um programa de integração de novos profissionais para o exercício de suas funções, alinhado à cultura organizacional.',
    orientacaoOna:
      'A organização deve estabelecer e implementar um programa de integração de novos profissionais, clínicos e não clínicos, alinhado à cultura organizacional e vinculado aos principais comportamentos que favoreçam a promoção da cultura de qualidade e segurança. Os profissionais devem ser orientados sobre a organização, setor para o qual foram contratados e responsabilidades inerentes aos cargos.',
    sugestaoEvidenciaOna:
      'Programa de integração abordando aspectos da cultura integrado à jornada do paciente/cliente e do profissional, realizado para todos os profissionais atuantes na instituição, considerando a equipe multidisciplinar, incluindo o corpo clínico. Roteiro específico de treinamento técnico no setor onde irá exercer a sua função. Lista de presença do treinamento introdutório. Registro formal de feedback no período de experiência.',
    requisitoCore: 'NÃO',
    transversal: 'SIM',
    referenciaNorma: '01/01/2026',
  },
  {
    id: 8,
    nivelOna: 1,
    numRequisito: 8,
    requisito:
      'Estabelecer, implementar e manter um programa de saúde e segurança ocupacional, incluindo o mapeamento dos riscos psicossociais.',
    orientacaoOna:
      'A organização deve possuir um programa que vise à identificação, eliminação ou mitigação dos riscos relacionados à saúde ocupacional dos profissionais, bem como os riscos psicossociais. Devem ser realizados diagnóstico, análise técnica e plano de ação de prevenção ou mitigação dos riscos psicossociais conforme legislação pertinente. Para tal, deve demonstrar como promove e executa de forma integrada e complementar, as diversas iniciativas de saúde e segurança ocupacional previstas em regulamentos e legislações, bem como as iniciativas próprias. A saúde ocupacional deve abranger aspectos relativos à ergonomia, à saúde mental e à saúde emocional dos profissionais. Assegurar condições de trabalho seguras e práticas de proteção adequadas aos profissionais, considerando os diferentes contextos de atuação. Na assistência social, isso inclui medidas como procedimentos de segurança para trabalhadores solitários, garantia de confidencialidade dos dados de contato pessoal dos funcionários e manutenção de limites profissionais éticos e seguros. Nos serviços de saúde, por exemplo, abrange a vacinação obrigatória para funcionários, o fornecimento e uso adequado de equipamentos de proteção individual (EPI), além da prevenção de lesões por movimentação manual e acidentes com materiais perfurocortantes, como agulhas. Já nos serviços laboratoriais, por exemplo, compreende a proteção contra patógenos e produtos químicos perigosos, bem como o fornecimento de equipamentos de segurança específicos, incluindo EPI apropriado. Essas medidas refletem o compromisso institucional com a segurança, a saúde ocupacional e a integridade física e psicológica das equipes, elementos essenciais para a qualidade e a continuidade do cuidado. Promover ativamente o bem-estar e a segurança psicológica da força de trabalho, criando um ambiente em que os profissionais se sintam fisicamente seguros, emocionalmente respeitados e apoiados em seu desenvolvimento pessoal e profissional. O bem-estar no trabalho envolve o equilíbrio entre saúde física, mental e emocional, abrangendo fatores como satisfação profissional, qualidade de vida, gestão do estresse e harmonia entre vida pessoal e laboral. Já a segurança psicológica refere-se à existência de uma cultura organizacional em que as pessoas se sintam à vontade para se expressar, fazer perguntas, propor ideias, reconhecer erros e levantar preocupações sem medo de julgamento ou retaliação. Para sustentar esse ambiente saudável, a organização pode adotar ações como oferta de serviços de saúde ocupacional, ambientes promotores da saúde (com alimentação equilibrada e condições ergonômicas adequadas), opções de trabalho flexível, apoio ao gerenciamento do estresse, programas de engajamento e escuta ativa, além de oportunidades de aprendizado e crescimento contínuo. Essas medidas reforçam uma cultura de cuidado, confiança e pertencimento, fundamentais para o desempenho sustentável e a qualidade da assistência prestada.',
    sugestaoEvidenciaOna:
      'Descrição das iniciativas que compõem o Programa de Saúde e Segurança Ocupacional. Execução das ações previstas em: PGR (Programa de Gerenciamento de Riscos), PCMSO (Programa de Controle Médico e Saúde Ocupacional), ASO (Atestado de Saúde Ocupacional/Perfil Epidemiológico), AEP (Análise Ergonômica Preliminar), AET (Análise Ergonômica do Trabalho), e demais programas legais obrigatórios. Programa de Qualidade de Vida. CIPA (Comissão Interna de Prevenção de Acidentes e Assédio), atas de reunião, manifestações dos profissionais, ações implantadas. LTCAT (Laudo Técnico das Condições do Ambiente de Trabalho). Registros de campanhas de saúde ocupacional, ações de promoção da saúde mental e ergonomia. Planos de ação derivados de análises de acidentes.',
    requisitoCore: 'SIM',
    transversal: 'NÃO',
    referenciaNorma: '01/01/2026',
  },
  {
    id: 9,
    nivelOna: 1,
    numRequisito: 9,
    requisito:
      'Identificar e mapear as necessidades de capacitação e desenvolvimento, considerando a estratégia organizacional, a cultura, as competências e as necessidades dos profissionais para o exercício das funções, responsabilidades e atribuições específicas.',
    orientacaoOna:
      'A organização deve definir as necessidades de educação e treinamento, fundamentadas em informações gerenciais e em consonância com a cultura, objetivos, necessidades organizacionais, desempenho individual e formação de sucessores, principalmente para posições-chave da organização. Outros fatores externos (exemplos: mudanças no mercado, tecnologia, recursos digitais como inteligência artificial, telessaúde, realidade virtual, inovações e requisitos dos clientes e de outras partes interessadas) também podem influenciar a definição dessas necessidades. O objetivo principal é identificar as lacunas entre as competências existentes e as requeridas a cada atividade que afetam a qualidade e segurança dos serviços. Devem ser inseridos todos os profissionais atuantes na instituição, considerando a equipe multidisciplinar, incluindo o corpo clínico. Também deve ser considerada a capacitação das equipes quanto à linguística dos públicos internos e externos, bem como técnicas e métodos para comunicação dos pontos de diversidade.',
    sugestaoEvidenciaOna:
      'Resultados de avaliações de desempenho, devolutivas de gestores e autoavaliações, identificando áreas de melhoria. Relatórios de indicadores de qualidade e segurança dos serviços, como taxas de erros ou falhas, que podem indicar necessidades de treinamento em áreas específicas. Inventário de competências da equipe multidisciplinar, incluindo o corpo clínico, para identificar competências existentes e as que precisam ser desenvolvidas. Resultados de pesquisas de clima organizacional, identificando áreas que exigem maior capacitação ou mudanças de comportamento, com base na percepção dos colaboradores sobre as necessidades de treinamento. Análises de novas tecnologias (exemplos: inteligência artificial, realidade virtual) e como sua integração nas operações da organização exige atualizações no treinamento. Relatórios de análise da jornada e da experiência do paciente utilizados para ajustar conteúdos e prioridades educacionais.',
    requisitoCore: 'NÃO',
    transversal: 'SIM',
    referenciaNorma: '01/01/2026',
  },
  {
    id: 10,
    nivelOna: 1,
    numRequisito: 10,
    requisito:
      'Estabelecer e disseminar regimento documentado dos profissionais regidos por Conselhos de Classe.',
    orientacaoOna:
      'A organização deve estabelecer e disseminar regimento documentado dos profissionais regidos por Conselhos de Classe.',
    sugestaoEvidenciaOna:
      'Documento descrito e com evidência de conhecimento pelos profissionais, conforme categoria profissional à qual se destina (exemplos: Regimento do Corpo Clínico, Regimento do Corpo Enfermagem, entre outros).',
    requisitoCore: 'NÃO',
    transversal: 'NÃO',
    referenciaNorma: '01/01/2026',
  },
  {
    id: 11,
    nivelOna: 1,
    numRequisito: 11,
    requisito:
      'Realizar programas de educação continuada, conforme as necessidades identificadas para a capacitação e desenvolvimento dos profissionais.',
    orientacaoOna:
      'A organização deve assegurar que todos os profissionais atuantes na instituição, considerando a equipe multidisciplinar, incluindo o corpo clínico, recebam educação e treinamento contínuos, alinhados às necessidades identificadas. São objetivos do programa de educação continuada: Apoiar os profissionais para compreenderem e desempenharem as suas funções e responsabilidades. Disseminar e reforçar os padrões e diretrizes institucionais. Criar oportunidades de atualização profissional. Fortalecer os processos de segurança e qualidade, com foco em melhores desempenhos. Formar sucessores especialmente de posições-chave. Garantir que todos os profissionais realizem educação contínua (cursos e sessões de treinamento) para manter o nível exigido de desempenho e tenham oportunidades de desenvolver e ampliar suas habilidades.',
    sugestaoEvidenciaOna:
      'Programa formalizado de educação continuada abrangendo todas as funções existentes, considerando a equipe multidisciplinar, incluindo corpo clínico. Cronograma de treinamentos. Status do cronograma dos treinamentos. Listas de treinamento (ou outra sistemática que comprove a realização do programa). Apresentação do conteúdo (via documento ou sistema de educação à distância). Programas de incentivo ao autodesenvolvimento.',
    requisitoCore: 'NÃO',
    transversal: 'NÃO',
    referenciaNorma: '01/01/2026',
  },
  {
    id: 12,
    nivelOna: 1,
    numRequisito: 12,
    requisito:
      'Definir e implementar um programa institucional de desenvolvimento de lideranças considerando as competências, a estratégia organizacional, a cultura e as necessidades dos profissionais para o exercício das funções.',
    orientacaoOna:
      'A organização deve assegurar que as lideranças possuam conhecimentos e habilidades alinhadas às necessidades da organização. Por ser a área da saúde muito complexa, tanto no que se refere às diversas atividades bem como por estar ligada às pessoas e suas emoções, a liderança em saúde precisa ser frequentemente desenvolvida para lidar com esse cenário que exige inteligência emocional. Por ser uma área de serviços, onde há a relação direta com o cliente e sua satisfação, a liderança em saúde precisa estimular, engajar e apoiar a equipe e para isso, precisa apresentar atributos como: clareza de objetivos, reconhecimento dos fatores motivacionais na visão organizacional, comunicação aberta e constante, processo decisório descentralizado, estabelecimento de vínculos relacionais e inovação.',
    sugestaoEvidenciaOna:
      'Programa de desenvolvimento de lideranças descrito e implementado. Programa estruturado de sucessão para posições gerenciais em todos os níveis. Registros dos treinamentos e cursos fornecidos.',
    requisitoCore: 'SIM',
    transversal: 'NÃO',
    referenciaNorma: '01/01/2026',
  },
  {
    id: 13,
    nivelOna: 1,
    numRequisito: 13,
    requisito:
      'Definir papéis, responsabilidades, perfil e competências para o exercício eficaz da liderança.',
    orientacaoOna:
      'A organização deve ter definição clara dos papéis, das responsabilidades, do perfil e das competências da liderança em todos os níveis organizacionais para garantir o exercício eficaz da liderança. Por um lado, a gestão precisa manter líderes habilidosos e preparados que se sintam responsáveis por alcançar os resultados por meio das pessoas e em consonância com os valores organizacionais. Por outro, líderes e potenciais líderes precisam conhecer e desenvolver competências técnicas, de gestão e um repertório de comportamentos que no seu contexto de atuação promovam a motivação e o engajamento das pessoas, atingimento de objetivos, geração de resultados e o desenvolvimento da cultura da qualidade e da segurança. Devem ser consideradas as habilidades de liderança para gestão assistencial de acordo com o processo envolvido.',
    sugestaoEvidenciaOna:
      'Descritivo do perfil técnico e comportamental da liderança em todos os níveis de profissionais atuantes na instituição, considerando a equipe multidisciplinar, incluindo o corpo clínico. Rol de competências específicas da liderança que podem estar expressas nas avaliações de desempenho, por exemplo. Descrições de cargos. Registros que comprovem a implementação de ações para o desenvolvimento das competências esperadas dos líderes da instituição. Desenho da estrutura organizacional com definição de níveis de alçada, de decisão e interfaces, de acordo com a posição definida na hierarquia.',
    requisitoCore: 'NÃO',
    transversal: 'NÃO',
    referenciaNorma: '01/01/2026',
  },
  {
    id: 14,
    nivelOna: 1,
    numRequisito: 14,
    requisito:
      'Realizar processo estruturado de gestão da cultura, identificando e monitorando os aspectos que favorecem a qualidade e a segurança.',
    orientacaoOna:
      'A organização deve definir, implementar e monitorar um processo estruturado de gestão da cultura organizacional, assegurando que esta esteja alinhada aos princípios institucionais e aos aspectos que favorecem a qualidade e a segurança. A cultura organizacional é definida como conjunto de pressupostos básicos compartilhados e aprendidos por um grupo por meio de artefatos, crenças e valores expostos e pressupostos inconscientes. A cultura de Qualidade e Segurança deve se vincular à ideologia institucional: Propósito, Missão, Visão e Valores. Essas diretrizes geram orientações a serem incorporadas nos processos para direcionar o comportamento das pessoas, assim como desenvolver as competências individuais. A cultura organizacional deve refletir os comportamentos dos profissionais e, portanto, precisa compor tecnicamente o perfil exigido de cada cargo a partir das competências organizacionais, baseadas na missão e valores da instituição. Além disso, as competências que espelham a cultura devem ser utilizadas para medir e avaliar a aderência dos profissionais em relação à própria cultura organizacional.',
    sugestaoEvidenciaOna:
      'Os valores da organização estão incorporados nos processos, desde o programa de integração. Por exemplo: se a segurança for um valor, esse conteúdo deve estar explícito no programa de integração. Esse mesmo valor deve ser contemplado nos planos de treinamento, no processo de seleção e na motivação para desligamento. Aplicação de Questionários sobre cultura de segurança. Competências Organizacionais baseadas na missão e valores da instituição, explicitadas no Perfil de cada cargo dentro da organização. Critérios de seleção e avaliações de desempenho para todos os cargos baseados nas competências organizacionais que refletem a cultura da instituição.',
    requisitoCore: 'NÃO',
    transversal: 'NÃO',
    referenciaNorma: '01/01/2026',
  },
  {
    id: 15,
    nivelOna: 1,
    numRequisito: 15,
    requisito:
      'Promover e desenvolver a cultura da aprendizagem em equipe, o compartilhamento de informações, as inovações e as melhores práticas.',
    orientacaoOna:
      'A cultura de aprendizagem demonstra que a organização valoriza e oportuniza o desenvolvimento contínuo das equipes, por meio de treinamentos, cursos e experiências evidenciadas de sucesso, com base nas melhores práticas internas e/ou externas. A organização deve promover e sustentar uma cultura de aprendizagem que demonstre o compromisso institucional com o desenvolvimento contínuo das equipes. Essa cultura valoriza e oportuniza o aprimoramento profissional por meio de treinamentos, cursos e experiências evidenciadas de sucesso, com base nas melhores práticas internas e/ou externas, promovendo um ambiente de construção e partilha constante do conhecimento adquirido por seus profissionais. A aprendizagem nas instituições de saúde envolve a ciência, a informática, os incentivos e a cultura alinhados para a melhoria contínua e inovação, com as melhores práticas incorporadas ao processo de atendimento refletidos na experiência de cuidado.',
    sugestaoEvidenciaOna:
      'Processo formalizado que permita aos profissionais contribuir com sugestões de melhorias, novas ideias, para a implementação de inovações em processos e serviços da instituição. Estrutura formal que dissemine os aprendizados individuais ou coletivos, para os demais profissionais da instituição.',
    requisitoCore: 'NÃO',
    transversal: 'NÃO',
    referenciaNorma: '01/01/2026',
  },
  {
    id: 16,
    nivelOna: 1,
    numRequisito: 16,
    requisito:
      'Identificar o perfil epidemiológico dos profissionais e traçar estratégias a partir dos resultados.',
    orientacaoOna:
      'A organização deve identificar o perfil epidemiológico (ou perfil de saúde) dos profissionais por meio de estudo estruturado, realizado para conhecer o quadro de saúde da equipe, suas principais patologias, necessidades e riscos envolvidos. A partir do levantamento desse perfil, é possível traçar estratégias eficazes para minimizar os impactos, prevenir e tratar doenças.',
    sugestaoEvidenciaOna:
      'Triagem inicial de saúde no exame admissional. Aplicação de questionários em meio físico ou softwares que auxiliam na identificação do perfil de saúde dos profissionais. Levantamento das informações obtidas sobre a situação de saúde dos profissionais. Análise das informações relativas ao perfil. Estudo dos dados para identificação das necessidades de saúde dos profissionais. Análise dos principais motivos de absenteísmo entre os profissionais (prevalência ou gravidade).',
    requisitoCore: 'NÃO',
    transversal: 'NÃO',
    referenciaNorma: '01/01/2026',
  },
  {
    id: 17,
    nivelOna: 1,
    numRequisito: 17,
    requisito:
      'Estabelecer e implementar um plano de prevenção de riscos ocupacionais, psicossociais, considerando a saúde integral dos profissionais.',
    orientacaoOna:
      'A organização deve possuir estratégias para a redução dos riscos ocupacionais (químicos, biológicos, físicos, ergonômicos e psicossociais), com ações de prevenção, mitigação, promoção da saúde integral e acompanhamento da saúde física e mental, articuladas aos Programas de Prevenção e demais instrumentos legais aplicáveis.',
    sugestaoEvidenciaOna:
      'Registros de fornecimento, uso e controle de EPIs (Equipamentos de Proteção Individual), com verificação da validade dos CAs (Certificados de Aprovação); relatórios e checklists de visitas técnicas realizadas pela equipe de Segurança do Trabalho; análises preliminares de risco documentadas para atividades críticas; programas que abordem temas relacionados à saúde física e mental dos profissionais, e aos serviços de apoio operacional que facilitam o seu dia a dia. Por exemplo: programas de bons hábitos alimentares, promoção da saúde integral, segurança doméstica, condução segura e outros.',
    requisitoCore: 'SIM',
    transversal: 'NÃO',
    referenciaNorma: '01/01/2026',
  },
  {
    id: 18,
    nivelOna: 1,
    numRequisito: 18,
    requisito:
      'Capacitar os profissionais para atendimento às situações de catástrofes internas e externas com maiores riscos de ocorrência segundo a natureza da instituição e a região em que se localiza.',
    orientacaoOna:
      'A organização deve assegurar a preparação e capacitação dos profissionais para situações de catástrofes. As contingências institucionais devem ser disseminadas e treinadas com foco na minimização de incidentes e na condução e execução dos planos e fluxos preestabelecidos.',
    sugestaoEvidenciaOna:
      'Registro das atividades de disseminação das informações sobre os planos para o enfrentamento de catástrofes e dos treinamentos realizados. Relatórios ou atas de simulações de catástrofes internas e externas, com análise de desempenho e identificação de oportunidades de melhoria.',
    requisitoCore: 'NÃO',
    transversal: 'SIM',
    referenciaNorma: '01/01/2026',
  },
  {
    id: 19,
    nivelOna: 1,
    numRequisito: 19,
    requisito:
      'Estabelecer e manter um programa de reconhecimento e valorização profissional.',
    orientacaoOna:
      'A organização deve possuir um programa de reconhecimento e valorização que contemple a definição de critérios de avaliação alinhados à cultura com o objetivo de reconhecer e valorizar profissionais e equipes. O reconhecimento pode se dar por meio de um plano de cargos e salários estruturado, ascensão na carreira, promoções, capacitação técnico-comportamental, valorização de times e equipes dentre outros.',
    sugestaoEvidenciaOna:
      'Programa de reconhecimento e valorização. Evidências práticas de implantação das ações definidas pela organização. Registro de ações realizadas (eventos, comunicações institucionais, campanhas internas); Evidências de ascensão na carreira ou promoções vinculadas ao programa. Plano de cargos, salários e carreira compatível com a realidade institucional. Registro das avaliações de reconhecimento pelo desempenho positivo dos colaboradores. Pesquisas de clima organizacional comparativas que demonstrem resultados do aumento ou manutenção positiva dos níveis de satisfação dos profissionais.',
    requisitoCore: 'NÃO',
    transversal: 'SIM',
    referenciaNorma: '01/01/2026',
  },
  {
    id: 20,
    nivelOna: 1,
    numRequisito: 20,
    requisito:
      'Estabelecer e manter ativo um canal de comunicação/manifestação dos profissionais.',
    orientacaoOna:
      'A organização deve assegurar um processo de coleta e tratativa das manifestações dos profissionais que inclua um canal de comunicação, bem como um ambiente no qual eles se sintam seguros para expressar sem medo de retaliação ou punição.',
    sugestaoEvidenciaOna:
      'Canal de comunicação instituído e divulgado, que garanta a confidencialidade (alinhado ao Plano de Comunicação Institucional). Registros de denúncias, sugestões e reclamações dos profissionais e planos de ação desenvolvidos.',
    requisitoCore: 'NÃO',
    transversal: 'NÃO',
    referenciaNorma: '01/01/2026',
  },
  {
    id: 21,
    nivelOna: 1,
    numRequisito: 21,
    requisito:
      'Estabelecer e implementar processos de acompanhamento para profissionais de saúde considerados segundas vítimas decorrentes de eventos adversos.',
    orientacaoOna:
      'Devem reconhecer, acolher e oferecer apoio estruturado e contínuo às equipes envolvidas em incidentes de segurança do paciente e/ou do usuário do serviço que se tornam segunda vítima em decorrência de eventos adversos, reconhecendo o impacto emocional, ético, técnico, institucional e psicológico desses eventos e promovendo um ambiente de aprendizado e não de culpa. A instituição deve abordar e compreender a importância de uma cultura justa e de aprendizado organizacional, que reconhece que a maioria dos incidentes decorre de falhas sistêmicas, e não de negligência individual. O objetivo é proteger o bem-estar emocional dos profissionais, fortalecer a confiança na cultura de segurança e garantir que os aprendizados resultem em melhorias nos processos de cuidado centrado no paciente. O conceito de “segunda vítima” é central neste contexto: refere-se ao sofrimento psicológico, moral e profissional vivenciado pelos trabalhadores de saúde envolvidos em um incidente que causou danos a um paciente. Esse sofrimento pode incluir culpa, ansiedade, medo, perda de confiança profissional e isolamento. O termo “segunda vítima” é utilizado para descrever o impacto dos eventos adversos em todos os profissionais de saúde, independentemente de serem assistencial ou não, terceirizado ou contratado. O dano emocional (vergonha, raiva, depressão) ou sofrimento (remorso, ansiedade, sensação de fracasso, perda de confiança) podem ter um impacto na qualidade e segurança do atendimento ao paciente, se as organizações de saúde não reconhecerem e fornecerem suporte para o profissional. Por isso, convém que a estratégia de apoio considere, por exemplo, educação, avaliação, aconselhamento e acompanhamento para o profissional que é a segunda vítima de eventos adversos. Em geral, o apoio emocional e o apoio dos pares estão entre as estratégias mais solicitadas e úteis. Adicionalmente, pode ser necessário tanto a ajuda psicológica quanto a assistência jurídica. A organização também pode adotar diretrizes para apoio imediato e pós-incidente, com análise pós-evento (debriefings) estruturados e acompanhamento emocional; garantir uma abordagem justa (just culture) que favoreça o relato aberto e a ausência de punição indevida, permitindo que os profissionais se manifestem sem medo de retaliação; disponibilizar apoio psicológico e institucional às equipes envolvidas, reconhecendo que cuidar de quem cuida é parte essencial da segurança do paciente; promover reflexão coletiva e aprendizado organizacional, envolvendo a equipe na análise das causas e na construção de medidas preventivas; integrar esse apoio aos programas de segurança do paciente, qualidade de vida no trabalho e educação permanente.',
    sugestaoEvidenciaOna:
      'Fluxo de atendimento às segundas vítimas. Registros de atendimento e acompanhamento aos profissionais de saúde considerados segundas vítimas. Diretriz de apoio às equipes envolvidas em incidentes (conceito de segunda vítima); registros de análise pós-evento (debriefings) e acompanhamento pós-incidente; relatórios ou atas de reuniões que evidenciem abordagem justa e aprendizado sistêmico; Programas ou ações de apoio psicológico, escuta ativa e reabilitação emocional dos profissionais; evidências de capacitação sobre cultura justa e segurança psicológica nas equipes assistenciais e de gestão.',
    requisitoCore: 'NÃO',
    transversal: 'NÃO',
    referenciaNorma: '01/01/2026',
  },
  {
    id: 22,
    nivelOna: 1,
    numRequisito: 22,
    requisito:
      'Estabelecer fluxos de suporte e apoio emocional para os profissionais de saúde.',
    orientacaoOna:
      'A organização deve identificar e definir fluxo de atendimentos que ofereçam apoio emocional aos profissionais de saúde conforme a necessidade. Deve também promover ações de Identificação e mitigação de riscos relacionados à violência e agressão (física, verbal, moral ou psicológica) contra os profissionais.',
    sugestaoEvidenciaOna:
      'Fluxo de suporte e apoio emocional para profissionais de saúde. Treinamentos de comunicação não violenta e gestão de conflitos. Canais de denúncia de agressões garantindo a confidencialidade.',
    requisitoCore: 'NÃO',
    transversal: 'NÃO',
    referenciaNorma: '01/01/2026',
  },

  // ==========================================
  // NÍVEL 2 (7 REQUISITOS)
  // ==========================================
  {
    id: 23,
    nivelOna: 2,
    numRequisito: 1,
    requisito:
      'Acompanhar e avaliar os resultados das ações de gestão de pessoas, de acordo com as estratégias definidas, promovendo ações de melhorias.',
    orientacaoOna:
      'As organizações devem acompanhar e avaliar os indicadores de gestão de pessoas, instrumentos essenciais para medir a performance dos processos de acordo com os objetivos organizacionais. A avaliação dos resultados permite a análise da efetividade das projeções corporativas e a comparação dos resultados obtidos com os planejados. Exemplos de indicadores a serem considerados: rotatividade ou turnover, absenteísmo, desempenho, avaliação da aprendizagem, número de pessoas, indicadores de recrutamento e seleção (% vagas no prazo), indicadores organizacionais ligados ao planejamento estratégico, indicadores financeiros (custo da folha, custo per capita dos benefícios), satisfação dos profissionais, análise da competitividade salarial, retenção de talentos, índice de reclamações trabalhistas, tempo médio de empresa, produtividade, horas extras, índice de reclamação dos clientes entre outros. Gerenciar sistematicamente os dados relacionados às licenças médicas, afastamentos e desligamentos de funcionários, utilizando essas informações para identificar tendências, causas e oportunidades de melhoria voltadas ao bem-estar, retenção e sustentabilidade da força de trabalho. Essa análise deve permitir que a instituição compreenda os fatores que impactam a saúde física, mental e ocupacional dos profissionais, subsidiando decisões gerenciais baseadas em evidências e ações preventivas. Os dados podem incluir taxas de absenteísmo por doença, aposentadorias por motivos de saúde, desligamentos voluntários e outros motivos não relacionados à saúde, com comparações temporais e por setor. A finalidade é transformar essas informações em aprendizado organizacional, orientando mudanças nas práticas de gestão, condições de trabalho e políticas de apoio ao colaborador, de modo a fortalecer a cultura de cuidado com quem cuida e garantir a continuidade e qualidade dos serviços prestados.',
    sugestaoEvidenciaOna:
      'Indicadores relacionados. Análises dos indicadores com identificação de oportunidades de melhoria. Históricos de evolução dos indicadores em consonância com os objetivos estratégicos definidos. Atas de reunião de análise crítica e proposição de ações. Planos de ação contendo as oportunidades de melhoria.',
    requisitoCore: 'NÃO',
    transversal: 'NÃO',
    referenciaNorma: '01/01/2026',
  },
  {
    id: 24,
    nivelOna: 2,
    numRequisito: 2,
    requisito:
      'Avaliar o desempenho das pessoas por meio de um instrumento objetivo, alinhado às competências essenciais da organização e específicas para a função exercida.',
    orientacaoOna:
      'A organização deve utilizar um processo estruturado para avaliação das habilidades, conhecimentos, competências e comportamentos dos profissionais. Essa avaliação permite definir treinamentos, assegurar que os profissionais assumam com qualidade e segurança os seus papéis e responsabilidades, além embasar decisões quanto a relacionadas à promoção, bonificação e desligamento. Deve-se também definir um método de avaliação de desempenho dos terceiros, considerando a equipe multidisciplinar, incluindo o corpo clínico e alinhado à gestão de contrato. Avaliar regularmente a competência contínua e o desempenho contínuo de todos os profissionais, de acordo com suas descrições de cargos e escopo de prática.',
    sugestaoEvidenciaOna:
      'Método formalizado para avaliação de desempenho, integrado aos planos de desenvolvimento individuais e ao plano de desenvolvimento e treinamento da organização. Cronograma de avaliações. Avaliação documentada do desempenho (ao menos uma ao ano). Registros das reuniões de feedback pelo gestor.',
    requisitoCore: 'SIM',
    transversal: 'SIM',
    referenciaNorma: '01/01/2026',
  },
  {
    id: 25,
    nivelOna: 2,
    numRequisito: 3,
    requisito:
      'Promover ações voltadas para o cuidado centrado na pessoa, melhorando a qualidade de vida dos profissionais, de acordo com suas necessidades de promoção à saúde, prevenção de doenças e perfil epidemiológico institucional.',
    orientacaoOna:
      'A organização deve promover ações voltadas à qualidade de vida no trabalho, com foco na prevenção do estresse, do cansaço físico e mental. Essas ações devem estar alinhadas ao perfil epidemiológico institucional e às necessidades específicas dos profissionais, contribuindo para o bem-estar integral e a sustentabilidade das equipes.',
    sugestaoEvidenciaOna:
      'Programa de Qualidade de Vida formalizado que contemple ações corretivas e preventivas dos diversos aspectos relacionados ao bem-estar dos profissionais. Evidência de ações voltadas à qualidade de vida. Comprovação de que as ações implementadas para promover uma melhor qualidade de vida no trabalho estão alinhadas às necessidades dos profissionais da instituição.',
    requisitoCore: 'SIM',
    transversal: 'NÃO',
    referenciaNorma: '01/01/2026',
  },
  {
    id: 26,
    nivelOna: 2,
    numRequisito: 4,
    requisito:
      'Monitorar os resultados dos programas de prevenção de riscos ocupacionais e da qualidade de vida e implementar melhorias, com o objetivo de promover e preservar a saúde dos profissionais.',
    orientacaoOna:
      'A organização deve gerir os riscos ocupacionais e implementar ações para mitigar sua ocorrência bem como promover melhorias na qualidade de vida no trabalho. A qualidade de vida no trabalho envolve percepções dos profissionais sobre: condições seguras de trabalho, remuneração, competência da liderança, possibilidade de crescimento intelectual e profissional, sentimento de justiça, confiança na empresa, expectativa de promoção, entre outros. Inclui ainda o estado psicológico, a saúde física, as crenças pessoais, as relações sociais do profissional e sua interação com o ambiente.',
    sugestaoEvidenciaOna:
      'Identificação, classificação, categorização e definição de medidas de controle dos riscos ocupacionais. Análises e ações voltadas à manutenção ou melhoria das medidas estratégicas de tratamento dos riscos. Registros de capacitações, treinamentos e atualizações realizadas com os profissionais. Gestão dos indicadores de absenteísmo e de acidentes de trabalho, incluindo análise crítica e evidência de melhorias implementadas.',
    requisitoCore: 'NÃO',
    transversal: 'SIM',
    referenciaNorma: '01/01/2026',
  },
  {
    id: 27,
    nivelOna: 2,
    numRequisito: 5,
    requisito:
      'Avaliar os resultados do processo de integração e acompanhamento de novos profissionais na organização, promovendo ações.',
    orientacaoOna:
      'A organização deve possuir um processo de integração que direcione as equipes para o alcance dos objetivos institucionais por meio da adaptação efetiva do profissional à cultura e aos processos da organização. Coletar dados e produzir informações estruturadas é essencial para compreender a eficiência do processo, seus gargalos e oportunidades de melhoria.',
    sugestaoEvidenciaOna:
      'Entrevistas aos profissionais que passaram pelo período de experiência. Registro formal de feedback no período de experiência e evidências documentadas de evolução nos aspectos identificados com oportunidades de melhoria.',
    requisitoCore: 'NÃO',
    transversal: 'NÃO',
    referenciaNorma: '01/01/2026',
  },
  {
    id: 28,
    nivelOna: 2,
    numRequisito: 6,
    requisito:
      'Gerenciar processos formais, seguros e confidenciais para a investigação e resolução de problemas no local de trabalho levantados pelos profissionais.',
    orientacaoOna:
      'Esses processos devem assegurar que todas as manifestações, queixas ou denúncias sejam tratadas de forma imparcial, tempestiva e protegida de retaliação, promovendo um ambiente de confiança, transparência e respeito mútuo. Os problemas no local de trabalho podem abranger uma ampla variedade de situações, como práticas de gestão inadequadas, percepções de injustiça na aplicação de diretrizes internas, falhas de comunicação, preocupações com segurança, confidencialidade, assédio, discriminação ou corrupção organizacional. É essencial que a organização disponha de mecanismos claros de escuta, registro e encaminhamento dessas ocorrências, garantindo o anonimato e a proteção contrarretaliações aos profissionais que as reportam, conhecidos como denunciantes. Os processos devem ser conduzidos de maneira justa, ética e alinhada à legislação nacional ou regional vigente sobre proteção a denunciantes. Alinhar esta demanda com o canal institucional de denúncias e procedimentos documentados para análise, deliberação e retorno aos envolvidos, assegurando que as situações identificadas resultem em ações corretivas, de aprendizagem e de melhoria organizacional. A adoção de uma cultura justa fortalece a confiança entre gestores e equipes, incentiva o relato precoce de problemas e contribui para a prevenção de riscos ocupacionais, éticos e de segurança do paciente.',
    sugestaoEvidenciaOna:
      'Procedimento formal de gestão de denúncias e queixas internas. Registros de recebimento, análise e resolução de manifestações. Evidências de proteção contrarretaliação aos denunciantes. Relatórios periódicos sobre queixas e medidas corretivas adotadas. Registros de treinamentos sobre ética, integridade e cultura justa. Comunicação institucional sobre os canais disponíveis e orientações de uso.',
    requisitoCore: 'NÃO',
    transversal: 'SIM',
    referenciaNorma: '01/01/2026',
  },
  {
    id: 29,
    nivelOna: 2,
    numRequisito: 7,
    requisito:
      'Gerenciar de forma sistemática e contínua os retornos dos profissionais, com o objetivo de compreender a experiência profissional, identificar oportunidades de melhoria e implementar ações concretas que fortaleçam o ambiente de trabalho, o engajamento e o bem-estar das equipes.',
    orientacaoOna:
      'O feedback da força de trabalho é uma ferramenta essencial para avaliar a satisfação, o clima organizacional e a cultura de segurança e confiança. A organização deve utilizar métodos estruturados e regulares para coletar essas percepções, como pesquisas de satisfação, entrevistas de desligamento, grupos focais, reuniões participativas ou consultas temáticas, garantindo confidencialidade, imparcialidade e estímulo à participação. Os resultados coletados devem ser analisados de forma crítica e sistemática, identificando tendências, fatores de risco e oportunidades de melhoria. Com base nessa análise, a organização deve elaborar e executar planos de ação, acompanhando sua efetividade e comunicando os resultados à força de trabalho, de modo a reforçar a transparência e o senso de pertencimento. Essa prática contribui para uma cultura organizacional de aprendizado e valorização das pessoas, fortalecendo o comprometimento, a retenção de talentos e a qualidade dos serviços prestados.',
    sugestaoEvidenciaOna:
      'Pesquisa de satisfação ou clima organizacional aplicada à força de trabalho. Registros de entrevistas de desligamento e relatórios de análise de resultados. Atas, relatórios ou painéis com consolidação de feedbacks e tendências identificadas. Planos de ação elaborados a partir dos resultados e respectivas evidências de implementação. Registros de comunicação institucional sobre resultados e melhorias decorrentes do feedback. Evidências de treinamentos ou iniciativas voltadas ao engajamento e bem-estar dos profissionais.',
    requisitoCore: 'NÃO',
    transversal: 'SIM',
    referenciaNorma: '01/01/2026',
  },

  // ==========================================
  // NÍVEL 3 (4 REQUISITOS)
  // ==========================================
  {
    id: 30,
    nivelOna: 3,
    numRequisito: 1,
    requisito:
      'Avaliar a eficácia da capacitação e treinamento dos profissionais.',
    orientacaoOna:
      'A organização deve planejar, implementar, acompanhar e avaliar as ações de capacitação e treinamentos oferecidos aos profissionais. A capacitação e os treinamentos visam ao aprimoramento das habilidades e conhecimentos necessários ao exercício das funções, contribuindo para a melhoria contínua da organização e para o atendimento às necessidades dos pacientes. Ao se definir os objetivos do treinamento, deve-se também definir quais métricas e indicadores serão capazes de avaliar sua eficácia. Existem alguns níveis para avaliação da aprendizagem sendo: Reação e satisfação dos profissionais treinados. Aprendizado ou assimilação do conteúdo. Comportamento e aplicação no trabalho. Resultado/impacto no negócio.',
    sugestaoEvidenciaOna:
      'Diretrizes e instrumentos definidos para avaliação da eficácia dos treinamentos realizados pela instituição; pesquisas de reação aplicadas aos profissionais capacitados; auditorias internas e observações diretas; entrevistas com os profissionais; análise da tendência dos indicadores pertinentes antes e após as capacitações e treinamentos; resultados das avaliações de desempenho nos itens relacionados ao conteúdo dos treinamentos, como qualidade das entregas e outros aspectos técnicos e comportamentais.',
    requisitoCore: 'NÃO',
    transversal: 'SIM',
    referenciaNorma: '01/01/2026',
  },
  {
    id: 31,
    nivelOna: 3,
    numRequisito: 2,
    requisito:
      'Avaliar a efetividade do programa institucional de desenvolvimento de lideranças e definir ações e ciclos de melhoria.',
    orientacaoOna:
      'A organização deve estruturar, implementar, acompanhar e avaliar o programa institucional de desenvolvimento de lideranças. A obtenção de resultados está diretamente relacionada às diretrizes e às práticas de desenvolvimento e valorização humana. Deve-se avaliar se o que foi planejado no programa institucional de desenvolvimento de lideranças está sendo cumprido, qual o impacto no negócio e, quando necessário, quais ações de melhoria devem ser implementadas.',
    sugestaoEvidenciaOna:
      'Entrevistas estruturadas para observar a maturidade das lideranças frente às suas responsabilidades e missão; pesquisas de clima organizacional com indicadores positivos atribuídos às lideranças; avaliações de desempenho específicas para líderes; análise da tendência dos indicadores pertinentes antes e após capacitações e treinamentos; banco estruturado de potenciais sucessores preparados para assumir posições de liderança nos diversos níveis da organização.',
    requisitoCore: 'SIM',
    transversal: 'NÃO',
    referenciaNorma: '01/01/2026',
  },
  {
    id: 32,
    nivelOna: 3,
    numRequisito: 3,
    requisito:
      'Avaliar a efetividade das ações para a retenção e compartilhamento dos conhecimentos obtidos pela organização',
    orientacaoOna:
      'A organização deve estabelecer estruturar, implementar, monitorar e avaliar ações que promovam a transformação do conhecimento em valor organizacional. São etapas da gestão do conhecimento a serem consideradas: Aquisição do conhecimento: processos para facilitar a criação/incorporação do conhecimento na organização. Retenção: organização, estruturação e armazenamento do conhecimento para utilização das partes interessadas. Distribuição: compartilhamento de lições aprendidas, documentos, diretrizes e procedimentos. Utilização pelos profissionais e equipes.',
    sugestaoEvidenciaOna:
      'Atividades de aquisição como produção científica, participação em eventos externos e acesso dos profissionais às melhores práticas por meio de fontes reconhecidas. Método definido formalizado para organização, armazenamento e distribuição do conhecimento. Registro sistematizado de lições aprendidas. Controle de acesso aos documentos, diretrizes e procedimentos.',
    requisitoCore: 'NÃO',
    transversal: 'NÃO',
    referenciaNorma: '01/01/2026',
  },
  {
    id: 33,
    nivelOna: 3,
    numRequisito: 4,
    requisito:
      'Avaliar a efetividade das ações frente aos resultados da satisfação, manifestação e experiência dos profissionais com a organização.',
    orientacaoOna:
      'A organização deve estruturar, aplicar, monitorar e avaliar ações voltadas à gestão do clima organizacional, visando um ambiente de trabalho positivo. A gestão do clima constitui-se em um processo de diagnóstico dos aspectos que possam impactar a satisfação dos profissionais quanto ao ambiente interno da organização, seguido do planejamento e da implementação de iniciativas de melhoria. As dimensões de pesquisa e análise incluem: liderança, relacionamento interpessoal, trabalho em equipe, comunicação, gestão organizacional, práticas de gestão de pessoas, práticas de diversidade e inclusão, qualidade de vida, segurança, dentre outras. Gerenciar, revisar e promover práticas de igualdade, diversidade, inclusão e equidade em todas as etapas da gestão de pessoas, incluindo recrutamento, alocação de trabalho, programação, desenvolvimento e promoções. Essa abordagem deve assegurar que todos os profissionais tenham as mesmas oportunidades, independentemente de idade, gênero, etnia/raça, religião, orientação sexual, deficiência ou qualquer outra característica pessoal. A organização deve adotar políticas de igualdade de oportunidades, oferecer treinamentos periódicos, e monitorar indicadores e resultados para identificar possíveis desequilíbrios e implementar ações corretivas e educativas. Também é recomendável analisar dados de recrutamento, progressão e representatividade, promovendo um ambiente de respeito, pertencimento e valorização da diversidade. Essa prática fortalece a cultura organizacional ética e inclusiva, contribuindo para o bem-estar, engajamento e desempenho sustentável da força de trabalho.',
    sugestaoEvidenciaOna:
      'Ferramentas aplicadas de pesquisa de clima organizacional e/ou engajamento; processo estruturado para evolução dos aspectos críticos identificados; planos de ação voltados às iniciativas de melhoria implementadas; fóruns de discussão sobre ações de intervenção; campanhas de comunicação interna para estimular a participação dos profissionais e apresentar os resultados obtidos; acompanhamento das manifestações e denúncias realizadas, com direcionamento e monitoramento dos respectivos planos de ação.',
    requisitoCore: 'NÃO',
    transversal: 'NÃO',
    referenciaNorma: '01/01/2026',
  },
];
