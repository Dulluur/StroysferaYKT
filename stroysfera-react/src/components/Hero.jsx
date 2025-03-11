export default function Hero() {
    return (
      <section
        id="hero"
        className="h-screen bg-cover bg-center flex items-center justify-center text-white bg-[url(/assets/images/Hero.jpeg)] "
      >
        <div className="container max-w-[1200px] mx-auto text-center bg-black bg-opacity-60 p-8 rounded-xl">
          <h1 className="text-5xl font-bold">Механизированная стяжка пола за 1 день!</h1>
          <p className="my-4">Качество, скорость и надежность для вашего объекта</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg">
            Оставить заявку
          </button>
        </div>
      </section>
    )
  }
  