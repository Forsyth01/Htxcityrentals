import React from "react";
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
  const { addToCart } = useCart();

  const handleBookNow = (pkg) => {
    addToCart({
      id: `package-${pkg.id}`, // unique id for cart
      name: pkg.title,
      price: pkg.price,
      image: pkg.image,
    });
  };

  return (
    <>
    <SmoothScrollWrapper damping={0.03}>
      <section className="bg-gray-50 py-16 px-4 md:px-16 my-20">
        <div className="w-full max-w-5xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center mb-8 text-gray-900">
            Graduation Party Packages 🎓
          </h2>
          <p className="text-center max-w-3xl mx-auto mb-12 text-gray-600">
            Celebrate your graduate’s big achievement in style!
          </p>

          <div className="space-y-12">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex flex-col md:flex-row items-center bg-white rounded-3xl shadow-xl overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                {/* Image */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-full md:w-1/3 flex-shrink-0 h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden"
                >
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full sm:object-contai object-cover"
                  />
                </motion.div>

                {/* Content */}
                <div className="w-full md:w-2/3 p-8 md:p-12 flex flex-col justify-between">
                  <div>
                    <div className="h-1 w-16 bg-orange-600 rounded-full mb-4"></div>
                    <h3 className="text-3xl font-bold mb-4 text-gray-900">{pkg.title}</h3>
                    <p className="text-gray-600 mb-6">{pkg.description}</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                      {pkg.items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <span className="text-2xl font-extrabold text-orange-600">
                      ${pkg.price.toFixed(2)}
                    </span>
                    <button
                      onClick={() => handleBookNow(pkg)}
                      className="bg-orange-600 text-white py-3 px-8 rounded-xl hover:bg-orange-700 transition w-full md:w-auto"
                    >
                      Get Quote
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
        </SmoothScrollWrapper>
    </>
  );
}
