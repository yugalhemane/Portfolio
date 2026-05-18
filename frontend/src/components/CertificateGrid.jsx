import CertificateCard from './CertificateCard';

export default function CertificateGrid({ certificates, loading, currentPage, totalPages, onPageChange }) {
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
      <div className="certificate-marquee relative overflow-hidden py-3">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-slate-950 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-slate-950 to-transparent" />

        <div className="certificate-marquee-track flex w-max gap-4 sm:gap-5">
          {[...certificates, ...certificates].map((cert, index) => (
            <div
              key={`${cert.id}-${index}`}
              className="w-[18rem] shrink-0 sm:w-[21rem] lg:w-[23rem]"
              aria-hidden={index >= certificates.length}
            >
              <CertificateCard certificate={cert} />
            </div>
          ))}
        </div>
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
