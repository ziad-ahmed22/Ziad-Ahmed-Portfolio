import "./works.css";
import SectionHeader from "./../sectionHeader/SectionHeader";
import data from "./data";
import { Container } from "react-bootstrap";
import Card from "./Card";

const Works = () => {
  return (
    <div className="works section-mb overflow-hidden">
      <SectionHeader title="My Works" />
      <Container>
        <div className="grid-3">
          {data.map((item, index) => (
            <Card {...item} key={index} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Works;
