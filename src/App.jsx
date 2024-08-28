import styles from "./App.module.css";
import animations from "./css-utils/animations.module.css";
import Nav from "./Nav";
import Profile from "./sections/Profile";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contacts from "./sections/Contacts";
import Footer from "./Footer";
import useSyncLink from "./hooks/useSyncLink";
import useSyncNav from "./hooks/useSyncNav";
import { useEffect } from "react";

function handleAnimate(entries) {
  const visible = entries.filter((entry) => entry.isIntersecting);

  if (visible.length > 0) {
    visible.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      entry.target.classList.add(animations[id]);
    });
  }
}

function App() {
  // only abstracting away hook logics to keep App.css cleaner
  useSyncNav();
  useSyncLink();
  // useAnimateOnView();
  //--> if i abstract below code ==> animations.module.css will be required in App.css in order to work, even if not visibly being accessed ==> coz of js dynamically added css module classes
  //--> therefore, to avoid confusion, i will keep the useAnimateOnView logic in the App.jsx

  useEffect(function () {
    const observer = new IntersectionObserver(handleAnimate, {
      root: null,
      threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    });

    const targets = document.querySelectorAll(".animate");

    targets.forEach((target) => {
      observer.observe(target);
    });

    return function () {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={styles.page}>
      <Nav />
      <Profile />
      <main className={styles.main}>
        <Section id="about" className={styles.section}>
          <About />
        </Section>
        <Section id="skills" className={styles.section}>
          <Skills />
        </Section>
        <Section id="projects" className={styles.section}>
          <Projects />
        </Section>
        <Section id="experience" className={styles.section}>
          <Experience />
        </Section>
        <Section id="contacts" className={styles.section}>
          <Contacts />
        </Section>
      </main>
      <Footer>Footer</Footer>
    </div>
  );
}

export default App;

function Section({ id, children }) {
  return (
    <section id={id} className={styles.section}>
      {children}
    </section>
  );
}
