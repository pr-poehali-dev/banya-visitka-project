import { CartItem } from '@/types/product';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
}

export default function Cart({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem }: CartProps) {
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
  const hasDiscount = totalQuantity > 10;
  const discount = hasDiscount ? subtotal * 0.1 : 0;
  const total = subtotal - discount;

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-full sm:max-w-lg animate-slide-in-right flex flex-col">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold text-primary">Корзина</SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center flex-1 space-y-6">
            <Icon name="ShoppingCart" size={64} className="text-muted-foreground" />
            <p className="text-lg text-muted-foreground">Корзина пуста</p>
            <Link to="/catalog" onClick={onClose}>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Icon name="ShoppingBag" size={18} className="mr-2" />
                Перейти в каталог
              </Button>
            </Link>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 mt-6 mb-4">
              <div className="space-y-4 pr-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 animate-fade-in">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1 space-y-2">
                      <h4 className="font-semibold text-primary">{item.name}</h4>
                      <p className="text-sm text-secondary font-medium">{item.price} ₽</p>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        >
                          <Icon name="Minus" size={14} />
                        </Button>
                        <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        >
                          <Icon name="Plus" size={14} />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 ml-auto text-destructive hover:text-destructive"
                          onClick={() => onRemoveItem(item.id)}
                        >
                          <Icon name="Trash2" size={14} />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="border-t pt-4 space-y-4">
              {hasDiscount && (
                <div className="bg-accent/10 border border-accent rounded-lg p-3 animate-bounce-in">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Icon name="Gift" size={20} className="text-accent" />
                      <span className="text-sm font-medium text-accent">Скидка 10% (более 10 шт.)</span>
                    </div>
                    <Badge variant="secondary" className="bg-accent text-white">-{discount.toFixed(0)} ₽</Badge>
                  </div>
                </div>
              )}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <span>Товаров ({totalQuantity} шт.):</span>
                  <span>{subtotal} ₽</span>
                </div>
                {hasDiscount && (
                  <div className="flex justify-between items-center text-sm text-accent">
                    <span>Скидка:</span>
                    <span>-{discount.toFixed(0)} ₽</span>
                  </div>
                )}
                <Separator />
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Итого:</span>
                  <span className="text-primary text-2xl">{total.toFixed(0)} ₽</span>
                </div>
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-lg">
                <Icon name="CreditCard" size={20} className="mr-2" />
                Оформить заказ
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}