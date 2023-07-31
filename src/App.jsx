import 'modern-normalize/modern-normalize.css';
import '@fontsource/inter';
import './App.scss';

import Layout from './layouts/Layout';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Reservation from './pages/Reservation';

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservation" element={<Reservation />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
