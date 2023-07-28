import { Col, Container, Row } from "react-bootstrap";
import SectionHeader from "../sectionHeader/SectionHeader";
import "./contact.css";
import Form from "./Form";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <div className="contact section-mb overflow-hidden">
      <SectionHeader title="Contact Me" />
      <Container>
        <p className="head" data-aos="fade-up" data-aos-duration="1000">
          My inbox is always open. I’d love to chat with you.
        </p>

        <Row xs={1} lg={2}>
          <Col data-aos="fade-right" data-aos-duration="1000">
            <Form />
          </Col>

          <Col data-aos="fade-left" data-aos-duration="1000">
            <ContactInfo />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
