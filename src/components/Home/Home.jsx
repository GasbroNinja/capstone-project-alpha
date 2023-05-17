import React from 'react'
import { Container } from 'react-bootstrap';
import NavbarMain from '../NavbarMain';

import {
  Animator,
  ScrollContainer,
  ScrollPage,
  Sticky,
  batch,
} from "react-scroll-motion";
import FirstSlideHome from './FirstSlideHome';
import SecondSlideHome from './SecondSlideHome';
import "../Home/home.css"
import Footer from '../Footer';

 // const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
 // const FadeUp = batch(Fade(), Move(), Sticky());


const Home = () => {


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
            
              <FirstSlideHome />
            
          </Container>
        </Container>
      </ScrollPage>

      <Container fluid className="backGroundNeon1 p-0">
        <Container fluid className="homeBase1 p-0">
          <ScrollPage page={1}>
            <section>
              <SecondSlideHome />
            </section>
          </ScrollPage>
        </Container>
      </Container>
      {/* TERZA SLIDE HOME */}
      <Container fluid className="backGroundNeon1 p-0">
        <Container fluid className="homeBase1 p-0">
          <ScrollPage page={2}>
            <Animator animation={batch(Sticky(50, 120))}>
              <section>
                <Footer />
              </section>
            </Animator>
          </ScrollPage>
        </Container>
      </Container>
    </ScrollContainer>
  );
}

export default Home;