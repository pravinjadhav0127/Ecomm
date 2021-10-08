import { useState } from "react";
import "../SliderPage/ImageSlider.css";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import SliderData from "./SliderData";
const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextslide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  console.log(current);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <>
      <div className="slider">
        <FaArrowAltCircleRight className="right_arrow" onClick={nextslide} />
        <FaArrowAltCircleLeft className="left_arrow" onClick={prevSlide} />
        {SliderData.map((imgObj, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img src={imgObj.img} alt="offer-img" className="images" />
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ImageSlider;
