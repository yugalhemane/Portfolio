// src/components/ProjectGrid.jsx
import ProjectCard from "./ProjectCard";
import Pagination from "./Pagination";

export default function ProjectGrid({
  projects,
  loading,
  onSelect,
  currentPage,
  totalPages,
  onPageChange,
}) {
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

  if (!projects.length) {
    return (
      <p className="text-slate-400 text-sm">
        No projects match this filter yet. Try changing language or search text.
      </p>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
        {projects.map((p, index) => (
          <ProjectCard key={p.id} project={p} onClick={() => onSelect(p)} index={index} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-8">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        </div>
      )}
    </>
  );
}
