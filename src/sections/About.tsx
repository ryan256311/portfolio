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
            <h2 className="section-title">PROFILE</h2> {/* New section title for profile */}
            <div className="section-body">
              {/* The existing content including the name and paragraphs */}
              <h3 className="profile-heading-with-border">
                <p className="font-bold mb-2 text-xl md:text-[32px]">新家　涼平</p>
                <span className="text-sm">フロントエンドエンジニア</span>
              </h3> {/* Changed from h3 to p with font-bold */}
              <p className="mb-4">
                Webディレクター、フロントエンドエンジニア、そしてデザイナーとしての多角的な経験を持つ新家 涼平です。企画営業の経験も活かし、技術とビジネスの両面からWebサービス制作を推進しています。常に顧客の事業課題解決を目的とした改善提案に注力し、革新的なアプローチで期待を超える価値提供を追求しております。
              </p>
              <p>
                私の制作哲学は「ユーザー中心のデザインと、品質の高いコードの融合」です。要件定義からデザイン、フロントエンド実装、品質管理、そして運用コンサルティングまで一貫して携わることで、ユーザーとビジネス双方にとって価値のあるデジタル体験を創造します。また、どんな困難なプロジェクトにおいても、常に前向きでユーモアを忘れず、チーム全体が楽しみながら最高の成果を出せる環境づくりを心がけております。現在は新規プロジェクトのリーダーとして、戦略立案と実行管理も主導しております。
              </p>
            </div>
          </div>

          {/* Section 2: SKILLS */}
          <div className="info-row">
            <h2 className="section-title">SKILLS</h2>
            <div className="section-body">
              {/* This content comes from the previous Skills section */}
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
              {/* This content comes from the previous Career section */}
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