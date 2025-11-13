import { Route, Routes } from 'react-router-dom';

import Home from '~/pages/home';
import Layout from '~/layout';
import Products from '~/pages/products';
import About from '~/pages/about';
import Contact from '~/pages/contact';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default App;
