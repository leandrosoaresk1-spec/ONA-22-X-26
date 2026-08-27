import React from 'react';
import {
  Sparkles,
  BrainCircuit,
} from 'lucide-react';

export const ThankYouSlide: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col justify-between h-full py-6 text-center select-text">
      {/* Top Badge */}
      <div className="flex items-center justify-center gap-2">
        <span className="text-[11px] font-black uppercase tracking-widest text-[#FF3200] bg-orange-50 px-3.5 py-1 rounded-full border border-orange-200 flex items-center gap-1.5 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-[#FF3200]" />
          Encerramento & Visão de Futuro • ONA 2026
        </span>
      </div>

      {/* Main Core Section */}
      <div className="my-auto max-w-3xl mx-auto px-4 space-y-8">
        {/* Title "OBRIGADO" */}
        <div>
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-black text-[#16324F] tracking-tight">
            OBRIGADO<span className="text-[#FF3200]">.</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-500 font-semibold mt-2">
            Gestão de Pessoas & Acreditação ONA 2026
          </p>
        </div>

        {/* Powerful Catchphrase Card (People Analytics + ONA) */}
        <div className="relative bg-gradient-to-br from-[#16324F] via-[#1A3E63] to-[#122A44] text-white p-8 sm:p-10 rounded-3xl shadow-xl border border-slate-700 text-center overflow-hidden">
          {/* Subtle Background Glow Elements */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#FF3200]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-4">
            <div className="flex items-center justify-center gap-2 text-xs font-black uppercase tracking-wider text-orange-300">
              <BrainCircuit className="w-4 h-4 text-[#FF3200]" />
              People Analytics & Acreditação ONA
            </div>

            {/* The Main Quote */}
            <blockquote className="text-xl sm:text-2xl md:text-3xl font-bold leading-relaxed tracking-tight text-white font-serif italic py-2 max-w-2xl mx-auto">
              “Quando transformamos dados em cuidado e pessoas em estratégia, a excelência em saúde deixa de ser uma meta de auditoria e se torna a nossa cultura diária.”
            </blockquote>
          </div>
        </div>
      </div>

      {/* Footer info */}
      <div className="border-t border-slate-200 pt-3 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
        <span className="font-semibold text-slate-500">
          Manual Brasileiro de Acreditação ONA • Versão 2026
        </span>
        <span className="text-[11px]">
          Gestão Estratégica de Pessoas & People Analytics
        </span>
      </div>
    </div>
  );
};
