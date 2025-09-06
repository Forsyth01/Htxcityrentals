import React from 'react';

const RentalCollection = () => {
  const rentals = [
    { title: 'Tents', image: 'https://via.placeholder.com/300x200?text=Tents' },
    { title: 'Tables', image: 'https://via.placeholder.com/300x200?text=Tables' },
    { title: 'Chairs', image: 'https://via.placeholder.com/300x200?text=Chairs' },
    { title: 'Linens', image: 'https://via.placeholder.com/300x200?text=Linens' },
    { title: 'Table Top Decor', image: 'https://via.placeholder.com/300x200?text=Table+Top+Decor' },
    { title: 'Catering Equipment', image: 'https://via.placeholder.com/300x200?text=Catering+Equipment' },
    { title: 'Furniture & Misc', image: 'https://via.placeholder.com/300x200?text=Furniture+&+Misc' },
    { title: 'Packages', image: 'https://via.placeholder.com/300x200?text=Packages' },
  ];

  return (
    <div className=" mx-auto p-6 xl:w-[80%] m-auto">
      <h1 className=" text-4xl font-bold text-center mb-8 text-gray-800">
        Take A Look At Our Collection Of <br /> <span className="">Luxury Event Rentals</span> 
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {rentals.map((item, index) => (
          <div key={index} className="relative group">
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-lg" />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 flex items-center justify-center">
              <h3 className="text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition duration-300">
                {item.title}
              </h3>
            </div>
            <div className="mt-2 text-center">
              <p className="text-gray-600">Description goes here...</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RentalCollection;