import { CartItem } from '@/types/product';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
}

export default function Cart({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem }: CartProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-full sm:max-w-lg animate-slide-in-right">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold text-primary">Корзина</SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[60vh] space-y-4">
            <Icon name="ShoppingCart" size={64} className="text-muted-foreground" />
            <p className="text-lg text-muted-foreground">Корзина пуста</p>
          </div>
        ) : (
          <>
            <ScrollArea className="h-[calc(100vh-200px)] mt-6">
              <div className="space-y-4">
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

            <Separator className="my-4" />

            <SheetFooter className="flex flex-col space-y-4">
              <div className="flex justify-between items-center text-lg font-bold">
                <span>Итого:</span>
                <span className="text-primary text-2xl">{total} ₽</span>
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-lg">
                <Icon name="CreditCard" size={20} className="mr-2" />
                Оформить заказ
              </Button>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
