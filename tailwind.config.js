export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'medical-blue': '#1e40af',
        'medical-light': '#3b82f6',
        'medical-accent': '#ef4444',
        'heart-red': '#dc2626',
        'trust-blue': '#0f172a',
        'care-teal': '#0d9488',
      },
      backgroundImage: {
        'gradient-medical':
          'linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #0d9488 100%)',
        'gradient-hero':
          'linear-gradient(135deg, #0f172a 0%, #1e40af 50%, #3b82f6 100%)',
        'gradient-accent': 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)',
      },
      fontFamily: {
        medical: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        heartbeat: 'heartbeat 1.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
      },
    },
  },
  plugins: [],
};
