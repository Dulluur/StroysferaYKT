import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        
        <div className="font-bold text-xl text-gray-800">
          Стройсфера
        </div>

        {/* Menu desktop */}
        <ul className="hidden md:flex gap-6 text-gray-600">
          <li><a href="#about" className="hover:text-blue-500">О компании</a></li>
          <li><a href="#advantages" className="hover:text-blue-500">Преимущества</a></li>
          <li><a href="#services" className="hover:text-blue-500">Услуги</a></li>
          <li><a href="#gallery" className="hover:text-blue-500">Работы</a></li>
          <li><a href="#contacts" className="hover:text-blue-500">Контакты</a></li>
        </ul>

        {/* Burger icon */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg className="h-6 w-6" viewBox="0 0 20 20">
              <path fill="currentColor" d="M14.348 14.849a.5.5 0 01-.707 0L10 11.207l-3.64 3.642a.5.5 0 01-.707-.707L9.293 10.5 5.653 6.86a.5.5 0 11.707-.707L10 9.793l3.641-3.64a.5.5 0 11.707.707L10.707 10.5l3.641 3.642a.5.5 0 010 .707z" />
            </svg>
          ) : (
            <svg className="h-6 w-6" viewBox="0 0 24 24">
              <path fill="currentColor" d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="md:hidden bg-white shadow-lg text-gray-600">
          <li><a href="#about" className="block px-4 py-2 hover:bg-gray-100">О компании</a></li>
          <li><a href="#advantages" className="block px-4 py-2 hover:bg-gray-100">Преимущества</a></li>
          <li><a href="#services" className="block px-4 py-2 hover:bg-gray-100">Услуги</a></li>
          <li><a href="#gallery" className="block px-4 py-2 hover:bg-gray-100">Работы</a></li>
          <li><a href="#contacts" className="block px-4 py-2 hover:bg-gray-100">Контакты</a></li>
        </ul>
      )}
    </header>
  );
}
