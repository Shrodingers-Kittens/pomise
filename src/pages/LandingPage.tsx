
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart } from 'lucide-react';
import SakuraPetals from '@/components/SakuraPetals';

const LandingPage = () => {
  const navigate = useNavigate();
  const [showText, setShowText] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const message = "Helloo jii.. Ik humesha late kr deta hu hr cheez mein lekin yrr ye dil bs tumhe chahta hai";

  useEffect(() => {
    // Start typewriter effect after a short delay
    const timer1 = setTimeout(() => setShowText(true), 1000);
    // Show button after typewriter finishes
    const timer2 = setTimeout(() => setShowButton(true), 6000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const handleHeartClick = () => {
    navigate('/apology');
  };

  return (
    <div className="min-h-screen romantic-gradient flex items-center justify-center relative overflow-hidden">
      <SakuraPetals />
      
      <div className="text-center z-10 max-w-4xl mx-auto px-6">
        {showText && (
          <div className="mb-12">
            <p className="text-2xl md:text-3xl lg:text-4xl text-gray-800 font-medium typewriter">
              {message}
            </p>
          </div>
        )}

        {showButton && (
          <div className="fade-in-up">
            <button
              onClick={handleHeartClick}
              className="btn-romantic flex items-center gap-3 mx-auto text-xl"
            >
              <Heart className="w-6 h-6 fill-current" />
              I'm sorry
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
