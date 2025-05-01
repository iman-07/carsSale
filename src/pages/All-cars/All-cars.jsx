import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './All-cars.css';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';

const allCars = [
  { id: 1, name: 'Kia K5', price: '$23,529', image: '/src/assets/car-marka-images/k5.webp' },
  { id: 2, name: 'Mazda 6', price: '$27,058', image: '/src/assets/car-marka-images/mazda.avif' },
  { id: 3, name: 'Toyota Camry', price: '$28,235', image: '/src/assets/car-marka-images/camry.webp' },
  { id: 4, name: 'Lexus RX', price: '$49,411', image: '/src/assets/car-marka-images/rx.jpg' },
  { id: 5, name: 'BMW M5', price: '$88,235', image: '/src/assets/car-marka-images/m5.webp' },
  { id: 6, name: 'Hyundai Sonata', price: '$24,706', image: '/src/assets/car-marka-images/sonata.jpg' },
  { id: 7, name: 'Genesis G80', price: '$69,412', image: '/src/assets/car-marka-images/genesis g80.webp' },
  { id: 8, name: 'Audi RS6', price: '$96,471', image: '/src/assets/car-marka-images/rs6.webp' },
  { id: 9, name: 'Volkswagen Passat', price: '$32,941', image: '/src/assets/car-marka-images/passat.jpg' },
  { id: 10, name: 'Skoda Superb', price: '$35,294', image: '/src/assets/car-marka-images/skoda.webp' },
  { id: 11, name: 'BMW E63', price: '$105,882', image: '/src/assets/car-marka-images/e63.jpg' },
  { id: 12, name: 'Volvo S90', price: '$52,941', image: '/src/assets/car-marka-images/volvo.jpg' },
  { id: 13, name: 'Tesla Model 3', price: '$64,706', image: '/src/assets/car-marka-images/tesla model 5.jpeg' },
  { id: 14, name: 'Porsche Panamera', price: '$129,411', image: '/src/assets/car-marka-images/porsh.avif' },
  { id: 15, name: 'BMW X5', price: '$76,471', image: '/src/assets/car-marka-images/x5.jpg' },
  { id: 16, name: 'Audi Q7', price: '$91,471', image: '/src/assets/car-marka-images/q7.webp' },
  { id: 17, name: 'Ford Mustang', price: '$35,294', image: '/src/assets/CarDetails/ford.jpg' },
  { id: 18, name: 'Chevrolet Camaro', price: '$41,176', image: '/src/assets/car-marka-images/camaro.jpg' },
  { id: 19, name: 'Mercedes-Benz E-Class', price: '$58,824', image: '/src/assets/car-marka-images/e-class.jpeg' },
  { id: 20, name: 'Audi A8', price: '$70,588', image: '/src/assets/car-marka-images/a8.jpg' },
  { id: 21, name: 'Nissan Altima', price: '$23,529', image: '/src/assets/car-marka-images/altima.jpeg' },
  { id: 22, name: 'Honda Civic', price: '$17,647', image: '/src/assets/car-marka-images/civic.jpg' },
  { id: 23, name: 'BMW X6', price: '$88,235', image: '/src/assets/car-marka-images/x6.jpg' },
  { id: 24, name: 'Land Rover Range Rover', price: '$105,882', image: '/src/assets/car-marka-images/range-rover.jpg' }
];


export const AllCars = () => {
  const navigate = useNavigate();
  const [likedCars, setLikedCars] = useState([]);
  const [cartCars, setCartCars] = useState([]);

  useEffect(() => {
    const storedLikes = JSON.parse(localStorage.getItem('likedCars')) || [];
    const storedCart = JSON.parse(localStorage.getItem('cartCars')) || [];
    setLikedCars(storedLikes);
    setCartCars(storedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem('likedCars', JSON.stringify(likedCars));
  }, [likedCars]);

  useEffect(() => {
    localStorage.setItem('cartCars', JSON.stringify(cartCars));
  }, [cartCars]);

  const toggleLike = (id) => {
    setLikedCars((prev) =>
      prev.includes(id) ? prev.filter((carId) => carId !== id) : [...prev, id]
    );
  };

  const toggleCart = (id) => {
    setCartCars((prev) =>
      prev.includes(id) ? prev.filter((carId) => carId !== id) : [...prev, id]
    );
  };

  return (
    <div className="all-cars-container">
      <h1>Все автомобили</h1>
      <button className="back-btn-all" onClick={() => navigate("/")}>Назад</button>
      <div className="car-list-all">  
        {allCars.map((car) => (
          <div className="car-alls-all" key={car.id}>
            <div className="car-image-container-all">
              <img src={car.image} alt={car.name} />
              <div className="card-actions-all">
                <button
                  className={`like-btn ${likedCars.includes(car.id) ? 'active' : ''}`}
                  onClick={() => toggleLike(car.id)}
                >
                  <FaHeart style={{ color: likedCars.includes(car.id) ? 'red' : '#aaa' }} />
                </button>
                <button
                  className={`cart-btn ${cartCars.includes(car.id) ? 'active' : ''}`}
                  onClick={() => toggleCart(car.id)}
                >
                  <FaShoppingCart style={{ color: cartCars.includes(car.id) ? 'green' : '#aaa' }} />
                </button>
              </div>
            </div>
            <div className="car-all-all">
              <h3>{car.name}</h3>
              <p>{car.price}</p>
              <Link to={`/car/${car.id}`}>
                <button>Подробнее</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
