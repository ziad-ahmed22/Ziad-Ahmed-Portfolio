import { Tooltip } from "react-tooltip";
import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs";

const Card = ({ project }) => {
  return (
    <div
      key={project.id}
      className="box r-15"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <div className="img r-15">
        <img src={project.image} alt={project.title} className="wh-100" />

        <Tooltip id={project.id} className="tooltip" />
        <div className="over">
          <a
            href={project.repo_url}
            target="blank"
            className="r-15 flex-center"
            data-tooltip-id={project.id}
            data-tooltip-content="Show Repo"
          >
            <BsGithub />
          </a>
          <a
            href={project.demo_url}
            target="blank"
            className="r-15 flex-center"
            data-tooltip-id={project.id}
            data-tooltip-content="Live View"
          >
            <BsBoxArrowUpRight />
          </a>
        </div>
      </div>

      <div className="info">
        <h5 className="title">{project.title}</h5>

        <div className="skills">
          {project.skills.map((skl, index) => (
            <span key={index} className="r-5">
              {skl}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
