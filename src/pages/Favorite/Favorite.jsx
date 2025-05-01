import { useEffect, useState } from 'react';
import './Favorite.css';
import { useNavigate } from 'react-router-dom';

const allCars = [
  { id: 1, name: 'BMW M5', price: '7 500 000 ₽', image: '/src/assets/car-marka-images/m5.webp' },
  { id: 2, name: 'Audi RS6', price: '8 200 000 ₽', image: '/src/assets/car-marka-images/rs6.webp' },
  { id: 3, name: 'BMW E63', price: '9 000 000 ₽', image: '/src/assets/car-marka-images/e63.jpg' },
  { id: 4, name: 'Toyota Camry', price: '2 400 000 ₽', image: '/src/assets/car-marka-images/camry.webp' },
  { id: 5, name: 'Lexus RX', price: '4 200 000 ₽', image: '/src/assets/car-marka-images/rx.jpg' },
  { id: 6, name: 'Kia K5', price: '2 000 000 ₽', image: '/src/assets/car-marka-images/k5.webp' },
  { id: 7, name: 'Hyundai Sonata', price: '2 100 000 ₽', image: '/src/assets/car-marka-images/sonata.jpg' },
  { id: 8, name: 'Mazda 6', price: '2 300 000 ₽', image: '/src/assets/car-marka-images/mazda.avif' },
  { id: 9, name: 'Genesis G80', price: '5 900 000 ₽', image: '/src/assets/car-marka-images/genesis g80.webp' },
  { id: 10, name: 'Volkswagen Passat', price: '2 800 000 ₽', image: '/src/assets/car-marka-images/passat.jpg' },
  { id: 11, name: 'Skoda Superb', price: '3 000 000 ₽', image: '/src/assets/car-marka-images/skoda.webp' },
  { id: 12, name: 'Volvo S90', price: '4 500 000 ₽', image: '/src/assets/car-marka-images/volvo.jpg' },
  { id: 13, name: 'Tesla Model 3', price: '5 500 000 ₽', image: '/src/assets/car-marka-images/tesla.webp' },
  { id: 14, name: 'Porsche Panamera', price: '11 000 000 ₽', image: '/src/assets/car-marka-images/porsh.avif' },
  { id: 15, name: 'BMW X5', price: '6 500 000 ₽', image: '/src/assets/car-marka-images/x5.jpg' },
  { id: 16, name: 'Audi Q7', price: '7 800 000 ₽', image: '/src/assets/car-marka-images/q7.webp' },
  { id: 17, name: 'Ford Mustang', price: '$35,294', image: '/src/assets/CarDetails/ford.jpg' },
  { id: 18, name: 'Chevrolet Camaro', price: '$41,176', image: '/src/assets/car-marka-images/camaro.jpg' },
  { id: 19, name: 'Mercedes-Benz E-Class', price: '$58,824', image: '/src/assets/car-marka-images/e-class.jpeg' },
  { id: 20, name: 'Audi A8', price: '$70,588', image: '/src/assets/car-marka-images/a8.jpg' },
  { id: 21, name: 'Nissan Altima', price: '$23,529', image: '/src/assets/car-marka-images/altima.jpeg' },
  { id: 22, name: 'Honda Civic', price: '$17,647', image: '/src/assets/car-marka-images/civic.jpg' },
  { id: 23, name: 'BMW X6', price: '$88,235', image: '/src/assets/car-marka-images/x6.jpg' },
  { id: 24, name: 'Land Rover Range Rover', price: '$105,882', image: '/src/assets/car-marka-images/range-rover.jpg' }
];

export const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const likedIds = JSON.parse(localStorage.getItem('likedCars')) || [];
    const likedCars = allCars.filter((car) => likedIds.includes(car.id));
    setFavorites(likedCars);
  }, []);

  const removeFromFavorites = (id) => {
    const updatedFavorites = favorites.filter((car) => car.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem('likedCars', JSON.stringify(updatedFavorites.map(car => car.id)));
  };

  return ( 
    <div style={{ padding: '40px' }}>
      <h2>Избранное</h2>
      {favorites.length === 0 ? (
        <p>Вы пока не добавили ничего в избранное.</p>
      ) : (
        <div className="car-list-fav">
          {favorites.map((car) => (
            <div className="car-card-fav" key={car.id}>
              <button className="remove-btn-fav" onClick={() => removeFromFavorites(car.id)}>✖</button>
              <img src={car.image} alt={car.name} />
              <div className="car-info-fav">
                <h3>{car.name}</h3>
                <p>{car.price}</p>
              </div>
              <div>
                <button className='remove-btn' onClick={() => navigate(`/buy/${car.id}`)}>Купить</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
