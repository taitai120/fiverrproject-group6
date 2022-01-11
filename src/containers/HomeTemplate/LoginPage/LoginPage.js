import React, { useState, useEffect } from "react";
import "./LoginPage.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actLoginUser } from "../../../redux/actions/UserAuthActions";
import { useHistory } from "react-router-dom";

function LoginPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { userLogin } = useSelector((state) => state.UserAuthReducer);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.email || !user.password) {
      alert("Email and password can not be empty!");
    } else {
      dispatch(actLoginUser(user, history));
    }
  };

  return (
    <div className="loginpage">
      <div className="loginpage__container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <h1>Sign In to Fiverr</h1>
          <div className="form-group">
            <input
              type="text"
              placeholder="Email"
              autoComplete="nope"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              autoComplete="nope"
              name="password"
              value={user.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-group group-btn">
            <button>Sign In</button>
            <button className="signup">
              <Link to="/join">Sign Up</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
