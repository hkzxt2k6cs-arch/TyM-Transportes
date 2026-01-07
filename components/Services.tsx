
import React from 'react';

export const Services: React.FC = () => {
  const services = [
    {
      title: 'Mudanzas Residenciales',
      description: 'Trasladamos tu hogar con el máximo cuidado, desde departamentos hasta casas completas.',
      icon: '🏠',
      img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=400'
    },
    {
      title: 'Mudanzas Corporativas',
      description: 'Especialistas en reubicación de oficinas, equipo de cómputo y mobiliario empresarial.',
      icon: '🏢',
      img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400'
    },
    {
      title: 'Fletes y Distribución',
      description: 'Logística de carga local y nacional para empresas y particulares de forma rápida.',
      icon: '🚚',
      img: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=400'
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-blue-900 font-bold text-sm uppercase tracking-widest mb-4">Lo que hacemos</h2>
        <h3 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Soluciones a tu medida</h3>
        <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
          Ofrecemos un catálogo completo de servicios logísticos diseñados para simplificar tu vida.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <div key={i} className="group bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
            <div className="h-48 overflow-hidden relative">
              <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-2xl">
                {s.icon}
              </div>
            </div>
            <div className="p-8 text-left">
              <h4 className="text-xl font-bold text-blue-900 mb-3">{s.title}</h4>
              <p className="text-gray-500 mb-6 leading-relaxed">
                {s.description}
              </p>
              <button className="flex items-center gap-2 text-orange-600 font-bold hover:gap-3 transition-all">
                Saber más
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
