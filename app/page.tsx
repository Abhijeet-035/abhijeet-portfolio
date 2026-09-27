 "use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  ServerCog,
  Terminal,
  X,
} from "lucide-react";
import { education, experience, profile, projects, skills } from "../data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65 } },
};

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main>
      <header className="nav">
        <a href="#home" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">&lt;/&gt;</span> Abhijeet
        </a>
        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
        <nav className={open ? "nav-links open" : "nav-links"}>
          {["Home", "About", "Skills", "Experience", "Projects", "Education", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}>{item}</a>
          ))}
        </nav>
      </header>

      <section className="hero section" id="home">
        <div className="grid-bg" />
        <div className="hero-content">
          <motion.p className="eyebrow" initial="hidden" animate="show" variants={fadeUp}>
            Hello, I&apos;m
          </motion.p>
          <motion.h1 initial="hidden" animate="show" variants={fadeUp}>
            Abhijeet <span>Kumar</span>
          </motion.h1>
          <motion.h2 initial="hidden" animate="show" variants={fadeUp}>
            Analyst @ BNP Paribas <span className="dot">•</span> Aspiring DevOps Engineer
          </motion.h2>
          <motion.p className="hero-copy" initial="hidden" animate="show" variants={fadeUp}>
            I build, support and automate reliable applications using Linux, cloud,
            containers and modern development tools.
          </motion.p>
          <motion.div className="hero-actions" initial="hidden" animate="show" variants={fadeUp}>
            <a className="btn primary" href="#projects">View My Work <ArrowDown size={17} /></a>
            <a className="btn secondary" href={profile.resume}>Download Resume <Download size={17} /></a>
          </motion.div>
          <div className="social-row">
            <a href={profile.github} target="_blank" rel="noreferrer"><Github /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin /></a>
            <a href={profile.email}><Mail /></a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="terminal-card">
            <div className="terminal-top"><span /><span /><span /><b>abhijeet@portfolio:~</b></div>
            <div className="terminal-body">
              <p><span className="green">$</span> whoami</p>
              <p className="accent">abhijeet-kumar</p>
              <p><span className="green">$</span> role</p>
              <p className="accent">devops-engineer --aspiring</p>
              <p><span className="green">$</span> stack</p>
              <p className="accent">linux docker kubernetes aws</p>
              <p><span className="green">$</span> status</p>
              <p className="ok">● building & learning</p>
              <span className="cursor">_</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section about" id="about">
        <SectionTitle icon={<Code2 />} kicker="GET TO KNOW ME" title="About Me" />
        <div className="about-grid">
          <motion.div className="about-card glass" whileHover={{ y: -5 }}>
            <div className="avatar">AK</div>
            <div>
              <h3>Analyst & Tech Enthusiast</h3>
              <p>Focused on DevOps, application support, automation and cloud technologies.</p>
            </div>
          </motion.div>
          <div className="about-text">
            <p>
              I&apos;m an Analyst at BNP Paribas working in Application Production Support
              for Wealth Management. My work involves monitoring applications, troubleshooting
              incidents, validating data and improving operational efficiency through automation.
            </p>
            <p>
              I&apos;m building my career toward DevOps, with hands-on experience across Linux,
              Docker, Kubernetes, Jenkins, AWS, Terraform, Git, Python and application monitoring.
              I also enjoy building full-stack applications and experimenting with AI.
            </p>
          </div>
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <SectionTitle icon={<Terminal />} kicker="TOOLS I WORK WITH" title="Skills & Technologies" />
        <div className="skill-grid">
          {skills.map((skill, i) => (
            <motion.div className="skill" key={skill.name} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.025 }}>
              <span className="skill-icon"><ServerCog size={19} /></span>
              <span>{skill.name}</span>
              <small>{skill.group}</small>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section" id="experience">
        <SectionTitle icon={<BriefcaseBusiness />} kicker="MY JOURNEY" title="Experience" />
        <div className="timeline">
          {experience.map((item, i) => (
            <motion.article className="timeline-item" key={item.company + item.role} initial={{ opacity: 0, x: i % 2 ? 30 : -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="timeline-dot" />
              <div className="timeline-card glass">
                <span className="period">{item.period}</span>
                <h3>{item.role}</h3>
                <h4>{item.company}</h4>
                <p>{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <SectionTitle icon={<Code2 />} kicker="SELECTED WORK" title="Projects" />
        <div className="project-grid">
          {projects.map((project, i) => (
            <motion.article className="project-card" key={project.title} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <div className="project-number">0{i + 1}</div>
              <span className="project-category">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="stack">{project.stack.map((x) => <span key={x}>{x}</span>)}</div>
              <div className="project-links">
                <a href={project.github}>GitHub <Github size={16} /></a>
                <a href={project.demo}>Live Demo <ArrowUpRight size={16} /></a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section education" id="education">
        <SectionTitle icon={<GraduationCap />} kicker="ACADEMIC BACKGROUND" title="Education" />
        <div className="education-grid">
          {education.map((item) => (
            <div className="education-card glass" key={item.title}>
              <GraduationCap />
              <div><span>{item.period}</span><h3>{item.title}</h3><p>{item.institution}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="section contact" id="contact">
        <div className="contact-card">
          <p className="eyebrow">LET&apos;S CONNECT</p>
          <h2>Have a project or opportunity in mind?</h2>
          <p>I&apos;m always interested in learning, building and connecting with people working on interesting technology.</p>
          <a className="btn primary" href={profile.email}>Get In Touch <Mail size={17} /></a>
        </div>
      </section>

      <footer>
        <span>© {new Date().getFullYear()} Abhijeet Kumar</span>
        <span>Built with Next.js & TypeScript</span>
      </footer>

      <a className="top-btn" href="#home" aria-label="Back to top"><ArrowUp /></a>
    </main>
  );
}

function SectionTitle({ icon, kicker, title }: { icon: React.ReactNode; kicker: string; title: string }) {
  return (
    <div className="section-title">
      <span className="section-icon">{icon}</span>
      <p>{kicker}</p>
      <h2>{title}</h2>
    </div>
  );
}