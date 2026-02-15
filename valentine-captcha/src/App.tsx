import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Captcha from './Captcha';
import Success from './Success';

function App() {
  const [isVerified, setIsVerified] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-400 to-red-600 p-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 text-pink-200 text-9xl opacity-20 animate-pulse">♥</div>
        <div className="absolute bottom-10 right-10 text-pink-300 text-9xl opacity-20 animate-bounce">♥</div>
        <div className="absolute top-1/2 left-1/4 text-red-200 text-6xl opacity-10">♥</div>
      </div>

      <AnimatePresence mode="wait">
        {!isVerified ? (
          <Captcha key="captcha" onVerify={() => setIsVerified(true)} />
        ) : (
          <Success key="success" />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
