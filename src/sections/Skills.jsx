import styles from "./Skills.module.css";
import {
  FaAngular,
  FaCss3,
  FaGitAlt,
  FaHtml5,
  FaPython,
  FaReact,
} from "react-icons/fa6";
import {
  SiAntdesign,
  SiExpress,
  SiJavascript,
  SiMysql,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export default function Skills() {
  return (
    <>
      <h2>SKILLS</h2>
      <div className={styles.container}>
        <List>
          <h3>CORE</h3>
          <Item>
            <Icon>
              <FaHtml5 />
            </Icon>
            HTML
          </Item>
          <Item>
            <Icon>
              <FaCss3 />
            </Icon>
            CSS3
          </Item>
          <Item>
            <Icon>
              <SiJavascript />
            </Icon>
            JavaScript
          </Item>
          <Item>
            <Icon>
              <SiTypescript />
            </Icon>
            TypeScript
          </Item>
          <Item>
            <Icon>
              <FaReact />
            </Icon>
            React.js
          </Item>
          <Item>
            <Icon>
              <SiAntdesign />
            </Icon>
            Ant Design
          </Item>
          <Item>
            <Icon>
              <SiTailwindcss />
            </Icon>
            TailwindCSS
          </Item>
          <Item>
            <Icon>
              <SiStyledcomponents />
            </Icon>
            Styled Components
          </Item>
          <Item>
            <Icon>
              <FaGitAlt />
            </Icon>
            Git
          </Item>
        </List>
        <List>
          <h3>OTHER TECH STACK</h3>
          <Item>
            <Icon>
              <SiMysql />
            </Icon>
            MySQL
          </Item>
          <Item>
            <Icon>
              <SiExpress />
            </Icon>
            Express.Js
          </Item>
          <Item>
            <Icon>
              <FaPython />
            </Icon>
            Python
          </Item>
          <Item>
            <Icon>
              <FaAngular />
            </Icon>
            Angular
          </Item>
        </List>
      </div>
    </>
  );
}

function List({ children }) {
  return (
    <ul className={`${styles.list} animate`} id="animate-skill-list">
      {children}
    </ul>
  );
}

function Item({ children }) {
  return <li className={styles.item}>{children}</li>;
}

function Icon({ children }) {
  return <span className={styles.icon}>{children}</span>;
}
