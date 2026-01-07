
import React, { useState } from 'react';

export const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-blue-900 rounded-[3rem] overflow-hidden shadow-2xl">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-orange-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>

          <div className="relative px-8 py-16 md:px-16 md:py-20 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="text-center lg:text-left max-w-xl">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                Recibe nuestras ofertas exclusivas
              </h2>
              <p className="text-blue-100 text-lg">
                Suscríbete para recibir noticias sobre nuevos servicios, consejos de mudanza y promociones especiales directamente en tu correo.
              </p>
            </div>

            <div className="w-full max-w-md">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <div className="flex-grow">
                  <label htmlFor="email-address" className="sr-only">Correo electrónico</label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    className="w-full px-5 py-4 rounded-2xl bg-white/10 border border-blue-400/30 text-white placeholder-blue-300/60 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all backdrop-blur-sm"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className={`px-8 py-4 rounded-2xl font-bold text-white shadow-lg transition-all flex items-center justify-center min-w-[140px] ${
                    status === 'loading' 
                      ? 'bg-orange-600/50 cursor-not-allowed' 
                      : 'bg-orange-600 hover:bg-orange-500 active:scale-95'
                  }`}
                >
                  {status === 'loading' ? (
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : 'Suscribirme'}
                </button>
              </form>
              
              {status === 'success' && (
                <p className="mt-4 text-green-400 font-medium text-sm flex items-center gap-2 animate-fade-in">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  ¡Gracias! Te has suscrito correctamente.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
      `}</style>
    </section>
  );
};
