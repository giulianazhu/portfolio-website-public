import styles from "./Contacts.module.css";
import { SiLeetcode } from "react-icons/si";
import { FaGithubAlt, FaLinkedin } from "react-icons/fa6";
import { externalRedirect } from "../js-utils/utils";

export default function Contacts() {
  return (
    <div className={styles.outermost}>
      <h2>CONTACTS</h2>
      <ul className={styles.container}>
        <li>
          <b>Email: </b>giulianazhu2024@gmail.com
        </li>
        <li className={styles.links}>
          <div
            className={styles.logo}
            onClick={() => externalRedirect("https://github.com/giulianazhu")}
          >
            <FaGithubAlt />
          </div>
          <div
            className={styles.logo}
            onClick={() =>
              externalRedirect(
                "https://www.linkedin.com/in/giuliana-zhu-6b820b313/"
              )
            }
          >
            <FaLinkedin />
          </div>
          <div
            className={styles.logo}
            onClick={() => externalRedirect("https://leetcode.com/u/juliz/")}
          >
            <SiLeetcode />
          </div>
        </li>
      </ul>
    </div>
  );
}
