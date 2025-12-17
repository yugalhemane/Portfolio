import { useEffect, useState } from "react";
import SocialLinks from "./SocialLinks";

const roles = [
  "Fullstack Developer",
  "Cybersecurity Enthusiast",
  "DevSecOps Engineer",
  "Problem Solver",
];

// Manually changeable image
const PROFILE_IMAGE = "/profile.jpg";

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  /* =====================
     TYPEWRITER EFFECT
  ====================== */
  useEffect(() => {
    const role = roles[currentRole];
    let timeout;

    if (!isDeleting && displayText.length < role.length) {
      timeout = setTimeout(
        () => setDisplayText(role.slice(0, displayText.length + 1)),
        90
      );
    } else if (!isDeleting && displayText.length === role.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(
        () => setDisplayText(role.slice(0, displayText.length - 1)),
        45
      );
    } else {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section className="relative pt-16 md:pt-24 pb-24 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full" />
        <div className="absolute top-1/3 right-0 w-[28rem] h-[28rem] bg-purple-500/20 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 mx-auto xl:max-w-[130rem]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* ================= LEFT: TEXT ================= */}
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-400 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              Fullstack • Cybersecurity • DevSecOps
            </p>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
              <span className="block">Hi, I’m</span>
              <span className="text-gradient">Yugal</span>
              <span className="block mt-3">
                I build <span className="text-gradient">secure</span>,{" "}
                <span className="text-gradient">intelligent</span> web
                experiences.
              </span>
            </h1>

            <div className="mt-6 flex items-center gap-3">
              <span className="text-lg text-slate-400">I’m a</span>
              <span className="text-lg font-semibold text-cyan-400 min-w-[260px]">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </div>

            <p className="mt-6 text-slate-300 max-w-xl leading-relaxed">
              Passionate about{" "}
              <span className="text-cyan-400 font-semibold">cybersecurity</span>{" "}
              and{" "}
              <span className="text-cyan-400 font-semibold">
                developer tooling
              </span>
              . I turn ideas into real products — from security tools to
              full-stack platforms.
            </p>

            <div className="mt-8">
              <SocialLinks />
            </div>
          </div>

          {/* ================= RIGHT: PROFILE ================= */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group perspective-[1200px]">
              {/* Glow background */}
              <div className="absolute -inset-6 rounded-[36px] bg-gradient-to-br from-cyan-500/30 via-blue-500/20 to-purple-500/30 blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Glass frame */}
              <div className="relative rounded-[32px] p-[2px] bg-gradient-to-br from-cyan-400/60 to-purple-500/60">
                <div
                  className="
                    relative overflow-hidden rounded-[30px]
                    bg-slate-900
                    transform transition-transform duration-700
                    lg:group-hover:rotate-y-[-8deg]
                    lg:group-hover:rotate-x-[4deg]
                  "
                >
                  {/* Image */}
                  <img
                    src="/profile.jpg"
                    alt="Yugal"
                    className="
                      w-[220px] h-[280px]
                      sm:w-[240px] sm:h-[320px]
                      xl:w-[300px] xl:h-[380px]
                      object-cover
                      mask-gradient
                    "
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://github.com/yugalhemane.png";
                    }}
                  />

                  {/* Fade overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="mt-20 flex justify-center">
          <div className="flex flex-col items-center gap-2 text-slate-500">
            <span className="text-xs">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-slate-700 rounded-full flex justify-center">
              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
