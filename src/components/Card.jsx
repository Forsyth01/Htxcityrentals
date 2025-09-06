// CardWithImage.jsx
import React from "react";

export default function CardWithImage() {
  return (
    <div className="flex justify-center items-center py-20 bg-gradient-to-br from-gray-900 to-gray-800 p-6">
      <div className="flex flex-col md:flex-row bg-gray-900 rounded-2xl shadow-xl overflow-hidden max-w-5xl w-full">
        
        {/* Left Section */}
        <div className="flex-1 p-8 flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Welcome to <span className="text-orange-400">Htxcityrentals</span>
          </h1>
          <p className="text-gray-300 mb-6">
            At Htxcityrentals, we specialize in providing premium event rentals 
            that bring your celebrations to life. From elegant chairs and tables 
            to luxury décor pieces, we help transform weddings, birthdays, 
            corporate events, and private parties into unforgettable experiences.
          </p>

          <h2 className="text-lg font-semibold text-white mb-2">We provide:</h2>
          <div className="flex gap-3 flex-wrap mb-6">
            <span className="px-4 py-2 bg-gray-700 rounded-full text-gray-200">
              Luxury Chairs
            </span>
            <span className="px-4 py-2 bg-gray-700 rounded-full text-gray-200">
              Elegant Tables
            </span>
            <span className="px-4 py-2 bg-gray-700 rounded-full text-gray-200">
              Décor & Accessories
            </span>
          </div>

          <a
            href="/ourproducts"
            className="inline-flex items-center px-16 py-3 bg-orange-500 text-white font-medium rounded-full shadow hover:bg-orange-600 transition w-fit "
          >
            Explore
          </a>
        </div>

        {/* Right Section - Image */}
        <div className="flex-1">
          <img
            src="/images/chairfit.jpg"
            alt="Luxury event rentals by Htxcityrentals"
            className="w-full h-120 object-cover"
          />
        </div>
      </div>
    </div>
  );
}
