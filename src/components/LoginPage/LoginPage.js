import React, { useEffect, useState } from "react";
import "./LoginPage.css";
import logo from "../assets/images/Digi logo.png";
import groupIMG from "../assets/images/Group 19445.png";
import showPassIcon from "../assets/images/eye.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login, reset } from "../../Auth/authSlice";
import LoadingSpinner from "../Spinner/LoadingSpinner";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { token, isLoading, isCompleted, errorMessage, isError } = useSelector(
    (state) => state.auth
  );
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const URLtoGo = location.state?.from?.pathname || "/dashboard";
  const isEmpty = !username || !password;

  useEffect(() => {
    if (isError) {
      toast.error(errorMessage);
    }

    if (isCompleted && token) {
      navigate(URLtoGo, { replace: true });
    }
    dispatch(reset());
  }, [token, navigate, isCompleted, dispatch, URLtoGo, errorMessage]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const credentials = { username, password };
    dispatch(login(credentials));
  };

  const handleVisiblePassword = () => {
    setShowPassword((state) => !state);
  };

  return (
    <div className="wrapper-login">
      <div className="left-half">
        <img src={logo} alt="logo" />
        <h1>WELCOME BACK!</h1>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                value={username}
              />
            </div>
            <div className="password">
              <label htmlFor="txtpassword">Password</label>
              <div className="inputAndButton">
                <input
                  type={!showPassword ? "password" : "text"}
                  id="txtpassword"
                  name="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  value={password}
                />
                <div className="show-password" onClick={handleVisiblePassword}>
                  <img src={showPassIcon} alt="showPassIcon" />
                </div>
              </div>
              <span>Recover password</span>
            </div>
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <button className="btn" type="submit" disabled={isEmpty}>
                LOG IN
              </button>
            )}
            <p>
              You don't have an account?
              <Link to="/register" className="sign-up">
                SIGN UP HERE
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

export default LoginPage;
