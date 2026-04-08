import styles from './ProjectsSection.module.css';

const projects = [
  {
    title: 'Portfolio UI/UX académico',
    description: 'Diseño de página personal con enfoque en presentación profesional, navegación clara y experiencia móvil amigable.',
    tags: ['Next.js', 'Responsive', 'UI/UX'],
  },
  {
    title: 'Landing page de aplicación',
    description: 'Prototipo de landing page para app enfocada en productividad con estructura de contenido jerárquica y llamadas a la acción visibles.',
    tags: ['HTML', 'CSS', 'Diseño de interacción'],
  },
  {
    title: 'Dashboard de métricas',
    description: 'Concepto de panel administrativo con tarjetas y visualización de datos simplificada para experiencia rápida y accesible.',
    tags: ['Investigación UX', 'Card design', 'Accesibilidad'],
  },
];

export default function ProjectsSection() {
  return (
    <section className={`${styles.projectSection} sectionSpacing`} id="proyectos">
      <div className={styles.headerBlock}>
        <h2 className="sectionTitle">Proyectos</h2>
        <p className="sectionSubtitle">
          Ejemplos de diseños y prototipos pensados para demostrar claridad visual, estructura y enfoque en el usuario.
        </p>
      </div>

      <div className={styles.cardsGrid}>
        {projects.map((project) => (
          <article key={project.title} className={styles.projectCard}>
            <div className={styles.projectTop}>
              <span className={styles.projectCategory}>Proyecto académico</span>
              <h3>{project.title}</h3>
            </div>
            <p>{project.description}</p>
            <div className={styles.projectTags}>
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
