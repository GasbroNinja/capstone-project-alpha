import React from 'react'
import { Container, Row } from 'react-bootstrap';
import NavbarMain from '../NavbarMain';
import dataHome from '../Home/dataHome.json'
import CardHome from './CardHome';
//import { MdEmojiEvents } from "react-icons/md";


import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";

const LandingPage = () => {

  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

  return (
    <ScrollContainer>
      <ScrollPage page={0}>
        <Container fluid className="backGroundNeon p-0">
          <Container fluid className="homeBase p-0">
            <Container
              fluid
              className=" d-flex align-items-center justify-content-start p-3"
            >
              <NavbarMain />
            </Container>
            <Animator animation={ZoomOut()}>
              <Container className="d-flex flex-column justify-content-center align-items-center overflow-hidden">
                <div className="welcomePage backgroundText py-2">
                  <div className="d-inline-flex flex-column justify-content-center my-2">
                    <h2 className="d-flex fst-italic d-flex justify-content-center">
                      I REDDINI SONO CONNESSI <br />
                    </h2>
                  </div>
                </div>
              </Container>
            </Animator>

            <Container fluid>
              <Row
                xs={1}
                sm={1}
                md={1}
                lg={1}
                xl={2}
                className="row-cols-1 g-2 d-flex justify-content-center"
              >
                {dataHome &&
                  dataHome.map((dataHome) => (
                    <CardHome key={dataHome.id} dataHome={dataHome} />
                  ))}
              </Row>
            </Container>
          </Container>
        </Container>
      </ScrollPage>
      <ScrollPage page={1}>
        <Container fluid className="backGroundNeon p-0">
          <Container fluid className="homeBase p-0">
            <Container
              fluid
              className=" d-flex align-items-center justify-content-start p-3"
            >
              <NavbarMain />
            </Container>
            <Animator animation={batch( FadeIn(), ZoomIn(), MoveOut(0, 200))}>
              <Container className="d-flex flex-column justify-content-center align-items-center overflow-hidden">
                <div className="welcomePage backgroundText py-2">
                  <div className="d-inline-flex flex-column justify-content-center my-2">
                    <h2 className="d-flex fst-italic d-flex justify-content-center">
                      I REDDINI SONO CONNESSI <br />
                    </h2>
                  </div>
                </div>
              </Container>
            </Animator>

            <Container fluid>
              <Row
                xs={1}
                sm={1}
                md={1}
                lg={1}
                xl={2}
                className="row-cols-1 g-2 d-flex justify-content-center"
              >
                {dataHome &&
                  dataHome.map((dataHome) => (
                    <CardHome key={dataHome.id} dataHome={dataHome} />
                  ))}
              </Row>
            </Container>
          </Container>
        </Container>
      </ScrollPage>
    </ScrollContainer>
  );
}

export default LandingPage