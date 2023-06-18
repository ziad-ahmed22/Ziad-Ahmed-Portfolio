import { useEffect } from "react";
import "./repos.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepos } from "../../rtk/repoSlice";
import SectionHeader from "./../sectionHeader/SectionHeader";
import { Col, Container, Row } from "react-bootstrap";

const Repos = () => {
  const dispatch = useDispatch();
  const { data: repos, loading, error } = useSelector((state) => state.repos);

  useEffect(() => {
    dispatch(fetchRepos());
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
        <span className="error">{error}</span>
      </div>
    );

  return (
    <div className="repos mb-5">
      <SectionHeader title="My Repos" />
      <Container>
        <Row xs={1} lg={2}>
          {repos.map((repo, index) => (
            <Col key={index}>
              <div className="repo flex-between r-5 shadow">
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
