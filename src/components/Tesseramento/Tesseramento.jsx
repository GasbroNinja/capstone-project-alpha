import React from "react";
import { Container } from "react-bootstrap";
import NavbarMain from "../NavbarMain";
import "../Tesseramento/tesseramento.css"
import ModalForm from "./ModalForm";
import { ScrollContainer, ScrollPage } from "react-scroll-motion";

const Tesseramento = () => {
  return (
    <ScrollContainer>
      <ScrollPage page={0}>
        <Container fluid className="backGroundNeon1 p-0">
          <Container fluid className="homeBase1 p-0">
            <Container
              fluid
              className=" d-flex align-items-center justify-content-start p-3"
            >
              <NavbarMain />
            </Container>

            <ModalForm />
          </Container>
        </Container>
      </ScrollPage>
    </ScrollContainer>
  );
};

export default Tesseramento;
