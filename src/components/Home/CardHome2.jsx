import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "../Home/home.css";

const CardHome2 = ({ dataHome2 }) => {
  return (
    <>
      <Col xs={12} lg={6} xl={6} xxl={4} className="p-0 px-2">
        <Card className="cardLandingPage bg-dark text-white my-4 mx-2  ">
          <Card.Img
            src={dataHome2.img}
            alt="Card image"
            className=" fixImgCardHome"
          />
          <Row className="d-xs-flex flex-column">
            <Card.ImgOverlay className=" d-flex flex-column align-items-center justify-content-end">
              <Col
                xs={12}
                sm={3}
                md={3}
                lg={4}
                xl={4}
                className="text-end contentCard"
              >
                <Card.Title className="text-end fw-bold fs-2 pb-1">
                  {dataHome2.title}
                </Card.Title>
              </Col>
              <Col
                xs={12}
                sm={6}
                md={6}
                lg={5}
                xl={6}
                className="text-end contentCard"
              >
                <Card.Text className="text-light fw-semibold text-end pb-2">
                  {dataHome2.bio}
                </Card.Text>
              </Col>
              <Col
                xs={12}
                sm={3}
                md={3}
                lg={3}
                xl={2}
                className="text-end contentCard"
              >
                <Card.Text className="text-light fw-semibold text-end pt-3">
                  Socio
                </Card.Text>
              </Col>
            </Card.ImgOverlay>
          </Row>
        </Card>
      </Col>
    </>
  );
};

export default CardHome2;
