import React from "react";
import { Container } from "react-bootstrap";
import NavbarMain from "../NavbarMain";

const Community = () => {
  return (
    <Container fluid className="backGroundNeon p-0">
      <Container fluid className="homeBase p-0">
        <Container
          fluid
          className=" d-flex align-items-center justify-content-start p-3"
        >
          <NavbarMain />
        </Container>
      </Container>
    </Container>
  );
};

export default Community;
