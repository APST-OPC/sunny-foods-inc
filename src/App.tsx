import { Route, Routes } from "react-router-dom";

import About from "~/pages/about";
import Contact from "~/pages/contact";
import Home from "~/pages/home";

import Layout from "~/layout";

import BusinessCard from "./pages/business-card";
import Legal from "./pages/legal";
import NotFound from "./pages/not-found";
import Productsv2 from "./pages/products/ProductsV2";
import QR from "./pages/qr";
import Services from "./pages/services";
import { LayoutProvider } from "./provider/LayoutProvider";

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
        <Route path="/products" element={<Productsv2 />} />
        <Route path="/products-v2" element={<Productsv2 />} />
        <Route path="/who-we-are" element={<About />} />
        <Route path="/talk-to-us" element={<Contact />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/services" element={<Services />} />
      </Route>

      <Route path="qr/:id" element={<QR />} />
      <Route path="business-card/:id" element={<BusinessCard />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
