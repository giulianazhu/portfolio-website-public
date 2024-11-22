import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <div className={styles.container}>
      <div
        className={`${styles.content} animate`}
        id="animate-experience-content"
      >
        <h2>EXPERIENCE</h2>
        <div>
          <div className={styles.details}>
            <h4>SEPTEMBER 2024 - ongoing</h4>
            Currently working as front-end developer intern for a start-up
            company. Feel free to reach out for job offers from Japan or remote
            positions, or if you simply want to connect.
            <a className={styles.button} href="#contacts">
              REACH OUT
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
