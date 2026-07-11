import { useEffect, useRef, useState } from "react";
import {
  ArrowDownIcon,
  ArrowUpRightIcon,
  DocumentArrowDownIcon,
  EnvelopeIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import profilePhoto from "./assets/images/FotoBaru.png";
import {
  certifications,
  contact,
  cvUrl,
  experience,
  organizationalExperience,
  profile,
  projects,
  socials,
  techStacks,
} from "./data/portfolio";
import "./App.css";

const navigation = [
  ["projects", "Projects"],
  ["experience", "Experience"],
  ["certifications", "Cert"],
];

const marqueeWords = [
  "Frontend Developer",
  "Android Developer",
  "Flutter",
  "Next.js",
  "React.js",
  "React Native",
  "Agile Methodology",
];

function ArrowLink({ href, children, className = "", download = false }) {
  const isExternal = /^https?:\/\//.test(href);

  return (
    <a
      className={`arrow-link ${className}`.trim()}
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      download={download || undefined}
    >
      <span>{children}</span>
      {download ? (
        <DocumentArrowDownIcon aria-hidden="true" />
      ) : (
        <ArrowUpRightIcon aria-hidden="true" />
      )}
    </a>
  );
}

function SectionLabel({ index, children, light = false }) {
  return (
    <p className={`section-label ${light ? "section-label--light" : ""}`}>
      <span aria-hidden="true">{index}</span>
      {children}
    </p>
  );
}

function LogoMark() {
  return (
    <span className="logo-mark" aria-hidden="true">
      <i>A</i>
      <i>O</i>
    </span>
  );
}

function ToolLogo({ type }) {
  const commonProps = {
    "aria-hidden": "true",
    className: "tool-logo",
    focusable: "false",
    viewBox: "0 0 48 48",
  };

  switch (type) {
    case "flutter":
      return (
        <svg {...commonProps}>
          <path d="M29 5 8 26l7 7L43 5H29Z" />
          <path d="m29 28-7 7 7 8h14L29 28Z" />
          <path d="m22 21-7 7 7 7 7-7-7-7Z" />
        </svg>
      );
    case "next":
      return (
        <svg {...commonProps}>
          <circle cx="24" cy="24" r="18" />
          <path d="M16 32V16h4l12 16V16" />
          <path d="M29 31 38 42" />
        </svg>
      );
    case "html":
      return (
        <svg {...commonProps}>
          <path d="m10 6 3 34 11 3 11-3 3-34H10Z" />
          <path d="M17 15h14l-.5 6H19l.4 5h10.7l-.7 7-5.4 1.5-5.4-1.5-.4-4" />
        </svg>
      );
    case "css":
      return (
        <svg {...commonProps}>
          <path d="m10 6 3 34 11 3 11-3 3-34H10Z" />
          <path d="M17 15h15l-.7 6H20.2l.4 4h10.2l-.9 8-5.9 1.8-5.9-1.8-.4-4" />
        </svg>
      );
    case "javascript":
      return (
        <svg {...commonProps}>
          <rect x="8" y="8" width="32" height="32" />
          <path d="M18 31c1.2 2.2 3.2 3.2 5.8 2.4V18" />
          <path d="M29 31c1.1 2 6.3 2.2 6.3-1.1 0-4-6.9-2.2-6.9-7 0-3.5 5.1-4.2 7-1.4" />
        </svg>
      );
    case "react":
    case "react-native":
      return (
        <svg {...commonProps}>
          <ellipse cx="24" cy="24" rx="18" ry="7" />
          <ellipse cx="24" cy="24" rx="18" ry="7" transform="rotate(60 24 24)" />
          <ellipse cx="24" cy="24" rx="18" ry="7" transform="rotate(120 24 24)" />
          <circle cx="24" cy="24" r="3" />
        </svg>
      );
    case "mysql":
      return (
        <svg {...commonProps}>
          <ellipse cx="24" cy="13" rx="15" ry="6" />
          <path d="M9 13v19c0 3.3 6.7 6 15 6s15-2.7 15-6V13" />
          <path d="M9 22c0 3.3 6.7 6 15 6s15-2.7 15-6" />
          <path d="M9 31c0 3.3 6.7 6 15 6s15-2.7 15-6" />
        </svg>
      );
    case "firebase":
      return (
        <svg {...commonProps}>
          <path d="m8 38 6-31 9 17 5-10 12 24-16 7-16-7Z" />
          <path d="m14 7 10 38" />
          <path d="m28 14-4 31" />
        </svg>
      );
    case "bootstrap":
      return (
        <svg {...commonProps}>
          <rect x="8" y="9" width="32" height="30" rx="7" />
          <path d="M19 16h8c4 0 6 1.8 6 4.7 0 2-1.2 3.5-3.4 4.1 2.8.6 4.4 2.3 4.4 4.8 0 3.4-2.5 5.4-7 5.4h-8V16Z" />
          <path d="M23 20v4h4c1.6 0 2.4-.7 2.4-2s-.9-2-2.5-2H23Zm0 8v4.4h4.5c1.8 0 2.8-.8 2.8-2.2 0-1.5-1-2.2-2.9-2.2H23Z" />
        </svg>
      );
    case "tailwind":
      return (
        <svg {...commonProps}>
          <path d="M12 25c3-8 8-12 15-12 4.5 0 7.4 2 9.5 5.9 1.3 2.3 2.7 3.4 4.5 3.4-3 8-8 12-15 12-4.5 0-7.4-2-9.5-5.9-1.3-2.3-2.7-3.4-4.5-3.4Z" />
          <path d="M7 34c3-8 8-12 15-12 4.5 0 7.4 2 9.5 5.9 1.3 2.3 2.7 3.4 4.5 3.4-3 8-8 12-15 12-4.5 0-7.4-2-9.5-5.9C10.2 35.1 8.8 34 7 34Z" />
        </svg>
      );
    case "github":
      return (
        <svg {...commonProps}>
          <path d="M24 6c-10 0-18 8.1-18 18 0 8 5.2 14.8 12.4 17.1.9.2 1.2-.4 1.2-.9v-3.4c-5 .9-6.1-2.1-6.1-2.1-.8-2-1.9-2.5-1.9-2.5-1.6-1.1.1-1.1.1-1.1 1.8.1 2.8 1.9 2.8 1.9 1.6 2.8 4.3 2 5.3 1.5.2-1.2.6-2 1.1-2.5-4-.5-8.2-2-8.2-8.8 0-1.9.7-3.5 1.9-4.8-.2-.5-.8-2.4.2-4.8 0 0 1.5-.5 5 1.8 1.5-.4 3-.6 4.6-.6 1.5 0 3.1.2 4.6.6 3.5-2.3 5-1.8 5-1.8 1 2.4.4 4.3.2 4.8 1.2 1.3 1.9 2.9 1.9 4.8 0 6.8-4.2 8.3-8.2 8.8.7.6 1.3 1.7 1.3 3.5v5.2c0 .5.3 1.1 1.3.9C36.8 38.8 42 32 42 24c0-9.9-8-18-18-18Z" />
        </svg>
      );
    case "agile":
      return (
        <svg {...commonProps}>
          <path d="M35 16a14 14 0 0 0-23 5" />
          <path d="M30 16h5v-5" />
          <path d="M13 32a14 14 0 0 0 23-5" />
          <path d="M18 32h-5v5" />
          <circle cx="24" cy="24" r="4" />
        </svg>
      );
    case "figma":
      return (
        <svg {...commonProps}>
          <path d="M24 24a7 7 0 1 1 7 7h-7v-7Z" />
          <path d="M17 10h7v14h-7a7 7 0 1 1 0-14Z" />
          <path d="M24 10h7a7 7 0 1 1 0 14h-7V10Z" />
          <path d="M17 24h7v7a7 7 0 1 1-7-7Z" />
        </svg>
      );
    default:
      return (
        <svg {...commonProps}>
          <circle cx="24" cy="24" r="15" />
          <path d="M24 13v22" />
          <path d="M13 24h22" />
        </svg>
      );
  }
}

function Header({ menuOpen, setMenuOpen }) {
  const menuButtonRef = useRef(null);
  const menuRef = useRef(null);
  const firstMobileLinkRef = useRef(null);
  const wasOpen = useRef(false);

  useEffect(() => {
    document.body.classList.toggle("menu-is-open", menuOpen);

    if (menuOpen) {
      firstMobileLinkRef.current?.focus();
    } else if (wasOpen.current) {
      menuButtonRef.current?.focus();
    }

    wasOpen.current = menuOpen;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    const desktopQuery = window.matchMedia?.("(min-width: 901px)");
    const closeOnDesktop = (event) => {
      if (event.matches) setMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    desktopQuery?.addEventListener?.("change", closeOnDesktop);

    return () => {
      document.body.classList.remove("menu-is-open");
      window.removeEventListener("keydown", closeOnEscape);
      desktopQuery?.removeEventListener?.("change", closeOnDesktop);
    };
  }, [menuOpen, setMenuOpen]);

  const trapMenuFocus = (event) => {
    if (event.key !== "Tab" || !menuRef.current) return;

    const focusable = Array.from(
      menuRef.current.querySelectorAll("a[href], button:not([disabled])"),
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  };

  return (
    <header className="site-header" data-site-header>
      <div className="scroll-progress" aria-hidden="true" />

      <a
        className="brand"
        href="#top"
        aria-label="Audima Oktasena, home"
        aria-hidden={menuOpen || undefined}
        tabIndex={menuOpen ? -1 : undefined}
      >
        <LogoMark />
        <span>
          Audima <b>Oktasena</b>
        </span>
      </a>

      <nav
        className="desktop-nav"
        aria-label="Primary navigation"
        aria-hidden={menuOpen || undefined}
      >
        {navigation.map(([id, label]) => (
          <a href={`#${id}`} key={id} tabIndex={menuOpen ? -1 : undefined}>
            {label}
          </a>
        ))}
      </nav>

      <a
        className="header-contact"
        href={contact.emailHref}
        aria-hidden={menuOpen || undefined}
        tabIndex={menuOpen ? -1 : undefined}
      >
        <span>Let&apos;s talk</span>
        <ArrowUpRightIcon aria-hidden="true" />
      </a>

      <button
        className="menu-button"
        type="button"
        ref={menuButtonRef}
        aria-label="Open navigation menu"
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        aria-hidden={menuOpen || undefined}
        tabIndex={menuOpen ? -1 : undefined}
        onClick={() => setMenuOpen(true)}
      >
        <span />
        <span />
      </button>

      {menuOpen ? (
        <div
          className="mobile-menu"
          id="mobile-menu"
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          onKeyDown={trapMenuFocus}
        >
          <div className="mobile-menu__topline">
            <span>Audima Oktasena / Portfolio 2026</span>
            <button
              type="button"
              aria-label="Close navigation menu"
              onClick={() => setMenuOpen(false)}
            >
              <XMarkIcon aria-hidden="true" />
            </button>
          </div>

          <nav aria-label="Mobile navigation">
            {navigation.map(([id, label], index) => (
              <a
                href={`#${id}`}
                key={id}
                ref={index === 0 ? firstMobileLinkRef : undefined}
                onClick={() => setMenuOpen(false)}
              >
                <span>0{index + 1}</span>
                {label}
                <ArrowUpRightIcon aria-hidden="true" />
              </a>
            ))}
          </nav>

          <div className="mobile-menu__footer">
            <ArrowLink href={cvUrl}>View résumé</ArrowLink>
            <a href={contact.emailHref}>{contact.email}</a>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function Hero() {
  const [introOpen, setIntroOpen] = useState(true);

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />

      <div className="hero-kicker hero-intro hero-intro--1">
        <span className="status-dot" />
        Frontend developer · Jakarta, ID
      </div>

      <h1 className="hero-title" id="hero-title">
        <span className="hero-title__line hero-title__line--one">
          <span>Audima</span>
        </span>
        <span className="hero-title__line hero-title__line--two">
          <span>Oktasena</span>
        </span>
      </h1>

      <div
        className={`hero-copy hero-intro hero-intro--3 ${
          introOpen ? "is-open" : "is-closed"
        }`}
      >
        <button
          className="hero-copy__toggle"
          type="button"
          id="hero-introduction-toggle"
          aria-expanded={introOpen}
          aria-controls="hero-introduction"
          onClick={() => setIntroOpen((open) => !open)}
        >
          <span>
            <i aria-hidden="true">✦</i>
            Role snapshot
          </span>
          <span className="hero-copy__toggle-icon" aria-hidden="true">
            <i />
            <i />
          </span>
        </button>

        <div
          className="hero-copy__panel"
          id="hero-introduction"
          role="region"
          aria-labelledby="hero-introduction-toggle"
          aria-hidden={!introOpen}
          {...(!introOpen ? { inert: "" } : {})}
        >
          <div className="hero-copy__panel-inner">
            <p>{profile.heroStatement}</p>
            <ArrowLink href="#projects">Explore selected projects</ArrowLink>
          </div>
        </div>
      </div>

      <figure className="hero-portrait">
        <div
          className="hero-portrait__shape hero-intro hero-intro--2"
          aria-hidden="true"
        />
        <div className="hero-portrait__person hero-intro hero-intro--2">
          <img
            src={profilePhoto}
            alt="Audima Oktasena"
            width="3413"
            height="5120"
            decoding="async"
            fetchpriority="high"
          />
        </div>
        <figcaption className="hero-intro hero-intro--3">
          <span>Junior Programmer,</span>
          <strong>PT Bank Raya Indonesia Tbk.</strong>
        </figcaption>
      </figure>

      <div className="hero-stamp hero-intro hero-intro--4" aria-hidden="true">
        <div className="hero-stamp__orbit">
          <span>PRODUCT</span>
          <span>CODE</span>
          <span>PEOPLE</span>
        </div>
        <i className="hero-stamp__ring hero-stamp__ring--outer" />
        <i className="hero-stamp__ring hero-stamp__ring--inner" />
        <i className="hero-stamp__satellite" />
        <b>+</b>
      </div>

      <div className="hero-meta hero-intro hero-intro--4">
        <div>
          <span>Current focus</span>
          <strong>Digital banking</strong>
        </div>
        <div>
          <span>Core surfaces</span>
          <strong>Web + Mobile</strong>
        </div>
        <div>
          <span>Location</span>
          <strong>{profile.location}</strong>
        </div>
        <a href="#about" aria-label="Scroll to profile">
          <ArrowDownIcon aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

function Marquee() {
  return (
    <div className="kinetic-marquee" aria-hidden="true">
      <div className="kinetic-marquee__track">
        {[0, 1].map((group) => (
          <div className="kinetic-marquee__group" key={group}>
            {marqueeWords.map((word) => (
              <span key={`${group}-${word}`}>
                {word}
                <i>✦</i>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section
      className="about section-shell"
      id="about"
      aria-labelledby="about-title"
    >
      <div className="about-heading" data-reveal="left">
        <SectionLabel index="01">Profile</SectionLabel>
        <h2 id="about-title">
          Who
          <em> I am?</em>
        </h2>
      </div>

      <div className="about-copy" data-reveal="up">
        <p className="about-lead">{profile.aboutLead}</p>
        {profile.aboutNotes.map((note) => (
          <p key={note}>{note}</p>
        ))}
        <ArrowLink href={cvUrl} className="button-link">
          Open résumé
        </ArrowLink>
      </div>

      <div className="about-facts" data-reveal="up">
        {profile.facts.map((fact, index) => (
          <article key={fact.label}>
            <span>
              0{index + 1} / {fact.label}
            </span>
            <strong>{fact.value}</strong>
            <p>{fact.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section
      className="projects section-shell"
      id="projects"
      aria-labelledby="projects-title"
    >
      <div className="projects-heading">
        <div data-reveal="left">
          <SectionLabel index="02">Selected Projects</SectionLabel>
          <h2 id="projects-title">
            Selected
            <em> projects.</em>
          </h2>
        </div>
        <p data-reveal="up">
          Some web and mobile projects I have worked on across services,
          payments, commerce, and operations.
        </p>
      </div>

      <div className="project-showcase">
        {projects.map((project, index) => (
          <article
            className={`project-panel project-panel--${project.slug} ${
              project.featured ? "project-panel--featured" : ""
            }`}
            style={{
              "--project-accent": project.accent,
              "--project-surface": project.surface,
            }}
            key={project.title}
            data-reveal="up"
          >
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${project.title} project`}
            >
              <div className="project-panel__topline">
                <span>
                  {project.featured
                    ? "Featured / New"
                    : `Project / 0${index + 1}`}
                </span>
                <span>{project.type}</span>
              </div>

              <div className="project-panel__art" aria-hidden="true">
                <span>{project.mark}</span>
                <i />
                <i />
              </div>

              <div className="project-panel__content">
                <span className="project-panel__index">0{index + 1}</span>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
              </div>

              <div className="project-panel__footer">
                <ul aria-label={`${project.title} technology stack`}>
                  {project.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <span className="project-panel__launch">
                  Visit project <ArrowUpRightIcon aria-hidden="true" />
                </span>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section
      className="experience section-shell section-shell--dark"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className="experience-intro" data-reveal="left">
        <SectionLabel index="03" light>
          Experience
        </SectionLabel>
        <h2 id="experience-title">
          Work
          <em> experience.</em>
        </h2>
        <p>
          My professional experience in frontend development, digital banking,
          and cross-functional product teams.
        </p>
      </div>

      <div className="experience-stack">
        {experience.map((item, index) => (
          <article
            className="experience-card"
            style={{ "--card-index": index }}
            key={item.role}
            data-reveal="up"
          >
            <div className="experience-card__topline">
              <span>0{index + 1}</span>
              <p>{item.period}</p>
              {item.current ? <i>Current</i> : null}
            </div>
            <h3>{item.role}</h3>
            <strong>{item.company}</strong>
            <p className="experience-card__summary">{item.summary}</p>
            <ul>
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function Toolkit() {
  return (
    <section className="toolkit section-shell" aria-labelledby="toolkit-title">
      <div className="toolkit-heading" data-reveal="left">
        <SectionLabel index="04">Toolkit</SectionLabel>
        <h2 id="toolkit-title">
          Tools &amp;
          <em> technologies.</em>
        </h2>
      </div>

      <div className="toolkit-grid" data-reveal="up">
        {techStacks.map((stack, index) => (
          <div className="tool-chip" key={stack.key}>
            <span className="tool-chip__index">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="tool-chip__icon">
              <ToolLogo type={stack.key} />
            </span>
            <strong>{stack.label}</strong>
            <i aria-hidden="true">↗</i>
          </div>
        ))}
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section
      className="certifications section-shell"
      id="certifications"
      aria-labelledby="certifications-title"
    >
      <div className="certifications-heading" data-reveal="left">
        <SectionLabel index="05">CERTIFICATIONS</SectionLabel>
        <h2 id="certifications-title">
          My
          <em> certifications.</em>
        </h2>
      </div>

      <div className="certification-list" data-reveal="up">
        {certifications.map(([year, title, provider], index) => (
          <article key={title}>
            <span>{year}</span>
            <h3>{title}</h3>
            <p>{provider}</p>
            <i aria-hidden="true">0{index + 1}</i>
          </article>
        ))}
      </div>
    </section>
  );
}

function Leadership() {
  return (
    <section
      className="leadership section-shell"
      id="leadership"
      aria-labelledby="leadership-title"
    >
      <div className="leadership-heading" data-reveal="left">
        <SectionLabel index="06">Organization</SectionLabel>
        <h2 id="leadership-title">
          Organization &amp;
          <em> leadership.</em>
        </h2>
        <p>
          Activities and responsibilities from company programs and student
          organizations.
        </p>
      </div>

      <div className="leadership-list">
        {organizationalExperience.map((item, index) => (
          <article key={`${item.role}-${item.period}`} data-reveal="up">
            <div className="leadership-list__index">
              <span>0{index + 1}</span>
              <p>{item.period}</p>
            </div>
            <div className="leadership-list__content">
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
  );
}

function Contact() {
  return (
    <section
      className="contact section-shell section-shell--dark"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="contact-topline" data-reveal="up">
        <span>{contact.prompt}</span>
        <span>{contact.location}</span>
      </div>

      <p className="contact-kicker" data-reveal="up">
        {contact.kicker}
      </p>
      <h2 id="contact-title" data-reveal="up">
        Build something
        <em> people can trust.</em>
      </h2>

      <a className="contact-email" href={contact.emailHref} data-reveal="up">
        <EnvelopeIcon aria-hidden="true" />
        <span>{contact.email}</span>
        <ArrowUpRightIcon aria-hidden="true" />
      </a>

      <footer>
        <p>{contact.footer}</p>
        <div>
          {socials.map(([label, href]) => (
            <a href={href} target="_blank" rel="noreferrer" key={label}>
              {label}
            </a>
          ))}
        </div>
        <a href="#top">
          Back to top <ArrowUpRightIcon aria-hidden="true" />
        </a>
      </footer>
    </section>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const shellRef = useRef(null);
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);

  useEffect(() => {
    const root = document.documentElement;
    const shell = shellRef.current;
    const reducedMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    )?.matches;
    const revealItems = Array.from(document.querySelectorAll("[data-reveal]"));

    root.classList.add("motion-ready");

    if (reducedMotion || typeof IntersectionObserver === "undefined") {
      revealItems.forEach((item) => item.classList.add("is-visible"));
    }

    const observer =
      !reducedMotion && typeof IntersectionObserver !== "undefined"
        ? new IntersectionObserver(
            (entries, currentObserver) => {
              entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add("is-visible");
                currentObserver.unobserve(entry.target);
              });
            },
            { rootMargin: "0px 0px -10%", threshold: 0.12 },
          )
        : null;

    observer && revealItems.forEach((item) => observer.observe(item));

    let scrollFrame = 0;
    const updateScroll = () => {
      scrollFrame = 0;
      const distance =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = distance > 0 ? window.scrollY / distance : 0;
      shell?.style.setProperty("--scroll-progress", String(progress));
      root.classList.toggle("page-is-scrolled", window.scrollY > 24);
    };
    const requestScrollUpdate = () => {
      if (!scrollFrame)
        scrollFrame = window.requestAnimationFrame(updateScroll);
    };

    updateScroll();
    window.addEventListener("scroll", requestScrollUpdate, { passive: true });
    window.addEventListener("resize", requestScrollUpdate);

    return () => {
      observer?.disconnect();
      if (scrollFrame) window.cancelAnimationFrame(scrollFrame);
      window.removeEventListener("scroll", requestScrollUpdate);
      window.removeEventListener("resize", requestScrollUpdate);
      root.classList.remove("motion-ready", "page-is-scrolled");
    };
  }, []);

  useEffect(() => {
    const finePointer = window.matchMedia?.(
      "(pointer: fine) and (prefers-reduced-motion: no-preference)",
    )?.matches;
    if (!finePointer) return undefined;

    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;
    let pointerFrame = 0;
    let latestEvent = null;

    document.body.classList.add("has-custom-cursor");

    const paintPointer = () => {
      pointerFrame = 0;
      if (!latestEvent) return;

      const { clientX, clientY, target } = latestEvent;
      dot?.style.setProperty("--cursor-x", `${clientX}px`);
      dot?.style.setProperty("--cursor-y", `${clientY}px`);
      ring?.style.setProperty("--cursor-x", `${clientX}px`);
      ring?.style.setProperty("--cursor-y", `${clientY}px`);
      ring?.classList.toggle(
        "is-hovering",
        Boolean(target?.closest?.("a, button, .tool-chip")),
      );
      dot?.classList.add("is-visible");
      ring?.classList.add("is-visible");
    };

    const handlePointer = (event) => {
      latestEvent = event;
      if (!pointerFrame)
        pointerFrame = window.requestAnimationFrame(paintPointer);
    };
    const hidePointer = () => {
      dot?.classList.remove("is-visible");
      ring?.classList.remove("is-visible");
    };

    window.addEventListener("pointermove", handlePointer, { passive: true });
    document.documentElement.addEventListener("mouseleave", hidePointer);

    return () => {
      if (pointerFrame) window.cancelAnimationFrame(pointerFrame);
      window.removeEventListener("pointermove", handlePointer);
      document.documentElement.removeEventListener("mouseleave", hidePointer);
      document.body.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <div className="portfolio-shell" ref={shellRef}>
      <a
        className="skip-link"
        href="#main-content"
        aria-hidden={menuOpen || undefined}
        tabIndex={menuOpen ? -1 : undefined}
      >
        Skip to content
      </a>

      <div className="cursor-dot" ref={cursorDotRef} aria-hidden="true" />
      <div className="cursor-ring" ref={cursorRingRef} aria-hidden="true" />

      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <main
        id="main-content"
        aria-hidden={menuOpen || undefined}
        {...(menuOpen ? { inert: "" } : {})}
      >
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Experience />
        <Toolkit />
        <Certifications />
        <Leadership />
        <Contact />
      </main>
    </div>
  );
}

export default App;
