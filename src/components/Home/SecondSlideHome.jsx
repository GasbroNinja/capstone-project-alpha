import React from 'react';
import { Container, Row } from "react-bootstrap";
import { Animator, MoveIn, MoveOut, batch } from "react-scroll-motion";
import staffHome from "../Home/staffHome.json";
import CardHome2 from './CardHome2';
import "../Home/home.css";

const SecondSlideHome = () => {
  return (
    <>
      <Animator animation={batch(MoveIn(0, -500), MoveOut(0, -1000))}>
        <Container className="d-flex flex-column justify-content-center align-items-center overflow-hidden">
          <div className="welcomePage backgroundText py-4 ">
            <div className="d-inline-flex flex-column justify-content-center my-2">
              <h2 className="d-flex fst-italic d-flex justify-content-center ">
                CHI SIAMO <br />
                <br />I SOCI
              </h2>
            </div>
          </div>
        </Container>
      </Animator>

      <Container
        fluid
        className="d-lg-flex justify-content-center flex-nowrap "
      >
        <Animator animation={batch(MoveIn(-2000, 0), MoveOut(0, -1000))}>
          <div
            className="d-flex flex-wrap"
            
          >
            <Row
              xs={1}
              sm={1}
              md={1}
              lg={1}
              xl={1}
              className=" g-2 d-flex flex-nowrap justify-content-center align-items-center"
            >
              {staffHome &&
                staffHome.map((staffHome) => (
                  <CardHome2 key={staffHome.id} staffHome={staffHome} />
                ))}
            </Row>
          </div>
        </Animator>
      </Container>
    </>
  );
}

export default SecondSlideHome