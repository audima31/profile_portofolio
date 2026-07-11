import { useEffect, useState } from "react";
import {
  ArrowDownIcon,
  ArrowUpRightIcon,
  DocumentArrowDownIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import {
  Datacakra,
  Mayastik,
  Oktashoes,
  PortofolioWeb,
  Shoesnarian,
  SMPBPS,
} from "./assets/images/Portof";
import profilePhoto from "./assets/images/FotoProfile1.png";
import "./App.css";

const projects = [
  {
    title: "Shoesnarian",
    type: "E-commerce platform",
    image: Shoesnarian,
    href: "https://shoesnarian.vercel.app/",
    stack: ["React", "Express", "MySQL"],
  },
  {
    title: "SPP Digital",
    type: "Invoice management ecosystem",
    image: SMPBPS,
    href: "https://drive.google.com/drive/u/1/folders/1r24SOSDQ0bleaYF0G0H-b-44grnpVWNS",
    stack: ["React Native", "Firebase", "Midtrans"],
  },
  {
    title: "Mayastik",
    type: "Restaurant web experience",
    image: Mayastik,
    href: "https://mayastik-restaurant.netlify.app/",
    stack: ["React", "Bootstrap", "Firebase"],
  },
  {
    title: "Biro Perjalanan",
    type: "Travel operations dashboard",
    image: Datacakra,
    href: "https://biroperjalanan-datacakra-audima.netlify.app/login",
    stack: ["React", "Bootstrap"],
  },
  {
    title: "Oktashoes",
    type: "Footwear commerce experience",
    image: Oktashoes,
    href: "https://oktashoes-react.netlify.app/",
    stack: ["React", "Firebase", "Bootstrap"],
  },
  {
    title: "Portfolio V1",
    type: "Personal portfolio",
    image: PortofolioWeb,
    href: "https://github.com/audima31",
    stack: ["React", "Tailwind CSS"],
  },
];

const experience = [
  {
    period: "Oct 2024 - Present",
    role: "Frontend Developer",
    company: "PT Bank Raya Indonesia Tbk.",
    summary:
      "Developing customer-facing digital savings and banking transaction features across Flutter and Next.js products.",
    points: [
      "Partner with Backend, QA, UI/UX, and Product teams from refinement through release.",
      "Contribute to code reviews, sprint planning, and retrospectives in an Agile/Scrum environment.",
    ],
    current: true,
  },
  {
    period: "Apr 2024 - Oct 2024",
    role: "BRILiaN Future Leader Program - IT",
    company: "BRI Group / PT Bank Raya Indonesia Tbk.",
    summary:
      "Completed a structured management trainee program focused on leadership, digital banking technology, and end-to-end IT operations.",
    points: [
      "On-the-job training in IT Internal Audit and IT Infrastructure & Operations.",
      "Built a broader view of how business, risk, operations, and technology connect in banking.",
    ],
  },
];

const organizationalExperience = [
  {
    period: "Jan 2025 - Jan 2026",
    role: "Culture Ranger Member",
    organization: "PT Bank Raya Indonesia Tbk.",
    points: [
      "Joined the Culture Ranger as a member to help improve company culture and fulfill KPIs, impacting around 300 employees.",
    ],
  },
  {
    period: "Aug 2025 - Dec 2025",
    role: "Head of Event Division, DDO Super League Committee",
    organization: "PT Bank Raya Indonesia Tbk.",
    points: [
      "Led planning and execution of the DDO Super League event, overseeing the event division and coordinating cross-functional teams.",
      "Managed event strategy, budgeting, timeline, and execution, delivering an event that engaged approximately 300 employees.",
    ],
  },
  {
    period: "Jan 2025 - Mar 2025",
    role: "Staff of Permit and Supplies Division, RIF Committee",
    organization: "PT Bank Raya Indonesia Tbk.",
    points: [
      "Managed and organized permits and supplies needed for the RIF event, impacting around 300 employees.",
    ],
  },
  {
    period: "Feb 2022 - Feb 2023",
    role: "Internal Developer (Supervisor)",
    organization: "Eksekutif Mahasiswa Teknologi Informasi",
    points: [
      "Served as primary supervisor and mentor across all departments of the student executive body, overseeing operational continuity and performance evaluation.",
      "Participated in formulating organizational policies in collaboration with the chairperson and vice-chairperson.",
    ],
  },
  {
    period: "Feb 2021 - Feb 2022",
    role: "Vice Head - Social & Environment Dept",
    organization: "Eksekutif Mahasiswa Teknologi Informasi",
    points: [
      "Supervised social and environmental programs while fostering inter-departmental cooperation with external faculty-level organizations.",
      "Led initiatives to enhance students' awareness and engagement in social action and environmental stewardship.",
    ],
  },
  {
    period: "Feb 2020 - Feb 2021",
    role: "Staff - Social & Environment Dept",
    organization: "Eksekutif Mahasiswa Teknologi Informasi",
    points: [
      "Planned and executed community service and social responsibility programs.",
      "Created social media content related to environmental and social awareness issues.",
    ],
  },
];

const techStacks = [
  { label: "Flutter", key: "flutter" },
  { label: "Next JS", key: "next" },
  { label: "HTML", key: "html" },
  { label: "CSS", key: "css" },
  { label: "Javascript", key: "javascript" },
  { label: "ReactJS", key: "react" },
  { label: "React Native", key: "react-native" },
  { label: "MySQL", key: "mysql" },
  { label: "Firebase", key: "firebase" },
  { label: "Bootstrap", key: "bootstrap" },
  { label: "Tailwind CSS", key: "tailwind" },
  { label: "GitHub", key: "github" },
  { label: "Agile Methodology", key: "agile" },
  { label: "Figma", key: "figma" },
];

const certifications = [
  ["2025", "Kualifikasi 4 Bidang Manajemen Risiko Perbankan", "BNSP"],
  ["2025", "Training Agile Way of Working", "VIS Consulting ID"],
  ["2024", "Flutter Masterclass", "Net Ninja"],
  ["2024", "Testing Next.js (React) Apps", "Professional training"],
  ["2022", "Fullstack Web Development", "Binar Academy"],
];

const socials = [
  ["GitHub", "https://github.com/audima31"],
  ["LinkedIn", "https://www.linkedin.com/in/audimaoktasena/"],
  ["Instagram", "https://www.instagram.com/audima31/"],
];

const cvUrl =
  "https://drive.google.com/file/d/1wH06f92f5MlgOp81YtImKk9cKfrNNsM6/view?usp=sharing";

const marqueeGroups = Array.from({ length: 6 }, (_, index) => index);

function StackIcon({ name }) {
  if (name === "html") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M7 4h18l-1.7 20.2L16 28l-7.3-3.8z" />
        <path d="M11.2 9.5h9.6l-.3 3.1h-6.1l.2 2.8h5.7l-.5 6.1-3.8 2-3.8-2-.3-3.3h3.1l.1 1.4.9.5.9-.5.2-1.4h-5.5z" />
      </svg>
    );
  }

  if (name === "css") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M7 4h18l-1.7 20.2L16 28l-7.3-3.8z" />
        <path d="M11.1 9.5h10l-.3 3.1h-6.4l-.2 2h6.4l-.6 6.9-4 2-4-2-.2-2.8h3.1l.1.9 1 .5 1-.5.2-2h-5.5z" />
      </svg>
    );
  }

  if (name === "next") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="13" />
        <path d="M10 22V10l12 12V10" />
        <path d="M22 22 10 10" />
      </svg>
    );
  }

  if (name === "react" || name === "react-native") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="2.8" />
        <ellipse cx="16" cy="16" rx="11.5" ry="4.4" />
        <ellipse
          cx="16"
          cy="16"
          rx="11.5"
          ry="4.4"
          transform="rotate(60 16 16)"
        />
        <ellipse
          cx="16"
          cy="16"
          rx="11.5"
          ry="4.4"
          transform="rotate(120 16 16)"
        />
        {name === "react-native" && (
          <path d="M20.8 6.8h3.6v3.6M7.6 21.6v3.6h3.6" />
        )}
      </svg>
    );
  }

  if (name === "javascript") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <rect x="5" y="5" width="22" height="22" />
        <path d="M13.2 12.5v7.2c0 2.4-1.3 3.8-3.6 3.8-.9 0-1.7-.2-2.4-.6" />
        <path d="M17.2 22.3c.8.7 1.8 1.1 3.1 1.1 1.6 0 2.7-.7 2.7-1.9 0-1.1-.8-1.6-2.6-2.1-2.1-.6-3.2-1.5-3.2-3.3s1.5-3.3 4-3.3c1.2 0 2.2.3 3 .8" />
      </svg>
    );
  }

  if (name === "mysql") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M6 19.2c2.9-5.8 8.6-7.8 14.7-5.6 2.2.8 4 .8 5.3-.3-1 3.9-4.8 5.1-8.4 3.8-3.5-1.3-6.7-.4-9.5 2.9" />
        <path d="M18.5 13.4c.2-3 2.1-5.3 5-6.7-.7 2.2-.4 4.2 1 6" />
        <path d="M8 22.9h16" />
        <path d="M6.2 25.8h19.6" />
      </svg>
    );
  }

  if (name === "firebase") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M7 24.2 10.2 5l5.1 9.5L18.8 8 25 24.2 16 29z" />
        <path d="m7 24.2 8.3-9.7 2.7 4.9" />
        <path d="m18.8 8-3.5 6.5 9.7 9.7" />
      </svg>
    );
  }

  if (name === "bootstrap") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <rect x="5" y="6" width="22" height="20" rx="5" />
        <path d="M13 10.5h4.4c2.4 0 3.8 1 3.8 2.8 0 1.1-.6 2-1.8 2.4 1.5.4 2.3 1.4 2.3 2.8 0 2-1.6 3-4.1 3H13z" />
        <path d="M16 13.2h1.2c.8 0 1.3.4 1.3 1s-.5 1-1.3 1H16z" />
        <path d="M16 17.6h1.6c.9 0 1.4.4 1.4 1.1s-.5 1.1-1.4 1.1H16z" />
      </svg>
    );
  }

  if (name === "tailwind") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M6 18.3c2-5.4 5.2-7.2 9.8-5.4 1.8.7 3.1 1.9 5.1 1.6 2-.2 3.5-1.4 5.1-3.8-2 5.4-5.2 7.2-9.8 5.4-1.8-.7-3.1-1.9-5.1-1.6-2 .2-3.5 1.4-5.1 3.8z" />
        <path d="M6 25c2-5.4 5.2-7.2 9.8-5.4 1.8.7 3.1 1.9 5.1 1.6 2-.2 3.5-1.4 5.1-3.8-2 5.4-5.2 7.2-9.8 5.4-1.8-.7-3.1-1.9-5.1-1.6-2 .2-3.5 1.4-5.1 3.8z" />
      </svg>
    );
  }

  if (name === "github") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M16 4.8c-6.2 0-11.2 5-11.2 11.2 0 5 3.2 9.2 7.7 10.6.6.1.8-.2.8-.6v-2.2c-3.1.7-3.8-1.3-3.8-1.3-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.7 2.5 3.2 1.8.1-.8.4-1.3.7-1.6-2.5-.3-5.1-1.2-5.1-5.5 0-1.2.4-2.2 1.2-3-.1-.3-.5-1.5.1-3 0 0 .9-.3 3.1 1.1.9-.2 1.8-.4 2.8-.4.9 0 1.9.1 2.8.4 2.1-1.4 3.1-1.1 3.1-1.1.6 1.5.2 2.7.1 3 .7.8 1.2 1.8 1.2 3 0 4.3-2.6 5.2-5.1 5.5.4.3.8 1 .8 2.1V26c0 .4.2.7.8.6 4.5-1.5 7.7-5.6 7.7-10.6 0-6.2-5.1-11.2-11.3-11.2z" />
      </svg>
    );
  }

  if (name === "agile") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="11" />
        <path d="M16 5v5M16 22v5M5 16h5M22 16h5" />
        <path d="M8.2 8.2 11.7 12M20.3 20l3.5 3.8M23.8 8.2 20.3 12M11.7 20l-3.5 3.8" />
        <circle cx="16" cy="16" r="4.2" />
      </svg>
    );
  }

  if (name === "figma") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M12 4h4v8h-4a4 4 0 0 1 0-8z" />
        <path d="M16 4h4a4 4 0 0 1 0 8h-4z" />
        <path d="M12 12h4v8h-4a4 4 0 0 1 0-8z" />
        <path d="M16 12h4a4 4 0 1 1-4 4z" />
        <path d="M12 20h4v4a4 4 0 1 1-4-4z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="m17.8 4-11 11 5.2 5.2L28 4z" />
      <path d="m12 20.2 5.8 5.8H28L17.1 15.1z" />
      <path d="m6.8 15 5.2 5.2 5.1-5.1-5.2-5.2z" />
    </svg>
  );
}

function ArrowLink({ href, children, className = "", download = false }) {
  const isPageAnchor = href.startsWith("#");

  return (
    <a
      className={`arrow-link ${className}`}
      href={href}
      target={isPageAnchor ? undefined : "_blank"}
      rel={isPageAnchor ? undefined : "noreferrer"}
      download={download}
    >
      <span>{children}</span>
      {download ? <DocumentArrowDownIcon /> : <ArrowUpRightIcon />}
    </a>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-is-open", menuOpen);

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.classList.remove("menu-is-open");
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  return (
    <div className="portfolio-shell">
      <header className={`site-header ${menuOpen ? "menu-open" : ""}`}>
        <a className="brand" href="#top" aria-label="Audima Oktasena, home">
          Audima Oktasena<span>/26</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#experience">Work</a>
          <a href="#certifications">Certs</a>
          <a href="#projects">Projects</a>
          <a href="#leadership">Leadership</a>
        </nav>

        <a className="header-email" href="mailto:audimasena@gmail.com">
          <EnvelopeIcon />
          Email me
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span
            className={`menu-icon ${menuOpen ? "is-open" : ""}`}
            aria-hidden="true"
          />
        </button>

        <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`}>
          <p>Navigate / 2026</p>
          {[
            ["experience", "work"],
            ["certifications", "certs"],
            ["projects", "projects"],
            ["leadership", "leadership"],
            ["contact", "contact"],
          ].map(([id, label], index) => (
            <a href={`#${id}`} onClick={() => setMenuOpen(false)} key={id}>
              <span>0{index + 1}</span>
              {label}
            </a>
          ))}
          <ArrowLink href={cvUrl}>View CV</ArrowLink>
        </div>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-copy">
            <h1 className="reveal reveal-2">
              Audima
              <span>Oktasena</span>
            </h1>
            <div className="hero-statement reveal reveal-3">
              <p>
                Junior Programmer at Bank Raya Indonesia building digital
                banking interfaces, savings journeys, and transaction features
                across Flutter and Next.js products.
              </p>
              <div className="hero-actions">
                <ArrowLink
                  className="primary-action"
                  href="mailto:audimasena@gmail.com"
                >
                  Email me
                </ArrowLink>
                <ArrowLink href="#projects">See projects</ArrowLink>
              </div>
            </div>
          </div>

          <div
            className="hero-visual reveal reveal-3"
            aria-label="Portrait of Audima Oktasena"
          >
            <div className="hero-orbit" aria-hidden="true">
              <span>PRODUCT</span>
              <span>CODE</span>
              <span>PEOPLE</span>
            </div>
            <div className="portrait-field">
              <img src={profilePhoto} alt="Audima Oktasena" />
              <div className="portrait-caption">
                <span>Audima Oktasena, S.Kom.</span>
                <span>Jakarta, ID</span>
              </div>
            </div>
            <div className="hero-badge">
              <span>Based in</span>
              <strong>Jakarta, ID</strong>
              <small>GMT +7</small>
            </div>
          </div>

          <div className="hero-footer reveal reveal-3">
            <span>PT Bank Raya Indonesia Tbk.</span>
            <span></span>
            <a href="#about" aria-label="Scroll to profile">
              <ArrowDownIcon />
            </a>
          </div>
        </section>

        <div className="marquee" aria-label="Technology stack">
          <div className="marquee-track">
            {marqueeGroups.map((groupIndex) => (
              <div className="marquee-group" key={groupIndex}>
                {techStacks.map((stack) => (
                  <span
                    className={`stack-chip stack-${stack.key}`}
                    key={`${stack.key}-${groupIndex}`}
                  >
                    <StackIcon name={stack.key} />
                    <b>{stack.label}</b>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <section className="about section-pad" id="about">
          <div className="section-label">
            <span>01</span>
            Profile
          </div>

          <div className="about-body">
            <div className="about-summary">
              <p className="about-lead">
                I am Audima Oktasena, a Frontend Developer at PT Bank Raya
                Indonesia Tbk.
              </p>
              <ArrowLink href={cvUrl}>View CV</ArrowLink>
            </div>
            <div className="about-notes">
              <p>
                My work combines Flutter and Next JS with cross-functional
                collaboration across Product, UI/UX, QA, and Backend teams.
              </p>
              <p>
                I graduated from Universitas Brawijaya in Information Technology
                with a 3.68 GPA, completed the BRILiaN Future Leader Program,
                and continue to grow through agile, risk, and frontend
                engineering certifications.
              </p>
            </div>
          </div>

          <div className="profile-facts">
            <div>
              <span>Education</span>
              <strong>Universitas Brawijaya</strong>
              <small>B.IT, Information Technology / 2019-2023</small>
            </div>
            <div>
              <span>Academic</span>
              <strong>3.68 / 4.00</strong>
              <small>Undergraduate GPA</small>
            </div>
            <div>
              <span>Focus</span>
              <strong>Web + Mobile</strong>
              <small>Digital products and banking platforms</small>
            </div>
          </div>
        </section>

        <section className="experience section-pad" id="experience">
          <div className="section-heading experience-heading">
            <div className="section-label">
              <span>02</span>
              Work
            </div>
            <h2>Banking product work, shipped with teams.</h2>
            <p>
              Building customer-facing interfaces in a regulated,
              cross-functional, fast-moving environment.
            </p>
          </div>

          <div className="experience-list">
            {experience.map((item, index) => (
              <article className="experience-row" key={item.role}>
                <div className="experience-index">
                  <span>0{index + 1}</span>
                  {item.current && <i>Current</i>}
                </div>
                <div className="experience-role">
                  <p>{item.period}</p>
                  <h3>{item.role}</h3>
                  <span>{item.company}</span>
                </div>
                <div className="experience-copy">
                  <p>{item.summary}</p>
                  <ul>
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="certifications section-pad" id="certifications">
          <div className="section-label">
            <span>03</span>
            Certification
          </div>
          <div className="certification-list">
            {certifications.map(([year, title, provider]) => (
              <div className="certification-row" key={title}>
                <span>{year}</span>
                <h3>{title}</h3>
                <p>{provider}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="projects section-pad" id="projects">
          <div className="section-heading projects-heading">
            <div className="section-label">
              <span>04</span>
              Projects
            </div>
            <h2>Selected projects beyond the bank.</h2>
            <p>
              Selected product explorations across commerce, operations,
              payments, and mobile experiences.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article
                className={`project-card project-${index + 1}`}
                key={project.title}
              >
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.title}`}
                >
                  <div className="project-image">
                    <img
                      src={project.image}
                      alt={`${project.title} interface preview`}
                      loading="lazy"
                    />
                    <span className="project-arrow">
                      <ArrowUpRightIcon />
                    </span>
                  </div>
                  <div className="project-meta">
                    <span className="project-number">0{index + 1}</span>
                    <div>
                      <h3>{project.title}</h3>
                      <p>{project.type}</p>
                    </div>
                    <ul>
                      {project.stack.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="leadership section-pad" id="leadership">
          <div className="section-heading leadership-heading">
            <div className="section-label">
              <span>05</span>
              Organizational & Leadership
            </div>
            <h2>Experience in events, culture, and student organizations.</h2>
            <p>
              Leadership roles across Bank Raya internal initiatives and
              Information Technology student organizations.
            </p>
          </div>

          <div className="leadership-list">
            {organizationalExperience.map((item, index) => (
              <article className="leadership-card" key={item.role}>
                <div className="leadership-time">
                  <span>0{index + 1}</span>
                  <p>{item.period}</p>
                </div>
                <div className="leadership-content">
                  <h3>{item.role}</h3>
                  <strong>{item.organization}</strong>
                  <ul>
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact section-pad" id="contact">
          <div className="contact-topline">
            <span>Have a meaningful project in mind?</span>
            <span>Jakarta / GMT +7</span>
          </div>
          <p className="contact-kicker">Let's talk about what comes next.</p>
          <h2>
            Build something
            <br />
            <em>people can trust.</em>
          </h2>
          <a className="email-link" href="mailto:audimasena@gmail.com">
            <span>audimasena@gmail.com</span>
            <ArrowUpRightIcon />
          </a>
          <footer>
            <p>Audima Oktasena / Portfolio 2026</p>
            <div>
              {socials.map(([label, href]) => (
                <a href={href} target="_blank" rel="noreferrer" key={label}>
                  {label}
                </a>
              ))}
            </div>
            <a href="#top">
              Back to top <ArrowUpRightIcon />
            </a>
          </footer>
        </section>
      </main>
    </div>
  );
}

export default App;
