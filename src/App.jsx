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
import Scroller from "./components/scroller/scroller";
import SayHi from "./components/sayHi/SayHi";

function App() {
  const [loading, setLoading] = useState(true);
  const [hi, setHi] = useState(true);

  useEffect(() => {
    AOS.init();
    setTimeout(() => {
      setLoading(false);
      setHi(true);
    }, 1750);
    setTimeout(() => {
      setHi(false);
    }, 2700);
  }, []);

  if (loading) return <PreLoader />;

  if (hi) return <SayHi />;

  return (
    <>
      <Scroller />
      <BgShape />
      <Element>
        <Nav />
      </Element>

      <Element name="home">
        <Home />
      </Element>

      <Element name="about">
        <About />
      </Element>

      <Element name="skills">
        <Skills />
      </Element>

      <Element name="works">
        <Works />
      </Element>

      <Element name="repos">
        <Repos />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>

      <Element>
        <Footer />
      </Element>
    </>
  );
}

export default App;
