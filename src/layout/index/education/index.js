import React from "react";
import coursework from "./coursework";
import Card from "../../../components/card";
import { Col, Row } from "react-bootstrap";
import Schools from "./schools";

const Education = () => {
  return (
    <div id="education" className="section">
      <h3 className="section-title">Education</h3>
      <Schools></Schools>
      <Row>
        {coursework.map((course, idx) => {
          const { name, description, href } = course;
          return (
            <Col xs={12} sm={12} md={6} lg={4} className="my-3" key={name}>
              <Card title={name} description={description} href={href} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
export default Education;
