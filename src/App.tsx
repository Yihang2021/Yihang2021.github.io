import { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  CircleDot,
  Code2,
  Download,
  ExternalLink,
  FlaskConical,
  Github,
  GraduationCap,
  Languages,
  Lightbulb,
  Mail,
  MapPin,
  Menu,
  Quote,
  Sparkles,
  X,
} from 'lucide-react';

type Language = 'zh' | 'en';

const copy = {
  zh: {
    nav: ['关于我', '研究方向', '项目经历', '教育经历'],
    eyebrow: 'AI × Education × Human Potential',
    title: '把好奇心，做成可以被使用的东西。',
    intro: '我是邢祎航，一名关注人工智能教育、智能体系统与学习科学的研究者和产品实践者。',
    location: '中国科学技术大学 · 合肥 / 北京',
    cta: '看看我在做什么',
    contact: '与我交流',
    aboutLabel: '01 / 关于我',
    aboutTitle: '在研究与真实世界之间搭一座桥。',
    aboutBody: '我相信好的技术应该让更多人理解复杂问题、获得更好的学习体验，并拥有把想法变成行动的能力。现在，我正在把数据科学训练、教育研究和产品思维放在同一张桌子上。',
    quote: '弱小和无知不是生存的障碍，傲慢才是。',
    interests: ['AI for Education', 'LLM Agents', 'Learning Sciences', 'Product Building'],
    researchLabel: '02 / 研究方向',
    researchTitle: '我正在追问的几个问题',
    researchCards: [
      ['01', '智能体如何更可靠？', '研究工具增强大模型在复杂任务中的纠错、反思与预防机制，让 AI 在关键场景中更值得信任。', 'Error Prevention · Tool-augmented LLM'],
      ['02', 'AI 如何真正帮助学习？', '关注生成式 AI 如何支持教师、学生和学校，把“会回答”推进到“会教、会学、会成长”。', 'AI for Education · Learning Design'],
      ['03', '研究如何走向产品？', '把研究洞见转成可试用、可评估、可持续迭代的教育产品，连接学校、教师和学习者。', 'Research-to-Product · EdTech'],
    ],
    workLabel: '03 / 项目经历',
    workTitle: '正在发生的事',
    workItems: [
      ['新荷学者研究项目', '中国科学技术大学少年班学院 · 2025 — 2026', '工具增强大模型智能体纠错的预防机制', '进行中'],
      ['大学生研究计划', '中国科学技术大学 · 2025 — 2026', '围绕 LLM Agent 可靠性展开实验与分析', '进行中'],
      ['吴大猷学者暑期研究', '台湾清华大学 · 2025', '生态统计模型的仿真比较研究', '已完成'],
    ],
    educationLabel: '04 / 教育经历',
    educationTitle: '从数据科学出发，走向教育科技。',
    timeline: [
      ['2027 —', '北京大学教育学院', '科学与技术教育 · 专业硕士（拟）'],
      ['2023 — 2027', '中国科学技术大学', '数据科学与大数据技术 · 本科'],
      ['Now', '个人实验室', '阅读、写作、做实验，也做一点真正有人使用的东西。'],
    ],
    strengths: ['数据科学与统计建模', 'Python / TypeScript / React', '研究设计与快速原型', '中文 / English'],
    contactTitle: '如果你也在认真做一件事，欢迎来找我。',
    contactBody: '研究合作、教育产品、AI 应用，或者一场有意思的讨论，都可以从一封邮件开始。',
    footer: '持续学习，持续建造。',
    cv: '下载简历',
  },
  en: {
    nav: ['About', 'Research', 'Projects', 'Education'],
    eyebrow: 'AI × Education × Human Potential',
    title: 'Turning curiosity into things people can use.',
    intro: 'I am Yihang Xing — a researcher and builder exploring AI for education, reliable agentic systems, and learning sciences.',
    location: 'USTC · Hefei / Beijing, China',
    cta: 'Explore my work',
    contact: 'Get in touch',
    aboutLabel: '01 / About',
    aboutTitle: 'Building a bridge between research and the real world.',
    aboutBody: 'I believe technology should help more people understand complex ideas, learn better, and turn intention into action. I am bringing data science, education research, and product thinking to the same table.',
    quote: 'Weakness and ignorance are not obstacles to survival. Arrogance is.',
    interests: ['AI for Education', 'LLM Agents', 'Learning Sciences', 'Product Building'],
    researchLabel: '02 / Research',
    researchTitle: 'Questions I am working on',
    researchCards: [
      ['01', 'How can agents become more reliable?', 'Studying prevention, reflection, and recovery mechanisms for tool-augmented LLMs in complex tasks.', 'Error Prevention · Tool-augmented LLM'],
      ['02', 'How can AI genuinely support learning?', 'Exploring how generative AI can support teachers, students, and schools beyond simply producing answers.', 'AI for Education · Learning Design'],
      ['03', 'How does research become a product?', 'Turning research insights into testable, measurable, and useful tools for schools and learners.', 'Research-to-Product · EdTech'],
    ],
    workLabel: '03 / Projects',
    workTitle: 'What is happening now',
    workItems: [
      ['New Lotus Scholar Research Program', 'USTC School of the Gifted Young · 2025 — 2026', 'Error prevention in tool-augmented LLM agents', 'Ongoing'],
      ['Undergraduate Research Program', 'University of Science and Technology of China · 2025 — 2026', 'Experiments and analysis on reliable LLM agents', 'Ongoing'],
      ['Ta-You Wu Scholars Summer Research', 'National Tsing Hua University · 2025', 'Simulation and comparison of ecological statistical models', 'Completed'],
    ],
    educationLabel: '04 / Education',
    educationTitle: 'From data science towards education technology.',
    timeline: [
      ['2027 —', 'Peking University Graduate School of Education', 'M.Ed. in Science & Technology Education (incoming)'],
      ['2023 — 2027', 'University of Science and Technology of China', 'B.S. in Data Science and Big Data Technology'],
      ['Now', 'Personal Lab', 'Reading, writing, experimenting — and building things people can actually use.'],
    ],
    strengths: ['Data science & statistical modeling', 'Python / TypeScript / React', 'Research design & rapid prototyping', '中文 / English'],
    contactTitle: 'If you are building something seriously, say hello.',
    contactBody: 'Research, education products, AI applications, or a thoughtful conversation — it can start with an email.',
    footer: 'Keep learning. Keep building.',
    cv: 'Download CV',
  },
} as const;

function App() {
  const [lang, setLang] = useState<Language>('zh');
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const t = copy[lang];

  const navIds = ['about', 'research', 'projects', 'education'];
  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };
  const copyEmail = async () => {
    try { await navigator.clipboard?.writeText('Oliveira@mail.ustc.edu.cn'); } catch { /* clipboard permissions can be unavailable */ }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="topbar">
        <a className="brand" href="#top" onClick={() => goTo('top')} aria-label="Yihang Xing home">
          <span className="brand-mark">YX</span>
          <span className="brand-name">Yihang Xing</span>
        </a>
        <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
          {t.nav.map((item, index) => <button key={item} onClick={() => goTo(navIds[index])}>{item}</button>)}
          <a href="mailto:Oliveira@mail.ustc.edu.cn" className="nav-contact">{t.contact} <ArrowUpRight size={15} /></a>
        </nav>
        <div className="topbar-actions">
          <button className="language-button" onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')} aria-label="Switch language">
            <Languages size={16} /> {lang === 'zh' ? 'EN' : '中'}
          </button>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="eyebrow"><span className="eyebrow-dot" /> {t.eyebrow}</motion.div>
            <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .08 }}>{t.title}</motion.h1>
            <motion.p className="hero-intro" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .16 }}>{t.intro}</motion.p>
            <motion.div className="hero-meta" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .24 }}><MapPin size={16} /> {t.location}</motion.div>
            <motion.div className="hero-actions" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .3 }}>
              <button className="button button-primary" onClick={() => goTo('research')}>{t.cta} <ArrowUpRight size={17} /></button>
              <button className="button button-ghost" onClick={copyEmail}>{copied ? <Check size={17} /> : <Mail size={17} />} {copied ? (lang === 'zh' ? '已复制邮箱' : 'Email copied') : t.contact}</button>
            </motion.div>
          </div>
          <motion.div className="hero-visual" initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .6 }}>
            <div className="orbit orbit-a" /><div className="orbit orbit-b" />
            <div className="portrait-card"><img src="./Avat.jpg" alt="Yihang Xing" /><div className="portrait-caption"><span>AI × education</span><span className="live-dot">●</span></div></div>
            <div className="floating-note note-top"><Sparkles size={14} /><span>build with care</span></div>
            <div className="floating-note note-bottom"><CircleDot size={14} /><span>learning in public</span></div>
          </motion.div>
        </section>

        <section className="marquee-strip"><div className="marquee-track"><span>RESEARCH</span><span>EDUCATION</span><span>AI AGENTS</span><span>PRODUCT</span><span>RESEARCH</span><span>EDUCATION</span><span>AI AGENTS</span><span>PRODUCT</span></div></section>

        <section id="about" className="section-wrap content-section about-section">
          <div className="section-kicker">{t.aboutLabel}</div>
          <div className="about-grid"><div><h2>{t.aboutTitle}</h2><p className="lead-copy">{t.aboutBody}</p><div className="quote-card"><Quote size={21} /><p>{t.quote}</p></div></div><div className="about-aside"><div className="aside-label">FOCUS AREAS</div><div className="pill-list">{t.interests.map((item) => <span key={item}>{item}</span>)}</div><div className="mini-facts"><div><strong>01</strong><span>{lang === 'zh' ? '研究主线' : 'research thread'}</span></div><div><strong>02</strong><span>{lang === 'zh' ? '正在构建' : 'things building'}</span></div><div><strong>∞</strong><span>{lang === 'zh' ? '持续好奇' : 'curiosity'}</span></div></div></div></div>
        </section>

        <section id="research" className="section-wrap content-section research-section">
          <div className="section-heading"><div><div className="section-kicker">{t.researchLabel}</div><h2>{t.researchTitle}</h2></div><Lightbulb className="heading-icon" size={42} strokeWidth={1.4} /></div>
          <div className="research-grid">{t.researchCards.map(([number, title, body, tag]) => <motion.article whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 300 }} className="research-card" key={number}><div className="card-number">{number}</div><h3>{title}</h3><p>{body}</p><div className="card-tag">{tag}</div><ChevronRight className="card-arrow" size={20} /></motion.article>)}</div>
        </section>

        <section id="projects" className="section-wrap content-section projects-section">
          <div className="section-heading"><div><div className="section-kicker">{t.workLabel}</div><h2>{t.workTitle}</h2></div><FlaskConical className="heading-icon" size={42} strokeWidth={1.4} /></div>
          <div className="project-list">{t.workItems.map(([title, meta, detail, status], index) => <article className="project-row" key={title}><div className="project-index">0{index + 1}</div><div className="project-main"><h3>{title}</h3><div className="project-meta">{meta}</div><p>{detail}</p></div><span className={`status status-${status === 'Ongoing' || status === '进行中' ? 'active' : 'done'}`}>{status}</span><ArrowUpRight className="project-arrow" size={20} /></article>)}</div>
        </section>

        <section id="education" className="section-wrap content-section education-section">
          <div className="section-heading"><div><div className="section-kicker">{t.educationLabel}</div><h2>{t.educationTitle}</h2></div><GraduationCap className="heading-icon" size={42} strokeWidth={1.4} /></div>
          <div className="education-grid"><div className="timeline">{t.timeline.map(([date, school, detail]) => <div className="timeline-item" key={date}><div className="timeline-dot" /><div className="timeline-date">{date}</div><div><h3>{school}</h3><p>{detail}</p></div></div>)}</div><div className="skills-card"><div className="aside-label">TOOLKIT</div>{t.strengths.map((skill) => <div className="skill-row" key={skill}><span>{skill}</span><ChevronRight size={16} /></div>)}<div className="skill-icons"><Code2 size={20} /><BookOpen size={20} /><BriefcaseBusiness size={20} /></div></div></div>
        </section>

        <section className="contact-section section-wrap"><div className="contact-inner"><div className="section-kicker">05 / {lang === 'zh' ? '保持联系' : 'Keep in touch'}</div><h2>{t.contactTitle}</h2><p>{t.contactBody}</p><div className="contact-actions"><a className="button button-light" href="mailto:Oliveira@mail.ustc.edu.cn"><Mail size={17} /> Oliveira@mail.ustc.edu.cn <ArrowUpRight size={16} /></a><a className="social-link" href="https://github.com/Yihang2021" target="_blank" rel="noreferrer"><Github size={19} /> GitHub</a></div></div></section>
      </main>

      <footer className="footer section-wrap"><span>© {new Date().getFullYear()} Yihang Xing</span><span>{t.footer}</span><a href="#top" onClick={() => goTo('top')}>Back to top ↑</a></footer>
    </div>
  );
}

export default App;
