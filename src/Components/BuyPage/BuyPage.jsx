import { useParams, useNavigate } from 'react-router-dom';
import { carsData } from '../../pages/data/CarsData';
import './BuyPage.css';

export const BuyPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const car = carsData.find(car => car.id === Number(id));

  if (!car) {
    return <div className="buy-page"><h2>Машина не найдена</h2></div>;
  }

  const handleSubmit = (e) => { 
    e.preventDefault();
    alert('Спасибо за покупку! Мы свяжемся с вами.');
    navigate('/');
  };

  const handleCancel = () => {
    navigate('/'); 
  };

  return (
    <div className="buy-page">
      <h1>Покупка машины: {car.name}</h1>
      <div className="buy-content">
        <div className="buy-car-info">
          <img src={car.image || car.images?.[0]} alt={car.name} />
          <p><strong>Цена:</strong> {car.price}</p>
          <p>{car.description || 'Описание отсутствует.'}</p>
        </div>
        <form className="buy-form" onSubmit={handleSubmit}>
          <h2>Введите данные</h2>
          <label>
            Имя:
            <input type="text" required />
          </label>
          <label>
            Телефон:
            <input type="tel" required />
          </label>
          <label>
            Email:
            <input type="email" required />
          </label>
          <div className='flex1'>
          <button className='btn1' type="button" onClick={handleCancel}>Отмена</button>
          <button type="submit">Подтвердить покупку</button>
          </div>
        </form>
      </div>
    </div>
  );
};
