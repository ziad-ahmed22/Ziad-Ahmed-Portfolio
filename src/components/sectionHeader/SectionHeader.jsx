import "./sectionheader.css";

const SectionHeader = ({ title }) => {
  return (
    <div className="section-header" data-aos="fade-up" data-aos-duration="1000">
      {title}
      <span>{title}</span>
    </div>
  );
};

export default SectionHeader;
