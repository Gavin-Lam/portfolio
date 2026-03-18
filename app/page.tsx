"use client";

import { useEffect, useRef, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ArrowDown,
  Terminal,
  ChevronRight,
} from "lucide-react";
import { div } from "framer-motion/m";

// ─── DATA ────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "about", href: "#about" },
  { label: "experience", href: "#experience" },
  { label: "projects", href: "#projects" },
  { label: "skills", href: "#skills" },
  { label: "contact", href: "#contact" },
];

const ROLES = [
  "Full-Stack Engineer",
  "Backend Engineer",
  "ML / AI Engineer",
  "DevOps Engineer",
];

const EXPERIENCES = [
  {
    company: "Confidential Company (NDA)",
    role: "Database & Backend Engineer",
    period: "Sep 2025 – Present",
    stack: ["Next.js", "SSMS", "Azure"],
    bullets: [
      "Designed and implemented SQL Server schemas and queries to support scalable backend services.",
      "Built RESTful API endpoints integrated with Next.js frontend applications.",
      "Collaborated in an agile workflow to translate business requirements into backend architecture decisions.",
      "Increased processing efficiency by 40% by architecting a centralized Next.js + SQL Server application.",
    ],
  },
  {
    company: "Creative Intell",
    role: "Software Engineer Intern",
    period: "Sep 2024 – Jan 2025",
    stack: ["JavaScript", "Python"],
    bullets: [
      "Preprocessed specialized data to fine-tune a large language model, enhancing accuracy and contextual relevance.",
      "Architected a responsive glossary page with dynamic data handling, improving usability and content scalability.",
    ],
  },
  {
    company: "Stevens Institute of Technology",
    role: "Course Assistant — Systems & Security",
    period: "Sep 2025 – Dec 2025",
    stack: ["Linux", "C"],
    bullets: [
      "Assisted in instructing students on cybersecurity concepts: network security, encryption, and threat mitigation.",
      "Supported lab sessions and guided students through hands-on pwn.college exercises.",
      "Developed course materials and troubleshot labs in collaboration with the professor.",
    ],
  },
];

const PROJECTS = [
  {
    title: "ToDo — Full-Stack Task Manager",
    period: "Mar 2025 – May 2025",
    description:
      "Full-stack task management platform built with React and Node.js following Scrum methodology. Features RESTful APIs for task creation, prioritization, and user persistence, containerized with Docker.",
    stack: ["React", "Node.js", "TypeScript", "PostgreSQL", "Docker", "Jira"],
    github: "https://github.com/ZhangTerrence/todo",
    live: null,
    highlight: "Scrum • CI/CD • Containerized",
  },
  {
    title: "PUBG Player Performance Prediction",
    period: "Dec 2025",
    description:
      "ML pipeline processing 6.3M+ PUBG player records to predict top 10% match placement. Benchmarked 10+ models including LightGBM, Random Forest, ANNs, SVM, and CART with hyperparameter tuning.",
    stack: ["Python", "PyTorch", "Pandas", "NumPy", "Google Colab"],
    github: null,
    live: "https://colab.research.google.com/drive/1sUeBFpkITTe-BpNzlF5JCkLU0W91l3yP?usp=sharing",
    highlight: "~90% classification accuracy",
  },
  {
    title: "Enterprise CI/CD Pipeline",
    period: "Sep 2025 – Dec 2025",
    description:
      "Deployed and configured 3 integrated DevOps services (Perforce, Swarm, Jenkins) in a cloud Linux environment. Reduced manual build process from ~5 minutes to under 30 seconds per commit.",
    stack: ["Jenkins", "Docker", "Perforce", "Linux", "DigitalOcean"],
    github: "https://github.com/Gavin-Lam",
    live: null,
    highlight: "80% faster environment setup",
  },
  {
    title: "Extended SQL Query Engine",
    period: "May 2025",
    description:
      "Built a multi-pass query engine in Python to simulate SQL-style grouped aggregation using dynamic predicate evaluation and in-memory data structures. Designed a novel 'such that' clause extending SQL's expressiveness for advanced conditional logic across grouping variables.",
    stack: ["Python", "SQL", "PGAdmin"],
    github: "https://github.com/Gavin-Lam/562-Project",
    live: null,
    highlight: "Novel 'such that' SQL clause",
  },
  {
    title: "AVA — AI Health Voice Chatbot",
    period: "2025",
    description:
      "AI-powered voice chatbot designed to help users discuss mental and surface-level physical health concerns. Built as a team project, containerized with Docker and served via a Python web app accessible in-browser.",
    stack: ["Python", "JavaScript", "HTML/CSS", "Docker"],
    github: "https://github.com/cascadingluo/SSW590-team-7-project",
    live: null,
    highlight: "Voice-interactive AI health assistant",
  },
];

const SKILLS = {
  Languages: ["JavaScript", "TypeScript", "Python", "Java", "C", "C++", "SQL"],
  Frameworks: ["React", "Next.js", "Node.js", "Express.js", "LangChain"],
  "Databases & ML": [
    "PostgreSQL",
    "MySQL",
    "MSSQL",
    "MongoDB",
    "Pandas",
    "NumPy",
  ],
  "Cloud & DevOps": [
    "AWS",
    "Azure",
    "Docker",
    "Linux",
    "CI/CD",
    "Jenkins",
    "Prometheus",
    "Grafana",
    "Perforce",
    "Git",
  ],
};

// ─── HOOKS ───────────────────────────────────────────────────────────────────

function useTypewriter(words: string[], speed = 80, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setDisplay(current.slice(0, charIdx + 1));
          if (charIdx + 1 === current.length) {
            setTimeout(() => setDeleting(true), pause);
          } else {
            setCharIdx((c) => c + 1);
          }
        } else {
          setDisplay(current.slice(0, charIdx - 1));
          if (charIdx - 1 === 0) {
            setDeleting(false);
            setCharIdx(0);
            setWordIdx((w) => (w + 1) % words.length);
          } else {
            setCharIdx((c) => c - 1);
          }
        }
      },
      deleting ? speed / 2 : speed
    );
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

function useCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };
    const over = () => cursorRef.current?.classList.add("hovering");
    const out = () => cursorRef.current?.classList.remove("hovering");

    window.addEventListener("mousemove", move);
    document
      .querySelectorAll("a, button")
      .forEach((el) => el.addEventListener("mouseenter", over));
    document
      .querySelectorAll("a, button")
      .forEach((el) => el.addEventListener("mouseleave", out));

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return cursorRef;
}

function useScrollAnimation() {
  useEffect(() => {
    const els = document.querySelectorAll(".animate-on-scroll");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function Navbar({ onResumeClick }: { onResumeClick: () => void }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-bg/90 backdrop-blur-md border-b border-border"
          : "py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <span className="font-display font-bold text-accent text-lg tracking-tight">
          GL
        </span>
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-muted hover:text-accent text-sm font-mono transition-colors duration-200"
              >
                <span className="text-accent/50 mr-1">./</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={onResumeClick}
          className="hidden md:flex items-center gap-2 text-xs font-mono border border-accent text-accent px-4 py-2 hover:bg-accent hover:text-bg transition-all duration-200"
        >
          <Terminal size={12} />
          resume.pdf
        </button>
      </div>
    </nav>
  );
}

function Hero() {
  const role = useTypewriter(ROLES);

  return (
    <section className="relative min-h-screen flex flex-col justify-center grid-bg px-6 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-sky/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full pt-24">
        {/* Terminal prompt line */}
        <div className="flex items-center gap-2 text-muted text-sm font-mono mb-8 animate-fade-up">
          <span className="text-accent">~/portfolio</span>
          <ChevronRight size={14} className="text-accent" />
          <span>whoami</span>
        </div>

        <h1
          className="font-display font-extrabold leading-none mb-4 animate-fade-up"
          style={{ animationDelay: "0.1s", fontSize: "clamp(3rem, 10vw, 8rem)" }}
        >
          <span className="text-text-primary">Gavin</span>
          <br />
          <span className="text-accent glow">Lam.</span>
        </h1>

        <div
          className="flex items-center gap-3 mb-6 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="text-muted font-mono text-sm">$</span>
          <span className="font-mono text-xl md:text-2xl text-text-secondary">
            {role}
            <span className="animate-blink text-accent">|</span>
          </span>
        </div>

        <p
          className="text-text-secondary font-mono text-sm md:text-base max-w-xl leading-relaxed mb-10 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          CS Senior @ Stevens Institute of Technology. I build scalable
          backends, full-stack apps, and ML pipelines. Currently seeking
          full-time SWE roles for 2026.
        </p>

        <div
          className="flex flex-wrap items-center gap-4 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="#projects"
            className="flex items-center gap-2 bg-accent text-bg font-mono text-sm font-medium px-6 py-3 hover:bg-accent/80 transition-all duration-200"
          >
            view projects
            <ChevronRight size={14} />
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 border border-border text-text-secondary font-mono text-sm px-6 py-3 hover:border-accent hover:text-accent transition-all duration-200"
          >
            get in touch
          </a>
        </div>

        {/* Social links */}
        <div
          className="flex items-center gap-6 mt-10 animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          {[
            {
              href: "https://github.com/Gavin-Lam",
              icon: Github,
              label: "GitHub",
            },
            {
              href: "https://linkedin.com/in/gavin-g-lam/",
              icon: Linkedin,
              label: "LinkedIn",
            },
            {
              href: "mailto:gglam1371@gmail.com",
              icon: Mail,
              label: "Email",
            },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors duration-200"
              aria-label={label}
            >
              <Icon size={20} />
            </a>
          ))}
          <div className="h-px flex-1 bg-border max-w-[80px]" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted animate-bounce">
        <span className="text-xs font-mono">scroll</span>
        <ArrowDown size={14} />
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel label="about" index="01" />
        <div className="grid md:grid-cols-2 gap-16 mt-12">
          <div className="animate-on-scroll">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-6">
              Building things that{" "}
              <span className="text-accent">actually work.</span>
            </h2>
            <p className="text-text-secondary font-mono text-sm leading-loose mb-4">
              I&apos;m a Computer Science senior at Stevens Institute of
              Technology (expected May 2026), with hands-on experience across
              the full stack — from architecting SQL Server schemas and REST APIs
              to fine-tuning LLMs and building out CI/CD pipelines.
            </p>
            <p className="text-text-secondary font-mono text-sm leading-loose">
              I care about writing clean, maintainable code and building systems
              that scale. Whether it&apos;s a backend service handling thousands
              of records or an ML model hitting 90% accuracy on 6M+ rows, I like
              work that has measurable impact.
            </p>
          </div>
          <div className="animate-on-scroll" style={{ transitionDelay: "0.2s" }}>
            <div className="bg-surface border border-border p-6">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-accent/70" />
                <span className="ml-2 text-muted text-xs font-mono">
                  gavin.json
                </span>
              </div>
              <pre className="text-xs font-mono leading-loose overflow-x-auto">
                <code>
                  {`{
  "name": "Gavin Lam",
  "location": "Jersey City, NJ",
  "education": {
    "school": "Stevens Institute of Technology",
    "degree": "B.S. Computer Science",
    "graduation": "May 2026"
  },
  "interests": [
    "backend systems",
    "machine learning",
    "devops",
    "full-stack"
  ],
  "open_to_work": true
}`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const [active, setActive] = useState(0);
  const exp = EXPERIENCES[active];

  return (
    <section id="experience" className="py-28 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <SectionLabel label="experience" index="02" />
        <div className="mt-12 grid md:grid-cols-[220px_1fr] gap-8">
          {/* Tabs */}
          <div className="flex md:flex-col gap-1 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0">
            {EXPERIENCES.map((e, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`text-left text-xs font-mono px-4 py-3 border-b-2 md:border-b-0 md:border-l-2 whitespace-nowrap transition-all duration-200 ${
                  active === i
                    ? "border-accent text-accent bg-accent/5"
                    : "border-border text-muted hover:text-text-secondary hover:border-text-secondary"
                }`}
              >
                {e.company}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="animate-on-scroll">
            <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
              <h3 className="font-display text-xl font-semibold text-text-primary">
                {exp.role}
              </h3>
              <span className="text-xs font-mono text-muted">{exp.period}</span>
            </div>
            <p className="text-accent text-sm font-mono mb-4">{exp.company}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {exp.stack.map((s) => (
                <span key={s} className="tag">
                  {s}
                </span>
              ))}
            </div>
            <ul className="space-y-3">
              {exp.bullets.map((b, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-text-secondary text-sm font-mono leading-relaxed"
                >
                  <ChevronRight
                    size={14}
                    className="text-accent mt-1 flex-shrink-0"
                  />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const [active, setActive] = useState(0);
  const p = PROJECTS[active];

  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel label="projects" index="03" />

        <div className="mt-12 grid md:grid-cols-[1fr_320px] gap-6">

          {/* ── Spotlight (left, large) ── */}
          <div
            key={active}
            className="bg-surface border border-accent/30 p-10 flex flex-col animate-fade-up self-start"
          >
            <div className="flex items-start justify-between gap-4 mb-2">
              <h3 className="font-display font-bold text-text-primary text-3xl leading-tight">
                {p.title}
              </h3>
              <div className="flex gap-3 flex-shrink-0 pt-1">
                {p.github && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer"
                    className="text-muted hover:text-accent transition-colors">
                    <Github size={18} />
                  </a>
                )}
                {p.live && (
                  <a href={p.live} target="_blank" rel="noopener noreferrer"
                    className="text-muted hover:text-accent transition-colors">
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>

            <span className="text-xs font-mono text-accent/70 mb-6 block">
              ✦ {p.highlight}
            </span>

            <p className="text-text-secondary font-mono text-sm leading-loose flex-1 mb-8">
              {p.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span key={s} className="tag">{s}</span>
              ))}
            </div>

            <p className="text-muted text-xs font-mono mt-6">{p.period}</p>
          </div>

          {/* ── Sidebar thumbnails (right, stacked) ── */}
          <div className="flex flex-col gap-4 max-h-[500px] overflow-y-auto pr-1">
            {PROJECTS.map((proj, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`text-left p-5 border transition-all duration-250 group ${
                  active === i
                    ? "border-accent bg-accent/5"
                    : "border-border bg-surface hover:border-text-secondary/40"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`font-display font-semibold text-sm leading-snug transition-colors duration-200 ${
                    active === i ? "text-accent" : "text-text-primary group-hover:text-accent"
                  }`}>
                    {proj.title}
                  </span>
                  {active === i && (
                    <ChevronRight size={14} className="text-accent flex-shrink-0" />
                  )}
                </div>
                <span className="text-xs font-mono text-muted">{proj.period}</span>
                <div className="flex flex-wrap gap-1 mt-2">
                  {proj.stack.slice(0, 3).map((s) => (
                    <span key={s} className="text-xs font-mono text-muted/60 bg-border/40 px-1.5 py-0.5 rounded">
                      {s}
                    </span>
                  ))}
                  {proj.stack.length > 3 && (
                    <span className="text-xs font-mono text-muted/40">
                      +{proj.stack.length - 3}
                    </span>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-28 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <SectionLabel label="skills" index="04" />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(SKILLS).map(([category, items], i) => (
            <div
              key={category}
              className="animate-on-scroll bg-surface border border-border p-6 hover:border-accent/40 transition-all duration-300"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <h3 className="font-display font-semibold text-accent text-sm mb-4 pb-3 border-b border-border">
                {category}
              </h3>
              <ul className="space-y-2">
                {items.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-text-secondary text-xs font-mono"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent/50" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <SectionLabel label="contact" index="05" center />
        <h2 className="font-display text-4xl md:text-6xl font-bold text-text-primary mt-12 mb-4">
          Let&apos;s build something
          <br />
          <span className="text-accent glow">together.</span>
        </h2>
        <p className="text-text-secondary font-mono text-sm max-w-md mx-auto mb-10">
          I&apos;m actively looking for full-time SWE roles starting mid-2026.
          Open to full-stack, backend, or ML/AI positions. Let&apos;s talk.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:gglam1371@gmail.com"
            className="flex items-center gap-2 bg-accent text-bg font-mono text-sm font-medium px-8 py-4 hover:bg-accent/80 transition-all duration-200"
          >
            <Mail size={16} />
            gglam1371@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/gavin-g-lam/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-border text-text-secondary font-mono text-sm px-8 py-4 hover:border-accent hover:text-accent transition-all duration-200"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display font-bold text-accent">GL</span>
        <p className="text-muted text-xs font-mono">
          Built with Next.js + Tailwind CSS · {new Date().getFullYear()}
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Gavin-Lam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors"
          >
            <Github size={16} />
          </a>
          <a
            href="https://linkedin.com/in/gavin-g-lam/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}

function ResumeModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10"
      style={{ background: "rgba(8, 12, 16, 0.92)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl h-[90vh] bg-surface border border-border flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border flex-shrink-0">
          <div className="flex items-center gap-2">
            <Terminal size={14} className="text-accent" />
            <span className="font-mono text-sm text-text-secondary">
              Lam_Gavin_Resume.pdf
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="/resume.pdf"
              download="Lam_Gavin_Resume.pdf"
              className="flex items-center gap-2 text-xs font-mono border border-accent text-accent px-4 py-2 hover:bg-accent hover:text-bg transition-all duration-200"
            >
              download
              <ArrowDown size={12} />
            </a>
            <button
              onClick={onClose}
              className="text-muted hover:text-accent transition-colors font-mono text-lg leading-none"
              aria-label="Close"
            >
              ×
            </button>
          </div>
        </div>

        {/* PDF iframe */}
        <iframe
          src="/resume.pdf"
          className="w-full flex-1"
          title="Gavin Lam Resume"
          style={{ border: "none" }}
        />
      </div>
    </div>
  );
}

// Reusable section label
function SectionLabel({
  label,
  index,
  center = false,
}: {
  label: string;
  index: string;
  center?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-4 ${center ? "justify-center" : ""}`}
    >
      <span className="text-accent/50 font-mono text-xs">{index}.</span>
      <span className="font-display font-bold text-text-primary text-sm uppercase tracking-widest">
        {label}
      </span>
      <div className="h-px bg-border flex-1 max-w-[120px]" />
    </div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function Home() {
  const cursorRef = useCursor();
  useScrollAnimation();
  const [resumeOpen, setResumeOpen] = useState(false);
  return (
    <main className="noise bg-bg text-text-primary min-h-screen">
      {/* Custom cursor */}
      <div ref={cursorRef} className="cursor" />

      {resumeOpen && <ResumeModal onClose={() => setResumeOpen(false)} />} {/* ← add this */}

      <Navbar onResumeClick={() => setResumeOpen(true)} /> {/* ← pass prop */}
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
