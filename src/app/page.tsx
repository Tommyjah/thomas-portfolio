"use client";

import { useState, useEffect } from "react";

/* ─── Data ─── */
const phrases = [
  "Full-Stack Developer",
  "AI Product Builder",
  "Data Analytics Expert",
  "Problem Solver for Africa",
];

const projects = [
  {
    id: 1,
    title: "Quantora-Pro",
    subtitle: "AI Trading Analytics",
    description:
      "Live trading-analysis application that turns market information into structured analytical insights and an interactive decision-support workflow.",
    tech: ["Streamlit", "Python", "AI"],
    link: "https://quantorapro.streamlit.app/",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
    metrics: [
      { label: "Live", color: "green" },
      { label: "AI Powered", color: "" },
      { label: "Real-time", color: "yellow" },
    ],
  },
  {
    id: 2,
    title: "Ethio Journey",
    subtitle: "Travel & Logistics",
    description:
      "Modern Ethiopia-focused travel platform combining premium itineraries, vehicle services and AI-powered trip planning.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    link: "https://ethio-journey.vercel.app",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop",
    metrics: [
      { label: "Deployed", color: "green" },
      { label: "Responsive", color: "" },
      { label: "AI Trips", color: "" },
    ],
  },
  {
    id: 3,
    title: "CRMS",
    subtitle: "Change Management",
    description:
      "Secure workflow system for submitting, managing and approving change requests with structured business processes.",
    tech: ["Next.js", "Supabase", "TypeScript"],
    link: "https://crms-neon.vercel.app",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    metrics: [
      { label: "Internal Tool", color: "" },
      { label: "Secure", color: "green" },
      { label: "Workflow", color: "" },
    ],
  },
  {
    id: 4,
    title: "Yelpia",
    subtitle: "Local Business Discovery",
    description:
      "Discovery experience for restaurants, hotels and local businesses in Ethiopia with search and location features.",
    tech: ["Next.js", "Supabase", "TypeScript"],
    link: "https://yelpia.vercel.app",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop",
    metrics: [
      { label: "Live", color: "green" },
      { label: "Search", color: "" },
      { label: "Local", color: "" },
    ],
  },
  {
    id: 5,
    title: "Talenta",
    subtitle: "AI-Guided Learning",
    description:
      "AI-guided learning platform focused on personalized courses, career growth and modern user experience.",
    tech: ["No-code", "Supabase", "AI"],
    link: "https://talenta-aivision-learn.lovable.app",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
    metrics: [
      { label: "Live", color: "green" },
      { label: "AI Coaching", color: "" },
      { label: "Courses", color: "" },
    ],
  },
  {
    id: 6,
    title: "Talenta Career Coach",
    subtitle: "AI Career Path Explorer",
    description:
      "AI career coach helping beginners explore tech career paths and build personalized learning plans.",
    tech: ["PartyRock", "AI", "No-code"],
    link: "https://partyrock.aws/u/tomiti/geUHQR6vg/Talenta-AI-Career-Coach",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    metrics: [
      { label: "AI Powered", color: "" },
      { label: "Career Paths", color: "" },
      { label: "Free", color: "green" },
    ],
  },
];

const skillGroups = [
  {
    icon: "{ }",
    title: "Frontend",
    skills: [
      { name: "Next.js", level: 90 },
      { name: "React", level: 85 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "UI/UX Design", level: 80 },
    ],
  },
  {
    icon: "</>",
    title: "Backend & AI",
    skills: [
      { name: "Python", level: 80 },
      { name: "Machine Learning", level: 75 },
      { name: "Generative AI", level: 85 },
      { name: "Prompt Engineering", level: 92 },
    ],
  },
  {
    icon: "#",
    title: "Data & Cloud",
    skills: [
      { name: "Microsoft Fabric", level: 70 },
      { name: "Data Analytics", level: 80 },
      { name: "AWS", level: 75 },
      { name: "Supabase", level: 85 },
    ],
  },
  {
    icon: "*",
    title: "Tools & Product",
    skills: [
      { name: "Git & GitHub", level: 88 },
      { name: "Vercel", level: 90 },
      { name: "Streamlit", level: 80 },
      { name: "Product Development", level: 85 },
    ],
  },
];

const experience = [
  {
    role: "Machine Learning Specialist",
    company: "Future Interns",
    period: "Apr 2026 – Present",
    desc: "Apply machine-learning concepts through practical projects, experimentation and technical problem solving.",
  },
  {
    role: "AI Training Specialist (Amharic)",
    company: "RWS Group",
    period: "Apr 2026 – Present",
    desc: "Contribute to AI training workflows involving Amharic language data and quality-focused model training tasks.",
  },
  {
    role: "Product Engineer",
    company: "Self-Initiated / Freelance",
    period: "Feb 2025 – Present",
    desc: "Design, develop and deploy full-stack and AI-powered products from concept to production, translating real-world needs into usable digital solutions.",
  },
  {
    role: "IT Technician",
    company: "Bold Endeavor",
    period: "Jan 2022 – Present",
    desc: "Provide technical support, troubleshooting, system maintenance and technology-adoption support while contributing to operational and process improvements.",
  },
];

/* ─── Soft Skills ─── */
const softSkills = [
  { icon: "🧠", title: "Emotional Intelligence", desc: "Self-awareness & empathy — certified by Arizona State University" },
  { icon: "💬", title: "Communication & CX", desc: "Customer service across chat, text & IT service desks" },
  { icon: "⚡", title: "Agile & Adaptable", desc: "Agile project management & workflow optimization (HP LIFE)" },
  { icon: "🤝", title: "Customer Relationships", desc: "CRM & long-term client relationship management (HP LIFE)" },
  { icon: "🧩", title: "Problem Solving", desc: "Troubleshooting, data analysis & creative solution design" },
  { icon: "🚀", title: "Independent Delivery", desc: "Concept-to-production shipping with self-direction & ownership" },
];

const languages = ["🌍 Amharic — Native", "🗣 English — Full Professional"];

/* ─── Virtual Experiences (Forage) ─── */
const virtualExperiences = [
  {
    company: "Electronic Arts",
    logo: "EA",
    role: "Product Management Job Simulation",
    date: "Jul 2025",
    desc: "Stepped into an EA product role — defined KPIs, analyzed player-focused data and made product decisions the way real EA teams do.",
    skills: ["KPI Strategy", "Product Management", "Data-Driven Decisions"],
    link: "https://www.linkedin.com/in/thomas-debebe-1447542a2/details/certifications/",
  },
  {
    company: "Deloitte Australia",
    logo: "D",
    role: "Data Analytics Job Simulation",
    date: "Jul 2025",
    desc: "Completed a real consulting-style analytics task: prepared, cleaned and analyzed data in Excel to deliver client-ready insights.",
    skills: ["Microsoft Excel", "Data Cleaning", "Reporting"],
    link: "https://www.linkedin.com/in/thomas-debebe-1447542a2/details/certifications/",
  },
  {
    company: "Accenture UK",
    logo: "A",
    role: "Technology Apprenticeship Simulation",
    date: "Jul 2025",
    desc: "Explored the technology consulting lifecycle — analyzing business needs and presenting solutions in an apprenticeship context.",
    skills: ["Data Analysis", "Tech Consulting", "Presentation"],
    link: "https://www.linkedin.com/in/thomas-debebe-1447542a2/details/certifications/",
  },
];

/* ─── Certifications (with verify links) ─── */
const certifications = [
  {
    title: "Microsoft AI Skills Fest 2026",
    issuer: "Microsoft",
    date: "Jun 2026",
    icon: "M",
    status: "verified",
    link: "https://www.linkedin.com/in/thomas-debebe-1447542a2/details/certifications/",
  },
  {
    title: "Generative AI for Software Development",
    issuer: "DeepLearning.AI",
    date: "Jun 2026",
    icon: "D",
    status: "verified",
    link: "https://www.coursera.org/account/accomplishments/verify/db1afba0-b08c-430a-8b8c-4d01baf4e659",
  },
  {
    title: "ChatGPT Prompt Engineering for Developers",
    issuer: "DeepLearning.AI",
    date: "Mar 2026",
    icon: "P",
    status: "verified",
    link: "https://www.coursera.org/account/accomplishments/verify/9574ade9-5060-4d6d-9fe1-f906d8898d8f",
  },
  {
    title: "Machine Learning Specialist",
    issuer: "IBM",
    date: "2026",
    icon: "I",
    status: "verified",
    link: "https://www.linkedin.com/in/thomas-debebe-1447542a2/details/certifications/",
  },
  {
    title: "AWS AI & ML Scholars",
    issuer: "Udacity",
    date: "Mar 2026",
    icon: "A",
    status: "verified",
    link: "https://www.linkedin.com/in/thomas-debebe-1447542a2/details/certifications/",
  },
  {
    title: "AI Fluency Framework & Foundations",
    issuer: "Anthropic",
    date: "Nov 2025",
    icon: "A",
    status: "verified",
    link: "https://www.linkedin.com/in/thomas-debebe-1447542a2/details/certifications/",
  },
  {
    title: "Google IT Support Specialist",
    issuer: "Google",
    date: "May 2025",
    icon: "G",
    status: "verified",
    link: "https://www.linkedin.com/in/thomas-debebe-1447542a2/details/certifications/",
  },
  {
    title: "Microsoft Azure AI Essentials",
    issuer: "Microsoft",
    date: "Apr 2025",
    icon: "M",
    status: "verified",
    link: "https://www.linkedin.com/in/thomas-debebe-1447542a2/details/certifications/",
  },
  {
    title: "DP-600 Fabric Analytics Engineer",
    issuer: "Microsoft",
    date: "In Progress",
    icon: "F",
    status: "progress",
    link: "#",
  },
];

const stats = [
  { number: "6+", label: "Projects Built" },
  { number: "20+", label: "Certifications" },
  { number: "4+", label: "Years Experience" },
];

/* ─── Component ─── */
export default function Portfolio() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [particles, setParticles] = useState<
    { id: number; left: string; size: number; duration: number; delay: number }[]
  >([]);

  /* ── Theme ── */
  useEffect(() => {
    const saved = localStorage.getItem("theme") as "dark" | "light" | null;
    if (saved) setTheme(saved);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  /* ── Typing Effect ── */
  useEffect(() => {
    const currentPhrase = phrases[phraseIdx];
    let timeout: NodeJS.Timeout;

    if (!deleting && typedText === currentPhrase) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && typedText === "") {
      setDeleting(false);
      setPhraseIdx((prev) => (prev + 1) % phrases.length);
    } else {
      timeout = setTimeout(
        () => {
          setTypedText(
            deleting
              ? currentPhrase.substring(0, typedText.length - 1)
              : currentPhrase.substring(0, typedText.length + 1)
          );
        },
        deleting ? 40 : 80
      );
    }
    return () => clearTimeout(timeout);
  }, [typedText, deleting, phraseIdx]);

  /* ── Scroll ── */
  useEffect(() => {
    const handleScroll = () => setNavScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ── Reveal on Scroll ── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* ── Particles ── */
  useEffect(() => {
    const arr = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 10,
    }));
    setParticles(arr);
  }, []);

  return (
    <>
      {/* Background */}
      <div className="bg-glow" />
      <div className="particles">
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className={`nav ${navScrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">
          <a href="#" className="nav-logo">
            TD.
          </a>
          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            {["About", "Skills", "Projects", "Experience", "Beyond", "Certs", "Contact"].map(
              (item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase() === "certs" ? "certifications" : item.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
          <div className="nav-right">
            <button
              className="theme-toggle"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
            <button
              className={`hamburger ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero" id="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <p className="hero-greeting">Hello, I&apos;m</p>
              <h1>
                Thomas <span className="gradient-text">Debebe</span>
              </h1>
              <h2>
                {typedText}
                <span className="typing-cursor" />
              </h2>
              <p>
                Building AI-powered digital products that solve real problems in
                Ethiopia and across Africa. I combine full-stack development with
                artificial intelligence to create practical, deployed solutions.
              </p>
              <div className="hero-buttons">
                <a href="#projects" className="btn btn-primary">
                  View Projects
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                <a href="#contact" className="btn btn-outline">
                  Get in Touch
                </a>
              </div>
            </div>
            <div className="hero-image">
              <div className="profile-ring">
                {!imgError ? (
                  <img
                    src="/profile.jpg"
                    alt="Thomas Debebe"
                    className="profile-img"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="profile-placeholder">TD</div>
                )}
                <div className="profile-glow" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section" id="about">
        <div className="container">
          <div className="section-header reveal">
            <p className="section-label">About Me</p>
            <h2 className="section-title">
              Turning Ideas Into <span className="gradient-text">Digital Products</span>
            </h2>
          </div>
          <div className="about-grid">
            <div className="about-image reveal">
              <div className="profile-ring">
                {!imgError ? (
                  <img
                    src="/profile.jpg"
                    alt="Thomas Debebe"
                    className="profile-img"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="profile-placeholder">TD</div>
                )}
              </div>
            </div>
            <div>
              <div className="about-stats reveal">
                {stats.map((s) => (
                  <div className="stat-card" key={s.label}>
                    <div className="stat-number">{s.number}</div>
                    <div className="stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="about-text reveal">
                <p>
                  Full-Stack Developer and AI Product Builder combining software
                  engineering, artificial intelligence, machine learning and data
                  analytics to turn ideas into practical, deployed products.
                </p>
                <p>
                  Experienced in building modern web applications, AI-enabled
                  workflows and data-driven tools, with a strong product mindset
                  focused on solving real operational and market problems.
                </p>
                <p>
                  Currently preparing for the Microsoft DP-600 (Fabric Analytics
                  Engineer) certification. Looking for opportunities where I can
                  contribute, learn fast and grow.
                </p>
                <div className="about-tags">
                  {["Next.js", "React", "TypeScript", "Python", "AI/ML", "Supabase", "Azure", "AWS"].map(
                    (tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section" id="skills">
        <div className="container">
          <div className="section-header reveal">
            <p className="section-label">My Skills</p>
            <h2 className="section-title">
              Technical <span className="gradient-text">Expertise</span>
            </h2>
            <p className="section-subtitle">
              A comprehensive toolkit spanning frontend, AI, cloud and product development
            </p>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group, gi) => (
              <div className={`skill-group reveal reveal-delay-${gi + 1}`} key={group.title}>
                <div className="skill-group-header">
                  <div className="skill-group-icon">{group.icon}</div>
                  <h3 className="skill-group-title">{group.title}</h3>
                </div>
                {group.skills.map((skill) => (
                  <div className="skill-item" key={skill.name}>
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-fill"
                        style={{ "--skill-level": `${skill.level}%` } as React.CSSProperties}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section" id="projects">
        <div className="container">
          <div className="section-header reveal">
            <p className="section-label">My Work</p>
            <h2 className="section-title">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="section-subtitle">
              Real products built to solve real problems — hover to explore
            </p>
          </div>
          <div className="projects-grid">
            {projects.map((project, pi) => (
              <div
                className={`flip-card reveal reveal-delay-${(pi % 3) + 1}`}
                key={project.id}
              >
                <div className="flip-inner">
                  <div className="flip-front">
                    <div className="project-image">
                      <img src={project.image} alt={project.title} loading="lazy" />
                      <div className="project-overlay" />
                    </div>
                    <div className="project-info">
                      <h3>{project.title}</h3>
                      <p className="subtitle">{project.subtitle}</p>
                      <div className="project-tech">
                        {project.tech.map((t) => (
                          <span className="tech-tag" key={t}>
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className="project-metrics">
                        <div className="metrics-row">
                          {project.metrics.map((m, mi) => (
                            <span className="metric" key={mi}>
                              <span className={`dot ${m.color}`} />
                              {m.label}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flip-back">
                    <h3>{project.title}</h3>
                    <p className="subtitle">{project.subtitle}</p>
                    <p>{project.description}</p>
                    <a
                      href={project.link}
                      className="btn btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Live
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="section" id="experience">
        <div className="container">
          <div className="section-header reveal">
            <p className="section-label">Experience</p>
            <h2 className="section-title">
              Professional <span className="gradient-text">Journey</span>
            </h2>
          </div>
          <div className="timeline">
            {experience.map((exp, i) => (
              <div className={`tl-item reveal reveal-delay-${i + 1}`} key={i}>
                <div className="tl-dot" />
                <div className="tl-content">
                  <h3 className="tl-role">{exp.role}</h3>
                  <p className="tl-company">{exp.company}</p>
                  <p className="tl-period">{exp.period}</p>
                  <p className="tl-desc">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond the Code — Soft Skills + Virtual Experience */}
      <section className="section" id="beyond">
        <div className="container">
          <div className="section-header reveal">
            <p className="section-label">Beyond the Code</p>
            <h2 className="section-title">
              Soft Skills &amp; <span className="gradient-text">Virtual Experience</span>
            </h2>
            <p className="section-subtitle">
              The human side of engineering — how I communicate, collaborate and learn through real-world simulations
            </p>
          </div>
          <div className="beyond-grid">
            <div className="reveal">
              <h3 className="beyond-col-title">💡 Soft Skills</h3>
              <div className="soft-grid">
                {softSkills.map((skill) => (
                  <div className="soft-card" key={skill.title}>
                    <span className="soft-icon">{skill.icon}</span>
                    <h4>{skill.title}</h4>
                    <p>{skill.desc}</p>
                  </div>
                ))}
              </div>
              <div className="lang-chips">
                {languages.map((lang) => (
                  <span className="lang-chip" key={lang}>
                    {lang}
                  </span>
                ))}
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <h3 className="beyond-col-title">🧭 Virtual Experiences</h3>
              <div className="virtual-list">
                {virtualExperiences.map((v) => (
                  <div className="virtual-card" key={v.company}>
                    <div className="v-logo">{v.logo}</div>
                    <div>
                      <p className="v-role">{v.role}</p>
                      <p className="v-company">
                        {v.company} · {v.date}
                      </p>
                      <p className="v-desc">{v.desc}</p>
                      <div className="v-tags">
                        {v.skills.map((s) => (
                          <span className="v-tag" key={s}>
                            {s}
                          </span>
                        ))}
                      </div>
                      <a
                        href={v.link}
                        className="v-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Certificate
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section" id="certifications">
        <div className="container">
          <div className="section-header reveal">
            <p className="section-label">Credentials</p>
            <h2 className="section-title">
              <span className="gradient-text">Certifications</span> &amp; Awards
            </h2>
            <p className="section-subtitle">
              Continuous learning across AI, cloud, data science and development
            </p>
          </div>
          <div className="credentials">
            {certifications.map((cert, i) => (
              <a
                key={cert.title}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`cred-row reveal reveal-delay-${(i % 3) + 1}`}
              >
                <span className="cred-num">0{i + 1}</span>
                <span className="cred-icon">{cert.icon}</span>
                <span className="cred-info">
                  <span className="cred-title">{cert.title}</span>
                  <span className="cred-meta">
                    {cert.issuer} · {cert.date}
                  </span>
                </span>
                <span className={`cred-status ${cert.status}`}>
                  {cert.status === "progress" ? "In Progress" : "Verified"}
                </span>
                <span className="cred-arrow">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <a
              href="https://www.linkedin.com/in/thomas-debebe-1447542a2/details/certifications/"
              className="cred-more"
              target="_blank"
              rel="noopener noreferrer"
            >
              View all on LinkedIn
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section" id="contact">
        <div className="container">
          <div className="section-header reveal">
            <p className="section-label">Get in Touch</p>
            <h2 className="section-title">
              Let&apos;s <span className="gradient-text">Connect</span>
            </h2>
            <p className="section-subtitle">
              Open to freelance projects, collaborations and full-time opportunities
            </p>
          </div>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-item reveal">
                <div className="icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="info">
                  <h4>Location</h4>
                  <p>Addis Ababa, Ethiopia</p>
                </div>
              </div>
              <div className="contact-item reveal">
                <div className="icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                </div>
                <div className="info">
                  <h4>Email</h4>
                  <p>tomiti2552@gmail.com</p>
                </div>
              </div>
              <div className="contact-item reveal">
                <div className="icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="info">
                  <h4>Phone</h4>
                  <p>+251 941 009 666</p>
                </div>
              </div>
              <div className="social-links">
                <a
                  href="https://linkedin.com/in/thomas-debebe"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/Tommyjah"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://credly.com/users/thomas-debebe"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="8" r="7" />
                    <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
                  </svg>
                </a>
              </div>
            </div>
            <form
              className="contact-form reveal"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Message sent! (Demo — connect your backend)");
              }}
            >
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className="form-input"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="form-input"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  className="form-textarea"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              <button type="submit" className="submit-btn">
                Send Message
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>
            Designed &amp; Built by{" "}
            <a href="#">Thomas Debebe</a> &copy; {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </>
  );
}
