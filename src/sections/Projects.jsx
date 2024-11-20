import styles from "./Projects.module.css";
import { RiArrowDownSFill } from "react-icons/ri";
import { FiExternalLink } from "react-icons/fi";
import { externalRedirect } from "../js-utils/utils";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { FaAngleDoubleUp } from "react-icons/fa";

export default function Projects() {
  function handleSkip() {
    const element = document.querySelector("#animate-project-card4");
    console.log(element);
    if (element) {
      element.scrollIntoView();
    }
  }
  return (
    <>
      <h2>MY JOURNEY</h2>
      <ul className={styles.container}>
        <div className={styles.progressBar}></div>
        <a
          className={styles.timeSkipper}
          onClick={(e) => {
            e.preventDefault();
            handleSkip();
          }}
        >
          <span className={styles.skipperIcon}>
            <FaAngleDoubleUp />
          </span>
          START FROM THE END
        </a>
        <TimePoint
          timeTitle="First independent project"
          date="april 2024 - june 2024"
        >
          <ProjectCard
            id="1"
            title="cafe app"
            description="My first independent React.js web app with booking and menu
          features for both client and admin side"
            skills={["React.js", "Tailwind CSS", "JavaScript", "supabase.js"]}
            img="cafe-app-demo.png"
            alt="screenshot of cafe-app demo menu page"
            demoLink="https://cafe-app-demo.netlify.app/"
            repoLink="https://github.com/giulianazhu/cafe-app"
          />
        </TimePoint>
        <TimePoint timeTitle="Applying animation and theming" date="june 2024">
          <ProjectCard
            id="2"
            title="bank landing page"
            description="Landing page with theme switch and some animations."
            skills={[
              "React.js",
              "Responsive Web Design",
              "CSS Modules",
              "JavaScript",
            ]}
            img="bank-landing-demo.png"
            alt="screenshot of bank landing page"
            demoLink="https://bank-landing-demo.netlify.app/home"
            repoLink="https://github.com/giulianazhu/landing-page-demo"
          />
        </TimePoint>
        <TimePoint
          timeTitle="Improved design and first TypeScript application"
          date="july 2024"
        >
          <ProjectCard
            id="3"
            title="recipe book - TS"
            description="Recipe book web app using TypeScript with improved web design."
            skills={[
              "React.js",
              "Responsive Web Design",
              "styled-components",
              "TypeScript",
              "JavaScript",
            ]}
            img="recipe-book-ts-demo.png"
            alt="screenshot of recipe-book-ts demo search page"
            demoLink="https://recipe-book-ts.netlify.app/home"
            repoLink="https://github.com/giulianazhu/recipe-book-ts"
          />
        </TimePoint>
        <TimePoint
          timeTitle="Building first portfolio website"
          date="august 2024"
        >
          <ProjectCard
            id="4"
            title="portfolio website"
            description="Most recent website with responsive design and cool CSS
          effects."
            skills={[
              "React.js",
              "Responsive Web Design",
              "CSS Modules",
              "JavaScript",
              // "Animation"
            ]}
            img="portfolio.png"
            alt="screenshot of portfolio website"
            demoLink="https://giuliana-zhu.netlify.app/"
            repoLink="https://github.com/giulianazhu/portfolio-website-public"
          />
        </TimePoint>
        <TimePoint
          timeTitle="Work project MyCarsafe"
          date="November 2024 ongoing"
        >
          <ProjectCard
            id="5"
            title="work project"
            description="React TypeScript website built with Ant Design"
            skills={[
              "React.js",
              "Responsive Web Design",
              "Ant Design",
              "TypeScript",
              "Dynamic Labelling",
            ]}
            img="work-project.png"
            alt="example website screenshot"
          />
        </TimePoint>
        <TimePoint
          timeTitle="Journy to be continued..."
          date="august 2024 ..."
        ></TimePoint>
        <div className={styles.arrowHead}>
          <RiArrowDownSFill size={30} />
        </div>
      </ul>
    </>
  );
}

function TimePoint({ children, timeTitle, date }) {
  return (
    <div className={styles.timePoint}>
      <h4 className={styles.timeHeader}>
        <div className={styles.timeLine}>
          <TfiLayoutLineSolid />
          <TfiLayoutLineSolid />
          <TfiLayoutLineSolid />
        </div>
        <div className={styles.timeContent}>
          <span className={styles.timeTitle}>{timeTitle}</span>
          <span className={styles.timeDate}> - {date}</span>
        </div>
      </h4>
      {children}
    </div>
  );
}

function ProjectCard({
  id,
  title,
  description,
  skills,
  img,
  alt,
  demoLink,
  repoLink,
}) {
  return (
    <li className={`${styles.card} animate`} id={`animate-project-card${id}`}>
      <div className={styles.imgWrap}>
        <img src={img} alt={alt} className={styles.img} />
        <div className={styles.link} onClick={() => externalRedirect(demoLink)}>
          <FiExternalLink />
        </div>
      </div>
      <div className={styles.cardContent}>
        <h4 className={styles.cardTitle}>{title}</h4>
        <p className={styles.description}>{description}</p>
        <div className={styles.cardTags}>
          {skills.map((skill, i) => (
            <span key={i} className={styles.cardTag}>
              {skill}
            </span>
          ))}
        </div>
        <div className={styles.cardButtons}>
          <button
            className={styles.cardButton}
            onClick={() =>
              demoLink
                ? externalRedirect(demoLink)
                : alert("Apologies, demo not publicly available")
            }
          >
            DEMO
          </button>
          <button
            className={styles.cardButton}
            onClick={() =>
              repoLink
                ? externalRedirect(repoLink)
                : alert("Apologies, repo not publicly available")
            }
          >
            Github
          </button>
        </div>
      </div>
    </li>
  );
}
