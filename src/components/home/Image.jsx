import profileImg from "../../images/profile/ziad4.webp";
import "./image.css";

const Image = () => {
  return (
    <div className="header-img" data-aos="fade-down" data-aos-duration="1500">
      <div className="img">
        <img src={profileImg} alt="Ziad Profile Image" />
      </div>
    </div>
  );
};

export default Image;
