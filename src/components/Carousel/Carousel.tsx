import React, { useState } from "react";
import "./Carousel.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

interface CarouselProps {
  slides: {
    src: string;
    alt: string;
  }[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === slides.length - 1 ? 0 : slide + 1);
  };
  const prevSlide = () => {
    setSlide(slide === 0 ? slides.length - 1 : slide - 1);
  };
  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide} />
      {slides.map((item, idx) => {
        return (
          <div
            style={{
              backgroundImage: `url(${item.src})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            key={idx}
            className={slide === idx ? "slide" : "slide-hidden"}
          ></div>
        );
      })}
      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={nextSlide}
      />
      <span className="indicators">
        {slides.map((_, idx) => {
          return (
            <button
              key={idx}
              onClick={() => setSlide(idx)}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
            ></button>
          );
        })}
      </span>
    </div>
  );
};

export default Carousel;
