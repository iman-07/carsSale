import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Contact.css';

export const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); 
        setIsSubmitted(true); 

        alert('Мы свяжемся с вами!');
    };

    const handleChanel = () => {
        navigate('/')
    }

    return (
        <div className="contact-page">
            <h1>Свяжитесь с нами</h1>
            <div className="contact-content">
                <div className="contact-info">
                    <h2>Контактная информация</h2>
                    <p><strong>Адрес:</strong> ул. Турусбекова, 134, Бишкек</p>
                    <p className='tel'><strong>Телефон: </strong>   <a href="https://wa.me/+996 503 203 020">+996 503 203 020</a></p>
                    <p><strong>Email:</strong> info@automarket.ru</p>
                    <p><strong>Время работы:</strong> Пн–Сб, 9:00–19:00</p>
                    <p><a href="https://wa.me/+996 559 044">WhatsApp</a></p>
                </div>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <h2>Отправьте сообщение</h2>
                    <label>
                        Имя:
                        <input type="text" required />
                    </label>
                    <label>
                        Email:
                        <input type="email" required />
                    </label>
                    <label>
                        Сообщение:
                        <textarea rows="5" required></textarea>
                    </label>
                    <div className='flex1'>
                        <button type='submit' onClick={handleChanel}>Отмена</button>
                        <button type="submit">Отправить</button>
                    </div>
                </form>
                {isSubmitted && <p className="thank-you-message">Спасибо! Мы свяжемся с вами.</p>}
            </div>
        </div>
    );
};
