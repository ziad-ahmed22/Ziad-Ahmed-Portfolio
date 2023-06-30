import { Container } from "react-bootstrap";
import "./nav.css";
import { RiMenu5Fill } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";
import { useEffect, useState } from "react";
import { Link, Events, scrollSpy } from "react-scroll";

const Nav = () => {
  const [showNav, setShowNav] = useState(false);

  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    Events.scrollEvent.register("begin", () => {});
    Events.scrollEvent.register("end", () => {});

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  return (
    <>
      <Container>
        <div className={`nav flex-between r-5 px-3 ${showNav ? "show" : ""} `}>
          <div className="logo d-none d-lg-block">Z</div>

          <div className={`links `}>
            <ul>
              <li>
                <Link
                  to="home"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={250}
                  offset={-400}
                  onSetActive={handleSetActive}
                  className={activeLink === "home" ? "active" : ""}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="about"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={250}
                  offset={-400}
                  onSetActive={handleSetActive}
                  className={activeLink === "about" ? "active" : ""}
                >
                  About Me
                </Link>
              </li>

              <li>
                <Link
                  to="skills"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={250}
                  offset={-400}
                  onSetActive={handleSetActive}
                  className={activeLink === "skills" ? "active" : ""}
                >
                  Skills
                </Link>
              </li>

              <li>
                <Link
                  to="works"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={250}
                  offset={-400}
                  onSetActive={handleSetActive}
                  className={activeLink === "works" ? "active" : ""}
                >
                  Works
                </Link>
              </li>

              <li>
                <Link
                  to="repos"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={250}
                  offset={-400}
                  onSetActive={handleSetActive}
                  className={activeLink === "repos" ? "active" : ""}
                >
                  Repos
                </Link>
              </li>

              <li>
                <Link
                  to="contact"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={250}
                  offset={-400}
                  onSetActive={handleSetActive}
                  className={activeLink === "contact" ? "active" : ""}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <div className="nav-menu d-lg-none">
        {showNav ? (
          <MdOutlineClose onClick={() => setShowNav(false)} />
        ) : (
          <RiMenu5Fill onClick={() => setShowNav(true)} />
        )}
      </div>
    </>
  );
};

export default Nav;
