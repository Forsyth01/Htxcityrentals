import React from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../utils/products";
import FAQ from "../components/FAQ";
import Rentals from "../components/Rentals";
import Footer from "../components/Footer";
import CardSection from "../components/CardSection";
import Gallery from "../components/Gallery";
import ContactPage from "../components/Contactus";
import SmoothScrollWrapper from "../components/SmoothScrollWrapper";

const OurProducts = () => {
  return (
    <SmoothScrollWrapper damping={0.03}>
      <div className="mt-20 ">
        <div className="lg:w-[90%] lg:pb-20 pb-10 m-auto">
          <div className="flex ">
            <div className="flex-1 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
              {products.map((p) => (
                <ProductCard key={p.name} product={p} />
              ))}
            </div>
            {/* <Cart /> */}
          </div>
        </div>
        {/* <Rentals/> */}
        {/* <CardSection/> */}
        {/* <Gallery />
        <FAQ />
        <ContactPage /> */}
        <Footer />
      </div>
    </SmoothScrollWrapper>
  );
};

export default OurProducts;
