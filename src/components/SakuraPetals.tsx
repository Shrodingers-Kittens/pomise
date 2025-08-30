
import { useEffect, useState } from 'react';

interface Petal {
  id: number;
  left: number;
  animationDuration: number;
  animationDelay: number;
  size: number;
}

const SakuraPetals = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const createPetals = () => {
      const newPetals: Petal[] = [];
      for (let i = 0; i < 20; i++) {
        newPetals.push({
          id: i,
          left: Math.random() * 100,
          animationDuration: Math.random() * 10 + 10, // 10-20s
          animationDelay: Math.random() * 5, // 0-5s delay
          size: Math.random() * 15 + 10, // 10-25px
        });
      }
      setPetals(newPetals);
    };

    createPetals();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute opacity-70"
          style={{
            left: `${petal.left}%`,
            animationDuration: `${petal.animationDuration}s`,
            animationDelay: `${petal.animationDelay}s`,
            width: `${petal.size}px`,
            height: `${petal.size}px`,
          }}
        >
          <div className="sakura-fall">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-full h-full text-pink-300"
            >
              <path
                d="M12 2C10 2 8 4 8 6C8 8 10 10 12 10C14 10 16 8 16 6C16 4 14 2 12 2Z"
                fill="currentColor"
              />
              <path
                d="M12 14C10 14 8 16 8 18C8 20 10 22 12 22C14 22 16 20 16 18C16 16 14 14 12 14Z"
                fill="currentColor"
              />
              <path
                d="M2 12C2 10 4 8 6 8C8 8 10 10 10 12C10 14 8 16 6 16C4 16 2 14 2 12Z"
                fill="currentColor"
              />
              <path
                d="M14 12C14 10 16 8 18 8C20 8 22 10 22 12C22 14 20 16 18 16C16 16 14 14 14 12Z"
                fill="currentColor"
              />
              <circle cx="12" cy="12" r="2" fill="currentColor" />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SakuraPetals;
