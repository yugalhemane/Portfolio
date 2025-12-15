// src/components/SocialLinks.jsx
const links = [
  {
    label: "GitHub",
    href: "https://github.com/yugalhemane",
    icon: "🐙",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/yugal-hemane/",
    icon: "💼",
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/HemaneYugal",
    icon: "🕊️",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/yugalhemane/",
    icon: "📸",
  },
  {
    label: "Email",
    href: "mailto:yugalhemane@gmail.com",
    icon: "✉️",
  },
];

export default function SocialLinks({ className = "" }) {
  return (
    <div className={`flex flex-wrap gap-3 text-sm ${className}`}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 hover:border-cyan-400 hover:text-cyan-300 transition"
        >
          <span>{link.icon}</span>
          <span>{link.label}</span>
        </a>
      ))}
    </div>
  );
}
