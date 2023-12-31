import { Container } from "react-bootstrap";
import "./nav.css";
import { RiMenu5Fill } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";
import { useEffect, useState } from "react";
import { Link, Events, scrollSpy } from "react-scroll";
import { data } from "./NavLinks";

const Nav = () => {
  let smallScreen = 992;
  const [showNav, setShowNav] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const handleShowNav = (e) => {
    if (e.target.dataset.name === "open-icon") {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  };

  window.addEventListener("click", handleShowNav);

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  useEffect(() => {
    Events.scrollEvent.register("begin", () => {});
    Events.scrollEvent.register("end", () => {});

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <>
      <Container>
        <div className={`nav flex-between r-5 px-3 ${showNav ? "show" : ""} `}>
          <div className="logo d-none d-lg-block">{`<Ziad/>`}</div>

          <div className="links">
            <ul>
              {data.map(({ path, body }, index) => (
                <li key={index}>
                  <Link
                    to={path}
                    spy={true}
                    smooth={true}
                    duration={250}
                    offset={window.innerWidth > smallScreen ? -140 : -60}
                    activeClass="active"
                    onSetActive={handleSetActive}
                    className={activeLink === path ? "active" : ""}
                    onClick={() => setShowNav(false)}
                  >
                    {body}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      <div className="nav-menu d-lg-none">
        {showNav ? (
          <MdOutlineClose onClick={handleShowNav} />
        ) : (
          <RiMenu5Fill data-name="open-icon" onClick={handleShowNav} />
        )}
      </div>
    </>
  );
};

export default Nav;
