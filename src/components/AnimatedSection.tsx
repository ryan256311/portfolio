import React from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`${className} transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
