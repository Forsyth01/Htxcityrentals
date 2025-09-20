import React from 'react';
import { Phone } from 'lucide-react';

const PhoneNumber= () => {
    return (
        <div className="fixed bottom-10 right-6 xl:right-12 z-50">
            <a
                href="tel:+13174593144"
                className="relative group"
            >
                {/* Tooltip */}
                <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 
                                bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 
                                group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Call to get a quote
                </span>
  
                {/* Phone Icon */}
                <div className="bg-orange-800 p-4 rounded-full shadow-lg hover:bg-orange-700 transition-colors">
                    <Phone className="text-white w-6 h-6" />
                </div>
            </a>
        </div>
    );
};

export default PhoneNumber;
