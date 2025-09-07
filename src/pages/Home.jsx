import React from "react";
import Header from "../components/Header";
import HeroSection from "../Test";
import RentalCollection from "../components/Look";
import FAQ from "../components/FAQ";
import Quote from "../components/Quote";
import Footer from "../components/Footer";
import Rentals from "../components/Rentals";
import Packages from "../components/Packages";
import Gallery from "../components/Gallery";
import PreviewCart from "../utils/PreviewCart";
import CardWithImage from "../components/Card";
import CardSection from "../components/CardSection";
import ContactPage from "../components/Contactus";
import SmoothScrollWrapper from "../components/SmoothScrollWrapper";

const Home = () => {
  return (
    <>
     <SmoothScrollWrapper damping={0.03}>
      <div className="min-h-screen md:py-20 py-10">
        {/* <Header /> */}
        <HeroSection />
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
