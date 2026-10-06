import { useState } from 'react';
import {
  ArrowUpRight,
  Check,
  Github,
  Languages,
  Mail,
  MapPin,
  Menu,
  X,
} from 'lucide-react';

type Language = 'zh' | 'en';

const content = {
  zh: {
    nav: ['关于', '研究兴趣', '项目经历', '教育经历', '联系方式'],
    name: '邢祎航',
    roman: 'Yihang Xing',
    role: '数据科学与教育技术研究',
    intro: '中国科学技术大学少年班学院数据科学与大数据技术专业本科生，关注教育人工智能、学习科学与可靠的智能体系统。',
    next: '拟于 2027 年进入北京大学教育学院科学与技术教育专业硕士阶段。',
    location: '合肥 / 北京，中国',
    aboutLabel: '关于我',
    aboutTitle: '在数据科学与教育研究之间工作。',
    aboutBody: '我目前在中国科学技术大学学习数据科学与大数据技术，同时关注技术如何进入真实的学习与教学场景。我的工作主要围绕三个问题展开：学习是如何发生的，人工智能能够提供什么帮助，以及这些帮助是否经过了认真验证。',
    focusLabel: '研究兴趣',
    focusTitle: '我目前关注的方向',
    focusItems: [
      ['教育人工智能', '生成式人工智能在学习设计、教师支持和学校场景中的应用。'],
      ['智能体可靠性', '工具增强大模型在复杂任务中的纠错、反思与预防机制。'],
      ['学习科学', '结合数据、实验与教育理论理解学习过程。'],
      ['竞赛教育平台', '面向高中学科竞赛的资源、交流与教练—学生协作工具。'],
    ],
    projectsLabel: '项目经历',
    projectsTitle: '部分研究与实践经历',
    projects: [
      ['2025 — 2026', '“新荷学者”研究项目', '中国科学技术大学少年班学院', '工具增强大模型智能体纠错的预防机制。'],
      ['2025 — 2026', '大学生研究计划', '中国科学技术大学', '围绕 LLM Agent 可靠性开展实验与分析。'],
      ['2025', '“吴大猷学者”暑期研究项目', '台湾清华大学', '生态统计模型的仿真比较研究。'],
    ],
    educationLabel: '教育经历',
    educationTitle: '教育经历',
    education: [
      ['2027 —', '北京大学教育学院', '科学与技术教育 · 专业硕士（拟）'],
      ['2023 — 2027', '中国科学技术大学少年班学院', '数据科学与大数据技术 · 本科'],
    ],
    skillsLabel: '技能与语言',
    skills: ['数据科学与统计建模', 'Python / TypeScript / React', '研究设计与原型开发', '中文 / English'],
    contactLabel: '联系方式',
    contactTitle: '欢迎交流研究与实践。',
    contactBody: '如果你希望讨论教育人工智能、智能体系统或相关项目，可以通过邮件或 GitHub 联系我。',
    copy: '复制邮箱',
    copied: '已复制',
    footer: '个人主页 · 最后更新 2026',
  },
  en: {
    nav: ['About', 'Research', 'Projects', 'Education', 'Contact'],
    name: 'Yihang Xing',
    roman: '邢祎航',
    role: 'Data Science & Education Technology',
    intro: 'Undergraduate student in Data Science and Big Data Technology at USTC School of the Gifted Young. I work on AI for education, learning sciences, and reliable agentic systems.',
    next: 'Incoming M.Ed. student in Science and Technology Education at Peking University in 2027.',
    location: 'Hefei / Beijing, China',
    aboutLabel: 'About',
    aboutTitle: 'Working between data science and education research.',
    aboutBody: 'I study data science at the University of Science and Technology of China while exploring how technology can enter real learning and teaching contexts. My work is organized around three questions: how learning happens, where artificial intelligence can help, and how those claims can be evaluated carefully.',
    focusLabel: 'Research interests',
    focusTitle: 'Current areas of interest',
    focusItems: [
      ['AI for Education', 'Generative AI for learning design, teacher support, and school settings.'],
      ['Agent reliability', 'Error prevention, reflection, and recovery in tool-augmented language models.'],
      ['Learning sciences', 'Understanding learning through data, experiments, and educational theory.'],
      ['Competition education', 'Resources, discussion, and coach–student collaboration for high-school competitions.'],
    ],
    projectsLabel: 'Projects',
    projectsTitle: 'Selected research and practice',
    projects: [
      ['2025 — 2026', 'New Lotus Scholar Research Program', 'USTC School of the Gifted Young', 'Error prevention in tool-augmented LLM agents.'],
      ['2025 — 2026', 'Undergraduate Research Program', 'University of Science and Technology of China', 'Experiments and analysis on reliable LLM agents.'],
      ['2025', 'Ta-You Wu Scholars Summer Research', 'National Tsing Hua University', 'Simulation and comparison of ecological statistical models.'],
    ],
    educationLabel: 'Education',
    educationTitle: 'Education',
    education: [
      ['2027 —', 'Peking University Graduate School of Education', 'M.Ed. in Science and Technology Education (incoming)'],
      ['2023 — 2027', 'USTC School of the Gifted Young', 'B.S. in Data Science and Big Data Technology'],
    ],
    skillsLabel: 'Skills & languages',
    skills: ['Data science & statistical modeling', 'Python / TypeScript / React', 'Research design & prototyping', '中文 / English'],
    contactLabel: 'Contact',
    contactTitle: 'Open to thoughtful conversations.',
    contactBody: 'For discussions about AI for education, agentic systems, or related projects, please reach out by email or GitHub.',
    copy: 'Copy email',
    copied: 'Copied',
    footer: 'Personal homepage · Last updated 2026',
  },
} as const;

function App() {
  const [lang, setLang] = useState<Language>('zh');
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const t = content[lang];
  const navIds = ['about', 'research', 'projects', 'education', 'contact'];

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard?.writeText('Oliveira@mail.ustc.edu.cn');
    } catch {
      // Clipboard access may be unavailable in some browsers.
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="page">
      <header className="site-header">
        <a className="wordmark" href="#top" onClick={() => goTo('top')}>
          <span className="wordmark-name">{t.name}</span>
          <span className="wordmark-sub">{t.roman}</span>
        </a>
        <nav className={menuOpen ? 'site-nav open' : 'site-nav'} aria-label="Primary navigation">
          {t.nav.map((item, index) => (
            <button key={item} onClick={() => goTo(navIds[index])}>{item}</button>
          ))}
        </nav>
        <div className="header-actions">
          <button className="language-toggle" onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')} aria-label="Switch language">
            <Languages size={15} /> {lang === 'zh' ? 'EN' : '中'}
          </button>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="intro-section content-width">
          <div className="intro-copy">
            <div className="plain-label">{t.role}</div>
            <h1>{t.name}<span>{t.roman}</span></h1>
            <p className="intro-lead">{t.intro}</p>
            <p className="intro-next">{t.next}</p>
            <div className="intro-meta"><MapPin size={15} /> {t.location}</div>
            <div className="intro-links">
              <button className="text-button" onClick={() => goTo('research')}>{t.focusLabel} <ArrowUpRight size={15} /></button>
              <a className="text-button muted" href="mailto:Oliveira@mail.ustc.edu.cn"><Mail size={15} /> {t.contactLabel}</a>
            </div>
          </div>
          <div className="portrait-wrap">
            <img src="./Avat.jpg" alt="Yihang Xing" />
            <p>{t.name} · {t.role}</p>
          </div>
        </section>

        <section id="about" className="content-width page-section">
          <div className="section-label">01</div>
          <div className="section-content">
            <div className="section-heading">
              <p className="plain-label">{t.aboutLabel}</p>
              <h2>{t.aboutTitle}</h2>
            </div>
            <p className="body-copy">{t.aboutBody}</p>
          </div>
        </section>

        <section id="research" className="content-width page-section">
          <div className="section-label">02</div>
          <div className="section-content">
            <div className="section-heading">
              <p className="plain-label">{t.focusLabel}</p>
              <h2>{t.focusTitle}</h2>
            </div>
            <div className="research-list">
              {t.focusItems.map(([title, body]) => (
                <article className="research-item" key={title}>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="content-width page-section">
          <div className="section-label">03</div>
          <div className="section-content">
            <div className="section-heading">
              <p className="plain-label">{t.projectsLabel}</p>
              <h2>{t.projectsTitle}</h2>
            </div>
            <div className="project-list">
              {t.projects.map(([date, title, place, detail]) => (
                <article className="project-item" key={title}>
                  <div className="project-date">{date}</div>
                  <div className="project-info"><h3>{title}</h3><p className="project-place">{place}</p><p>{detail}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="content-width page-section">
          <div className="section-label">04</div>
          <div className="section-content two-column">
            <div>
              <div className="section-heading">
                <p className="plain-label">{t.educationLabel}</p>
                <h2>{t.educationTitle}</h2>
              </div>
              <div className="education-list">
                {t.education.map(([date, school, detail]) => (
                  <article className="education-item" key={school}>
                    <div className="project-date">{date}</div>
                    <div><h3>{school}</h3><p>{detail}</p></div>
                  </article>
                ))}
              </div>
            </div>
            <div className="skills-block">
              <p className="plain-label">{t.skillsLabel}</p>
              <ul>{t.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
            </div>
          </div>
        </section>

        <section id="contact" className="content-width page-section contact-section">
          <div className="section-label">05</div>
          <div className="section-content">
            <div className="section-heading">
              <p className="plain-label">{t.contactLabel}</p>
              <h2>{t.contactTitle}</h2>
            </div>
            <p className="body-copy">{t.contactBody}</p>
            <div className="contact-links">
              <a href="mailto:Oliveira@mail.ustc.edu.cn"><Mail size={16} /> Oliveira@mail.ustc.edu.cn</a>
              <button onClick={copyEmail}>{copied ? <Check size={16} /> : <Mail size={16} />} {copied ? t.copied : t.copy}</button>
              <a href="https://github.com/Yihang2021" target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer content-width">
        <span>© 2026 Yihang Xing</span>
        <span>{t.footer}</span>
      </footer>
    </div>
  );
}

export default App;
