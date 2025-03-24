export default function Torket() {
  const services = [
    {
      title: "Торкретирование",
      img: "/assets/images/services/torkret.jpg",
      description: "Современный метод укрепления и отделки конструкций.",
    },
    {
      title: 'Торкретирование',
      advantages: ['✅ Высокая прочность покрытия', '✅ Подходит для сложных поверхностей', '✅ Высокая адгезия'],
      disadvantages: ['⚠️ Требует квалифицированных специалистов', '⚠️ Выше затраты на материалы'],
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold text-center mb-12">
          Торке<span className="text-blue-500">тирование</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
        <h4 className="text-2xl font-bold">
          Что такое торкетирование?
          </h4>
          
        <p className="my-3">Качество, скорость и надежность для вашего объекта</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg h-[50px] w-[300px]">
          Оставить заявку
        </button>

          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white shadow rounded overflow-hidden flex flex-col"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-auto object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 flex-grow">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
