import React from 'react'
import { Container } from 'react-bootstrap';
import { Animator, MoveOut, batch } from 'react-scroll-motion';

const ModalForm = () => {
  return (
    <>
      <Animator animation={batch(MoveOut(0, -1000))}>
        <Container className="d-flex flex-column justify-content-center align-items-center overflow-hidden">
          <div className="welcomePage backgroundText py-5">
            <div className="d-inline-flex flex-column justify-content-center my-2">
              <h2 className="d-flex fst-italic d-flex justify-content-center">
                Tessarati <br />
              </h2>
            </div>
          </div>
        </Container>
      </Animator>
    </>
  );
}

export default ModalForm;