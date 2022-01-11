import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CreatorPage.scss";
import { useParams, useHistory } from "react-router-dom";
import trophyImg from "../../../assets/3-Trophy-70_alpha.gif";
import BreadcrumbComponent from "./BreadcrumbComponent/BreadcrumbComponent";
import TabsComponent from "./TabsComponent/TabsComponent";
import FaqComponent from "./FaqComponent/FaqComponent";
import CommentsComponent from "./CommentsComponent/CommentsComponent";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { actGetJobDetail } from "../../../redux/actions/JobDetailActions";
import { actGetComments } from "../../../redux/actions/CommentsActions";
import { actGetUserList } from "../../../redux/actions/UserListActions";
import api from "../../../utils/apiUtils";

function CreatorPage() {
  const { userCreator, id } = useParams();
  const history = useHistory();

  const dispatch = useDispatch();
  const { jobDetail } = useSelector((state) => state.JobDetailReducer);
  const { commentList } = useSelector((state) => state.CommentsReducer);
  const [userCreated, setUserCreated] = useState({});

  const getJobDetail = async (id) => {
    dispatch(actGetJobDetail(id));
  };

  const getComments = async (id) => {
    dispatch(actGetComments(id));
  };

  const getUserList = async (id) => {
    dispatch(actGetUserList());
  };

  const getUserCreator = async (id) => {
    const result = await api.get(`api/users/${id}`);
    const data = await result.data;
    setUserCreated(data);
  };

  useEffect(() => {
    getJobDetail(id);
    getComments(id);
  }, []);

  useEffect(() => {
    getUserCreator(jobDetail?.userCreated);
  }, [jobDetail]);

  const Rating = () => {
    return (
      <>
        <span>
          <svg
            width="16"
            height="15"
            viewBox="0 0 16 15"
            xmlns="http://www.w3.org/2000/svg"
            fill="#ffb33e"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
            ></path>
          </svg>
        </span>
      </>
    );
  };

  const renderRating = (rating) => {
    let rows = [];
    for (let i = 1; i <= Math.ceil(rating); i++) {
      rows.push(<Rating key={i} />);
    }
    return <>{rows}</>;
  };

  return (
    <div className="creatorpage">
      <div className="creatorpage__container">
        <div className="creatorpage__left">
          <div className="creatorpage__breadcrumb">
            <BreadcrumbComponent />
          </div>
          <div className="creatorpage__title">
            <h1>I will design your custom logo with brand style guides</h1>
          </div>
          <div className="creatorpage__usercreator">
            <Avatar className="avatar" icon={<UserOutlined />} />
            <p className="usercreator__name">{userCreator}</p>

            <p className="usercreator__rating">
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                ></path>
              </svg>
            </p>
            <p className="usercreator__orders">4 Orders in Queue</p>
          </div>
          <div className="creatorpage__left__container">
            <div className="creatorpage__left__content">
              <div className="creatorpage__left__trophy">
                <img src={trophyImg} alt="" />
                <p>
                  People keep coming back!
                  <span>
                    {userCreator} has an exceptional number of repeat buyers.
                  </span>
                </p>
              </div>
              <div className="creatorpage__left__image">
                <div className="creatorpage__image__container">
                  <img src={jobDetail?.image} alt="" />
                </div>
              </div>
              <div className="creatorpage__left__about__item">
                <h3>About This Gig</h3>
                <h4>
                  With 5+ years of experience in graphic designing and a big
                  focus on the logo. Let’s give your business the strong image
                  it deserves.
                </h4>
                <p>
                  Are you looking for your
                  <span className="text-weight"> "{jobDetail?.name}" </span>
                  Do you want to make your brand appear more interesting and
                  spark a sense of curiosity in your clients? with creating your
                  Logo and Brand Style Guides I guarantee you that I will make
                  exactly what you are wishing to have for your brand! We will
                  discuss the work together down to the smallest detail and you
                  can be sure that I'll keep in touch with you through the whole
                  designing process!
                </p>
                <ul className="text-weight">
                  <li>Clean High-Quality.</li>
                  <li>Friendly communication.</li>
                  <li>100% Customer Satisfaction.</li>
                  <li>Unlimited Revisions for every everyone.</li>
                </ul>
                <p>
                  If you already have your product and want to rebuild it or
                  want to continue with it with some update or suggestion and
                  brand style with the brand book you can just drop me a message
                  we can discuss it :)
                </p>
                <p className="text-weight">
                  If you have any question,
                  <br /> Feel free to★ Contact Me! ★I'll be happy to help !
                </p>
                <p className="text-weight">Best regards,</p>
                <p
                  style={{
                    color: "#ffb33e",
                    fontSize: "24px",
                    fontWeight: "500",
                  }}
                >
                  {userCreator}
                </p>
              </div>
              <div className="creatorpage__left__about__seller">
                <div className="about__seller__title">
                  <div className="seller__avatar">
                    <Avatar size={80} icon={<UserOutlined />} />
                  </div>
                  <div className="seller__detail">
                    <p>
                      Author: <span>{userCreator}</span>
                    </p>
                    <div className="seller__detail__rating">
                      {renderRating(jobDetail?.rating)}
                      <p>{jobDetail?.rating}</p>
                    </div>
                    <button>Contact Me</button>
                  </div>
                </div>
              </div>
              <div className="creatorpage__left__about__faq">
                <FaqComponent />
              </div>
              <div className="creatorpage__left__about__comments">
                <CommentsComponent commentList={commentList} />
              </div>
            </div>
          </div>
        </div>
        <div className="creatorpage__right">
          <TabsComponent cost={jobDetail.price} id={id} />
        </div>
      </div>
    </div>
  );
}

export default CreatorPage;
