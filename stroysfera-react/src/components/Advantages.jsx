export default function Advantages() {
  const items = [
    { title: "🚀 Скорость выполнения", text: "Сокращаем сроки благодаря механизации." },
    { title: "✨ Ровность и однородность", text: "Идеальная поверхность без трещин и дефектов." },
    { title: "💰 Экономия материалов", text: "Эффективное использование стройматериалов." },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Наши <span className="text-blue-500">преимущества</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white p-6 text-center rounded-xl shadow-xl transition transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
            >
              <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
