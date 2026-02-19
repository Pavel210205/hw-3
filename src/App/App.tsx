import { Routes, Route } from 'react-router-dom';

import TopBar from 'components/TopBar';
import Container from 'components/Container';
import MainPage from './pages/MainPage';
import PageEmpty from './pages/PageEmpty';
import ProductPage from './pages/ProductPage';
import { products } from 'config/index';
import { log } from 'utils/log';

function App() {
  log(products);
  return (
    <div className="wrapper">
      <Container>
        <TopBar />
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="*" element={<PageEmpty />}></Route>
          <Route path="/product/:id" element={<ProductPage />}></Route>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
