import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { SOCIAL_HREFS } from '../constants/socialLinks';

const NAV_LINKS = [
  { label: 'Услуги', href: '#services' },
  { label: 'Цены', href: '#prices' },
  { label: 'Наша команда', href: '#team' },
  { label: 'Отзывы', href: '#reviews' },
  { label: 'Контакты', href: '#contacts' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-clinic-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 flex-shrink-0 group">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #0F5A73 0%, #2CA3BE 100%)' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M2 12h20" />
                <circle cx="12" cy="12" r="3" fill="white" stroke="none" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl leading-none text-clinic-teal">АникоМед</span>
              <span className="text-xs text-clinic-textLight leading-none mt-0.5 hidden sm:block">Эстетическая дерматология экспертного уровня</span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-clinic-textMid hover:text-clinic-teal rounded-lg transition-colors duration-200 hover:bg-clinic-bgAlt"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href={SOCIAL_HREFS.telegram} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg flex items-center justify-center text-[#0088CC] hover:bg-clinic-bgAlt transition-colors duration-200" aria-label="Telegram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.17 13.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.978.942z"/></svg>
            </a>
            <a href="tel:+79192996780" className="flex items-center gap-2 text-sm font-medium text-clinic-teal hover:text-clinic-blue transition-colors duration-200">
              <Phone size={16} />
              <span>+7 919 299-67-80</span>
            </a>
            <a href="#contacts" className="btn-primary text-sm">
              Записаться на приём
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-lg text-clinic-teal hover:bg-clinic-bgAlt transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Меню"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ background: 'rgba(255,255,255,0.98)', backdropFilter: 'blur(12px)' }}
      >
        <div className="max-w-7xl mx-auto px-4 pb-6 pt-2 flex flex-col gap-1 border-t border-clinic-border">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="px-4 py-3 text-base font-medium text-clinic-textMid hover:text-clinic-teal rounded-xl transition-colors duration-200 hover:bg-clinic-bgAlt"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-4 flex flex-col gap-3">
            <a href={SOCIAL_HREFS.telegram} target="_blank" rel="noopener noreferrer" className="mx-4 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-base font-medium text-[#0088CC] bg-clinic-bgAlt" aria-label="Telegram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.17 13.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.978.942z"/></svg>
              Telegram
            </a>
            <a href="tel:+79192996780" className="flex items-center gap-2 px-4 py-3 text-base font-medium text-clinic-teal">
              <Phone size={18} />
              <span>+7 919 299-67-80</span>
            </a>
            <a
              href="#contacts"
              onClick={() => setMobileOpen(false)}
              className="btn-primary justify-center"
            >
              Записаться на приём
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
