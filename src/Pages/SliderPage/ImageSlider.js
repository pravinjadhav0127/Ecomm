import { useState } from "react";
import "../SliderPage/ImageSlider.css";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  //   const length = slides.length;

  //   if (!Array.isArray(slides) || slides.length <= 0) {
  //     return null;
  //   }
  const ImgData = [
    {
      img: "https://images.pexels.com/photos/5709661/pexels-photo-5709661.jpeg?cs=srgb&dl=pexels-sam-lion-5709661.jpg&fm=jpg",
    },
    {
      img: "https://images.pexels.com/photos/4210860/pexels-photo-4210860.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      img: "https://images.pexels.com/photos/3557818/pexels-photo-3557818.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
  ];
  return (
    <>
      {ImgData.map((imgObj, index) => {
        return (
          <div className="slider">
            <FaArrowAltCircleRight className="right_arrow" />
            <FaArrowAltCircleLeft className="left_arrow" />
            <img src={imgObj.img} alt="offer-img" className="images" />
          </div>
        );
      })}
    </>
  );
};

export default ImageSlider;
