import "./home.css";
import { Col, Container, Row } from "react-bootstrap";
import profileImg from "../../images/ziad.jpg";
import Social from "./Social";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";

const Home = () => {
  const description =
    "Junior Frontend Developer. I can design modern, creative web pages, interactive user interfaces, animations, and sites that are responsive to all screens.";
  const cv = "https://1drv.ms/b/s!Ar0OmrXFRr-JgpdfmsDYNyR6Y9hQKw?e=YaMSdl";

  return (
    <div className="home overflow-hidden">
      <Container>
        <Row>
          <Col className="col-12 col-lg-8 order-last order-lg-first">
            <div
              className="info r-5"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <h1 className="name">
                <span>I'm</span> Ziad Ahmed Mahmoud
              </h1>

              <h3 className="mb-4">
                Frontend Developer <span>"</span>React Js<span>"</span>
              </h3>

              <p className="description mb-5">{description}</p>

              <div className="btns">
                <a href="tel:01145814339" className="r-5 me-3">
                  Hire Me
                  <BsFillTelephoneOutboundFill className="ms-2" />
                </a>

                <a href={cv} target="blank" className="r-5">
                  Download My CV
                  <FaDownload className="ms-2" />
                </a>
              </div>
            </div>
          </Col>

          <Col className="col-12 col-lg-4 order-first order-lg-last">
            <div
              className="img r-5"
              data-aos="fade-down"
              data-aos-duration="1500"
            >
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
