import "./home.css";
import { Container } from "react-bootstrap";
import Social from "./Social";
import Image from "./Image";
import Info from "./Info";

const Home = () => {
  return (
    <div className="home overflow-hidden section-mb">
      <Container>
        <Info />
        <Image />
      </Container>

      <div className="social">
        <Social />
      </div>
    </div>
  );
};

export default Home;
