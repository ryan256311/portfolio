import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { works } from '../data/works'; // Import works data

const WorkDetail: React.FC<{ id: number }> = ({ id }) => {
  const work = works.find((w) => w.id === id);

  if (!work) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl">Work not found</h2>
        <a href="#works" className="text-accent hover:underline ml-4">Back to Works</a>
      </section>
    );
  }

  return (
    <AnimatedSection>
      <section id="work-detail" className="min-h-screen section-padding-top section-padding-bottom">
        <div className="container mx-auto p-4">
          <a href="#works" className="text-accent hover:underline mb-8 block">&larr; Back to Works</a>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12">{work.title}</h2>
          {work.thumbnail && (
            <div className="flex justify-center mb-12">
              <img src={work.thumbnail} alt={work.title} className="w-[700px] max-w-full h-auto rounded-lg shadow-lg" />
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <dl>
                <dt className="font-bold text-base">Site Name</dt>
                <dd className="mb-4 text-sm sm:text-base">{work.siteName}</dd>
                <dt className="font-bold text-base">Role</dt>
                <dd className="mb-4 text-sm sm:text-base">{work.role}</dd>
                <dt className="font-bold text-base">Team</dt>
                <dd className="mb-4 text-sm sm:text-base">{work.team}</dd>
                <dt className="font-bold text-base">URL</dt>
                <dd className="mb-4 text-sm sm:text-base"><a href={work.url} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">{work.url}</a></dd>
                <dt className="font-bold text-base">Tech Stack</dt>
                <dd className="text-sm sm:text-base">{work.techStack}</dd>
              </dl>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Background</h3>
              <p className="text-sm sm:text-base mb-8">{work.background}</p>
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Implementation</h3>
              <p className="text-sm sm:text-base mb-8">{work.implementation}</p>
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Challenge</h3>
              <p className="text-sm sm:text-base mb-8">{work.challenge}</p>
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Result</h3>
              <p className="text-sm sm:text-base">{work.result}</p>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default WorkDetail;
