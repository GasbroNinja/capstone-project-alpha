import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import NavbarMain from '../NavbarMain';
import "../Eventi/events.css"
import { useParams } from 'react-router-dom';
import { Animator, MoveIn } from 'react-scroll-motion';
import Footer from '../Footer';


const EventDetail = () => {
  const param = useParams();
  const [eventDet, setEventDet] = useState("")
  
        useEffect(() => {
          const singleEventData = async () => {
            try {
              const eventinfo = await fetch(
                `http://localhost:3001/eventi/${param.id}`
              );

              if (eventinfo.ok) {
                const eventinfodata = await eventinfo.json();
                console.log(eventinfodata);

                setEventDet(eventinfodata);
              }


            } catch (error) {}
          };
          singleEventData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);


  return (
    <Container fluid className="homeBase3 p-0">
      <Container fluid className="backGroundNeon2 p-0 overflow-y-hidden">
        <Container fluid className="homeBase2 p-0">
          <Container
            fluid
            className=" d-flex align-items-center justify-content-start p-3"
          >
            <NavbarMain />
          </Container>

          <Animator animation={MoveIn(0, -500)}>
            <Container className="d-flex flex-column justify-content-center align-items-center ">
              <div className="welcomePage backgroundText py-1">
                <div className="d-inline-flex flex-column justify-content-center my-2">
                  <h2 className="d-flex fst-italic d-flex justify-content-center fs-4">
                    EVENTO: <br />
                    {eventDet.title} <br />
                  </h2>
                </div>
              </div>
            </Container>
          </Animator>
          <Container className="d-flex align-items-center justify-content-center">
            <Row>
              <Col className="d-flex align-items-center justify-content-center">
                <Card className="cardLandingPage1 bg-dark text-white my-4 mx-2 flex-wrap cardSingleColSelect1 ">
                  <Card.Img
                    src={eventDet.img}
                    alt="Redshift Sala"
                    className=" fixImgCardHome1"
                  />
                  <Row className="d-xs-flex flex-column">
                    <Card.ImgOverlay className="contentCard2bis d-flex flex-column align-items-center justify-content-end border border-5 rounded-5 border-danger"></Card.ImgOverlay>
                  </Row>
                </Card>
              </Col>
              <Col className="d-flex align-items-center justify-content-center bg-dark py-3 rounded-3">
                <div className="ps-3 fs-3">
                  <Col
                    xs={12}
                    sm={3}
                    md={3}
                    lg={4}
                    xl={4}
                    className="text-center w-100"
                  >
                    <Card.Title className="text-danger rounded-pill px-2 text-center fw-bold fs-1 pb-2">
                      {eventDet.title}
                    </Card.Title>
                  </Col>
                  <Col
                    xs={12}
                    sm={6}
                    md={6}
                    lg={5}
                    xl={6}
                    className="text-center w-100"
                  >
                    <Card.Text className=" text-light fw-semibold text-center pb-2">
                      <span className="btnNavOffcanv fs-2">
                        {eventDet.date}
                        <br />
                        {eventDet.ore}
                      </span>{" "}
                    </Card.Text>
                  </Col>
                  <Col
                    xs={12}
                    sm={3}
                    md={3}
                    lg={3}
                    xl={2}
                    className="text-center w-100"
                  >
                    <Card.Text className="d-flex align-items-center justify-content-center flex-column  fw-semibold text-center pt-3">
                      {}
                      <a
                        href={eventDet.subscription}
                        className=" text-decoration-none bg-secondary fs-5 rounded-2"
                      >
                        <Button
                          variant="secondary"
                          className="text-danger fst-italic fw-bold text-shadow text-uppercase fs-3"
                        >
                          Iscriviti &nbsp; ✔
                        </Button>
                      </a>
                      <br />
                      <span className="btnNavOffcanv fs-5">
                        Requisito: {eventDet.required}
                      </span>
                      <br />
                      <span className="btnNavOffcanv fs-5">{eventDet.bio}</span>
                      <br />
                      <span className="btnNavOffcanv fs-5">
                        Prezzo: {eventDet.ingresso}
                      </span>
                    </Card.Text>
                  </Col>
                </div>
              </Col>
            </Row>
          </Container>

          <Footer />
        </Container>
      </Container>
    </Container>
  );
}

export default EventDetail