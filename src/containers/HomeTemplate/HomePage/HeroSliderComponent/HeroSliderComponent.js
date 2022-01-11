import InputSearch from "../../components/InputSearch/InputSearch";
import background_1 from "../../../../assets/bg-hero-1-1792-x1.jfif";
import background_2 from "../../../../assets/bg-hero-2-1792-x1.jfif";
import background_3 from "../../../../assets/bg-hero-3-1792-x1.jfif";
import background_4 from "../../../../assets/bg-hero-4-1792-x1.jfif";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HeroSliderComponent.scss";

export default function HeroSliderComponent() {
  const settings = {
    fade: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div
      className="hero__slider"
      // style={{
      //   backgroundImage: `url(${background_1})`,
      //   backgroundPosition: "center",
      //   backgroundSize: "cover",
      //   backgroundRepeat: "no-repeat",
      // }}
    >
      <Slider {...settings} className="hero__slider__background">
        <div>
          <img src={background_1} />
          <h3>Gabrielle, Video Editor</h3>
        </div>
        <div>
          <img src={background_2} />
          <h3>Andrea, Fashion Desginer</h3>
        </div>
        <div>
          <img src={background_3} />
          <h3>Moon, Marketing Expert</h3>
        </div>
        <div>
          <img src={background_4} />
          <h3>Zach, Bar Owner</h3>
        </div>
      </Slider>
      <div className="hero__slider__container">
        <div className="hero__slider__left">
          <h1>
            Find the perfect <span className="freelance">freelance </span>
            services for your business
          </h1>
          <InputSearch className="hero__slider__search"></InputSearch>
          <p>
            Popular:
            <span className="tags">Website Design</span>
            <span className="tags">WordPress</span>
            <span className="tags">Logo Design</span>
            <span className="tags">NFT Art</span>
          </p>
        </div>
        <div className="hero__slider__right"></div>
      </div>
    </div>
  );
}
