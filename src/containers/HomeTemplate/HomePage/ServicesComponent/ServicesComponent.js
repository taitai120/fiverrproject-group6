import React from "react";
import "./ServicesComponent.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
  logoDesign,
  wordPress,
  voiceOver,
  videoExplainer,
  socialMedia,
  illustration,
  translation,
  dataEntry,
  bookCovers,
} from "./exportBrandLogo";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";

function ServicesComponent() {
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className="myarrow myarrow-next" onClick={onClick}>
        <ArrowForwardIosIcon />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div className="myarrow myarrow-prev" onClick={onClick}>
        <ArrowBackIosNewIcon />
      </div>
    );
  }

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="services">
      <div className="services__container">
        <div className="services__title">
          <h1>Popular professional services</h1>
        </div>
        <Slider {...settings} className="services__content">
          <div className="services__item">
            <div className="services__item__text">
              <p>Build your brand</p>
              <h3>Logo Design</h3>
            </div>
            <Link
              to="/categories/61977cebaef344001cecee6c/618c910f95d99f001c0c047c"
              className="services__item__img"
            >
              <img src={logoDesign} alt="" />
            </Link>
          </div>
          <div className="services__item">
            <div className="services__item__text">
              <p>Customine your site</p>
              <h3>WordPress</h3>
            </div>
            <Link
              to="/categories/61987645aef344001cecfcf9/6198764daef344001cecfcfb"
              className="services__item__img"
            >
              <img src={wordPress} alt="" />
            </Link>
          </div>
          <div className="services__item">
            <div className="services__item__text">
              <p>Share your message</p>
              <h3>Voice Over</h3>
            </div>
            <Link
              to="/categories/619875deaef344001cecfc9f/619875e6aef344001cecfca1"
              className="services__item__img"
            >
              <img src={voiceOver} alt="" />
            </Link>
          </div>
          <div className="services__item">
            <div className="services__item__text">
              <p>Engage your audience</p>
              <h3>Video Explainer</h3>
            </div>
            <Link
              to="/categories/6198753aaef344001cecfc19/61987544aef344001cecfc1b"
              className="services__item__img"
            >
              <img src={videoExplainer} alt="" />
            </Link>
          </div>
          <div className="services__item">
            <div className="services__item__text">
              <p>Reach more customers</p>
              <h3>Social Media</h3>
            </div>
            <Link
              to="/categories/61987421aef344001cecfb35/6198742baef344001cecfb37"
              className="services__item__img"
            >
              <img src={socialMedia} alt="" />
            </Link>
          </div>
          <div className="services__item">
            <div className="services__item__text">
              <p>Unlock growth online</p>
              <h3>SEO</h3>
            </div>
            <Link
              to="/categories/61987421aef344001cecfb35/6198742faef344001cecfb3b"
              className="services__item__img"
            >
              <img
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png"
                alt=""
              />
            </Link>
          </div>
          <div className="services__item">
            <div className="services__item__text">
              <p>Color your dreams</p>
              <h3>Illustration</h3>
            </div>
            <Link
              to="/categories/61977cebaef344001cecee6c/618d245d95d99f001c0c0ace"
              className="services__item__img"
            >
              <img src={illustration} alt="" />
            </Link>
          </div>
          <div className="services__item">
            <div className="services__item__text">
              <p>Go global</p>
              <h3>Translation</h3>
            </div>
            <Link
              to="/categories/61987497aef344001cecfb93/619874a4aef344001cecfb99"
              className="services__item__img"
            >
              <img src={translation} alt="" />
            </Link>
          </div>
          <div className="services__item">
            <div className="services__item__text">
              <p>Learn your business</p>
              <h3>Data Entry</h3>
            </div>
            <Link
              to="/categories/6198768aaef344001cecfd43/619876a6aef344001cecfd5d"
              className="services__item__img"
            >
              <img src={dataEntry} alt="" />
            </Link>
          </div>
          <div className="services__item">
            <div className="services__item__text">
              <p>Showcase your story</p>
              <h3>Book Covers</h3>
            </div>
            <Link
              to="/categories/61977cebaef344001cecee6c/61987364aef344001cecfa8d"
              className="services__item__img"
            >
              <img src={bookCovers} alt="" />
            </Link>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default ServicesComponent;
