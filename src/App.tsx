import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Cart from '@/components/Cart';
import Home from '@/pages/Home';
import Catalog from '@/pages/Catalog';
import About from '@/pages/About';
import Contacts from '@/pages/Contacts';
import Promotions from '@/pages/Promotions';
import NotFound from '@/pages/NotFound';
import { Product, CartItem } from '@/types/product';

const CART_STORAGE_KEY = 'banya-venik-cart';

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        console.error('Failed to parse cart from localStorage', e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = (product: Product, quantity: number) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        toast.success(`Количество "${product.name}" увеличено`, {
          description: `Добавлено ещё ${quantity} шт.`
        });
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        toast.success(`"${product.name}" добавлен в корзину`, {
          description: `Количество: ${quantity} шт.`
        });
        return [...prevItems, { ...product, quantity }];
      }
    });
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    toast.info('Товар удалён из корзины');
  };

  const totalItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header 
          cartItemsCount={totalItemsCount}
          onCartOpen={() => setIsCartOpen(true)}
        />
        
        <main className="flex-1 container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route 
              path="/catalog" 
              element={<Catalog onAddToCart={handleAddToCart} />} 
            />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/promotions" element={<Promotions />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />

        <Cart
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          items={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
        />

        <Toaster position="top-center" richColors />
      </div>
    </Router>
  );
}

export default App;
