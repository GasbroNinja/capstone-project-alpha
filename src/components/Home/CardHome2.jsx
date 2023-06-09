import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "../Home/home.css";

const CardHome2 = ({ staffHome }) => {
  return (
    <>
      <Col
        xs={4}
        sm={4}
        md={4}
        lg={4}
        xl={4}
        xxl={4}
        className="px-5 cardSingleCol"
      >
        <Card className="cardLandingPage bg-dark text-white my-4 mx-2 flex-wrap cardSingleColSelect ">
          <Card.Img
            src={staffHome.img}
            alt="Redshift Sala"
            className=" fixImgCardHome"
          />
          <Row className="d-xs-flex flex-column">
            <Card.ImgOverlay className="contentCard2 d-flex flex-column align-items-center justify-content-end border border-5 rounded-5 border-light">
              <div className="">
                <Col
                  xs={12}
                  sm={3}
                  md={3}
                  lg={4}
                  xl={4}
                  className=" text-center w-100"
                >
                  <Card.Title className="contentCard text-center fw-bold fs-1 pb-1">
                    {staffHome.title}
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
                  <Card.Text className="text-light fw-semibold text-center pb-2">
                    {staffHome.bio}
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
                  <Card.Text className="text-light fw-semibold fst-italic fs-4 text-center pt-3">
                    Socio
                  </Card.Text>
                </Col>
              </div>
            </Card.ImgOverlay>
          </Row>
        </Card>
      </Col>
    </>
  );
};

export default CardHome2;
