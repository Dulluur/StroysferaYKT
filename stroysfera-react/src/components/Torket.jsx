export default function Torket() {
  const service = {
    title: "Торкретирование",
    img: "/assets/images/services/torkret.jpg",
    description:
      "Торкретирование — это современный метод нанесения бетонной или цементно-песчаной смеси под давлением на любые поверхности: вертикальные, потолочные или труднодоступные. Этот способ идеально подходит для укрепления конструкций, нанесения защитного слоя, ремонта бетона и формирования сложных форм. Только компания \"Стройсфера\" на сегодняшний день предлагает профессиональные услуги по торкретированию в Якутске. Мы располагаем необходимым оборудованием, квалифицированной командой и опытом выполнения сложных задач на промышленных, коммерческих и частных объектах.",
    advantages: [
      "✅ Высокая прочность покрытия",
      "✅ Подходит для сложных поверхностей",
      "✅ Высокая адгезия",
    ],
    disadvantages: [
      "⚠️ Требует квалифицированных специалистов",
      "⚠️ Выше затраты на материалы",
    ],
  };

  return (
    <section className="py-24 bg-gray-50" id="torket">
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl font-bold text-center mb-16"
          data-aos="fade-down"
        >
          Торке<span className="text-blue-500">тирование</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Текстовая часть */}
          <div data-aos="fade-right">
            <h3 className="text-2xl font-bold mb-6">
              Что такое торкретирование?
            </h3>
            <p className="mb-8 text-gray-700 leading-relaxed">
              {service.description}
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div>
                <h4 className="font-semibold mb-3">Преимущества:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {service.advantages.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Недостатки:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {service.disadvantages.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <a
          href="https://wa.me/79247639707?text=Здравствуйте!%20Хочу%20узнать%20по%20поводу%20стяжки%20пола"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg"
        >
          Оставить заявку
        </a>

            
          </div>

          {/* Картинка */}
          <div data-aos="fade-left">
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-[600px] rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
