import React from 'react'
import { Container } from 'react-bootstrap';
import NavbarMain from '../NavbarMain';
import "../Eventi/events.css"


const EventDetail = () => {
  return (
    <Container fluid className="backGroundNeon2 p-0 overflow-y-hidden">
      <Container fluid className="homeBase2 p-0">
        <Container
          fluid
          className=" d-flex align-items-center justify-content-start p-3"
        >
          <NavbarMain />
        </Container>

        

      </Container>
    </Container>
  );
}

export default EventDetail