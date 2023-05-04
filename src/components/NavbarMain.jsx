import React, { useState } from 'react'
import { Button, Container, Offcanvas } from 'react-bootstrap';
import { ImArrowDown } from "react-icons/im";
import logoredshift from "../assets/images/LogoRedShift2023.png";
import "../App.css"


const NavbarMain = ({ ...props }) => {



  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
      <Container
        fluid
        className="d-flex justify-content-start align-items-center"
      >
        <Button
          variant="outline-dark"
          onClick={toggleShow}
          className=" me-2 d-flex align-items-center justify-content-top px-3"
        >
          <h2 className="btnNavOffcanv text-danger fs-2 pe-3 pt-1">RED</h2>
          <ImArrowDown className="arrowbtnNavOffcanv fs-2"></ImArrowDown>
        </Button>
        <Offcanvas
          className="offcanvasStyle1 overflow-x-hidden"
          show={show}
          onHide={handleClose}
          {...props}
        >
          <Offcanvas.Header className="d-flex justify-content-center">
            <Offcanvas.Title className="w-100 pt-5 my-5 settingTextNav backgroundTextNav textTitleNavOffcanv d-flex flex-column align-items-center justify-content-center ">
              Redshift Gaming
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className=" d-flex flex-column align-items-center justify-content-top">
            <Button
              variant="link"
              className="settingTextNav backgroundTextNav pb-5"
            >
              Home
            </Button>

            <Button
              variant="link"
              className="settingTextNav backgroundTextNav pb-5"
            >
              Tesseramento
            </Button>

            <Button
              variant="link"
              className="settingTextNav backgroundTextNav pb-5"
            >
              Community
            </Button>

            <Button
              variant="link"
              className="settingTextNav backgroundTextNav pb-5"
            >
              Eventi
            </Button>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
      <div className="d-flex justify-content-center">
        <img src={logoredshift} alt="logo-redshift" className="logoRedshift" />
      </div>
    </>
  );
};


export default NavbarMain