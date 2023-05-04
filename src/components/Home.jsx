import React from 'react'
import "../App.css"
import { Card, Col, Container, Row, } from 'react-bootstrap';

import sfondoCard1 from "../assets/images/hogwarts-legacy-3840x2160-10410.jpg";
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

        <div className="d-flex flex-column justify-content-center align-items-center overflow-hidden">
          <div className="welcomePage backgroundText py-2">
            <div className="d-inline-flex flex-column justify-content-center">
              <h2 className="d-flex fst-italic">WELCOME</h2>
              <h1 className="d-flex fst-italic">REDDINI</h1>
            </div>
          </div>
          <Row xs={10} md={10} className="g-3">
            {Array.from({ length: 1 }).map((_, idx) => (
              <Col key={idx}>
                <Card className="cardLandingPage bg-transparent text-white">
                  <Card.Img src={sfondoCard1} alt="Card image" />
                  <Card.ImgOverlay className="cardImgLandingPage">
                    <Card.Title className="btnNavOffcanv text-center fs-2 pb-1 ">
                      Colpa delle Carte
                    </Card.Title>
                    <Card.Text className="text-light fw-semibold text-center pb-2">
                      è un gioco di ruolo d'azione in cui i giocatori sono in
                      grado di partecipare alle lezioni nella scuola di magia e
                      stregoneria di Hogwarts.
                    </Card.Text>
                    <Card.Text className="text-light fw-semibold text-center pt-3">
                      <strong className="pe-2 text-uppercase">
                        Oggi in sala
                      </strong>{" "}
                      <small className="text-light fw-semibold fst-italic opacity-75">
                        alle 21:00
                      </small>
                    </Card.Text>
                  </Card.ImgOverlay>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </Container>
  );
}

export default Home