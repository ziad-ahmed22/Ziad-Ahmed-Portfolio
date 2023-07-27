import "./home.css";
import { Col, Container, Row } from "react-bootstrap";
import Social from "./Social";
import Image from "./Image";
import Info from "./Info";

const Home = () => {
  return (
    <div className="home overflow-hidden section-mb">
      <Container>
        <Row>
          <Col className="col-12 col-lg-8 order-last order-lg-first">
            <Info />
          </Col>

          <Col className="col-12 col-lg-4 order-first order-lg-last">
            <Image />
          </Col>
        </Row>
      </Container>

      <div className="social">
        <Social />
      </div>
    </div>
  );
};

export default Home;
