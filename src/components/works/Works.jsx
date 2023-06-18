import "./works.css";
import SectionHeader from "./../sectionHeader/SectionHeader";
import data from "./data";
import { Container } from "react-bootstrap";
import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip } from "react-tooltip";

const Works = () => {
  return (
    <div className="works">
      <SectionHeader title="My Works" />

      <Container>
        <div className="grid-3">
          {data.map((item) => (
            <div key={item.id} className="box r-15 shadow">
              <div className="img r-15">
                <img src={item.image} alt={item.title} className="wh-100" />

                <Tooltip id={item.id} className="tooltip" />
                <div className="over">
                  <a
                    href={item.repo_url}
                    target="blank"
                    className="r-15 flex-center"
                    data-tooltip-id={item.id}
                    data-tooltip-content="Show Repo"
                  >
                    <BsGithub />
                  </a>
                  <a
                    href={item.demo_url}
                    target="blank"
                    className="r-15 flex-center"
                    data-tooltip-id={item.id}
                    data-tooltip-content="Live View"
                  >
                    <BsBoxArrowUpRight />
                  </a>
                </div>
              </div>

              <div className="info">
                <h5 className="title">{item.title}</h5>

                <div className="skills">
                  {item.skills.map((skl, index) => (
                    <span key={index} className="r-5">
                      {skl}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Works;
