import { ClimbingBoxLoader } from "react-spinners";
import "./preloader.css";

const PreLoader = () => {
  return (
    <div className="preloader">
      <ClimbingBoxLoader color="#028a8a" />
    </div>
  );
};

export default PreLoader;
