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
      const res = await fetch("http://localhost:5000/api/contact", {
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
    <section id="contact" className="mt-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-3">Let&apos;s talk</h2>
      <p className="text-sm text-slate-300 mb-4 max-w-md">
        Have an opportunity, idea, or question? Drop a message and I&apos;ll
        get back to you.
      </p>

      <form
        onSubmit={handleSubmit}
        className="max-w-md space-y-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-4"
      >
        <div className="space-y-1">
          <label className="text-xs text-slate-300">Name</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            className="w-full rounded-lg border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/70"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs text-slate-300">Email</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            className="w-full rounded-lg border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/70"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs text-slate-300">Message</label>
          <textarea
            rows={4}
            value={form.message}
            onChange={(e) =>
              setForm((f) => ({ ...f, message: e.target.value }))
            }
            className="w-full rounded-lg border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/70 resize-none"
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
          className="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 text-sm font-semibold hover:bg-cyan-400 transition disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "Sending..." : "Send message"}
        </button>
      </form>
    </section>
  );
}
