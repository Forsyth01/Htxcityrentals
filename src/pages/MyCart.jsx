import Cart from "../components/Cart";
import Footer from "../components/Footer";

const MyCart = () => {
  return (
    <div className="">
      {/* <Header /> */}
      <div className="lg:pb-20 pb-10 bg-gray-50 min-h-screen">
      <Cart />
      </div>
      <Footer />
    </div>
  );
};

export default MyCart;
