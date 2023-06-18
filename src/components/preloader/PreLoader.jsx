import "./preloader.css";
import loader from "./loader.svg";

const PreLoader = () => {
  return (
    <div className="preloader">
      <img src={loader} alt="loading" />
    </div>
  );
};

export default PreLoader;
