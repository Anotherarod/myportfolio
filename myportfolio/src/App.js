import React from "react";
import Navbar from "./components/navbar/navbar.component";
import Carousel from "./components/carousel/carousel.component";
import Title from "./components/title/title.component";
import About from "./pages/about/about.component";
import Skills from "./pages/skills/skills.component";
import Container from "react-bootstrap/container";
import TimeLine from "./components/projects/projects.component";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import ContactForm from "./pages/contact/contact.component";
import { Parallax } from "react-parallax";
import Particles from "react-particles-js";
import { particlesOptions } from "./particlesOptions";
import FooterPanel from "./components/footer/footer.component";

import "./App.css";

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <Carousel/>
      <Title />
      <Navbar />
      <Particles
        className="particles particles-box"
        params={particlesOptions}
      />

      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Skills />
        </Slide>
      </Container>
      {/* <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />

            <Experience />
          </Fade>
        </Container>
      </div> */}
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <TimeLine />
        </Slide>
      </Container>
      <Container className="container-box rounded">
        <Fade duration={500}>
          <hr />
          <ContactForm />
        </Fade>
      </Container>

      <hr />
      <FooterPanel />
    </div>
  );
};

export default App;

