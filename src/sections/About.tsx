import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import './About.css'; // Assuming About.css for specific styles if needed, otherwise App.css

const About: React.FC = () => {
  return (
    <AnimatedSection>
      <section id="about" className="min-h-screen section-padding-top">
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
                <div>
                  <h4 className="text-xl font-bold mb-4">Frontend</h4>
                  <ul className="space-y-2">
                    <li>WordPress</li>
                    <li>JavaScript</li>
                    <li>React & Next.js</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-4">Direction</h4>
                  <ul className="space-y-2">
                    <li>プロジェクト管理（HP制作）</li>
                    <li>チームマネジメント・育成</li>
                    <li>要件定義・品質管理・効果測定</li>
                    <li>企画提案</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-4">Other</h4>
                  <ul className="space-y-2">
                    <li>Figma & Adobe XD</li>
                    <li>English (日常会話レベル)</li>
                    <li>異文化コミュニケーション</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: CAREER */}
          <div className="info-row">
            <h2 className="section-title">CAREER</h2>
            <div className="section-body">
              {/* This content comes from the previous Career section */}
              <div className="">

                <div className="mb-12">
                  <h4 className="text-xl font-bold">セブ島留学（英語・プログラミング）</h4>
                  <p className="text-sm text-gray-400 mb-2">2020年1月 - 2020年5月 | KREDO JAPAN株式会社</p>
                  <p>英語と、プログラミングの基礎を学習しました。<br />
                    日本人学生が主体でしたが、インド人やフィリピン人の講師陣との交流を通じて、多様な文化背景を持つ人々とのコミュニケーションスキルを磨きました。<br />
                    また、放課後には多国籍な友人とビリヤードなどを通じて交流を深め、教室外でも異文化理解と実践的なコミュニケーション能力を培うことができました。</p>
                </div>

                <div className="mb-12">
                  <h4 className="text-xl font-bold">Webコーダー / UIデザイナー</h4>
                  <p className="text-sm text-gray-400 mb-2">2020年7月 - 2021年5月 | 株式会社PTOK</p>
                  <p>LPやコーポレートサイトのコーディングおよびUIデザイン制作に従事いたしました。<br />
                    InstagramマーケターのアシスタントとしてWebサイト運用に関する知見を習得いたしました。</p>
                </div>

                <div className="mb-12">
                  <h4 className="text-xl font-bold">フリーランス Webディレクター / コーダー / デザイナー</h4>
                  <p className="text-sm text-gray-400 mb-2">2021年6月 - 2022年5月 | プレジャーデザイン株式会社 (業務委託)</p>
                  <p>フリーランスとして、顧客の要件定義から制作物の品質管理、サイト運用コンサルティングまでを一貫して担当いたしました。<br />
                    マーケティング視点に基づいたWebサイト制作を推進いたしました。</p>
                </div>

                <div className="mb-12">
                  <h4 className="text-xl font-bold">Webコーダー / UIデザイナー</h4>
                  <p className="text-sm text-gray-400 mb-2">2022年6月 - 2023年10月 | 株式会社コムラボ</p>
                  <p>コーポレートサイトや採用サイトのコーディングを担当いたしました。<br />
                    ディレクター・デザイナーと密に連携し、クライアントと制作側の双方にメリットのあるプロジェクト進行に貢献いたしました。</p>
                </div>

                <div className="mb-12">
                  <h4 className="text-xl font-bold">Webディレクター兼フロントエンドエンジニア / プロジェクトリーダー</h4>
                  <p className="text-sm text-gray-400 mb-2">2024年4月 - 現在 | 株式会社エクシート</p>
                  <p>フロントエンド開発、Webデザイン、プロジェクトリーダーを兼任し、顧客の事業課題解決を目的としたWebソリューションを提供しております。<br />
                    53件のデジタル制作プロジェクトでHTML/CSS/JavaScript、WordPressを活用いたしました。<br />
                    社内重要プロジェクトのリーダーとして戦略立案と実行管理を主導しております。</p>
                </div>
              </div>
            </div>
          </div>

        </main>
      </section>
    </AnimatedSection>
  );
};

export default About;