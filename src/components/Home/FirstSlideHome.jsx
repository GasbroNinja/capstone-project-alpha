import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Animator, MoveOut, Sticky, batch } from 'react-scroll-motion';
import dataHome from "../Home/dataHome.json";
import CardHome from "./CardHome";
import "../Home/home.css";
//import { MdEmojiEvents } from "react-icons/md";

const FirstSlideHome = () => {
  return (
    <>
      <Animator animation={batch(MoveOut(0, -1000))}>
        <Container className="d-flex flex-column justify-content-center align-items-center overflow-hidden">
          <div className="welcomePage backgroundText py-5">
            <div className="d-inline-flex flex-column justify-content-center my-2">
              <h2 className="d-flex fst-italic d-flex justify-content-center">
                I REDDINI SONO CONNESSI <br />
              </h2>
            </div>
          </div>
        </Container>
      </Animator>
      <Animator animation={MoveOut(2000, 0)}>
        <Container fluid className="d-lg-flex justify-content-center">
          <Row
            xs={1}
            sm={1}
            md={1}
            lg={1}
            xl={2}
            className="row-cols-1 g-3 d-flex justify-content-center align-items-center"
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

export default FirstSlideHome