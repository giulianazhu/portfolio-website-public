import styles from "./Profile.module.css";

export default function Profile() {
  return (
    <div className={styles.container}>
      <h1 className={styles.headline}>Giuliana Zhu</h1>
      <h2 className={styles.descriptor} id="no-letter-space">
        Entry-level Developer
      </h2>
      <p className={styles.description}>
        Hello! I am a self-taught Front-end Developer specialized in React.js
      </p>
    </div>
  );
}
