import { useState } from 'react';
import { ChevronDown, ChevronUp, Search, Calendar } from 'lucide-react';

interface PriceItem {
  name: string;
  price: string;
  note?: string;
}

interface PriceCategory {
  title: string;
  subtitle?: string;
  items: PriceItem[];
}

const PRICE_DATA: PriceCategory[] = [
  {
    title: 'Фотоомоложение',
    subtitle: 'Аппарат M22',
    items: [
      { name: 'Фотоомоложение лицо + шея + декольте', price: '13 000 ₽', note: '45 мин' },
      { name: 'Фотоомоложение лицо + шея', price: '10 000 ₽', note: '45 мин' },
      { name: 'Фотоомоложение лицо', price: '7 000 ₽', note: '45 мин' },
      { name: 'Фотоомоложение щеки', price: '5 000 ₽', note: '45 мин' },
      { name: 'Фотоомоложение подбородок', price: '2 000 ₽', note: '30 мин' },
      { name: 'Фотоомоложение крылья носа', price: '2 500 ₽', note: '15 мин' },
      { name: 'Фотоомоложение спина', price: '10 000 ₽', note: '45 мин' },
      { name: 'Пигментация рук', price: '1 500 ₽', note: '30 мин' },
    ],
  },
  {
    title: 'SMAS-лифтинг',
    subtitle: 'Аппарат ULTRAFORMER III',
    items: [
      { name: 'SMAS-лифтинг периорбитальная зона (около глаз)', price: '5 000 ₽', note: '45 мин · линии не ограничены' },
      { name: 'SMAS-лифтинг нижняя треть', price: '7 500 ₽', note: '1 ч · линии не ограничены' },
      { name: 'SMAS-лифтинг лицо', price: '10 000 ₽', note: '1 ч 30 мин · линии не ограничены' },
      { name: 'SMAS-лифтинг лицо + подчелюстная зона', price: '12 500 ₽', note: '1 ч 15 мин · линии не ограничены' },
      { name: 'SMAS-лифтинг живот', price: '12 500 ₽', note: '1 ч 15 мин · линии не ограничены' },
      { name: 'SMAS-лифтинг лицо, подчелюстная зона + шея', price: '15 000 ₽', note: '1 ч 15 мин · линии не ограничены' },
      { name: 'Биоревитализация', price: '5 000 ₽', note: '30 мин' },
    ],
  },
  {
    title: 'Микроигольчатый RF-лифтинг',
    subtitle: 'Аппарат Morpheus8',
    items: [
      { name: 'Morpheus 8 микроигольчатый RF-лифтинг лицо + шея', price: '20 000 ₽', note: '1 ч 30 мин' },
      { name: 'Биоревитализация', price: 'от 5 000 ₽' },
      { name: 'Morpheus 8 RF-лифтинг лицо + подбородок + шея + декольте', price: '16 000 ₽', note: '1 ч 30 мин' },
      { name: 'Morpheus 8 RF-лифтинг лицо + подчелюстная зона + шея', price: '13 000 ₽', note: '1 ч 15 мин' },
      { name: 'Morpheus 8 микроигольчатый RF-лифтинг шея + декольте', price: '5 000 ₽', note: '1 ч' },
    ],
  },
  {
    title: 'Криолиполиз',
    subtitle: 'Аппарат Cryo S360',
    items: [
      { name: 'Криолиполиз Cryo S360 — любая область на теле', price: '3 500 ₽', note: '45 мин' },
      { name: 'Кавитация', price: '3 000 ₽', note: '30 мин' },
    ],
  },
  {
    title: 'Удаление новообразований',
    items: [
      { name: 'Маленькие на теле до 1 мм', price: '150 ₽' },
      { name: 'Средние на теле 2–4 мм', price: '350–500 ₽' },
      { name: 'Большие на теле от 5 мм', price: '700 ₽' },
      { name: 'Очень маленькие на лице', price: '350 ₽' },
      { name: 'Лицо и шея (зависит от размера и локализации)', price: '500–1 000 ₽' },
      { name: 'Интимная область', price: '700–1 000 ₽' },
    ],
  },
];

export default function Prices() {
  const [search, setSearch] = useState('');
  const [openCategories, setOpenCategories] = useState<Set<number>>(new Set([0]));

  const toggleCategory = (idx: number) => {
    setOpenCategories((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  const filtered = PRICE_DATA.map((cat) => ({
    ...cat,
    items: cat.items.filter(
      (item) =>
        search === '' ||
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        cat.title.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter((cat) => cat.items.length > 0);

  const allOpen = search !== '';

  return (
    <section id="prices" className="py-24" style={{ background: 'linear-gradient(180deg, #F6FAFB 0%, #EEF5F8 100%)' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase mb-5" style={{ background: 'rgba(44,163,190,0.1)', color: '#0F5A73' }}>
            Прозрачные цены
          </div>
          <h2 className="section-title mb-4">Прейскурант цен</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Точная стоимость процедур определяется на консультации врача с учётом индивидуальных особенностей.
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-clinic-textLight" size={18} />
          <input
            type="text"
            placeholder="Поиск процедуры..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-4 rounded-2xl border border-clinic-border bg-white text-clinic-text placeholder-clinic-textLight text-sm focus:outline-none focus:border-clinic-blue focus:ring-2 transition-all duration-200"
            style={{ boxShadow: '0 2px 12px rgba(15,90,115,0.06)' }}
          />
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {filtered.map((category, catIdx) => {
            const isOpen = allOpen || openCategories.has(catIdx);
            return (
              <div key={catIdx} className="bg-white rounded-2xl overflow-hidden" style={{ boxShadow: '0 2px 16px rgba(15,90,115,0.07)' }}>
                <button
                  onClick={() => toggleCategory(catIdx)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-clinic-bg transition-colors duration-200"
                >
                  <div>
                    <span className="font-semibold text-clinic-text text-base">{category.title}</span>
                    {category.subtitle && (
                      <p className="text-xs text-clinic-textLight mt-0.5">{category.subtitle}</p>
                    )}
                  </div>
                  <div className="text-clinic-blue ml-4 flex-shrink-0">
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </button>

                <div className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[5000px]' : 'max-h-0'}`}>
                  <div className="border-t border-clinic-border">
                    {category.items.map((item, itemIdx) => (
                      <div
                        key={itemIdx}
                        className="flex items-center justify-between px-6 py-4 hover:bg-clinic-bg transition-colors duration-150 group"
                      >
                        <div className="flex-1 pr-4">
                          <span className="text-sm text-clinic-textMid group-hover:text-clinic-text transition-colors">
                            {item.name}
                          </span>
                          {item.note && (
                            <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium" style={{ background: 'rgba(44,163,190,0.1)', color: '#0F5A73' }}>
                              {item.note}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-4 flex-shrink-0">
                          <span className="font-semibold text-clinic-teal text-sm">{item.price}</span>
                          <a
                            href="#contacts"
                            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-white transition-all duration-200 hover:scale-105"
                            style={{ background: 'linear-gradient(135deg, #0F5A73 0%, #2CA3BE 100%)' }}
                          >
                            <Calendar size={12} />
                            Записаться
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-clinic-textLight mt-8 leading-relaxed">
          * Цены носят ознакомительный характер. Окончательная стоимость определяется после очной консультации специалиста.
        </p>

        <div className="mt-8 text-center">
          <a href="#contacts" className="btn-primary">
            <Calendar size={16} />
            Записаться на бесплатную консультацию
          </a>
        </div>
      </div>
    </section>
  );
}
