import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';
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
 

export const Cart = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const cartIds = JSON.parse(localStorage.getItem('cartCars')) || [];
    const cartCars = allCars.filter((car) => cartIds.includes(car.id));
    setCart(cartCars);
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((car) => car.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cartCars', JSON.stringify(updatedCart.map(car => car.id)));
  };

  return (
    <div style={{ padding: '40px' }}>
      <h2>Корзина</h2>
      {cart.length === 0 ? (
        <p>Ваша корзина пуста.</p>
      ) : (
        <div className="car-list-cart">
          {cart.map((car) => (
            <div className="car-card-cart" key={car.id}>
              <button className="remove-btn-cart" onClick={() => removeFromCart(car.id)}>✖</button>
              <img src={car.image} alt={car.name} />
              <div className="car-info-cart">
                <h3>{car.name}</h3>
                <p>{car.price}</p> 
                <div className="cart-buttons">
                  <button className="details-btn" onClick={() => navigate(`/car/${car.id}`)}>Подробнее</button>
                  <button className="buy-btn" onClick={() => navigate(`/buy/${car.id}`)}>Купить</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
