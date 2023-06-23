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

function App() {
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
      )}
    </>
  );
}

export default App;
