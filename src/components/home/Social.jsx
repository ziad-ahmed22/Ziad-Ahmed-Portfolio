import "./social.css";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Social = () => {
  return (
    <div className="social-links">
      <a href="mailto:ziiadd2211@gmail.com">
        <SiGmail />
        <span>Gmail</span>
      </a>
      <a href="https://github.com/ziad-ahmed22">
        <FaGithub />
        <span>Github</span>
      </a>
      <a href="https://www.linkedin.com/in/ziad-ahmed22/">
        <FaLinkedinIn />
        <span>Linkedin</span>
      </a>
      <a href="https://wa.me/201145814339?text=Hello Ziad">
        <FaWhatsapp />
        <span>WhatsApp</span>
      </a>
      <a href="https://www.facebook.com/profile.php?id=100017952035617">
        <FaFacebookF />
        <span>Facebook</span>
      </a>
    </div>
  );
};

export default Social;
