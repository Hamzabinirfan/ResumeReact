import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import redington from "../../Assets/Projects/logo/redington.png";
import honeywell from "../../Assets/Projects/logo/honeywell.png";
import mufti from "../../Assets/Projects/logo/mufti.png";
import esl from "../../Assets/Projects/logo/esl.png";
import gmr from "../../Assets/Projects/logo/gmr.png";
import bharti from "../../Assets/Projects/logo/bharti.png";
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
        <Row style={{ justifyContent: "center", paddingBottom: "10px",}}>
          <Col md={4} className="project-card">
            <ProjectCard style={{color: "black"}}
              imgPath={redington}
              isBlog={false}
              title="Redington Website Development"
              description="Building a Redington website combines WordPress for content management with custom HTML, CSS, and JavaScript featuring jQuery for dynamic elements. This approach ensures a user-friendly, interactive site, meeting Redington's online presence requirements."
              demoLink="https://redingtongroup.com/mea/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={honeywell}
              isBlog={false}
              title="Honeywell"
              description="Creating a Multi-Page Honeywell Website with HTML, CSS, and JavaScript: Products, Customer Engagement, and Backend Administration"
              demoLink="https://www.honeywellbuildings.in/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mufti}
              isBlog={false}
              title="Mufti Jeans"
              description="To create MuftiJeans blog pages using HTML, CSS, and JavaScript, design a responsive layout, integrate a comment section, and optimize for search engines."
              demoLink="https://www.muftijeans.in/blog"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={esl}
              isBlog={false}
              title="ESL Steel Website Development"
              description="Creating a website for ESL Steel using HTML, CSS, and JavaScript is a comprehensive task. Here's a high-level overview of the process, including responsive design, WordPress integration, and testing"
              demoLink="https://www.eslsteel.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gmr}
              isBlog={false}
              title="GMR AEROCITY HYDERABAD"
              description="To create GMR blog pages using HTML, CSS, and JavaScript, design a responsive layout, integrate a comment section, and optimize for search engines."
              demoLink="https://www.gmraerocityhyd.com/"
              />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bharti}
              isBlog={false}
              title="Bharti AXA Customer Page"
              description="Create a Bharti AXA customer page with HTML, CSS, and JavaScript. Develop a responsive layout, integrate a comment section, and optimize the page for search engines. Ensure user-friendly forms and effective SEO techniques for a well-rounded online presence."
              demoLink="https://www.bhartiaxa.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
