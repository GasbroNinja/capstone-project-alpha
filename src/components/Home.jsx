import React from 'react'
import "../App.css"
import { Container, } from 'react-bootstrap';

import NavbarMain from './NavbarMain';

const Home = () => {
  return (
    <Container fluid className="backGroundNeon p-0">
      <Container fluid className="homeBase p-0">
        <Container
          fluid
          className=" d-flex align-items-center justify-content-start p-3"
        >
          <NavbarMain />

        </Container>
        <div className="d-flex justify-content-center align-items-center overflow-hidden">
          <h1 className="welcomePage backgroundText">HELLO GAMERS</h1>
        </div>
      </Container>
    </Container>
  );
}

export default Home