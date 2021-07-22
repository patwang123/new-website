import React from "react";
import { Row, Col } from "react-bootstrap";
import * as styles from "./styles.module.scss";
import Card from "../../../components/card";
import projects from "./projects.js";

const Projects = () => {
  return (
    <div id="projects" className="section">
      <h3 className="section-title">Projects</h3>
      <Row>
        {projects.map((el, idx) => {
          const {title, description, href } = el;
          return (
            <Col xs={12} sm={12} md={6} lg={4} className="my-3" key={title}>
              <Card
                title={title}
                description={description}
                href={href}
              ></Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
export default Projects;
