import { Flex } from "antd";
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
            <Flex vertical gap="small">
              <h5>SEPTEMBER 2024 - MARCH 2025</h5>
              <p>Front-end developer intern at digit s.r.l.</p>
            </Flex>
            <Flex vertical gap="small">
              <h5>MARCH 2025 - ONGOING</h5>
              <p>Junior developer at digit s.r.l.</p>
            </Flex>

            {/* <span>Looking for remote developer job positions.</span> */}
            <a className={styles.button} href="#contacts">
              REACH OUT
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
