import styles from './SkillsSection.module.css';

const technicalSkills = [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 88 },
  { name: 'JavaScript', level: 78 },
  { name: 'Next.js', level: 72 },
];

const uxSkills = [
  { name: 'Diseño centrado en el usuario', level: 85 },
  { name: 'Prototipado', level: 88 },
  { name: 'Usabilidad', level: 92 },
];

export default function SkillsSection() {
  return (
    <section className={`${styles.skillsSection} sectionSpacing`} id="habilidades">
      <div className={styles.headerBlock}>
        <h2 className="sectionTitle">Habilidades</h2>
        <p className="sectionSubtitle">
          Conocimiento en herramientas de desarrollo y técnicas de UI/UX que impulsan interfaces eficaces, accesibles y bien organizadas.
        </p>
      </div>

      <div className={styles.skillGrid}>
        <div className={styles.skillCard}>
          <h3>Desarrollo web</h3>
          <p>Lenguajes y frameworks esenciales para construir interfaces modernas y responsivas.</p>
          <div className={styles.badgeList}>
            {technicalSkills.map((skill) => (
              <div key={skill.name} className={styles.skillBarItem}>
                <span>{skill.name}</span>
                <div className={styles.skillBarBackground}>
                  <div className={styles.skillBarFill} style={{ width: `${skill.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.skillCard}>
          <h3>UI/UX</h3>
          <p>Principios de diseño que mejoran la experiencia visual y funcional del usuario.</p>
          <div className={styles.badgeList}>
            {uxSkills.map((skill) => (
              <div key={skill.name} className={styles.skillBarItem}>
                <span>{skill.name}</span>
                <div className={styles.skillBarBackground}>
                  <div className={styles.skillBarFill} style={{ width: `${skill.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
