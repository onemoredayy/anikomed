import { ArrowRight, Shield, Award, Users } from 'lucide-react';

const STATS = [
  { value: '1 500+', label: 'Процедур выполнено', icon: Shield },
  { value: '3 года', label: 'Медицинского опыта', icon: Award },
  { value: '98%', label: 'Довольных пациентов', icon: Users },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      style={{ background: 'linear-gradient(160deg, #F6FAFB 0%, #EEF5F8 50%, #E0EFF5 100%)' }}
    >
      {/* Background geometric accents */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 80% 30%, #2CA3BE 0%, transparent 70%)' }}
      />
      <div
        className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #0F5A73 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase mb-8" style={{ background: 'rgba(44,163,190,0.1)', color: '#0F5A73' }}>
              <span className="w-2 h-2 rounded-full bg-clinic-blue animate-pulse" />
              Семейная клиника эстетической дерматологии
            </div>

            <h1 className="font-display text-4xl sm:text-5xl xl:text-6xl font-bold text-clinic-text leading-[1.12] mb-6">
              АникоМед —
              <br />
              <span className="text-gradient">Кожа, которой</span>
              <br />
              вы гордитесь
            </h1>

            <p className="text-clinic-textMid text-lg leading-relaxed mb-10 max-w-xl">
              Индивидуальный подход, безопасность на первом месте и высокий уровень медицинской экспертизы от семьи квалифицированных врачей.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#contacts" className="btn-primary">
                Записаться на бесплатную консультацию
                <ArrowRight size={18} />
              </a>
              <a href="#services" className="btn-outline">
                Наши услуги
              </a>
            </div>

            {/* Stats */}
            <div className="mt-14 grid grid-cols-3 gap-6 pt-10 border-t border-clinic-border">
              {STATS.map(({ value, label, icon: Icon }) => (
                <div key={label} className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <Icon size={16} className="text-clinic-blue flex-shrink-0" />
                    <span className="font-display font-bold text-2xl text-clinic-teal">{value}</span>
                  </div>
                  <span className="text-xs text-clinic-textLight leading-snug">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — image */}
          <div className="relative animate-fade-in-up animate-delay-200 hidden lg:block">
            <div
              className="absolute -inset-4 rounded-3xl opacity-20"
              style={{ background: 'linear-gradient(135deg, #0F5A73 0%, #2CA3BE 100%)' }}
            />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
              <img
                src="https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=900&h=1100&fit=crop"
                alt="Эстетическая дерматология"
                className="w-full h-full object-cover"
              />
              {/* Overlay card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-5 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #0F5A73 0%, #2CA3BE 100%)' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2v20M2 12h20" />
                      <circle cx="12" cy="12" r="3" fill="white" stroke="none" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-clinic-text text-sm">Безопасность прежде всего</p>
                    <p className="text-xs text-clinic-textLight mt-0.5">Все процедуры сертифицированы и лицензированы</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-card">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-display font-bold text-clinic-teal">5.0</span>
                <div className="flex flex-col gap-0.5">
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(i => (
                      <svg key={i} width="10" height="10" viewBox="0 0 24 24" fill="#2CA3BE"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    ))}
                  </div>
                  <span className="text-xs text-clinic-textLight">Рейтинг клиники</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
