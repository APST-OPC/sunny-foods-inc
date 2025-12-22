import { Route, Routes } from 'react-router-dom';

import Layout from '~/layout';
import Home from '~/pages/home';
import Products from '~/pages/products';
import About from '~/pages/about';
import Contact from '~/pages/contact';

import { LayoutProvider } from './provider/LayoutProvider';

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <LayoutProvider>
            <Layout />
          </LayoutProvider>
        }
      >
        <Route index element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/who-we-are" element={<About />} />
        <Route path="/talk-to-us" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default App;
