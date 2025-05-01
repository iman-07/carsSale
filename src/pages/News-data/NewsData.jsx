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
];

export const News = () => {
  return (
    <section className="news">
      <h2>Последние новости</h2>
      <div className="news-list">
        {newsData.map(news => (
          <Link key={news.id} to={`/news/${news.id}`} className="news-card">
            <strong>{news.date}</strong>
            <p>{news.title}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};
