import React from 'react';
import { Container, Row } from "react-bootstrap";
import { Animator, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, batch } from "react-scroll-motion";
import dataHome from "../Home/dataHome.json";
import CardHome from "./CardHome";
import "../Home/home.css";
const SecondSlideHome = () => {
  return (
    <>
      <Animator animation={batch(MoveIn(500, -500), MoveOut(0, +1000))}>
        <Container className="d-flex flex-column justify-content-center align-items-center overflow-hidden">
          <div className="welcomePage backgroundText py-4">
            <div className="d-inline-flex flex-column justify-content-center my-2">
              <h2 className="d-flex fst-italic d-flex justify-content-center">
                CHI SIAMO <br />
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
            md={1}
            lg={1}
            xl={2}
            className="row-cols-1 g-2 d-flex justify-content-center align-items-center"
          >
            {dataHome &&
              dataHome.map((dataHome) => (
                <CardHome key={dataHome.id} dataHome={dataHome} />
              ))}
          </Row>
        </Container>
      </Animator>
    </>
  );
}

export default SecondSlideHome