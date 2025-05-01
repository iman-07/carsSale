import { Link } from 'react-router-dom';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="footer-logo">AUTO<span>MARKET</span></h2>
          <p className="footer-description">
            Найди свою идеальную машину уже сегодня.
          </p>
        </div>
        <div className="footer-section">
          <h4>Вкладки</h4>
          <ul>
            <li>
              <Link to="/">Главная</Link>
            </li>
            <li>
              <Link to="/all-cars">Автомобили</Link>
            </li>
            <li>
              <Link to="/contacts">Контакты</Link>
            </li>
            <li>
              <Link to="/about">О нас</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Контакты</h4>
          <p>Email: info@automarket.kg</p>
          <a href="https://wa.me/+996 559 044">WhatsApp</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} AutoMarket. Все права защищены.</p>
      </div>
    </footer>
  );
};
