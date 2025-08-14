import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductGrid } from './components/ProductGrid';
import { Cart } from './components/Cart';
import { Offers } from './components/Offers';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { useCart } from './hooks/useCart';
import { products } from './data/products';
import { FilterState } from './types';

function App() {
  const {
    items,
    isOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotalItems,
    getTotalPrice,
    toggleCart,
    setIsOpen
  } = useCart();

  const [activeSection, setActiveSection] = React.useState('home');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [filters, setFilters] = React.useState<FilterState>({
    category: '',
    size: '',
    search: ''
  });

  // Update search in filters when search query changes
  React.useEffect(() => {
    setFilters(prev => ({ ...prev, search: searchQuery }));
  }, [searchQuery]);

  const handleExploreClick = () => {
    setActiveSection('products');
    // Smooth scroll to products section
    setTimeout(() => {
      const productsSection = document.getElementById('products');
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    // Smooth scroll to section
    setTimeout(() => {
      const targetSection = document.getElementById(section);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      } else if (section === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header
        cartItemsCount={getTotalItems()}
        onCartToggle={toggleCart}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
      />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="home">
          <Hero onExploreClick={handleExploreClick} />
        </section>

        {/* Products Section */}
        <ProductGrid
          products={products}
          onAddToCart={addToCart}
          filters={filters}
          onFilterChange={setFilters}
        />

        {/* Offers Section */}
        <Offers products={products} onAddToCart={addToCart} />

        {/* About Section */}
        <About />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Cart Sidebar */}
      <Cart
        isOpen={isOpen}
        items={items}
        onClose={() => setIsOpen(false)}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        getTotalPrice={getTotalPrice}
      />

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}

export default App;