import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function FAQ() {
  const questions = [
    {
      question: "Сколько времени занимает стяжка пола?",
      answer:
        "Обычно до 1000 м² выполняется за одну смену. Зависит от сложности объекта и толщины слоя.",
    },
    {
      question: "Вы принимаете раствор с БСУ?",
      answer:
        "Да, мы работаем с любыми бетонными заводами г. Якутска. Вы можете заказывать раствор напрямую.",
    },
    {
      question: "Нужна ли подготовка основания?",
      answer:
        "Желательно очистить поверхность от мусора и пыли. Все остальные этапы подготовки можем выполнить мы.",
    },
    {
      question: "Даете ли вы гарантию?",
      answer:
        "Да, на все работы предоставляется официальная гарантия. Работаем по договору.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-100" id="faq">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-4xl font-bold text-center mb-10" data-aos="fade-down">
          Часто <span className="text-blue-500">задаваемые вопросы</span>
        </h2>

        <div className="space-y-4">
          {questions.map((item, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-lg overflow-hidden"
              data-aos="fade-down"
              data-aos-delay={idx * 100}
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between px-6 py-4 font-semibold text-lg hover:bg-gray-50 transition"
              >
                <span>{item.question}</span>
                {activeIndex === idx ? (
                  <FaMinus className="text-blue-500" />
                ) : (
                  <FaPlus className="text-blue-500" />
                )}
              </button>

              <div
                className={`px-6 pb-4 text-gray-700 text-sm transition-all duration-300 ease-in-out ${
                  activeIndex === idx ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
