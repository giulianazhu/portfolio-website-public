import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <div className={styles.container}>
      <div
        className={`${styles.content} animate`}
        id="animate-experience-content"
      >
        <h2>EXPERIENCE</h2>
        <div className={styles.details}>
          No relevant work experience yet. Looking for any internship or
          entry-level developer position!
          <a className={styles.button} href="#contacts">
            Hire Me!
          </a>
        </div>
      </div>
    </div>
  );
}
