import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight, Github, Youtube, Instagram, Code2, Terminal,
  BookOpen, Layers3, Sparkles, Menu, X, Mail, MessageCircle,
  Laptop, GraduationCap, Wrench
} from "lucide-react";
import "./styles.css";

// Replace the contact placeholders with your real details before publishing.
const WHATSAPP_NUMBER = "917225915441"; // Example format: 919876543210
const CONTACT_EMAIL = "aspp9308@gmail.com";

const projects = [
 {
  number: "01",
  title: "UserHub",
  type: "FULL-STACK APPLICATION",
  description:
    "A full-stack user management platform featuring JWT authentication, role-based access, dashboard analytics, search, pagination and PDF, Excel and CSV exports.",
  stack: [
    "React",
    "Spring Boot",
    "Spring Security",
    "JWT",
    "MySQL"
  ],
  link: "https://github.com/amitpandey13/userhub",
  demo: "https://userhub-ten.vercel.app"
},
  {
    number: "02",
    title: "AI Admin Assistant",
    type: "BACKEND / AI",
    description: "An assistant concept for interacting with database administration through natural language.",
    stack: ["Spring AI", "Java", "MySQL"],
    link: "#"
  },
  {
    number: "03",
    title: "Notes Application",
    type: "FULL-STACK APPLICATION",
    description: "A practical notes app demonstrating frontend and REST API integration.",
    stack: ["React", "Spring Boot", "MySQL"],
    link: "#"
  }
];

const services = [
  {
    icon: Laptop,
    number: "01",
    title: "Website & App Development",
    description: "Responsive websites, web applications and dashboards built around your business needs.",
    tags: ["React", "Java", "Spring Boot"]
  },
  {
    icon: Wrench,
    number: "02",
    title: "Backend & API Development",
    description: "REST APIs, database integration, authentication and backend feature development.",
    tags: ["Spring Boot", "REST API", "MySQL"]
  },
  {
    icon: GraduationCap,
    number: "03",
    title: "Programming Classes",
    description: "Practical, beginner-friendly programming lessons with clear explanations and coding practice.",
    tags: ["Java", "SQL", "Computer Science"]
  },
  {
    icon: BookOpen,
    number: "04",
    title: "Personal Mentorship",
    description: "One-to-one guidance with programming fundamentals, projects, debugging and learning plans.",
    tags: ["Project guidance", "Doubt solving", "Career skills"]
  }
];

const skillGroups = [
  {
    number: "01",
    title: "Backend Development",
    description: "Building secure and scalable server-side applications.",
    skills: ["Java", "Spring Boot", "Spring Security", "Hibernate / JPA", "REST APIs", "Node.js"]
  },
  {
    number: "02",
    title: "Frontend Development",
    description: "Creating responsive and interactive user experiences.",
    skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Responsive Design"]
  },
  {
    number: "03",
    title: "Database & DevOps",
    description: "Managing data, version control and development workflows.",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Git & GitHub", "Docker", "Jenkins"]
  },
  {
    number: "04",
    title: "Programming & Training",
    description: "Teaching concepts through practical examples and projects.",
    skills: ["Core Java", "Java 8", "SQL", "Computer Science", "Problem Solving", "Mentoring"]
  }
];


const courses = [
  {
    number: "01",
    title: "Core Java & Java 8",
    level: "BEGINNER TO ADVANCED",
    description: "Learn Java fundamentals, OOP, collections, exception handling, streams and functional programming.",
    topics: ["Core Java", "OOP", "Collections", "Java 8"]
  },
  {
    number: "02",
    title: "Spring Boot & REST APIs",
    level: "INTERMEDIATE",
    description: "Build backend applications with Spring Boot, Spring Security, JWT authentication and REST APIs.",
    topics: ["Spring Boot", "REST APIs", "JWT", "JPA"]
  },
  {
    number: "03",
    title: "SQL & MySQL",
    level: "BEGINNER TO ADVANCED",
    description: "Understand databases, write SQL queries, work with joins and practice real-world database problems.",
    topics: ["SQL", "MySQL", "Joins", "Database Design"]
  },
  {
    number: "04",
    title: "React.js Fundamentals",
    level: "BEGINNER",
    description: "Learn components, props, state, hooks and build responsive frontend applications.",
    topics: ["React", "JavaScript", "Hooks", "Projects"]
  },
  {
    number: "05",
    title: "Programming & Problem Solving",
    level: "ALL LEVELS",
    description: "Strengthen programming fundamentals through practical examples, coding exercises and guided practice.",
    topics: ["Logic Building", "Java", "DSA Basics", "Practice"]
  }
];


const tutorials = [
  { category: "JAVA", title: "Java 8 Features, Explained Simply", detail: "Core concepts, functional interfaces and practical examples", time: "Beginner friendly" },
  { category: "SPRING BOOT", title: "Build Your First REST API", detail: "Controllers, services, repositories and database connection", time: "Project based" },
  { category: "REACT", title: "React Fundamentals to Components", detail: "Props, state, hooks and reusable UI patterns", time: "Step by step" }
];

function Logo() {
  return (
    <a className="brand" href="#home" aria-label="The Code Craft home">
      <span className="brand-mark"><Code2 size={23} strokeWidth={2.3} /></span>
      <span className="brand-name">THE CODE <b>CRAFT</b><small>BUILD. LEARN. CREATE.</small></span>
    </a>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I visited THE CODE CRAFT and would like to know more.")}`;

  return (
    <div className="site-shell">
      <div className="top-glow" />
      <header className="nav-wrap">
        <nav className="nav container">
          <Logo />
          <div className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#tutorials" onClick={closeMenu}>Tutorials</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#courses" onClick={closeMenu}>Courses</a>
          </div>
          <a className="nav-cta" href="#contact">Let's connect <ArrowUpRight size={15} /></a>
          <button className="mobile-menu" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      <main>
        <section className="hero container" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse" /> SOFTWARE • LEARNING • BUILDING</div>
            <h1>Turn ideas into<br /><span>working code.</span></h1>
            <p className="hero-lead">I'm Amit Kumar Pandey — a software engineer and technical trainer. I build practical applications and help people learn programming through clear explanations and real projects.</p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">Hire me <ArrowUpRight size={17} /></a>
              <a className="button secondary" href="#services"><BookOpen size={17} /> Learn with me</a>
            </div>
            <div className="hero-note"><span className="note-line" /> Building useful things. Teaching what I learn.</div>
          </div>
          <div className="hero-art" aria-label="Decorative code editor illustration">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="code-window">
              <div className="window-bar"><div className="window-dots"><i /><i /><i /></div><span>craft.tsx</span><span className="window-lock">● LIVE IDEAS</span></div>
              <div className="code-content">
                <div><em>01</em><span className="syntax-purple">const</span> <span className="syntax-blue">vision</span> = <span className="syntax-green">"Create"</span>;</div>
                <div><em>02</em><span className="syntax-purple">function</span> <span className="syntax-yellow">buildFuture</span>() {"{"}</div>
                <div><em>03</em>&nbsp;&nbsp;<span className="syntax-purple">return</span> <span className="syntax-green">"Keep learning."</span>;</div>
                <div><em>04</em>{"}"}</div>
                <div className="code-space"><em>05</em></div>
                <div><em>06</em><span className="syntax-muted">// Ideas become reality.</span></div>
                <div><em>07</em><span className="syntax-blue">build</span>(vision);<span className="cursor" /></div>
              </div>
              <div className="window-footer"><span><span className="green-dot" /> Ready to create</span><span>UTF-8&nbsp; • &nbsp;TypeScript</span></div>
            </div>
            <div className="floating-chip chip-one"><Code2 size={16} /> Clean code</div>
            <div className="floating-chip chip-two"><Sparkles size={16} /> Keep creating</div>
          </div>
        </section>

        <section className="ticker">
          <div className="ticker-track"><span>JAVA</span><b>✳</b><span>SPRING BOOT</span><b>✳</b><span>REACT</span><b>✳</b><span>NODE.JS</span><b>✳</b><span>MYSQL</span><b>✳</b><span>JAVA</span><b>✳</b><span>SPRING BOOT</span></div>
        </section>

        <section className="section container" id="services">
          <div className="section-head">
            <div><div className="eyebrow">01 / HOW I CAN HELP</div><h2>Services built around<br /><span>real outcomes.</span></h2></div>
            <a className="text-link" href="#contact">Discuss your requirements <ArrowUpRight size={16} /></a>
          </div>
          <div className="services-grid">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article className="service-card" key={service.number}>
                  <div className="service-top"><span>{service.number} / SERVICE</span><Icon size={23} /></div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="tags">{service.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                </article>
              );
            })}
          </div>
        </section>
        <section className="section container" id="skills">
  <div className="section-head">
    <div>
      <div className="eyebrow">02 / MY TECH STACK</div>
      <h2>Tools I use.<br />
        <span>Skills I build with.</span>
      </h2>
    </div>
    <div className="section-aside">
      Practical knowledge.<br />
      Real-world application.
    </div>
  </div>

  <div className="skills-grid">
    {skillGroups.map((group) => (
      <article className="skill-card" key={group.number}>
        <div className="skill-card-top">
          <span>{group.number} / EXPERTISE</span>
          <Code2 size={22} />
        </div>

        <h3>{group.title}</h3>
        <p>{group.description}</p>

        <div className="skill-tags">
          {group.skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </article>
    ))}
  </div>
</section>

       
<section className="section container" id="courses">
  <div className="section-head">
    <div>
      <div className="eyebrow">03 / LEARN WITH ME</div>
      <h2>Learn skills.<br /><span>Build your future.</span></h2>
    </div>
    <div className="section-aside">
      Practical learning.<br />
      Real-world projects.
    </div>
  </div>

  <div className="courses-grid">
    {courses.map((course) => (
      <article className="course-card" key={course.number}>
        <div className="course-top">
          <span>{course.number} / COURSE</span>
          <GraduationCap size={22} />
        </div>

        <div className="course-level">{course.level}</div>
        <h3>{course.title}</h3>
        <p>{course.description}</p>

        <div className="course-tags">
          {course.topics.map((topic) => (
            <span key={topic}>{topic}</span>
          ))}
        </div>

        <a
          className="course-link"
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
            `Hi, I am interested in learning ${course.title}. Please share the details.`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Enquire About Course <ArrowUpRight size={16} />
        </a>
      </article>
    ))}
  </div>
</section>


        <section className="section container" id="projects">
          <div className="section-head">
            <div><div className="eyebrow">02 / WHAT I'M BUILDING</div><h2>Featured <span>projects.</span></h2></div>
            <a className="text-link" href="#contact">Have a project in mind? <ArrowUpRight size={16} /></a>
          </div>
          <div className="project-grid">
            {projects.map((project) => <article className="project-card" key={project.number}>
              <div className="project-top"><span>{project.number} / CASE STUDY</span><a href={project.link} aria-label={`Open ${project.title}`}><ArrowUpRight size={18} /></a></div>
              <div className="project-visual"><div className="visual-grid" /><div className="visual-icon"><Layers3 size={39} /></div><span className="visual-label">PROJECT / {project.number}</span></div>
              <div className="project-body"><div className="card-kicker">{project.type}</div><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
               <div className="project-actions">
 <a href={project.link} target="_blank" rel="noopener noreferrer">
  <Github size={16} />
  Source Code
</a>

  {project.demo && (
  <a href={project.demo} target="_blank" rel="noopener noreferrer">
    Live Demo <ArrowUpRight size={15} />
  </a>
)}
</div>
             
             </div>
            </article>)}
          </div>
          <p className="placeholder-note">Before publishing, replace sample project descriptions and # links with your real project details and repository/demo URLs.</p>
        </section>

        <section className="tutorial-section" id="tutorials">
          <div className="container section">
            <div className="section-head">
              <div><div className="eyebrow">03 / LEARN BY BUILDING</div><h2>Learn. Build. <span>Repeat.</span></h2></div>
              <div className="section-aside">Clear explanations.<br />Practical examples.</div>
            </div>
            <div className="tutorial-list">
              {tutorials.map((item, i) => <article className="tutorial-row" key={item.title}>
                <div className="tutorial-index">0{i + 1}</div><div className="tutorial-main"><div className="card-kicker">{item.category}</div><h3>{item.title}</h3><p>{item.detail}</p></div><div className="tutorial-meta">{item.time}</div><a href="#contact" className="round-arrow" aria-label={`Ask about ${item.title}`}><ArrowUpRight size={19} /></a>
              </article>)}
            </div>
            <p className="placeholder-note">Add your published tutorials and YouTube video links here as you create them.</p>
          </div>
        </section>

        <section className="about-section container" id="about">
          <div className="about-symbol"><Terminal size={48} /><span>AP</span></div>
          <div className="about-copy"><div className="eyebrow">04 / THE PERSON BEHIND THE CODE</div><h2>Hi, I'm Amit.<br /><span>I build & teach.</span></h2><p>Software engineer and technical educator passionate about building useful applications and making programming easier to understand. My work combines backend development, frontend skills and practical teaching.</p><div className="about-skills"><span>Java & Spring Boot</span><span>React & Web</span><span>SQL & Databases</span><span>Technical education</span></div></div>
        </section>

        <section className="contact-section container" id="contact">
          <div className="contact-card">
            <div className="eyebrow">05 / LET'S WORK TOGETHER</div>
            <h2>Have an idea?<br /><span>Let's craft it.</span></h2>
            <p>Need a website, backend solution, programming classes or one-to-one guidance? Tell me what you're working on.</p>
            <div className="contact-actions">
              <a className="button primary" href={whatsappLink} target="_blank" rel="noreferrer"><MessageCircle size={17} /> WhatsApp me <ArrowUpRight size={16} /></a>
              <a className="button secondary" href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Enquiry from The Code Craft")}`}><Mail size={17} /> Send an email</a>
            </div>
            <div className="social-links">
              <a href="https://github.com/" target="_blank" rel="noreferrer"><Github size={18} /> GitHub <ArrowUpRight size={13} /></a>
              <a href="https://youtube.com/" target="_blank" rel="noreferrer"><Youtube size={18} /> YouTube <ArrowUpRight size={13} /></a>
              <a href="https://instagram.com/" target="_blank" rel="noreferrer"><Instagram size={18} /> Instagram <ArrowUpRight size={13} /></a>
            </div>
            <span className="social-note">Update the WhatsApp number, email and social profile URLs in main.jsx before publishing.</span>
          </div>
        </section>
      </main>

     
<footer className="site-footer">
  <div className="container footer-content">
    <div className="footer-brand">
      <a href="#home" className="logo">
        THE CODE <span>CRAFT.</span>
      </a>
      <p>BUILD. LEARN. CREATE.</p>
      <small>
        Turning ideas into digital experiences and knowledge into skills.
      </small>
    </div>

    <div className="footer-links">
      <h4>EXPLORE</h4>
      <a href="#home">Home</a>
      <a href="#services">Services</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#courses">Courses</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </div>

    <div className="footer-social">
      <h4>FOLLOW MY WORK</h4>
      <a href="https://github.com/amitpandey13" target="_blank" rel="noopener noreferrer">
        <Github size={17} /> GitHub
      </a>
      <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
        <Youtube size={17} /> YouTube
      </a>
      <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
        <Instagram size={17} /> Instagram
      </a>
    </div>
  </div>

  <div className="container footer-bottom">
    <p>© {new Date().getFullYear()} THE CODE CRAFT. All rights reserved.</p>
    <a href="#home">BACK TO TOP ↑</a>
  </div>
</footer>

    </div>
  );
}

createRoot(document.getElementById("root")).render(<React.StrictMode><App /></React.StrictMode>);
