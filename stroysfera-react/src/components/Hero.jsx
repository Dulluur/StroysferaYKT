export default function Hero() {
  return (
    <section
      id="hero"
      className="hero-bg h-screen bg-cover bg-center flex items-center justify-center text-white"
    >
      <div
        className="container max-w-[1200px] mx-auto text-left  bg-opacity-60 p-8 rounded-xl"
        data-aos="fade-up"
      >
        <h1 className="text-5xl font-bold mb-4">
          Услуги раствора насоса и стяжка пола за 1 день!
        </h1>
        <p className="text-2xl my-2">
          Качество, скорость и надежность для вашего объекта
        </p>
        <p className="text-2xl my-2">1000 кв/м за смену!</p>
        <a
          href="https://wa.me/79247639707?text=Здравствуйте!%20Хочу%20узнать%20по%20поводу%20стяжки%20пола"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg mt-4"
        >
          Оставить заявку
        </a>
      </div>
    </section>
  );
}
