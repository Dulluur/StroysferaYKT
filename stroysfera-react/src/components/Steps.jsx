export default function Steps() {
    const steps = ["Заявка", "Консультация и замер", "Договор", "Выполнение работ", "Гарантия"]
  
    return (
      <section id="steps" className="py-16 bg-gray-100">
        <div className="container max-w-[1200px] mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-10">Как мы работаем</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md p-6 w-48">
                <span className="font-bold text-blue-500 text-xl">{idx + 1}.</span> {step}
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  