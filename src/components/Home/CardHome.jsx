import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import "../Home/home.css"

const CardHome = ({ dataHome }) => {
  return (
    <>
      <Col xs={12} xl={6} xxl={4} className='p-0 px-2'>
        <Card className="cardLandingPage bg-dark text-white my-4 mx-2  ">
          <Card.Img
            src={dataHome.img}
            alt="Card image"
            className=" fixImgCardHome"
          />
          <Row className="d-xs-flex flex-column">
            <Card.ImgOverlay className=" d-flex flex-column align-items-center justify-content-center">
              <Col xs={12} sm={3} md={3} lg={4} xl={4} className='text-end contentCard'>
                <Card.Title className="btnNavOffcanv text-center fs-2 pb-1">
                  {dataHome.title}
                </Card.Title>
              </Col>
              <Col xs={12} sm={6} md={6} lg={5} xl={6} className='text-end contentCard'>
                <Card.Text className="textCardBio text-light fw-semibold text-center pb-2">
                  {dataHome.bio}
                </Card.Text>
              </Col>
              <Col xs={12} sm={3} md={3} lg={3} xl={2} className='text-end contentCard'>
                <Card.Text className="text-light fw-semibold text-center pt-3">
                  Reddini
                </Card.Text>
              </Col>
            </Card.ImgOverlay>
          </Row>
        </Card>
      </Col>
    </>
  );
}

export default CardHome