import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import chatify from "../../Assets/Projects/chatify.jpg";
import bitsOfCode from "../../Assets/Projects/blog.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chat-room-mern"
              description="Personal Chat Room and group chat room or Workspace to share resources and hangout with friends build with react.js, Material-UI,Node.js,express and mongoDB. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/DEGAGATADESSE/chatroom-mern"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Patient management systems"
              description="The Patient Management System is a comprehensive healthcare management solution with a modern web-based architecture consisting of both frontend and backend components BY MERN stack."
              ghLink="https://github.com/DEGAGATADESSE"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
