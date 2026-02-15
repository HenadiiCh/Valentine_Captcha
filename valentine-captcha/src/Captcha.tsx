import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, RefreshCw, Info, Headphones } from 'lucide-react';

interface CaptchaProps {
    onVerify: () => void;
}

const TOTAL_IMAGES = 18;

const Captcha = ({ onVerify }: CaptchaProps) => {
    const [selected, setSelected] = useState<number[]>([]);
    const [error, setError] = useState(false);

    const toggleSelect = (index: number) => {
        if (selected.includes(index)) {
            setSelected(selected.filter((i) => i !== index));
        } else {
            setSelected([...selected, index]);
        }
        setError(false);
    };

    const handleVerify = () => {
        if (selected.length === TOTAL_IMAGES) {
            onVerify();
        } else {
            setError(true);

            // Shake animation trigger
            const btn = document.getElementById('verify-btn');
            if (btn) {
                btn.animate([
                    { transform: 'translateX(0)' },
                    { transform: 'translateX(-5px)' },
                    { transform: 'translateX(5px)' },
                    { transform: 'translateX(0)' }
                ], { duration: 300 });
            }
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="bg-white p-2 rounded shadow-2xl w-[420px] max-w-full"
        >
            {/* Header - Google Style */}
            <div className="bg-[#1A73E8] p-4 text-white flex justify-between items-start mb-2">
                <div className='flex flex-col'>
                    <p className="text-base font-normal leading-tight">Select all images with</p>
                    <h2 className="text-2xl font-bold leading-tight mt-1">love</h2>
                    <p className="text-sm font-normal mt-1">Click verify once there are none left.</p>
                </div>
                <div className="bg-white p-2 w-14 h-14 flex items-center justify-center">
                    <img src="/images/19.jpg" className="w-full h-full object-cover" alt="sample" />
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-3 gap-1 mb-2 bg-white p-1">
                {Array.from({ length: TOTAL_IMAGES }).map((_, i) => {
                    const imgIndex = i + 1;
                    const isSelected = selected.includes(imgIndex);
                    return (
                        <div
                            key={imgIndex}
                            className={`relative cursor-pointer aspect-square transition-transform duration-100 ${isSelected ? 'transform scale-90' : ''
                                }`}
                            onClick={() => toggleSelect(imgIndex)}
                        >
                            <img
                                src={`/images/${imgIndex}.jpg`}
                                alt={`Love ${imgIndex}`}
                                className="w-full h-full object-cover block"
                            />
                            {isSelected && (
                                <div className="absolute top-0 left-0 w-full h-full border-4 border-[#1A73E8] flex items-start justify-start">
                                    <div className="bg-[#1A73E8] text-white rounded-br-full px-1 pt-0.5 pb-1">
                                        <Check size={16} strokeWidth={4} />
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {error && (
                <div className="text-[#D93025] text-sm mb-2 text-center bg-red-50 p-2 rounded">
                    Please select all matching images.
                </div>
            )}

            {/* Footer */}
            <div className="flex justify-between items-center px-1 pt-2 pb-1 border-t border-gray-100">
                <div className="flex space-x-4 text-gray-500">
                    <RefreshCw size={20} className="hover:text-gray-700 cursor-pointer" />
                    <Headphones size={20} className="hover:text-gray-700 cursor-pointer" />
                    <Info size={20} className="hover:text-gray-700 cursor-pointer" />
                </div>

                <button
                    id="verify-btn"
                    onClick={handleVerify}
                    className="bg-[#1A73E8] hover:bg-blue-600 text-white px-8 py-2.5 rounded font-bold uppercase text-sm tracking-wide transition-colors"
                >
                    Verify
                </button>
            </div>
        </motion.div>
    );
};

export default Captcha;
