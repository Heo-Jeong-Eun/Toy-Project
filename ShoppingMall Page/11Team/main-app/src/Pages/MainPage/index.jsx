import React from "react";
import Nav from "../../Components/Nav";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slick.css";
import styled from "styled-components";

const Main = () => {
  const demoCategory = ["TOP", "SWEATER", "PANTS", "OUTER", "OTHER"];

  const CategoryClickHandler = (category) => {
    console.log(category);
  };

  const sliderSettings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <div>
      <Nav linkList={["login", "signup"]}></Nav>

      <Slider {...sliderSettings}>
        {demoCategory.map((item) => (
          <div
            className="categoryContainer"
            onClick={() => CategoryClickHandler(item)}
          >
            <div className="category">{item}</div>
            <img
              className="categoryImg"
              src={require(`./categoryImg/${item}.png`)}
              alt={`${item}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Main;
