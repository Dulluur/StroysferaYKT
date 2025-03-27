export default function Footer() {
  return (
    <footer
      className="bg-gray-800 text-gray-200 py-12 px-4"
      data-aos="fade-up"
    >
      <div className="container max-w-[1200px] mx-auto grid md:grid-cols-4 gap-8">
        {/* Лого и описание */}
        <div>
          <h2 className="font-bold text-xl mb-4">ООО «Стройсфера»</h2>
          <p className="text-sm">
            Профессиональные услуги по механизированной стяжке пола с гарантией
            качества и долговечности.
          </p>
        </div>

        {/* Навигация */}
        <div>
          <h3 className="font-semibold mb-4">Меню сайта</h3>
          <ul className="space-y-2">
            <li><a href="#hero" className="hover:text-blue-400">Главная</a></li>
            <li><a href="#about" className="hover:text-blue-400">О компании</a></li>
            <li><a href="#advantages" className="hover:text-blue-400">Преимущества</a></li>
            <li><a href="#gallery" className="hover:text-blue-400">Наши работы</a></li>
            <li><a href="#steps" className="hover:text-blue-400">Этапы работ</a></li>
            <li><a href="#contact" className="hover:text-blue-400">Контакты</a></li>
          </ul>
        </div>

        {/* Услуги */}
        <div>
          <h3 className="font-semibold mb-4">Услуги</h3>
          <ul className="space-y-2">
            <li>Механизированная стяжка</li>
            <li>Выравнивание полов</li>
            <li>Подготовка под покрытие</li>
            <li>Торкрети́рование</li>
          </ul>
        </div>

        {/* Контакты */}
        <div>
          <h3 className="font-semibold mb-4">Контакты</h3>
          <ul className="space-y-2 text-sm">
            <li>📍 г. Якутск, ул. Строителей, д.10</li>
            <li>📞 +7 (924) 763-97-07</li>
            <li>✉️ stroysferaykt24@mail.ru</li>
          </ul>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-blue-400">VK</a>
            <a href="#" className="hover:text-blue-400">Telegram</a>
            <a target="_blank" href="https://wa.me/79247639707?text=Здравствуйте!%20Хочу%20узнать%20по%20поводу%20стяжки%20пола" className="hover:text-blue-400">WhatsApp</a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm border-t border-gray-700 pt-4 mt-8">
        © ООО «Стройсфера» {new Date().getFullYear()} | Все права защищены.
      </div>
    </footer>
  );
}
