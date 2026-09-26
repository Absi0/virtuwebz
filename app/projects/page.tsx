import type { Metadata } from "next";
import Image from "next/image";
import { projects } from "../../data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore websites, applications and brand experiences designed and developed by VirtuWebz.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Selected Projects — VirtuWebz",
    description: "Explore websites, full-stack platforms and brand experiences designed and developed by VirtuWebz.",
    url: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <main className="projects-index">
      <nav className="projects-nav" aria-label="Projects navigation">
        <a className="projects-brand" href="/">VirtuWebz.</a>
        <div><a href="/#about">Studio</a><a href="/#services">Services</a><a href="/">Home</a></div>
        <a className="projects-contact" href="/#contact">Start a project <span aria-hidden="true">↗</span></a>
      </nav>

      <header className="projects-hero">
        <div className="projects-overline"><span>Selected archive</span></div>
        <h1>Work built for what comes next.</h1>
        <div className="projects-hero-copy">
          <p>A closer look at the websites, platforms and brand experiences we have shaped across industries.</p>
          <a href="#project-grid">View the full collection <span aria-hidden="true">↓</span></a>
        </div>
      </header>

      <section id="project-grid" className="project-archive" aria-label="All VirtuWebz projects">
        {projects.map((project, index) => (
          <article className="project-archive-card" key={project.name}>
            <figure>
              <Image src={project.image} alt={`${project.name} digital project`} fill sizes="(max-width: 760px) 92vw, (max-width: 1200px) 46vw, 42vw" priority={index < 2}/>
              <span>{String(index + 1).padStart(2, "0")}</span>
            </figure>
            <div className="project-archive-info">
              <div><h2>{project.url ? <a href={project.url} target="_blank" rel="noopener noreferrer">{project.name} <i aria-hidden="true">↗</i></a> : project.name}</h2><span>{project.year}</span></div>
              <p>{project.description}</p>
              <p className="project-technology"><b>Built with</b> {project.technology.join(" · ")}</p>
              <footer><span>{project.sector}</span><div>{project.tags.map(tag => <small key={tag}>{tag}</small>)}</div></footer>
            </div>
          </article>
        ))}
      </section>

      <footer className="projects-footer">
        <span>Have a project in mind?</span>
        <h2>Let’s make something<br/>worth remembering.</h2>
        <a href="mailto:hello@virtuwebz.com">hello@virtuwebz.com <span aria-hidden="true">↗</span></a>
        <div><span>VirtuWebz © {new Date().getFullYear()}</span><a href="/">Return home</a></div>
      </footer>
    </main>
  );
}
