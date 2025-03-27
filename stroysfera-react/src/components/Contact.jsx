export default function Contact() {
  return (
    <section className="py-16 " id="contact">
      <div className="container mx-auto">
        <h2
          className="text-4xl font-bold text-center mb-12"
          data-aos="fade-down"
        >
          Связаться <span className="text-blue-500">с нами</span>
        </h2>

        <form
  action="https://formspree.io/f/YOUR_FORM_ID"
  method="POST"
  className="max-w-xl mx-auto bg-white p-8 shadow rounded-lg mt-8"
  data-aos="zoom-in"
>
  <input
    type="text"
    name="name"
    placeholder="Имя"
    required
    className="block w-full mb-4 p-2 border rounded"
  />
  <input
    type="tel"
    name="phone"
    placeholder="Телефон"
    required
    className="block w-full mb-4 p-2 border rounded"
  />
  <textarea
    name="message"
    placeholder="Сообщение"
    required
    className="block w-full mb-4 p-2 border rounded"
  ></textarea>

  <button className="bg-blue-500 hover:bg-blue-600 transition text-white px-4 py-2 rounded">
    Отправить
  </button>
</form>

      </div>
    </section>
  );
}
