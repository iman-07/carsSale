import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../Header/Header.css';
import logo from '../../assets/car-logo.avif';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [likedCount, setLikedCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  
  const menuRef = useRef(null); 
  const burgerRef = useRef(null); 

  const updateCounts = () => {
    const likedCars = JSON.parse(localStorage.getItem('likedCars')) || [];
    const cartCars = JSON.parse(localStorage.getItem('cartCars')) || [];
    setLikedCount(likedCars.length);
    setCartCount(cartCars.length);
  };

  useEffect(() => {
    updateCounts();

    window.addEventListener('storage', updateCounts);

    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target) && !burgerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside); 
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header">
      <div className="head-logo">
        <Link to="/">
          <img src={logo} alt="Logo" className="head-logo-img" />
        </Link>
      </div>
      <div className="head-title">
        <h1>AUTO</h1>
      </div>
      <div className="header-right">
        <Link to="/favorites" className="menu-item">
          <FaHeart />
          {likedCount > 0 && <span className="badge">{likedCount}</span>} 
        </Link>
        <Link to="/cart" className="menu-item">
          <FaShoppingCart />
          {cartCount > 0 && <span className="badge">{cartCount}</span>}
        </Link>
      </div>
      <div className="burger-menu" onClick={toggleMenu} ref={burgerRef}>
        <div className={`burger-line ${isOpen ? 'open' : ''}`}></div>
        <div className={`burger-line ${isOpen ? 'open' : ''}`}></div>
        <div className={`burger-line ${isOpen ? 'open' : ''}`}></div>
      </div>
      <div ref={menuRef} className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>Главная</Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsOpen(false)}>О нас</Link>
          </li>
          <li>
            <Link to="/contacts" onClick={() => setIsOpen(false)}>Контакты</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
