import { Col, Container, Row } from "react-bootstrap";
import SectionHeader from "../sectionHeader/SectionHeader";
import "./contact.css";
import Form from "./Form";
import Map from "./Map";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <div className="contact">
      <SectionHeader title="Contact Me" />
      <Container>
        <p className="head">
          My inbox is always open. I’d love to chat with you.
        </p>
        <Row xs={1} lg={2}>
          <Col>
            <Form />
          </Col>

          <Col>
            <Map />

            <div className="info">
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
