import React from "react";
import { Container } from "react-bootstrap";
import NavbarMain from "../NavbarMain";
import "../Community/community.css"
import FirstSlideCommunity from "./FirstSlideCommunity";
import Footer from "../Footer";


const Community = () => {
  return (
    <Container fluid className="backGroundNeon p-0">
      <Container fluid className="homeBase p-0">
        <Container
          fluid
          className=" d-flex align-items-center justify-content-start p-3"
        >
          <NavbarMain />
        </Container>

        <section>
          <FirstSlideCommunity />
          <div className="">
            <Footer />
          </div>
        </section>
      </Container>
    </Container>
  );
};

export default Community;
