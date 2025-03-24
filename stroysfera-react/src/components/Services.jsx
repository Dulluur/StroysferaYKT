export default function Services() {
  const services = [
    {
      title: "Стяжка пола",
      img: "/assets/images/services/styazhka.jpg",
      description:
        "Используется для поднятия уровня пола и выравнивания небольших перепадов. Данная стяжка при высоте при которой нельзя сделать плавающую стяжку.",
    },
    {
      title: "Механизированная штукатурка",
      img: "/assets/images/services/shtukaturka.jpg",
      description: "Быстрая и качественная штукатурка стен и потолков.",
    },
    {
      //1
      title: "Стяжка на разделительном слое",
      img: "/assets/images/services/1.jpg",
      description:
        "Используется для выравнивания основания пола и создания единого уровня.",
    },
    {
      //2
      title: "Плавающая стяжка на тепло- или звукоизоляции типа “Пеноплэкс”",
      img: "/assets/images/services/2.png",
      description:
        "Применяется для улучшения тепло-шумоизоляции в помещениях самого разного типа (квартиры, коттеджи, бани и т. д.). Особенно популярна в коттеджах где поверх пеноплэкса и сетки укладывается водяной теплый пол.",
    },
    {
      //3
      title:
        "Стяжка пола на водяной теплый пол отличное решение  для коттеджей, квартир, балконов.",
      img: "/assets/images/services/3.jpg",
      description:
        "Она выполняет следующие функции: Выравнивает поверхность, равномерно распределяет температуру по всей площади.",
    },
    {
      //4
      title:
        "Стяжка с тепло- звукоизоляцией по основанию с большими перепадами, стяжка поверх утеплителя армируется.",
      img: "/assets/images/services/4.png",
      description:
        "Применяется где требуется сделать высококачественное основание при больших перепадах в перекрытии. При небольших перепадах вместо выравнивающей стяжки для заполнения пустот можно использовать подсыпку обычным песком.",
    },
    {
      //6
      title:
        "Стяжка ЦПС в старом фонде по перекрытию двутавровые балки с деревянным наполнением.",
      img: "/assets/images/services/6.png",
      description:
        "В основном данную конструкцию применяют в домах старого фонда она имеет название Двутавровые балки с деревянным наполнением. Перед устройством данной стяжки двутавровые балки проверяются на нагрузку. Вес данной конструкции получается не менее 110 кг/м2 без учета веса керамзита или другого наполнения между балками.",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold text-center mb-12">
          Наши <span className="text-blue-500">услуги</span>
        </h2>
        <div className="grid md:grid-cols-4 gap-6 mt-8">
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
