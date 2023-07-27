import { ClimbingBoxLoader } from "react-spinners";
import "./preloader.css";

const PreLoader = () => {
  return (
    <div className="preloader">
      <ClimbingBoxLoader color="#3a1db0" />
    </div>
  );
};

export default PreLoader;
