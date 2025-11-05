import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

export default function Contacts() {
  return (
    <div className="space-y-12 animate-fade-in">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">Контакты</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Свяжитесь с нами удобным для вас способом
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-primary">Контактная информация</h2>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="Phone" size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-1">Телефон</h3>
                <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                <p className="text-sm text-muted-foreground">Ежедневно с 9:00 до 21:00</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="Mail" size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-1">Email</h3>
                <p className="text-muted-foreground">info@banyavenik.ru</p>
                <p className="text-sm text-muted-foreground">Отвечаем в течение 24 часов</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="MapPin" size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-1">Адрес</h3>
                <p className="text-muted-foreground">г. Москва, ул. Банная, д. 1</p>
                <p className="text-sm text-muted-foreground">Офис и пункт выдачи заказов</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="Clock" size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-1">Режим работы</h3>
                <p className="text-muted-foreground">Пн-Пт: 9:00 - 20:00</p>
                <p className="text-muted-foreground">Сб-Вс: 10:00 - 18:00</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-primary mb-4">Мы в социальных сетях</h3>
            <div className="flex space-x-3">
              <Button variant="outline" size="icon" className="rounded-full hover-scale">
                <Icon name="MessageCircle" size={24} />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full hover-scale">
                <Icon name="Instagram" size={24} />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full hover-scale">
                <Icon name="Youtube" size={24} />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full hover-scale">
                <Icon name="Facebook" size={24} />
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-card p-6 md:p-8 rounded-2xl border">
          <h2 className="text-2xl font-bold text-primary mb-6">Напишите нам</h2>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Ваше имя</Label>
              <Input id="name" placeholder="Иван Иванов" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="ivan@example.com" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Телефон</Label>
              <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Сообщение</Label>
              <Textarea 
                id="message" 
                placeholder="Расскажите, чем мы можем вам помочь..."
                rows={5}
              />
            </div>

            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              <Icon name="Send" size={18} className="mr-2" />
              Отправить сообщение
            </Button>
          </form>
        </div>
      </div>

      <div className="bg-muted/30 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-primary mb-4">Есть вопросы?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Наши специалисты с удовольствием проконсультируют вас по выбору веника, 
          условиям доставки и любым другим вопросам.
        </p>
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Icon name="Phone" size={20} className="mr-2" />
          Позвонить нам
        </Button>
      </div>
    </div>
  );
}
