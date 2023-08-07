import { Tooltip } from "react-tooltip";
import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs";

const Card = ({ id, image, title, repo_url, demo_url, skills }) => {
  return (
    <div
      key={id}
      className="box r-15"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <div className="img r-15">
        <img src={image} alt={title} className="wh-100" />

        <Tooltip id={id} className="tooltip" />
        <div className="over">
          <a
            href={repo_url}
            target="blank"
            className="r-15 flex-center"
            data-tooltip-id={id}
            data-tooltip-content="Show Repo"
          >
            <BsGithub />
          </a>
          <a
            href={demo_url}
            target="blank"
            className="r-15 flex-center"
            data-tooltip-id={id}
            data-tooltip-content="Live View"
          >
            <BsBoxArrowUpRight />
          </a>
        </div>
      </div>

      <div className="info">
        <h5 className="title">{title}</h5>

        <div className="skills">
          {skills?.map((skl, index) => (
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
