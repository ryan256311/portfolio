import React, { useState, useEffect } from 'react';

const Preloader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const fadeOutDelay = 1200; // 1.2 seconds
  const transitionDuration = 500; // 0.5 seconds

  useEffect(() => {
    // Start fade-out animation after fadeOutDelay
    const timer1 = setTimeout(() => {
      setIsAnimating(true);
    }, fadeOutDelay);

    // Remove component from DOM after fadeOutDelay + transitionDuration
    const timer2 = setTimeout(() => {
      setIsVisible(false);
    }, fadeOutDelay + transitionDuration);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-main-background text-main-text transition-all ease-out
        ${isAnimating ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}
      style={{ transitionDuration: `${transitionDuration}ms` }}
    >
      <h1 className="text-4xl font-bold mb-4 animate-[text-fade_1.2s_linear_forwards]">
        Ryohei Shinke.
      </h1>
      <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-accent rounded-full origin-left animate-[progress-fill_1.2s_linear_forwards]"
        ></div>
      </div>
    </div>
  );
};

export default Preloader;
