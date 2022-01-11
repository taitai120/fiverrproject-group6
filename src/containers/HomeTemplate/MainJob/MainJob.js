import React, { useState, useEffect } from "react";
import "./MainJob.scss";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {
  graphicImg,
  digitalImg,
  writingImg,
  videoImg,
  musicImg,
  programmingImg,
  businessImg,
  lifestyleImg,
  dataImg,
} from "./exportMainJobImg";
import HowFiverWorksButton from "../components/HowFiverWorksButton/HowFiverWorksButton";
import { useDispatch, useSelector } from "react-redux";
import { actGetMainJob } from "../../../redux/actions/MainJobActions";

function MainJob() {
  const { id } = useParams();

  const [mainJob, setMainJob] = useState({});
  const [subJob, setSubJob] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const { data } = useSelector((state) => state.MainJobReducer);
  const dispatch = useDispatch();

  const headings = [
    {
      id: "61977cebaef344001cecee6c",
      head: "Graphics & Design",
      description: "A single place, millions of creative talents",
      image: graphicImg,
    },
    {
      id: "61987421aef344001cecfb35",
      head: "Digital Marketing",
      description: "Build your brand. Grow your business.",
      image: digitalImg,
    },
    {
      id: "61987497aef344001cecfb93",
      head: "Writing & Translation",
      description: "Get your words across—in any language.",
      image: writingImg,
    },
    {
      id: "6198753aaef344001cecfc19",
      head: "Video & Animation",
      description:
        "Your story's unique. Tell it differently with custom video & animation services",
      image: videoImg,
    },
    {
      id: "619875deaef344001cecfc9f",
      head: "Music & Audio",
      description:
        "You've got a message. Let the world hear it with music, audio & voice services",
      image: musicImg,
    },
    {
      id: "61987645aef344001cecfcf9",
      head: "Programming & Tech",
      description:
        "Get all the technical bells and whistles without paying for a programming degree",
      image: programmingImg,
    },
    {
      id: "6198768aaef344001cecfd43",
      head: "Data",
      description: "We make data easier to use",
      image: businessImg,
    },
    {
      id: "619876b0aef344001cecfd65",
      head: "Business",
      description:
        "Your business = your passion. Outsource smaller tasks so you can focus on growth",
      image: lifestyleImg,
    },
    {
      id: "619876f8aef344001cecfdab",
      head: "Lifestyle",
      description: "Improve your quality of life with style",
      image: dataImg,
    },
  ];

  const _find = () => headings?.find((heading) => heading.id === id);

  // const getMainJob = async (id) => {
  //   const result = await api.get(
  //     `api/jobs/by-type?type=${id}&skip=0&llimit=10`
  //   );
  //   const data = await result.data;

  //   setMainJob(data);
  // };

  // const getSubJob = async (id) => {
  //   const result = await api.get(`api/type-jobs/${id}`);
  //   const data = await result.data;
  //   console.log(data);
  //   setSubJob(data);
  // };

  useEffect(() => {
    dispatch(actGetMainJob(id));
  }, []);

  const renderJobSideBar = () => {
    return data?.subTypeJobs?.map((job, index) => (
      <li key={index}>
        <NavLink to={`/categories/${id}/${job._id}`}>{job.name}</NavLink>
      </li>
    ));
  };

  const renderJobMainBar = () => {
    return data?.subTypeJobs?.map((job, index) => (
      <div className="mainjob__mainbar__item" key={index}>
        <NavLink to={`/categories/${id}/${job._id}`}>
          <div className="mainbar__item__image">
            <img src={job.image ? job.image : _find().image} alt="" />
          </div>
          <p>{job.name}</p>
        </NavLink>
      </div>
    ));
  };

  return (
    <div className="mainjob">
      <div className="mainjob__container">
        <div className="mainjob__title">
          <h1>{_find().head}</h1>
          <p>{_find().description}</p>
          <HowFiverWorksButton />
        </div>
        <div className="mainjob__content">
          <div className="mainjob__sidebar">
            <div className="mainjob__sidebar__content">
              <h3>{data.name}</h3>
              <ul>{renderJobSideBar()}</ul>
            </div>
          </div>
          <div className="mainjob__mainbar">
            <div className="mainjob__mainbar__content">
              {renderJobMainBar()}
            </div>
          </div>
        </div>
      </div>
      <div className="mainjob__footer">
        <div className="mainjob__footer__container">
          <div className="mainjob__footer__item">
            <h3>
              Your <span>Terms</span>
            </h3>
            <p>
              Whatever you need to simplify your to do list, no matter your
              budget.
            </p>
          </div>
          <div className="mainjob__footer__item">
            <h3>
              Your <span>Timeline</span>
            </h3>
            <p>
              Find services based on your goals and deadlines, it’s that simple.
            </p>
          </div>
          <div className="mainjob__footer__item">
            <h3>
              Your <span>Safety</span>
            </h3>
            <p>
              Your payment is always secure, Fiverr is built to protect your
              peace of mind.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainJob;
