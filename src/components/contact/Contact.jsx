import { Col, Container, Row } from "react-bootstrap";
import SectionHeader from "../sectionHeader/SectionHeader";
import "./contact.css";
import Form from "./Form";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { MdLocationOn } from "react-icons/md";

const Contact = () => {
  return (
    <div className="contact overflow-hidden">
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
            <div className="info">
              <div className="r-5">
                <MdLocationOn />
                <span>Egypt, Sohag, El Monshah</span>
              </div>

              <div className="r-5">
                <BsFillTelephoneOutboundFill />
                <span>01145814339</span>
              </div>

              <div className="r-5">
                <SiGmail />
                <span>ziiadd2211@gmail.com</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
