import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Что включает тендерное сопровождение под ключ?",
    answer:
      "Мы берём на себя весь цикл: поиск подходящих закупок, анализ документации, подготовку заявки, подачу на торговой площадке, сопровождение переговоров и контроль подписания контракта. Вам остаётся только согласовывать ключевые решения.",
  },
  {
    question: "С какими торговыми площадками вы работаете?",
    answer:
      "Работаем со всеми федеральными ЭТП: Сбербанк-АСТ, РТС-тендер, ЕЭТП, Росэлторг, ТЭК-Торг, а также с ЕИС (zakupki.gov.ru). Также сопровождаем участие в коммерческих тендерах крупных корпораций.",
  },
  {
    question: "Нужна ли мне электронная подпись?",
    answer:
      "Да, для участия в тендерах необходима квалифицированная электронная подпись (КЭП). Если у вас её ещё нет, мы поможем её оформить — это займёт 1–2 рабочих дня. Аккредитацию на торговых площадках также берём на себя.",
  },
  {
    question: "Как быстро вы начинаете работу после заключения договора?",
    answer:
      "После подписания договора и передачи необходимых документов мы приступаем к работе в течение 24 часов. Персональный менеджер свяжется с вами, уточнит профиль закупок и начнёт мониторинг подходящих тендеров.",
  },
  {
    question: "Гарантируете ли вы победу в тендере?",
    answer:
      "Гарантировать победу не может никто — итог зависит от конкуренции и требований заказчика. Мы гарантируем качество подготовленной заявки и максимальное соответствие требованиям, что существенно повышает ваши шансы на победу.",
  },
  {
    question: "Как начать работу с вами?",
    answer:
      "Оставьте заявку на сайте или позвоните нам. На первичной консультации мы изучим ваш бизнес, определим подходящие тендеры и предложим оптимальный формат сопровождения. Консультация бесплатная.",
  },
];

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]));
  };

  return (
    <div className="w-full flex justify-center items-start">
      <div className="flex-1 px-4 md:px-12 py-16 md:py-20 flex flex-col lg:flex-row justify-start items-start gap-6 lg:gap-12">
        {/* Левая колонка - заголовок */}
        <div className="w-full lg:flex-1 flex flex-col justify-center items-start gap-4 lg:py-5">
          <div className="w-full flex flex-col justify-center text-[#49423D] font-semibold leading-tight md:leading-[44px] font-sans text-4xl tracking-tight">
            Часто задаваемые вопросы
          </div>
          <div className="w-full text-[#605A57] text-base font-normal leading-7 font-sans">
            Всё, что нужно знать перед тем,
            <br className="hidden md:block" />
            как начать участвовать в тендерах с нами.
          </div>
        </div>

        {/* Правая колонка - FAQ */}
        <div className="w-full lg:flex-1 flex flex-col justify-center items-center">
          <div className="w-full flex flex-col">
            {faqData.map((item, index) => {
              const isOpen = openItems.includes(index);

              return (
                <div key={index} className="w-full border-b border-[rgba(73,66,61,0.16)] overflow-hidden">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-5 py-[18px] flex justify-between items-center gap-5 text-left hover:bg-[rgba(73,66,61,0.02)] transition-colors duration-200"
                    aria-expanded={isOpen}
                  >
                    <div className="flex-1 text-[#49423D] text-base font-medium leading-6 font-sans">
                      {item.question}
                    </div>
                    <div className="flex justify-center items-center">
                      <ChevronDownIcon
                        className={`w-6 h-6 text-[rgba(73,66,61,0.60)] transition-transform duration-300 ease-in-out ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-5 pb-[18px] text-[#605A57] text-sm font-normal leading-6 font-sans">
                      {item.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}