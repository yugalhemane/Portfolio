// src/components/Pagination.jsx
export default function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="flex justify-center gap-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 rounded-md bg-slate-800/50 border border-slate-700/50 text-slate-300 disabled:opacity-50 hover:bg-slate-800/80 hover:border-cyan-400/30 transition-all"
      >
        Previous
      </button>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 rounded-md bg-slate-800/50 border border-slate-700/50 text-slate-300 disabled:opacity-50 hover:bg-slate-800/80 hover:border-cyan-400/30 transition-all"
      >
        Next
      </button>
    </div>
  );
}
