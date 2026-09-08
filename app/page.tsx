"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const services = [
  ["01", "Websites & digital experiences", "Distinct, high-performing websites designed to express your brand clearly and turn attention into action.", "Web design", "Development", "E-commerce"],
  ["02", "Apps & digital products", "Useful, intuitive applications and platforms shaped around real users, business goals and lasting value.", "UX / UI", "Web apps", "Prototypes"],
  ["03", "Brand identity & creative", "Confident visual systems, messaging and creative direction that give your business a recognizable place in the market.", "Strategy", "Identity", "Content"],
  ["04", "Growth systems & integrations", "Connected tools, smart automation and strong digital foundations that help your business work and grow more effectively.", "Automation", "APIs", "Analytics"],
];

const processSteps = [
  { number: "01", title: "Discover & Define", text: "We start with your business, audience and ambitions, then turn what we learn into a clear direction and focused plan.", image: "/projects/mockups.png" },
  { number: "02", title: "Structure & Direction", text: "We shape the content, user journeys and creative foundations so every part of the experience has a purpose.", image: "/projects/mockups.png" },
  { number: "03", title: "Design & Prototype", text: "We bring the direction to life through thoughtful visuals and interactive prototypes, refining the experience before launch.", image: "/projects/mockups.png" },
  { number: "04", title: "Build, Launch & Grow", text: "We build, test and launch with care, then keep improving the experience as your audience and business evolve.", image: "/projects/mockups.png" },
];

const heroFeatures = [
  { title: "Strategy & direction", heading: "Clear foundations", text: "Positioning, content and a focused digital plan built around where your business wants to go.", image: "/projects/mockups.png" },
  { title: "Web design & development", heading: "Made to connect", text: "Beautiful, responsive websites that communicate clearly and make every interaction feel effortless.", image: "/projects/mockups.png" },
  { title: "Apps & digital products", heading: "Ready to grow", text: "Useful digital tools and experiences designed around your customers and built for what comes next.", image: "/projects/mockups.png" },
];

const stackedProjects = [
  { name: "Eri Meeting Point", description: "A multilingual publishing platform with a focused editorial workspace and a clear experience for readers.", tags: ["Platform", "Editorial UX"], image: "/projects/mockups/eri-editor.jpeg" },
  { name: "Akaltun Real Estate", description: "A refined property experience that makes discovering, comparing and exploring spaces feel effortless.", tags: ["Real estate", "Web design"], image: "/projects/mockups/akaltun-real-estate.png" },
  { name: "Akaltun Furniture", description: "A visual digital showroom designed to let the collection, materials and craftsmanship lead the experience.", tags: ["E-commerce", "Creative direction"], image: "/projects/mockups/akaltun-furniture.png" },
  { name: "L’Atelier Design", description: "An elegant portfolio and service website built around interiors, atmosphere and confident editorial typography.", tags: ["Portfolio", "Brand experience"], image: "/projects/mockups/latelier.png" },
  { name: "Groupe Lachapelle", description: "A trustworthy, practical digital presence that turns specialist expertise into a clear customer journey.", tags: ["Construction", "Website"], image: "/projects/mockups/groupe-lachapelle.png" },
  { name: "Lipman Wizzifi", description: "A bold music-led experience that gives the artist’s identity, releases and energy a distinctive digital stage.", tags: ["Music", "Digital experience"], image: "/projects/mockups/wizzifi.png" },
  { name: "Beauty by Rhia", description: "A warm, polished booking experience created to showcase services and convert attention into appointments.", tags: ["Beauty", "Booking experience"], image: "/projects/mockups/beautybyrhia.png" },
];

function VirtuWebzWordmark() {
  return <span className="wordmark-glyphs" aria-hidden="true"><span>V</span><span className="wordmark-i">i</span><span className="wordmark-rt">rt</span><span>uWebz.</span></span>;
}

export default function Home() {
  const root = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(0);
  const [activeProcess, setActiveProcess] = useState(0);
  const [activeHeroFeature, setActiveHeroFeature] = useState(0);
  const [navHidden, setNavHidden] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setActiveHeroFeature(current => (current + 1) % heroFeatures.length);
    }, 4800);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const updateNavigation = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= 24) {
        setNavHidden(false);
      } else if (currentScrollY > lastScrollY + 6) {
        setNavHidden(true);
      } else if (currentScrollY < lastScrollY - 6) {
        setNavHidden(false);
      }
      if (Math.abs(currentScrollY - lastScrollY) > 6) lastScrollY = currentScrollY;
    };
    updateNavigation();
    window.addEventListener("scroll", updateNavigation, { passive: true });
    return () => window.removeEventListener("scroll", updateNavigation);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    const ctx = gsap.context(() => {
      gsap.from(".hero-word", { yPercent: 110, duration: 1.1, stagger: .1, ease: "power4.out" });
      gsap.from(".hero-meta", { opacity: 0, y: 25, duration: .8, delay: .65 });
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach(el => gsap.from(el, { scrollTrigger: { trigger: el, start: "top 84%" }, opacity: 0, y: 70, duration: 1, ease: "power3.out" }));
      gsap.utils.toArray<HTMLElement>(".project-card").forEach((el, i) => gsap.from(el, { scrollTrigger: { trigger: el, start: "top 88%" }, y: i % 2 ? 100 : 50, opacity: 0, duration: 1.1 }));
      gsap.utils.toArray<HTMLElement>(".stat-number").forEach(el => {
        const target = Number(el.dataset.count ?? 0);
        const suffix = el.dataset.suffix ?? "";
        const counter = { value: 0 };

        gsap.to(counter, {
          value: target,
          duration: 1.7,
          ease: "power2.out",
          onUpdate: () => { el.textContent = `${Math.round(counter.value)}${suffix}`; },
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });

      const processPanels = gsap.utils.toArray<HTMLElement>(".process-panel");
      const activateProcess = (index: number) => {
        const next = Math.max(0, Math.min(processPanels.length - 1, index));
        setActiveProcess(current => current === next ? current : next);
      };

      media.add("(max-width: 600px) and (prefers-reduced-motion: no-preference)", () => {
        const createMobileSequence = (
          trigger: string,
          length: number,
          activate: (index: number) => void,
        ) => {
          const scrollProgress = { step: 0 };

          gsap.to(scrollProgress, {
            step: length - 1,
            ease: "none",
            onUpdate: () => activate(Math.round(scrollProgress.step)),
            scrollTrigger: {
              trigger,
              start: "center center",
              end: () => `+=${window.innerHeight * (length - 1) * .8}`,
              pin: true,
              pinSpacing: true,
              anticipatePin: 1,
              scrub: .5,
              snap: {
                snapTo: 1 / (length - 1),
                duration: { min: .15, max: .35 },
                delay: .05,
                ease: "power1.inOut",
              },
              invalidateOnRefresh: true,
            },
          });
        };

        createMobileSequence(".service-list", services.length, index => {
          setOpen(current => current === index ? current : index);
        });
        createMobileSequence(".process-accordion", processPanels.length, activateProcess);
      });
    }, root);
    return () => {
      media.revert();
      ctx.revert();
    };
  }, []);

  return <main ref={root}>
    <nav className={`nav-wrap site-nav ${navHidden ? "nav-hidden" : ""}`}><a className="brand text-logo" href="#top" aria-label="VirtuWebz home"><VirtuWebzWordmark/></a><div className="nav-links"><a href="#about">Studio</a><a href="#services">Services</a><a href="#work">Projects</a></div><a href="#contact" className="nav-cta">Contact</a></nav>
    <section id="top" className="hero section-pad">
      <Image className="hero-photo" src="/images/hero-architecture.jpg" alt="Geometric blue architectural interior photographed by Jason Leung" fill priority loading="eager" sizes="100vw"/>
      <span className="hero-scrim" aria-hidden="true" />
      <div className="hero-kicker hero-meta"><span className="kicker-plus">+</span> VirtuWebz Digital Studio</div>
      <div className="hero-copy">
        <h1><span className="line"><span className="hero-word">Websites, Apps</span></span><span className="line"><span className="hero-word">& Brands Built</span></span><span className="line"><span className="hero-word">to Move Forward.</span></span></h1>
      </div>
      <aside className="hero-future hero-meta">
        <div><strong>Made for what’s next</strong><p>Thoughtful design and flexible technology that can grow alongside your business.</p><a href="#contact">Let’s talk</a></div>
        <figure><Image src="/projects/mockups.png" alt="" fill sizes="180px"/></figure>
      </aside>
      <div className="hero-showcase hero-meta">
        <div className="hero-feature-slider">
          <div className="feature-title-card">
            <div className="feature-controls">
              <button onClick={() => setActiveHeroFeature(current => (current - 1 + heroFeatures.length) % heroFeatures.length)} aria-label="Previous feature">−</button>
              <span>{heroFeatures.map((feature, index) => <button key={feature.title} className={activeHeroFeature === index ? "active" : ""} onClick={() => setActiveHeroFeature(index)} aria-label={`Show ${feature.title}`}/>)}</span>
            </div>
            <strong>{heroFeatures[activeHeroFeature].title}</strong>
          </div>
          <div className="feature-detail-card" key={heroFeatures[activeHeroFeature].title}>
            <div><strong>{heroFeatures[activeHeroFeature].heading}</strong><p>{heroFeatures[activeHeroFeature].text}</p><a href="#services">View services</a></div>
            <figure><Image src={heroFeatures[activeHeroFeature].image} alt="" fill sizes="130px"/></figure>
            <button className="feature-next" onClick={() => setActiveHeroFeature(current => (current + 1) % heroFeatures.length)} aria-label="Next feature">↘</button>
          </div>
        </div>
        <div className="hero-lockup">
          <strong>digital<br/>creative studio</strong>
          <a href="#contact">Start a project <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>

    <section id="about" className="intro section-pad light">
      <div className="section-label"><span>+</span> The studio</div>
      <div className="intro-copy" data-reveal>We combine <em>strategy, design</em> and technology to create websites, apps and brands that help businesses stand out and move forward.</div>
      <div className="intro-foot" data-reveal><p>From the first idea to launch and beyond, we bring every discipline together so the work feels clear, cohesive and genuinely useful.</p><div className="stats"><div><b className="stat-number" data-count="6" data-suffix="+">0+</b><span>Years of experience</span></div><div><b className="stat-number" data-count="10" data-suffix="+">0+</b><span>Projects delivered</span></div><div><b className="stat-number" data-count="100" data-suffix="%">0%</b><span>Client satisfaction</span></div></div></div>
    </section>

    <section id="work" className="work section-pad light">
      <div className="section-head"><div className="section-label"><span>+</span> Selected work</div><h2>Recent<br/>projects<span>.</span></h2><p>Websites, applications and brand experiences created to solve real challenges and open new opportunities.</p></div>
      <div className="stacked-work" aria-label="Selected VirtuWebz projects">{stackedProjects.map((project, index) => <article className="stacked-project-card" key={project.name} style={{zIndex:index + 1}}>
        <div className="stacked-project-visual">
          <Image src={project.image} alt={`${project.name} project mockup`} fill sizes="(max-width: 900px) 94vw, 88vw" priority={index === 0}/>
          <div className="stacked-project-shade" aria-hidden="true"/>
          <div className="stacked-project-index">{String(index + 1).padStart(2, "0")} / {String(stackedProjects.length).padStart(2, "0")}</div>
          <div className="stacked-project-copy"><strong>{project.name}</strong><p>{project.description}</p><div>{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
        </div>
      </article>)}</div>
    </section>

    <section id="services" className="services section-pad">
      <div className="section-head dark-head"><div className="section-label"><span>+</span> Capabilities</div><h2>Everything<br/>digital<span>.</span></h2></div>
      <div className="service-list">{services.map((s, i) => <article key={s[0]} className={`service ${open === i ? "active" : ""}`} onMouseEnter={() => setOpen(i)} onClick={() => setOpen(i)}><span className="num">({s[0]})</span><div><h3>{s[1]}</h3>{open === i && <div className="service-detail"><p>{s[2]}</p><div className="chips"><span>{s[3]}</span><span>{s[4]}</span><span>{s[5]}</span></div></div>}</div><button aria-label={`View ${s[1]}`}>{open === i ? "−" : "+"}</button></article>)}</div>
    </section>

    <section className="process section-pad light"><div className="section-label"><span>+</span> How we work</div><h2 data-reveal>Thoughtful process.<br/><em>No guesswork.</em></h2><div className="process-accordion" data-reveal>{processSteps.map((step, i) => <button key={step.number} className={`process-panel ${activeProcess === i ? "active" : ""}`} onMouseEnter={() => setActiveProcess(i)} onFocus={() => setActiveProcess(i)} onClick={() => setActiveProcess(i)} aria-label={`View ${step.title} stage`}><Image src={step.image} alt={`${step.title} stage of the VirtuWebz creative process`} fill sizes="(max-width: 800px) 85vw, 65vw"/><span className="process-shade"/><span className="process-number">{step.number}</span><span className="process-title">{step.title}</span><span className="process-copy">{step.text}</span></button>)}</div></section>

    <footer id="contact" className="footer section-pad">
      <h2 data-reveal>Have an idea<br/><span>worth bringing to life?</span></h2>

      <div className="footer-cards">
        <a className="footer-card" href="mailto:hello@virtuwebz.com">
          <span><strong>Start a project</strong><small>hello@virtuwebz.com</small></span>
          <svg viewBox="0 0 64 64" aria-hidden="true"><path d="M12 52 52 12M20 12h32v32"/></svg>
        </a>
        <div className="footer-card">
          <span><strong>Working worldwide</strong><small>Remote collaboration across time zones</small></span>
          <svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="24"/><path d="M8 32h48M32 8c8 8 12 16 12 24S40 48 32 56M32 8c-8 8-12 16-12 24s4 16 12 24"/></svg>
        </div>
      </div>

      <a className="footer-wordmark" href="#top" aria-label="VirtuWebz home"><VirtuWebzWordmark/></a>
    </footer>
  </main>;
}
