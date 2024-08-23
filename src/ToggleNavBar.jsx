import styles from "./ToggleNavBar.module.css";

export default function ToggleNavBar({ visible, onClick }) {
  return (
    <nav className={`${styles.links} ${visible && styles.visible}`}>
      <NavLink href="#about" onClick={onClick}>
        About
      </NavLink>
      <NavLink href="#skills" onClick={onClick}>
        Skills
      </NavLink>
      <NavLink href="#projects" onClick={onClick}>
        Projects
      </NavLink>
      <NavLink href="#experience" onClick={onClick}>
        Experience
      </NavLink>
      <NavLink href="#contacts" onClick={onClick}>
        Contacts
      </NavLink>
      <NavLink href="#resume" onClick={onClick}>
        Resume
      </NavLink>
    </nav>
  );
}

function NavLink({ href, children, onClick }) {
  return (
    <a href={href} className={styles.link} onClick={onClick}>
      <span className={styles.text}>{children}</span>
      <span className={styles.underline}></span>
    </a>
  );
}
