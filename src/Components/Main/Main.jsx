import { useState, useEffect } from 'react';
import './Main.css';

export const Main = () => {
  const cars = [
    { id: 1, image: '/src/assets/car-marka-images/m5.webp', name: 'BMW M5', price: '7 500 000 ₽' },
    { id: 2, image: '/src/assets/car-marka-images/rs6.webp', name: 'Audi RS6', price: '8 200 000 ₽' },
    { id: 3, image: '/src/assets/car-marka-images/e63.jpg', name: 'BMW E63', price: '9 000 000 ₽' },
    { id: 4, image: '/src/assets/car-marka-images/camry.webp', name: 'Toyota Camry', price: '2 400 000 ₽' },
    { id: 5, image: '/src/assets/car-marka-images/rx.jpg', name: 'Lexus RX', price: '4 200 000 ₽' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cars.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="main-wrapper">
      <div className="ad-banner-main">
        <div className="ad-content-main">
          <h3>Скидка до 25% на новые автомобили!</h3>
          <p>Не упустите шанс купить автомобиль мечты с уникальной скидкой до конца месяца!</p>
        </div>

        <div className="slider-main">
          <img src={cars[currentIndex].image} alt={cars[currentIndex].name} />
          <div className="car-rec-main">
            <h4>{cars[currentIndex].name}</h4>
            <p>{cars[currentIndex].price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
