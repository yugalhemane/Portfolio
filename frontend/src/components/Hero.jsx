import SocialLinks from "./SocialLinks";

export default function Hero() {
  return (
    <section className="pt-10 md:pt-16">
      <p className="text-sm uppercase tracking-[0.3em] text-cyan-400 mb-2">
        Fullstack • Cybersecurity • DevSecOps
      </p>
      <h1 className="text-3xl md:text-5xl font-bold leading-tight">
        Hi, I’m <span className="text-cyan-400">Yugal</span>.
        <br />
        I build secure, intelligent web experiences.
      </h1>
      <p className="mt-4 text-sm md:text-base text-slate-300 max-w-xl">
        Passionate about cybersecurity and developer tooling. I love turning
        ideas into real products, from chatbots and security tools to
        fullstack apps built with React and Node.
      </p>

      <SocialLinks className="mt-5" />
    </section>
  );
}
