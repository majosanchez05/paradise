import React from 'react';
import { Heart, Award, Truck, Shield, Star, Users } from 'lucide-react';

export const About: React.FC = () => {
  const features = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Hecho con amor',
      description: 'Cada peluche es creado con cuidado especial y materiales de la mejor calidad.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Calidad premium',
      description: 'Utilizamos solo los mejores materiales, suaves al tacto y seguros para todas las edades.'
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Envío gratis',
      description: 'Disfruta de envío gratuito en todas tus compras mayores a $50 pesos.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Garantía total',
      description: 'Ofrecemos garantía completa en todos nuestros productos por 6 meses.'
    }
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Sobre Paradise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos una empresa familiar dedicada a crear momentos mágicos a través de los peluches más tiernos y de mejor calidad. 
            Con más de 10 años de experiencia, nos hemos convertido en el destino favorito para encontrar el compañero perfecto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Story */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Nuestra Historia</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Comenzamos como una pequeña 
                tienda familiar con la misión de llevar alegría y compañía a hogares de todo el mundo.
              </p>
              <p>
                Hoy, después de más de una década, seguimos comprometidos con la misma pasión: ofrecer peluches 
                de la más alta calidad que no solo sean adorables, sino que también sean seguros, duraderos y 
                capaces de crear recuerdos que duren toda la vida.
              </p>
              <p>
                Cada peluche en nuestra colección es cuidadosamente seleccionado y probado para garantizar que 
                cumple con nuestros estándares de calidad y seguridad.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://img.freepik.com/vector-gratis/diseno-plano-dia-internacional-concepto-familia_23-2148492790.jpg?auto=compress&cs=tinysrgb&w=800"
                alt="Sobre Paradise"
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-pink-500 text-white p-6 rounded-2xl shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm">Años de experiencia</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-r from-pink-100 to-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="text-pink-600">
                  {feature.icon}
                </div>
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center mb-2">
                <Users className="w-6 h-6 mr-2" />
                <div className="text-3xl font-bold">10,000+</div>
              </div>
              <div className="text-pink-100">Clientes felices</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <Heart className="w-6 h-6 mr-2" />
                <div className="text-3xl font-bold">500+</div>
              </div>
              <div className="text-pink-100">Productos únicos</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <Star className="w-6 h-6 mr-2" />
                <div className="text-3xl font-bold">4.9</div>
              </div>
              <div className="text-pink-100">Calificación promedio</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <Award className="w-6 h-6 mr-2" />
                <div className="text-3xl font-bold">99%</div>
              </div>
              <div className="text-pink-100">Satisfacción</div>
            </div>
          </div>
        </div>

        {/* Mission */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Nuestra Misión</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Crear momentos mágicos y duraderos a través de peluches excepcionales que no solo sean adorables, 
            sino que también aporten compañía, consuelo y alegría a personas de todas las edades. Nos comprometemos 
            a mantener los más altos estándares de calidad y servicio para hacer de cada compra una experiencia especial.
          </p>
        </div>
      </div>
    </section>
  );
};
