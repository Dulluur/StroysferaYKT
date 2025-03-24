export default function Comparison() {
    const comparisonData = [
      {
        title: 'Стяжка пола',
        advantages: ['✅ Высокая скорость выполнения', '✅ Идеально ровная поверхность', '✅ Низкие затраты материала'],
        disadvantages: ['⚠️ Ограничения по погоде'],
      },
      {
        title: 'Торкретирование',
        advantages: ['✅ Высокая прочность покрытия', '✅ Подходит для сложных поверхностей', '✅ Высокая адгезия'],
        disadvantages: ['⚠️ Требует квалифицированных специалистов', '⚠️ Выше затраты на материалы'],
      },
      {
        title: 'Механизированная штукатурка',
        advantages: ['✅ Скорость нанесения', '✅ Экономия трудозатрат', '✅ Равномерное покрытие'],
        disadvantages: ['⚠️ Не подходит для мелких работ', '⚠️ Оборудование требует места'],
      },
    ];
  
    return (
      <section className="py-16">
        <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Сравнение <span className="text-blue-500">технологий</span>
        </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {comparisonData.map((tech, idx) => (
              <div key={idx} className="bg-white p-6 shadow-md rounded-lg">
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
  