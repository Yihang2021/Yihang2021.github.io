/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  Github, 
  GraduationCap, 
  Award, 
  Briefcase, 
  FlaskConical, 
  Lightbulb, 
  BookOpen, 
  ExternalLink, 
  Globe,
  ChevronRight,
  MapPin,
  Calendar
} from 'lucide-react';

type Language = 'en' | 'zh';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [visitorCount, setVisitorCount] = useState<number>(327);

  const t = (en: string, zh: string) => (lang === 'en' ? en : zh);

  useEffect(() => {
    // Add Busuanzi script dynamically
    const script = document.createElement('script');
    script.src = "//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js";
    script.async = true;
    document.body.appendChild(script);

    const targetNode = document.getElementById('busuanzi_value_site_pv');

    const handleCountUpdate = () => {
      const node = document.getElementById('busuanzi_value_site_pv');
      if (node) {
        const rawValue = node.textContent || '';
        const num = parseInt(rawValue.replace(/\D/g, ''), 10);
        if (!isNaN(num)) {
          setVisitorCount(327 + num);
        }
      }
    };

    const observer = new MutationObserver(handleCountUpdate);
    if (targetNode) {
      observer.observe(targetNode, { childList: true, characterData: true, subtree: true });
    }

    const interval = setInterval(handleCountUpdate, 500);

    return () => {
      document.body.removeChild(script);
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="min-h-screen font-sans">
      {/* Navigation / Language Switch */}
      <nav className="fixed top-0 right-0 p-6 z-50">
        <div className="flex gap-2 bg-white/80 backdrop-blur-md border border-zinc-200 rounded-full p-1 shadow-sm">
          <button 
            onClick={() => setLang('en')}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${lang === 'en' ? 'bg-zinc-900 text-white shadow-md' : 'text-zinc-500 hover:text-zinc-900'}`}
          >
            English
          </button>
          <button 
            onClick={() => setLang('zh')}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${lang === 'zh' ? 'bg-zinc-900 text-white shadow-md' : 'text-zinc-500 hover:text-zinc-900'}`}
          >
            中文
          </button>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-24 pb-20">
        {/* Header Section */}
        <header className="mb-20">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="w-40 h-40 rounded-xl overflow-hidden border-4 border-[#003366]/10 shadow-lg hover:border-[#003366] transition-colors duration-500 bg-white">
                <img 
                  src="/Avat.jpg" 
                  alt="Yihang Xing" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-[#003366] rounded-xl flex items-center justify-center text-white shadow-md">
                <GraduationCap size={24} />
              </div>
            </motion.div>

            <div className="flex-1 text-center md:text-left">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-6xl font-display font-medium text-zinc-900 mb-4 tracking-tight"
              >
                {t('Yihang Xing', '邢祎航')}
              </motion.h1>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="space-y-2 mb-6"
              >
                <p className="text-xl text-[#003366] font-medium italic">
                  {t('School of the Gifted Young', '少年班学院')}
                </p>
                <p className="text-lg text-zinc-700 flex items-center justify-center md:justify-start gap-2">
                  <MapPin size={18} className="text-[#003366]/60" />
                  {t('University of Science and Technology of China', '中国科学技术大学')}
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap justify-center md:justify-start gap-4"
              >
                <a href="mailto:Oliveira@mail.ustc.edu.cn" className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-amber-50/50 rounded-lg text-zinc-700 transition-colors border border-zinc-200 hover:border-amber-300 shadow-sm">
                  <Mail size={16} className="text-[#003366]" />
                  <span className="text-sm font-medium">Oliveira@mail.ustc.edu.cn</span>
                </a>
                <a href="mailto:oliveira@ustc.edu" className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-amber-50/50 rounded-lg text-zinc-700 transition-colors border border-zinc-200 hover:border-amber-300 shadow-sm">
                  <Mail size={16} className="text-[#003366]" />
                  <span className="text-sm font-medium">oliveira@ustc.edu</span>
                </a>
                <a href="https://github.com/Yihang2021" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-[#003366] hover:bg-[#002244] text-white rounded-lg transition-colors shadow-sm">
                  <Github size={16} />
                  <span className="text-sm font-medium">GitHub</span>
                </a>
              </motion.div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: About & Interests */}
          <div className="lg:col-span-2 space-y-16">
            {/* About Me */}
            <section>
              <SectionHeader icon={<Globe size={22} />} title={t('About Me', '关于我')} />
              <div className="prose prose-zinc max-w-none">
                <blockquote className="border-l-4 border-[#003366] pl-4 py-1 italic text-zinc-700 bg-amber-50/40 rounded-r-lg mb-6">
                  {t('Weakness and ignorance are not obstacles to survival, arrogance is.', '弱小和无知不是生存的障碍。傲慢才是。')}
                </blockquote>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  {t(
                    'I am an undergraduate student at the School of the Gifted Young, University of Science and Technology of China, majoring in Data Science and Big Data Technology. I am currently learning and exploring the field of artificial intelligence, hoping to contribute to the advancement of human society. I have ample passion and capability for project work and teamwork, which allows me to excel in collaborative research projects. As a third-year undergraduate, I have not yet determined a specific future direction, as I believe that only through sufficient trial and experience can one\'s potential be fully unleashed. Therefore, I am enthusiastic about any creative and interesting work and am willing to constantly try and learn in cutting-edge technology fields.',
                    '我是中国科学技术大学少年班学院数据科学与大数据技术专业的本科生，目前正在人工智能领域学习与探索，希望能对人类科学技术的发展作出自己的贡献。我对于项目工作与团队协作有充足的热情与能力，这让我能够很好地胜任合作研究项目。作为一名本科三年级的学生，我并没有确定未来明确的发展方向，我认为只有充分的尝试和体验才可以最大激发一个人的潜能。因此，我热衷于任何创造性的、有趣的工作，并愿意在前沿科技领域不断尝试与学习。'
                  )}
                </p>
                <p className="text-zinc-600 leading-relaxed">
                  {t(
                    'At the same time, I am also passionate about life, with a love for sports, nature exploration, and intercultural communication. In high school, as a founding member of the school volleyball team, I participated twice in the city volleyball league. In university, as a member of the School of the Gifted Young\'s soccer and volleyball teams, I won the \'Fledgling Eagle Cup\' championship in soccer and third place in the \'New Star Cup\' for volleyball.',
                    '同时，我对生活也充满热情，热爱运动、自然探险以及跨文化交流。我曾在高中时作为校排球队的创始成员两度参与市排球联赛，我也在大学时作为少年班学院足球队、排球队的一员分别获得足球”雏鹰杯“冠军和排球”新星杯“季军。'
                  )}
                </p>
              </div>
            </section>

            {/* Research Projects */}
            <section>
              <SectionHeader icon={<FlaskConical size={22} />} title={t('Research Projects', '研究项目')} />
              <div className="space-y-6">
                <ProjectCard 
                  title={t('"New Lotus Scholar" Research Program, School of the Gifted Young, USTC', '“新荷学者”研究项目, 中国科学技术大学少年班学院')}
                  duration={t('Nov. 2025 - 2026 Spring', '2025年11月 - 2026年春季')}
                  topic={t('Error Prevention in Tool-Augmented LLM.', '工具增强大模型智能体纠错的预防机制。')}
                  status="ongoing"
                  lang={lang}
                />
                <ProjectCard 
                  title={t('Undergraduate Research Program, USTC', '大学生研究计划, 中国科学技术大学')}
                  duration={t('Dec. 2025 - 2026 Spring', '2025年12月 - 2026年春季')}
                  topic={t('Error Prevention in Tool-Augmented LLM.', '工具增强大模型智能体纠错的预防机制。')}
                  status="ongoing"
                  lang={lang}
                />
                <ProjectCard 
                  title={t('"Ta-You Wu Scholars" Summer Research Program, National Tsinghua University', '“吴大猷学者”暑期研究项目, 台湾清华大学')}
                  duration={t('July 2025 - Aug. 2025', '2025年7月 - 2025年8月')}
                  topic={t('A Simulation and Comparative Study of Ecological Statistical Models.', '生态统计模型的仿真比较研究。')}
                  advisor={t('Prof. Wen-Han Hwang, Director of the Institute of Statistics and Data Science', '黄文瀚教授，统计与数据科学研究所所长')}
                  status="completed"
                  lang={lang}
                />
              </div>
            </section>

            {/* Publications */}
            <section>
              <SectionHeader icon={<BookOpen size={22} />} title={t('Publications', '发表')} />
              <div className="p-6 bg-amber-50/20 border border-zinc-200 rounded-xl">
                <p className="text-zinc-900 font-semibold mb-2">
                  {t('I have no publications yet, but I\'m currently working on a project in LLM Agent.', '我目前尚无已发表论文,但我正致力于一项AI智能体相关的研究。')}
                </p>
                <p className="text-zinc-600 text-sm mb-4">
                  <strong>{t('Yihang Xing', '邢祎航')}</strong>, Co-Authors
                </p>
                <p className="text-[#003366] text-sm italic mb-4">
                  {t('NeurIPS, 2026. ← as my goal', 'NeurIPS, 2026. ← 目标')}
                </p>
                <div className="flex gap-4 text-xs font-bold uppercase tracking-wider text-[#003366]">
                  <span className="opacity-50 cursor-not-allowed">[PDF]</span>
                  <span className="opacity-50 cursor-not-allowed">[Code]</span>
                  <span className="opacity-50 cursor-not-allowed">[BibTeX]</span>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Education, Honors, Experience */}
          <div className="space-y-16">
            {/* Education */}
            <section>
              <SectionHeader icon={<GraduationCap size={22} />} title={t('Education', '教育经历')} />
              <div className="space-y-6">
                <TimelineItem 
                  title={t('B.S. in Data Science', '本科, 数据科学与大数据技术')}
                  subtitle={t('USTC, School of the Gifted Young', '中国科学技术大学少年班学院')}
                  date="2023 - Present"
                />
                <TimelineItem 
                  title={t('Huaiyin High School', '江苏省淮阴中学')}
                  subtitle={t('Jiangsu Province', '江苏省')}
                  date="2018 - 2023"
                />
              </div>
            </section>

            {/* Honors */}
            <section>
              <SectionHeader icon={<Award size={22} />} title={t('Honors', '荣誉')} />
              <div className="space-y-4">
                <HonorItem 
                  title={t('Outstanding Freshman Scholarship (Bronze)', '优秀新生奖学金铜奖')}
                  org="USTC"
                  date="Fall 2023"
                />
                <HonorItem 
                  title={t('Rose Fund Public Affairs Scholarship', '蔷薇奖学金(奉公德育)')}
                  org="SGY, USTC"
                  date="Spring 2025"
                />
                <HonorItem 
                  title={t('"Ta-You Wu Scholars" Research Scholarship', '"吴大猷学者"研究实习奖学金')}
                  org="NTHU"
                  date="Summer 2025"
                />
                <HonorItem 
                  title={t('Outstanding Peer Academic Counselor Prize', '"朋辈助学"优秀导师奖金')}
                  org="School of Physics, USTC"
                  date="Fall 2025"
                />
                <HonorItem 
                  title={t('Xiangyang Scholarship by Alumni', '九四级少年班零零班向阳奖学金')}
                  org="SGY, USTC"
                  date="Fall 2025"
                />
              </div>
            </section>

            {/* Experience */}
            <section>
              <SectionHeader icon={<Briefcase size={22} />} title={t('Experience', '任职经历')} />
              <div className="space-y-4">
                <ExperienceItem 
                  role={t('Teaching Assistant', '助教')}
                  desc={t('Introduction to Database System', '数据库系统概论')}
                  date="Spring 2026"
                />
                <ExperienceItem 
                  role={t('Deputy President', '副团长')}
                  desc={t('Student Wargame Club, USTC', '校学生战术社团')}
                  date="2025 - 2026"
                />
                <ExperienceItem 
                  role={t('Teaching Assistant', '助教')}
                  desc={t('Computer Programming L', '计算机程序设计L')}
                  date="Fall 2025"
                />
                <ExperienceItem 
                  role={t('Research Assistant', '本科生研究助理')}
                  desc={t('NTHU, Institute of Statistics', '台湾清华大学统计与数据科学研究所')}
                  date="Summer 2025"
                />
                <ExperienceItem 
                  role={t('Peer Academic Counselor', '朋辈助学导师')}
                  desc={t('Mechanics & Electromagnetism', '力学课程与电磁学课程')}
                  date="2024 - 2025"
                />
              </div>
            </section>

            {/* Research Interests */}
            <section>
              <SectionHeader icon={<Lightbulb size={22} />} title={t('Research Interests', '研究兴趣')} />
              <div className="flex flex-wrap gap-2">
                {[
                  t('LLM Agents', 'AI智能体'),
                  t('Big Data in politics & international relations', '大数据在政治与国际关系中的运用'),
                  t('Data Science', '数据科学'),
                  t('Anything Creative & Interesting', '任何具有创造性与趣味性的事物')
                ].map((interest, i) => (
                  <span key={i} className="px-3 py-1 bg-amber-50 text-amber-900 text-sm font-medium rounded-full border border-amber-200/80">
                    {interest}
                  </span>
                ))}
              </div>
            </section>

            {/* Links */}
            <section>
              <SectionHeader icon={<ExternalLink size={22} />} title={t('Links', '链接')} />
              <div className="space-y-3">
                <LinkItem href="https://scholar.google.com/citations?user=j40Kcu4AAAAJ" label="Google Scholar" />
                <LinkItem href="https://github.com/Yihang2021" label="GitHub" />
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Hidden Busuanzi element to receive dynamic values */}
      <span id="busuanzi_value_site_pv" style={{ display: 'none' }}></span>

      <footer className="border-t border-zinc-200 bg-zinc-50 py-12 text-center">
        <p className="text-zinc-700 font-medium text-base mb-2">
          {t('Yihang Xing 2025', '邢祎航 2025')}
        </p>
        <div className="mt-2 inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-zinc-200 rounded-full text-xs text-zinc-500 font-serif italic">
          <span>{t('Total Visitors', '总访问量')}</span>
          <span className="text-zinc-900 font-bold not-italic">{visitorCount}</span>
        </div>
      </footer>
    </div>
  );
}

function SectionHeader({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <div className="p-2 bg-[#003366] text-white rounded-lg shadow-sm">
        {icon}
      </div>
      <h2 className="text-2xl font-display font-medium text-zinc-900 tracking-tight">
        {title}
      </h2>
      <div className="flex-1 h-px bg-zinc-200 ml-4"></div>
    </div>
  );
}

function ProjectCard({ title, duration, topic, advisor, status, lang }: { 
  title: string; 
  duration: string; 
  topic: string; 
  advisor?: string; 
  status: 'ongoing' | 'completed';
  lang: Language;
}) {
  return (
    <div className="group p-6 bg-white border border-zinc-200 rounded-xl hover:border-amber-300 hover:shadow-lg hover:shadow-subtle transition-all duration-300">
      <div className="flex justify-between items-start gap-4 mb-4">
        <h3 className="text-lg font-medium text-zinc-900 group-hover:text-[#003366] transition-colors font-display">
          {title}
        </h3>
        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
          status === 'ongoing' ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-zinc-100 text-zinc-600'
        }`}>
          {lang === 'en' ? status : (status === 'ongoing' ? '进行中' : '已完成')}
        </span>
      </div>
      <div className="space-y-2 text-sm text-zinc-600">
        <p className="flex items-center gap-2">
          <Calendar size={14} className="text-[#003366]/60" />
          {duration}
        </p>
        <p className="flex items-start gap-2">
          <ChevronRight size={14} className="text-amber-600 mt-1 shrink-0" />
          <span><strong>{lang === 'en' ? 'Topic:' : '研究主题:'}</strong> {topic}</span>
        </p>
        {advisor && (
          <p className="flex items-start gap-2">
            <ChevronRight size={14} className="text-amber-600 mt-1 shrink-0" />
            <span><strong>{lang === 'en' ? 'Advisor:' : '指导教授:'}</strong> {advisor}</span>
          </p>
        )}
      </div>
    </div>
  );
}

function TimelineItem({ title, subtitle, date }: { title: string; subtitle: string; date: string }) {
  return (
    <div className="relative pl-6 border-l-2 border-zinc-200">
      <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-[#003366]"></div>
      <p className="text-xs font-serif italic text-amber-800 mb-1 font-medium">{date}</p>
      <h4 className="text-base font-bold text-zinc-900">{title}</h4>
      <p className="text-sm text-zinc-500">{subtitle}</p>
    </div>
  );
}

function HonorItem({ title, org, date }: { title: string; org: string; date: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0"></div>
      <div>
        <h4 className="text-sm font-semibold text-zinc-900">{title}</h4>
        <p className="text-xs text-zinc-500">{org} • {date}</p>
      </div>
    </div>
  );
}

function ExperienceItem({ role, desc, date }: { role: string; desc: string; date: string }) {
  return (
    <div className="p-3 bg-zinc-50 rounded-lg border border-zinc-100">
      <div className="flex justify-between items-center mb-1">
        <h4 className="text-sm font-semibold text-zinc-900">{role}</h4>
        <span className="text-xs font-serif italic text-zinc-500">{date}</span>
      </div>
      <p className="text-xs text-zinc-500">{desc}</p>
    </div>
  );
}

function LinkItem({ href, label }: { href: string; label: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center justify-between p-3 bg-white border border-zinc-200 rounded-xl hover:bg-amber-50/20 hover:border-amber-300 transition-all group"
    >
      <span className="text-sm font-medium text-zinc-700 group-hover:text-[#003366]">{label}</span>
      <ExternalLink size={14} className="text-zinc-400 group-hover:text-[#003366]" />
    </a>
  );
}
