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
            Currently working as a front-end developer intern for a start-up
            company.
            <span>Looking for remote developer job positions.</span>
            <a className={styles.button} href="#contacts">
              REACH OUT
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
