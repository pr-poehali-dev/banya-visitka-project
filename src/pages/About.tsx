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

      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center text-primary">Процесс производства</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center space-y-4 p-6 bg-card rounded-lg hover-scale">
            <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-primary">1</span>
            </div>
            <h3 className="font-bold text-primary">Сбор</h3>
            <p className="text-sm text-muted-foreground">
              Заготавливаем ветки в экологически чистых районах в нужный сезон
            </p>
          </div>

          <div className="text-center space-y-4 p-6 bg-card rounded-lg hover-scale">
            <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-primary">2</span>
            </div>
            <h3 className="font-bold text-primary">Сортировка</h3>
            <p className="text-sm text-muted-foreground">
              Отбираем только лучшие ветки с здоровыми листьями
            </p>
          </div>

          <div className="text-center space-y-4 p-6 bg-card rounded-lg hover-scale">
            <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-primary">3</span>
            </div>
            <h3 className="font-bold text-primary">Вязка</h3>
            <p className="text-sm text-muted-foreground">
              Вяжем веники вручную по традиционной технологии
            </p>
          </div>

          <div className="text-center space-y-4 p-6 bg-card rounded-lg hover-scale">
            <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-primary">4</span>
            </div>
            <h3 className="font-bold text-primary">Упаковка</h3>
            <p className="text-sm text-muted-foreground">
              Упаковываем и отправляем вам свежие веники
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
