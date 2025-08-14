import React from 'react';
import { Clock, Star, ShoppingCart } from 'lucide-react';
import { Product } from '../types';

interface OffersProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export const Offers: React.FC<OffersProps> = ({ products, onAddToCart }) => {
  const offerProducts = products.filter(product => product.isOffer);
  const [timeLeft, setTimeLeft] = React.useState({
    hours: 23,
    minutes: 59,
    seconds: 45
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="offers" className="py-16 bg-gradient-to-br from-red-50 via-pink-50 to-orange-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
            🔥 Ofertas Especiales 🔥
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            ¡No te pierdas estas increíbles ofertas! Precios especiales por tiempo limitado.
          </p>
          
          {/* Countdown Timer */}
          <div className="inline-flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-full font-semibold">
            <Clock className="w-5 h-5" />
            <span>Termina en: </span>
            <div className="flex items-center gap-1">
              <span className="bg-white bg-opacity-20 px-2 py-1 rounded">
                {timeLeft.hours.toString().padStart(2, '0')}
              </span>
              <span>:</span>
              <span className="bg-white bg-opacity-20 px-2 py-1 rounded">
                {timeLeft.minutes.toString().padStart(2, '0')}
              </span>
              <span>:</span>
              <span className="bg-white bg-opacity-20 px-2 py-1 rounded">
                {timeLeft.seconds.toString().padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerProducts.map(product => {
            const discount = product.originalPrice 
              ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
              : 0;

            return (
              <div
                key={product.id}
                className="bg-white/90 backdrop-blur-sm rounded-3xl soft-shadow transition-all duration-500 overflow-hidden group relative border border-rose-100/50"
              >
                {/* Discount Badge */}
                <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-red-500 to-rose-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                  -{discount}% OFF
                </div>

                {/* Product Image */}
                <div className="relative overflow-hidden h-64">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Product Info */}
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    {renderStars(Math.floor(product.rating))}
                    <span className="text-sm text-gray-500 ml-1">({product.rating})</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl font-bold bg-gradient-to-r from-red-500 to-rose-600 bg-clip-text text-transparent">
                      ${product.price.toFixed(2)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-400 line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>

                  {/* Savings */}
                  {product.originalPrice && (
                    <div className="bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-bold mb-6 inline-block shadow-sm">
                      Ahorras ${(product.originalPrice - product.price).toFixed(2)}
                    </div>
                  )}

                  {/* Add to Cart Button */}
                  <button
                    onClick={() => onAddToCart(product)}
                    className="w-full bg-gradient-to-r from-red-500 to-pink-600 text-white py-4 px-6 rounded-xl font-bold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 hover:from-red-600 hover:to-pink-700"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    ¡Aprovechar Oferta!
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              ¿No encuentras lo que buscas?
            </h3>
            <p className="text-gray-600 mb-6">
              Suscríbete a nuestro newsletter y sé el primero en conocer nuestras ofertas especiales
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-400"
              />
              <button className="bg-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-600 transition-colors whitespace-nowrap">
                Suscribirse
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};