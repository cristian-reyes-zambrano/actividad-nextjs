import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.headerSection}>
      <div className={styles.brand}>Cristian Reyes</div>
      <nav className={styles.navLinks}>
        <a href="#inicio">Inicio</a>
        <a href="#sobre-mi">Sobre mí</a>
        <a href="#habilidades">Habilidades</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#contacto">Contacto</a>
      </nav>
      <div className={styles.heroCard} id="inicio">
        <div>
          <span className={styles.heroLabel}>Estudiante de Ingeniería de Sistemas</span>
          <h1 className={styles.heroName}>Cristian Fernando Reyes Zambrano</h1>
          <p className={styles.heroText}>
            Diseño digital enfocado en UI/UX y desarrollo web. Busco combinar usabilidad, estética y buenas prácticas para crear experiencias memorables.
          </p>
        </div>
        <div className={styles.heroActions}>
          <a href="#contacto" className={styles.primaryButton}>Contactar</a>
          <a href="#proyectos" className={styles.secondaryButton}>Ver proyectos</a>
        </div>
      </div>
    </header>
  );
}
