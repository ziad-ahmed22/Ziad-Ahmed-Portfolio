import "./info.css";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";

const Info = () => {
  const description =
    "Junior Frontend Developer. I can design modern, creative web pages, interactive user interfaces, animations, and sites that are responsive to all screens.";
  const cv = "https://1drv.ms/b/s!Ar0OmrXFRr-Jgpd_n1bu2Tqws0P62Q?e=r0us04";

  return (
    <div className="info r-5" data-aos="fade-up" data-aos-duration="1500">
      <h1 className="name">
        <span>I'm</span> Ziad Ahmed Mahmoud
      </h1>

      <h3 className="mb-4">
        Frontend Developer <span>"</span>React Js<span>"</span>
      </h3>

      <p className="description mb-5">{description}</p>

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
