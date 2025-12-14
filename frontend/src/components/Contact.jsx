import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: null, message: "" });
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ type: null, message: "" });

    if (!form.name || !form.email || !form.message) {
      return setStatus({
        type: "error",
        message: "Please fill in all fields.",
      });
    }

    setLoading(true);
    try {
      const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus({
        type: "success",
        message: "Thanks for reaching out! I’ll get back to you soon.",
      });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus({
        type: "error",
        message: err.message || "Failed to send message.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="mt-20 sm:mt-24 scroll-mt-20">
      <div className="flex items-center gap-4 mb-4 sm:mb-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient">
          Let&apos;s talk
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/50 to-transparent"></div>
      </div>
      <p className="text-sm sm:text-base text-slate-300 mb-6 sm:mb-8 max-w-2xl">
        Have an opportunity, idea, or question? Drop a message and I&apos;ll get
        back to you.
      </p>

      <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8 xl:gap-12">
        {/* Contact Info */}
        <div className="mb-8 lg:mb-0 lg:flex-1 lg:max-w-sm">
          <div className="space-y-4 p-6 rounded-2xl border border-slate-800/50 bg-slate-900/40 backdrop-blur-sm">
            <div>
              <h3 className="text-sm font-semibold text-cyan-400 mb-2">
                Get in touch
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800/50">
              <p className="text-xs text-slate-400 mb-1">Email</p>
              <a
                href="mailto:yourmail@example.com"
                className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                yourmail@example.com
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 max-w-lg lg:max-w-none space-y-4 rounded-2xl border border-slate-800/50 bg-slate-900/40 backdrop-blur-sm p-6 sm:p-8 hover:border-cyan-400/30 transition-all"
        >
          <div className="space-y-2">
            <label className="text-xs text-slate-400 font-medium">Name</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              className="w-full rounded-lg border border-slate-700/50 bg-slate-950/60 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400/50 transition-all placeholder:text-slate-600"
              placeholder="Your name"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs text-slate-400 font-medium">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) =>
                setForm((f) => ({ ...f, email: e.target.value }))
              }
              className="w-full rounded-lg border border-slate-700/50 bg-slate-950/60 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400/50 transition-all placeholder:text-slate-600"
              placeholder="your.email@example.com"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs text-slate-400 font-medium">
              Message
            </label>
            <textarea
              rows={5}
              value={form.message}
              onChange={(e) =>
                setForm((f) => ({ ...f, message: e.target.value }))
              }
              className="w-full rounded-lg border border-slate-700/50 bg-slate-950/60 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400/50 transition-all resize-none placeholder:text-slate-600"
              placeholder="Your message here..."
            />
          </div>

          {status.message && (
            <p
              className={`text-xs ${
                status.type === "error" ? "text-red-400" : "text-emerald-400"
              }`}
            >
              {status.message}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 text-sm font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all shadow-lg hover:shadow-cyan-500/50 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:shadow-lg flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending...
              </>
            ) : (
              <>
                Send message
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
