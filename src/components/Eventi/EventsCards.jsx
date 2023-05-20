
import React from 'react'
import { Card, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../Eventi/events.css"


const EventsCards = ({ eventsHome, props }) => {
  return (
    <>
    <Link to={`/event-detail/${eventsHome.id}`}>
      <Col
        xs={1}
        sm={1}
        md={1}
        lg={1}
        xl={1}
        xxl={1}
        className="px-5 cardSingleCol"
      >
        <Card className="cardLandingPage bg-dark text-white my-4 mx-2 flex-wrap cardSingleColSelect ">
          <Card.Img
            src={eventsHome.img}
            alt="Redshift Sala"
            className=" fixImgCardHome"
          />
          <Row className="d-xs-flex flex-column">
            <Card.ImgOverlay className="contentCard2 d-flex flex-column align-items-center justify-content-end border border-5 rounded-5 border-danger">
              <div className="">
                <Col
                  xs={12}
                  sm={3}
                  md={3}
                  lg={4}
                  xl={4}
                  className="text-center w-100"
                >
                  <Card.Title className="contentCard text-primary rounded-pill px-2 text-center fw-bold fs-1 pb-1">
                    {eventsHome.title}
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
                    <span className="btnNavOffcanv fs-5">
                      {eventsHome.date}
                      <br />
                      {eventsHome.ore}
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
                      href={eventsHome.subscription}
                      className=" text-decoration-none bg-secondary fs-5 rounded-2"
                    >
                      <Button
                        variant="dark"
                        className="btnNavOffcanv text-uppercase fs-5"
                      >
                        Iscriviti ✔
                      </Button>
                    </a>
                    <br />
                    <span className="btnNavOffcanv fs-5">
                      Requisito: {eventsHome.required}
                    </span>
                    <br />
                    <span className="btnNavOffcanv fs-5">
                      Prezzo: {eventsHome.ingresso}
                    </span>
                  </Card.Text>
                </Col>
              </div>
            </Card.ImgOverlay>
          </Row>
        </Card>
      </Col>
      </Link>
    </>
  );
};

export default EventsCards;
