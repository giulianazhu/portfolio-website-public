import styles from "./Footer.module.css";
import { FaRegCopyright } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <FaRegCopyright /> Designed and Built by Giuliana Zhu
    </footer>
  );
}
