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
                <p className="font-bold mb-2 text-xl md:text-[32px]">譁ｰ螳ｶ縲豸ｼ蟷ｳ</p>
                <span className="text-sm">繝輔Ο繝ｳ繝医お繝ｳ繝峨お繝ｳ繧ｸ繝九い</span>
              </h3> {/* Changed from h3 to p with font-bold */}
              <p className="mb-4">
                Web繝・ぅ繝ｬ繧ｯ繧ｿ繝ｼ縲√ヵ繝ｭ繝ｳ繝医お繝ｳ繝峨お繝ｳ繧ｸ繝九い縲√◎縺励※繝・じ繧､繝翫・縺ｨ縺励※縺ｮ螟夊ｧ堤噪縺ｪ邨碁ｨ薙ｒ謖√▲縺ｦ縺・∪縺吶ゆｼ∫判蝟ｶ讌ｭ縺ｮ邨碁ｨ薙ｂ豢ｻ縺九＠縲∵橿陦薙→繝薙ず繝阪せ縺ｮ荳｡髱｢縺九ｉWeb繧ｵ繝ｼ繝薙せ蛻ｶ菴懊ｒ謗ｨ騾ｲ縺励※縺・∪縺吶ょｸｸ縺ｫ鬘ｧ螳｢縺ｮ莠区･ｭ隱ｲ鬘瑚ｧ｣豎ｺ繧堤岼逧・→縺励◆謾ｹ蝟・署譯医↓豕ｨ蜉帙＠縲・擠譁ｰ逧・↑繧｢繝励Ο繝ｼ繝√〒譛溷ｾ・ｒ雜・∴繧倶ｾ｡蛟､謠蝉ｾ帙ｒ霑ｽ豎ゅ＠縺ｦ縺翫ｊ縺ｾ縺吶・
              </p>
              <p>
                遘√・蛻ｶ菴懷憧蟄ｦ縺ｯ縲後♀螳｢讒倥・逶ｮ讓咎＃謌舌ｒ譛ｬ雉ｪ縺ｨ縺吶ｋ繝・じ繧､繝ｳ縺ｨ縲∝刀雉ｪ縺ｮ鬮倥＞繧ｳ繝ｼ繝峨・陞榊粋縲阪〒縺吶ゅさ繝ｼ繝・ぅ繝ｳ繧ｰ縲√ョ繧ｶ繧､繝ｳ縲√え繧ｧ繝悶し繧､繝亥宛菴懊´P縲∝ｺ・相繝舌リ繝ｼ縺ｨ縺・▲縺溘ョ繧ｸ繧ｿ繝ｫ繧｢繧ｻ繝・ヨ縺ｯ縲√♀螳｢讒倥・螢ｲ荳雁髄荳翫ｄ迚ｹ螳壹・逶ｮ讓咎＃謌舌ｒ螳溽樟縺吶ｋ縺溘ａ縺ｮ蠑ｷ蜉帙↑繝・・繝ｫ縺ｧ縺ゅｋ縺ｨ隱崎ｭ倥＠縺ｦ縺翫ｊ縺ｾ縺吶ゅ◎縺ｮ縺溘ａ縲∝腰縺ｫ謚陦薙ｄ繝・じ繧､繝ｳ縺ｮ雉ｪ繧定ｿｽ豎ゅ☆繧九□縺代〒縺ｪ縺上∝ｸｸ縺ｫ縺雁ｮ｢讒倥・縺碑ｦ∵悍繧呈ｷｱ縺冗炊隗｣縺励√◎縺ｮ螳溽樟縺ｫ繧ｳ繝溘ャ繝医☆繧九％縺ｨ縺ｧ縲∵悄蠕・ｒ雜・∴繧倶ｾ｡蛟､謠蝉ｾ帙ｒ霑ｽ豎ゅ＠縺ｦ縺翫ｊ縺ｾ縺吶りｦ∽ｻｶ螳夂ｾｩ縺九ｉ驕狗畑繧ｳ繝ｳ繧ｵ繝ｫ繝・ぅ繝ｳ繧ｰ縺ｾ縺ｧ荳雋ｫ縺励※謳ｺ繧上ｊ縲√Θ繝ｼ繧ｶ繝ｼ縺ｨ繝薙ず繝阪せ蜿梧婿縺ｫ縺ｨ縺｣縺ｦ逵溘↓萓｡蛟､縺ｮ縺ゅｋ繝・ず繧ｿ繝ｫ菴馴ｨ薙ｒ蜑ｵ騾縺励∪縺吶・
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
