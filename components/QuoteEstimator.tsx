
import React, { useState } from 'react';
import { getSmartQuote } from '../services/gemini';
import { QuoteEstimate } from '../types';

export const QuoteEstimator: React.FC = () => {
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [estimate, setEstimate] = useState<QuoteEstimate | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleEstimate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!description.trim()) return;

    setLoading(true);
    setError(null);
    try {
      const result = await getSmartQuote(description);
      setEstimate(result);
    } catch (err) {
      console.error(err);
      setError("Hubo un error al generar la cotización. Intenta describiendo tus muebles de forma más sencilla.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="quote" className="py-24 bg-blue-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 opacity-10">
          <svg className="w-96 h-96 text-white" fill="currentColor" viewBox="0 0 200 200">
            <path d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.5,90,-16.3,88.5,-0.9C86.9,14.5,81.2,29.1,72.4,42.4C63.6,55.7,51.7,67.7,37.8,74.5C23.9,81.3,8.1,82.9,-7.7,80.1C-23.4,77.3,-39,70.1,-52.1,59.3C-65.1,48.5,-75.6,34.1,-80.4,18.5C-85.1,2.8,-84.1,-14.1,-77.8,-28.5C-71.5,-42.9,-59.9,-54.8,-46.6,-62.4C-33.3,-70.1,-16.7,-73.4,-0.4,-72.7C15.8,-72,30.6,-83.5,44.7,-76.4Z" transform="translate(100 100)" />
          </svg>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
          <div className="mb-12 lg:mb-0">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Cotizador Inteligente España
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              Dinos qué necesitas trasladar dentro de España. Nuestra IA calculará el volumen y el presupuesto estimado en <strong>Euros (€)</strong> para tu zona.
            </p>
            
            <form onSubmit={handleEstimate} className="mt-8">
              <div className="flex flex-col space-y-4">
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Ej: Sofá de 3 plazas, mesa de comedor con 4 sillas, 15 cajas de libros y una televisión de 55 pulgadas..."
                  className="w-full h-40 px-4 py-3 rounded-2xl bg-white/10 border border-blue-400/30 text-white placeholder-blue-200/50 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all backdrop-blur-sm"
                  required
                />
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-4 rounded-xl font-bold text-lg shadow-lg transition-all flex items-center justify-center gap-3 ${
                    loading ? 'bg-red-500/50 cursor-not-allowed' : 'bg-red-600 hover:bg-red-500 text-white active:scale-[0.98]'
                  }`}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Calculando presupuesto...
                    </>
                  ) : (
                    'Obtener Estimado en €'
                  )}
                </button>
              </div>
            </form>
            {error && <p className="mt-4 text-red-300 font-medium">{error}</p>}
          </div>

          <div className="transition-all duration-500">
            {estimate ? (
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-blue-100 transform animate-fade-in">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-900">Tu Presupuesto (España)</h3>
                    <p className="text-gray-500">Estimación basada en el mercado español</p>
                  </div>
                  <div className="bg-red-100 text-red-700 px-4 py-1 rounded-full font-bold text-sm">
                    {estimate.recommendedTruck}
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between p-4 bg-gray-50 rounded-xl">
                    <span className="text-gray-600">Volumen Total</span>
                    <span className="font-bold text-blue-900">{estimate.totalVolume.toFixed(2)} m³</span>
                  </div>
                  <div className="flex justify-between p-4 bg-gray-50 rounded-xl border-2 border-red-50">
                    <span className="text-gray-600 font-medium">Precio Estimado</span>
                    <span className="font-black text-red-600 text-lg">
                      {estimate.estimatedPriceRange.min.toLocaleString('es-ES')}€ - {estimate.estimatedPriceRange.max.toLocaleString('es-ES')}€
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Inventario Detectado:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {estimate.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="w-6 h-6 flex items-center justify-center bg-blue-100 text-blue-900 rounded-md font-bold text-xs">
                          {item.quantity}
                        </span>
                        {item.name}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 border-l-4 border-red-500 bg-red-50 text-red-800 text-sm mb-8 italic">
                  "{estimate.advice}"
                </div>

                <button className="w-full py-4 bg-blue-900 text-white rounded-xl font-bold hover:bg-blue-800 transition-colors shadow-lg">
                  Reservar Mudanza en España
                </button>
              </div>
            ) : (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center bg-white/5 rounded-3xl border-2 border-dashed border-white/20 p-12 text-center">
                <div className="w-20 h-20 bg-blue-400/10 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.674M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="text-xl font-medium text-white mb-2">Esperando tu descripción...</h4>
                <p className="text-blue-200">Ingresa tus muebles a la izquierda para ver el presupuesto en Euros (€).</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
