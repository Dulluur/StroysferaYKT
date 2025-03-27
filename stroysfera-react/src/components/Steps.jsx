export default function Steps() {
    const steps = ["Заявка", "Консультация и замер", "Договор", "Выполнение работ", "Гарантия"]
  
    return (
      <section id="steps" className="py-16 ">
        <div className="container mx-auto text-center">
        <h2
          className="text-4xl font-bold text-center mb-12"
          data-aos="fade-down"
        >
          Как мы <span className="text-blue-500">работаем</span>
        </h2>
          <div className="flex flex-wrap justify-center gap-4" data-aos="fade-down">
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
  