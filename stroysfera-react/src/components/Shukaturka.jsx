export default function Shukaturka() {
  const service = {
    title: "Механизированная штукатурка",
    img: "/assets/images/services/plaster.jpg",
    description:
      "Штукатурка цементно-песчаным раствором — это прочный, надёжный и проверенный способ выравнивания стен и потолков. Используется как основа под покраску, облицовку плиткой и другие отделочные материалы. Благодаря механизированной подаче раствора повышается скорость работ и однородность покрытия. Компания \"Стройсфера\" — одна из немногих в Якутске, кто профессионально выполняет машинную штукатурку помещений с использованием современного оборудования и опытной бригады мастеров.",
    advantages: [
      "✅ Высокая производительность",
      "✅ Идеально ровное основание для отделки",
      "✅ Экономия материала и трудозатрат",
    ],
    disadvantages: [
      "⚠️ Требуется стабильный доступ к электросети",
      "⚠️ Не всегда подходит для небольших помещений",
    ],
  };

  return (
    <section className="py-24 bg-gray-100" id="plaster">
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl font-bold text-center mb-16"
          data-aos="fade-down"
        >
          Механизированная <span className="text-blue-500">штукатурка</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Картинка */}
          <div data-aos="fade-right">
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-[600px] rounded-xl shadow-lg object-cover"
            />
          </div>

          {/* Текст */}
          <div data-aos="fade-left">
            <h3 className="text-2xl font-bold mb-6">
              Штукатурка песчано-цементным раствором
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
        </div>
      </div>
    </section>
  );
}
