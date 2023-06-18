import "./footer.css";
import { FaCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer flex-center">
      <FaCopyright className="mb-1" />
      <span className="ms-2">Copyright 2023 | All Rights Reserved</span>
    </div>
  );
};

export default Footer;
