import { useParams, useNavigate } from 'react-router-dom';
import './CarDetails.css';
import { useState } from 'react';
import { carsData } from '../data/CarsData';

export const CarDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const car = carsData.find(car => car.id === Number(id));

  if (!car) {
    return <div>Машина не найдена</div>;
  }

  const [mainImage, setMainImage] = useState(car.images?.[0] || car.image); 

  return (
    <div className="car-details-container"> 
    <div className='cars-det'>
      <div className="car-details-images">
        <img className="main-image" src={mainImage} alt="Главное фото" />
        {car.images?.length > 1 && (
          <div className="thumbnail-row">
            {car.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Фото ${index + 1}`}
                onClick={() => setMainImage(image)}
                className={image === mainImage ? 'selected' : ''}
              />
            ))}
          </div>
        )}
      </div>
      <div className="car-details-info">
        <h2>{car.name}</h2>
        <div className="price">{car.price}</div>
        <div className="specs">
          <div><strong>Описание:</strong> {car.description || 'Описание отсутствует.'}</div>
        </div>
        <div className="buttons">
          <button className="back" onClick={() => navigate("/")}>Назад</button>
          <button className="buy" onClick={() => navigate(`/buy/${car.id}`)}>Купить</button>
        </div>
      </div>
    </div>
    </div>
  );
};
