import React, { useState, useEffect } from "react";
import api from "../../../utils/apiUtils";
import "./CategoryPage.scss";
import { Link } from "react-router-dom";

function CategoryPage() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const getJobs = async () => {
      const result = await api.get(`api/type-jobs`);
      const data = await result.data;
      setJobs(data);
    };

    getJobs();
  }, []);

  const renderSubJob = (subTypeList) => {
    return subTypeList?.map((item, index) => (
      <li key={index}>
        <Link to="/">{item.name}</Link>
      </li>
    ));
  };

  const renderJobType = () => {
    return jobs?.map((job, index) => (
      <div className="categoriespage__type" key={index}>
        <h2>
          <Link to={`/categories/${job._id}`}>{job.name}</Link>
        </h2>
        <ul>{renderSubJob(job.subTypeJobs)}</ul>
      </div>
    ));
  };

  return (
    <div className="categoriespage">
      <div className="categoriespage__container">
        <div className="categoriespage__title">
          <h1>Fiverr Gigs® Directory</h1>
          <p>One stop shop for all your needs</p>
        </div>
        <div className="categoriespage__content">{renderJobType()}</div>
      </div>
    </div>
  );
}

export default CategoryPage;
