import profileImg from "../../images/ziad.jpg";
import "./image.css";

const Image = () => {
  return (
    <div className="header-img" data-aos="fade-down" data-aos-duration="1500">
      <div className="img">
        <img src={profileImg} alt="Ziad Profile Image" className="wh-100" />
      </div>
    </div>
  );
};

export default Image;
