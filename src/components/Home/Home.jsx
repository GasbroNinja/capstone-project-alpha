import React from 'react'
import { Container, Row } from 'react-bootstrap';
import NavbarMain from '../NavbarMain';
import dataHome from '../Home/dataHome.json'
import CardHome from './CardHome';

const LandingPage = () => {
  return (
    <Container fluid className="backGroundNeon p-0">
      <Container fluid className="homeBase p-0">
        <Container
          fluid
          className=" d-flex align-items-center justify-content-start p-3"
        >
          <NavbarMain />
        </Container>
        <Container className="d-flex flex-column justify-content-center align-items-center overflow-hidden">
          <div className="welcomePage backgroundText py-2">
            <div className="d-inline-flex flex-column justify-content-center my-2">
              <h2 className="d-flex fst-italic d-flex justify-content-center">
                I
              </h2>
              <h1 className="d-flex fst-italic mb-2 d-flex justify-content-center">
                REDDINI
              </h1>
              <h1 className="d-flex fst-italic d-flex justify-content-center">
                SONO CONNESSI
              </h1>
            </div>
          </div>
        </Container>
        <Container fluid>
          <Row xs={1} md={2} className="row-cols-1 g-2">
            {dataHome && dataHome.map((dataHome) => (
              <CardHome key={dataHome.id} dataHome={dataHome} />
            ))}
          </Row>
        </Container>
      </Container>
    </Container>
  );
}

export default LandingPage