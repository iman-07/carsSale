import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from '../src/pages/Layouts/MainLayout';
import { NoMainLayout } from '../src/pages/Layouts/NoMainLayout';

import { Section } from './Components/Section/Section';
import { AllCars } from './pages/All-cars/All-cars';
import { CarDetails } from './pages/CarDetails/CarDetails';
import { Favorites } from './pages/Favorite/Favorite';
import { Cart } from './pages/Cart/Cart';
import { BuyPage } from './Components/BuyPage/BuyPage';
import { Contact } from './pages/Contact/Contact';
import { About } from './pages/About/About';

import { News } from './Components/News/News';
import { NewsDetail } from './pages/NewDetail/NewDetail';




const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route
            path="/"
            element={
              <>
                <Section />
                <News />
              </>
            }/>
          <Route path="/all-cars" element={<AllCars />} />
        </Route>

        <Route element={<NoMainLayout />}>
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/car/:id" element={<CarDetails />} />
          <Route path="/buy/:id" element={<BuyPage />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/news/:id" element={<NewsDetail />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
