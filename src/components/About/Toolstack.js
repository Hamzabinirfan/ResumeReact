import React from "react";
import { Col, Row } from "react-bootstrap";
import {DiVisualstudio,DiTerminal,DiWordpress,DiEclipse,DiWindows,DiChrome,DiPhotoshop,} from "react-icons/di";
import {SiAnaconda,SiPostman,SiMacos,SiSelenium,SiShopify} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnaconda />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSelenium />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiWordpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiShopify />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhotoshop />
      </Col>  
      <Col xs={4} md={2} className="tech-icons">
        <DiVisualstudio />
      </Col>  
      <Col xs={4} md={2} className="tech-icons">
        <DiEclipse />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiTerminal />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiChrome />
      </Col>
    </Row>
  );
}

export default Toolstack;
