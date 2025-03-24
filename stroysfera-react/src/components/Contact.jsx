export default function Contact() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">
          Связаться <span className="text-blue-500">с нами</span>
        </h2>
        <form className="max-w-xl mx-auto bg-white p-8 shadow rounded-lg mt-8">
          <input type="text" placeholder="Имя" className="block w-full mb-4 p-2 border rounded"/>
          <input type="tel" placeholder="Телефон" className="block w-full mb-4 p-2 border rounded"/>
          <textarea placeholder="Сообщение" className="block w-full mb-4 p-2 border rounded"></textarea>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Отправить</button>
        </form>
      </div>
    </section>
  );
}
