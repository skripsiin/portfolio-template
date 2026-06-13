import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import ContactForm from '../components/ContactForm';
import projects from '../data/projects';

export default function Home() {
  return (
    <div className="page-home">
      <section id="hero">
        <Hero />
      </section>

      <section id="projects" className="section section-projects container">
        <div className="section-header">
          <h2>Selected work</h2>
          <p>Recent projects with strong business impact and polished execution.</p>
        </div>
        <div className="grid">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section id="about" className="section section-about container">
        <div className="section-header">
          <h2>About</h2>
          <p>Short professional bio, experience, skills and specialties.</p>
        </div>
        <p>
          Add your summary here. Mention industry experience, tools, and the value you bring.
        </p>
      </section>

      <section id="contact" className="section section-contact container">
        <div className="section-header">
          <h2>Contact</h2>
          <p>Ready to collaborate? Send a message and I’ll get back to you soon.</p>
        </div>
        <ContactForm />
      </section>
    </div>
  );
}