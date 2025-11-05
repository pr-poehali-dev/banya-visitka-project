import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Home() {
  return (
    <div className="space-y-20">
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM4QjQ1MTMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzAtMyAzLTYgNi02IDMgMCA2IDMgNiA2IDAgMy0zIDYtNiA2LTMgMC02LTMtNi02em0tMjQgMGMwLTMgMy02IDYtNiAzIDAgNiAzIDYgNiAwIDMtMyA2LTYgNi0zIDAtNi0zLTYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />
        
        <div className="relative z-10 text-center space-y-6 px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-primary">
            Добро пожаловать в БаняВеник
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Традиционные русские веники для настоящей бани. Здоровье и удовольствие в каждом листочке.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/catalog">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8">
                <Icon name="ShoppingBag" size={24} className="mr-2" />
                Перейти в каталог
              </Button>
            </Link>
            <Link to="/promotions">
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Icon name="Gift" size={24} className="mr-2" />
                Акции и скидки
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">Почему выбирают нас?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center space-y-4 p-6 rounded-lg bg-card hover-scale animate-fade-in">
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
              <Icon name="Leaf" size={32} className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-primary">100% натурально</h3>
            <p className="text-muted-foreground">
              Только экологически чистые материалы из русских лесов
            </p>
          </div>

          <div className="text-center space-y-4 p-6 rounded-lg bg-card hover-scale animate-fade-in">
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
              <Icon name="ThumbsUp" size={32} className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-primary">Проверено временем</h3>
            <p className="text-muted-foreground">
              Более 14 лет опыта в производстве банных веников
            </p>
          </div>

          <div className="text-center space-y-4 p-6 rounded-lg bg-card hover-scale animate-fade-in">
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
              <Icon name="Truck" size={32} className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-primary">Быстрая доставка</h3>
            <p className="text-muted-foreground">
              Доставка по всей России за 2-5 дней
            </p>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Наши преимущества</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex gap-4 animate-fade-in">
              <Icon name="CheckCircle" size={32} className="text-accent flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-primary">Свежие и замороженные</h3>
                <p className="text-muted-foreground">
                  У нас есть свежие веники сезонного сбора и замороженные — доступны круглый год
                </p>
              </div>
            </div>

            <div className="flex gap-4 animate-fade-in">
              <Icon name="CheckCircle" size={32} className="text-accent flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-primary">Ручная работа</h3>
                <p className="text-muted-foreground">
                  Каждый веник связан вручную опытными мастерами по традиционной технологии
                </p>
              </div>
            </div>

            <div className="flex gap-4 animate-fade-in">
              <Icon name="CheckCircle" size={32} className="text-accent flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-primary">Гарантия качества</h3>
                <p className="text-muted-foreground">
                  Мы гарантируем свежесть и качество каждого веника. Не устроило — вернём деньги
                </p>
              </div>
            </div>

            <div className="flex gap-4 animate-fade-in">
              <Icon name="CheckCircle" size={32} className="text-accent flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-primary">Экспертные консультации</h3>
                <p className="text-muted-foreground">
                  Подскажем, какой веник лучше подойдёт именно вам и как правильно его запарить
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-8 md:p-12 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Готовы к настоящей бане?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Выберите свой идеальный веник из нашего каталога и почувствуйте всю силу русской бани!
          </p>
          <Link to="/catalog">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8">
              Смотреть каталог
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
