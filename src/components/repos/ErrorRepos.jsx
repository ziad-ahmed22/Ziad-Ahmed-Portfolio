import React from "react";
import SectionHeader from "../sectionHeader/SectionHeader";

const ErrorRepos = ({ error }) => {
  return (
    <div className="repos-error">
      <SectionHeader title="My Repos" />
      <div className="error-area">
        <span className="error">{error}</span>
        <span className="error">Failed To Fetch Repos :(</span>
        <a
          href="https://github.com/ziad-ahmed22"
          target="blank"
          className="error"
        >
          Please Go To My Github
        </a>
      </div>
    </div>
  );
};

export default ErrorRepos;
