export interface Skill {
  name: string;
  experience: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface CareerItem {
  title: string;
  period: string;
  company: string;
  description: string;
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'WordPress', experience: '5年' },
      { name: 'SCSS', experience: '4年' },
      { name: 'JavaScript', experience: '3年' },
      { name: 'GSAP', experience: '1年未満' },
      { name: 'React & Next.js', experience: '1年未満' },
      { name: 'TypeScript', experience: '1年未満' },
      { name: 'Tailwind CSS', experience: '1年未満' },
    ],
  },
  {
    title: 'Direction',
    skills: [
      { name: 'プロジェクト管理（HP制作）', experience: '2年' },
      { name: 'チームマネジメント・育成', experience: '1年未満' },
      { name: '要件定義・品質管理・効果測定', experience: '1年未満' },
      { name: '企画提案', experience: '1年未満' },
    ],
  },
  {
    title: 'Other',
    skills: [
      { name: 'Figma & Adobe XD', experience: '4年' },
      { name: 'Git', experience: '1年' },
      { name: 'Webデザインレビュー（HP/LP）', experience: '2年' },
      { name: 'English (日常会話レベル)', experience: '' },
      { name: '異文化コミュニケーション', experience: '' },
    ],
  },
];

export const careerHistory: CareerItem[] = [
  {
    title: 'セブ島留学（英語・プログラミング）',
    period: '2020年1月 - 2020年5月',
    company: 'KREDO JAPAN株式会社',
    description: `英語と、プログラミングの基礎を学習しました。<br />
                  日本人学生が主体でしたが、インド人やフィリピン人の講師陣との交流を通じて、多様な文化背景を持つ人々とのコミュニケーションスキルを磨きました。<br />
                  また、放課後には多国籍な友人とビリヤードなどを通じて交流を深め、教室外でも異文化理解と実践的なコミュニケーション能力を培うことができました。`,
  },
  {
    title: 'Webコーダー / UIデザイナー',
    period: '2020年7月 - 2021年5月',
    company: '株式会社PTOK',
    description: `LPやコーポレートサイトのコーディングおよびUIデザイン制作に従事いたしました。<br />
                  InstagramマーケターのアシスタントとしてWebサイト運用に関する知見を習得いたしました。`,
  },
  {
    title: 'フリーランス Webディレクター / コーダー / デザイナー',
    period: '2021年6月 - 2022年5月',
    company: 'プレジャーデザイン株式会社 (業務委託)',
    description: `フリーランスとして、顧客の要件定義から制作物の品質管理、サイト運用コンサルティングまでを一貫して担当いたしました。<br />
                  マーケティング視点に基づいたWebサイト制作を推進いたしました。`,
  },
  {
    title: 'Webコーダー / UIデザイナー',
    period: '2022年6月 - 2023年10月',
    company: '株式会社コムラボ',
    description: `コーポレートサイトや採用サイトのコーディングを担当いたしました。<br />
                  ディレクター・デザイナーと密に連携し、クライアントと制作側の双方にメリットのあるプロジェクト進行に貢献いたしました。`,
  },
  {
    title: 'Webディレクター兼フロントエンドエンジニア / プロジェクトリーダー',
    period: '2024年4月 - 現在',
    company: '株式会社エクシート',
    description: `フロントエンド開発、Webデザイン、プロジェクトリーダーを兼任し、顧客の事業課題解決を目的としたWebソリューションを提供しております。<br />
                  53件のデジタル制作プロジェクトでHTML/CSS/JavaScript、WordPressを活用いたしました。<br />
                  社内重要プロジェクトのリーダーとして戦略立案と実行管理を主導しております。`,
  },
];
