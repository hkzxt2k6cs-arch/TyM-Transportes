
import React, { useState } from 'react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', href: '#' },
    { name: 'Servicios', href: '#services' },
    { name: 'Plataforma', href: '#plataforma' },
    { name: 'Cotizador', href: '#quote' },
    { name: 'Nosotros', href: '#about' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0 flex items-center py-2">
              <img 
                src="logo.png" 
                alt="TyM Transportes y Mudanzas.ORG" 
                className="h-16 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    const fallback = document.createElement('span');
                    fallback.className = "text-xl font-black text-blue-900 flex flex-col leading-none";
                    fallback.innerHTML = "TyM <span class='text-red-600 text-sm'>Mudanzas.ORG</span>";
                    parent.appendChild(fallback);
                  }
                }}
              />
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-red-600 font-bold transition-colors text-sm uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/34633554900"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition-all shadow-lg active:scale-95 hover:shadow-red-200 flex items-center gap-2"
            >
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-blue-900 focus:outline-none"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-4 rounded-2xl text-base font-bold text-gray-700 hover:text-red-600 hover:bg-red-50"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 px-2">
              <a
                href="tel:+34633554900"
                className="block w-full text-center bg-red-600 text-white px-6 py-4 rounded-2xl font-bold shadow-md active:scale-95"
                onClick={() => setIsOpen(false)}
              >
                Llamar Ahora
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
