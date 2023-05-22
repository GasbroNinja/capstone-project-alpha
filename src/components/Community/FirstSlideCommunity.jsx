import React, { useEffect } from 'react'
import { Container, Row, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Animator, MoveOut } from 'react-scroll-motion';
import { getLadderHSAction } from '../../redux/actions';
import LadderHsTable from './LadderHsTable';

const FirstSlideCommunity = () => {

    const dispatch = useDispatch();
    const ladderHSCommunity = useSelector((state) => state.ladderHS.content);
    console.log(ladderHSCommunity);

    useEffect(() => {
    dispatch(getLadderHSAction());

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return (
    <>
      <Animator animation={MoveOut(0, -1000)}>
        <Container className="d-flex flex-column justify-content-center align-items-center ">
          <div className="welcomePage backgroundText py-1">
            <div className="d-inline-flex flex-column justify-content-center my-2">
              <h2 className="d-flex fst-italic d-flex justify-content-center">
                TOP REDDINI
                <br />
                CLASSIFICHE GENERALI REDSHIFT
              </h2>
            </div>
          </div>
        </Container>
      </Animator>
      <Container fluid className=" justify-content-center flex-nowrap ">
        <Animator animation={MoveOut(2000, 0)}>
          <div
            className=""
          >
            <Row
              xs={1}
              sm={1}
              md={1}
              lg={1}
              xl={1}
              xxl={1}
              className="g-3 d-flex align-items-center justify-content-center "
            >
                <Table striped bordered hover variant="dark">
                    <thead>
                    <tr>
                        <th colSpan={3} className='text-center fw-bold'>CLASSIFICHE HS TOURNAMENT 19/05/2023</th>
                    </tr>
                    </thead>
                        <tbody>
                     {ladderHSCommunity &&
                        ladderHSCommunity.map((ladderHSCommunity) => (
                        <LadderHsTable key={ladderHSCommunity.id} ladderHSCommunity={ladderHSCommunity} />
                        ))}
                        </tbody>
                </Table>
            </Row>
          </div>
        </Animator>
      </Container>
    </>
  );
}

export default FirstSlideCommunity;