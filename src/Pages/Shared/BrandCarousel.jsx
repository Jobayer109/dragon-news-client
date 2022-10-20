import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Brand1 from "../../assets/Carousel/Brand1.png";
import Brand2 from "../../assets/Carousel/Brand2.png";

const BrandCarousel = () => {
  return (
    <div>
      <h4 className="mt-3 fw-bold ms-2">Brands ads:</h4>
      <Carousel variant="dark">
        <Carousel.Item>
          <img className="d-block h-100" src={Brand1} alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block h-100" src={Brand2} alt="" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default BrandCarousel;
