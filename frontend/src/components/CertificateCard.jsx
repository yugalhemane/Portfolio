import React from "react";

export default function CertificateCard({ certificate }) {
  return (
    <div
      className="group w-full text-left rounded-2xl border border-slate-800/50 bg-slate-900/40 hover:bg-slate-900/80 hover:border-cyan-400/30 transition-all shadow-lg hover:shadow-2xl hover:shadow-cyan-500/20 p-0 overflow-hidden
                 transform-gpu hover:-translate-y-2 hover:scale-[1.02] duration-300 glass"
    >
      {/* Certificate image */}
      <div className="relative h-48 overflow-hidden bg-slate-800">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 group-hover:opacity-100 opacity-0 transition-opacity duration-300"></div>
        <img
          src={certificate.imageUrl || "/certificates/placeholder.png"}
          alt={`${certificate.name} certificate`}
          loading="lazy"
          className="w-full h-full object-cover"
        />

        {/* Badges */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs z-10">
          <span className="px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-sm border border-slate-700/50 text-slate-100 font-medium shadow-lg group-hover:border-cyan-400/50 transition-colors">
            {certificate.issuer}
          </span>
          <span className="px-3 py-1 rounded-full bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/60 text-cyan-100 font-medium shadow-lg group-hover:bg-cyan-500/30 group-hover:border-cyan-400 transition-all">
            {certificate.badge1}
          </span>
          <span className="px-3 py-1 rounded-full bg-purple-500/20 backdrop-blur-sm border border-purple-400/60 text-purple-100 font-medium shadow-lg group-hover:bg-purple-500/30 group-hover:border-purple-400 transition-all">
            {certificate.badge2}
          </span>
          <span>{certificate.date}</span>
        </div>
      </div>

      {/* Certificate details */}
      <div className="p-5">
        <h3 className="font-bold text-lg truncate group-hover:text-cyan-400 transition-colors mb-2">
          {certificate.name}
        </h3>
        <p className="text-sm text-slate-300 line-clamp-2 leading-relaxed">
          {certificate.description}
        </p>
        <div className="flex items-center justify-between text-xs text-slate-400 mt-4 pt-3 border-t border-slate-800">
          <div className="flex items-center gap-1">
            <span className="text-yellow-400">🔗</span>
            <a
              href={certificate.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              View Certificate
            </a>
          </div>
        </div>
      </div>

      {/* Badge images */}
      <div className="p-5 pt-0 flex gap-3">
        {certificate.badgeImage1 && (
          <img
            src={certificate.badgeImage1}
            alt="Badge 1"
            className="h-12 w-12 object-contain"
          />
        )}
        {certificate.badgeImage2 && (
          <img
            src={certificate.badgeImage2}
            alt="Badge 2"
            className="h-12 w-12 object-contain"
          />
        )}
      </div>
    </div>
  );
}
