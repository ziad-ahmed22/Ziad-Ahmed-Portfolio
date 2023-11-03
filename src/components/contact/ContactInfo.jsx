import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { MdLocationOn } from "react-icons/md";
import "./contactinfo.css";

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <div className="r-5">
        <MdLocationOn />
        <span>Egypt, Sohag, El Monshah</span>
        <span className="realocate">Easy Relocating</span>
      </div>

      <a href="tel:01145814339" target="blank" className="r-5">
        <BsFillTelephoneOutboundFill />
        <span>01145814339</span>
      </a>

      <a href="mailto:ziiadd2211@gmail.com" className="r-5">
        <SiGmail />
        <span>ziiadd2211@gmail.com</span>
      </a>
    </div>
  );
};

export default ContactInfo;
