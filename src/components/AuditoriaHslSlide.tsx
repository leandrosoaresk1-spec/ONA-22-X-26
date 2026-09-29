import React from 'react';
import {
  AlertCircle,
  FileSearch,
  AlertTriangle,
  ArrowRight,
  ShieldAlert,
} from 'lucide-react';

export const AuditoriaHslSlide: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-between h-full py-4 text-left select-none">
      {/* Cabeçalho Limpo e Executivo */}
      <div className="border-b border-slate-200 pb-3">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FF3200]">
            02 • Diagnóstico e Acompanhamento
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#16324F] tracking-tight">
          AUDITORIAS EXTERNAS 2026 — HSL
        </h1>
        <p className="text-sm sm:text-base text-slate-500 font-medium mt-1">
          Dois pontos de atenção. Um objetivo: corrigir, acompanhar e evoluir.
        </p>
      </div>

      {/* 2 Grandes Blocos Lado a Lado */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-auto">
        {/* BLOCO 1 — ISO 9001 */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col justify-between hover:border-slate-300 transition-colors">
          <div>
            {/* Header do Card */}
            <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-4 mb-5">
              <div>
                <h2 className="text-xl font-black text-[#16324F]">
                  Auditoria ISO 9001
                </h2>
                <div className="text-xs font-mono font-medium text-slate-400 mt-0.5">
                  10774 | Hospital São Lucas | 2026
                </div>
                <div className="inline-block mt-2 px-2.5 py-1 bg-slate-100 text-slate-700 font-bold text-xs rounded-md">
                  Gerir Capacitação e Desenvolvimento de Pessoas
                </div>
              </div>

              {/* Destaque Visual NC MENOR */}
              <div className="text-right shrink-0">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-50 text-red-700 border border-red-200 font-bold text-xs uppercase tracking-wider rounded-lg">
                  <ShieldAlert className="w-3.5 h-3.5 text-red-600" />
                  NC MENOR
                </span>
                <span className="block text-[11px] font-semibold text-red-600 mt-1 max-w-[140px] leading-tight">
                  Tratar para evitar evolução para NC MAIOR.
                </span>
              </div>
            </div>

            {/* As 3 Informações Principais */}
            <div className="space-y-4">
              {/* 1. FATO */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-100 text-[#16324F] flex items-center justify-center shrink-0 mt-0.5">
                  <AlertCircle className="w-4 h-4 text-slate-600" />
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-wider text-slate-400">
                    1. FATO
                  </div>
                  <p className="text-sm font-semibold text-slate-800 mt-0.5 leading-snug">
                    Falha na avaliação da necessidade de treinamentos e na avaliação de eficácia.
                  </p>
                </div>
              </div>

              {/* 2. EVIDÊNCIA */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-800 flex items-center justify-center shrink-0 mt-0.5">
                  <FileSearch className="w-4 h-4 text-blue-700" />
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-wider text-slate-400">
                    2. EVIDÊNCIA
                  </div>
                  <p className="text-sm font-normal text-slate-700 mt-0.5 leading-relaxed">
                    Não foi evidenciada metodologia para avaliar a eficácia dos treinamentos EAD, inclusive os de integração.
                  </p>
                </div>
              </div>

              {/* 3. ATENÇÃO */}
              <div className="flex items-start gap-3 bg-amber-50/70 p-3.5 rounded-xl border border-amber-200/80">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                  <AlertTriangle className="w-4 h-4 text-amber-700" />
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-wider text-amber-800">
                    3. ATENÇÃO
                  </div>
                  <p className="text-sm font-bold text-amber-950 mt-0.5 leading-snug">
                    RM recusada. Identificar a causa do erro, corrigir e retornar para nova análise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BLOCO 2 — SELO UNIMED */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col justify-between hover:border-slate-300 transition-colors">
          <div>
            {/* Header do Card */}
            <div className="border-b border-slate-100 pb-4 mb-5">
              <h2 className="text-xl font-black text-[#16324F]">
                Auditoria Selo Unimed
              </h2>
              <div className="text-xs font-mono font-medium text-slate-400 mt-0.5">
                11257 | Hospital São Lucas | 2026
              </div>
              <div className="inline-block mt-2 px-2.5 py-1 bg-slate-100 text-slate-700 font-bold text-xs rounded-md">
                Recursos Humanos — PDI
              </div>
            </div>

            {/* As 3 Informações Principais */}
            <div className="space-y-4">
              {/* 1. FATO */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-100 text-[#16324F] flex items-center justify-center shrink-0 mt-0.5">
                  <AlertCircle className="w-4 h-4 text-slate-600" />
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-wider text-slate-400">
                    1. FATO
                  </div>
                  <p className="text-sm font-semibold text-slate-800 mt-0.5 leading-snug">
                    Falha na avaliação dos PDIs.
                  </p>
                </div>
              </div>

              {/* 2. EVIDÊNCIA — NÚMEROS GRANDES */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-800 flex items-center justify-center shrink-0">
                    <FileSearch className="w-4 h-4 text-blue-700" />
                  </div>
                  <div className="text-xs font-black uppercase tracking-wider text-slate-400">
                    2. EVIDÊNCIA
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-2 pt-1">
                  {/* Card 1: 484 */}
                  <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 text-center">
                    <div className="text-2xl sm:text-3xl font-black text-[#16324F] font-mono leading-none">
                      484
                    </div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mt-1.5 leading-tight">
                      Colaboradores
                    </div>
                  </div>

                  {/* Card 2: 225 */}
                  <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 text-center">
                    <div className="text-2xl sm:text-3xl font-black text-[#16324F] font-mono leading-none">
                      225
                    </div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mt-1.5 leading-tight">
                      PDIs Gerados
                    </div>
                  </div>

                  {/* Card 3: 31 */}
                  <div className="bg-red-50 border border-red-200/80 rounded-xl p-3 text-center">
                    <div className="text-2xl sm:text-3xl font-black text-red-600 font-mono leading-none">
                      31
                    </div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-red-700 mt-1.5 leading-tight">
                      PDIs Evoluídos
                    </div>
                  </div>

                  {/* Card 4: 14% */}
                  <div className="bg-red-50 border border-red-200/80 rounded-xl p-3 text-center">
                    <div className="text-2xl sm:text-3xl font-black text-red-600 font-mono leading-none">
                      14%
                    </div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-red-700 mt-1.5 leading-tight">
                      Conformidade
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. ATENÇÃO */}
              <div className="flex items-start gap-3 bg-amber-50/70 p-3.5 rounded-xl border border-amber-200/80">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                  <AlertTriangle className="w-4 h-4 text-amber-700" />
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-wider text-amber-800">
                    3. ATENÇÃO
                  </div>
                  <p className="text-sm font-bold text-amber-950 mt-0.5 leading-snug">
                    RM recusada. Identificar a causa do erro, corrigir e retornar para nova análise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Destaque Central / Faixa Inferior */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl px-5 py-3 flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#16324F]"></span>
          <span className="text-xs font-black uppercase tracking-wider text-[#16324F]">
            PONTO DE ATENÇÃO DA QUALIDADE
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-700 flex-wrap justify-center">
          <span className="text-red-700 bg-red-50 px-2 py-0.5 rounded border border-red-200">
            RM recusada
          </span>
          <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-800">identificar causa-raiz</span>
          <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-800">corrigir</span>
          <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[#16324F] font-black bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
            retornar
          </span>
        </div>
      </div>
    </div>
  );
};
