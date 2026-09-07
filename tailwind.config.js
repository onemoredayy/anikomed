/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        clinic: {
          teal: '#0F5A73',
          blue: '#2CA3BE',
          tealLight: '#1A7A9A',
          bg: '#F6FAFB',
          bgAlt: '#EEF5F8',
          border: '#D4E8EF',
          text: '#0D1F2D',
          textMid: '#3D5A6C',
          textLight: '#7B9BAB',
        },
      },
      backgroundImage: {
        'gradient-clinic': 'linear-gradient(135deg, #0F5A73 0%, #2CA3BE 100%)',
      },
      boxShadow: {
        'card': '0 4px 24px rgba(15,90,115,0.08)',
        'card-hover': '0 12px 40px rgba(15,90,115,0.16)',
        'modal': '0 24px 80px rgba(15,90,115,0.22)',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.92)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'scale-in': 'scaleIn 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'slide-right': 'slideRight 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};
