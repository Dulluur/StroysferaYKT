import { useState, useEffect } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Блокировка прокрутки при открытом меню на мобилке
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  const handleClose = () => setMenuOpen(false);

  return (
    <header className="bg-white shadow w-full z-50">
      <nav className="container max-w-[1200px] mx-auto px-4 py-4 flex items-center justify-between">
        <div className="font-bold text-xl">ООО «Стройсфера»</div>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-6 text-gray-700">
          <li><a href="#hero" className="hover:text-blue-500">Главная</a></li>
          <li><a href="#about" className="hover:text-blue-500">О нас</a></li>
          <li><a href="#advantages" className="hover:text-blue-500">Преимущества</a></li>
          <li><a href="#gallery" className="hover:text-blue-500">Наши работы</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Контакты</a></li>
        </ul>

        {/* Burger icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Меню">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={!menuOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"}
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow px-4 pb-4 transition-all duration-300 ease-in-out">
          <ul className="flex flex-col gap-4 text-gray-700">
            <li><a href="#hero" onClick={handleClose} className="block py-2 hover:text-blue-500">Главная</a></li>
            <li><a href="#about" onClick={handleClose} className="block py-2 hover:text-blue-500">О нас</a></li>
            <li><a href="#advantages" onClick={handleClose} className="block py-2 hover:text-blue-500">Преимущества</a></li>
            <li><a href="#gallery" onClick={handleClose} className="block py-2 hover:text-blue-500">Наши работы</a></li>
            <li><a href="#contact" onClick={handleClose} className="block py-2 hover:text-blue-500">Контакты</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}
