import React from "react";
import "./Testimonial.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imgTestimonial from "./imgTestimonial";
import Slider from "react-slick";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Testimonial() {
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div className="testimonial__arrow prev" onClick={onClick}>
        <ArrowBackIosNewIcon />
      </div>
    );
  }

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className="testimonial__arrow next" onClick={onClick}>
        <ArrowForwardIosIcon />
      </div>
    );
  }

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="testimonial">
      <div className="testimonial__container">
        <Slider {...settings}>
          {imgTestimonial.map((testimonial, index) => (
            <div key={index} className="testimonial__item">
              <div className="testimonial__item__left">
                <picture>
                  <img
                    className="testimonial__image"
                    src={testimonial.url}
                    alt=""
                  />
                </picture>
              </div>
              <div className="testimonial__item__right">
                <h5 className="testimonial__title">
                  {testimonial.title}
                  <span className="testimonial__logo">
                    <img src={testimonial.logo} />
                  </span>
                </h5>
                <blockquote>
                  <i>{testimonial.description}</i>
                </blockquote>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Testimonial;
