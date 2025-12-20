import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

const THEMES = {
  dark: {
    name: 'dark',
    bg: 'from-slate-950 via-slate-900 to-slate-950',
    text: 'text-slate-100',
    card: 'bg-slate-900/40',
    border: 'border-slate-800/50',
    accent: 'cyan',
  },
  light: {
    name: 'light',
    bg: 'from-slate-50 via-slate-100 to-slate-50',
    text: 'text-slate-900',
    card: 'bg-white/80',
    border: 'border-slate-300/50',
    accent: 'cyan',
  },
};

const ACCENT_COLORS = {
  cyan: {
    primary: 'cyan',
    gradient: 'from-cyan-400 via-blue-400 to-purple-400',
    hover: 'hover:text-cyan-400',
    border: 'border-cyan-400',
    bg: 'bg-cyan-500',
  },
  purple: {
    primary: 'purple',
    gradient: 'from-purple-400 via-pink-400 to-rose-400',
    hover: 'hover:text-purple-400',
    border: 'border-purple-400',
    bg: 'bg-purple-500',
  },
  green: {
    primary: 'green',
    gradient: 'from-green-400 via-emerald-400 to-teal-400',
    hover: 'hover:text-green-400',
    border: 'border-green-400',
    bg: 'bg-green-500',
  },
  orange: {
    primary: 'orange',
    gradient: 'from-orange-400 via-amber-400 to-yellow-400',
    hover: 'hover:text-orange-400',
    border: 'border-orange-400',
    bg: 'bg-orange-500',
  },
  blue: {
    primary: 'blue',
    gradient: 'from-blue-400 via-indigo-400 to-purple-400',
    hover: 'hover:text-blue-400',
    border: 'border-blue-400',
    bg: 'bg-blue-500',
  },
  pink: {
    primary: 'pink',
    gradient: 'from-pink-400 via-rose-400 to-red-400',
    hover: 'hover:text-pink-400',
    border: 'border-pink-400',
    bg: 'bg-pink-500',
  },
};

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme');
    return saved === 'light' ? 'light' : 'dark';
  });
  
  const [accentColor, setAccentColor] = useState(() => {
    const saved = localStorage.getItem('portfolio-accent');
    return saved || 'cyan';
  });

  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('portfolio-accent', accentColor);
  }, [accentColor]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const changeAccentColor = (color) => {
    setAccentColor(color);
  };

  const value = {
    theme,
    themeConfig: THEMES[theme],
    accentColor,
    accentConfig: ACCENT_COLORS[accentColor],
    toggleTheme,
    changeAccentColor,
    themes: THEMES,
    accentColors: ACCENT_COLORS,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}

