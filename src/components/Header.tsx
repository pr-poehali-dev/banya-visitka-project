import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';

interface HeaderProps {
  cartItemsCount: number;
  onCartOpen: () => void;
}

export default function Header({ cartItemsCount, onCartOpen }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Главная', path: '/' },
    { name: 'Каталог', path: '/catalog' },
    { name: 'О нас', path: '/about' },
    { name: 'Акции', path: '/promotions' }
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl">🧖‍♂️</span>
            <span className="text-2xl font-bold text-primary">БаняВеник</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary story-link ${
                  location.pathname === item.path ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={onCartOpen}
            >
              <Icon name="ShoppingCart" size={24} />
              {cartItemsCount > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -right-2 -top-2 h-5 w-5 rounded-full p-0 flex items-center justify-center animate-bounce-in"
                >
                  {cartItemsCount}
                </Badge>
              )}
            </Button>

            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={handleNavClick}
                      className={`text-lg font-medium transition-colors hover:text-primary ${
                        location.pathname === item.path ? 'text-primary' : 'text-muted-foreground'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}