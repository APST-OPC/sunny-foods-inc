import { Route, Routes } from "react-router-dom";

import About from "~/pages/about";
import Contact from "~/pages/contact";
import Home from "~/pages/home";
import Products from "~/pages/products";

import Layout from "~/layout";

import BusinessCard from "./pages/business-card";
import Legal from "./pages/legal";
import NotFound from "./pages/not-found";
import QR from "./pages/qr";
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
        }>
        <Route index element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/who-we-are" element={<About />} />
        <Route path="/talk-to-us" element={<Contact />} />
        <Route path="/legal" element={<Legal />} />
      </Route>

      <Route path="qr/:id" element={<QR />} />
      <Route path="business-card/:id" element={<BusinessCard />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
