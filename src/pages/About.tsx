import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function About() {
  return (
    <div className="space-y-16 animate-fade-in">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">О нас</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          История компании БаняВеник — это история любви к русским традициям
        </p>
      </div>

      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-primary">Наша история</h2>
          <p className="text-muted-foreground leading-relaxed">
            Компания БаняВеник была основана в 2010 году группой энтузиастов, влюблённых в русскую баню. 
            Мы начинали с небольшого производства в деревне, где вручную вязали веники по старинным рецептам.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            За годы работы мы расширились, но не изменили своим принципам: только натуральные материалы, 
            ручная работа и строгий контроль качества. Сегодня наши веники радуют тысячи любителей бани по всей России.
          </p>
        </div>
        <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8 h-[400px] flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="text-8xl">🧖‍♂️</div>
            <p className="text-2xl font-bold text-primary">14 лет традиций</p>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Наши ценности</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
              <Icon name="Heart" size={32} className="text-primary" />
            </div>
            <h3 className="text-xl font-bold text-primary">Любовь к делу</h3>
            <p className="text-muted-foreground">
              Каждый веник делаем с душой и вниманием к деталям
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
              <Icon name="Shield" size={32} className="text-primary" />
            </div>
            <h3 className="text-xl font-bold text-primary">Качество</h3>
            <p className="text-muted-foreground">
              Используем только лучшие материалы и проверенные технологии
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
              <Icon name="Users" size={32} className="text-primary" />
            </div>
            <h3 className="text-xl font-bold text-primary">Забота о клиентах</h3>
            <p className="text-muted-foreground">
              Ваше удовольствие от бани — наша главная цель
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-8 md:p-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">Свяжитесь с нами</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-card/80 border rounded-2xl p-6 space-y-4 hover-scale">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Phone" size={24} className="text-primary" />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-primary mb-2">Телефон</h3>
                <a 
                  href="tel:+79991234567" 
                  className="text-xl font-semibold text-secondary hover:text-primary transition-colors"
                >
                  +7 (999) 123-45-67
                </a>
              </div>
            </div>

            <div className="bg-card/80 border rounded-2xl p-6 space-y-4 hover-scale">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Mail" size={24} className="text-primary" />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-primary mb-2">Email</h3>
                <a 
                  href="mailto:info@banyavenik.ru" 
                  className="text-lg font-semibold text-secondary hover:text-primary transition-colors break-all"
                >
                  info@banyavenik.ru
                </a>
              </div>
            </div>
          </div>

          <div className="text-center space-y-6">
            <h3 className="text-xl font-bold text-primary">Напишите нам</h3>
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

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
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
                className="px-8 bg-card/50"
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
      </section>
    </div>
  );
}
