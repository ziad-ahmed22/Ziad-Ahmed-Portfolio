import { Container } from "react-bootstrap";
import SectionHeader from "../sectionHeader/SectionHeader";
import "./skills.css";

const mySkills = [
  "Html",
  "Html 5",
  "Css",
  "Css 3",
  "Javascript",
  "ES6",
  "Bootstrap",
  "React Js",
  "React Hooks",
  "React Bootstrap",
  "React Router Dom",
  "React Hook Forms",
  "React Query",
  "APIs (axios)",
  "Redux Js",
  "Redux Toolkit",
  "Typescript",
  "Sass",
  "Git & Github",
];

const Skills = () => {
  return (
    <div className="skills section-mb overflow-hidden">
      <SectionHeader title="My Skills" />
      <Container>
        <div className="grid-4 mb-5">
          {mySkills.map((item, index) => (
            <div
              key={index}
              className="box r-5"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              {item}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Skills;
