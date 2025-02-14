import styles from "./Projects.module.css";
import { RiArrowDownSFill } from "react-icons/ri";
import { externalRedirect } from "../js-utils/utils";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { Carousel, Flex } from "antd";

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
            title="crm website"
            description="React TypeScript CRM website built with Ant Design."
            skills={[
              "React.js",
              "Zustand",
              "Ant Design",
              "TypeScript",
              "Localization",
            ]}
            alt="example website screenshot"
            isConfidential={true}
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
          timeTitle="Pinterest inspired image gallery"
          date="january 2025"
        >
          <ProjectCard
            id="3"
            title="Visual library for artists and photographers"
            description="Platform for managing images and visual assets, and practice room for artists."
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
              "visuallibrary/3.png",
              "visuallibrary/4.png",
              "visuallibrary/5.png",
            ]}
            alt="screenshot of visual library demo"
            demoLink="https://visual-library.netlify.app"
            repoLink="https://github.com/giulianazhu/visual-library"
          />
        </TimePoint>
        <TimePoint timeTitle="First portfolio website" date="august 2024">
          <ProjectCard
            id="4"
            title="portfolio website"
            description="First and most  recent website with responsive design and cool CSS
          effects."
            skills={[
              "React.js",
              "Responsive Web Design",
              "CSS Modules",
              "JavaScript",
              "Animation",
            ]}
            img={["portfolio/1.png", "portfolio/2.png"]}
            alt="screenshot of portfolio website"
            demoLink="https://giuliana-zhu.netlify.app/"
            repoLink="https://github.com/giulianazhu/portfolio-website-public"
          />
        </TimePoint>
        <TimePoint
          timeTitle="React - Typescript recipe book website"
          date="july 2024"
        >
          <ProjectCard
            id="3"
            title="recipe book - TS"
            description="Allows searching and filtering recipes, add new recipes and comments"
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
  isConfidential = false,
}) {
  if (!isConfidential) {
    return (
      <li className={`${styles.card} animate`} id={`animate-project-card${id}`}>
        <div className={styles.imgWrap}>
          <Carousel arrows={img.length > 1}>
            {img.map((img, i) => (
              <img key={i} src={img} alt={alt} className={styles.cardImg} />
            ))}
          </Carousel>
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
  } else
    return (
      <li className={`${styles.card} animate`} id={`animate-project-card${id}`}>
        <div className={styles.imgWrap}>
          {img ? (
            <Carousel arrows={img.length > 1}>
              {img.map((img, i) => (
                <img key={i} src={img} alt={alt} className={styles.cardImg} />
              ))}
            </Carousel>
          ) : (
            <Flex vertical>{/* <div>Role: Frontend developer</div> */}</Flex>
          )}
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
            {demoLink && (
              <button
                className={styles.cardButton}
                onClick={() => externalRedirect(demoLink)}
              >
                DEMO
              </button>
            )}
            {repoLink && (
              <button
                className={styles.cardButton}
                onClick={() => externalRedirect(repoLink)}
              >
                Github
              </button>
            )}
          </div>
        </div>
      </li>
    );
}
