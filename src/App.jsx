import React, { useEffect } from "react";
import QuoteForm from "./components/QuoteForm";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "./context/CartContext";
import { Route, Routes } from "react-router-dom"; // <-- make sure this is from react-router-dom
import Home from "./pages/Home";
import OurProducts from "./pages/OurProducts";
import Header from "./components/Header";
import MyCart from "./pages/MyCart";
import ScrollToTop from "./components/ScrollToTop";
import ScrollProvider from "./components/ScrollProvider";
import SmoothScrollWrapper from "./components/SmoothScrollWrapper";
import GraduationPackages from "./pages/GraduationPackages";
import Footer from "./components/Footer";

const App = () => {
  const [isQuoteOpen, setIsQuoteOpen] = React.useState(false);

  return (
    <div className="">
      <Toaster position="buttom-right" toastOptions={{ autoClose: 1 }} />

      <CartProvider>
        <Header />
        {/* <ScrollToTop />  */}
        {/* <ScrollProvider> */}
          {/* <ScrollToTop /> */}
          {/* Scroll instance is automatically passed via props */}
       
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ourproducts" element={<OurProducts />} />
            <Route path="/cart" element={<MyCart />} />
            <Route path="/graduation-packages" element={<GraduationPackages />} />
          </Routes>
        {/* </ScrollProvider> */}
          <QuoteForm
            isOpen={isQuoteOpen}
            onClose={() => setIsQuoteOpen(false)}
          />
      </CartProvider>
    </div>
  );
};

export default App;
