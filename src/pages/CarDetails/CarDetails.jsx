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

  const [mainImage, setMainImage] = useState(car.image?.[0] || car.image);

  return (
    <div className="car-details-container">
      <div className='cars-det'>
        <div className="car-details-images">
          <img className="main-image" src={mainImage} alt="Главное фото" />

          {car.image?.length > 1 && (
            <div className="thumbnail-row">
              {car.image.map((image, index) => (
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
          <h2 className="car-title">{car.name}</h2>
          <div className="price">{car.price}</div>

          <div className="specs">
            {typeof car.description === 'object' ? (
              <ul>
                {Object.entries(car.description).map(([key, value], index) => (
                  <li key={index}><strong>{key}:</strong> {value}</li>
                ))}
              </ul>
            ) : (
              <div>{car.description || 'Описание отсутствует.'}</div>
            )}
          </div>

          <div className="buttons">
            <button className="back" onClick={() => navigate("/all-cars")}>Назад</button>
            <button className="buy" onClick={() => navigate(`/buy/${car.id}`)}>Купить</button>
          </div>
        </div>
      </div>
    </div>
  );
};
