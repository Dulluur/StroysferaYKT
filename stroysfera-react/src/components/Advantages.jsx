export default function Advantages() {
    const items = [
      { title: "🚀 Скорость выполнения", text: "Сокращаем сроки благодаря механизации." },
      { title: "✨ Ровность и однородность", text: "Идеальная поверхность без трещин и дефектов." },
      { title: "💰 Экономия материалов", text: "Эффективное использование стройматериалов." },
    ]
  
    return (
      <section id="advantages" className="py-16 bg-gray-100">
        <div className="container max-w-[1200px] mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-10">Наши преимущества</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {items.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  