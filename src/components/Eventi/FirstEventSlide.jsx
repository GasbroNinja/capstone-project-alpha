import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { Animator, MoveOut, batch } from "react-scroll-motion";
import "../Eventi/events.css";
import { useDispatch, useSelector } from "react-redux";
import { getEventsHomeAction } from "../../redux/actions";
import EventsCards from "./EventsCards";
//import { MdEmojiEvents } from "react-icons/md";

const FirstEventSlide = () => {
  const dispatch = useDispatch();
  const eventsHome = useSelector((state) => state.eventi.content);
  console.log(eventsHome);

  useEffect(() => {
    dispatch(getEventsHomeAction());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Animator animation={batch(MoveOut(0, -1000))}>
        <Container className="d-flex flex-column justify-content-center align-items-center ">
          <div className="welcomePage backgroundText py-1">
            <div className="d-inline-flex flex-column justify-content-center my-2">
              <h2 className="d-flex fst-italic d-flex justify-content-center">
                EVENTI DELLA SALA REDSHIFT <br />
              </h2>
            </div>
          </div>
        </Container>
      </Animator>

      <Container fluid className=" justify-content-center flex-nowrap ">
        <Animator animation={MoveOut(2000, 0)}>
          <div
            className="d-flex flex-nowrap  alignCards"
            style={{ overflowX: "scroll", overflowY: "hidden" }}
          >
            <Row
              xs={1}
              sm={1}
              md={1}
              lg={1}
              xl={1}
              xxl={1}
              className="g-3 d-flex flex-nowrap align-items-center justify-content-center "
            >
              {eventsHome &&
                eventsHome.map((eventsHome) => (
                  <EventsCards key={eventsHome.id} eventsHome={eventsHome} />
                ))}
            </Row>
          </div>
        </Animator>
      </Container>
    </>
  );
};

export default FirstEventSlide;
