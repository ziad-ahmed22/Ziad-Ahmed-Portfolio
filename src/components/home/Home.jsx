import "./home.css";
import { Col, Container, Row } from "react-bootstrap";
import profileImg from "../../images/ziad.jpg";
import Social from "./Social";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";

const description =
  "Junior Frontend Developer experienced with all stages of the development. I can desgin modern creative web pages, interactive user interfaces, animations and site responsive to all screens.";

const Home = () => {
  return (
    <div className="home">
      <Container>
        <Row>
          <Col className="col-12 col-lg-8">
            <div className="info r-5">
              <h1 className="name">
                <span>I'm</span> Ziad Ahmed Mahmoud
              </h1>

              <h3 className="mb-4">Frontend Developer "React Js"</h3>
              <p className="description mb-5">{description}</p>

              <div className="btns">
                <a href="tel:01145814339" className="r-5 me-3">
                  Hire Me
                  <BsFillTelephoneOutboundFill className="ms-2" />
                </a>
                <a href="/" className="r-5">
                  Download My CV
                  <FaDownload className="ms-2" />
                </a>
              </div>
            </div>
          </Col>

          <Col className="col-12 col-lg-4">
            <div className="img r-5 ">
              <img
                src={profileImg}
                alt="Ziad Profile Image"
                className="wh-100 r-5"
              />
            </div>
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
