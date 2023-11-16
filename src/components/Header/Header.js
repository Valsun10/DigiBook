import React from "react";
import profileIMG from "../assets/images/profile.png";
import logo from "../assets/images/Digi logo.png";
import "./Header.css";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

import backICON from "../assets/images/Polygon 39.png";
import { useDispatch } from "react-redux";
import { logout } from "../../Auth/authSlice";

const Header = () => {
  const location = useLocation();
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="wrapper-header">
      <div className="header-logo">
        {location.pathname === `/details/${id}` ? (
          <Link to="/dashboard" className="back-to-library-btn">
            <img src={backICON} alt="backToLibrary" />
            <p>Library</p>
          </Link>
        ) : (
          <img src={logo} alt="logo" className="logo" />
        )}
      </div>
      <div className="header-links">
        <Link
          to="/dashboard"
          className={
            isActive("/dashboard" || `/details/${id}`)
              ? "nav-link active"
              : "nav-link"
          }
        >
          LIBRARY
        </Link>
        <Link
          to="/settings"
          className={isActive("/settings") ? "nav-link active" : "nav-link"}
        >
          SETTINGS
        </Link>
      </div>
      <div className="profile">
        <div onClick={handleLogout}>
          <img src={profileIMG} alt="profileImage" className="profile-img" />
        </div>
      </div>
    </div>
  );
};

export default Header;
