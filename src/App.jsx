import Nav from "./components/navbar/Nav";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Works from "./components/works/Works";
import Repos from "./components/repos/Repos";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { Element } from "react-scroll";
import PreLoader from "./components/preloader/PreLoader";
import { useEffect, useState } from "react";
import BgShape from "./components/shapes/BgShape";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <PreLoader />
      ) : (
        <>
          <BgShape />
          <Element>
            <Nav />
          </Element>

          <Element name="home" data-aos="fade-down" data-aos-duration="1000">
            <Home />
          </Element>

          <Element name="about" data-aos="fade-up" data-aos-duration="1000">
            <About />
          </Element>

          <Element name="skills" data-aos="fade-up" data-aos-duration="1000">
            <Skills />
          </Element>

          <Element name="works" data-aos="fade-up" data-aos-duration="1000">
            <Works />
          </Element>

          <Element name="repos" data-aos="fade-up" data-aos-duration="1000">
            <Repos />
          </Element>

          <Element name="contact" data-aos="fade-up" data-aos-duration="1000">
            <Contact />
          </Element>

          <Element>
            <Footer />
          </Element>
        </>
      )}
    </>
  );
}

export default App;
