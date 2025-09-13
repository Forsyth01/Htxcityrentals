import React from "react";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import PreviewCart from "../components/PreviewCart";
import CardSection from "../components/CardSection";
import ContactPage from "../components/Contactus";
import SmoothScrollWrapper from "../components/SmoothScrollWrapper";
import Hero2 from "../components/Hero";

const Home = () => {
  return (
    <>
     <SmoothScrollWrapper damping={0.03}>
      <div className="min-h-screen sm:pb-20 pb-10">
        {/* <Header /> */}
        <Hero2/>
        {/* <Hero /> */}
        {/* <RentalCollection /> */}
        <PreviewCart/>
        {/* <CardWithImage/> */}
        <CardSection/>
        <Gallery />
        {/* <Rentals /> */}
        {/* <Packages /> */}
        <FAQ />
        <ContactPage/>
        {/* <Quote /> */}
      </div>
        <Footer />
      </SmoothScrollWrapper>
    </>
  );
};

export default Home;
