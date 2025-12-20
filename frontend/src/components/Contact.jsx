import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useTheme } from "../contexts/ThemeContext";
import { getAccentClasses } from "../utils/themeClasses";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState({ type: null, message: "" });
  const [loading, setLoading] = useState(false);
  const { accentColor, accentConfig } = useTheme();
  const accent = getAccentClasses(accentColor);

  // EmailJS configuration - User needs to set these in their .env file
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "your_service_id";
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "your_template_id";
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "your_public_key";

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ type: null, message: "" });

    if (!form.name || !form.email || !form.message) {
      return setStatus({
        type: "error",
        message: "Please fill in all required fields.",
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      return setStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
    }

    setLoading(true);
    try {
      // Initialize EmailJS (only needed once, but safe to call multiple times)
      emailjs.init(PUBLIC_KEY);

      // Send email using EmailJS
      const templateParams = {
        from_name: form.name,
        from_email: form.email,
        subject: form.subject || "Contact from Portfolio",
        message: form.message,
        to_name: "Yugal", // Your name
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);

      setStatus({
        type: "success",
        message: "Thanks for reaching out! I'll get back to you soon.",
      });
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus({
        type: "error",
        message: err.text || "Failed to send message. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <motion.section
      id="contact"
      className="mt-20 sm:mt-24 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="flex items-center gap-4 mb-4 sm:mb-6"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r ${accentConfig.gradient} bg-clip-text text-transparent`}>
          Let&apos;s talk
        </h2>
        <div className={`flex-1 h-px bg-gradient-to-r ${accent.divider} to-transparent`}></div>
      </motion.div>
      <motion.p
        className="text-sm sm:text-base text-slate-300 mb-6 sm:mb-8 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Have an opportunity, idea, or question? Drop a message and I&apos;ll get
        back to you.
      </motion.p>

      <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8 xl:gap-12">
        {/* Contact Info */}
        <motion.div
          className="mb-8 lg:mb-0 lg:flex-1 lg:max-w-sm"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div
            className={`space-y-4 p-6 rounded-2xl border border-slate-800/50 bg-slate-900/40 backdrop-blur-sm ${accent.borderHover}`}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div>
              <h3 className={`text-sm font-semibold ${accent.text} mb-2`}>
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
                href="mailto:yugalhemane@gmail.com"
                className={`text-sm ${accent.text} ${accent.textHover} transition-colors`}
              >
                yugalhemane@gmail.com
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className={`flex-1 max-w-lg lg:max-w-none space-y-4 rounded-2xl border border-slate-800/50 bg-slate-900/40 backdrop-blur-sm p-6 sm:p-8 transition-all ${accent.borderHover}`}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <label className="text-xs text-slate-400 font-medium">Name *</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              className={`w-full rounded-lg border border-slate-700/50 bg-slate-950/60 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 ${accent.ring} ${accent.focusBorder} transition-all placeholder:text-slate-600`}
              placeholder="Your name"
              required
            />
          </motion.div>

          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <label className="text-xs text-slate-400 font-medium">Email *</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) =>
                setForm((f) => ({ ...f, email: e.target.value }))
              }
              className={`w-full rounded-lg border border-slate-700/50 bg-slate-950/60 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 ${accent.ring} ${accent.focusBorder} transition-all placeholder:text-slate-600`}
              placeholder="your.email@example.com"
              required
            />
          </motion.div>

          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <label className="text-xs text-slate-400 font-medium">Subject</label>
            <input
              type="text"
              value={form.subject}
              onChange={(e) =>
                setForm((f) => ({ ...f, subject: e.target.value }))
              }
              className={`w-full rounded-lg border border-slate-700/50 bg-slate-950/60 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 ${accent.ring} ${accent.focusBorder} transition-all placeholder:text-slate-600`}
              placeholder="Subject (optional)"
            />
          </motion.div>

          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.7 }}
          >
            <label className="text-xs text-slate-400 font-medium">
              Message *
            </label>
            <textarea
              rows={5}
              value={form.message}
              onChange={(e) =>
                setForm((f) => ({ ...f, message: e.target.value }))
              }
              className={`w-full rounded-lg border border-slate-700/50 bg-slate-950/60 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 ${accent.ring} ${accent.focusBorder} transition-all resize-none placeholder:text-slate-600`}
              placeholder="Your message here..."
              required
            />
          </motion.div>

          <AnimatePresence>
            {status.message && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className={`text-xs ${
                  status.type === "error" ? "text-red-400" : "text-emerald-400"
                }`}
              >
                {status.message}
              </motion.p>
            )}
          </AnimatePresence>

          <motion.button
            type="submit"
            disabled={loading}
            className={`w-full px-6 py-3 rounded-xl bg-gradient-to-r ${accentConfig.gradient} text-slate-950 text-sm font-semibold hover:opacity-90 transition-all shadow-lg ${accent.shadow} disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2`}
            whileHover={{ scale: loading ? 1 : 1.02 }}
            whileTap={{ scale: loading ? 1 : 0.98 }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.8 }}
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
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  );
}
