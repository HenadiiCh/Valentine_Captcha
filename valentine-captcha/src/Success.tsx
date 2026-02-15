import { motion } from 'framer-motion';

const Success = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center justify-center text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl max-w-lg"
        >
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="mb-6 relative"
            >
                <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg blur opacity-75 animate-pulse"></div>
                <img
                    src="/images/19.jpg"
                    alt="The final love"
                    className="relative rounded-lg shadow-2xl max-h-[60vh] object-cover w-auto"
                />
            </motion.div>

            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-red-600 mb-2"
            >
                That's correct.
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="text-2xl text-gray-700 font-serif italic"
            >
                It is love.
            </motion.p>
        </motion.div>
    );
};

export default Success;
