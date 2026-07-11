import { useEffect, useRef, useState } from "react";
import {
  ArrowDownIcon,
  ArrowUpRightIcon,
  DocumentArrowDownIcon,
  EnvelopeIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import profilePhoto from "./assets/images/FotoProfile1.png";
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

const projectPointerStates = new WeakMap();

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
            <span>Navigation / Portfolio 2026</span>
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

      <div className="hero-copy hero-intro hero-intro--3">
        <span className="hero-copy__marker">✦</span>
        <p>{profile.heroStatement}</p>
        <ArrowLink href="#projects">Explore selected projects</ArrowLink>
      </div>

      <figure className="hero-portrait hero-intro hero-intro--2">
        <div className="hero-portrait__shape" aria-hidden="true">
          <span>A/O</span>
        </div>
        <img
          src={profilePhoto}
          alt="Audima Oktasena"
          width="933"
          height="702"
          decoding="async"
          fetchpriority="high"
        />
        <figcaption>
          <span>Junior Programmer,</span>
          <strong>PT Bank Raya Indonesia Tbk.</strong>
        </figcaption>
      </figure>

      <div className="hero-stamp hero-intro hero-intro--4" aria-hidden="true">
        <span>PRODUCT</span>
        <span>CODE</span>
        <span>PEOPLE</span>
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
          <span>Timezone</span>
          <strong>{profile.timezone}</strong>
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
        <SectionLabel index="01">Profile / Approach</SectionLabel>
        <h2 id="about-title">
          Clear interfaces for
          <em> complex systems.</em>
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

function handleProjectPointer(event) {
  if (event.pointerType && event.pointerType !== "mouse") return;
  if (window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) return;

  const card = event.currentTarget;
  const state = projectPointerStates.get(card) || {
    frame: 0,
    rect: card.getBoundingClientRect(),
  };

  state.clientX = event.clientX;
  state.clientY = event.clientY;

  if (!state.frame) {
    state.frame = window.requestAnimationFrame(() => {
      const x = (state.clientX - state.rect.left) / state.rect.width - 0.5;
      const y = (state.clientY - state.rect.top) / state.rect.height - 0.5;

      card.style.setProperty("--tilt-x", `${(-y * 5).toFixed(2)}deg`);
      card.style.setProperty("--tilt-y", `${(x * 6).toFixed(2)}deg`);
      card.style.setProperty("--spot-x", `${((x + 0.5) * 100).toFixed(1)}%`);
      card.style.setProperty("--spot-y", `${((y + 0.5) * 100).toFixed(1)}%`);
      state.frame = 0;
    });
  }

  projectPointerStates.set(card, state);
}

function resetProjectPointer(event) {
  const card = event.currentTarget;
  const state = projectPointerStates.get(card);

  if (state?.frame) window.cancelAnimationFrame(state.frame);
  projectPointerStates.delete(card);
  card.style.removeProperty("--tilt-x");
  card.style.removeProperty("--tilt-y");
  card.style.removeProperty("--spot-x");
  card.style.removeProperty("--spot-y");
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
            Interfaces built for
            <em> real momentum.</em>
          </h2>
        </div>
        <p data-reveal="up">
          Product explorations across commerce, operations, payments, and mobile
          experiences—each shaped around a clear user journey.
        </p>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <article
            className={`project-card project-card--${index + 1}`}
            style={{ "--accent": project.accent }}
            key={project.title}
            data-reveal="up"
          >
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${project.title} project`}
              onPointerMove={handleProjectPointer}
              onPointerLeave={resetProjectPointer}
              onPointerCancel={resetProjectPointer}
            >
              <div className="project-card__visual">
                <span className="project-card__number">0{index + 1}</span>
                <img
                  src={project.image}
                  alt={`${project.title} interface preview`}
                  width="640"
                  height="457"
                  loading="lazy"
                  decoding="async"
                />
                <span className="project-card__open" aria-hidden="true">
                  <ArrowUpRightIcon />
                </span>
              </div>

              <div className="project-card__meta">
                <div>
                  <span>{project.type}</span>
                  <h3>{project.title}</h3>
                </div>
                <ul aria-label={`${project.title} technology stack`}>
                  {project.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
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
          Product work,
          <em> shipped with teams.</em>
        </h2>
        <p>
          Customer-facing interfaces in a regulated, cross-functional, and
          fast-moving environment.
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
          A practical stack for
          <em> ambitious products.</em>
        </h2>
      </div>

      <div className="toolkit-grid" data-reveal="up">
        {techStacks.map((stack, index) => (
          <div className="tool-chip" key={stack.key}>
            <span>{String(index + 1).padStart(2, "0")}</span>
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
          Always learning,
          <em> always refining.</em>
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
        <SectionLabel index="06">
          ORGANIZATIONAL & LEADERSHIP EXPERIENCE
        </SectionLabel>
        <h2 id="leadership-title">
          Culture, events,
          <em> and leadership.</em>
        </h2>
        <p>
          Building momentum with people—across company initiatives and student
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
