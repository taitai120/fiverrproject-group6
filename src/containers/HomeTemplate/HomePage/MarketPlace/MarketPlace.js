import React from "react";
import "./MarketPlace.scss";
import { objectSVG } from "./exportMarketPlace";
import { Link } from "react-router-dom";

function MarketPlace() {
  return (
    <div className="marketplace">
      <div className="marketplace__container">
        <h1>Explore the marketplace</h1>
        <div className="marketplace__content">
          <ul>
            <li>
              <Link to="/categories/61977cebaef344001cecee6c">
                <img src={objectSVG.graphicDesignSVG} alt="" />
                Graphics & Design
              </Link>
            </li>
            <li>
              <Link to="/categories/61987421aef344001cecfb35">
                <img src={objectSVG.onlineMarketingSVG} alt="" />
                Digital Marketing
              </Link>
            </li>
            <li>
              <Link to="/categories/61987497aef344001cecfb93">
                <img src={objectSVG.writingTranslationSVG} alt="" />
                Writing & Translation
              </Link>
            </li>
            <li>
              <Link to="/categories/6198753aaef344001cecfc19">
                <img src={objectSVG.videoAnimationSVG} alt="" />
                Video & Animation
              </Link>
            </li>
            <li>
              <Link to="/categories/619875deaef344001cecfc9f">
                <img src={objectSVG.musicAudioSVG} alt="" />
                Music & Audio
              </Link>
            </li>
            <li>
              <Link to="/categories/61987645aef344001cecfcf9">
                <img src={objectSVG.programmingSVG} alt="" />
                Programming & Tech
              </Link>
            </li>
            <li>
              <Link to="/categories/619876b0aef344001cecfd65">
                <img src={objectSVG.businessSVG} alt="" />
                Business
              </Link>
            </li>
            <li>
              <Link to="/categories/619876f8aef344001cecfdab">
                <img src={objectSVG.lifeStyleSVG} alt="" />
                Lifestyle
              </Link>
            </li>
            <li>
              <Link to="/categories/6198768aaef344001cecfd43">
                <img src={objectSVG.dataSVG} alt="" />
                Data
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MarketPlace;
