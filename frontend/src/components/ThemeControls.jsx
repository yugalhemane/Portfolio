import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const colorGradients = {
  cyan: 'from-cyan-400 to-blue-500',
  purple: 'from-purple-400 to-pink-500',
  green: 'from-green-400 to-emerald-500',
  orange: 'from-orange-400 to-amber-500',
  blue: 'from-blue-400 to-indigo-500',
  pink: 'from-pink-400 to-rose-500',
};

export default function ThemeControls() {
  const { theme, toggleTheme, accentColor, changeAccentColor, accentColors } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const colorOptions = Object.keys(accentColors);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Color Picker */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-2 p-3 rounded-2xl backdrop-blur-xl bg-slate-900/90 border border-slate-800/50 shadow-2xl"
          >
            <p className="text-xs text-slate-400 mb-2 px-1">Accent Color</p>
            <div className="flex gap-2">
              {colorOptions.map((color) => (
                <button
                  key={color}
                  onClick={() => changeAccentColor(color)}
                  className={`
                    w-8 h-8 rounded-full border-2 transition-all
                    ${accentColor === color 
                      ? 'border-white scale-110 shadow-lg' 
                      : 'border-slate-700 hover:border-slate-500'
                    }
                    bg-gradient-to-br ${colorGradients[color] || colorGradients.cyan}
                  `}
                  aria-label={`Change accent to ${color}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Theme Toggle & Settings Button */}
      <div className="flex gap-2">
        {/* Theme Toggle */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleTheme}
          className="p-3 rounded-full backdrop-blur-xl bg-slate-900/90 border border-slate-800/50 shadow-2xl hover:border-slate-700 transition-colors"
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? (
            <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </motion.button>

        {/* Settings Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className={`p-3 rounded-full backdrop-blur-xl bg-slate-900/90 border border-slate-800/50 shadow-2xl hover:border-slate-700 transition-colors ${
            isOpen ? 'bg-cyan-500/20 border-cyan-400/50' : ''
          }`}
          aria-label="Theme settings"
        >
          <svg className="w-5 h-5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
        </motion.button>
      </div>
    </div>
  );
}
