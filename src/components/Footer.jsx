import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import "../App.css"
import { ImFacebook2 } from 'react-icons/im';
import { GrInstagram } from "react-icons/gr";

import { Link } from 'react-router-dom';
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

const Footer = () => {
  return (
    
      <Container fluid className="text-center text-md-left mt-5">
        <div>
          <Row>
            <Col md={6} className="mt-md-0 mt-3">
              <h5 className="text-uppercase FooterText bgFooterText text-start m-0 p-0 fs-6">
                REDSHIFT GAMING ©
              </h5>
              <p className="text-uppercase text-center FooterText bgFooterText fs-5 text-start m-0 p-0">
                Benvenuto nella casa dei Nerd
              </p>
            </Col>

            <hr className="clearfix w-100 d-md-none pb-0" />

            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase FooterText bgFooterText fs-6 m-0 p-0">
                Social
              </h5>
              <ul className="list-unstyled">
                <li className="text-decoration-none pb-2">
                  <Button variant="outline-danger">
                    <a
                      href="https://www.instagram.com/redshift_gaming/"
                      className="text-light fs-4 p-1 m-0 d-flex align-items-center"
                    >
                      <GrInstagram />
                    </a>
                  </Button>
                </li>
                <li className="text-decoration-none pb-2">
                  <Button variant="outline-danger">
                    <a
                      href="https://www.facebook.com/RedShiftGaming/"
                      className="text-light fs-4 p-1 m-0 d-flex align-items-center"
                    >
                      <ImFacebook2 />
                    </a>
                  </Button>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase FooterText bgFooterText m-0 p-0">
                Collegamenti
              </h5>
              <ul className="list-unstyled">
                <li>
                  <Link
                    to="/home"
                    className="text-uppercase FooterText bgFooterText m-0 py-1"
                  >
                    HOME
                  </Link>
                </li>
                <li>
                  <Link
                    to="/tesseramento"
                    className="text-uppercase FooterText bgFooterText m-0 py-1"
                  >
                    TESSERAMENTO
                  </Link>
                </li>
                <li>
                  <Link
                    to="/community"
                    className="text-uppercase FooterText bgFooterText m-0 py-1"
                  >
                    COMMUNITY
                  </Link>
                </li>
                <li>
                  <Link
                    to="/events"
                    className="text-uppercase FooterText bgFooterText m-0 py-1"
                  >
                    EVENTI
                  </Link>
                </li>
              </ul>
            </div>
          </Row>
        </div>

        <div className="footer-copyright text-center text-light py-2 ">
          © 2020 Copyright: <br />
          <a
            href="https://www.instagram.com/redshift_gaming/"
            className="text-decoration-none text-danger"
          >
            &nbsp; RedShiftGaming.it
          </a>
        </div>
      </Container>
  );

}

export default Footer