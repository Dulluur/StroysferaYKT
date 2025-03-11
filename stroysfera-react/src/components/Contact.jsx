export default function Contact() {
    return (
      <section id="contact" className="py-16 px-4">
        <div className="container max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">Связаться с нами</h2>
          <form className="max-w-lg mx-auto bg-white p-8 shadow rounded-lg">
            <input type="text" placeholder="Ваше имя" className="block w-full mb-4 border p-2 rounded" />
            <input type="tel" placeholder="Телефон" className="block w-full mb-4 border p-2 rounded" />
            <textarea placeholder="Сообщение" className="block w-full mb-4 border p-2 rounded"></textarea>
            <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded w-full">Отправить</button>
          </form>
        </div>
      </section>
    )
  }
  