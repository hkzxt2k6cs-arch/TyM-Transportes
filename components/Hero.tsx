
import React, { useState, useEffect } from 'react';

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      url: "https://images.unsplash.com/photo-1549194388-2469d41ec10c?auto=format&fit=crop&q=80&w=1200",
      alt: "Camión de Mudanzas TyM en Barcelona",
      title: "Flota Propia"
    },
    {
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
      alt: "Servicio de Embalaje Profesional",
      title: "Cuidado Extremo"
    },
    {
      url: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&q=80&w=1200",
      alt: "Plataforma Elevadora Böcker TyM",
      title: "Elevación Segura"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative bg-white pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left z-10">
            <h1>
              <span className="block text-sm font-bold uppercase tracking-widest text-cyan-600 mb-2">
                TyM Transportes y Mudanzas
              </span>
              <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-7xl leading-tight">
                <span className="block text-blue-900">Tu Mudanza en</span>
                <span className="block text-red-600">Barcelona Segura</span>
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl leading-relaxed">
              Especialistas en el Maresme con base en Canet de Mar. Utilizamos elevadores por fachada para garantizar que tus muebles lleguen intactos.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+34633554900"
                  className="flex items-center justify-center px-10 py-5 border border-transparent text-base font-bold rounded-2xl text-white bg-red-600 hover:bg-red-700 md:text-lg transition-all shadow-xl shadow-red-200 active:scale-95"
                >
                  633 554 900
                </a>
                <a
                  href="https://wa.me/34633554900"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-10 py-5 border-2 border-green-500 text-base font-bold rounded-2xl text-green-600 bg-transparent hover:bg-green-50 md:text-lg transition-all active:scale-95"
                >
                  WhatsApp Directo
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6">
            <div className="relative mx-auto w-full aspect-[4/3] rounded-[2.5rem] shadow-2xl overflow-hidden group border-8 border-white bg-gray-100">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    className="w-full h-full object-cover"
                    src={slide.url}
                    alt={slide.alt}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent"></div>
                  
                  {/* Slide Label */}
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                    <span className="text-xs font-bold text-blue-900 uppercase tracking-tighter">
                      {slide.title}
                    </span>
                  </div>
                </div>
              ))}

              {/* Navigation Dots */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentSlide 
                        ? 'bg-red-600 w-8' 
                        : 'bg-white/50 hover:bg-white'
                    }`}
                    aria-label={`Ir a imagen ${index + 1}`}
                  />
                ))}
              </div>

              {/* Floating Status Badge */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/20 hidden md:block z-20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-900 rounded-xl flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                  <div>
                    <div className="text-blue-900 font-bold text-sm leading-none">Servicio Activo</div>
                    <div className="text-gray-500 text-[10px] mt-1 uppercase tracking-widest font-bold">Maresme / Barcelona</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
