import { Col, Container, Row } from "react-bootstrap";
import SectionHeader from "../sectionHeader/SectionHeader";
import "./about.css";
import aboutImg from "./aboutImg.svg";
import { FaCheck } from "react-icons/fa";

const data = [
  "I am 24 years old and I am from Egypt.",
  "In September 2021, I graduated from the Faculty of Information Technology at the Egyptian E-Learning University (EELU).",
  "My specialization gives me the ability to think about your project from different points of view, including the business and technical perspectives.",
  "My GPA is 3.38 out of 4.00.",
  "In March 2023, I finished my military service.",
];

const About = () => {
  return (
    <div className="about">
      <SectionHeader title="About Me" />
      <Container>
        <Row>
          <Col className="col-12 col-lg-6">
            <div className="info r-5">
              {data.map((item, index) => (
                <p key={index} className="mb-3">
                  <FaCheck className="r-50 mb-1" />
                  {item}
                </p>
              ))}
            </div>
          </Col>

          <Col className="col-12 col-lg-6">
            <div className="img">
              <img src={aboutImg} alt="About Me Image" className="wh-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
