import React from "react";
import { FC } from "react";
import Carousel from "nuka-carousel";

const Slider: FC = () => {
  return (
    <Carousel
      className="slider"
      defaultControlsConfig={{
        nextButtonText: ">",
        prevButtonText: "<",
      }}
    >
      <img
        className="slider__image"
        src="../images/17.jpg"
        alt="скоро в продаже"
      />
      <img
        className="slider__image"
        src="../images/16.png"
        alt="скоро в продаже"
      />
      <img
        className="slider__image"
        src="../images/18.jpg"
        alt="скоро в продаже"
      />
      <img
        className="slider__image"
        src="../images/19.png"
        alt="скоро в продаже"
      />
      <img
        className="slider__image"
        src="../images/20.jpg"
        alt="скоро в продаже"
      />
    </Carousel>
  );
};

export default Slider;
