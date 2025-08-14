import React from 'react';
import { Heart, MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <h3 className="text-2xl font-bold">Paradise</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              En Paradise creamos momentos mágicos con los peluches más tiernos y de mejor calidad. 
              Cada abrazo cuenta una historia especial.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-pink-600 p-2 rounded-full hover:bg-pink-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-blue-400 p-2 rounded-full hover:bg-blue-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-red-600 p-2 rounded-full hover:bg-red-700 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Productos
                </a>
              </li>
              <li>
                <a href="#offers" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Ofertas
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Categorías</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Ositos de Peluche
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Animales
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Personajes
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Tamaño Grande
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Nuevos Productos
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">
                  Av. Paradise 123<br />
                  Ciudad de México, CDMX 01234
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-pink-400 flex-shrink-0" />
                <p className="text-gray-300">+52 55 1234 5678</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-pink-400 flex-shrink-0" />
                <p className="text-gray-300">info@paradise-peluches.com</p>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <h5 className="font-semibold mb-3">Newsletter</h5>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-pink-400 text-sm"
                />
                <button className="bg-pink-500 px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors">
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-gray-400 text-sm">
              <p>© 2024 Paradise. Todos los derechos reservados.</p>
              <div className="flex items-center gap-1">
                <span>Hecho con</span>
                <Heart className="w-4 h-4 text-pink-400 fill-current" />
                <span>para los más pequeños</span>
              </div>
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-pink-400 transition-colors">
                Términos y Condiciones
              </a>
              <a href="#" className="hover:text-pink-400 transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="hover:text-pink-400 transition-colors">
                Cambios y Devoluciones
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};