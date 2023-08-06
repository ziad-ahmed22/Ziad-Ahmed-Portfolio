import "./repos.css";
import SectionHeader from "./../sectionHeader/SectionHeader";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Repos = () => {
  const url = "https://api.github.com/users/ziad-ahmed22/repos";
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    const fetchRepos = async () => {
      try {
        const res = await axios.get(url);
        setLoading(false);
        setData(res.data);
        setError("");
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };
    fetchRepos();
  }, []);

  if (loading)
    return (
      <div className="repos">
        <SectionHeader title="My Repos" />
        <span className="loading">Loading...</span>
      </div>
    );

  if (error)
    return (
      <div className="repos">
        <SectionHeader title="My Repos" />
        <span className="error">Opps! Failed To Fetch Repos :(</span>
        <span className="error">{error}</span>
      </div>
    );

  return (
    <div className="repos section-mb overflow-hidden">
      <SectionHeader title="My Repos" />
      <Container>
        <Row xs={1} lg={2}>
          {data.map((repo, index) => (
            <Col key={index}>
              <div
                className="repo flex-between r-5"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <span className="name">{repo.name}</span>
                <a className="link r-5" href={repo.html_url} target="blank">
                  Repo Link
                </a>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Repos;
