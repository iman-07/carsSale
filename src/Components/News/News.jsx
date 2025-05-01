import { Link } from 'react-router-dom';
import './News.css';

const newsData = [
  {
    id: 1,
    date: '18 апреля 2025',
    title: 'Поступили новые модели BMW X7 и Audi Q8.',
  },
  {
    id: 2,
    date: '15 апреля 2025',
    title: 'Скидки до 10% на электромобили Tesla!',
  },
  {
    id: 3,
    date: '10 апреля 2025',
    title: 'Новое партнёрство с Mercedes-Benz.',
  },
  {
    id: 4,
    date: '8 апреля 2025',
    title: 'Обновлённый салон: новый шоурум в центре города.',
  },
  {
    id: 5,
    date: '5 апреля 2025',
    title: 'Поступление автомобилей Hyundai и KIA 2025 года.',
  },
  {
    id: 6,
    date: '2 апреля 2025',
    title: 'Автомобили с пробегом: новые поступления и гарантия.',
  },
  {
    id: 7,
    date: '30 марта 2025',
    title: 'Беспроцентная рассрочка на авто до 12 месяцев.',
  },
  {
    id: 8,
    date: '28 марта 2025',
    title: 'Проведи тест-драйв — получи купон на обслуживание.',
  },
  {
    id: 9,
    date: '20 апреля 2025',
    title: 'Новая акция на автомобили для бизнеса!'
  },
];

export const News = () => {
  return (
    <div className="news-container">
      <h2 className="news-title">Новости и акции</h2>
      <div className="news-grid">
        {newsData.map((news) => (
          <Link to={`/news/${news.id}`} key={news.id} className="news-card">
            <div>
              <div className="news-date">{news.date}</div>
              <h3>{news.title}</h3>
              <span className="news-link">Читать далее →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
