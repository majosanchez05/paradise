import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Osito de Peluche Clásico",
    price: 29.99,
    originalPrice: 39.99,
    image: "https://images.pexels.com/photos/4816/teddy-bear-toy-cute.jpg?auto=compress&cs=tinysrgb&w=800",
    category: "bears",
    size: "medium",
    rating: 4.8,
    isOffer: true,
    description: "Un adorable osito de peluche clásico, perfecto para abrazar. Fabricado con materiales suaves y seguros.",
    gallery: [
      "https://images.pexels.com/photos/4816/teddy-bear-toy-cute.jpg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/265999/pexels-photo-265999.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/236000/pexels-photo-236000.jpeg?auto=compress&cs=tinysrgb&w=800"
    ]
  },
  {
    id: 2,
    name: "Unicornio Mágico",
    price: 34.99,
    image: "https://images.pexels.com/photos/1620653/pexels-photo-1620653.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "characters",
    size: "large",
    rating: 4.9,
    isNew: true,
    description: "Unicornio de peluche con colores pastel y cuerno dorado. Un compañero mágico para los más pequeños.",
    gallery: [
      "https://images.pexels.com/photos/1620653/pexels-photo-1620653.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/265999/pexels-photo-265999.jpeg?auto=compress&cs=tinysrgb&w=800"
    ]
  },
  {
    id: 3,
    name: "Gatito Naranja",
    price: 24.99,
    image: "https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "animals",
    size: "small",
    rating: 4.7,
    description: "Tierno gatito de peluche color naranja con ojos brillantes y cola esponjosa.",
    gallery: [
      "https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/4816/teddy-bear-toy-cute.jpg?auto=compress&cs=tinysrgb&w=800"
    ]
  },
  {
    id: 4,
    name: "Panda Gigante",
    price: 49.99,
    originalPrice: 59.99,
    image: "https://images.pexels.com/photos/265999/pexels-photo-265999.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "animals",
    size: "large",
    rating: 4.9,
    isOffer: true,
    description: "Panda gigante de peluche, súper suave y abrazable. Perfecto para decorar habitaciones.",
    gallery: [
      "https://images.pexels.com/photos/265999/pexels-photo-265999.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/4816/teddy-bear-toy-cute.jpg?auto=compress&cs=tinysrgb&w=800"
    ]
  },
  {
    id: 5,
    name: "Conejo Rosa",
    price: 19.99,
    image: "https://images.pexels.com/photos/1620653/pexels-photo-1620653.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "animals",
    size: "small",
    rating: 4.6,
    isNew: true,
    description: "Adorable conejo de peluche en tono rosa suave con orejas largas y cola esponjosa.",
    gallery: [
      "https://images.pexels.com/photos/1620653/pexels-photo-1620653.jpeg?auto=compress&cs=tinysrgb&w=800"
    ]
  },
  {
    id: 6,
    name: "Dragón Amigable",
    price: 39.99,
    image: "https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "characters",
    size: "medium",
    rating: 4.8,
    description: "Dragón de peluche con colores vibrantes y expresión amigable. No da miedo, solo abrazos.",
    gallery: [
      "https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=800"
    ]
  },
  {
    id: 7,
    name: "Elefante Bebé",
    price: 27.99,
    image: "https://images.pexels.com/photos/1620653/pexels-photo-1620653.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "animals",
    size: "medium",
    rating: 4.8,
    isNew: true,
    description: "Tierno elefante bebé de peluche con orejas grandes y trompa suave. Perfecto para abrazar.",
    gallery: [
      "https://images.pexels.com/photos/1620653/pexels-photo-1620653.jpeg?auto=compress&cs=tinysrgb&w=800"
    ]
  },
  {
    id: 8,
    name: "Oso Polar Gigante",
    price: 54.99,
    originalPrice: 69.99,
    image: "https://images.pexels.com/photos/4816/teddy-bear-toy-cute.jpg?auto=compress&cs=tinysrgb&w=800",
    category: "bears",
    size: "large",
    rating: 4.9,
    isOffer: true,
    description: "Majestuoso oso polar de peluche, súper suave y de gran tamaño. Ideal para decorar y abrazar.",
    gallery: [
      "https://images.pexels.com/photos/4816/teddy-bear-toy-cute.jpg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/265999/pexels-photo-265999.jpeg?auto=compress&cs=tinysrgb&w=800"
    ]
  }
];