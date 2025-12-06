import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { skillCategories, careerHistory } from '../data/about';
import './About.css'; // Assuming About.css for specific styles if needed, otherwise App.css

const About: React.FC = () => {
  return (
    <AnimatedSection>
      <section id="about" className="min-h-screen section-padding-top section-padding-bottom">
        {/* Main Content Container */}
        <main className="content-container"> {/* Use main tag as in reference HTML for semantic structure */}

          {/* Section 1: PROFILE */}
          <div className="info-row">
            <h2 className="section-title">I am ...</h2> {/* New section title for profile */}
            <div className="section-body">
              {/* The existing content including the name and paragraphs */}
              <h3 className="profile-heading-with-border">
                <p className="font-bold mb-2 text-xl md:text-[32px]">新家　涼平</p>
                <span className="text-sm">フロントエンドエンジニア</span>
              </h3> {/* Changed from h3 to p with font-bold */}
              <p className="mb-4">
                Webディレクター、フロントエンドエンジニア、そしてデザイナーとしての多角的な経験を持っています。企画営業の経験も活かし、技術とビジネスの両面からWebサービス制作を推進しています。常に顧客の事業課題解決を目的とした改善提案に注力し、革新的なアプローチで期待を超える価値提供を追求しております。
              </p>
              <p>
                私の制作哲学は「お客様の目標達成を本質とするデザインと、品質の高いコードの融合」です。コーディング、デザイン、ウェブサイト制作、LP、広告バナーといったデジタルアセットは、お客様の売上向上や特定の目標達成を実現するための強力なツールであると認識しております。そのため、単に技術やデザインの質を追求するだけでなく、常にお客様のご要望を深く理解し、その実現にコミットすることで、期待を超える価値提供を追求しております。要件定義から運用コンサルティングまで一貫して携わり、ユーザーとビジネス双方にとって真に価値のあるデジタル体験を創造します。
              </p>
            </div>
          </div>

          {/* Section 2: SKILLS */}
          <div className="info-row">
            <h2 className="section-title">SKILLS</h2>
            <div className="section-body">
              <div className="flex justify-start skills-grid flex-wrap text-center">
                {skillCategories.map((category, index) => (
                  <div key={index}>
                    <h4 className="text-xl font-bold mb-4">{category.title}</h4>
                    <ul className="space-y-2">
                      {category.skills.map((skill, skillIndex) => (
                        <li key={skillIndex} className="flex flex-col items-center sm:items-start">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-gray-400">{skill.experience}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 3: CAREER */}
          <div className="info-row">
            <h2 className="section-title">CAREER</h2>
            <div className="section-body">
              <div className="">
                {careerHistory.map((item, index) => (
                  <div key={index} className="mb-12">
                    <h4 className="text-xl font-bold">{item.title}</h4>
                    <p className="text-sm text-gray-400 mb-2">{item.period} | {item.company}</p>
                    <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </main>
      </section>
    </AnimatedSection>
  );
};

export default About;