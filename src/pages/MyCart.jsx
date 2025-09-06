import React from "react";
import Header from "../components/Header";
import Cart from "../components/Cart";
import Rentals from "../components/Rentals";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import CardSection from "../components/CardSection";
import Gallery from "../components/Gallery";
import ContactPage from "../components/Contactus";

const MyCart = () => {
  return (
    <div>
      {/* <Header /> */}
      <div className="lg:pb-20 pb-10 bg-gray-50">
      <Cart />
      </div>
      {/* <Rentals /> */}
      {/* <CardSection/> */}
      {/* <Gallery/> */}
      {/* <FAQ /> */}
      {/* <ContactPage/> */}
      <Footer />
    </div>
  );
};

export default MyCart;
