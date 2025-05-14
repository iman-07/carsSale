import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Section.css';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';

const cars = [
  { id: 1, name: 'Kia K5', price: '$23,529', image: '/src/assets/car-marka-images/k5.webp' },
  { id: 2, name: 'Mazda 6', price: '$27,058', image: '/src/assets/car-marka-images/mazda.avif' },
  { id: 3, name: 'Toyota Camry', price: '$28,235', image: '/src/assets/car-marka-images/camry.webp' },
  { id: 4, name: 'Lexus RX', price: '$49,411', image: '/src/assets/car-marka-images/rx.jpg' },

];

export const Section = () => {
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
    <section className="car-section">
      <div className="sect-auto">
        <h2>Популярные автомобили</h2>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Link to="/all-cars">
            <button>Ещё</button>
          </Link>
        </div>
      </div>


      <div className="car-list-section">
        {cars.map((car) => (
          <div className="car-sect" key={car.id}>
            <div className="car-image-container-section">
              <img src={car.image} alt={car.name} />
              <div className="card-actions-section">
                <button
                  className={`like-btn-section ${likedCars.includes(car.id) ? 'active' : ''}`}
                  onClick={() => toggleLike(car.id)}
                >
                  <FaHeart style={{ color: likedCars.includes(car.id) ? 'red' : '#aaa' }} />
                </button>
                <button
                  className={`cart-btn-section ${cartCars.includes(car.id) ? 'active' : ''}`}
                  onClick={() => toggleCart(car.id)}
                >
                  <FaShoppingCart style={{ color: cartCars.includes(car.id) ? 'green' : '#aaa' }} />
                </button>
              </div>
            </div>
            <div className="car-info-section">
              <h3>{car.name}</h3>
              <p>{car.price}</p>
              <div className='flex'>
                <Link to={`/car/${car.id}`}>
                  <button>Подробнее</button>
                </Link>
                <Link to={`/buy/${car.id}`}>
                  <button>Купить</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
