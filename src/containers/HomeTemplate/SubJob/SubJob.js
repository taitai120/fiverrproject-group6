import React, { useState, useEffect } from "react";
import "./SubJob.scss";
import { useParams } from "react-router-dom";
import api from "../../../utils/apiUtils";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";
import { actGetMainJob } from "../../../redux/actions/MainJobActions";
import {
  actGetSubJob,
  actGetTargetSubTypeJob,
  actGetListSubTypeJob,
} from "../../../redux/actions/SubJobActions";
import HowFiverWorksButton from "../components/HowFiverWorksButton/HowFiverWorksButton";

function SubJob() {
  const { id, subid } = useParams();

  const dispatch = useDispatch();
  const { data: main } = useSelector((state) => state.MainJobReducer);
  const { data: sub } = useSelector((state) => state.SubJobReducer);
  const { targetSubTypeJob } = useSelector((state) => state.SubJobReducer);
  const { listSubTypeJob } = useSelector((state) => state.SubJobReducer);
  // const { listUserCreated } = useSelector((state) => state.UserJobReducer);

  const [listUser, setListUser] = useState([]);

  const getUserCreatedName = (list) => {
    list.forEach(async (item) => {
      const result = await api.get(`api/users/${item.userCreated}`);
      const data = await result.data;
      setListUser((newlist) => [...newlist, data]);
    });
  };

  // const getSubJob = async () => {
  //   const result = await api.get(
  //     `api/jobs/by-sub-type?subType=${subid}&skip=0&llimit=10`
  //   );
  //   const data = await result.data;
  //   console.log(data);
  //   setSubJob(data);
  // };

  // const getMainJob = async () => {
  //   const result = await api.get(`api/type-jobs/${id}`);
  //   const data = await result.data;

  //   setMainJob(data);
  // };

  useEffect(() => {
    // getMainJob();
    // getSubJob();
    dispatch(actGetSubJob(subid));
    dispatch(actGetTargetSubTypeJob(subid));
    dispatch(actGetMainJob(id));
    dispatch(actGetListSubTypeJob(subid));
  }, []);

  useEffect(() => {
    getUserCreatedName(listSubTypeJob);
  }, [listSubTypeJob]);

  const renderListSubTypeJob = () => {
    return listSubTypeJob?.map((job, index) => (
      <div className="subjob__item" key={index}>
        <div className="subjob__header">
          <Link to={`/${listUser[index]?.name}/${job._id}`}>
            <img src={job.image} alt="" />
          </Link>
        </div>
        <div className="subjob__body">
          <div className="subjob__body__user">
            <p>
              Author: <span>{listUser[index]?.name}</span>
            </p>
          </div>
          <div className="subjob__body__info">
            <p>
              <Link to={`/${listUser[index]?.name}/${job._id}`}>
                {job.name.length > 60
                  ? job.name.substr(0, 50) + "..."
                  : job.name}
              </Link>
            </p>
          </div>
          <div className="subjob__body__rating">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1792 1792"
              width="15"
              height="15"
            >
              <path
                fill="currentColor"
                d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"
              ></path>
            </svg>
            <span>{job.rating.toFixed(1)}</span>
          </div>
        </div>
        <div className="subjob__footer">
          <div className="subjob__footer__left">
            <span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14.4469 1.95625C12.7344 0.496875 10.1875 0.759375 8.61561 2.38125L7.99999 3.01562L7.38436 2.38125C5.81561 0.759375 3.26561 0.496875 1.55311 1.95625C-0.409388 3.63125 -0.512513 6.6375 1.24374 8.45312L7.29061 14.6969C7.68124 15.1 8.31561 15.1 8.70624 14.6969L14.7531 8.45312C16.5125 6.6375 16.4094 3.63125 14.4469 1.95625Z"></path>
              </svg>
            </span>
          </div>
          <div className="subjob__footer__right">
            <p>
              STARTING AT <span>US${job.price}</span>
            </p>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="subjob">
      <div className="subjob__breadcrumb">
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <Link to="/">FIVERR</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to={`/categories/${id}`}>{main?.name}</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="subjob__container">
        <div className="subjob__title">
          <h1>{targetSubTypeJob?.name}</h1>
          <HowFiverWorksButton />
          <p>{listSubTypeJob?.length} services available</p>
        </div>
        <div className="subjob__content">{renderListSubTypeJob()}</div>
      </div>
    </div>
  );
}

export default SubJob;
