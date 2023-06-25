import { Container } from "react-bootstrap";
import SectionHeader from "../sectionHeader/SectionHeader";
import "./skills.css";

const mySkills = [
  "Html",
  "Html5",
  "Css",
  "Css3",
  "Javascript",
  "ES6",
  "Bootstrap",
  "React Js",
  "React Bootstrap",
  "Redux Js",
  "Redux Toolkit",
  "Git & Github",
  "APIs",
  "SQL",
];

const Skills = () => {
  return (
    <div className="skills overflow-hidden">
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
