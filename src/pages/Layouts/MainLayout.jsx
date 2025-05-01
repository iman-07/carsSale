import { Header } from '../../Components/Header/Header';
import { Footer } from '../../Components/Footer/Footer';
import { Main } from '../../Components/Main/Main';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <div className="app">
      <Header />
      <Main />
      <Outlet />
      <Footer />
    </div>
  );
};