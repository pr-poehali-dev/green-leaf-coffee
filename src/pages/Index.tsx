import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState('coffee');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const menuItems = {
    coffee: [
      { name: 'Эспрессо', price: '120₽', description: 'Классический крепкий кофе' },
      { name: 'Капучино', price: '180₽', description: 'С нежной молочной пенкой' },
      { name: 'Латте', price: '190₽', description: 'Мягкий кофе с молоком' },
      { name: 'Американо', price: '140₽', description: 'Эспрессо с горячей водой' },
      { name: 'Флэт Уайт', price: '200₽', description: 'Двойной эспрессо с микропенкой' },
      { name: 'Раф кофе', price: '210₽', description: 'Сливочный кофе со сливками' },
    ],
    desserts: [
      { name: 'Тирамису', price: '280₽', description: 'Классический итальянский десерт' },
      { name: 'Чизкейк Нью-Йорк', price: '290₽', description: 'Сливочный сырный пирог' },
      { name: 'Шоколадный брауни', price: '220₽', description: 'С грецким орехом' },
      { name: 'Круассан', price: '150₽', description: 'Свежая французская выпечка' },
      { name: 'Макарон', price: '100₽', description: 'Миндальное пирожное' },
      { name: 'Эклер', price: '180₽', description: 'С заварным кремом' },
    ],
  };

  const reviews = [
    {
      name: 'Анна Петрова',
      text: 'Лучшая кофейня в городе! Невероятно уютная атмосфера, вкусный кофе и приветливый персонал.',
      rating: 5,
    },
    {
      name: 'Дмитрий Соколов',
      text: 'Отличное место для работы и встреч. Хороший Wi-Fi, удобные столики, вкусные десерты.',
      rating: 5,
    },
    {
      name: 'Мария Иванова',
      text: 'Обожаю этот Зеленый лист! Капучино просто волшебный, а интерьер создает ощущение домашнего уюта.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-card/95 backdrop-blur-sm shadow-md z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="text-3xl">🍃</div>
              <h1 className="text-2xl font-bold text-primary">Зеленый лист</h1>
            </div>
            <div className="hidden md:flex gap-6">
              <button
                onClick={() => scrollToSection('home')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection('menu')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Меню
              </button>
              <button
                onClick={() => scrollToSection('interior')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Интерьер
              </button>
              <button
                onClick={() => scrollToSection('reviews')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Отзывы
              </button>
              <button
                onClick={() => scrollToSection('contacts')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Контакты
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section
        id="home"
        className="pt-20 min-h-screen flex items-center bg-gradient-to-b from-accent/10 to-background"
      >
        <div className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-secondary text-secondary-foreground">Открыто с 8:00 до 22:00</Badge>
              <h2 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Добро пожаловать в <span className="text-primary">Зеленый лист</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Уютная кофейня в сердце города. Здесь каждая чашка кофе приготовлена с любовью, а каждый
                гость становится частью нашей семьи.
              </p>
              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90"
                  onClick={() => scrollToSection('menu')}
                >
                  Посмотреть меню
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection('contacts')}
                >
                  Как нас найти
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/0d2d001f-1b38-4317-a65e-4b12ec4da5d7/files/9bc0d1ea-0792-4746-ab5a-62ef5a48b950.jpg"
                alt="Кофе и десерты"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Наше меню</h2>
            <p className="text-muted-foreground text-lg">
              Выберите свой любимый напиток или попробуйте наши фирменные десерты
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-8">
            <Button
              variant={activeCategory === 'coffee' ? 'default' : 'outline'}
              onClick={() => setActiveCategory('coffee')}
              className="gap-2"
            >
              <Icon name="Coffee" size={20} />
              Напитки
            </Button>
            <Button
              variant={activeCategory === 'desserts' ? 'default' : 'outline'}
              onClick={() => setActiveCategory('desserts')}
              className="gap-2"
            >
              <Icon name="Cake" size={20} />
              Десерты
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-foreground">{item.name}</h3>
                    <Badge variant="secondary" className="text-lg">
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

      <section id="interior" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Наш интерьер</h2>
            <p className="text-muted-foreground text-lg">
              Уютная атмосфера, мягкий свет и комфортная мебель
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img
              src="https://cdn.poehali.dev/projects/0d2d001f-1b38-4317-a65e-4b12ec4da5d7/files/a449ed70-d9b2-4063-bdf7-6f26059890df.jpg"
              alt="Интерьер кофейни"
              className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
            />
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="bg-accent/20 p-3 rounded-lg">
                  <Icon name="Armchair" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Удобная мебель</h3>
                  <p className="text-muted-foreground">
                    Мягкие кресла и диваны для максимального комфорта наших гостей
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-accent/20 p-3 rounded-lg">
                  <Icon name="Lightbulb" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Теплое освещение</h3>
                  <p className="text-muted-foreground">
                    Мягкий свет создает уютную атмосферу для работы и отдыха
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-accent/20 p-3 rounded-lg">
                  <Icon name="Leaf" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Живые растения</h3>
                  <p className="text-muted-foreground">
                    Зелень наполняет пространство свежестью и создает гармонию
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Отзывы гостей</h2>
            <p className="text-muted-foreground text-lg">Что говорят о нас наши посетители</p>
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

      <section id="contacts" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Контакты</h2>
            <p className="text-muted-foreground text-lg">Мы всегда рады видеть вас</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8 space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Телефон</h3>
                    <a href="tel:+79991234567" className="text-muted-foreground hover:text-primary transition-colors">
                      +7 (999) 123-45-67
                    </a>
                  </div>
                </div>
                <Separator />
                <div className="flex gap-4 items-start">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Адрес</h3>
                    <p className="text-muted-foreground">
                      г. Москва, ул. Центральная, д. 15
                      <br />
                      Пн-Вс: 8:00 - 22:00
                    </p>
                  </div>
                </div>
                <Separator />
                <div className="flex gap-4 items-start">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <a
                      href="mailto:info@greenleaf.ru"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      info@greenleaf.ru
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-0 h-full">
                <div className="w-full h-full min-h-[400px] bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center p-8">
                    <Icon name="Map" size={48} className="text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Карта местоположения</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      г. Москва, ул. Центральная, д. 15
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="text-2xl">🍃</div>
              <p className="font-semibold">Кофейня "Зеленый лист"</p>
            </div>
            <p className="text-primary-foreground/80">© 2024 Все права защищены</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
