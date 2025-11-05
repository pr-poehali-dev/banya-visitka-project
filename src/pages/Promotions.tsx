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
      validUntil: '31.12.2024',
      promo: 'FIRST20'
    },
    {
      id: 2,
      title: 'Купи 3 — получи 4-й в подарок',
      description: 'При покупке трёх веников четвёртый (самый дешёвый) вы получаете бесплатно',
      discount: '3+1',
      validUntil: '15.12.2024',
      promo: 'COMBO4'
    },
    {
      id: 3,
      title: 'Бесплатная доставка',
      description: 'Бесплатная доставка по Москве при заказе от 2000 рублей',
      discount: 'FREE',
      validUntil: '31.01.2025',
      promo: 'FREESHIP'
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
            className="bg-card border rounded-2xl p-6 space-y-4 hover-scale animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-start justify-between">
              <Badge variant="destructive" className="text-lg px-3 py-1">
                {promo.discount}
              </Badge>
              <Icon name="Tag" size={32} className="text-primary" />
            </div>

            <h3 className="text-2xl font-bold text-primary">{promo.title}</h3>
            <p className="text-muted-foreground">{promo.description}</p>

            <div className="pt-4 space-y-3 border-t">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Действует до:</span>
                <span className="font-semibold">{promo.validUntil}</span>
              </div>
              <div className="bg-muted/50 rounded-lg p-3 text-center">
                <p className="text-xs text-muted-foreground mb-1">Промокод</p>
                <p className="text-xl font-bold text-primary">{promo.promo}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-8 md:p-12">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <Icon name="Sparkles" size={64} className="mx-auto text-primary" />
          <h2 className="text-3xl font-bold text-primary">Подпишитесь на рассылку</h2>
          <p className="text-lg text-muted-foreground">
            Узнавайте первыми о новых акциях, скидках и специальных предложениях!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Ваш email"
              className="flex-1 px-4 py-3 rounded-lg border bg-background"
            />
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
              Подписаться
            </Button>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-card border rounded-2xl p-8 space-y-4">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            <Icon name="Percent" size={32} className="text-primary" />
          </div>
          <h3 className="text-2xl font-bold text-primary">Программа лояльности</h3>
          <p className="text-muted-foreground">
            Копите баллы за покупки и обменивайте их на скидки. 
            За каждые 100 рублей покупки начисляется 5 баллов.
          </p>
          <Button variant="outline" className="mt-4">
            Узнать подробнее
          </Button>
        </div>

        <div className="bg-card border rounded-2xl p-8 space-y-4">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            <Icon name="Users" size={32} className="text-primary" />
          </div>
          <h3 className="text-2xl font-bold text-primary">Приведи друга</h3>
          <p className="text-muted-foreground">
            Рекомендуйте нас друзьям! Вы получите 300 бонусных рублей, 
            а ваш друг — скидку 15% на первый заказ.
          </p>
          <Button variant="outline" className="mt-4">
            Получить ссылку
          </Button>
        </div>
      </div>

      <div className="text-center space-y-6 py-8">
        <h2 className="text-3xl font-bold text-primary">Готовы сделать заказ?</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Не забудьте использовать промокод при оформлении заказа!
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
