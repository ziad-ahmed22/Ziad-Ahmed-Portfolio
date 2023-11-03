import "./info.css";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-scroll";

const skills = [
  "HTML",
  "CSS",
  "JS",
  "BS",
  "MUI",
  "React",
  "Next",
  "Redux",
  "APIs",
];

const Info = () => {
  const description =
    "Junior Frontend Developer. I can design modern, creative web pages, interactive user interfaces, animations, and sites that are responsive to all screens.";
  const cv = "https://1drv.ms/b/s!Ar0OmrXFRr-JgqlzKR9nCxHGSTY9QQ?e=376Z9D";

  return (
    <div className="info r-5" data-aos="fade-up" data-aos-duration="1500">
      <h1 className="name">
        <span>I'm</span> Ziad Ahmed Mahmoud
      </h1>

      <h3 className="mb-4">Frontend Developer # React Js & Next Js</h3>

      <p className="description mb-4">{description}</p>

      <div className="skills mb-4 mb-sm-5">
        {skills.map((skill) => (
          <Link
            className="skill"
            to="skills"
            offset={window.innerWidth > 992 ? -140 : -60}
            key={skill}
          >
            {skill}
          </Link>
        ))}
      </div>

      <div className="btns">
        <a href="tel:01145814339" target="blank" className="r-5 me-3">
          Hire Me
          <BsFillTelephoneOutboundFill className="ms-2" />
        </a>

        <a href={cv} target="blank" className="r-5">
          Download My CV
          <FaDownload className="ms-2" />
        </a>
      </div>
    </div>
  );
};

export default Info;
