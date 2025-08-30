
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ApologyPage = () => {
  const navigate = useNavigate();
  const [noClickCount, setNoClickCount] = useState(0);
  const [yesButtonScale, setYesButtonScale] = useState(1);

  const noButtonTexts = [
    "No",
    "think again plij",
    "ek baar aur sochlo",
    "PWEEASEEE !! 🥺"
  ];

  const poemText = `Hi… I know I mess up a lot.
And every time, you forgive me,
even if it breaks your heart a little.
I can't thank you enough for that.
I may not want a lot in life,
but I want you—forever.
Even if right now it's just 'you and me',
I want to make it 'us' again,
like the way it was, always meant to be.`;

  const handleYesClick = () => {
    navigate('/poem');
  };

  const handleNoClick = () => {
    if (noClickCount < 3) {
      setNoClickCount(noClickCount + 1);
      setYesButtonScale(yesButtonScale + 0.3);
    }
  };

  return (
    <div className="min-h-screen romantic-gradient flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 fade-in-up">
          I'm sorry
        </h1>

        <div className="serif-romantic text-lg md:text-xl leading-relaxed whitespace-pre-line mb-12 fade-in-up">
          {poemText}
        </div>

        <div className="mb-8 fade-in-up">
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            My heart beats for you... will your kind self want to proceed further and lay your beautiful eyes on some lovely words meant for you by this ugly bastard?
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center fade-in-up">
          <button
            onClick={handleYesClick}
            className="btn-yes transform transition-all duration-300"
            style={{ 
              transform: `scale(${yesButtonScale})`,
              zIndex: 10 
            }}
          >
            Yes
          </button>

          <button
            onClick={handleNoClick}
            className="btn-no transform transition-all duration-300 hover:scale-105"
          >
            {noButtonTexts[Math.min(noClickCount, noButtonTexts.length - 1)]}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApologyPage;
