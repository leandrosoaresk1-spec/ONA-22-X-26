import React, { useState, useMemo } from 'react';
import {
  Search,
  Download,
  Copy,
  Check,
  ShieldAlert,
  Layers,
  Sparkles,
  ChevronRight,
  X,
  FileSpreadsheet,
  Network,
  Calendar,
  Filter,
} from 'lucide-react';
import {
  ONA_ALL_33_REQUIREMENTS,
  OnaRequirementSpreadsheetRow,
} from '../data/onaCompleteSpreadsheetData';

export const OnaSpreadsheetSlide: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [levelFilter, setLevelFilter] = useState<'all' | 1 | 2 | 3>('all');
  const [coreOnly, setCoreOnly] = useState(false);
  const [transversalOnly, setTransversalOnly] = useState(false);
  const [selectedReq, setSelectedReq] = useState<OnaRequirementSpreadsheetRow | null>(null);
  const [copiedNotification, setCopiedNotification] = useState<string | null>(null);

  const filteredData = useMemo(() => {
    return ONA_ALL_33_REQUIREMENTS.filter((row) => {
      // Level filter
      if (levelFilter !== 'all' && row.nivelOna !== levelFilter) {
        return false;
      }
      // Core filter
      if (coreOnly && row.requisitoCore !== 'SIM') {
        return false;
      }
      // Transversal filter
      if (transversalOnly && row.transversal !== 'SIM') {
        return false;
      }
      // Search term
      if (searchTerm.trim() !== '') {
        const query = searchTerm.toLowerCase();
        const matchReq = row.requisito.toLowerCase().includes(query);
        const matchOri = row.orientacaoOna.toLowerCase().includes(query);
        const matchEvi = row.sugestaoEvidenciaOna.toLowerCase().includes(query);
        const matchNum = `req ${row.numRequisito}`.includes(query) || `req. ${row.numRequisito}`.includes(query) || `${row.numRequisito}` === query.trim();
        const matchNivel = `nível ${row.nivelOna}`.includes(query) || `nivel ${row.nivelOna}`.includes(query) || `n${row.nivelOna}` === query.trim();
        return matchReq || matchOri || matchEvi || matchNum || matchNivel;
      }
      return true;
    });
  }, [levelFilter, coreOnly, transversalOnly, searchTerm]);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedNotification(label);
      setTimeout(() => setCopiedNotification(null), 2500);
    });
  };

  const exportAsTsv = () => {
    const headers = [
      'NÍVEL ONA',
      'Nº REQUISITO',
      'REQUISITO',
      'ORIENTAÇÃO DA ONA',
      'SUGESTÃO DE EVIDÊNCIA DA ONA',
      'REQUISITO CORE',
      'TRANSVERSAL',
      'REFERÊNCIA NORMA',
    ];
    const rows = filteredData.map((r) => [
      r.nivelOna,
      r.numRequisito,
      `"${r.requisito.replace(/"/g, '""')}"`,
      `"${r.orientacaoOna.replace(/"/g, '""')}"`,
      `"${r.sugestaoEvidenciaOna.replace(/"/g, '""')}"`,
      r.requisitoCore,
      r.transversal,
      r.referenciaNorma,
    ]);
    const tsvContent = [headers.join('\t'), ...rows.map((row) => row.join('\t'))].join('\n');
    copyToClipboard(tsvContent, 'Tabela copiada no formato compatível com Excel / Google Sheets!');
  };

  const downloadCsv = () => {
    const headers = [
      'NÍVEL ONA',
      'Nº REQUISITO',
      'REQUISITO',
      'ORIENTAÇÃO DA ONA',
      'SUGESTÃO DE EVIDÊNCIA DA ONA',
      'REQUISITO CORE',
      'TRANSVERSAL',
      'REFERÊNCIA NORMA',
    ];
    const rows = filteredData.map((r) => [
      r.nivelOna,
      r.numRequisito,
      `"${r.requisito.replace(/"/g, '""')}"`,
      `"${r.orientacaoOna.replace(/"/g, '""')}"`,
      `"${r.sugestaoEvidenciaOna.replace(/"/g, '""')}"`,
      r.requisitoCore,
      r.transversal,
      r.referenciaNorma,
    ]);
    const csvContent = '\uFEFF' + [headers.join(';'), ...rows.map((row) => row.join(';'))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `Requisitos_ONA_2026_Gestao_de_Pessoas.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col h-full py-1 text-left select-text">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-2.5">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-black uppercase tracking-wider text-[#FF3200] bg-orange-50 px-2.5 py-0.5 rounded-full border border-orange-200 flex items-center gap-1">
              <FileSpreadsheet className="w-3.5 h-3.5" />
              Slide 10 • Matriz Completa Planilhada
            </span>
            <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full border border-slate-200">
              Manual ONA 2026 • 33 Requisitos
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-[#16324F] mt-1 tracking-tight flex items-center gap-2">
            Planilha Oficial dos Requisitos ONA 2026 — Gestão de Pessoas
          </h2>
        </div>

        {/* Quick actions: Copy TSV / Download CSV */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={exportAsTsv}
            className="text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 px-3 py-1.5 rounded-xl shadow-2xs transition flex items-center gap-1.5"
            title="Copiar dados para colar direto no Excel ou Google Sheets"
          >
            <Copy className="w-3.5 h-3.5 text-slate-500" />
            <span>Copiar para Excel</span>
          </button>
          <button
            onClick={downloadCsv}
            className="text-xs font-bold text-white bg-[#16324F] hover:bg-[#1f4268] border border-[#16324F] px-3 py-1.5 rounded-xl shadow-2xs transition flex items-center gap-1.5"
            title="Baixar arquivo CSV completo"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Baixar CSV</span>
          </button>
        </div>
      </div>

      {/* KPI Counters Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 my-2">
        <div className="bg-slate-50 p-2 rounded-xl border border-slate-200 flex items-center justify-between">
          <span className="text-[10.5px] font-bold text-slate-600">Total Requisitos</span>
          <span className="text-sm font-black text-[#16324F]">33</span>
        </div>
        <div className="bg-blue-50/70 p-2 rounded-xl border border-blue-200 flex items-center justify-between">
          <span className="text-[10.5px] font-bold text-blue-800">Nível 1 (Base)</span>
          <span className="text-sm font-black text-blue-900">22</span>
        </div>
        <div className="bg-indigo-50/70 p-2 rounded-xl border border-indigo-200 flex items-center justify-between">
          <span className="text-[10.5px] font-bold text-indigo-800">Nível 2 (Gestão)</span>
          <span className="text-sm font-black text-indigo-900">7</span>
        </div>
        <div className="bg-emerald-50/70 p-2 rounded-xl border border-emerald-200 flex items-center justify-between">
          <span className="text-[10.5px] font-bold text-emerald-800">Nível 3 (Efetividade)</span>
          <span className="text-sm font-black text-emerald-900">4</span>
        </div>
        <div className="bg-amber-50/70 p-2 rounded-xl border border-amber-300 flex items-center justify-between">
          <span className="text-[10.5px] font-black text-amber-900 flex items-center gap-1">
            <ShieldAlert className="w-3 h-3 text-amber-600" />
            Requisitos CORE
          </span>
          <span className="text-sm font-black text-amber-950">8</span>
        </div>
        <div className="bg-cyan-50/70 p-2 rounded-xl border border-cyan-200 flex items-center justify-between">
          <span className="text-[10.5px] font-black text-cyan-900 flex items-center gap-1">
            <Network className="w-3 h-3 text-cyan-600" />
            Transversais
          </span>
          <span className="text-sm font-black text-cyan-950">13</span>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-2 mb-2">
        {/* Filter buttons */}
        <div className="flex flex-wrap items-center gap-1.5">
          <button
            onClick={() => {
              setLevelFilter('all');
              setCoreOnly(false);
              setTransversalOnly(false);
            }}
            className={`text-xs font-bold px-2.5 py-1 rounded-lg transition border ${
              levelFilter === 'all' && !coreOnly && !transversalOnly
                ? 'bg-[#16324F] text-white border-[#16324F]'
                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
            }`}
          >
            Todos (33)
          </button>
          <button
            onClick={() => {
              setLevelFilter(1);
              setCoreOnly(false);
              setTransversalOnly(false);
            }}
            className={`text-xs font-bold px-2.5 py-1 rounded-lg transition border ${
              levelFilter === 1 && !coreOnly && !transversalOnly
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-blue-50 text-blue-900 border-blue-200 hover:bg-blue-100'
            }`}
          >
            Nível 1 (22)
          </button>
          <button
            onClick={() => {
              setLevelFilter(2);
              setCoreOnly(false);
              setTransversalOnly(false);
            }}
            className={`text-xs font-bold px-2.5 py-1 rounded-lg transition border ${
              levelFilter === 2 && !coreOnly && !transversalOnly
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-indigo-50 text-indigo-900 border-indigo-200 hover:bg-indigo-100'
            }`}
          >
            Nível 2 (7)
          </button>
          <button
            onClick={() => {
              setLevelFilter(3);
              setCoreOnly(false);
              setTransversalOnly(false);
            }}
            className={`text-xs font-bold px-2.5 py-1 rounded-lg transition border ${
              levelFilter === 3 && !coreOnly && !transversalOnly
                ? 'bg-emerald-600 text-white border-emerald-600'
                : 'bg-emerald-50 text-emerald-900 border-emerald-200 hover:bg-emerald-100'
            }`}
          >
            Nível 3 (4)
          </button>
          <div className="h-4 w-px bg-slate-300 mx-1 hidden sm:block" />
          <button
            onClick={() => setCoreOnly(!coreOnly)}
            className={`text-xs font-black px-2.5 py-1 rounded-lg transition border flex items-center gap-1 ${
              coreOnly
                ? 'bg-amber-500 text-white border-amber-600 shadow-2xs'
                : 'bg-amber-50 text-amber-900 border-amber-200 hover:bg-amber-100'
            }`}
          >
            <ShieldAlert className="w-3 h-3" />
            Apenas CORE (8)
          </button>
          <button
            onClick={() => setTransversalOnly(!transversalOnly)}
            className={`text-xs font-bold px-2.5 py-1 rounded-lg transition border flex items-center gap-1 ${
              transversalOnly
                ? 'bg-cyan-600 text-white border-cyan-700 shadow-2xs'
                : 'bg-cyan-50 text-cyan-900 border-cyan-200 hover:bg-cyan-100'
            }`}
          >
            <Network className="w-3 h-3" />
            Apenas Transversais (13)
          </button>
        </div>

        {/* Search input */}
        <div className="relative w-full md:w-72">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar por termo, requisito, evidência..."
            className="w-full pl-8 pr-7 py-1 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#FF3200] focus:border-[#FF3200] transition"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
            >
              <X className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>

      {/* Copied alert notification */}
      {copiedNotification && (
        <div className="mb-2 p-2 bg-emerald-500 text-white text-xs font-bold rounded-lg flex items-center gap-2 shadow-md animate-fade-in">
          <Check className="w-4 h-4" />
          <span>{copiedNotification}</span>
        </div>
      )}

      {/* Main Spreadsheet Table Container */}
      <div className="flex-1 overflow-auto rounded-xl border border-slate-200 shadow-xs bg-white min-h-[360px] max-h-[500px]">
        <table className="w-full text-left border-collapse text-xs">
          {/* Table Header */}
          <thead className="bg-[#16324F] text-white sticky top-0 z-10 select-none shadow-sm">
            <tr className="divide-x divide-slate-700">
              <th className="py-2.5 px-3 font-bold uppercase tracking-wider text-[10.5px] w-14 text-center shrink-0">
                Nível
              </th>
              <th className="py-2.5 px-3 font-bold uppercase tracking-wider text-[10.5px] w-14 text-center shrink-0">
                Nº Req.
              </th>
              <th className="py-2.5 px-3.5 font-bold uppercase tracking-wider text-[10.5px] min-w-[280px]">
                Requisito ONA 2026
              </th>
              <th className="py-2.5 px-3.5 font-bold uppercase tracking-wider text-[10.5px] min-w-[300px]">
                Orientação da ONA
              </th>
              <th className="py-2.5 px-3.5 font-bold uppercase tracking-wider text-[10.5px] min-w-[280px]">
                Sugestão de Evidência da ONA
              </th>
              <th className="py-2.5 px-2.5 font-bold uppercase tracking-wider text-[10.5px] w-20 text-center shrink-0">
                CORE
              </th>
              <th className="py-2.5 px-2.5 font-bold uppercase tracking-wider text-[10.5px] w-24 text-center shrink-0">
                Transversal
              </th>
              <th className="py-2.5 px-2.5 font-bold uppercase tracking-wider text-[10.5px] w-24 text-center shrink-0">
                Vigência
              </th>
              <th className="py-2.5 px-2 font-bold uppercase tracking-wider text-[10.5px] w-12 text-center shrink-0">
                Ação
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-slate-200">
            {filteredData.length === 0 ? (
              <tr>
                <td colSpan={9} className="py-12 text-center text-slate-400">
                  <Filter className="w-6 h-6 mx-auto mb-2 opacity-50" />
                  <p className="font-bold text-sm">Nenhum requisito encontrado para os filtros selecionados.</p>
                  <p className="text-xs text-slate-400 mt-0.5">Tente limpar os termos de busca ou mudar os filtros.</p>
                </td>
              </tr>
            ) : (
              filteredData.map((row, idx) => {
                const isN1 = row.nivelOna === 1;
                const isN2 = row.nivelOna === 2;
                const isN3 = row.nivelOna === 3;
                const isCore = row.requisitoCore === 'SIM';
                const isTransversal = row.transversal === 'SIM';

                return (
                  <tr
                    key={`${row.nivelOna}-${row.numRequisito}-${row.id}`}
                    onClick={() => setSelectedReq(row)}
                    className={`hover:bg-amber-50/50 cursor-pointer transition-colors group divide-x divide-slate-100 ${
                      idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'
                    } ${isCore ? 'border-l-4 border-l-amber-500' : ''}`}
                  >
                    {/* Nível */}
                    <td className="py-2 px-2.5 text-center font-bold">
                      <span
                        className={`inline-block px-2 py-0.5 rounded text-[10.5px] font-black ${
                          isN1
                            ? 'bg-blue-100 text-blue-900 border border-blue-200'
                            : isN2
                            ? 'bg-indigo-100 text-indigo-900 border border-indigo-200'
                            : 'bg-emerald-100 text-emerald-900 border border-emerald-200'
                        }`}
                      >
                        N{row.nivelOna}
                      </span>
                    </td>

                    {/* Nº Requisito */}
                    <td className="py-2 px-2.5 text-center font-mono font-bold text-slate-700">
                      Req. {row.numRequisito}
                    </td>

                    {/* Requisito */}
                    <td className="py-2 px-3.5 font-semibold text-[#16324F] leading-snug">
                      <div className="line-clamp-2 group-hover:text-[#FF3200] transition">
                        {row.requisito}
                      </div>
                    </td>

                    {/* Orientação ONA */}
                    <td className="py-2 px-3.5 text-slate-600 text-[11.5px] leading-relaxed">
                      <div className="line-clamp-2">
                        {row.orientacaoOna}
                      </div>
                    </td>

                    {/* Sugestão de Evidência */}
                    <td className="py-2 px-3.5 text-slate-600 text-[11.5px] leading-relaxed">
                      <div className="line-clamp-2">
                        {row.sugestaoEvidenciaOna}
                      </div>
                    </td>

                    {/* Requisito CORE */}
                    <td className="py-2 px-2 text-center">
                      {isCore ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-black text-[10px] border border-amber-300">
                          <ShieldAlert className="w-2.5 h-2.5 text-amber-600" />
                          SIM
                        </span>
                      ) : (
                        <span className="text-[10.5px] font-bold text-slate-400">NÃO</span>
                      )}
                    </td>

                    {/* Transversal */}
                    <td className="py-2 px-2 text-center">
                      {isTransversal ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-cyan-100 text-cyan-900 font-bold text-[10px] border border-cyan-200">
                          <Network className="w-2.5 h-2.5 text-cyan-700" />
                          SIM
                        </span>
                      ) : (
                        <span className="text-[10.5px] font-bold text-slate-400">NÃO</span>
                      )}
                    </td>

                    {/* Referência da Norma */}
                    <td className="py-2 px-2 text-center font-mono text-[10.5px] text-slate-500">
                      {row.referenciaNorma}
                    </td>

                    {/* Ação */}
                    <td className="py-2 px-2 text-center">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedReq(row);
                        }}
                        className="p-1 rounded text-slate-400 hover:text-[#FF3200] hover:bg-orange-50 transition"
                        title="Ver detalhes completos do requisito"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Footer Info */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 mt-2 pt-1.5 border-t border-slate-200 text-xs text-slate-500">
        <div className="flex items-center gap-3">
          <span>
            Exibindo <strong>{filteredData.length}</strong> de <strong>33</strong> requisitos
          </span>
          <span className="text-slate-300">•</span>
          <span className="flex items-center gap-1 text-slate-600">
            <Calendar className="w-3.5 h-3.5 text-slate-400" /> Vigência oficial ONA: <strong>01/01/2026</strong>
          </span>
        </div>
        <span className="text-[11px] text-slate-400">
          💡 Dica: Clique em qualquer linha para abrir a íntegra da orientação e evidências com botão de cópia.
        </span>
      </div>

      {/* Modal / Drawer Detail View for Selected Requirement */}
      {selectedReq && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fade-in">
          <div
            className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 bg-[#16324F] text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span
                  className={`px-2.5 py-0.5 rounded text-xs font-black uppercase ${
                    selectedReq.nivelOna === 1
                      ? 'bg-blue-500 text-white'
                      : selectedReq.nivelOna === 2
                      ? 'bg-indigo-500 text-white'
                      : 'bg-emerald-500 text-white'
                  }`}
                >
                  Nível {selectedReq.nivelOna}
                </span>
                <span className="text-sm font-black tracking-wide">
                  Requisito {selectedReq.numRequisito}
                </span>
                {selectedReq.requisitoCore === 'SIM' && (
                  <span className="px-2 py-0.5 rounded bg-amber-400 text-amber-950 font-black text-xs flex items-center gap-1">
                    <ShieldAlert className="w-3 h-3" />
                    CORE
                  </span>
                )}
                {selectedReq.transversal === 'SIM' && (
                  <span className="px-2 py-0.5 rounded bg-cyan-400 text-cyan-950 font-bold text-xs flex items-center gap-1">
                    <Network className="w-3 h-3" />
                    Transversal
                  </span>
                )}
              </div>
              <button
                onClick={() => setSelectedReq(null)}
                className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700/60 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-5 overflow-y-auto space-y-4 text-left select-text">
              {/* Text of Requirement */}
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-black uppercase tracking-wider text-[#FF3200]">
                    Texto do Requisito Oficial
                  </span>
                  <button
                    onClick={() => copyToClipboard(selectedReq.requisito, 'Texto do requisito copiado!')}
                    className="text-[11px] font-bold text-slate-500 hover:text-[#FF3200] flex items-center gap-1 transition"
                  >
                    <Copy className="w-3 h-3" /> Copiar texto
                  </button>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-sm font-bold text-[#16324F] leading-relaxed">
                  {selectedReq.requisito}
                </div>
              </div>

              {/* Guidance / Orientação ONA */}
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-black uppercase tracking-wider text-blue-900">
                    Orientação da ONA (Diretriz de Aplicação)
                  </span>
                  <button
                    onClick={() => copyToClipboard(selectedReq.orientacaoOna, 'Orientação ONA copiada!')}
                    className="text-[11px] font-bold text-slate-500 hover:text-blue-900 flex items-center gap-1 transition"
                  >
                    <Copy className="w-3 h-3" /> Copiar orientação
                  </button>
                </div>
                <div className="p-3.5 bg-blue-50/40 rounded-xl border border-blue-100 text-xs text-slate-700 leading-relaxed max-h-56 overflow-y-auto">
                  {selectedReq.orientacaoOna}
                </div>
              </div>

              {/* Evidence suggestions */}
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-black uppercase tracking-wider text-emerald-900">
                    Sugestão de Evidência da ONA
                  </span>
                  <button
                    onClick={() => copyToClipboard(selectedReq.sugestaoEvidenciaOna, 'Sugestão de evidências copiada!')}
                    className="text-[11px] font-bold text-slate-500 hover:text-emerald-900 flex items-center gap-1 transition"
                  >
                    <Copy className="w-3 h-3" /> Copiar evidências
                  </button>
                </div>
                <div className="p-3.5 bg-emerald-50/40 rounded-xl border border-emerald-100 text-xs text-slate-700 leading-relaxed max-h-48 overflow-y-auto">
                  {selectedReq.sugestaoEvidenciaOna}
                </div>
              </div>

              {/* Metadata row */}
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-200 text-center">
                <div className="p-2 bg-slate-50 rounded-lg border border-slate-200">
                  <span className="text-[10px] text-slate-500 block uppercase font-bold">Critério CORE</span>
                  <span className={`text-xs font-black ${selectedReq.requisitoCore === 'SIM' ? 'text-amber-700' : 'text-slate-600'}`}>
                    {selectedReq.requisitoCore === 'SIM' ? 'SIM (Mandatório)' : 'NÃO'}
                  </span>
                </div>
                <div className="p-2 bg-slate-50 rounded-lg border border-slate-200">
                  <span className="text-[10px] text-slate-500 block uppercase font-bold">Transversalidade</span>
                  <span className={`text-xs font-black ${selectedReq.transversal === 'SIM' ? 'text-cyan-700' : 'text-slate-600'}`}>
                    {selectedReq.transversal === 'SIM' ? 'SIM (Auditado nos setores)' : 'NÃO'}
                  </span>
                </div>
                <div className="p-2 bg-slate-50 rounded-lg border border-slate-200">
                  <span className="text-[10px] text-slate-500 block uppercase font-bold">Vigência</span>
                  <span className="text-xs font-mono font-bold text-slate-700">
                    {selectedReq.referenciaNorma}
                  </span>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
              <button
                onClick={() => {
                  const fullText = `NÍVEL ONA: ${selectedReq.nivelOna}\nREQUISITO Nº: ${selectedReq.numRequisito}\nREQUISITO: ${selectedReq.requisito}\n\nORIENTAÇÃO ONA:\n${selectedReq.orientacaoOna}\n\nSUGESTÃO DE EVIDÊNCIAS:\n${selectedReq.sugestaoEvidenciaOna}\n\nCORE: ${selectedReq.requisitoCore} | TRANSVERSAL: ${selectedReq.transversal} | VIGÊNCIA: ${selectedReq.referenciaNorma}`;
                  copyToClipboard(fullText, 'Requisito completo com orientações e evidências copiado!');
                }}
                className="text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 px-3 py-1.5 rounded-lg shadow-2xs flex items-center gap-1.5 transition"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>Copiar Ficha Completa</span>
              </button>

              <button
                onClick={() => setSelectedReq(null)}
                className="text-xs font-bold text-white bg-[#16324F] hover:bg-[#1f4268] px-4 py-1.5 rounded-lg shadow-2xs transition"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
