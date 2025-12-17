import React from 'react';
import CertificateCard from './CertificateCard';

export default function CertificateGrid({ certificates, loading, onSelect, currentPage, totalPages, onPageChange }) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="h-32 rounded-xl bg-slate-800/40 animate-pulse"
          />
        ))}
      </div>
    );
  }

  if (!certificates.length) {
    return (
      <p className="text-slate-400 text-sm">
        No certificates to display yet.
      </p>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
        {certificates.map((cert) => (
          <CertificateCard key={cert.id} certificate={cert} onClick={() => onSelect(cert)} />
        ))}
      </div>
      
      {/* Pagination controls */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-md bg-slate-800/50 border border-slate-700/50 text-slate-300 disabled:opacity-50 hover:bg-slate-800/80 hover:border-cyan-400/30 transition-all"
          >
            Previous
          </button>
          
          <span className="px-4 py-2 text-slate-300">
            Page {currentPage} of {totalPages}
          </span>
          
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-md bg-slate-800/50 border border-slate-700/50 text-slate-300 disabled:opacity-50 hover:bg-slate-800/80 hover:border-cyan-400/30 transition-all"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}