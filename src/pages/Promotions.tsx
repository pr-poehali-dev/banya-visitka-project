import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Promotions() {
  const promotions = [
    {
      id: 1,
      title: 'Скидка 20% на первый заказ',
      description: 'Оформите свой первый заказ и получите скидку 20% на любой веник из каталога',
      discount: '20%',
      image: 'https://cdn.poehali.dev/projects/c0fdd68b-bc54-42c4-8771-089ee4ce8baf/files/d17d49b5-3fec-4771-a3e2-0f25447d4a6d.jpg'
    },
    {
      id: 2,
      title: 'Купи 3 — получи 4-й в подарок',
      description: 'При покупке трёх веников четвёртый (самый дешёвый) вы получаете бесплатно',
      discount: '3+1',
      image: 'https://cdn.poehali.dev/projects/c0fdd68b-bc54-42c4-8771-089ee4ce8baf/files/5c492732-c2ee-43ce-8470-428133bd9485.jpg'
    },
    {
      id: 3,
      title: 'Скидка 10% при заказе от 10 шт.',
      description: 'Покупайте оптом выгодно! Закажите 10 или более веников и получите скидку 10% автоматически',
      discount: '10%',
      image: 'https://cdn.poehali.dev/projects/c0fdd68b-bc54-42c4-8771-089ee4ce8baf/files/c63121d2-f516-4f8c-a51c-c52492b3522a.jpg'
    }
  ];

  return (
    <div className="space-y-12 animate-fade-in">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center space-x-2">
          <Icon name="Gift" size={48} className="text-primary" />
          <h1 className="text-4xl md:text-5xl font-bold text-primary">Акции и скидки</h1>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Выгодные предложения для наших клиентов
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {promotions.map((promo, index) => (
          <div
            key={promo.id}
            className="bg-card border rounded-2xl overflow-hidden hover-scale animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="relative aspect-video overflow-hidden">
              <img
                src={promo.image}
                alt={promo.title}
                className="w-full h-full object-cover"
              />
              <Badge 
                variant="destructive" 
                className="absolute top-4 right-4 text-lg px-4 py-2 shadow-lg"
              >
                {promo.discount}
              </Badge>
            </div>

            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-bold text-primary">{promo.title}</h3>
              <p className="text-muted-foreground">{promo.description}</p>

              <div className="pt-4 border-t">
                <div className="bg-muted/50 rounded-lg p-3 text-center">
                  <p className="text-sm text-muted-foreground">
                    Уточните при заказе у продавца
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center space-y-6 py-8">
        <h2 className="text-3xl font-bold text-primary">Готовы сделать заказ?</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Не забудьте сообщить продавцу об акции при оформлении заказа!
        </p>
        <Link to="/catalog">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
            <Icon name="ShoppingBag" size={24} className="mr-2" />
            Перейти в каталог
          </Button>
        </Link>
      </div>
    </div>
  );
}
