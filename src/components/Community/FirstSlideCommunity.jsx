import React, { useEffect } from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Animator, MoveOut } from 'react-scroll-motion';
import { getLadderHSAction, getLadderTFTAction } from '../../redux/actions';
import LadderHsTable from './LadderHsTable';
import LadderTftTable from './LadderTFTTable';

const FirstSlideCommunity = () => {

    const dispatch = useDispatch();
    const ladderHSCommunity = useSelector((state) => state.ladderHS.content);
    console.log(ladderHSCommunity);

    useEffect(() => {
    dispatch(getLadderHSAction());

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const dispatch2 = useDispatch();
    const ladderTFTCommunity = useSelector(
      (state) => state.ladderTFT.content
    );
    console.log(ladderTFTCommunity);

    useEffect(() => {
      dispatch2(getLadderTFTAction());

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
      <Container className="p-0">
        <Animator animation={MoveOut(2000, 0)}>
          <div className="m-5 pb-5">
            <Row
              xs={6}
              sm={6}
              md={6}
              lg={6}
              xl={6}
              xxl={6}
              className="d-flex align-items-center justify-content-between "
            >
              <Col
                xs={6}
                sm={6}
                md={6}
                lg={6}
                xl={6}
                xxl={6}
                className=""
              >
                <Table striped bordered hover variant="dark" className="px-3">
                  <thead>
                    <tr>
                      <th colSpan={3} className="text-center fw-bold">
                        CLASSIFICHE HS TOURNAMENT 19/05/2023
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {ladderHSCommunity &&
                      ladderHSCommunity.map((ladderHSCommunity) => (
                        <LadderHsTable
                          key={ladderHSCommunity.id}
                          ladderHSCommunity={ladderHSCommunity}
                        />
                      ))}
                  </tbody>
                </Table>
              </Col>
              <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
                <Table striped bordered hover variant="dark" className="px-3">
                  <thead>
                    <tr>
                      <th colSpan={3} className="text-center fw-bold">
                        CLASSIFICHE TFT TOURNAMENT 19/05/2023
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {ladderTFTCommunity &&
                      ladderTFTCommunity.map((ladderTFTCommunity) => (
                        <LadderTftTable
                          key={ladderTFTCommunity.id}
                          ladderTFTCommunity={ladderTFTCommunity}
                        />
                      ))}
                  </tbody>
                </Table>
              </Col>
            </Row>
          </div>
        </Animator>
      </Container>
    </>
  );
}

export default FirstSlideCommunity;