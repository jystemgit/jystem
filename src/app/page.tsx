"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Soluciones", href: "#soluciones" },
  { label: "Contacto", href: "#contacto" },
];

const projects = [
  {
    title: "VARESE Menswear",
    description: "Tienda online de moda masculina contemporánea con catálogo, marca y experiencia de compra integrada",
    category: "E-commerce",
    tone: "projectSilver",
    url: "https://mens-clothing-web-template-varese.vercel.app/",
    image: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?auto=format&fit=crop&w=1200&q=82",
  },
  {
    title: "Milanno",
    description: "Experiencia gastronómica para milanesas premium con menú, reservas, locales y delivery integrados",
    category: "Gastronomía",
    tone: "projectBlue",
    url: "https://milanno-web-template.vercel.app/",
    image: "https://milanno-web-template.vercel.app/assets/mila1.png",
  },
  {
    title: "NovaTV",
    description: "Plataforma de TV en vivo con más de 1000 canales, prueba gratuita y acceso desde hasta 3 dispositivos",
    category: "Streaming",
    tone: "projectPurple",
    url: "https://novatvgo.com",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=1200&q=82",
  },
];

const services = [
  {
    name: "Studio",
    description: "Sistemas personalizados para resolver problemas específicos y mejorar la forma en que tu empresa opera",
    tone: "serviceSilver",
    status: "Activo",
    statusTone: "statusActive",
    logo: "/studio.png",
  },
  {
    name: "Business",
    description: "Herramientas empresariales reutilizables para resolver problemas concretos de forma rápida, simple y eficiente",
    tone: "serviceBlue",
    status: "En Desarrollo",
    statusTone: "statusDevelopment",
    logo: "/business.png",
  },
  {
    name: "Engine",
    description: "Ecosistemas empresariales completos para operar nuevos modelos de negocio con sistemas e infraestructura especializada",
    tone: "servicePurple",
    status: "Próximamente",
    statusTone: "statusSoon",
    logo: "/engine.png",
  },
];

const whatsappUrl = "https://wa.me/5492922432839?text=Hola%20Jystem%2C%20quiero%20analizar%20mi%20negocio";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [visualStage, setVisualStage] = useState("business");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(`.${styles.navList} a`);

    if (!sections.length || !navLinks.length) {
      return;
    }

    const setActive = (id: string) => {
      setActiveSection(id);
      navLinks.forEach((link) => {
        const href = link.getAttribute("href") || "";
        const isActive = href === `#${id}`;
        link.classList.toggle(styles.menuActive, isActive);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    setActive("inicio");

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const hero = document.getElementById("inicio");
    if (!hero) return;

    let scrollTimer: number | undefined;
    const stageOrder = ["business", "system", "company"];
    let autonomousIndex = 0;

    const advanceStage = () => {
      autonomousIndex = (autonomousIndex + 1) % stageOrder.length;
      setVisualStage(stageOrder[autonomousIndex]);
    };

    const interval = window.setInterval(advanceStage, 4500);
    const handleScroll = () => {
      window.clearTimeout(scrollTimer);
      scrollTimer = window.setTimeout(() => {
        const progress = Math.min(Math.max(window.scrollY / Math.max(hero.offsetHeight, 1), 0), 1);
        const nextStage = progress > 0.58 ? "company" : progress > 0.2 ? "system" : "business";
        autonomousIndex = stageOrder.indexOf(nextStage);
        setVisualStage(nextStage);
      }, 80);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.clearInterval(interval);
      window.clearTimeout(scrollTimer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className={styles.page}>
      <header className={`${styles.siteHeader} ${menuOpen ? styles.menuOpen : ""}`} id="top">
        <div className={styles.headerContainer}>
          <a className={styles.brand} href="#inicio" aria-label="Jystem inicio">
            <img
              src="/logo-jystem.jpg"
              alt="Jystem"
              className={styles.brandLogo}
            />
            <span className={styles.brandCopy}>
              <span className={styles.brandName}>JYSTEM</span>
              <span className={styles.brandTag}>Ecosistema Empresarial</span>
            </span>
          </a>

          <button
            className={styles.navToggle}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="primary-nav"
            aria-label={menuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={styles.mainNav} aria-label="Navegación principal">
            <ul className={styles.navList} id="primary-nav">
              {navItems.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className={activeSection === href.replace("#", "") ? styles.menuActive : ""}
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a href={whatsappUrl} className={styles.headerCta} target="_blank" rel="noreferrer">
            Analizar mi negocio
          </a>
        </div>
      </header>

      <section className={styles.hero} id="inicio">
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>
                JYSTEM <span>Transformación Empresarial</span>
              </p>

              <h1>
                Del Negocio <span className={styles.emphasis}>a la Empresa</span>
              </h1>

              <p className={styles.lead}>
                Diseñamos e implementamos sistemas que ayudan a negocios a operar con
                más estructura, control, eficiencia y capacidad para crecer
              </p>

              <p className={styles.supporting}>
                Tu negocio no necesita más herramientas
                <span>Necesita el sistema correcto</span>
              </p>

              <div className={styles.heroActions}>
                <a className={styles.primaryButton} href={whatsappUrl} target="_blank" rel="noreferrer">
                  Analizar mi negocio
                </a>
                <a className={styles.secondaryButton} href="#soluciones">
                  Ver cómo funciona
                </a>
              </div>

              <p className={styles.microcopy}>Sistemas personalizados. Tecnología con propósito</p>
            </div>

            <div className={styles.heroVisual} aria-label="Sistema Jystem">
              <div className={`${styles.systemStage} ${styles[`stage${visualStage}`]}`}>
                <div className={styles.systemAtmosphere} aria-hidden="true" />

                <svg className={styles.systemConnections} viewBox="0 0 600 560" aria-hidden="true">
                  <defs>
                    <linearGradient id="silverFlow" x1="0" x2="1">
                      <stop offset="0" stopColor="#8A93A6" stopOpacity="0.2" />
                      <stop offset="0.5" stopColor="#00A8FF" stopOpacity="0.9" />
                      <stop offset="1" stopColor="#6D2CFF" stopOpacity="0.35" />
                    </linearGradient>
                    <filter id="flowGlow">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                    </filter>
                  </defs>
                  <path className={`${styles.connection} ${styles.connectionOne}`} d="M90 125 C175 140 205 190 258 245" />
                  <path className={`${styles.connection} ${styles.connectionTwo}`} d="M500 105 C425 135 395 175 350 235" />
                  <path className={`${styles.connection} ${styles.connectionThree}`} d="M70 335 C160 320 198 300 252 284" />
                  <path className={`${styles.connection} ${styles.connectionFour}`} d="M490 360 C420 335 388 315 348 300" />
                  <path className={`${styles.connection} ${styles.connectionFive}`} d="M190 485 C235 415 260 380 278 342" />
                  <path className={`${styles.connection} ${styles.connectionSix}`} d="M420 475 C380 415 350 375 326 340" />
                  <circle className={`${styles.flowSignal} ${styles.flowOne}`} r="3.5" fill="url(#silverFlow)" filter="url(#flowGlow)" />
                  <circle className={`${styles.flowSignal} ${styles.flowTwo}`} r="3.5" fill="#00A8FF" filter="url(#flowGlow)" />
                  <circle className={`${styles.flowSignal} ${styles.flowThree}`} r="3.5" fill="#6D2CFF" filter="url(#flowGlow)" />
                </svg>

                <div className={styles.systemCore}>
                  <div className={styles.coreBackLayer} />
                  <div className={styles.coreMidLayer} />
                  <div className={styles.coreFrontLayer}>
                    <img src="/jystem-logo-no-bg.png" alt="" className={styles.coreLogo} />
                  </div>
                  <svg className={styles.coreGeometry} viewBox="0 0 220 220" aria-hidden="true">
                    <path d="M110 19 180 59 180 145 110 185 40 145 40 59Z" />
                    <path d="M110 42 158 70 158 130 110 158 62 130 62 70Z" />
                    <path d="M110 67 136 82 136 118 110 133 84 118 84 82Z" />
                    <path className={styles.coreEnergyLine} d="M25 110h45m105 0h20M110 25v35m0 100v35" />
                  </svg>
                  <div className={styles.coreVoid} aria-hidden="true" />
                  <span className={styles.coreLabel}>SYSTEM CORE</span>
                </div>

                <div className={`${styles.systemNode} ${styles.nodeOperation}`}><span>Operación</span></div>
                <div className={`${styles.systemNode} ${styles.nodeProcesses}`}><span>Procesos</span></div>
                <div className={`${styles.systemNode} ${styles.nodeData}`}><span>Datos</span></div>
                <div className={`${styles.systemNode} ${styles.nodeAutomation}`}><span>Automatización</span></div>
                <div className={`${styles.systemNode} ${styles.nodeInfrastructure}`}><span>Infraestructura</span></div>
                <div className={`${styles.systemNode} ${styles.nodeIntegration}`}><span>Integraciones</span></div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.servicesSection} id="servicios">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Servicios</p>
            <h2>
              Tres formas de <span>hacer crecer tu sistema</span>
            </h2>
          </div>

          <div className={styles.serviceGrid}>
            {services.map((service) => (
              <article key={service.name} className={`${styles.serviceCard} ${styles[service.tone]}`}>
                <div className={styles.serviceTopline}>
                  <span className={`${styles.serviceStatus} ${styles[service.statusTone]}`}>
                    <i />
                    {service.status}
                  </span>
                </div>
                <img src={service.logo} alt="" className={styles.serviceLogo} />
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} id="soluciones">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Soluciones</p>
            <h2>
              Proyectos que convierten <span>estructura en crecimiento</span>
            </h2>
            <p className={styles.sectionIntro}>
              Tres sistemas lanzados por Jystem para transformar operaciones reales en empresas preparadas para crecer
            </p>
          </div>

          <div className={styles.projectGrid}>
            {projects.map((project) => (
              <article key={project.title} className={`${styles.projectCard} ${styles[project.tone]}`}>
                <div className={styles.projectVisual} aria-hidden="true">
                  <img src={project.image} alt="" className={styles.projectImage} loading="lazy" />
                  <span className={styles.projectImageOverlay} />
                </div>
                <div className={styles.projectMeta}>
                  <span>{project.category}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a
                  className={styles.projectLink}
                  href={project.url || "#contacto"}
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver proyecto <b>↗</b>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection} id="contacto">
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <p className={styles.eyebrow}>Siguiente paso</p>
            <h2>
              Tu negocio ya tiene una base<br />
              <span>Ahora necesita una estructura que la sostenga</span>
            </h2>
            <a className={styles.primaryButton} href={whatsappUrl} target="_blank" rel="noreferrer">
              Analizar Mi Negocio
            </a>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerMain}>
            <div className={styles.footerBrandBlock}>
              <img src="/logo-jystem.jpg" alt="Jystem" className={styles.footerLogo} />
              <strong className={styles.footerCompanyName}>JYSTEM</strong>
              <p>Del Negocio a la Empresa</p>
              <span>Transformación empresarial con tecnología y sistemas</span>
            </div>

            <div className={styles.footerColumn}>
              <h3>Explorar</h3>
              <a href="#inicio">Inicio</a>
              <a href="#servicios">Servicios</a>
              <a href="#soluciones">Soluciones</a>
            </div>

            <div className={styles.footerColumn}>
              <h3>Hablemos</h3>
              <a href="mailto:hola@jystem.com.ar">hola@jystem.com.ar</a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer">Analizar mi negocio</a>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <span>Jystem 2026 © Todos los derechos reservados</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
