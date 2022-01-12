import React, { useState, useEffect } from "react";
import api from "../../../utils/apiUtils";
import emptySearch from "../../../assets/empty-search-results.229c0d3.png";
import "antd/dist/antd.css";
import "./SearchPage.scss";
import ResultSearchComponent from "./ResultSearchComponent/ResultSearchComponent";
import { Link, useParams } from "react-router-dom";

function SearchPage() {
  const { name } = useParams();
  const [jobs, setJobs] = useState([]);
  const [usersDetail, setUsersDetail] = useState([]);

  const getJobsByName = async () => {
    const result = await api.get(`api/jobs/by-name?name=${name}`);
    const data = await result.data;
    setJobs(data);

    // Get User Created's Detail
    const getUserCreatedName = (users) => {
      users.forEach(async (user) => {
        const result = await api.get(`api/users/${user.userCreated}`);
        const data = await result.data;
        setUsersDetail((list) => [...list, data]);
      });
    };

    getUserCreatedName(data);
  };

  useEffect(() => {
    getJobsByName();
  }, []);

  const renderJobs = () => {
    if (jobs.length === 0) {
      return (
        <div className="searchpage__empty">
          <div className="searchpage__image">
            <img src={emptySearch} alt="" />
          </div>
          <div className="searchpage__text">
            <h1>No Services Found For Your Search</h1>
            <p>
              Try a new search or get a free quote for your project from our
              community of freelancers.
            </p>
          </div>
        </div>
      );
    } else {
      return jobs?.map((job, index) => (
        <div className="searchpage__content" key={index}>
          <div className="searchpage__header">
            <img src={job.image} alt="" />
          </div>
          <div className="searchpage__body">
            <div className="searchpage__body__user">
              <p>
                Author: <span>{usersDetail[index]?.name}</span>
              </p>
            </div>
            <div className="searchpage__body__info">
              <p>
                <Link to="/">
                  {job.name.length > 60
                    ? job.name.substr(0, 50) + "..."
                    : job.name}
                </Link>
              </p>
            </div>
            <div className="searchpage__body__rating">
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
          <div className="searchpage__footer">
            <div className="searchpage__footer__left">
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
            <div className="searchpage__footer__right">
              <p>
                STARTING AT <span>US${job.price}</span>
              </p>
            </div>
          </div>
        </div>
      ));
    }
  };

  return (
    <div className="searchpage">
      <div className="searchpage__result">
        <ResultSearchComponent result={name} results={jobs.length} />
      </div>
      <div className="searchpage__container">{renderJobs()}</div>
    </div>
  );
}

export default SearchPage;
