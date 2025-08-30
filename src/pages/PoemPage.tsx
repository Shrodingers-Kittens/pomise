
import { useEffect, useState } from 'react';

const PoemPage = () => {
  const [visibleLines, setVisibleLines] = useState<number>(0);

  const poemLines = [
    "Woah, holy moly, me oh my—",
    "You're the apple of my eye.",
    "",
    "The world feels lighter when you smile,",
    "Even silence with you is worthwhile.",
    "",
    "I've never known a love so true,",
    "Because girl, I've never loved one like you.",
    "",
    "You are rare, you are my muse,",
    "The only blessing I never want to lose.",
    "",
    "When I falter, you still stay,",
    "When I'm lost, you show the way.",
    "",
    "And just as you've been my light,",
    "I promise I'll be yours in every night.",
    "Through every storm, in joy or pain,",
    "I'll hold your hand again and again.",
    "",
    "No distance, no fear, nothing can part,",
    "For you'll always live inside my heart."
  ];

  useEffect(() => {
    // Show lines one by one with delay
    poemLines.forEach((_, index) => {
      setTimeout(() => {
        setVisibleLines(index + 1);
      }, (index + 1) * 800); // 800ms delay between lines
    });
  }, []);

  return (
    <div className="min-h-screen parchment-bg flex items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Background audio */}
      <audio autoPlay loop className="hidden">
        <source src="https://od.lk/s/NzhfNzM4OTY1Mzhf/Elliot%20James%20Reay%20-%20I%20Think%20They%20Call%20This%20Love%20%28Instrumental%29.mp3" type="audio/wav" />
      </audio>

      {/* Sparkle effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-sparkle-gold rounded-full sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-pink-200">
          <div className="poem-text space-y-4">
            {poemLines.map((line, index) => (
              <div
                key={index}
                className={`transition-all duration-800 ${
                  index < visibleLines
                    ? 'opacity-100 transform translate-y-0'
                    : 'opacity-0 transform translate-y-4'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                {line === '' ? (
                  <div className="h-4" />
                ) : (
                  <p className="leading-relaxed">{line}</p>
                )}
              </div>
            ))}
          </div>

          {visibleLines >= poemLines.length && (
            <div className="mt-12 fade-in-up">
              <div className="w-16 h-16 mx-auto mb-4 text-pink-500">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full heartbeat">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              <p className="text-lg text-gray-600 italic">
                Forever yours ❤️
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PoemPage;
