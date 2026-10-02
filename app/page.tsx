"use client";

import { useEffect, useState } from "react";
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
  Monitor,
  Moon,
  ServerCog,
  Sun,
  Terminal,
  X,
} from "lucide-react";
import { education, experience, profile, projects, skills } from "../data/portfolio";

const roles = [
  "DevOps Engineer",
  "Application Support Analyst",
  "Cloud Enthusiast",
  "Automation Enthusiast",
];

export default function Home() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"system" | "light" | "dark">("system");
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem("theme") as
      | "system"
      | "light"
      | "dark"
      | null;

    if (saved) {
      setTheme(saved);
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;

    if (theme === "system") {
      localStorage.removeItem("theme");
    } else {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length);
    }, 2400);

    return () => clearInterval(timer);
  }, []);

  const cycleTheme = () => {
    setTheme(
      theme === "system"
        ? "light"
        : theme === "light"
          ? "dark"
          : "system"
    );
  };

  return (
    <main>
      <header className="nav">
        <a href="#home" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">&lt;/&gt;</span>
          Abhijeet
        </a>

        <div className="nav-actions">
          <button
            className="theme-btn"
            onClick={cycleTheme}
            aria-label={`Theme: ${theme}`}
            title={`Theme: ${theme}`}
          >
            {theme === "system" ? (
              <Monitor size={17} />
            ) : theme === "light" ? (
              <Sun size={17} />
            ) : (
              <Moon size={17} />
            )}
          </button>

          <button
            className="menu-btn"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        <nav className={open ? "nav-links open" : "nav-links"}>
          {[
            "Home",
            "About",
            "Skills",
            "Education",
            "Projects",
            "Experience",
            "Contact",
          ].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero" id="home">
        <ParticleBackground />

        <div className="hero-content">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Abhijeet <span>Kumar</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            I am into{" "}
            <span className="typing-text">
              {roles[roleIndex]}
            </span>
          </motion.h2>

          <motion.p
            className="hero-copy"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            Analyst at BNP Paribas building reliable applications and
            exploring DevOps, cloud, automation and modern technologies.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <a className="btn primary" href="#about">
              About Me <ArrowDown size={17} />
            </a>

            <a className="btn secondary" href={profile.resume}>
              Resume <Download size={17} />
            </a>
          </motion.div>

          <motion.div
            className="social-row"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <Linkedin />
            </a>

            <a href={profile.github} target="_blank" rel="noreferrer">
              <Github />
            </a>

            <a href={profile.email}>
              <Mail />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero-profile"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
        >
          <div className="profile-circle">
            <img
              src="/abhijeet-profile.jpg"
              alt="Abhijeet Kumar"
              className="profile-photo"
            />
          </div>
        </motion.div>
      </section>

      <section className="section about" id="about">
        <SectionTitle
          icon={<Code2 />}
          kicker="GET TO KNOW ME"
          title="About Me"
        />

        <div className="about-grid">
          <motion.div
            className="about-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="avatar">
              <img
                src="/abhijeet-profile.jpg"
                alt="Abhijeet Kumar"
                className="about-photo"
              />
            </div>

            <div>
              <h3>Analyst & Tech Enthusiast</h3>
              <span>Application Production Support</span>
              <p>
                Focused on DevOps, automation, cloud technologies and
                application reliability.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p>
              I&apos;m an Analyst at BNP Paribas working in Application
              Production Support for Wealth Management. My work involves
              monitoring applications, troubleshooting incidents, validating
              data and improving operational efficiency through automation.
            </p>

            <p>
              I&apos;m building my career toward DevOps, with hands-on
              experience across Linux, Docker, Kubernetes, Jenkins, AWS,
              Terraform, Git, Python and application monitoring.
            </p>

            <div className="about-info">
              <span>
                <strong>Email:</strong> {profile.email.replace("mailto:", "")}
              </span>
              <span>
                <strong>Location:</strong> India
              </span>
            </div>

            <a className="btn primary small-btn" href={profile.resume}>
              Resume <ArrowUpRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      <section className="skills-section" id="skills">
        <SectionTitle
          icon={<Terminal />}
          kicker="WHAT I WORK WITH"
          title="Skills & Abilities"
        />

        <div className="skill-grid">
          {skills.map((skill, index) => (
            <motion.div
              className="skill"
              key={skill.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <span className="skill-icon">
                <ServerCog size={20} />
              </span>

              <strong>{skill.name}</strong>
              <small>{skill.group}</small>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section education" id="education">
        <SectionTitle
          icon={<GraduationCap />}
          kicker="ACADEMIC BACKGROUND"
          title="My Education"
        />

        <p className="quote">
          Education builds the foundation for continuous learning.
        </p>

        <div className="education-grid">
          {education.map((item, index) => (
            <motion.div
              className="education-card"
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <div className="education-icon">
                <GraduationCap />
              </div>

              <div>
                <span>{item.period}</span>
                <h3>{item.title}</h3>
                <p>{item.institution}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="projects-section" id="projects">
        <SectionTitle
          icon={<Code2 />}
          kicker="MY WORK"
          title="Projects Made"
        />

        <div className="project-grid">
          {projects.map((project, index) => (
            <motion.article
              className="project-card"
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="project-number">
                0{index + 1}
              </div>

              <span className="project-category">
                {project.category}
              </span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="stack">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className="project-links">
                {project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code <Github size={15} />
                  </a>
                )}

                {project.demo !== "#" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo <ArrowUpRight size={15} />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section experience" id="experience">
        <SectionTitle
          icon={<BriefcaseBusiness />}
          kicker="MY JOURNEY"
          title="Experience"
        />

        <div className="timeline">
          {experience.map((item, index) => (
            <motion.article
              className={`timeline-item ${index % 2 === 0 ? "right" : "left"
                }`}
              key={item.company + item.role}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? 50 : -50,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="timeline-dot" />

              <div className="timeline-card">
                <span>{item.period}</span>
                <h3>{item.role}</h3>
                <h4>{item.company}</h4>
                <p>{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <SectionTitle
          icon={<Mail />}
          kicker="LET'S CONNECT"
          title="Get In Touch"
        />

        <motion.div
          className="contact-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="contact-icon">
            <Mail size={42} />
          </div>

          <div>
            <h2>Let&apos;s build something interesting.</h2>
            <p>
              Have an opportunity, project or just want to connect?
              Feel free to reach out.
            </p>

            <a className="btn primary" href={profile.email}>
              Contact Me <Mail size={17} />
            </a>
          </div>
        </motion.div>
      </section>

      <footer>
        <div>
          <h3>Abhijeet&apos;s Portfolio</h3>
          <p>
            Analyst at BNP Paribas | Aspiring DevOps Engineer
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#education">Education</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
          </div>
        </div>

        <div>
          <h3>Connect</h3>

          <div className="footer-social">
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={17} />
            </a>

            <a href={profile.github} target="_blank" rel="noreferrer">
              <Github size={17} />
            </a>

            <a href={profile.email}>
              <Mail size={17} />
            </a>
          </div>
        </div>
      </footer>

      <a className="top-btn" href="#home" aria-label="Back to top">
        <ArrowUp size={17} />
      </a>
    </main>
  );
}

function SectionTitle({
  icon,
  kicker,
  title,
}: {
  icon: React.ReactNode;
  kicker: string;
  title: string;
}) {
  return (
    <motion.div
      className="section-title"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <span className="section-icon">{icon}</span>
      <p>{kicker}</p>
      <h2>{title}</h2>
    </motion.div>
  );
}

function ParticleBackground() {
  useEffect(() => {
    const canvas = document.getElementById(
      "particles"
    ) as HTMLCanvasElement | null;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    let animationFrame = 0;

    const particles = Array.from({ length: 65 }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.0008,
      vy: (Math.random() - 0.5) * 0.0008,
      size: Math.random() * 2 + 1,
    }));

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const light = document.documentElement.dataset.theme === "light";

      const particleColor = light
        ? "rgba(70,70,90,.38)"
        : "rgba(150,170,190,.35)";

      const lineColor = light
        ? "rgba(70,70,90,.13)"
        : "rgba(150,170,190,.12)";

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > 1) particle.vx *= -1;
        if (particle.y < 0 || particle.y > 1) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(
          particle.x * canvas.width,
          particle.y * canvas.height,
          particle.size,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = particleColor;
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];

          const dx = (a.x - b.x) * canvas.width;
          const dy = (a.y - b.y) * canvas.height;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 130) {
            ctx.beginPath();
            ctx.moveTo(a.x * canvas.width, a.y * canvas.height);
            ctx.lineTo(b.x * canvas.width, b.y * canvas.height);
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      animationFrame = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas id="particles" className="particles" />;
}