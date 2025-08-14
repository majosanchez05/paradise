import React from 'react';
import { Heart, Star } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section className="relative bg-gradient-to-br from-pink-50 via-purple-25 to-blue-25 py-20 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-pink-300 opacity-30 animate-pulse">
        <Heart className="w-8 h-8" />
      </div>
      <div className="absolute top-20 right-20 text-purple-300 opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <Star className="w-6 h-6" />
      </div>
      <div className="absolute bottom-10 left-1/4 text-blue-300 opacity-30 animate-pulse" style={{ animationDelay: '2s' }}>
        <Heart className="w-6 h-6" />
      </div>
      <div className="absolute top-1/2 right-10 text-pink-200 opacity-40 animate-bounce">
        <Star className="w-4 h-4" />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Content */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-5xl lg:text-7xl font-bold text-gray-800 mb-8 leading-tight">
              Bienvenido a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-pulse">
                Paradise
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 mb-10 leading-relaxed font-medium">
              Descubre el mundo más tierno y acogedor de peluches. 
             
              
            </p>
            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <button
                onClick={onExploreClick}
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 hover:from-pink-600 hover:to-purple-700"
              >
                Explorar Colección
              </button>
              <button className="border-2 border-pink-400 text-pink-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-pink-50 hover:border-pink-500 transition-all duration-300 hover:scale-105">
                Ver Ofertas
              </button>
            </div>
            
            {/* Stats */}
            <div className="flex items-center gap-12 text-gray-600">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">500+</div>
                <div className="text-sm font-medium">Peluches únicos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">10k+</div>
                <div className="text-sm font-medium">Clientes felices</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">99%</div>
                <div className="text-sm font-medium">Satisfacción</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 lg:w-[28rem] lg:h-[28rem] rounded-full overflow-hidden shadow-2xl ring-4 ring-pink-200/50">
                <img
                  src="https://images.pexels.com/photos/4816/teddy-bear-toy-cute.jpg?auto=compress&cs=tinysrgb&w=800"
                  alt="Peluches Paradise"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000 filter brightness-105"
                />
              </div>
              {/* Floating badges */}
              <div className="absolute -top-6 -left-6 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-3 rounded-full text-sm font-bold shadow-xl animate-bounce">
                ¡Nuevo!
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-full text-sm font-bold shadow-xl animate-bounce" style={{ animationDelay: '0.5s' }}>
                Envío gratis
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};