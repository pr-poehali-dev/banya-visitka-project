import { Button } from '@/components/ui/button';
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

      <div className="max-w-3xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card border rounded-2xl p-8 space-y-6 hover-scale">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Icon name="Phone" size={32} className="text-primary" />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-primary mb-2">Телефон</h3>
              <a 
                href="tel:+79991234567" 
                className="text-2xl font-semibold text-secondary hover:text-primary transition-colors"
              >
                +7 (999) 123-45-67
              </a>
              <p className="text-sm text-muted-foreground mt-2">Ежедневно с 9:00 до 21:00</p>
            </div>
          </div>

          <div className="bg-card border rounded-2xl p-8 space-y-6 hover-scale">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Icon name="Mail" size={32} className="text-primary" />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-primary mb-2">Email</h3>
              <a 
                href="mailto:info@banyavenik.ru" 
                className="text-xl font-semibold text-secondary hover:text-primary transition-colors break-all"
              >
                info@banyavenik.ru
              </a>
              <p className="text-sm text-muted-foreground mt-2">Отвечаем в течение 24 часов</p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-bold text-primary text-center mb-6">Мессенджеры</h3>
          <div className="flex justify-center space-x-6">
            <a 
              href="https://t.me/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#0088cc] to-[#229ED9] rounded-2xl flex items-center justify-center hover-scale shadow-lg transition-all group-hover:shadow-xl">
                <Icon name="MessageCircle" size={40} className="text-white" />
              </div>
              <p className="text-center mt-2 text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                Telegram
              </p>
            </a>

            <a 
              href="https://wa.me/79991234567" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-2xl flex items-center justify-center hover-scale shadow-lg transition-all group-hover:shadow-xl">
                <Icon name="MessageSquare" size={40} className="text-white" />
              </div>
              <p className="text-center mt-2 text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                WhatsApp
              </p>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto">
        <Icon name="Clock" size={48} className="mx-auto text-primary mb-4" />
        <h2 className="text-2xl font-bold text-primary mb-4">Режим работы</h2>
        <div className="space-y-2 text-lg">
          <p className="text-muted-foreground">
            <span className="font-semibold">Пн-Пт:</span> 9:00 - 20:00
          </p>
          <p className="text-muted-foreground">
            <span className="font-semibold">Сб-Вс:</span> 10:00 - 18:00
          </p>
        </div>
      </div>

      <div className="text-center space-y-6 py-8">
        <h2 className="text-3xl font-bold text-primary">Готовы сделать заказ?</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Напишите нам в любой удобный мессенджер или позвоните!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
            asChild
          >
            <a href="tel:+79991234567">
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить
            </a>
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="px-8"
            asChild
          >
            <a href="https://wa.me/79991234567" target="_blank" rel="noopener noreferrer">
              <Icon name="MessageSquare" size={20} className="mr-2" />
              Написать в WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
