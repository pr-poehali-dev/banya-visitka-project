import { useState } from 'react';
import { Product } from '@/types/product';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, quantity: number) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleIncrement = () => setQuantity(prev => prev + 1);
  const handleDecrement = () => setQuantity(prev => Math.max(1, prev - 1));

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    setQuantity(1);
  };

  return (
    <Card className="group relative overflow-hidden hover-scale transition-all duration-300">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="secondary"
              size="icon"
              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              onMouseEnter={() => setIsExpanded(true)}
              onMouseLeave={() => setIsExpanded(false)}
            >
              <Icon name="Eye" size={20} />
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl animate-scale-in">
            <DialogHeader>
              <DialogTitle className="text-3xl font-bold text-primary">{product.name}</DialogTitle>
            </DialogHeader>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <p className="text-lg font-semibold text-secondary">{product.price} ₽</p>
                <p className="text-muted-foreground">{product.description}</p>
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Полезные свойства:</h4>
                  <ul className="space-y-2">
                    {product.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <Icon name="Check" size={20} className="text-accent mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <CardContent className="p-4">
        <h3 className="text-xl font-bold mb-2 text-primary">{product.name}</h3>
        <p className="text-lg font-semibold text-secondary mb-2">{product.price} ₽</p>
        <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex flex-col space-y-3">
        <div className="flex items-center justify-between w-full">
          <span className="text-sm font-medium">Количество:</span>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={handleDecrement}
            >
              <Icon name="Minus" size={16} />
            </Button>
            <span className="w-12 text-center font-semibold">{quantity}</span>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={handleIncrement}
            >
              <Icon name="Plus" size={16} />
            </Button>
          </div>
        </div>
        <Button
          onClick={handleAddToCart}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          <Icon name="ShoppingCart" size={18} className="mr-2" />
          Добавить в корзину
        </Button>
      </CardFooter>
    </Card>
  );
}
