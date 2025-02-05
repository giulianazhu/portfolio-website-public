import styles from "./Nav.module.css";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import ToggleNavBar from "./ToggleNavBar";

export default function Nav() {
  const [visibleNav, setVisibleNav] = useState(false);

  function handleToggleNav() {
    setVisibleNav((prev) => !prev);
  }

  function handleOffNav() {
    setVisibleNav(false);
  }

  return (
    <>
      {/* id="mainNav" for nav bg change based on scroll */}
      <nav id="mainNav" className={styles.nav}>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#skills">Skills</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#experience">Experience</NavLink>
        <NavLink href="#contacts">Contacts</NavLink>
        <NavLink href="giulianazhu_resume.pdf" download={true}>
          Resume
        </NavLink>
        <div className={styles.toggler} onClick={handleToggleNav}>
          <RxHamburgerMenu size={40} />
        </div>
      </nav>
      <ToggleNavBar visible={visibleNav} onClick={handleOffNav} />
    </>
  );
}

function NavLink({ href, children, download }) {
  return (
    <a href={href} className={styles.link} download={download}>
      {children}
    </a>
  );
}
