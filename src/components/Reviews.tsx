import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const REVIEWS = [
  {
    name: 'Анастасия М.',
    procedure: 'Фотоомоложение M22',
    rating: 5,
    date: 'Март 2024',
    text: 'Потрясающий результат! После первого сеанса фотоомоложения заметно улучшился тон кожи, ушла пигментация на щеках. Врачи очень внимательны, объяснили всё подробно. Обязательно вернусь на повторный курс.',
    avatar: 'А',
    color: '#0F5A73',
  },
  {
    name: 'Ирина В.',
    procedure: 'SMAS-Лифтинг Ultraformer III',
    rating: 5,
    date: 'Февраль 2024',
    text: 'Делала SMAS-лифтинг — невероятно! Овал лица подтянулся без единого укола. Процедура практически безболезненная. Результат сохраняется уже 4 месяца. Клиника чистая, современная, персонал профессиональный.',
    avatar: 'И',
    color: '#2CA3BE',
  },
  {
    name: 'Елена К.',
    procedure: 'Биоревитализация',
    rating: 5,
    date: 'Январь 2024',
    text: 'Обратилась с проблемой сухости и тусклости кожи. После курса биоревитализации кожа просто засияла! Никогда не думала, что можно достичь такого увлажнения. Врач объяснила весь уход, я очень довольна.',
    avatar: 'Е',
    color: '#10B981',
  },
  {
    name: 'Ольга Т.',
    procedure: 'Удаление новообразований',
    rating: 5,
    date: 'Декабрь 2023',
    text: 'Боялась убирать папилломы, но зря! Всё быстро, профессионально и практически безболезненно. Заживление прошло отлично. Теперь направлю всю семью — это действительно семейная клиника в лучшем смысле.',
    avatar: 'О',
    color: '#F59E0B',
  },
  {
    name: 'Дарья Н.',
    procedure: 'Криолиполиз',
    rating: 5,
    date: 'Ноябрь 2023',
    text: 'Делала криолиполиз живота — спустя 2 месяца результат очевиден! Объём ушёл заметно, а ещё параллельно посоветовали кавитацию, и вместе это работает просто отлично. Приятная атмосфера, уютная клиника.',
    avatar: 'Д',
    color: '#EF4444',
  },
  {
    name: 'Мария С.',
    procedure: 'RF-лифтинг Morpheus 8',
    rating: 5,
    date: 'Октябрь 2023',
    text: 'Решилась на Morpheus 8 после долгих раздумий. Результат превзошёл все ожидания — кожа стала значительно плотнее, исчезла мелкая морщинистость. Врач была очень внимательна и профессиональна.',
    avatar: 'М',
    color: '#8B5CF6',
  },
];

function ReviewCard({ review }: { review: (typeof REVIEWS)[number] }) {
  return (
    <div className="card-clinic flex w-full flex-col">
      <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `${review.color}15` }}>
        <Quote size={18} style={{ color: review.color }} />
      </div>

      <div className="flex gap-1 mb-3">
        {[1, 2, 3, 4, 5].map((j) => (
          <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="#2CA3BE">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>

      <p className="text-clinic-textMid text-sm leading-relaxed flex-1">{review.text}</p>

      <div className="mt-6 pt-5 border-t border-clinic-border flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
          style={{ background: `linear-gradient(135deg, ${review.color}, ${review.color}99)` }}
        >
          {review.avatar}
        </div>
        <div className="min-w-0">
          <p className="font-semibold text-sm text-clinic-text">{review.name}</p>
          <p className="text-xs text-clinic-textLight">{review.procedure} · {review.date}</p>
        </div>
      </div>
    </div>
  );
}

const SOCIAL_POSTS = [
  { id: 1, img: 'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop', likes: '124' },
  { id: 2, img: 'https://images.pexels.com/photos/3985170/pexels-photo-3985170.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop', likes: '89' },
  { id: 3, img: 'https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop', likes: '201' },
  { id: 4, img: 'https://images.pexels.com/photos/5069434/pexels-photo-5069434.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop', likes: '156' },
  { id: 5, img: 'https://images.pexels.com/photos/3985171/pexels-photo-3985171.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop', likes: '312' },
  { id: 6, img: 'https://images.pexels.com/photos/3985173/pexels-photo-3985173.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop', likes: '97' },
];

const SOCIAL_NETWORKS: {
  label: string;
  href: string;
  color: string;
  icon: React.ReactNode;
}[] = [
  {
    label: 'ВКонтакте',
    href: 'https://vk.ru/club238911776',
    color: '#0077FF',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1.01-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.204.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z"/>
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/message/QQ3FPC3CVVM4J1?src=qr',
    color: '#25D366',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
  {
    label: 'Telegram',
    href: 'https://t.me/AnikoMed_bot',
    color: '#0088CC',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.17 13.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.978.942z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/anikomed_studia?utm_source=qr&igsh=bWg0bnBhbDZzMXg0',
    color: '#E1306C',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
];

export default function Reviews() {
  const [activeIdx, setActiveIdx] = useState(0);
  const visible = 3;
  const maxIdx = REVIEWS.length - visible;

  const prev = () => setActiveIdx((i) => Math.max(0, i - 1));
  const next = () => setActiveIdx((i) => Math.min(maxIdx, i + 1));

  return (
    <section id="reviews" className="py-24" style={{ background: 'linear-gradient(180deg, #EEF5F8 0%, #F6FAFB 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Reviews */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase mb-5" style={{ background: 'rgba(44,163,190,0.1)', color: '#0F5A73' }}>
                Реальные отзывы
              </div>
              <h2 className="section-title">Отзывы наших пациентов</h2>
            </div>
            <div className="hidden md:flex gap-3">
              <button
                onClick={prev}
                disabled={activeIdx === 0}
                className="w-11 h-11 rounded-xl border-2 border-clinic-border flex items-center justify-center text-clinic-textMid hover:border-clinic-blue hover:text-clinic-blue disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                disabled={activeIdx >= maxIdx}
                className="w-11 h-11 rounded-xl border-2 border-clinic-border flex items-center justify-center text-clinic-textMid hover:border-clinic-blue hover:text-clinic-blue disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Mobile: single column, full width */}
          <div className="flex flex-col gap-4 md:hidden">
            {REVIEWS.map((review, i) => (
              <ReviewCard key={i} review={review} />
            ))}
          </div>

          {/* Desktop: 3-column carousel */}
          <div className="hidden md:block overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(calc(-${activeIdx} * (100% / ${visible} + 8px)))` }}
            >
              {REVIEWS.map((review, i) => (
                <div
                  key={i}
                  className="flex-shrink-0"
                  style={{ width: `calc((100% - ${(visible - 1) * 24}px) / ${visible})` }}
                >
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>
          </div>

          {/* Dots — desktop carousel only */}
          <div className="hidden md:flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIdx + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: activeIdx === i ? 24 : 8,
                  height: 8,
                  background: activeIdx === i ? '#2CA3BE' : '#D4E8EF',
                }}
              />
            ))}
          </div>
        </div>

        {/* Social section */}
        <div id="contacts" className="scroll-mt-24">
          <div className="text-center mb-10">
            <h2 className="section-title mb-3">Мы в соцсетях</h2>
            <p className="section-subtitle">Следите за нашими работами и советами по уходу за кожей</p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {SOCIAL_POSTS.map((post) => (
              <div key={post.id} className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer">
                <img
                  src={post.img}
                  alt="Публикация клиники"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-clinic-teal/0 group-hover:bg-clinic-teal/50 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white flex items-center gap-1.5 font-semibold text-sm">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                    {post.likes}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-clinic-textMid text-sm mb-4">Подписывайтесь и будьте в курсе наших акций</p>
            <div className="flex flex-wrap justify-center gap-3">
              {SOCIAL_NETWORKS.map(({ label, href, color, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90 hover:scale-105"
                  style={{ background: color }}
                >
                  {icon}
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
