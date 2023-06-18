import "./sectionheader.css";

const SectionHeader = ({ title }) => {
  return (
    <div className="section-header">
      {title}
      <span>{title}</span>
    </div>
  );
};

export default SectionHeader;
