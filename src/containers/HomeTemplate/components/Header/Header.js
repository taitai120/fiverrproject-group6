import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./header.scss";
import api from "../../../../utils/apiUtils";
import InputSearch from "../InputSearch/InputSearch";
import { Link, NavLink, useHistory } from "react-router-dom";
import { memo } from "react";
import { Avatar, Badge } from "antd";
import { actLogout } from "../../../../redux/actions/UserAuthActions";
import "antd/dist/antd.css";

function Header(props) {
  const { exact } = props;
  const [jobs, setJobs] = useState([]);
  const [isScroll, setIsScroll] = useState(false);
  const onlyHeaderSearch = true;
  const [isToggle, setIsToggle] = useState(false);
  const user = JSON.parse(localStorage.getItem("User"));
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(false);
      } else {
        setIsScroll(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const onLoad = () => {
      setIsScroll(!isScroll);
    };

    window.addEventListener("load", onLoad);

    return () => window.removeEventListener("load", onLoad);
  }, []);

  useEffect(() => {
    const getJobs = async () => {
      const result = await api.get("/api/type-jobs");
      const data = await result.data;
      setJobs(data);
    };

    getJobs();
  }, []);

  const preventScroll = () => {
    if (isToggle) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  };

  useEffect(() => {
    preventScroll();
  }, [isToggle]);

  const Logout = () => {
    dispatch(actLogout(history));
  };

  const renderJobs = () => {
    return jobs?.map((job, index) => (
      <li key={index}>
        <NavLink to={`/categories/${job._id}`}>{job.name}</NavLink>
      </li>
    ));
  };

  const renderNav = () => {
    if (!user) {
      return (
        <>
          <ul>
            <li>
              <NavLink to="/">Become a seller</NavLink>
            </li>
            <li>
              <NavLink to="/login">Sign In</NavLink>
            </li>
            <li>
              <NavLink className="join" to="/register">
                Join
              </NavLink>
            </li>
          </ul>
        </>
      );
    } else {
      return (
        <>
          <ul>
            <li>
              <button onClick={() => Logout()}>Logout</button>
            </li>
            <li>
              <NavLink to="/profile">
                <span className="avatar-item">
                  <Badge dot>
                    <Avatar shape="circle">
                      {user.email.slice(0, 1).toUpperCase()}
                    </Avatar>
                  </Badge>
                </span>
              </NavLink>
            </li>
          </ul>
        </>
      );
    }
  };

  return (
    <>
      <div
        className={`header-toggle-nav ${isToggle ? "shown-header-toggle" : ""}`}
      >
        <div className="header-toggle-nav-btn">
          {user ? (
            <button onClick={() => Logout()}>Logout</button>
          ) : (
            <button className="signin">
              <Link to="/login">Sign In</Link>
            </button>
          )}
        </div>
        <ul>{renderJobs()}</ul>
      </div>
      <div
        className={`header-toggle-nav-overlay ${
          isToggle ? "shown-header-overlay" : ""
        }`}
        onClick={() => setIsToggle(!isToggle)}
      ></div>
      <div className={`main-header ${isScroll && exact ? "" : "shown"}`}>
        <div className="header">
          <div className="header-wrapper">
            <button
              className="header-menu"
              onClick={() => setIsToggle(!isToggle)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="19"
                viewBox="0 0 23 19"
              >
                <rect y="16" width="23" height="3" rx="1.5" fill="#555"></rect>
                <rect width="23" height="3" rx="1.5" fill="#555"></rect>
                <rect y="8" width="23" height="3" rx="1.5" fill="#555"></rect>
              </svg>
            </button>
            <NavLink to="/" className="header-icon">
              <svg
                width="89"
                height="27"
                viewBox="0 0 89 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z"></path>
                <g fill="#1dbf73">
                  <path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z"></path>
                </g>
              </svg>
            </NavLink>
            <InputSearch onlyHeaderSearch={onlyHeaderSearch}></InputSearch>
            <nav className="header-nav">{renderNav()}</nav>
          </div>
        </div>
        <div className="categories">
          <nav className="categories-nav">
            <ul>{renderJobs()}</ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default memo(Header);
