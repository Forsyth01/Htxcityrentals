import React, { useState } from "react";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";
import Footer from "../components/Footer";
import SmoothScrollWrapper from "../components/SmoothScrollWrapper";

const packages = [
  {
    id: 1,
    title: "Graduation Package 48 People",
    description:
      "The 48-person package is ideal for a graduation event. Includes setup on grass with tent stakes.",
    items: [
      "1x 20x30 white high-peak frame tent",
      "6x 60” round tables",
      "2x 6ft long tables",
      "Tent lighting",
      "48x white folding chairs",
      "Tent installation and breakdown included (delivery not included)",
    ],
    price: 523.2,
    image: "/images/img1 (6).jpg",
  },
  {
    id: 2,
    title: "Graduation Package 32 People",
    description: "Tailored for small parties. Setup on grass with tent stakes.",
    items: [
      "20x20 high-peak frame tent (no center pole)",
      "4x 60” round tables",
      "32x white folding chairs",
      "1x 6ft long table",
      "Tent installation and breakdown included (delivery fee not included)",
      "Tent Light",
      "Extension Cord - 50ft",
    ],
    price: 376.0,
    image: "/images/img1 (4).jpg",
  },
  {
    id: 3,
    title: "Graduation Package 64 People",
    description: "Ideal for larger parties. Setup on grass with tent stakes.",
    items: [
      "1x 20x40 white high-peak frame tent",
      "8x 60” round tables",
      "3x 6ft long tables",
      "64x white folding chairs",
      "Tent lighting",
      "Tent installation and breakdown included (delivery not included)",
    ],
    price: 694.4,
    image: "/images/img1 (3).jpg",
  },
];

export default function GraduationPackages() {
  const { addToCart, cartItems, updateDays, updateQuantity } = useCart();
  const [rentalData, setRentalData] = useState({}); // { [pkgId]: { days: 1, quantity: 1 } }

  // Add package to cart
  const handleBookNow = (pkg) => {
    const days = rentalData[pkg.id]?.days || 1;
    const quantity = rentalData[pkg.id]?.quantity || 1;
    addToCart(
      {
        id: `package-${pkg.id}`,
        name: pkg.title,
        price: pkg.price,
        image: pkg.image,
      },
      quantity,
      days
    );
  };

  // Handle days change
  const handleDaysChange = (pkg, days) => {
    setRentalData((prev) => ({
      ...prev,
      [pkg.id]: { ...(prev[pkg.id] || {}), days },
    }));

    const cartItem = cartItems.find((i) => i.id === `package-${pkg.id}`);
    if (cartItem) updateDays(cartItem.cartItemId, days);
  };

  // Handle quantity change
  const handleQuantityChange = (pkg, quantity) => {
    setRentalData((prev) => ({
      ...prev,
      [pkg.id]: { ...(prev[pkg.id] || {}), quantity },
    }));

    const cartItem = cartItems.find((i) => i.id === `package-${pkg.id}`);
    if (cartItem) updateQuantity(cartItem.cartItemId, quantity);
  };

  return (
<>
      <section className="bg-gray-50 py-16 px-4 md:px-16 my-20 tracking-tighter">
        <div className="w-full max-w-5xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center mb-8 text-gray-900">
            Graduation Party Packages 🎓
          </h2>

          <div className="space-y-12 flex flex-col items-center">
            {packages.map((pkg, index) => {
              const days = rentalData[pkg.id]?.days || 1;
              const quantity = rentalData[pkg.id]?.quantity || 1;

              return (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-md overflow-hidden hover:scale-102 transition-transform duration-300 w-full max-w-3xl"
                >
                  {/* Image */}
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="w-full md:w-1/3 flex-shrink-0 h-40 sm:h-48 md:h-52 lg:h-56 overflow-hidden"
                  >
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Content */}
                  <div className="w-full md:w-2/3 p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <div className="h-1 w-12 bg-orange-600 rounded-full mb-3"></div>
                      <h3 className="text-2xl font-bold mb-2 text-gray-900">
                        {pkg.title}
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm">
                        {pkg.description}
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4 text-sm">
                        {pkg.items.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="">
                      <span className="text-xl font-extrabold text-orange-600">
                        ${(pkg.price * quantity * days).toFixed(2)}
                      </span>
                    </div>
                    {/* Quantity, Days & Price */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <label className="text-sm text-gray-700">
                          Quantity:
                        </label>
                        <input
                          type="number"
                          min="1"
                          value={quantity}
                          onChange={(e) =>
                            handleQuantityChange(
                              pkg,
                              Math.max(1, Number(e.target.value))
                            )
                          }
                          className="w-16 border rounded px-2 py-1 text-sm"
                        />
                      </div>

                      <div className="flex items-center gap-2">
                        <label className="text-sm text-gray-700">Days:</label>
                        <input
                          type="number"
                          min="1"
                          value={days}
                          onChange={(e) =>
                            handleDaysChange(
                              pkg,
                              Math.max(1, Number(e.target.value))
                            )
                          }
                          className="w-16 border rounded px-2 py-1 text-sm"
                        />
                      </div>
                      <div className="">
                        <button
                          onClick={() => handleBookNow(pkg)}
                          className="bg-orange-600 text-white py-2.5 px-6 rounded-lg hover:bg-orange-700 transition w-full md:w-auto text-sm"
                        >
                          Get Quote
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
        <Footer />
      </>
  );
}
