import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Animator, MoveOut, batch } from 'react-scroll-motion';

import CardHome from "./CardHome";
import "../Home/home.css";
import { useDispatch, useSelector } from 'react-redux';

import { getPostsHomeAction } from '../../redux/actions';
//import { MdEmojiEvents } from "react-icons/md";



const FirstSlideHome = () => {

      const dispatch = useDispatch();
      const cardsHome = useSelector((state) => state.cards.content);
      console.log(cardsHome);

      useEffect(() => {
        dispatch(getPostsHomeAction());

        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

  return (
    <>
      <Animator animation={batch(MoveOut(0, -1000))}>
        <Container className="d-flex flex-column justify-content-center align-items-center overflow-hidden">
          <div className="welcomePage backgroundText py-1">
            <div className="d-inline-flex flex-column justify-content-center my-2">
              <h2 className="d-flex fst-italic d-flex justify-content-center">
                I REDDINI SONO CONNESSI <br />
              </h2>
            </div>
          </div>
        </Container>
      </Animator>
      <Animator animation={MoveOut(2000, 0)}>
        <Container fluid className="d-lg-flex justify-content-center ">
          <Row
            xs={1}
            sm={1}
            md={1}
            lg={2}
            xl={3}
            className="row-cols-1 g-3 d-flex justify-content-center align-items-center alignCards"
          >
            {cardsHome &&
              cardsHome.map((cardsHome) => (
                <CardHome key={cardsHome.id} cardsHome={cardsHome} />
              ))}
          </Row>
        </Container>
      </Animator>
    </>
  );
}

export default FirstSlideHome