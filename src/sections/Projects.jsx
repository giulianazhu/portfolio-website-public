import styles from "./Projects.module.css";
import { RiArrowDownSFill } from "react-icons/ri";
import { externalRedirect } from "../js-utils/utils";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { Carousel } from "antd";

export default function Projects() {
  return (
    <>
      <h2>WORK PROJECTS</h2>
      <ul className={styles.container}>
        <div className={styles.progressBar}></div>
        <TimePoint
          timeTitle="Work project"
          date="November 2024 - February 2025"
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
              "Localization",
            ]}
            img={[
              "workproject1/wp1.jpg",
              "workproject1/wp2.jpg",
              "workproject1/wp3.jpg",
              "workproject1/wp4.png",
            ]}
            alt="example website screenshot"
            isWorkProject={true}
          />
        </TimePoint>
        <div className={styles.arrowHead}>
          <RiArrowDownSFill size={30} />
        </div>
      </ul>
      <h2>PERSONAL PROJECTS</h2>
      <ul className={styles.container}>
        <div className={styles.progressBar}></div>
        <TimePoint
          timeTitle="Improved design and first TypeScript application"
          date="july 2024"
        >
          <ProjectCard
            id="3"
            title="Visual library for artists and photographers"
            description="Image gallery inspired by pinterest with filtered search and shuffle room"
            skills={[
              "React.js",
              "Responsive Web Design",
              "Ant Design",
              "TypeScript",
              "localization",
            ]}
            img={[
              "visuallibrary/1.png",
              "visuallibrary/2.png",

              "visuallibrary/6.png",
            ]}
            alt="screenshot of visual library demo"
            // demoLink="https://recipe-book-ts.netlify.app/home"
            // repoLink="https://github.com/giulianazhu/recipe-book-ts"
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
            img={["portfolio.png"]}
            alt="screenshot of portfolio website"
            demoLink="https://giuliana-zhu.netlify.app/"
            repoLink="https://github.com/giulianazhu/portfolio-website-public"
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
            img={[
              "recipebook/0.png",
              "recipebook/1.png",
              "recipebook/2.png",
              "recipebook/3.png",
              "recipebook/4.png",
            ]}
            alt="screenshot of recipe-book-ts demo search page"
            demoLink="https://recipe-book-ts.netlify.app/home"
            repoLink="https://github.com/giulianazhu/recipe-book-ts"
          />
        </TimePoint>
        <div className={styles.arrowHead}>
          <RiArrowDownSFill size={30} />
        </div>
      </ul>
    </>
  );
}

export function TimePoint({ children, timeTitle, date }) {
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

export function ProjectCard({
  id,
  title,
  description,
  skills,
  img,
  alt,
  demoLink,
  repoLink,
  isWorkProject = false,
}) {
  return (
    <li className={`${styles.card} animate`} id={`animate-project-card${id}`}>
      <div className={styles.imgWrap}>
        <Carousel arrows={img.length > 1}>
          {img.map((img, i) => (
            <img key={i} src={img} alt={alt} className={styles.cardImg} />
          ))}
        </Carousel>
        {/* <div className={styles.link} onClick={() => externalRedirect(demoLink)}>
          <FiExternalLink />
        </div> */}
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
        {!isWorkProject && (
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
        )}
      </div>
    </li>
  );
}
