// Utility function to get Tailwind classes based on accent color
// This ensures Tailwind can detect all class names at build time

export function getAccentClasses(accentColor) {
  const classes = {
    cyan: {
      text: 'text-cyan-400',
      textHover: 'hover:text-cyan-300',
      border: 'border-cyan-400',
      borderHover: 'hover:border-cyan-400/50',
      ring: 'focus:ring-cyan-500/50',
      focusBorder: 'focus:border-cyan-400/50',
      gradient: 'from-cyan-400 via-blue-400 to-purple-400',
      bgGradient: 'from-cyan-500 to-blue-500',
      shadow: 'hover:shadow-cyan-500/50',
      divider: 'from-cyan-400/50',
    },
    purple: {
      text: 'text-purple-400',
      textHover: 'hover:text-purple-300',
      border: 'border-purple-400',
      borderHover: 'hover:border-purple-400/50',
      ring: 'focus:ring-purple-500/50',
      focusBorder: 'focus:border-purple-400/50',
      gradient: 'from-purple-400 via-pink-400 to-rose-400',
      bgGradient: 'from-purple-500 to-pink-500',
      shadow: 'hover:shadow-purple-500/50',
      divider: 'from-purple-400/50',
    },
    green: {
      text: 'text-green-400',
      textHover: 'hover:text-green-300',
      border: 'border-green-400',
      borderHover: 'hover:border-green-400/50',
      ring: 'focus:ring-green-500/50',
      focusBorder: 'focus:border-green-400/50',
      gradient: 'from-green-400 via-emerald-400 to-teal-400',
      bgGradient: 'from-green-500 to-emerald-500',
      shadow: 'hover:shadow-green-500/50',
      divider: 'from-green-400/50',
    },
    orange: {
      text: 'text-orange-400',
      textHover: 'hover:text-orange-300',
      border: 'border-orange-400',
      borderHover: 'hover:border-orange-400/50',
      ring: 'focus:ring-orange-500/50',
      focusBorder: 'focus:border-orange-400/50',
      gradient: 'from-orange-400 via-amber-400 to-yellow-400',
      bgGradient: 'from-orange-500 to-amber-500',
      shadow: 'hover:shadow-orange-500/50',
      divider: 'from-orange-400/50',
    },
    blue: {
      text: 'text-blue-400',
      textHover: 'hover:text-blue-300',
      border: 'border-blue-400',
      borderHover: 'hover:border-blue-400/50',
      ring: 'focus:ring-blue-500/50',
      focusBorder: 'focus:border-blue-400/50',
      gradient: 'from-blue-400 via-indigo-400 to-purple-400',
      bgGradient: 'from-blue-500 to-indigo-500',
      shadow: 'hover:shadow-blue-500/50',
      divider: 'from-blue-400/50',
    },
    pink: {
      text: 'text-pink-400',
      textHover: 'hover:text-pink-300',
      border: 'border-pink-400',
      borderHover: 'hover:border-pink-400/50',
      ring: 'focus:ring-pink-500/50',
      focusBorder: 'focus:border-pink-400/50',
      gradient: 'from-pink-400 via-rose-400 to-red-400',
      bgGradient: 'from-pink-500 to-rose-500',
      shadow: 'hover:shadow-pink-500/50',
      divider: 'from-pink-400/50',
    },
  };

  return classes[accentColor] || classes.cyan;
}

