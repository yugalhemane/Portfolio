export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-slate-950/60 border-b border-slate-800">
      <nav className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <span className="font-semibold tracking-tight">
          &lt;Yugal.dev /&gt;
        </span>
        <div className="flex gap-4 text-sm">
          <a href="#projects" className="hover:text-cyan-400 transition">
            Projects
          </a>
          <a href="#journey" className="hover:text-cyan-400 transition">
            Journey
          </a>
          <a href="#contact" className="hover:text-cyan-400 transition">
            Contact
          </a>
          <a
            href="https://github.com/yugalhemane"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition"
          >
            GitHub
          </a>
        </div>
      </nav>
    </header>
  );
}
