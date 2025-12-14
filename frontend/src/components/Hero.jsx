import { useEffect, useState } from "react";
import SocialLinks from "./SocialLinks";

const roles = [
  "Fullstack Developer",
  "Cybersecurity Enthusiast",
  "DevSecOps Engineer",
  "Problem Solver",
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    let timeout;

    if (!isDeleting && displayText.length < role.length) {
      timeout = setTimeout(() => {
        setDisplayText(role.slice(0, displayText.length + 1));
      }, 100);
    } else if (!isDeleting && displayText.length === role.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(role.slice(0, displayText.length - 1));
      }, 50);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section className="relative pt-10 md:pt-20 pb-16 overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl float"></div>
        <div
          className="absolute top-40 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/2 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="relative z-10">
        <div className="fade-in-up">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-cyan-400 rounded-full pulse-glow"></span>
            Fullstack • Cybersecurity • DevSecOps
          </p>
        </div>

        <div
          className="fade-in-up"
          style={{ animationDelay: "0.1s", opacity: 0 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
            <span className="block">Hi, I'm</span>
            <span className="text-gradient inline-block">Yugal</span>
            <span className="block mt-2">
              I build <span className="text-gradient">secure</span>,{" "}
              <span className="text-gradient">intelligent</span> web
              experiences.
            </span>
          </h1>
        </div>

        <div
          className="fade-in-up mt-6"
          style={{ animationDelay: "0.2s", opacity: 0 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-lg md:text-xl text-slate-400">I'm a</span>
            <span className="text-lg md:text-xl font-semibold text-cyan-400 min-h-[1.5em] inline-block w-[280px] md:w-[350px]">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </div>
        </div>

        <div
          className="fade-in-up"
          style={{ animationDelay: "0.3s", opacity: 0 }}
        >
          <p className="mt-4 text-base md:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Passionate about{" "}
            <span className="text-cyan-400 font-semibold">cybersecurity</span>{" "}
            and{" "}
            <span className="text-cyan-400 font-semibold">
              developer tooling
            </span>
            . I love turning ideas into real products, from chatbots and
            security tools to fullstack apps built with React and Node.
          </p>
        </div>

        <div
          className="fade-in-up mt-8"
          style={{ animationDelay: "0.4s", opacity: 0 }}
        >
          <SocialLinks className="mt-5" />
        </div>

        {/* Scroll indicator */}
        <div
          className="fade-in-up mt-12 flex flex-col items-center gap-2"
          style={{ animationDelay: "0.5s", opacity: 0 }}
        >
          <span className="text-xs text-slate-500">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-slate-700 rounded-full flex justify-center">
            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
