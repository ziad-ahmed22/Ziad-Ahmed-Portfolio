import { Container } from "react-bootstrap";
import SectionHeader from "../sectionHeader/SectionHeader";
import "./about.css";
import { GiBurningDot } from "react-icons/gi";

const data = [
  "I am 24 years old and I am from Egypt.",
  "In September 2021, I graduated from the Faculty of Information Technology at the Egyptian E-Learning University (EELU).",
  "My specialization gives me the ability to think about your project from different points of view, including the business and technical perspectives.",
  "My GPA is 3.38 out of 4.00.",
  "In March 2023, I finished my military service.",
];

const About = () => {
  return (
    <div className="about section-mb">
      <SectionHeader title="About Me" />
      <Container data-aos="fade-up" data-aos-duration="800">
        <div className="notebook">
          {data.map((item, index) => (
            <p key={index}>
              <GiBurningDot className="r-50" />
              {item}
            </p>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default About;
