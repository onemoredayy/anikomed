import { Award, BookOpen, Star, Phone } from 'lucide-react';

const DOCTORS = [
  {
    name: 'Анна Курдюкова',
    role: 'Врач-косметолог',
    specialization: 'Специалист по аппаратным методикам',
    image: '/images/anna.jpg',
    experience: '3 года опыта',
    education: 'Первый МГМУ им. Сеченова',
    badges: ['Дерматовенерология', 'Лазерная косметология', 'Эстетическая медицина'],
    rating: 5.0,
    patients: '800+',
    phone: '+7 919 299-67-80',
  },
  {
    name: 'Никита Андреевич',
    role: 'Врач-онколог',
    specialization: 'Специалист по аппаратным методикам',
    image: '/images/nikita.jpg',
    experience: '4 года опыта',
    education: 'ФГБОУ ВО «Смоленский государственный медицинский университет» Минздрава России',
    badges: ['SMAS-лифтинг', 'RF-терапия', 'Инъекционная косметология'],
    rating: 5.0,
    patients: '700+',
    phone: '+7 920 86 03 116',
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase mb-5" style={{ background: 'rgba(44,163,190,0.1)', color: '#0F5A73' }}>
            Квалифицированные специалисты
          </div>
          <h2 className="section-title mb-4">Наша команда — Семья Врачей</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Клиника АникоМед — это семья врачей с многолетним опытом и постоянным профессиональным развитием в области эстетической дерматологии.
          </p>
        </div>

        {/* Doctor cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {DOCTORS.map((doctor, idx) => (
            <div key={idx} className="card-clinic group overflow-hidden">
              <div className="flex gap-6">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-40 rounded-2xl overflow-hidden">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="flex flex-col justify-between flex-1 min-w-0">
                  <div>
                    <span className="text-xs font-semibold text-clinic-blue uppercase tracking-wider">{doctor.role}</span>
                    <h3 className="font-display font-bold text-xl text-clinic-text mt-1 mb-0.5">{doctor.name}</h3>
                    <p className="text-sm text-clinic-textMid">{doctor.specialization}</p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(44,163,190,0.1)' }}>
                        <Award size={14} className="text-clinic-blue" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-clinic-teal">{doctor.experience}</p>
                        <p className="text-xs text-clinic-textLight">Опыт</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(44,163,190,0.1)' }}>
                        <Star size={14} className="text-clinic-blue" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-clinic-teal">{doctor.patients}</p>
                        <p className="text-xs text-clinic-textLight">Пациентов</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="mt-5 pt-5 border-t border-clinic-border">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: 'rgba(15,90,115,0.08)' }}>
                    <BookOpen size={14} className="text-clinic-teal" />
                  </div>
                  <div>
                    <p className="text-xs text-clinic-textLight">Образование</p>
                    <p className="text-sm font-medium text-clinic-text">{doctor.education}</p>
                  </div>
                </div>

                {/* Specialization badges */}
                <div className="flex flex-wrap gap-2">
                  {doctor.badges.map((badge) => (
                    <span
                      key={badge}
                      className="text-xs font-medium px-3 py-1 rounded-full"
                      style={{ background: 'rgba(44,163,190,0.1)', color: '#0F5A73' }}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Rating */}
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(i => (
                      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#2CA3BE"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    ))}
                  </div>
                  <span className="text-sm font-bold text-clinic-teal">{doctor.rating.toFixed(1)}</span>
                </div>
                <a
                  href={`tel:${doctor.phone.replace(/\s/g, '')}`}
                  className="text-xs font-semibold text-clinic-teal hover:text-clinic-blue transition-colors duration-200 flex items-center gap-1"
                >
                  <Phone size={12} />
                  Звонить
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Trust note */}
        <div className="mt-12 rounded-3xl p-8 text-center" style={{ background: 'linear-gradient(135deg, #0F5A73 0%, #2CA3BE 100%)' }}>
          <h3 className="font-display font-bold text-2xl text-white mb-3">Регулярно повышаем квалификацию</h3>
          <p className="text-white/80 max-w-xl mx-auto text-sm leading-relaxed">
            Наши врачи ежегодно проходят обучение на международных конгрессах по эстетической медицине и лазерной хирургии, применяя только доказательные методики.
          </p>
        </div>
      </div>
    </section>
  );
}
