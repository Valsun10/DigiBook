import React, { useEffect, useState } from "react";
import logo from "../assets/images/Digi logo.png";
import groupIMG from "../assets/images/Group 19445.png";
import showPassIcon from "../assets/images/eye.png";
import "./RegisterPage.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register, reset } from "../../Auth/authSlice";
import { toast } from "react-toastify";
import LoadingSpinner from "../Spinner/LoadingSpinner";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [showPassword, setShowPassword] = useState({
    showFirst: false,
    showSecond: false,
  });
  const { errorMessage, isLoading, isError, isCompleted, token } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      toast.error(errorMessage);
    }

    if (isCompleted && token) {
      navigate("/login");
    }

    dispatch(reset());
  }, [token, isCompleted, isError, errorMessage, navigate, dispatch]);

  const resetInputs = () => {
    setUsername("");
    setPassword("");
    setRepeatPassword("");
  };

  const handleVisiblePasswordOne = () => {
    setShowPassword((state) => ({
      ...state,
      showFirst: !state.showFirst,
    }));
  };

  const handleVisiblePasswordTwo = () => {
    setShowPassword((state) => ({
      ...state,
      showSecond: !state.showSecond,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const regex = /^\w{4,20}$/;

    if (!regex.test(username)) {
      toast.warn(
        "The username must be between 4 and 20 characters long. No special symbols or empty spaces allowed!"
      );
    } else if (password.length < 6) {
      toast.warn("The password must be at least 6 characters long!");
    } else if (password !== repeatPassword) {
      toast.warn("The passwords don't match!");
      resetInputs();
    } else {
      const credentials = { username, password };
      dispatch(register(credentials));
      navigate("/login");
    }
  };

  return (
    <div className="wrapper-login">
      <div className="left-half">
        <img src={logo} alt="logo" />
        <h1>WELCOME TO THE BEST BOOK DATABASE!</h1>
        <h3>CREATE YOUR PROFILE</h3>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <div className="inputAndButton">
                <input
                  type={showPassword.showFirst ? "text" : "password"}
                  id="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <div
                  className="show-password"
                  onClick={handleVisiblePasswordOne}
                >
                  <img src={showPassIcon} alt="showPassword" />
                </div>
              </div>
              <div className="password">
                <label htmlFor="repeat-password">Repeat password</label>
                <div className="inputAndButton">
                  <input
                    type={showPassword.showSecond ? "text" : "password"}
                    id="repeat-password"
                    name="repeat-password"
                    onChange={(e) => setRepeatPassword(e.target.value)}
                    value={repeatPassword}
                  />
                  <div
                    className="show-password"
                    onClick={handleVisiblePasswordTwo}
                  >
                    <img src={showPassIcon} alt="showPassword" />
                  </div>
                </div>
              </div>
            </div>
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <button className="btn-sign-up">SIGN UP</button>
            )}
            <p>
              You have an account?{" "}
              <Link to="/login" className="log-in-here">
                LOG IN HERE
              </Link>
            </p>
          </form>
        </div>
      </div>

      <div className="right-half">
        <img src={groupIMG} alt="login-img" />
      </div>
    </div>
  );
};

export default RegisterPage;
