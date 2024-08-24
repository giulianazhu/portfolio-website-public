import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <div
        className={`${styles.description} animate`}
        id="animate-about-description"
      >
        <h2>ABOUT ME</h2>
        <div className={styles.text}>
          <p>
            Hi there! I&apos;m Giuliana, thank you for checking out my portfolio
            <span className={styles.emoji}> &#x1F917;</span>!
          </p>
          <p>
            I started learning web development in 2023, during the summer of my
            sophomore year. Having had a multi-cultural upbringing and
            possessing a curious minded personality, I decided to switch to a
            stimulating and dynamic career, with a fine balance between logic,
            analysis, and creativity!
          </p>
          <p>
            While I still haven&apos;t found my niche in this field, I&apos;m
            currently more inclined towards{" "}
            <span className={styles.highlight}>
              front-end or full-stack development
            </span>
            , particularly around{" "}
            <span className={styles.highlight}>
              web, native, or game applications
            </span>
            . My current goal is to accumulate work experience while continuing
            exploring my potentials and further opportunities.
          </p>
          <p>
            I&apos;m proficient in HTML, CSS, JavaScript, React.js, and
            moderately knowldgeable around other technology stacks as well{" "}
            <a href="#skills">[check out my skills]</a>.
          </p>
          <p>
            Aside from coding, I enjoy curling up at home as much as running,
            hiking, and exploring new places. And yes, I enjoy travelling, and
            would love to visit Japan someday!
          </p>
        </div>
      </div>
      <div className={`${styles.wrap} animate`} id="animate-about-img">
        <img
          // src="ray-zhuang-japan-unsplash.jpg"
          src="https://images.unsplash.com/photo-1607419726991-5fc7e74cda67?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHxNR29Ra3BsUnhkY3x8ZW58MHx8fHx8"
          alt="photo by ray-zhuang-unsplash"
          className={styles.img}
        />
      </div>
    </div>
  );
}
