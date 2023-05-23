import React from 'react'
import { Container } from 'react-bootstrap';
import NavbarMain from '../NavbarMain';
import {
  ScrollContainer,
  ScrollPage,
} from "react-scroll-motion";
import FirstSlideHome from './FirstSlideHome';
import SecondSlideHome from './SecondSlideHome';
import "../Home/home.css"
import Footer from '../Footer';
import ThirdSlideHome from './ThirdSlideHome';


 // const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
 // const FadeUp = batch(Fade(), Move(), Sticky());


const Home = () => {


  return (
    <ScrollContainer>
      <ScrollPage page={0}>
        <Container fluid className="backGroundNeon1 p-0">
          <Container
            fluid
            className="homeBase1 p-0"
            style={{ overflowY: "hidden" }}
          >
            <Container
              fluid
              className=" d-flex align-items-center justify-content-start p-3"
            >
              <NavbarMain />
            </Container>

            <FirstSlideHome />
          </Container>
        </Container>
      </ScrollPage>

      <Container fluid className="backGroundNeon1 p-0">
        <Container
          fluid
          className="homeBase1 p-0 "
        >
          <ScrollPage page={1}>
            
              <SecondSlideHome />
            
          </ScrollPage>
        </Container>
      </Container>

      <Container fluid className="backGroundNeon1 p-0 ">
        <Container
          fluid
          className="homeBase1 p-0"
          style={{ overflowY: "hidden" }}
        >
          <ScrollPage page={2}>
            <section>
              <ThirdSlideHome />
              <div className="">
                <Footer />
              </div>
            </section>
          </ScrollPage>
        </Container>
      </Container>
    </ScrollContainer>
  );
}

export default Home;