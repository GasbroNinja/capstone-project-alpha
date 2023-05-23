import React from 'react'
import { Card, Col, Container, Row, } from 'react-bootstrap';
import sfondoCard1 from "../assets/images/hogwarts-legacy-3840x2160-10410.jpg";
import NavbarMain from './NavbarMain';
import Footer from './Footer';
import "../App.css"

const LandingPage = () => {




  return (
    <Container fluid className="homeBase4 p-0">
      <Container fluid className="backGroundNeon p-0 overflow-y-hidden">
        <Container fluid className="homeBase1 p-0">
          <Container
            fluid
            className=" d-flex align-items-center justify-content-start p-3"
          >
            <NavbarMain />
          </Container>

          <div className="d-flex flex-column justify-content-center align-items-center overflow-hidden ">
            <div className="welcomePage backgroundText py-2 px-xs-1 px-sm-1 px-md-0 ">
              <div className=" d-inline-flex flex-column justify-content-center my-3 w-100">
                <h2 className="d-flex fst-italic d-flex justify-content-center">
                  WELCOME REDDINI
                </h2>
                <h1 className="d-flex fst-italic d-flex justify-content-center">
                  EVENTO DEL MESE
                </h1>
              </div>
            </div>

            <Row xs={12} md={12} className="g-3">
              {Array.from({ length: 1 }).map((_, idx) => (
                <Col className="m-0 p-0" key={idx}>
                  <Card className="cardLandingPage bg-transparent text-white my-3 mx-2">
                    <Card.Img
                      className="ImgResponsivenessLP"
                      src={sfondoCard1}
                      alt="Card image"
                    />
                    <Row className="d-xs-flex d-flex flex-column">
                      <Card.ImgOverlay className="p-0 cardImgLandingPage d-flex  flex-column align-items-center justify-content-center">
                        <Col xs={12} sm={3} md={3} lg={4} xl={4}>
                          <Card.Title className="textCardLandingPage text-center fs-2 pb-1">
                            Coppa Delle Casate
                          </Card.Title>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={5} xl={6}>
                          <Card.Text className="textCardBio fs-6 text-light fw-semibold text-center pb-2">
                            Nuovo evento tema Harry Potter, vieni anche tu
                            giorno 21 per partecipare ad una giornata
                            all'insegna della saga di maghi più apprezzata di
                            sempre, tra minigiochi ed altre sorprese vieni a
                            divertirti insieme agli altri!
                          </Card.Text>
                        </Col>
                        <Col xs={12} sm={3} md={3} lg={3} xl={2}>
                          <Card.Text
                            className="text-light fw-semibold text-center pt-3 w-100
                        "
                          >
                            <strong className=" text-uppercase text-center w-100 ">
                              Oggi in <br />
                              sala
                              <br />
                            </strong>
                            <small className="textCardLandingPage fs-3 fw-bold text-center fst-italic w-100">
                              21:00
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
          <div className="">
            <Footer />
          </div>
        </Container>
      </Container>
    </Container>
  );
}

export default LandingPage;