
import React from 'react';

export const AboutUs: React.FC = () => {
  const values = [
    {
      title: 'Misión',
      description: 'Facilitar transiciones de vida y negocio a través de soluciones de transporte seguras, eficientes y tecnológicamente avanzadas.',
      icon: '🎯'
    },
    {
      title: 'Visión',
      description: 'Ser el referente número uno en mudanzas internacionales entre Catalunya y resto de España, destacando por nuestra puntualidad y cuidado.',
      icon: '🚀'
    },
    {
      title: 'Nuestro Equipo',
      description: 'Contamos con expertos en logística, cargadores certificados y un equipo de soporte 24/7 dedicado a tu tranquilidad.',
      icon: '🤝'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative mb-12 lg:mb-0">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1000" 
                alt="Nuestro equipo TyM" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-transparent"></div>
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-8 rounded-3xl shadow-xl transform rotate-3">
              <div className="text-4xl font-black">+15</div>
              <div className="text-sm font-bold uppercase tracking-wider">Años de Experiencia</div>
            </div>
          </div>

          <div>
            <h2 className="text-blue-900 font-bold text-sm uppercase tracking-widest mb-4">Sobre Nosotros</h2>
            <h3 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              Más que un transporte, <br />
              <span className="text-red-600">somos tu aliado en el cambio.</span>
            </h3>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              TyM Transportes y Mudanzas nació con el propósito de profesionalizar el sector logístico en Catalunya. 
              Entendemos que detrás de cada caja hay una historia, un sueño o un nuevo comienzo. Por ello, tratamos cada artículo como si fuera nuestro.
            </p>

            <div className="grid grid-cols-1 gap-8">
              {values.map((item, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-blue-900 mb-2">{item.title}</h4>
                    <p className="text-gray-500 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Brand Stats */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-100 pt-16 text-center">
          <div>
            <div className="text-4xl font-black text-blue-900 mb-2">5k+</div>
            <div className="text-gray-500 font-medium">Mudanzas Realizadas</div>
          </div>
          <div>
            <div className="text-4xl font-black text-blue-900 mb-2">98%</div>
            <div className="text-gray-500 font-medium">Clientes Felices</div>
          </div>
          <div>
            <div className="text-4xl font-black text-blue-900 mb-2">24/7</div>
            <div className="text-gray-500 font-medium">Soporte IA & Humano</div>
          </div>
          <div>
            <div className="text-4xl font-black text-blue-900 mb-2">100%</div>
            <div className="text-gray-500 font-medium">Seguro de Carga</div>
          </div>
        </div>
      </div>
    </section>
  );
};
