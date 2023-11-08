import { useEffect, useState } from "react";
import { Element } from "react-scroll";
import "aos/dist/aos.css";
import AOS from "aos";

import PreLoader from "./components/preloader/PreLoader";
import Scroller from "./components/scroller/scroller";
import Contact from "./components/contact/Contact";
import BgShape from "./components/shapes/BgShape";
import Skills from "./components/skills/Skills";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Works from "./components/works/Works";
import Repos from "./components/repos/Repos";
import SayHi from "./components/sayHi/SayHi";
import Home from "./components/home/Home";
import Nav from "./components/navbar/Nav";

function App() {
  const [loading, setLoading] = useState(true);
  const [hi, setHi] = useState(true);

  useEffect(() => {
    AOS.init();
    new Promise((resolve) => {
      setTimeout(() => {
        setLoading(false);
        resolve();
      }, 1750);
    }).then(() => {
      setTimeout(() => {
        setHi(false);
      }, 1000);
    });
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
