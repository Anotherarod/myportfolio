import React from "react";
import Carousel from "react-bootstrap/carousel";
import Slide1 from "../../assets/img/carousel/SanFranciscoSlide1.webp";
import Slide2 from "../../assets/img/carousel/backgroundSlide2.webp";
import Slide3 from "../../assets/img/carousel/echnologySlide3.webp";
import ScrollDown from "../scrolldown/scrolldown.component";
import "./carousel.styles.css";

const Carousal = () => {
  return (
    <div id="home">
      <Carousel controls={false} indicators interval={2500} pauseOnHover={false}>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={Slide2} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={Slide3} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={Slide1} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <ScrollDown />
    </div>
  );
};

export default Carousal;