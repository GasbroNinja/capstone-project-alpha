import React from 'react'
import "../App.css"
import { Container } from 'react-bootstrap';
import logoredshift from "../assets/images/logo-redshift.jpeg"

const Home = () => {
  return (
    <Container fluid className="backGroundNeon">
      <Container fluid className="homeBase p-0">
        <Container
          fluid
          className=" d-flex align-items-center justify-content-center"
        >
          <img
            src={logoredshift}
            alt="logo-redshift"
            className="logoRedshift"
          />
        </Container>
        <div className="d-flex justify-content-center align-items-center overflow-hidden">
          <h1 className="welcomePage backgroundText pb-5">HELLO GAMER</h1>
        </div>

      </Container>
    </Container>
  );
}

export default Home