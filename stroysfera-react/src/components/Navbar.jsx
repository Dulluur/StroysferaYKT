export default function Navbar() {
    return (
      <header className="bg-white shadow fixed top-0 left-0 right-0 z-50">
        <nav className="container max-w-[1200px] mx-auto px-4 flex items-center justify-between h-16">
          <div className="font-bold text-xl">ООО «Стройсфера»</div>
          <ul className="flex gap-6">
            <li><a href="#hero" className="hover:text-blue-500">Главная</a></li>
            <li><a href="#about" className="hover:text-blue-500">О нас</a></li>
            <li><a href="#advantages" className="hover:text-blue-500">Преимущества</a></li>
            <li><a href="#gallery" className="hover:text-blue-500">Наши работы</a></li>
            <li><a href="#contact" className="hover:text-blue-500">Контакты</a></li>
          </ul>
        </nav>
      </header>
    )
  }