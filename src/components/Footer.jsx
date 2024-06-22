import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="text-white bg-transparent bg-opacity-20 backdrop-filter backdrop-blur-md">
      <hr className="my-8 border-gray-800" />
      <div className="container mx-auto py-8 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-4xl font-bold mb-4 text-green-500">
              Automagify
            </h2>
            <p className="text-gray-400">
              Следующее поколение <br /> Искусственного Интеллекта
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-green-400">
              Полезные ссылки
            </h3>
            <ul className="text-gray-400 flex flex-col">
              <Link
                to="home"
                className="hover:text-green-500 cursor-pointer mb-2"
                smooth={true}
                duration={500}
                offset={-70}
              >
                Главная
              </Link>
              <Link
                to="features"
                className="hover:text-green-500 cursor-pointer mb-2"
                smooth={true}
                duration={500}
                offset={-70}
              >
                Функции
              </Link>
              <Link
                to="testimonials"
                className="hover:text-green-500 cursor-pointer mb-2"
                smooth={true}
                duration={500}
                offset={-70}
              >
                Отзывы
              </Link>
              <Link
                to="pricing"
                className="hover:text-green-500 cursor-pointer mb-2"
                smooth={true}
                duration={500}
                offset={-70}
              >
                Цены
              </Link>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-green-500">
              Свяжитесь с нами
            </h3>
            <p className="text-gray-400 mb-4">
              Адрес: 1234 Улица Гагарина, Москва, Россия
            </p>
            <p className="text-gray-400 mb-4">
              Электронная почта: kamillamirbekkyzy@icloud.com
            </p>
            <p className="text-gray-400 mb-4">Телефон: +12345678 </p>
          </div>
        </div>
        <hr className="my-8 border-gray-800" />
        <p className="text-center text-gray-400">@ Мирбек Кызы Камилла</p>
      </div>
    </footer>
  );
};

export default Footer;
