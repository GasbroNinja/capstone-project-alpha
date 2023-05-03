import React, { useState } from 'react'
import { Button, Offcanvas } from 'react-bootstrap';
import logoredshift from "../assets/images/LogoRedShift2023.png";
import "../App.css"


const NavbarMain = ({ ...props }) => {



  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
      <Button variant="outline-secondary" onClick={toggleShow} className="me-2">
        <img src={logoredshift} alt="logo-redshift" className="logoRedshift" />
      </Button>
      <Offcanvas
        className="offcanvasStyle1"
        show={show}
        onHide={handleClose}
        {...props}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="settingTextNav backgroundTextNav d-flex flex-column align-items-center ">
            Redshift Gaming
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="d-flex flex-column align-items-center justify-content-top">
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
    </>
  );
};


export default NavbarMain