import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import "../Home/home.css";
import { Link } from "react-router-dom";


const CardEventsHome = ({ eventsHome }) => {
  return (
    <>
      <Col
        xs={2}
        sm={2}
        md={2}
        lg={2}
        xl={2}
        xxl={2}
        className="px-5 cardSingleCol"
      >
        <Link to={`/event-detail/${eventsHome.id}`}>
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
                    <Card.Title className="contentCard text-center fw-bold fs-1 pb-1">
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
                      {eventsHome.date} <br /> {eventsHome.ore}
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
                    <Card.Text className="d-flex align-items-center justify-content-center flex-column text-light fw-semibold text-center pt-3">
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
                      {eventsHome.required} <br />
                      {eventsHome.ingresso}
                    </Card.Text>
                  </Col>
                </div>
              </Card.ImgOverlay>
            </Row>
          </Card>
        </Link>
      </Col>
    </>
  );
};

export default CardEventsHome;
