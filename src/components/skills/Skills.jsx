import { Container, Row } from "react-bootstrap";
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
  "Redux Js",
  "Redux Toolkit",
  "Git & Github",
];

const Skills = () => {
  return (
    <div className="skills">
      <SectionHeader title="Skills" />
      <Container>
        <div className="grid-4 mb-5 shadow">
          {mySkills.map((item, index) => (
            <div key={index} className="box r-5">
              {item}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Skills;
