import React from 'react';
import { motion } from 'framer-motion';

const PhoneNumberHeader = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className=""
        >
            <div className="bg-gray-100 flex items-center py-2 px-6 justify-center gap-4 text-center">
                <h1 className="text-sm tracking-wider">Call to get a quote!</h1>
                <a
                    href="tel:+2341234567890"
                    className="text-gray-600 text-sm hover:text-orange-500 transition-colors"
                >
                    📞 +234 123 456 7890
                </a>
            </div>
        </motion.div>
    );
};

export default PhoneNumberHeader;
