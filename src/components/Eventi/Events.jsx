import React from "react";
import { Container } from "react-bootstrap";
import NavbarMain from "../NavbarMain";
import "../Eventi/events.css"
import { ScrollContainer, ScrollPage } from "react-scroll-motion";
import FirstEventSlide from "./FirstEventSlide";
import Footer from "../Footer";

const Events = () => {
  return (
    <ScrollContainer>
      <ScrollPage page={0}>
        <Container fluid className="backGroundNeon2 p-0">
          <Container
            fluid
            className="homeBase2 p-0"
            style={{ overflowY: "hidden" }}
          >
            <Container
              fluid
              className=" d-flex align-items-center justify-content-start p-3"
            >
              <NavbarMain />
            </Container>

            <section>
              <FirstEventSlide />
              <div className="">
                <Footer />
              </div>
            </section>
          </Container>
        </Container>
      </ScrollPage>
    </ScrollContainer>
  );
};

export default Events;
