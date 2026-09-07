import { Zap, ArrowUpCircle, Snowflake, Sparkles, Shield } from 'lucide-react';

const SERVICES = [
  {
    icon: Zap,
    title: 'Фотоомоложение',
    device: 'Аппарат M22',
    description: 'Коррекция пигментации, выравнивание тона кожи, лечение купероза и постакне. Процедуры для лица, шеи, декольте и тела.',
    tag: 'Световая терапия',
    color: '#FF8C42',
  },
  {
    icon: ArrowUpCircle,
    title: 'SMAS-лифтинг',
    device: 'Аппарат ULTRAFORMER III',
    description: 'Безоперационная подтяжка лица, шеи и тела. Стимуляция коллагена без хирургического вмешательства. Линии не ограничены.',
    tag: 'Аппаратный лифтинг',
    color: '#0F5A73',
  },
  {
    icon: Sparkles,
    title: 'Микроигольчатый RF-лифтинг',
    device: 'Аппарат Morpheus8',
    description: 'Устранение дряблости, подтяжка кожи и выравнивание рельефа. Комплексные программы для лица, шеи и декольте.',
    tag: 'RF-терапия',
    color: '#8B5CF6',
  },
  {
    icon: Snowflake,
    title: 'Криолиполиз',
    device: 'Аппарат Cryo S360',
    description: 'Безоперационная коррекция фигуры. Криолиполиз любой области тела и кавитация для моделирования силуэта.',
    tag: 'Коррекция фигуры',
    color: '#2CA3BE',
  },
  {
    icon: Shield,
    title: 'Удаление новообразований',
    device: 'Медицинская дерматология',
    description: 'Безопасное удаление доброкачественных образований на лице, теле и в деликатных зонах. Цена зависит от размера и локализации.',
    tag: 'Дерматология',
    color: '#EF4444',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase mb-5" style={{ background: 'rgba(44,163,190,0.1)', color: '#0F5A73' }}>
            Профессиональные процедуры
          </div>
          <h2 className="section-title mb-4">Наши услуги и процедуры</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Комплексный подход к красоте и здоровью кожи с использованием сертифицированного оборудования мирового уровня.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className="card-clinic group cursor-default relative overflow-hidden"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: `linear-gradient(90deg, ${service.color}80, ${service.color})` }} />

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${service.color}15` }}
                >
                  <Icon size={22} style={{ color: service.color }} />
                </div>

                {/* Tag */}
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: service.color }}>
                  {service.tag}
                </span>

                {/* Title */}
                <h3 className="font-display font-semibold text-lg text-clinic-text mt-2 mb-1 leading-snug">
                  {service.title}
                </h3>
                <p className="text-xs font-medium text-clinic-textLight mb-3">{service.device}</p>

                {/* Description */}
                <p className="text-clinic-textMid text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* CTA */}
                <a
                  href="#prices"
                  className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold text-clinic-teal hover:text-clinic-blue transition-colors duration-200"
                >
                  Узнать цены
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p className="text-clinic-textMid mb-5">Не нашли нужную процедуру? Свяжитесь с нами — мы подберём решение для вас.</p>
          <a href="#contacts" className="btn-primary">Бесплатная консультация</a>
        </div>
      </div>
    </section>
  );
}
