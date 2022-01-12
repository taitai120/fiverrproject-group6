import React, { useState } from "react";
import "./RegisterPage.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actRegisterUser } from "../../../redux/actions/UserAuthActions";
import { useHistory } from "react-router-dom";

function RegisterPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  // const { userLogin } = useSelector((state) => state.UserAuthReducer);

  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    birthday: "2022-11-01",
    gender: "male",
    role: "CLIENT",
    skill: [],
    certification: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !newUser.name ||
      !newUser.email ||
      !newUser.password ||
      !newUser.phone
    ) {
      alert("Please fill fully your information");
    } else {
      dispatch(actRegisterUser(newUser, history));
    }
  };

  return (
    <div className="registerpage">
      <div className="registerpage__container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <h1>Sign Up to Fiverr</h1>
          <div className="form-group">
            <input
              type="text"
              placeholder="Username"
              autoComplete="nope"
              name="name"
              value={newUser.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Email"
              autoComplete="nope"
              name="email"
              value={newUser.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              autoComplete="nope"
              name="password"
              value={newUser.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              placeholder="Phone number"
              autoComplete="nope"
              name="phone"
              value={newUser.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group group-btn">
            <button>Sign Up</button>
            <button className="signin">
              <Link to="/login">Sign In</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
