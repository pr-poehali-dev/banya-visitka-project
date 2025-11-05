import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🧖‍♂️</span>
              <span className="text-xl font-bold text-primary">БаняВеник</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Лучшие веники для русской бани. Качество и традиции с 2010 года.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-primary">Навигация</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Главная</Link></li>
              <li><Link to="/catalog" className="text-sm text-muted-foreground hover:text-primary transition-colors">Каталог</Link></li>
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">О нас</Link></li>
              <li><Link to="/contacts" className="text-sm text-muted-foreground hover:text-primary transition-colors">Контакты</Link></li>
              <li><Link to="/promotions" className="text-sm text-muted-foreground hover:text-primary transition-colors">Акции</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-primary">Контакты</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Icon name="Phone" size={16} />
                <span>+7 (999) 123-45-67</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Icon name="Mail" size={16} />
                <span>info@banyavenik.ru</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Icon name="MapPin" size={16} />
                <span>Москва, ул. Банная, 1</span>
              </li>
            </ul>
            <div className="flex space-x-2 mt-4">
              <Button variant="outline" size="icon" className="rounded-full">
                <Icon name="MessageCircle" size={18} />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Icon name="Instagram" size={18} />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Icon name="Youtube" size={18} />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-primary">Подписка на новости</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Узнавайте первыми о новинках и акциях!
            </p>
            <div className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Ваш email" 
                className="flex-1"
              />
              <Button className="bg-primary hover:bg-primary/90">
                <Icon name="Send" size={18} />
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2024 БаняВеник. Все права защищены.
          </p>
          <div className="flex space-x-4">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Политика конфиденциальности
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
