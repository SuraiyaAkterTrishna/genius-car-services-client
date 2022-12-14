import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import image1 from "../../images/banner/banner1.jpg";
import image2 from "../../images/banner/banner2.jpg";
import image3 from "../../images/banner/banner3.jpg";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100" src={image1} alt="First slide" />
        <Carousel.Caption>
          <h3>Car Health Check</h3>
          <p>We take care of your car. Stay Happy, Stay Relax.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image2} alt="Second slide" />

        <Carousel.Caption>
          <h3>Car Health Check</h3>
          <p>We take care of your car. Stay Happy, Stay Relax.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Car Health Check</h3>
          <p>We take care of your car. Stay Happy, Stay Relax.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
