import { profile } from './data/profile';
import { projects } from './data/projects';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>

      <header className="site-header">
        <nav aria-label="Primary">
          <a href="#top" className="brand">{profile.name}</a>
          <ul>
            {sections.map((s) => (
              <li key={s.id}><a href={`#${s.id}`}>{s.label}</a></li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="main">
        <section id="top" aria-labelledby="hero-title">
          <p className="eyebrow">Frontend Engineer</p>
          <h1 id="hero-title">{profile.name}</h1>
          <p className="headline">{profile.headline}</p>
          <p>{profile.intro}</p>
          <div className="actions">
            <a className="button" href="#projects">View projects</a>
            <a className="button secondary" href={`mailto:${profile.email}`}>Get in touch</a>
          </div>
        </section>

        <section id="about" aria-labelledby="about-title">
          <h2 id="about-title">About</h2>
          <p>{profile.volunteer}</p>
          <h3>Experience</h3>
          <ul className="experience-list">
            {profile.experience.map((e) => (
              <li key={e.company}>
                {e.company}, {e.role}
              </li>
            ))}
          </ul>
        </section>

        <section id="projects" aria-labelledby="projects-title">
          <h2 id="projects-title">Projects</h2>
          <div className="grid">
            {projects.map((p) => (
              <article className="card" key={p.id} aria-labelledby={`${p.id}-title`}>
                <p className="status">{p.status}</p>
                <h3 id={`${p.id}-title`}>{p.title}</h3>
                <p>{p.summary}</p>
                <ul className="tags" aria-label="Tech stack">
                  {p.stack.map((t) => <li key={t}>{t}</li>)}
                </ul>
                <ul className="highlights">
                  {p.highlights.map((h) => <li key={h}>{h}</li>)}
                </ul>
                <div className="links">
                  {p.liveUrl && (
                    <a href={p.liveUrl}>Live site<span className="sr-only"> for {p.title}</span></a>
                  )}
                  {p.repoUrl && (
                    <a href={p.repoUrl}>Code<span className="sr-only"> for {p.title}</span></a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" aria-labelledby="contact-title">
          <h2 id="contact-title">Contact</h2>
          <ul>
            <li><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
            <li><a href={profile.github}>GitHub</a></li>
            <li><a href={profile.linkedin}>LinkedIn</a></li>
          </ul>
        </section>
      </main>

      <footer>© {new Date().getFullYear()} {profile.name}</footer>
    </>
  );
}
