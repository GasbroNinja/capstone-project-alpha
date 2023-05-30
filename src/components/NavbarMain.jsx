import React, { useState } from 'react'
import { Button, Container, Offcanvas } from 'react-bootstrap';
import { TfiMenu } from "react-icons/tfi";
import logoredshift from "../assets/images/LogoRedShift2023.png";
import "../App.css"
import { Link } from 'react-router-dom';


const NavbarMain = ({ ...props }) => {

  // useSelector dal reducer


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  let userlogged = sessionStorage.getItem("username");

  return (
    <>
      <Container
        fluid
        className="d-flex justify-content-between align-items-center p-0"
      >
        <Button
          variant="dark"
          onClick={toggleShow}
          className=" me-sm-2 d-flex align-items-center justify-content-top px-2 px-sm-3"
        >
          <h2 className="btnNavOffcanv text-danger fs-2 pe-2 pt-1 m-0">RED</h2>
          <TfiMenu className="arrowbtnNavOffcanv fs-2"></TfiMenu>
        </Button>
        <Offcanvas
          className="offcanvasStyle1 overflow-x-hidden"
          show={show}
          onHide={handleClose}
          {...props}
        >
          <Offcanvas.Header className="d-flex justify-content-center">
            <Offcanvas.Title className="w-100 pt-5 my-5 settingTextNav backgroundTextNav textTitleNavOffcanv d-flex flex-column align-items-center justify-content-center ">
              <Link to={"/"} className="text-decoration-none">
                Redshift Gaming
              </Link>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className=" d-flex flex-column align-items-center justify-content-top">
            <Button
              variant="link"
              className="settingTextNav backgroundTextNav pb-5"
            >
              <Link to={"/home"} className="text-decoration-none">
                Home
              </Link>
            </Button>

            <Button
              variant="link"
              className="settingTextNav backgroundTextNav pb-5"
            >
              <Link to={"/tesseramento"} className="text-decoration-none">
                Tesseramento
              </Link>
            </Button>

            <Button
              variant="link"
              className="settingTextNav backgroundTextNav pb-5"
            >
              <Link to={"/community"} className="text-decoration-none">
                Community
              </Link>
            </Button>

            <Button
              variant="link"
              className="settingTextNav backgroundTextNav pb-5"
            >
              <Link to={"/events"} className="text-decoration-none">
                Eventi
              </Link>
            </Button>
          </Offcanvas.Body>
        </Offcanvas>
        <div className="d-none d-sm-flex justify-content-center px-auto">
          <Link to={"/"} className="text-decoration-none">
            <img
              src={logoredshift}
              alt="logo-redshift"
              className="logoRedshift mx-3"
            />
          </Link>
        </div>
      </Container>

      <div className="d-flex justify-content-between">
        {userlogged ? (
          <Link
            to={"/login"}
            className="bg-dark rounded-2 text-decoration-none"
          >
            <h2 className="btnNavOffcanv text-danger d-flex align-items-center fs-3 py-0 px-3 my-2">
              {userlogged}
            </h2>
          </Link>
        ) : (
          <Link to={"/login"} className="bg-dark rounded-2">
            <Button
              variant="dark"
              className="btnNavOffcanv text-uppercase fs-4"
            >
              Accedi
            </Button>
          </Link>
        )}
      </div>
    </>
  );
};


export default NavbarMain