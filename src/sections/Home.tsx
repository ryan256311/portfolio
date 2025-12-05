import React, { useEffect, useState } from 'react';
import './Home.css';

const Home: React.FC = () => {
  const [particles, setParticles] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const newParticles = [];
    for (let i = 0; i < 100; i++) {
      const size = Math.random() * 3 + 1;
      const style = {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${size}px`,
        height: `${size}px`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${Math.random() * 10 + 5}s`,
      };
      newParticles.push(<div key={i} className="particle" style={style}></div>);
    }
    setParticles(newParticles);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {particles}
      <div className="text-center z-10 p-4">
        <h1 className="text-5xl md:text-7xl font-serif text-main-text mb-4">RYOHEI SHINKE</h1>
        <p className="text-xl md:text-2xl font-sans text-main-text">フロントエンドエンジニア / Webディレクター</p>
      </div>
    </section>
  );
};

export default Home;
