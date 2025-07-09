import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [guestbookEntries, setGuestbookEntries] = useState([
    {
      id: 1,
      name: "Катя",
      message: "Обожаю твой сайт! Такой милый! 💕",
      timestamp: "2024-01-15",
    },
    {
      id: 2,
      name: "Маша",
      message: "Классные картинки! Где такие находишь? 🦋",
      timestamp: "2024-01-14",
    },
    {
      id: 3,
      name: "Аня",
      message: "Твой плейлист топ! Добавь еще песен! 🎵",
      timestamp: "2024-01-13",
    },
  ]);

  const [newEntry, setNewEntry] = useState({ name: "", message: "" });
  const [currentSection, setCurrentSection] = useState("home");

  const handleGuestbookSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newEntry.name && newEntry.message) {
      const entry = {
        id: Date.now(),
        name: newEntry.name,
        message: newEntry.message,
        timestamp: new Date().toISOString().split("T")[0],
      };
      setGuestbookEntries([entry, ...guestbookEntries]);
      setNewEntry({ name: "", message: "" });
    }
  };

  const photoGallery = [
    {
      src: "/img/a2d14b74-28f1-439f-82d5-ae13065c8ee0.jpg",
      alt: "Kawaii girl",
    },
    {
      src: "/img/4c70c6f6-2378-4cef-92ea-7126c1f8e3bd.jpg",
      alt: "Pixel kitten",
    },
    {
      src: "/img/1f3bd07c-8b09-4c2b-9ff8-8e85c49e9739.jpg",
      alt: "Holographic butterfly",
    },
  ];

  const playlist = [
    {
      title: "Britney Spears - Overprotected",
      artist: "Britney Spears",
      duration: "3:18",
    },
    { title: "Eiffel 65 - Blue", artist: "Eiffel 65", duration: "4:43" },
    { title: "Aqua - Barbie Girl", artist: "Aqua", duration: "3:16" },
    {
      title: "Vengaboys - Boom, Boom, Boom",
      artist: "Vengaboys",
      duration: "3:06",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200">
      {/* Header */}
      <header className="bg-gradient-to-r from-pink-400 to-purple-500 text-white p-6 shadow-lg">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center animate-pulse">
              <Icon name="Heart" className="text-pink-500" size={20} />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              Мой Личный Сайт ✨
            </h1>
          </div>
          <div className="text-sm">
            <Icon name="Star" className="inline mr-1" size={16} />
            Посетители: 12,847
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-md border-b-4 border-pink-300">
        <div className="max-w-4xl mx-auto flex justify-center space-x-8 py-4">
          {[
            { id: "home", label: "Главная", icon: "Home" },
            { id: "about", label: "Обо мне", icon: "User" },
            { id: "gallery", label: "Фотогалерея", icon: "Image" },
            { id: "music", label: "Музыка", icon: "Music" },
            { id: "guestbook", label: "Гостевая книга", icon: "MessageCircle" },
          ].map((item) => (
            <Button
              key={item.id}
              variant={currentSection === item.id ? "default" : "outline"}
              onClick={() => setCurrentSection(item.id)}
              className={`hover:scale-105 transition-transform ${
                currentSection === item.id
                  ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg"
                  : "hover:bg-pink-50 border-pink-300"
              }`}
            >
              <Icon name={item.icon as any} className="mr-2" size={16} />
              {item.label}
            </Button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-6">
        {/* Home Section */}
        {currentSection === "home" && (
          <div className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm border-pink-200 shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                  Добро пожаловать на мой сайт! 🌟
                </CardTitle>
                <CardDescription className="text-lg text-purple-600">
                  Здесь я делюсь своими мыслями, фотографиями и музыкой ♡
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="flex justify-center space-x-4">
                  <Badge
                    variant="secondary"
                    className="bg-pink-100 text-pink-700 hover:bg-pink-200"
                  >
                    <Icon name="Heart" className="mr-1" size={12} />
                    Милота
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-purple-100 text-purple-700 hover:bg-purple-200"
                  >
                    <Icon name="Star" className="mr-1" size={12} />
                    Ностальгия
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-700 hover:bg-blue-200"
                  >
                    <Icon name="Sparkles" className="mr-1" size={12} />
                    Y2K Vibes
                  </Badge>
                </div>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Привет! Это мой личный уголок в интернете, где я собираю все
                  самое красивое и вдохновляющее. Здесь ты найдешь мои
                  фотографии, любимую музыку и сможешь оставить запись в
                  гостевой книге! 💕
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {photoGallery.map((photo, index) => (
                <Card
                  key={index}
                  className="bg-white/80 backdrop-blur-sm border-pink-200 hover:shadow-xl transition-all hover:scale-105"
                >
                  <CardContent className="p-4">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-32 object-cover rounded-lg shadow-md"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* About Section */}
        {currentSection === "about" && (
          <Card className="bg-white/80 backdrop-blur-sm border-pink-200 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Обо мне 🦋
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                <img
                  src="/img/a2d14b74-28f1-439f-82d5-ae13065c8ee0.jpg"
                  alt="Мое фото"
                  className="w-24 h-24 rounded-full object-cover border-4 border-pink-300 shadow-lg"
                />
                <div>
                  <h3 className="text-xl font-bold text-purple-600">
                    Привет! Я Катя 💕
                  </h3>
                  <p className="text-gray-600">
                    17 лет | Студентка | Любитель милых вещей
                  </p>
                </div>
              </div>
              <Separator className="bg-pink-200" />
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="Heart" className="text-pink-500" size={20} />
                  <span>
                    Люблю: аниме, кавайные вещи, розовый цвет, котиков
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Music" className="text-purple-500" size={20} />
                  <span>Слушаю: поп-музыку 2000х, J-pop, электронику</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Star" className="text-yellow-500" size={20} />
                  <span>
                    Мечтаю: стать дизайнером, путешествовать, завести котенка
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Gallery Section */}
        {currentSection === "gallery" && (
          <div className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm border-pink-200 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                  Фотогалерея 📸
                </CardTitle>
                <CardDescription>
                  Мои любимые картинки и фотографии
                </CardDescription>
              </CardHeader>
            </Card>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {photoGallery.map((photo, index) => (
                <Card
                  key={index}
                  className="bg-white/80 backdrop-blur-sm border-pink-200 hover:shadow-xl transition-all hover:scale-105"
                >
                  <CardContent className="p-4">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-48 object-cover rounded-lg shadow-md mb-3"
                    />
                    <p className="text-sm text-gray-600 text-center">
                      {photo.alt}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Music Section */}
        {currentSection === "music" && (
          <Card className="bg-white/80 backdrop-blur-sm border-pink-200 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Моя музыка 🎵
              </CardTitle>
              <CardDescription>Мой плейлист в стиле 2000х</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {playlist.map((song, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg border border-pink-200 hover:shadow-md transition-all"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                        <Icon name="Music" className="text-white" size={16} />
                      </div>
                      <div>
                        <p className="font-semibold text-purple-700">
                          {song.title}
                        </p>
                        <p className="text-sm text-gray-600">{song.artist}</p>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">{song.duration}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Guestbook Section */}
        {currentSection === "guestbook" && (
          <div className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm border-pink-200 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                  Гостевая книга 💌
                </CardTitle>
                <CardDescription>Оставь свое сообщение!</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleGuestbookSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Твое имя"
                      value={newEntry.name}
                      onChange={(e) =>
                        setNewEntry({ ...newEntry, name: e.target.value })
                      }
                      className="border-pink-300 focus:border-pink-500"
                    />
                  </div>
                  <Textarea
                    placeholder="Твое сообщение..."
                    value={newEntry.message}
                    onChange={(e) =>
                      setNewEntry({ ...newEntry, message: e.target.value })
                    }
                    className="border-pink-300 focus:border-pink-500"
                    rows={3}
                  />
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white"
                  >
                    <Icon name="Send" className="mr-2" size={16} />
                    Отправить
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-4">
              {guestbookEntries.map((entry) => (
                <Card
                  key={entry.id}
                  className="bg-white/80 backdrop-blur-sm border-pink-200 shadow-lg"
                >
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {entry.name[0]}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="font-semibold text-purple-700">
                            {entry.name}
                          </span>
                          <span className="text-sm text-gray-500">
                            {entry.timestamp}
                          </span>
                        </div>
                        <p className="text-gray-700">{entry.message}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-pink-400 to-purple-500 text-white p-6 mt-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <div className="flex items-center space-x-2">
              <Icon name="Heart" size={16} />
              <span className="text-sm">Сделано с любовью</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Star" size={16} />
              <span className="text-sm">2024</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Sparkles" size={16} />
              <span className="text-sm">Y2K Forever</span>
            </div>
          </div>
          <p className="text-sm opacity-80">
            © 2024 Мой Личный Сайт. Все права защищены ♡
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
