import { MapPin, Clock, Phone, Mail, ExternalLink } from 'lucide-react';

const HOURS = [
  { day: 'Понедельник', time: '10:00–12:00, 16:00–21:00' },
  { day: 'Вторник', time: '10:00–12:00, 16:00–21:00' },
  { day: 'Среда', time: '10:00–12:00, 16:00–21:00' },
  { day: 'Четверг', time: '10:00–12:00, 16:00–21:00' },
  { day: 'Пятница', time: '10:00–12:00, 16:00–21:00' },
  { day: 'Суббота', time: '10:00–21:00 (без перерыва)' },
  { day: 'Воскресенье', time: '10:00–21:00 (без перерыва)' },
];

const ADDRESS = 'Московская обл., Мытищи, 3-я Крестьянская ул., с23';
const YANDEX_MAPS_URL = 'https://yandex.ru/maps/-/CPX3yGjx';
const EMAIL = 'Anna.kurdyukova03@mail.ru';

export default function Location() {
  return (
    <section id="location" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase mb-5" style={{ background: 'rgba(44,163,190,0.1)', color: '#0F5A73' }}>
            Как нас найти
          </div>
          <h2 className="section-title mb-4">Мы на карте</h2>
          <p className="section-subtitle">Удобное расположение в центре города, рядом с метро</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 rounded-3xl overflow-hidden relative" style={{ minHeight: 420, background: 'linear-gradient(135deg, #EEF5F8 0%, #D4E8EF 100%)' }}>
            <div className="absolute inset-0 flex flex-col">
              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                    <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#C5DDE6" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
                <rect x="0" y="42%" width="100%" height="16%" fill="#D8EDF3" rx="0"/>
                <rect x="35%" y="0" width="12%" height="100%" fill="#D8EDF3" rx="0"/>
                <rect x="62%" y="0" width="8%" height="100%" fill="#D8EDF3" rx="0"/>
                <rect x="0" y="68%" width="100%" height="10%" fill="#D8EDF3" rx="0"/>
                <line x1="0" y1="50%" x2="33%" y2="50%" stroke="#C0D9E2" strokeWidth="2" strokeDasharray="20,15"/>
                <line x1="47%" y1="50%" x2="61%" y2="50%" stroke="#C0D9E2" strokeWidth="2" strokeDasharray="20,15"/>
                <line x1="70%" y1="50%" x2="100%" y2="50%" stroke="#C0D9E2" strokeWidth="2" strokeDasharray="20,15"/>
                <rect x="5%" y="8%" width="25%" height="30%" fill="#C5DDE6" rx="8"/>
                <rect x="50%" y="5%" width="10%" height="35%" fill="#C5DDE6" rx="8"/>
                <rect x="73%" y="10%" width="20%" height="28%" fill="#C5DDE6" rx="8"/>
                <rect x="5%" y="62%" width="27%" height="25%" fill="#C5DDE6" rx="8"/>
                <rect x="50%" y="80%" width="42%" height="14%" fill="#C5DDE6" rx="8"/>
              </svg>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full flex flex-col items-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl border-4 border-white"
                  style={{ background: 'linear-gradient(135deg, #0F5A73 0%, #2CA3BE 100%)' }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M12 2v20M2 12h20" />
                    <circle cx="12" cy="12" r="3" fill="white" stroke="none" />
                  </svg>
                </div>
                <div className="mt-1 bg-white rounded-xl px-3 py-1.5 shadow-lg text-xs font-semibold text-clinic-teal whitespace-nowrap">
                  АникоМед
                </div>
                <div className="w-1 h-3 bg-clinic-teal/40" />
                <div className="w-2 h-2 rounded-full bg-clinic-teal/30" />
              </div>
            </div>

            <a
              href={YANDEX_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 text-xs text-clinic-textLight flex items-center gap-1.5 hover:text-clinic-teal transition-colors"
            >
              <MapPin size={12} className="text-clinic-blue" />
              {ADDRESS}
            </a>
          </div>

          <div className="flex flex-col gap-5">
            <div className="card-clinic">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(44,163,190,0.1)' }}>
                  <MapPin size={20} className="text-clinic-blue" />
                </div>
                <div>
                  <p className="font-semibold text-clinic-text mb-1">Адрес</p>
                  <a
                    href={YANDEX_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-clinic-textMid leading-relaxed hover:text-clinic-teal transition-colors"
                  >
                    {ADDRESS}
                  </a>
                  <a
                    href={YANDEX_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-clinic-blue mt-2 hover:text-clinic-teal transition-colors"
                  >
                    Открыть на карте <ExternalLink size={11} />
                  </a>
                </div>
              </div>
            </div>

            <div className="card-clinic">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(44,163,190,0.1)' }}>
                  <Clock size={20} className="text-clinic-blue" />
                </div>
                <p className="font-semibold text-clinic-text self-center">Режим работы</p>
              </div>
              <ul className="flex flex-col gap-2.5">
                {HOURS.map(({ day, time }) => (
                  <li key={day} className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-0.5 text-sm border-b border-clinic-border/60 pb-2.5 last:border-0 last:pb-0">
                    <span className="text-clinic-textMid font-medium">{day}</span>
                    <span className="font-semibold text-clinic-teal sm:text-right">{time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-clinic">
              <div className="flex flex-col gap-4">
                <a href="tel:+79192996780" className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(44,163,190,0.1)' }}>
                    <Phone size={20} className="text-clinic-blue" />
                  </div>
                  <div>
                    <p className="text-xs text-clinic-textLight">Телефон</p>
                    <p className="font-semibold text-clinic-text group-hover:text-clinic-blue transition-colors">+7 919 299-67-80</p>
                  </div>
                </a>
                <div className="border-t border-clinic-border" />
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(44,163,190,0.1)' }}>
                    <Mail size={20} className="text-clinic-blue" />
                  </div>
                  <div>
                    <p className="text-xs text-clinic-textLight">Email</p>
                    <p className="font-semibold text-clinic-text group-hover:text-clinic-blue transition-colors text-sm">{EMAIL}</p>
                  </div>
                </a>
              </div>
            </div>

            <a href="#contacts" className="btn-primary justify-center">
              Записаться онлайн
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
