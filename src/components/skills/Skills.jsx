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
  "React Bootstrap",
  "React Router Dom",
  "Redux Js",
  "Redux Toolkit",
  "APIs (axios)",
  "Git & Github",
  "SQL",
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
