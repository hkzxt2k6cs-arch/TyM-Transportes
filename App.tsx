
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuoteEstimator } from './components/QuoteEstimator';
import { Services } from './components/Services';
import { AboutUs } from './components/AboutUs';
import { AISupport } from './components/AISupport';
import { ElevatorPlatform } from './components/ElevatorPlatform';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        
        {/* Features Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-blue-50 rounded-2xl">
              <div className="text-3xl mb-2 text-cyan-500">⚡</div>
              <h4 className="font-bold text-blue-900">Rápido</h4>
              <p className="text-sm text-gray-500">Cotización instantánea con IA</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-blue-50 rounded-2xl">
              <div className="text-3xl mb-2 text-cyan-500">🛡️</div>
              <h4 className="font-bold text-blue-900">Seguro</h4>
              <p className="text-sm text-gray-500">Carga asegurada al 100%</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-blue-50 rounded-2xl">
              <div className="text-3xl mb-2 text-cyan-500">📍</div>
              <h4 className="font-bold text-blue-900">Catalunya</h4>
              <p className="text-sm text-gray-500">Servicio en toda la comunidad</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-blue-50 rounded-2xl">
              <div className="text-3xl mb-2 text-cyan-500">💬</div>
              <h4 className="font-bold text-blue-900">Cercanía</h4>
              <p className="text-sm text-gray-500">Atención personalizada 24h</p>
            </div>
          </div>
        </section>

        <Services />
        <ElevatorPlatform />
        <AboutUs />
        <QuoteEstimator />

        {/* Call to Action */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-[3rem] p-12 text-center text-white shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-full opacity-10">
                 <svg className="w-full h-full" fill="currentColor" viewBox="0 0 100 100">
                    <circle cx="10" cy="10" r="2" />
                    <circle cx="90" cy="10" r="2" />
                    <circle cx="10" cy="90" r="2" />
                    <circle cx="90" cy="90" r="2" />
                 </svg>
               </div>
               <h3 className="text-3xl md:text-5xl font-bold mb-6 text-balance">¿Planeas una mudanza en Barcelona?</h3>
               <p className="text-lg md:text-xl mb-10 text-red-50 text-balance opacity-90">
                 Confía en TyM Transportes y Mudanzas.ORG. Somos especialistas en el Maresme y toda Catalunya.
               </p>
               <a 
                href="tel:+34633554900"
                className="inline-block bg-white text-red-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl active:scale-95"
               >
                 Llamar Ahora: 633 554 900
               </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-blue-950 text-gray-400 py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-10">
               <img 
                 src="logo.png" 
                 alt="TyM Transportes y Mudanzas.ORG Logo" 
                 className="h-24 w-auto drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" 
                 onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    const fallback = document.createElement('span');
                    fallback.className = "text-3xl font-black text-white flex flex-col leading-tight";
                    fallback.innerHTML = "TyM <span class='text-red-500'>Mudanzas.ORG</span>";
                    parent.appendChild(fallback);
                  }
                }}
               />
            </div>
            <p className="max-w-md text-gray-400 leading-relaxed text-lg">
              La empresa de mudanzas más confiable en Catalunya. Brindamos soluciones de transporte personalizadas con sede en Canet de Mar, Barcelona.
            </p>
          </div>
          <div>
            <h5 className="text-white font-bold mb-8 uppercase tracking-widest text-sm border-l-4 border-red-600 pl-4">Servicios</h5>
            <ul className="space-y-4 text-base">
              <li><a href="#services" className="hover:text-white hover:translate-x-2 inline-block transition-all">Mudanzas Locales</a></li>
              <li><a href="#services" className="hover:text-white hover:translate-x-2 inline-block transition-all">Mudanzas Nacionales</a></li>
              <li><a href="#plataforma" className="hover:text-white hover:translate-x-2 inline-block transition-all">Elevador de Muebles</a></li>
              <li><a href="#quote" className="hover:text-white hover:translate-x-2 inline-block transition-all">Presupuesto Online</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-8 uppercase tracking-widest text-sm border-l-4 border-red-600 pl-4">Contacto Directo</h5>
            <ul className="space-y-5 text-base">
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">📍</span>
                <span>08360 Canet de Mar, Barcelona, España</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-red-500">📞</span>
                <a href="tel:+34633554900" className="hover:text-white transition-colors">+34 633 554 900</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-red-500">📧</span>
                <a href="mailto:info@transportesymudanzas.org" className="hover:text-white transition-colors">info@transportesymudanzas.org</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-20 pt-10 border-t border-white/5 text-center">
          <p className="text-sm text-gray-500">
            © 2024 TyM Transportes y Mudanzas.ORG. <span className="text-gray-400">Tu transporte de confianza en Catalunya.</span> Todos los derechos reservados.
          </p>
        </div>
      </footer>

      <AISupport />
    </div>
  );
};

export default App;
