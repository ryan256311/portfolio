import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { works } from '../data/works'; // Import works data

const Works: React.FC = () => {
  return (
    <AnimatedSection>
      <section id="works" className="min-h-screen section-padding-top">
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {works.map((work) => ( // Use imported works data
              <a key={work.id} href={`/#works/${work.id}`} className="group block">
                <div className="overflow-hidden">
                  <img src={work.thumbnail} alt={work.title} className="w-full h-auto transform group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-lg font-bold mt-4 group-hover:text-accent">{work.title}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Works;
