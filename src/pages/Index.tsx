import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState('dishes');
  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    comment: '',
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Спасибо, ${bookingForm.name}! Ваш столик на ${bookingForm.guests} человек забронирован на ${bookingForm.date} в ${bookingForm.time}. Мы свяжемся с вами по номеру ${bookingForm.phone}.`);
  };

  const menuItems = {
    dishes: [
      { name: 'Боул с киноа и авокадо', price: '450₽', description: 'Киноа, авокадо, шпинат, томаты черри, кедровые орешки', tag: 'Веган' },
      { name: 'Салат с хумусом', price: '380₽', description: 'Хумус, микс салатов, огурцы, редис, семена подсолнечника', tag: 'Веган' },
      { name: 'Овощной карри с кокосовым молоком', price: '520₽', description: 'Тыква, нут, брокколи, кокосовое молоко, рис басмати', tag: 'Веган' },
      { name: 'Паста с песто и вялеными томатами', price: '480₽', description: 'Цельнозерновая паста, песто из базилика, томаты, пармезан', tag: 'Вегетарианское' },
      { name: 'Фалафель с тахини', price: '420₽', description: 'Нутовые фалафели, соус тахини, свежие овощи, питта', tag: 'Веган' },
      { name: 'Грибной крем-суп', price: '340₽', description: 'Лесные грибы, кешью-крем, свежая зелень', tag: 'Веган' },
    ],
    drinks: [
      { name: 'Зеленый смузи', price: '280₽', description: 'Шпинат, банан, манго, кокосовая вода', tag: 'Фреш' },
      { name: 'Ягодный смузи-боул', price: '320₽', description: 'Асаи, клубника, черника, гранола, семена чиа', tag: 'Фреш' },
      { name: 'Матча латте', price: '240₽', description: 'Органический матча, овсяное молоко', tag: 'Эко' },
      { name: 'Альтернативный капучино', price: '220₽', description: 'Эспрессо с миндальным/овсяным/соевым молоком', tag: 'Эко' },
      { name: 'Имбирный лимонад', price: '190₽', description: 'Свежий имбирь, лимон, мята, мед', tag: 'Фреш' },
      { name: 'Детокс-сок', price: '300₽', description: 'Яблоко, сельдерей, огурец, лимон, спирулина', tag: 'Фреш' },
    ],
    desserts: [
      { name: 'Чиа-пудинг с манго', price: '280₽', description: 'Семена чиа, кокосовое молоко, свежее манго', tag: 'Веган' },
      { name: 'Сырой шоколадный торт', price: '350₽', description: 'Кешью, какао, кокосовое масло, финики', tag: 'Веган' },
      { name: 'Банановый хлеб', price: '220₽', description: 'Цельнозерновая мука, бананы, грецкие орехи', tag: 'Веган' },
      { name: 'Кокосовые маффины', price: '180₽', description: 'Кокосовая стружка, миндальная мука, натуральный сахар', tag: 'Веган' },
      { name: 'Энергетические батончики', price: '150₽', description: 'Овсянка, орехи, сухофрукты, семена', tag: 'Веган' },
    ],
  };

  const reviews = [
    {
      name: 'Елена Смирнова',
      text: 'Наконец-то в городе появилось место с по-настоящему здоровой едой! Боулы невероятно вкусные, а атмосфера располагает к долгим беседам.',
      rating: 5,
    },
    {
      name: 'Алексей Морозов',
      text: 'Впечатлен подходом к экологии и качеству продуктов. Матча латте — лучший в городе! Буду теперь постоянным гостем.',
      rating: 5,
    },
    {
      name: 'Ольга Васильева',
      text: 'Удивительное место для веганов и вегетарианцев. Даже мой муж-мясоед был в восторге от фалафелей! Спасибо за заботу о планете.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-card/95 backdrop-blur-sm shadow-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="text-3xl">🌿</div>
              <h1 className="text-2xl font-bold text-primary">Зеленый Лист</h1>
            </div>
            <div className="hidden md:flex gap-6 items-center">
              <button
                onClick={() => scrollToSection('home')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection('menu')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Меню
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                О нас
              </button>
              <button
                onClick={() => scrollToSection('reviews')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Отзывы
              </button>
              <button
                onClick={() => scrollToSection('contacts')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Контакты
              </button>
              <Button
                onClick={() => scrollToSection('booking')}
                className="bg-primary hover:bg-primary/90"
              >
                Бронь
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section
        id="home"
        className="pt-20 min-h-screen flex items-center relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.85)), url('https://cdn.poehali.dev/projects/0d2d001f-1b38-4317-a65e-4b12ec4da5d7/files/9c4566f7-b07a-4d0f-83da-cba2b3d20a7a.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-primary text-primary-foreground text-sm px-4 py-1">
                🌍 Нулевой углеродный след
              </Badge>
              <h2 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
                Натуральный вкус.
                <br />
                <span className="text-primary">Осознанный выбор.</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Первое в городе эко-кафе с полностью органическим меню. Мы заботимся о вас и о планете,
                создавая блюда из локальных продуктов без химии и вреда природе.
              </p>
              <div className="flex gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-lg px-8"
                  onClick={() => scrollToSection('menu')}
                >
                  Посмотреть меню
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8"
                  onClick={() => scrollToSection('booking')}
                >
                  Забронировать столик
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="values" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center space-y-3">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Sprout" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold">100% органика</h3>
              <p className="text-muted-foreground">Только локальные органические продукты</p>
            </div>
            <div className="text-center space-y-3">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Leaf" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Эко-подход</h3>
              <p className="text-muted-foreground">Нулевой след и забота о природе</p>
            </div>
            <div className="text-center space-y-3">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Heart" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Веган-френдли</h3>
              <p className="text-muted-foreground">Полное веганское и вегетарианское меню</p>
            </div>
            <div className="text-center space-y-3">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Award" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Свежесть</h3>
              <p className="text-muted-foreground">Всё готовим в день заказа</p>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Наше меню</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Каждое блюдо создано с любовью из органических продуктов, выращенных без химикатов
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-10 flex-wrap">
            <Button
              variant={activeCategory === 'dishes' ? 'default' : 'outline'}
              onClick={() => setActiveCategory('dishes')}
              className="gap-2"
              size="lg"
            >
              <Icon name="UtensilsCrossed" size={20} />
              Основные блюда
            </Button>
            <Button
              variant={activeCategory === 'drinks' ? 'default' : 'outline'}
              onClick={() => setActiveCategory('drinks')}
              className="gap-2"
              size="lg"
            >
              <Icon name="Cup" size={20} />
              Напитки и смузи
            </Button>
            <Button
              variant={activeCategory === 'desserts' ? 'default' : 'outline'}
              onClick={() => setActiveCategory('desserts')}
              className="gap-2"
              size="lg"
            >
              <Icon name="Cake" size={20} />
              Десерты
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
              <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-1">{item.name}</h3>
                      <Badge variant="secondary" className="mb-2">
                        {item.tag}
                      </Badge>
                    </div>
                    <Badge className="bg-primary text-primary-foreground text-lg font-bold ml-2">
                      {item.price}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <h2 className="text-4xl font-bold text-foreground">О шеф-поваре</h2>
              <p className="text-lg text-muted-foreground">
                <strong>Анна Зеленова</strong> — сертифицированный нутрициолог и шеф-повар с 12-летним опытом
                работы в ресторанах Европы. Прошла обучение в Институте органического питания в Копенгагене.
              </p>
              <p className="text-muted-foreground">
                "Моя миссия — показать, что здоровая еда может быть невероятно вкусной. Я лично выбираю
                каждого поставщика и контролирую качество продуктов. В нашем меню нет места химии,
                консервантам и полуфабрикатам."
              </p>
              <div className="flex gap-3 pt-2">
                <Badge variant="outline" className="text-sm">
                  <Icon name="Award" size={14} className="mr-1" />
                  Raw Chef сертификат
                </Badge>
                <Badge variant="outline" className="text-sm">
                  <Icon name="Award" size={14} className="mr-1" />
                  Эко-нутрициолог
                </Badge>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="https://cdn.poehali.dev/projects/0d2d001f-1b38-4317-a65e-4b12ec4da5d7/files/007585d7-1323-4e37-8b0c-597cf9685a36.jpg"
                alt="Шеф-повар Анна"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Отзывы гостей</h2>
            <p className="text-muted-foreground text-lg">Что говорят наши посетители</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                  <p className="font-semibold text-foreground">— {review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Забронировать столик</h2>
              <p className="text-muted-foreground text-lg">Мы будем рады видеть вас в нашем эко-кафе</p>
            </div>

            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleBookingSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Ваше имя *</Label>
                      <Input
                        id="name"
                        required
                        value={bookingForm.name}
                        onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                        placeholder="Анна"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={bookingForm.phone}
                        onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                        placeholder="+7 (999) 123-45-67"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="date">Дата *</Label>
                      <Input
                        id="date"
                        type="date"
                        required
                        value={bookingForm.date}
                        onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time">Время *</Label>
                      <Input
                        id="time"
                        type="time"
                        required
                        value={bookingForm.time}
                        onChange={(e) => setBookingForm({ ...bookingForm, time: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="guests">Гостей *</Label>
                      <Input
                        id="guests"
                        type="number"
                        min="1"
                        max="12"
                        required
                        value={bookingForm.guests}
                        onChange={(e) => setBookingForm({ ...bookingForm, guests: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="comment">Пожелания (необязательно)</Label>
                    <Textarea
                      id="comment"
                      value={bookingForm.comment}
                      onChange={(e) => setBookingForm({ ...bookingForm, comment: e.target.value })}
                      placeholder="Особые пожелания, аллергии, детское кресло..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                    <Icon name="Check" size={20} className="mr-2" />
                    Забронировать столик
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Контакты</h2>
            <p className="text-muted-foreground text-lg">Приходите к нам на чашечку матча латте</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center">
              <CardContent className="p-8 space-y-4">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Phone" size={28} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Телефон</h3>
                  <a
                    href="tel:+79991234567"
                    className="text-muted-foreground hover:text-primary transition-colors text-lg"
                  >
                    +7 (999) 123-45-67
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8 space-y-4">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="MapPin" size={28} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Адрес</h3>
                  <p className="text-muted-foreground">
                    г. Москва,
                    <br />
                    ул. Центральная, д. 15
                    <br />
                    Пн-Вс: 8:00 - 22:00
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8 space-y-4">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Mail" size={28} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Email</h3>
                  <a
                    href="mailto:hello@greenleaf.eco"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    hello@greenleaf.eco
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-0">
                <div className="w-full h-[400px] bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center p-8">
                    <Icon name="Map" size={48} className="text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground text-lg font-medium">Карта местоположения</p>
                    <p className="text-sm text-muted-foreground mt-2">г. Москва, ул. Центральная, д. 15</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="text-3xl">🌿</div>
                <p className="text-xl font-bold">Зеленый Лист</p>
              </div>
              <p className="text-primary-foreground/80">
                Эко-кафе с заботой о вас и планете
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Навигация</h3>
              <div className="space-y-2">
                <button
                  onClick={() => scrollToSection('menu')}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Меню
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  О нас
                </button>
                <button
                  onClick={() => scrollToSection('booking')}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Бронирование
                </button>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Контакты</h3>
              <div className="space-y-2 text-primary-foreground/80">
                <p>+7 (999) 123-45-67</p>
                <p>hello@greenleaf.eco</p>
                <p>Пн-Вс: 8:00 - 22:00</p>
              </div>
            </div>
          </div>
          <Separator className="bg-primary-foreground/20 mb-8" />
          <div className="text-center text-primary-foreground/80">
            <p>© 2024 Эко-кафе "Зеленый Лист". Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
