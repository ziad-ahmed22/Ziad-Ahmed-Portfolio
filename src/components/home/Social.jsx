import "./social.css";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const data = [
  {
    name: "Gmail",
    link: "mailto:ziiadd2211@gmail.com",
    icon: <SiGmail />,
  },
  {
    name: "Github",
    link: "https://github.com/ziad-ahmed22",
    icon: <FaGithub />,
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/ziad-ahmed22/",
    icon: <FaLinkedinIn />,
  },
  {
    name: "WhatsApp",
    link: "https://wa.me/201145814339?text=Hello Ziad",
    icon: <FaWhatsapp />,
  },
];

const Social = () => {
  return (
    <div className="social-links">
      {data.map((item, index) => (
        <a href={item.link} key={index} target="blank">
          {item.icon}
          <span>{item.name}</span>
        </a>
      ))}
    </div>
  );
};

export default Social;
