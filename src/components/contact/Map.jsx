import "./map.css";

const Map = () => {
  return (
    <div className="map r-5">
      <iframe
        className="wh-100"
        id="map"
        src="https://maps.google.com/maps?q=alminsha sohag&t=&z=10&ie=UTF8&iwloc=&output=embed"
      ></iframe>
    </div>
  );
};

export default Map;
