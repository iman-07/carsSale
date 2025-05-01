import { useParams, useNavigate } from 'react-router-dom';
import './CarDetails.css'; 

export const CarDetails = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const carData = {
    id,
    model: 'Tesla Model S',
    price: '100 000$',
    description: 'Tesla Model S is a full-size all-electric five-door liftback sedan produced by Tesla, Inc.',
    images: [
      '/images/car1.jpg', 
      '/images/car2.jpg', 
      '/images/car3.jpg'
    ]
  };

  return (
    <div className="car-details-container">
      <div className="car-details-images">
        <img className="main-image" src={carData.images[0]} alt={carData.model} />
        <div className="thumbnail-row">
          {carData.images.slice(1).map((image, index) => (
            <img key={index} src={image} alt={`Thumbnail ${index}`} />
          ))}
        </div>
      </div>
      <div className="car-details-info">
        <h2>{carData.model}</h2>
        <div className="price">{carData.price}</div>
        <div className="specs">
          <div><strong>Описание:</strong> {carData.description}</div>
        </div>
        <div className="buttons">
          <button className="back" onClick={() => navigate(-1)}>Назад</button>
          <button className="buy">Купить</button>
        </div>
      </div>
    </div>
  );
};
