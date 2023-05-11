import React from 'react';
import { Container, Row } from "react-bootstrap";
import { Animator, MoveIn, MoveOut, batch } from "react-scroll-motion";
import staffHome from "../Home/staffHome.json";
import CardHome2 from './CardHome2';
import "../Home/home.css";

const SecondSlideHome = () => {
  return (
    <>
      <Animator animation={batch(MoveIn(500, -500), MoveOut(0, +1000))}>
        <Container className="d-flex flex-column justify-content-center align-items-center overflow-hidden">
          <div className="welcomePage backgroundText py-4 ">
            <div className="d-inline-flex flex-column justify-content-center my-2">
              <h2 className="d-flex fst-italic d-flex justify-content-center ">
                CHI SIAMO <br />
                I SOCI
              </h2>
            </div>
          </div>
        </Container>
      </Animator>
      <Animator animation={batch(MoveIn(-2000, 0), MoveOut(-2000, 0))}>
        <Container fluid className="d-lg-flex justify-content-center ">
          <Row
            xs={1}
            sm={1}
            md={2}
            lg={3}
            xl={2}
            className=" g-2 d-flex justify-content-center align-items-center"
          >
            {staffHome &&
              staffHome.map((staffHome) => (
                <CardHome2 key={staffHome.id} staffHome={staffHome} />
              ))}
          </Row>
        </Container>
      </Animator>
    </>
  );
}

export default SecondSlideHome