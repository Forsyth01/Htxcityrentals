import React from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../utils/products";
import Footer from "../components/Footer";


const OurProducts = () => {
  return (
    <>
      <div className="mt-24 ">
        <div className="lg:w-[90%] lg:pb-20 pb-10 m-auto">
          <div className="flex ">
            <div className="flex-1 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
              {products.map((p) => (
                <ProductCard key={p.name} product={p} />
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default OurProducts;
