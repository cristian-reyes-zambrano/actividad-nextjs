import Image from 'next/image';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  return (
    <section className={`${styles.aboutSection} sectionSpacing`} id="sobre-mi">
      <div className={styles.headerBlock}>
        <h2 className="sectionTitle">Sobre mí</h2>
        <p className="sectionSubtitle">
          Soy estudiante de Ingeniería de Sistemas con una fuerte orientación hacia el diseño centrado en el usuario, usabilidad y desarrollo front-end moderno. Me apasiona crear experiencias web intuitivas y visualmente limpias.
        </p>
      </div>

      <div className={styles.contentGrid}>
        <div className={styles.profileCard}>
          <div className={styles.profilePhoto}>
            <Image
              src="/imagenes/1104545485.jpg"
              alt="Foto de Cristian Fernando Reyes Zambrano"
              width={300}
              height={300}
              className={styles.profileImage}
              priority
            />
          </div>
          <div className={styles.profileInfo}>
            <p><strong>Nombre:</strong> Cristian Fernando Reyes Zambrano</p>
            <p><strong>Rol:</strong> Estudiante de Ingeniería de Sistemas</p>
            <p><strong>Enfoque:</strong> UI/UX, prototipado, desarrollo web y diseño responsivo.</p>
          </div>
        </div>

        <div className={styles.aboutTextCard}>
          <p>
            Me especializo en crear interfaces limpias y con sentido, pensadas para facilitar la interacción del usuario y contar historias digitales fuertes. Trabajo con HTML, CSS, JavaScript y Next.js, integrando principios de accesibilidad y arquitectura visual.
          </p>
          <p>
            En cada proyecto busco un equilibrio entre funcionalidad y estética, cuidando el espaciado, la legibilidad y la consistencia visual para entregar soluciones convincentes y profesionales.
          </p>
        </div>
      </div>
    </section>
  );
}
