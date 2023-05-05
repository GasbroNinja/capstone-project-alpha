import React from 'react'
import "../App.css"
import { Card, Col, Container, Row, } from 'react-bootstrap';

import sfondoCard1 from "../assets/images/hogwarts-legacy-3840x2160-10410.jpg";
import NavbarMain from './NavbarMain';
import { MdEmojiEvents } from "react-icons/md";

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

        <div className="d-flex flex-column justify-content-center align-items-center overflow-hidden">
          <div className="welcomePage backgroundText py-2 ">
            <div className="d-inline-flex flex-column justify-content-center my-3 w-100">
              <h2 className="d-flex fst-italic d-flex justify-content-center">
                WELCOME
              </h2>
              <h1 className="d-flex fst-italic mb-5 d-flex justify-content-center">
                REDDINI
              </h1>
              <h1 className="d-flex fst-italic d-flex justify-content-center">
                EVENTO DEL GIORNO
              </h1>
            </div>
          </div>
          <MdEmojiEvents />
          <Row xs={12} md={12} className="g-3">
            {Array.from({ length: 1 }).map((_, idx) => (
              <Col key={idx}>
                <Card className="cardLandingPage bg-transparent text-white my-3 mx-2">
                  <Card.Img src={sfondoCard1} alt="Card image" />
                  <Row className="d-xs-flex flex-column">
                    <Card.ImgOverlay className="cardImgLandingPage d-flex flex-column align-items-center justify-content-center">
                      <Col xs={12} sm={3} md={3} lg={4} xl={4}>
                        <Card.Title className="btnNavOffcanv text-center fs-2 pb-1">
                          Colpa delle Carte
                        </Card.Title>
                      </Col>
                      <Col xs={12} sm={6} md={6} lg={5} xl={6}>
                        <Card.Text className="textCardBio text-light fw-semibold text-center pb-2">
                          è un gioco di ruolo d'azione in cui i giocatori sono
                          in grado di partecipare alle lezioni nella scuola di
                          magia e stregoneria di Hogwarts.
                        </Card.Text>
                      </Col>
                      <Col xs={12} sm={3} md={3} lg={3} xl={2}>
                        <Card.Text className="text-light fw-semibold text-center pt-3 w-100
                        ">
                          <strong className="pe-2 text-uppercase ">
                            Oggi in sala
                          </strong>
                          &nbsp;&nbsp;
                          <small className="btnNavOffcanv fs-3 fw-bold fst-italic">
                            alle 21:00
                          </small>
                        </Card.Text>
                      </Col>
                    </Card.ImgOverlay>
                  </Row>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </Container>
  );
}

export default LandingPage;