export type SlideCategory = 
  | 'overview' 
  | 'structure' 
  | 'deep-dive' 
  | 'thematic' 
  | 'synthesis' 
  | 'action'
  | 'conclusion';

export interface SpeakerNote {
  objective: string;
  talkingPoints: string[];
  executiveTakeaway: string;
  recommendedTime: string;
}

export interface SlideData {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  category: SlideCategory;
  themeTag: string;
  oneIdeaSummary: string;
  speakerNote: SpeakerNote;
  renderType: 
    | 'cover'
    | 'auditoria_hsl_2025'
    | 'reformulacao_estrutural'
    | 'mudancas_gestao_pessoas'
    | 'question'
    | 'stats_structure'
    | 'level_distribution'
    | 'timeline'
    | 'level_distribution_timeline'
    | 'level_3_birth'
    | 'ona_spreadsheet'
    | 'gp_expectations_2026'
    | 'thank_you'
    | 'level_2_reorg'
    | 'capacitacao_example'
    | 'level_1_reorg'
    | 'seguranca_paciente'
    | 'riscos_psicossociais'
    | 'perfil_epidemiologico'
    | 'comunicacao_experiencia'
    | 'core_transversalidade'
    | 'grande_sintese'
    | 'impacto_organizacao'
    | 'caminho_preparacao'
    | 'conclusao';
}

export interface MetricComparison {
  label: string;
  val2022: number | string;
  val2026: number | string;
  diff: string;
  percentChange?: string;
  interpretation: string;
  highlight?: boolean;
}

export interface LevelBreakdown {
  level: string;
  levelNumber: number;
  count2022: number;
  count2026: number;
  diff: string;
  focus2022: string;
  focus2026: string;
  status: 'stable' | 'reduced' | 'new';
  description: string;
}

export interface TechnicalRequirement {
  id: string;
  version: '2022' | '2026';
  level: 1 | 2 | 3;
  number: string;
  title: string;
  description: string;
  isCore: boolean;
  isTransversal: boolean;
  thematicGroup: string;
  evolutionType?: 'novo' | 'reformulado' | 'ampliado' | 'reposicionado' | 'estavel';
}
