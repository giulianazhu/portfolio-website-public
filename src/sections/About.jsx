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
            {"Hi there! I am Giuliana, thank you for checking out my portfolio"}
            <span className={styles.emoji}> &#x1F917;</span>!
          </p>
          <p>
            {
              "I started learning web development in 2023, and landed on my first internship as front-end developer in 2024. During the internship, I worked as the main FE developer responsible for building all UIs, and integrating all APIs for a new React TypeScript CRM website, and lastly, contributed to maintaining and bug fixing associated angular projects"
            }
          </p>
          <p>
            {"I am currently more inclined towards "}
            <span className={styles.highlight}>
              {"front-end or full-stack development"}
            </span>
            {", particularly around "}
            <span className={styles.highlight}>
              {"web and native applications"}
            </span>
            {
              ". My current goal is to accumulate work experience while continuing exploring my potentials and further opportunities."
            }
          </p>
          <p>
            {
              "I'm proficient in HTML, CSS, JavaScript/TypeScript, React.js, and moderately knowldgeable around other technology stacks as well "
            }
            <a href="#skills">[check out my skills]</a>.
          </p>
          <p>
            {
              "Aside from coding, I enjoy curling up at home as much as running, hiking, and exploring new places. And yes, I enjoy travelling, and would love to visit Japan someday!"
            }
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
