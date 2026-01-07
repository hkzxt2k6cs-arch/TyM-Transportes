
import React from 'react';

export const ElevatorPlatform: React.FC = () => {
  const benefits = [
    {
      title: 'Máxima Seguridad',
      description: 'Evita golpes en escaleras y pasillos estrechos al mover tus muebles por el exterior del edificio.',
      icon: '🛡️'
    },
    {
      title: 'Hasta 11 Pisos (33m)',
      description: 'Llegamos a grandes alturas con total estabilidad gracias a nuestras grúas Böcker de última generación.',
      icon: '🏗️'
    },
    {
      title: 'Ahorro de Tiempo',
      description: 'Reduce el tiempo de carga y descarga significativamente, optimizando el coste de tu mudanza.',
      icon: '⏱️'
    }
  ];

  return (
    <section id="plataforma" className="py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-blue-900 font-bold text-sm uppercase tracking-widest mb-4">Servicios Especializados</h2>
            <h3 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              Alquiler de <span className="text-red-600">Plataforma Elevadora</span>
            </h3>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Disponemos de maquinaria propia especializada para subir y bajar muebles voluminosos, electrodomésticos o material de construcción por fachada. Es el método más seguro para tus pertenencias y el más respetuoso con la comunidad de vecinos.
            </p>

            <div className="space-y-8 mb-12">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-2xl border border-blue-100">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900 text-lg mb-1">{benefit.title}</h4>
                    <p className="text-gray-500 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+34633554900" 
                className="bg-red-600 text-white px-8 py-4 rounded-2xl font-bold text-center hover:bg-red-700 transition-all shadow-lg active:scale-95"
              >
                Consultar Disponibilidad
              </a>
              <div className="flex items-center gap-2 text-blue-900 font-bold px-4 py-4 justify-center">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Servicio en todo el Maresme y Barcelona
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 mb-12 lg:mb-0 relative">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl group border-8 border-white">
              {/* Imagen que representa fielmente la plataforma del cliente en un entorno urbano de Catalunya */}
              <img 
                src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&q=80&w=1000" 
                alt="Plataforma elevadora TyM" 
                className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="flex items-center gap-4 mb-2">
                   <div className="h-0.5 w-12 bg-red-600"></div>
                   <span className="text-sm font-bold tracking-widest uppercase">Maquinaria Propia</span>
                </div>
                <p className="text-xl font-medium">Equipos certificados para cargas pesadas en altura.</p>
              </div>
            </div>

            <div className="absolute -top-6 -left-6 bg-blue-900 text-white p-6 rounded-3xl shadow-xl hidden md:block">
              <div className="text-3xl font-black">250kg</div>
              <div className="text-xs font-medium uppercase tracking-tighter opacity-70">Capacidad Max.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
