export default function Comparison() {
  const comparisonData = [
    {
      title: 'Стяжка пола',
      advantages: [
        '✅ Подходит для выравнивания основания',
        '✅ Проста в устройстве',
        '✅ Универсальный вариант под любые покрытия',
      ],
      disadvantages: [
        '⚠️ Может трескаться при неправильной укладке',
        '⚠️ Требует времени для высыхания',
      ],
    },
    {
      title: 'Механизированная штукатурка',
      advantages: [
        '✅ Быстрое нанесение',
        '✅ Ровная поверхность',
        '✅ Подходит для больших объёмов',
      ],
      disadvantages: [
        '⚠️ Требуется спецоборудование',
        '⚠️ Не выгодно при малых объёмах',
      ],
    },
    {
      title: 'Стяжка на разделительном слое',
      advantages: [
        '✅ Защищает от влаги',
        '✅ Повышает долговечность покрытия',
      ],
      disadvantages: [
        '⚠️ Требует гидроизоляции',
        '⚠️ Более высокая трудозатратность',
      ],
    },
    {
      title: 'Плавающая стяжка на тепло- или звукоизоляции типа “Пеноплэкс”',
      advantages: [
        '✅ Отличная теплоизоляция',
        '✅ Хорошая звукоизоляция',
        '✅ Подходит для тёплого пола',
      ],
      disadvantages: [
        '⚠️ Требует точного расчёта слоёв',
        '⚠️ Выше стоимость материалов',
      ],
    },
    {
      title: 'Стяжка пола на водяной теплый пол',
      advantages: [
        '✅ Равномерное распределение тепла',
        '✅ Улучшенная энергоэффективность',
        '✅ Комфорт в помещении',
      ],
      disadvantages: [
        '⚠️ Нужно соблюдать толщину',
        '⚠️ Нельзя допускать перегрев труб',
      ],
    },
    {
      title: 'Стяжка с тепло- звукоизоляцией по основанию с большими перепадами',
      advantages: [
        '✅ Отлично выравнивает даже проблемные основания',
        '✅ Повышает шумо- и теплоизоляцию',
      ],
      disadvantages: [
        '⚠️ Повышенный расход материалов',
        '⚠️ Увеличение веса конструкции',
      ],
    },
    {
      title: 'Стяжка ЦПС в старом фонде по перекрытию с двутавровыми балками',
      advantages: [
        '✅ Укрепляет старые конструкции',
        '✅ Совместима с классическими перекрытиями',
      ],
      disadvantages: [
        '⚠️ Требуется проверка состояния балок',
        '⚠️ Высокая нагрузка на перекрытие',
      ],
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <h2
          className="text-4xl font-bold text-center mb-12"
          data-aos="fade-down"
        >
          Сравнение <span className="text-blue-500">технологий</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {comparisonData.map((tech, idx) => (
            <div
              key={idx}
              className="bg-white p-6 shadow-md rounded-lg flex flex-col h-full"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <h3 className="text-xl font-semibold text-center mb-4">{tech.title}</h3>
              <div className="mb-4">
                <h4 className="font-medium mb-2">Преимущества:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  {tech.advantages.map((adv, i) => (
                    <li key={i}>{adv}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Недостатки:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  {tech.disadvantages.map((disadv, i) => (
                    <li key={i}>{disadv}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
