import styles from './ContactSection.module.css';

export default function ContactSection() {
  return (
    <section className={`${styles.contactSection} sectionSpacing`} id="contacto">
      <div className={styles.headerBlock}>
        <h2 className="sectionTitle">Contacto</h2>
        <p className="sectionSubtitle">
          Estoy disponible para colaborar en proyectos de UI/UX y desarrollo web. Envía un mensaje para comenzar una conversación.
        </p>
      </div>

      <div className={styles.contactGrid}>
        <div className={styles.infoCard}>
          <h3>Información</h3>
          <p>Teléfono: <strong>3185394105</strong></p>
          <p>Correo: <strong>cristhian.reyes@estudiantesunibague.edu.co</strong></p>
          <p>Envíame un mensaje para consultas académicas, trabajo en equipo o diseño de portafolios.</p>
        </div>

        <form className={styles.formCard}>
          <label>
            Nombre
            <input type="text" placeholder="Tu nombre" />
          </label>
          <label>
            Email
            <input type="email" placeholder="tu@correo.com" />
          </label>
          <label>
            Mensaje
            <textarea rows="5" placeholder="Escribe tu mensaje aquí" />
          </label>
          <button type="button">Enviar mensaje</button>
        </form>
      </div>
    </section>
  );
}
